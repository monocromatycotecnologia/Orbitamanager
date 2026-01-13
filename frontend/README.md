# Frontend - Orbitamanager

## Descripción
Interfaz de usuario para el ERP Orbitamanager desarrollada con React.

## Requisitos
- Node.js v16+
- npm

## Instalación

```bash
# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
```

## Ejecución

```bash
# Modo desarrollo
npm start

# Compilar para producción
npm build
```

## Estructura

```
frontend/
├── public/          # Archivos públicos
├── src/
│   ├── components/  # Componentes React reutilizables
│   ├── pages/       # Páginas principales
│   ├── context/     # Contexto para estado global
│   ├── styles/      # Estilos CSS
│   ├── App.js       # Componente principal
│   └── index.js     # Punto de entrada
└── package.json
```

## Características Implementadas

- ✅ Autenticación con JWT
- ✅ Layout Dashboard
- ✅ Navegación por secciones
- ⏳ Módulos en desarrollo

## Tecnologías

- React 18
- React Router DOM 6
- Tailwind CSS
- Axios
- jsPDF