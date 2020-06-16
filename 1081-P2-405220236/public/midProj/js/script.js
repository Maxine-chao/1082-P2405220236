const demoList = document.getElementById('demo-list');
const demo = document.getElementById('demo');

const showDemoList = item => {
  demoList.classList = 'visible';
  demo.classList = 'invisible';
};

const showDemo = item => {
  demoList.classList = 'invisible';
  demo.classList = 'visible';
  demo.style.marginTop = '100px';
  switch (item) {
    case 'Introduction':
      demo.innerHTML = `
        <iframe src="/midProj/midterm/tku/w1/intro.html" height="700px" width=100% ></iframe>
      `;
      break;
    case 'Pokemon':
      demo.innerHTML = `
        <iframe src="/midProj/midterm/tku/w1/pokemon.html" height="900px" width=100% ></iframe>
      `;
      break;
    case 'ImageGallery':
      demo.innerHTML = `
        <iframe src="/midProj/midterm/tku/w2/imageGallery/imageGallery.html" height="900px" width=100% ></iframe>
      `;
      break;
    case 'Div_tku60':
        demo.innerHTML = `
          <iframe src="/midProj/midterm/tku/w4/div_tku60.html" height="700px" width=100% ></iframe>
        `;
      break;
    case 'Class':
      demo.innerHTML = `
        <iframe src="/midProj/midterm/tku/my class/myclass.html" height="900px" width=100% ></iframe>
      `;
      break;
    case 'Resume':
      demo.innerHTML = `
        <iframe src="/midProj/midterm/tku/my resume/myresume.html" height="700px" width=100% ></iframe>
      `;
      break;
    case 'Github':
      demo.innerHTML = `
        <iframe src="/midProj/midterm/tku/git hub/github.html" height="900px" width=100% ></iframe>
      `;
      break;
  }
};
