# Carrito de Compras | E-commerce Frontend

Aplicación frontend de e-commerce construida con **Next.js + TypeScript**, enfocada en buenas prácticas de estado global y experiencia de usuario en carrito lateral (mini cart).

## Resumen

Este proyecto consume productos desde `DummyJSON`, muestra un catálogo responsive y permite:

- agregar productos al carrito,
- visualizar el carrito en un `Drawer`,
- eliminar productos,
- persistir el estado del carrito entre recargas con `localStorage` (Zustand `persist`).

## Stack tecnológico

- `Next.js 15` (Pages Router + Turbopack)
- `React 19`
- `TypeScript`
- `Tailwind CSS`
- `Zustand` (estado global + persistencia)
- `React Icons`
- `ESLint`

## Funcionalidades principales

- Catálogo de productos con `fetch` a `https://dummyjson.com/products`
- Tarjetas de producto con imagen, descripción y precio
- Mini carrito lateral con animación de entrada/salida
- Conteo de ítems en header
- Cálculo de total en tiempo real
- Persistencia del carrito en navegador
- Manejo de estado de carga

## Arquitectura del proyecto

```text
src/
  components/
    minicart/      # carrito y item del carrito
    products/      # listado y tarjeta de producto
    ui/            # header y drawer
  hooks/           # hook para evitar hydration mismatch en estado persistido
  pages/           # entry points (_app, _document, index)
  store/           # Zustand stores (productos y carrito)
  types/           # contratos TypeScript
```

## Instalación y ejecución local

```bash
npm install
npm run dev
```

Abrir en `http://localhost:3000`.

## Scripts disponibles

```bash
npm run dev    # entorno de desarrollo
npm run build  # build de producción
npm run start  # ejecutar build
npm run lint   # análisis estático con ESLint
```

## Decisiones técnicas destacadas

- **Estado global desacoplado con Zustand** para mantener componentes de UI simples.
- **Persistencia del carrito** con middleware `persist` para retener datos tras recarga.
- **Hook de hidratación (`useFromStore`)** para sincronizar estado persistido en cliente y evitar inconsistencias en SSR/CSR.
- **Configuración de imágenes remotas en Next.js** para fuentes externas.

## Posibles mejoras (roadmap)

- Incrementar/disminuir cantidad por producto en el carrito
- Vaciar carrito completo
- Manejo visual de errores al fallar la API
- Skeleton loaders en catálogo
- Tests unitarios/integración (store + UI)
- Deploy público en Vercel con URL en este README


