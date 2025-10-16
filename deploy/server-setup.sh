#!/bin/bash

# Скрипт для первоначальной настройки сервера
# Запустите на сервере: bash server-setup.sh

set -e

echo "🚀 Настройка сервера для деплоя AISYA..."

# Обновление системы
echo "📦 Обновление пакетов..."
apt-get update
apt-get upgrade -y

# Установка Docker
if ! command -v docker &> /dev/null; then
    echo "🐳 Установка Docker..."
    curl -fsSL https://get.docker.com -o get-docker.sh
    sh get-docker.sh
    rm get-docker.sh
else
    echo "✅ Docker уже установлен"
fi

# Установка Docker Compose
if ! command -v docker-compose &> /dev/null; then
    echo "🐳 Установка Docker Compose..."
    curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    chmod +x /usr/local/bin/docker-compose
else
    echo "✅ Docker Compose уже установлен"
fi

# Создание директории для проекта
echo "📁 Создание директории проекта..."
mkdir -p /opt/aisya
cd /opt/aisya

# Создание .env файла
echo "📝 Создание .env файла..."
cat > .env << 'EOF'
DOCKER_USERNAME=your_dockerhub_username
EOF

# Создание docker-compose.yml
echo "📝 Создание docker-compose.yml..."
cat > docker-compose.yml << 'EOF'
version: '3.8'

services:
  aisya-landing:
    image: ${DOCKER_USERNAME}/aisya-landing:latest
    container_name: aisya-landing
    restart: always
    ports:
      - "3000:80"
    environment:
      - NODE_ENV=production
    networks:
      - aisya-network
    healthcheck:
      test: ["CMD", "wget", "--quiet", "--tries=1", "--spider", "http://localhost:80"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s

networks:
  aisya-network:
    driver: bridge
EOF

echo ""
echo "✅ Сервер настроен!"
echo ""
echo "📌 Следующие шаги:"
echo "1. Отредактируйте /opt/aisya/.env и укажите DOCKER_USERNAME"
echo "2. Настройте GitHub Secrets в репозитории:"
echo "   - DOCKER_USERNAME: ваш Docker Hub username"
echo "   - DOCKER_PASSWORD: ваш Docker Hub access token"
echo "   - SERVER_HOST: IP вашего сервера"
echo "   - SERVER_USER: пользователь SSH (обычно root)"
echo "   - SSH_PRIVATE_KEY: приватный SSH ключ для доступа к серверу"
echo "3. Сделайте git push в ветку main для автоматического деплоя"
echo ""
echo "🎉 Готово!"
