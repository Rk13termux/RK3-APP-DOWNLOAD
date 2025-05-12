"use client";

import React from "react";

const galleryItems = [
  { type: "image", src: "/assets/images/screen1.png", alt: "Pantalla principal" },
  { type: "image", src: "/assets/images/screen2.png", alt: "Funcionalidad X" },
  { type: "image", src: "/assets/images/screen3.png", alt: "Galería de fotos" },
  { type: "video", src: "/assets/videos/preview1.mp4", alt: "Demo rápido" },
];

const updates = {
  version: "1.2.3",
  date: "May 12, 2025",
  changes: [
    "🔧 Mejora en el rendimiento general",
    "🐛 Corrección de errores de sincronización",
    "✨ Nuevas animaciones de interfaz",
  ],
};

const testimonials = [
  {
    name: "María G.",
    avatar: "/assets/images/avatar1.jpg",
    comment: "¡Increíble actualización! Mucho más rápida y estable.",
  },
  {
    name: "Carlos P.",
    avatar: "/assets/images/avatar2.jpg",
    comment: "El nuevo diseño es impresionante. ¡Me encanta!",
  },
  {
    name: "Luisa M.",
    avatar: "/assets/images/avatar3.jpg",
    comment: "Excelente trabajo, las animaciones se ven de lujo.",
  },
];

const StarIcon = () => (
  <svg
    className="w-5 h-5 text-primary"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.951a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.287 3.951c.3.921-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.175 0l-3.36 2.44c-.785.57-1.84-.197-1.54-1.118l1.287-3.951a1 1 0 00-.364-1.118L2.075 9.378c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.951z" />
  </svg>
);

export default function Home() {
  return (
    <main className="bg-background text-white min-h-screen">
      {/* Hero */}
      <section className="py-16 px-4 text-center">
        <h1 className="text-5xl font-bold mb-2">
          NombreApp{" "}
          <span className="ml-2 inline-block bg-primary text-black text-sm font-medium uppercase px-2 py-1 rounded">
            Exclusivo
          </span>
        </h1>
        <div className="flex justify-center items-center mb-6 space-x-1">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} />
          ))}
        </div>
        <a
          href="#"
          className="inline-block bg-primary text-black font-semibold py-3 px-6 rounded-lg shadow hover:bg-red-600 transition"
        >
          Descargar última versión
        </a>
        <p className="mt-4 text-lg text-gray-300">
          Sé el primero en probar las novedades de NombreApp
        </p>
      </section>

      {/* Galería */}
      <section className="py-10 px-4">
        <h2 className="text-3xl font-semibold mb-4">Galería</h2>
        <div className="flex overflow-x-scroll space-x-4 pb-4">
          {galleryItems.map((item, i) =>
            item.type === "image" ? (
              <img
                key={i}
                src={item.src}
                alt={item.alt}
                className="h-60 rounded-lg shadow-lg flex-shrink-0"
              />
            ) : (
              <video
                key={i}
                src={item.src}
                className="h-60 rounded-lg shadow-lg flex-shrink-0"
                controls
                muted
                loop
                poster="/assets/images/screen1.png"
              />
            )
          )}
        </div>
      </section>

      {/* What’s New */}
      <section className="py-10 px-4 bg-gray-900">
        <h2 className="text-3xl font-semibold mb-2">
          ¿Qué hay de nuevo en la versión {updates.version}?
        </h2>
        <p className="text-sm text-gray-400 mb-4">{updates.date}</p>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          {updates.changes.map((change, i) => (
            <li key={i}>{change}</li>
          ))}
        </ul>
      </section>

      {/* Testimonios */}
      <section className="py-10 px-4">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Lo que dicen nuestros usuarios
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-gray-800 p-6 rounded-lg text-center"
            >
              <img
                src={t.avatar}
                alt={t.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <div className="flex justify-center items-center mb-2 space-x-1">
                {[...Array(5)].map((_, j) => (
                  <StarIcon key={j} />
                ))}
              </div>
              <p className="text-gray-300">&ldquo;{t.comment}&rdquo;</p>
              <p className="mt-2 font-medium">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Secundaria */}
      <section className="py-10 px-4 text-center">
        <a
          href="#"
          className="inline-block bg-primary text-black font-semibold py-3 px-6 rounded-lg shadow hover:bg-red-600 transition"
        >
          Descargar última versión
        </a>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 bg-gray-900 text-center text-gray-500 text-sm">
        <p>
          <a href="/privacy" className="hover:underline">
            Política de privacidad
          </a>{" "}
          |{" "}
          <a href="/terms" className="hover:underline">
            Términos de servicio
          </a>
        </p>
        <div className="flex justify-center items-center space-x-4 mt-4">
          {/* Sustituye estos con tus propios SVGs o iconos */}
          <a href="#" aria-label="Twitter">
            <svg className="w-6 h-6" /* ... */ />
          </a>
          <a href="#" aria-label="Telegram">
            <svg className="w-6 h-6" /* ... */ />
          </a>
          <a href="#" aria-label="Instagram">
            <svg className="w-6 h-6" /* ... */ />
          </a>
        </div>
        <p className="mt-4">&copy; 2025 NombreApp. Todos los derechos reservados.</p>
      </footer>
    </main>
);
}
