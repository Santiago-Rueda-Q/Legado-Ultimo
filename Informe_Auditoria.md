# Taller de Auditoría Comparativa Profesional  
_Asignatura: Arquitectura y Diseño del Software_  
**Fecha:** 11 de noviembre de 2025  
**Autor:** Santiago Rueda Quintero  

---

## Introducción

Este documento resume el proceso completo de auditoría comparativa realizado sobre un proyecto de software, integrando **GitHub** con **SonarQube** para evaluar la calidad del código, identificar problemas críticos y documentar mejoras entre la versión heredada y la versión final optimizada.  
El objetivo central fue analizar el estado del código, detectar debilidades, aplicar correcciones y validar nuevamente mediante análisis automatizado para garantizar mantenibilidad, seguridad y fiabilidad.

---

## Paso 1: Conexión y Ejecución de la Auditoría

Se estableció exitosamente la integración entre:

- Repositorio **GitHub**
- Servidor de análisis **SonarQube**

Una vez configurado el pipeline de análisis, se ejecutó la auditoría inicial sobre el proyecto heredado.

<img width="751" height="362" alt="image" src="https://github.com/user-attachments/assets/f059e2e8-2abf-447f-99d4-0b2ca133b6ec" />

---

## Paso 2: Navegación y Auditoría  
La auditoría permitió comparar la versión heredada con la versión final ajustada.

### Resultados de la Auditoría Final

<img width="754" height="389" alt="image" src="https://github.com/user-attachments/assets/c160dc4c-cb5f-4809-814a-6dfb4139f365" />

Tras las correcciones realizadas:

- **No se presentan errores críticos.**
- Permanecen únicamente:
  - Errores de severidad **media**
  - Errores de severidad **baja**
  - Algunos **hotspots de seguridad** catalogados como informativos
  - Duplicaciones mínimas o inexistentes

---

## 📊 Severidad Media

<img width="753" height="346" alt="image" src="https://github.com/user-attachments/assets/78cab321-fa23-4dc2-9db6-6976c8ebbf28" />
<img width="759" height="231" alt="image" src="https://github.com/user-attachments/assets/51fee8fa-5a8b-49cc-a7f0-722862f406cc" />
<img width="748" height="240" alt="image" src="https://github.com/user-attachments/assets/1895b711-95f8-403d-92f3-d138e8531900" />
<img width="751" height="673" alt="image" src="https://github.com/user-attachments/assets/a5934136-1401-47ac-aad1-8eb07bd5d5fd" />
<img width="754" height="475" alt="image" src="https://github.com/user-attachments/assets/fa2c953b-1fcd-4b53-9afa-c986329d294f" />

Incluye principalmente:

- Problemas de estilo
- Posibles mejoras de lógica
- Recomendaciones sobre validaciones
- Ajustes de estructuras CSS/JS

---

## 🎨 Análisis de CSS – Severidad Media

<img width="750" height="562" alt="image" src="https://github.com/user-attachments/assets/ead1fdcf-67c7-44cf-87f2-79670ac0fff1" />

Hallazgos relacionados con:

- Selectores redundantes  
- Declaraciones repetidas  
- Reglas que pueden simplificarse mediante refactorización o variables  

---

## 🟡 Severidad Baja

<img width="750" height="498" alt="image" src="https://github.com/user-attachments/assets/baea6149-ed14-4688-b0bb-190c8d1f472c" />

Observaciones típicas:

- Comentarios faltantes  
- Convenciones de formato  
- Buenas prácticas recomendadas, no obligatorias  

---

## 🔐 Security Hotspots

<img width="753" height="393" alt="image" src="https://github.com/user-attachments/assets/19f8d4d9-e9f3-4805-bfec-545276b3f8a8" />

Incluyen:

- Revisiones sugeridas de manejo de datos  
- Confirmación manual de que no existen vulnerabilidades explotables  
- Advertencias informativas sobre patrones de desarrollo comunes  

---

## ♻️ Duplications

<img width="750" height="329" alt="image" src="https://github.com/user-attachments/assets/db63a524-d8f8-46ee-913a-b4c2304f2558" />

El análisis reflejó:

- **Duplicación 0%** en la mayoría de módulos  
- Código refactorizado con estructuras más limpias y reutilizables  

---

## 📘 Paso 3: Documentación de Hallazgos Prioritarios

Después de depurar y optimizar el proyecto, SonarQube reportó las siguientes métricas consolidadas:

<img width="756" height="217" alt="image" src="https://github.com/user-attachments/assets/f5aedafe-74fa-433a-8b10-8d0bec6c0578" />

### 📝 Interpretación

- **Security (0)** → No se detectaron vulnerabilidades.  
- **Reliability (5)** → Las recomendaciones están centradas en robustez del código.  
- **Maintainability** pasó de **36 → 12**, reflejando una mejora significativa.  
- **Duplicaciones 0%** → Sin redundancias problemáticas.  
- **Accepted Issues 0** → No hay problemas pendientes después de la auditoría final.  

---

## 🚀 Conclusión General

El proceso completo logró transformar una base de código heredada con problemas importantes en un proyecto **más limpio, seguro, mantenible y estandarizado**.  
La integración entre GitHub y SonarQube permitió un ciclo de retroalimentación continua, respaldado por métricas objetivas que reflejan la mejora progresiva entre versiones.

Este taller evidencia el valor de aplicar auditorías automatizadas dentro del ciclo de desarrollo para garantizar calidad y sostenibilidad del software.

---
