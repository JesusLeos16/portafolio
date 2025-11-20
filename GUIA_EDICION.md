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
  icon: <Rocket className="w-5 h-5 text-accent" />, // Cambia 'Rocket' por otro icono si deseas
  className: "md:col-span-1 md:row-span-1 min-h-[200px]"
},
```

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
