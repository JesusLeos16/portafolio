# Guía de Edición - Portafolio Personal

Esta guía está diseñada para ayudarte a modificar el contenido de tu portafolio sin necesidad de ser un experto en programación.

## 1. Cambiar Textos Principales (Nombre, Bio, Títulos)

### Hero Section (Inicio)
- **Archivo:** `src/components/Hero.jsx`
- **Líneas clave:**
    - Línea 16-19: Nombre principal ("Jesus Enrique Leos Morones").
    - Línea 22-24: Bio corta ("Estudiante de Tecnologías...").

### Sobre Mí
- **Archivo:** `src/components/About.jsx`
- **Líneas clave:**
    - Línea 16-19: Párrafos de descripción personal.

## 2. Modificar Proyectos

Los proyectos se encuentran en una lista fácil de editar.

- **Archivo:** `src/components/Projects.jsx`
- **Ubicación:** Busca la constante `projects` (alrededor de la línea 48).

### Cómo agregar un nuevo proyecto:
Copia y pega el siguiente bloque dentro de los corchetes `[]` de la lista `projects`:

```javascript
{
  title: "NUEVO PROYECTO",
  category: "Categoría",
  description: "Descripción breve del proyecto.",
  tech: ["Tecnología 1", "Tecnología 2"],
  achievement: "Logro o Premio (Opcional)",
  tech: ["Tecnología 1", "Tecnología 2"],
  achievement: "Logro o Premio (Opcional)",
  image: "/nombre-imagen.jpg", // Opcional: Agrega una imagen en la carpeta public
  icon: <Rocket className="w-5 h-5 text-accent" />, // Cambia 'Rocket' por otro icono si deseas
  className: "md:col-span-1 md:row-span-1 min-h-[200px]"
},
```

**Para agregar imagen:**
1. Guarda la imagen en la carpeta `public/`.
2. Agrega la propiedad `image: "/tu-imagen.jpg"` al objeto del proyecto.

**Nota:** Si usas un icono nuevo, asegúrate de importarlo al inicio del archivo desde `lucide-react`.

## 3. Cambiar Colores

El color principal (Rojo) está definido como `accent` en la configuración de Tailwind.

- **Archivo:** `tailwind.config.js`
- **Línea 11:** `accent: "#ff0000",`
- **Cambio:** Reemplaza `#ff0000` por cualquier código hexadecimal de color (ej. `#00ff00` para verde).

## 4. Redes Sociales

- **Archivo:** `src/components/Footer.jsx`
- **Líneas 20-31:** Busca las etiquetas `<a>` y cambia el `href="#"` por tus enlaces reales.
    - Ejemplo: `href="https://github.com/tuusuario"`

## 5. Cambiar Imagen de Perfil (About Me)

Actualmente, la sección "Sobre Mí" muestra un recuadro con el texto "DEV". Para poner tu foto real:

1.  Guarda tu foto (ej. `mifoto.jpg`) en la carpeta `public/` del proyecto.
2.  Abre el archivo `src/components/About.jsx`.
3.  Busca las líneas 36-41 (el bloque `div` que contiene el texto "DEV").
4.  Reemplaza todo ese bloque `div` por una etiqueta de imagen:

```javascript
<div className="aspect-square rounded-2xl overflow-hidden border border-white/10 relative group">
  <img 
    src="/mifoto.jpg" 
    alt="Jesus Enrique Leos Morones" 
    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
  />
  <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
</div>
```
