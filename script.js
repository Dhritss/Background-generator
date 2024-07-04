function generateSolidColor() {
    const colors = ['#ff6347', '#00bfff', '#ffd700', '#7cfc00', '#ba55d3', '#4682b4'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById('preview').style.background = randomColor;
  }
  
  function generateGradient() {
    const angle = Math.random() * 360;
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    const gradient = `linear-gradient(${angle}deg, ${color1}, ${color2})`;
    document.getElementById('preview').style.background = gradient;
  }
  
  function generatePattern() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 400;
    canvas.height = 300;
    
    // Example pattern: stripes
    const stripeColor = getRandomColor();
    for (let i = 0; i < canvas.height; i += 20) {
      ctx.fillStyle = stripeColor;
      ctx.fillRect(0, i, canvas.width, 10);
    }
    
    const pattern = `url(${canvas.toDataURL()})`;
    document.getElementById('preview').style.background = pattern;
  }
  
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  