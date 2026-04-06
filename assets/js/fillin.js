//FILL IN USER-SPECIFIC DATA HERE! (e.g. name, profile picture, social media links, etc.)

//Fill in your date here.
const TEXT_REPLACEMENTS = {
  'UserName': 'm1l4n10',
};

//Fill in your profile picture path, here. If you have another data type, just type the data type. For example, profile.jpeg -> profile.png .
const IMAGE_REPLACEMENTS = {
  'ProfilePicture': 'assets/img/individually/profile.jpeg',
};

//Fill in your social media locations here. Only edit after >>window.open('<< and stop before >>', '_blank');<<. 
// For example, if your Instagram is https://www.instagram.com/milan_.1410/, then you would only paste your link in the underlined part >>window.open('https://www.instagram.com/milan_.1410/', '_blank');<<.
const ONCLICK_REPLACEMENTS = {
  'discord': "window.open('https://discord.com/users/1215682123219079259', '_blank');",
  'instagram': "window.open('https://www.instagram.com/milan_.1410/', '_blank');",
  'tiktok': "window.open('https://www.tiktok.com/@milan_.1410', '_blank');",
  'spotify': "window.open('https://open.spotify.com/user/31pi3ohexpsdoho4yrktnbnlyd6u?si=6c370749be9f449e', '_blank');",
  'snapchat': "window.open('https://www.snapchat.com/@milan_angus', '_blank');",
  'github': "window.open('https://github.com/m1l4n10', '_blank');",
  'mywebsite': "window.open('https://m1l4n10.is-a.dev', '_blank');",
};

//Choose the picture you want as your body background, and paste the path here. If you don't want a background, just leave it as an empty string.
const BACKGROUND = 'assets/img/individually/Background.webp';


//------------------------------------------------------------------------------------------------------------------------------------------------------------



//DO NOT EDIT BELOW THIS LINE!
//IF YOU EDIT BELOW THIS LINE, YOUR CHANGES MAY BE OVERWRITTEN AND LOST FOREVER! (Unless you know what you're doing)
document.addEventListener('DOMContentLoaded', () => {
  for (const [id, value] of Object.entries(TEXT_REPLACEMENTS)) {
    const el = document.getElementById(id);
    if (el) el.textContent = value || id;
  }

  for (const [id, src] of Object.entries(IMAGE_REPLACEMENTS)) {
    if (!src) continue;
    const el = document.getElementById(id);
    if (el) el.src = src;
  }

  for (const [id, handler] of Object.entries(ONCLICK_REPLACEMENTS)) {
    if (!handler) continue;
    const el = document.getElementById(id);
    if (el) el.setAttribute('onclick', handler);
  }

  if (BACKGROUND) {
    document.body.style.backgroundImage = `url('${BACKGROUND}')`;
  }

  const faviconSrc = IMAGE_REPLACEMENTS['ProfilePicture'];
  if (faviconSrc) {
    const img = new Image();
    img.src = faviconSrc;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');

      const radius = 20;
      ctx.beginPath();
      ctx.moveTo(radius, 0);
      ctx.lineTo(64 - radius, 0);
      ctx.quadraticCurveTo(64, 0, 64, radius);
      ctx.lineTo(64, 64 - radius);
      ctx.quadraticCurveTo(64, 64, 64 - radius, 64);
      ctx.lineTo(radius, 64);
      ctx.quadraticCurveTo(0, 64, 0, 64 - radius);
      ctx.lineTo(0, radius);
      ctx.quadraticCurveTo(0, 0, radius, 0);
      ctx.closePath();
      ctx.clip();

      ctx.drawImage(img, 0, 0, 64, 64);

      let favicon = document.querySelector("link[rel='icon']");
      if (!favicon) {
        favicon = document.createElement('link');
        favicon.rel = 'icon';
        document.head.appendChild(favicon);
      }
      favicon.href = canvas.toDataURL('image/png');
    };
  }
});