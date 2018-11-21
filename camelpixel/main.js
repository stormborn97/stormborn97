const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


let img = new Image();
let fileName = "";

const downloadBtn = document.getElementById("download-btn");
const uploadFile = document.getElementById("upload-file");
const revertBtn = document.getElementById("revert-btn");

//Add Filters & effects....
//events delegations here :).....
document.addEventListener("click", e => {
  if (e.target.classList.contains("filter-btn")) {
    if (e.target.classList.contains("brightness-add")) {
      Caman("#canvas", img, function() {
        this.brightness(5).render();
      });
    } else if (e.target.classList.contains("brightness-remove")) {
      Caman("#canvas", img, function() {
        this.brightness(-5).render();
      });
    } else if (e.target.classList.contains("contrast-add")) {
      Caman("#canvas", img, function() {
        this.contrast(5).render();
      });
    } else if (e.target.classList.contains("contrast-remove")) {
      Caman("#canvas", img, function() {
        this.contrast(-5).render();
      });
    } else if (e.target.classList.contains("saturation-add")) {
      Caman("#canvas", img, function() {
        this.saturation(5).render();
      });
    } else if (e.target.classList.contains("saturation-remove")) {
      Caman("#canvas", img, function() {
        this.saturation(-5).render();
      });
    } else if (e.target.classList.contains("vibrance-add")) {
      Caman("#canvas", img, function() {
        this.vibrance(5).render();
      });
    } else if (e.target.classList.contains("vibrance-remove")) {
      Caman("#canvas", img, function() {
        this.vibrance(-5).render();
      });
    } else if (e.target.classList.contains("lomo-apply")) {
      Caman("#canvas", img, function() {
        this.lomo().render();
      });
    }
    else if (e.target.classList.contains("vintage-apply")) {
        Caman("#canvas", img, function() {
          this.vintage().render();
        });
      }
      else if (e.target.classList.contains("clarity-apply")) {
        Caman("#canvas", img, function() {
          this.clarity().render();
        });
      }
      else if (e.target.classList.contains("sincity-apply")) {
        Caman("#canvas", img, function() {
          this.sinCity().render();
        });
      }
      else if (e.target.classList.contains("pinhole-apply")) {
        Caman("#canvas", img, function() {
          this.pinhole().render();
        });
      }
      else if (e.target.classList.contains("nostalgia-apply")) {
        Caman("#canvas", img, function() {
          this.nostalgia().render();
        });
      }
      else if (e.target.classList.contains("hermajesty-apply")) {
        Caman("#canvas", img, function() {
          this.herMajesty().render();
        });
      }
      else if (e.target.classList.contains("crossprocess-apply")) {
        Caman("#canvas", img, function() {
          this.crossProcess().render();
        });
      }
      else if (e.target.classList.contains("love-apply")) {
        Caman("#canvas", img, function() {
          this.love().render();
        });
      }
      else if (e.target.classList.contains("jarques-apply")) {
        Caman("#canvas", img, function() {
          this.jarques().render();
        });
      }
      else if (e.target.classList.contains("sunrise-apply")) {
        Caman("#canvas", img, function() {
          this.sunrise().render();
        });
      }
      else if (e.target.classList.contains("oldboot-apply")) {
        Caman("#canvas", img, function() {
          this.oldBoot().render();
        });
      }
      else if (e.target.classList.contains("grungy-apply")) {
        Caman("#canvas", img, function() {
          this.grungy().render();
        });
      }
      else if (e.target.classList.contains("hazydays-apply")) {
        Caman("#canvas", img, function() {
          this.hazyDays().render();
        });
      }
      else if (e.target.classList.contains("concentrate-apply")) {
        Caman("#canvas", img, function() {
          this.concentrate().render();
        });
      }
      else if (e.target.classList.contains("orangepeel-apply")) {
        Caman("#canvas", img, function() {
          this.orangePeel().render();
        });
      }
      
  }
});
//revert the applied filters.....
revertBtn.addEventListener('click', (e) => {
    Caman('#canvas', img, function(){
        this.revert();
    })
})
//upload File
uploadFile.addEventListener("change", e => {
  //get the file..
  const file = document.getElementById("upload-file").files[0];

  //init FileReader..
  const reader = new FileReader();

  if (file) {
    //set file name...
    fileName = file.name;
    //read data as URL..
    reader.readAsDataURL(file);
    
  }
  //add the image to the canvas..
  reader.addEventListener(
    "load",
    () => {
      //create image
      img = new Image();
      //set the src..
      img.src = reader.result;
      //on image load, add to canvas..
      img.onload = function() {
        canvas.width = img.width;
        canvas.height = img.height;
        //draw image to the canvas..
        ctx.drawImage(img, 0, 0, img.width, img.height);
        canvas.removeAttribute("data-caman-id");
      };
    },
    false
  );
});


//download event...
downloadBtn.addEventListener('click', (e) =>{
    //get the file extension...
    const fileExtension = fileName.slice(-4);

    //init new filename..
    let newFileName;

    //check image type..
    if(fileExtension === '.jpg'|| fileExtension === '.png'){
        newFileName =fileName.substring(0, fileName.length - 4) + '-edited-with-camelPixel.jpg';
        //adding the logic to the fie extension...
    }
    //call download..
    download(canvas, newFileName);
});

//download function
function  download(canvas, filename){
    //init event..
    let e;
//create link...
const link = document.createElement('a');

//set props(properties)
link.download = filename;
link.href = canvas.toDataURL('image/jpeg',0.8);
//creating a new mouse event....
e = new MouseEvent('click');
//let us dispatch the event...
link.dispatchEvent(e);

}
//completed the file............
//written by:Abdul Mtoro III
//Dev@Stormbornlabs........