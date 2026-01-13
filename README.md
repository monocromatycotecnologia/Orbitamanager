# Orbitamanager - ERP para Mono Cromat & Co.

## 📊 Descripción del Proyecto

Orbitamanager es un ERP completo diseñado para gestionar todos los aspectos del negocio Mono Cromat & Co. desde una única plataforma.

## ✨ Características Principales

### 1. Dashboard
- Informes en tiempo real
- KPIs y métricas clave
- Gráficos de ventas y análisis

### 2. Gestión de Ventas
- Crear cotizaciones
- Crear recibos de venta
- Convertir cotizaciones en ventas
- Editar cotizaciones y recibos
- Exportar a PDF

### 3. Gestión Financiera
- Cuentas por cobrar
- Cuentas por pagar
- Agregar abonos
- Restar del saldo

### 4. Base de Datos
- Información de clientes
- Información de proveedores
- Historial de transacciones

### 5. Inventario
- Stock e inventario de materia prima
- Control de cantidades
- Alertas de stock bajo

### 6. Planificación y Control
- Deadlines
- Cronograma de actividades
- Calendario editorial para redes sociales

### 7. Automatización
- Envío de emails automático (cotizaciones y recibos)
- Notificaciones de eventos
- Recordatorios

## 🛠️ Stack Tecnológico

- **Backend:** Node.js + Express + PostgreSQL
- **Frontend:** React + Tailwind CSS
- **Autenticación:** JWT
- **Exportación:** PDF con jsPDF
- **Email:** Nodemailer
- **Estado:** Redux o Context API

## 📁 Estructura del Proyecto

```
Orbitamanager/
├── backend/          # API REST y lógica del servidor
├── frontend/         # Aplicación React
├── .gitignore
├── .env.example
├── README.md
└── package.json
```

## 🚀 Inicio Rápido

### Backend
```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm start
```

## 📝 Licencia

Proyecto privado para Mono Cromat & Co.

## 👤 Propietario

monocromatycotecnologia