# 📈 Terminal Bursátil :: NVIDIA & AMD Feed

Aplicación full-stack de seguimiento automatizado de noticias financieras y tecnológicas enfocada en **NVIDIA** y **AMD**. Diseñada con una interfaz moderna tipo terminal financiero y modo oscuro, ideal para inversores y entusiastas del sector de semiconductores.

![Next.js App Router](https://img.shields.io/badge/Frontend-Next.js%2014%20(App%20Router)-black?style=flat&logo=next.js)
![Spring Boot](https://img.shields.io/badge/Backend-Spring%20Boot%2021-brightgreen?style=flat&logo=springboot)
![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind%20CSS-38BDF8?style=flat&logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/Language-TypeScript-3178C6?style=flat&logo=typescript)

---

## 🚀 Características Principales

- **Agregador RSS Automatizado**: El backend consume y parsea en tiempo real los canales RSS de actualidad bursátil para NVIDIA y AMD mediante la librería Java ROME.
- **API REST Robusta**: Endpoints limpios desarrollados en Spring Boot con soporte CORS y filtrado por compañía.
- **Interfaz Tipo Terminal**: Diseño UI minimalista y profesional en modo oscuro utilizando Tailwind CSS.
- **Filtrado Dinámico**: Pestañas interactivas en el cliente para alternar instantáneamente entre noticias de NVIDIA, AMD o la vista conjunta.
- **Optimización SSR**: Carga inicial rápida en el servidor con Next.js App Router y revalidación automática de caché.

---

## 🛠️ Stack Tecnológico

### Backend (`/backend`)
- **Java 21**
- **Spring Boot** (Spring Web)
- **ROME Tools** (Parser de feeds RSS/Atom)
- **Maven** (Gestión de dependencias)

### Frontend (`/frontend`)
- **Next.js** (App Router & Server Components)
- **TypeScript**
- **Tailwind CSS**

---

## 📁 Estructura del Proyecto

```text
terminal-bursatil/
├── backend/          # API REST en Spring Boot
│   ├── src/main/java/com/simplecraft/bursatil/
│   │   ├── controller/   # Endpoints REST (/api/news)
│   │   ├── model/        # Estructura de datos (NewsItem)
│   │   └── service/      # Lógica de lectura y parseo RSS (RssService)
│   └── pom.xml
└── frontend/         # Panel de control en Next.js
    ├── app/          # Páginas y layout global
    ├── components/   # Componentes UI (DashboardClient, NewsCard)
    ├── services/     # Comunicación HTTP con el backend
    └── types/        # Definiciones de TypeScript
```

⚙️ Configuración y Ejecución LocalSigue estos pasos para arrancar el entorno completo en tu máquina local:

1. Clonar el repositorioBashgit clone [https://github.com/gestionarlaweb/terminal-bursatil-NextJS.git](https://github.com/gestionarlaweb/terminal-bursatil-NextJS.git)

cd terminal-bursatil

2. Arrancar el Backend (Spring Boot) Entra en la carpeta del backend y ejecuta el proyecto

mvn spring-boot:run

(El servidor se iniciará en http://localhost:8080)

3. Arrancar el Frontend (Next.js)Abre otra pestaña de la terminal, entra en la carpeta del frontend, instala dependencias y arranca en desarrollo

npm install
npm run dev

(La aplicación web estará disponible en http://localhost:3000)

📡 Endpoints de la API

OpcionalesGET/api/news

Devuelve todas las noticias combinadas-GET/api/news?company=NVIDIA



Devuelve noticias exclusivas de NVIDIAcompany (NVIDIA / AMD)

GET/api/news?company=AMDDevuelve noticias exclusivas de AMDcompany (NVIDIA / AMD)

💡 AutorCreated by: 
David Rabassa