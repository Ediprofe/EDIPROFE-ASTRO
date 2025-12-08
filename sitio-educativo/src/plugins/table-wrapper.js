/**
 * Plugin de rehype para envolver tablas en un contenedor scrollable
 * Esto permite scroll horizontal en tablas anchas sin afectar el layout de la página
 */
import { visit } from 'unist-util-visit';

export default function tableWrapper() {
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName === 'table' && parent && typeof index === 'number') {
        // Crear el wrapper div
        const wrapper = {
          type: 'element',
          tagName: 'div',
          properties: {
            className: ['table-scroll-wrapper']
          },
          children: [node]
        };
        
        // Reemplazar la tabla con el wrapper
        parent.children[index] = wrapper;
      }
    });
  };
}
