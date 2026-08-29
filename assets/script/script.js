/* V5.0.000 */
document.body.style.backgroundImage = "url('https://m1l4n10.github.io/linktree/assets/img/Background.webp')";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundAttachment = "fixed";
document.body.style.backgroundPosition = "center";
document.body.style.backgroundRepeat = "no-repeat";

fetch('data/URL.JSON')
  .then(response => {
    if (!response.ok) {
      throw new Error('JSON konnte nicht geladen werden');
    }
    return response.json();
  })
  .then(data => {
    const container = document.getElementById('linktree-container');
    
    data.links.forEach(link => {
      const div = document.createElement('div');
      div.className = 'socialgrid';
      div.id = link.id;
      div.onclick = () => window.open(link.url, '_blank');
      
      div.innerHTML = `
        <div class="icon-wrap">
          <img src="${link.img}" class="socialgridimg" alt="${link.alt}">
        </div>
        <a>${link.label}</a>
      `;
      
      container.appendChild(div);
    });
  })
  .catch(error => {
    console.error('Fehler beim Laden der Links:', error);
    document.getElementById('linktree-container').innerHTML = 
      '<p style="text-align: center;">Links konnten nicht geladen werden. Melde den Fehler <a href="https://discord.com/users/1215682123219079259" target="_blank">Hier</a></p>';
  });