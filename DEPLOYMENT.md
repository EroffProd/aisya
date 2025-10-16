# 🚀 Инструкция по деплою AISYA Landing

## Архитектура деплоя

```
GitHub (main branch)
    ↓ (push trigger)
GitHub Actions
    ↓ (build & push)
Docker Hub
    ↓ (ssh deploy)
Production Server (Docker Compose)
```

## 📋 Предварительные требования

1. **Docker Hub аккаунт**
   - Зарегистрируйтесь на https://hub.docker.com
   - Создайте Access Token: Account Settings → Security → New Access Token

2. **VPS/Сервер** с доступом по SSH
   - Ubuntu 20.04+ (рекомендуется)
   - Минимум 1GB RAM
   - Docker и Docker Compose установлены

3. **GitHub репозиторий**
   - Форкнут или клонирован проект

## 🔧 Настройка сервера

### Шаг 1: Подключитесь к серверу

```bash
ssh root@your-server-ip
```

### Шаг 2: Запустите скрипт установки

```bash
curl -fsSL https://raw.githubusercontent.com/EroffProd/aisya/main/deploy/server-setup.sh | bash
```

Или вручную:

```bash
# Установка Docker
curl -fsSL https://get.docker.com | sh

# Установка Docker Compose
curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose

# Создание директории проекта
mkdir -p /opt/aisya
cd /opt/aisya
```

### Шаг 3: Настройте .env на сервере

```bash
nano /opt/aisya/.env
```

Добавьте:
```env
DOCKER_USERNAME=your_dockerhub_username
```

## 🔐 Настройка GitHub Secrets

Перейдите в Settings → Secrets and variables → Actions → New repository secret

Создайте следующие секреты:

| Secret Name | Описание | Пример |
|------------|----------|--------|
| `DOCKER_USERNAME` | Ваш Docker Hub username | `myusername` |
| `DOCKER_PASSWORD` | Docker Hub Access Token | `dckr_pat_abc123...` |
| `SERVER_HOST` | IP адрес вашего сервера | `123.45.67.89` |
| `SERVER_USER` | SSH пользователь | `root` |
| `SSH_PRIVATE_KEY` | Приватный SSH ключ | `-----BEGIN RSA PRIVATE KEY-----...` |

### Генерация SSH ключа (если нет)

```bash
ssh-keygen -t rsa -b 4096 -C "github-actions"
cat ~/.ssh/id_rsa.pub  # Скопируйте и добавьте на сервер в ~/.ssh/authorized_keys
cat ~/.ssh/id_rsa      # Скопируйте в GitHub Secret SSH_PRIVATE_KEY
```

## 🚀 Деплой

### Автоматический деплой

После настройки секретов, каждый push в ветку `main` будет автоматически:

1. Собирать Docker образ
2. Пушить в Docker Hub
3. Подключаться к серверу по SSH
4. Обновлять контейнер

```bash
git add .
git commit -m "Deploy to production"
git push origin main
```

### Ручной деплой

На сервере:

```bash
cd /opt/aisya
docker-compose pull
docker-compose up -d --force-recreate
```

## 📊 Мониторинг

### Проверка статуса

```bash
# Статус контейнеров
docker-compose ps

# Логи
docker-compose logs -f aisya-landing

# Проверка здоровья
docker inspect aisya-landing | grep Health -A 10
```

### Просмотр логов деплоя

GitHub → Actions → выберите последний workflow run

## 🔄 Обновление

### Откат к предыдущей версии

```bash
cd /opt/aisya

# Остановить текущий контейнер
docker-compose down

# Откатиться на предыдущий образ
docker pull your_dockerhub_username/aisya-landing:previous-tag

# Запустить
docker-compose up -d
```

## 🌐 Настройка Nginx (опционально)

Для использования домена и SSL:

```bash
apt-get install nginx certbot python3-certbot-nginx

# Создайте конфиг Nginx
nano /etc/nginx/sites-available/aisya
```

```nginx
server {
    listen 80;
    server_name aisya.online www.aisya.online;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Включить конфиг
ln -s /etc/nginx/sites-available/aisya /etc/nginx/sites-enabled/
nginx -t
systemctl reload nginx

# Получить SSL сертификат
certbot --nginx -d aisya.online -d www.aisya.online
```

## 📝 Структура проекта

```
chat/
├── .github/
│   └── workflows/
│       └── deploy.yml           # GitHub Actions workflow
├── deploy/
│   └── server-setup.sh          # Скрипт настройки сервера
├── docker-compose.yml           # Docker Compose конфигурация
├── Dockerfile                   # Инструкции сборки образа
├── nginx.conf                   # Nginx конфигурация для контейнера
└── .env.example                 # Пример переменных окружения
```

## ❓ Troubleshooting

### Проблема: Container fails to start

```bash
docker-compose logs aisya-landing
docker inspect aisya-landing
```

### Проблема: GitHub Actions не может подключиться к серверу

- Проверьте SSH_PRIVATE_KEY в secrets
- Убедитесь, что публичный ключ добавлен в `~/.ssh/authorized_keys` на сервере
- Проверьте firewall: `ufw allow 22`

### Проблема: Docker Hub push fails

- Проверьте DOCKER_USERNAME и DOCKER_PASSWORD
- Убедитесь, что токен имеет права Read/Write

## 📞 Контакты

- Email: ai-prod@aisya.online
- WhatsApp: +7 (927) 255-05-32
- GitHub: https://github.com/EroffProd/aisya
