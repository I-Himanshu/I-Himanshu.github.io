var myProjects=[
  {
    "title":"Beautiful Clock",
    "description":"I have created a beautiful Analog and digital Clock that may definitely blow your mind, you will forced to remove your wall clock from your home and you will use this one",
    "thumbnail":"https://telegra.ph/file/806b4195ed08e4a6eefbe.jpg",
    "link":"https://i-himanshu.github.io/Beautiful-Clock"
  },
  {
    "title":"Calculator Website",
    "description":"I have created an amazing calculator project that may inhence your mathematical problem solving skill in a magical way, you can solve a hardest question in just 5s and finding any value of log is also possible in just one click",
    "thumbnail":"https://people.umass.edu/avsingh/assets/img/jpg/Perpetual-Crusades.jpg",
    "link":"#"
  },
  {
    "title":"Calculator Website",
    "description":"I have created an amazing calculator project that may inhence your mathematical problem solving skill in a magical way, you can solve a hardest question in just 5s and finding any value of log is also possible in just one click",
    "thumbnail":"https://people.umass.edu/avsingh/assets/img/jpg/Perpetual-Crusades.jpg",
    "link":"#"
  }
  ];
projectCon= document.getElementById('projects')
myProjects.forEach((p,i)=>{
  if(i%2==0){
    dir="fade-right"
  }else{
    dir="fade-left"
  }
  projectCon.innerHTML += `
      <div class="project" data-aos="${dir}">
        <h3 class="title">${p.title}</h3>
        <img src="${p.thumbnail}">
        <p class="description">
          ${p.description}
        </p>
        <button onclick="location.href='${p.link}'" class="explore">Explore</button>
      </div>
      `
      console.log(projectCon.innerHTML)
      })