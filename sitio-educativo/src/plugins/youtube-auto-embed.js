import { visit } from 'unist-util-visit';

export function youtubeAutoEmbed() {
  return (tree) => {
    visit(tree, (node, index, parent) => {
      if (!parent || index === undefined) return;
      
      if (node.type === 'text') {
        const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})(?:\S*)?/g;
        const text = node.value;
        const matches = [...text.matchAll(youtubeRegex)];
        
        if (matches.length > 0) {
          const newNodes = [];
          let lastIndex = 0;
          
          matches.forEach(match => {
            const [fullMatch, videoId] = match;
            const matchIndex = match.index;
            
            // Texto antes del video
            if (matchIndex > lastIndex) {
              newNodes.push({
                type: 'text',
                value: text.slice(lastIndex, matchIndex)
              });
            }
            
            // Embed del video
            newNodes.push({
              type: 'html',
              value: `
                <div class="video-container">
                  <iframe 
                    src="https://www.youtube-nocookie.com/embed/${videoId}"
                    title="Video educativo"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                    loading="lazy">
                  </iframe>
                </div>
              `
            });
            
            lastIndex = matchIndex + fullMatch.length;
          });
          
          // Texto después del último video
          if (lastIndex < text.length) {
            newNodes.push({
              type: 'text',
              value: text.slice(lastIndex)
            });
          }
          
          if (newNodes.length > 0) {
            parent.children.splice(index, 1, ...newNodes);
            return index + newNodes.length;
          }
        }
      }
      
      // También manejar párrafos que contienen solo una URL
      if (node.type === 'paragraph' && node.children?.length === 1) {
        const child = node.children[0];
        if (child.type === 'link') {
          const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/;
          const match = child.url.match(youtubeRegex);
          
          if (match) {
            const videoId = match[1];
            parent.children[index] = {
              type: 'html',
              value: `
                <div class="video-container">
                  <iframe 
                    src="https://www.youtube-nocookie.com/embed/${videoId}"
                    title="Video educativo"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                    loading="lazy">
                  </iframe>
                </div>
              `
            };
          }
        }
      }
    });
  };
}
