import {
  ref,
  getDocs,
  doc,
  getDoc,
  setDoc,
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
  getStorage,
  cloudDB,
  uploadBytesResumable,
  getDownloadURL,
  updateDoc,
} from "./plugin.js";

var tableBody = document.getElementById("tbody-daily-meal");
var arabicTitle = document.getElementById('arabic-title');
var englishTitle = document.getElementById('english-title');
var nameofBox = document.getElementById('name-box');
var ext = document.getElementById('extention');
var imagePreview = document.getElementById('image-preview');
var imageProgressBar = document.getElementById('progressbar');
 var selectImage = document.getElementById('select-image');
var addDailyMeal = document.getElementById('add-daily-meal');
var proglab2 = document.getElementsByClassName("progress");
var updateDailyMeal = document.getElementById('update-daily-meal');

/****************************************************/

var files = [];
var reader = new FileReader();

imagePreview.style.height = 200;
imagePreview.style.width = 200;

var _input = document.createElement("input");
_input.type = "file";
_input.onchange = (e) => {
  files = e.target.files;

  var _extention = GetFileExt(files[0]);
  var _name = GetFileName(files[0]);
  nameofBox.value = _name;
  ext.innerHTML = _extention;

  reader.readAsDataURL(files[0]);
};
reader.onload = function () {
  imagePreview.src = reader.result;
};
selectImage.onclick = function () {
  _input.click();
};

function GetFileExt(file) {
  var temp = file.name.split(".");
  var ext = temp.slice(temp.length - 1, temp.length);
  return "." + ext[0];
}
function GetFileName(file) {
  var temp = file.name.split(".");
  var fname = temp.slice(0, -1).join(".");
  return fname;
}


/****************************************************/
function addMealToFirestore() {
  UploadMealInformation("add");
}

function addrowToMealTable(titleEn, titleAr, imageUrl) {
  let trow = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");
  let image = document.createElement("img");

  let editDMBtn = document.createElement("a");
  let deleteDMBtn = document.createElement("a");
  editDMBtn.innerHTML = "Edit";
  deleteDMBtn.innerHTML = "Delete";
  editDMBtn.classList.add("btn", "btn-success");
  deleteDMBtn.classList.add("btn", "btn-danger");

  editDMBtn.setAttribute("data-toggle", "modal");
  editDMBtn.setAttribute("data-target", "#ModalCenter");

  // editBtn.onclick = function () {
  //   modalTitle.innerHTML = "Edit Meal"
  // arTitle.value = titleAr;
  // enTitle.value = titleEn;

  myimg.src = imageUrl;
  // namebox.value = "";
  // extlab.innerHTML = "";
  // proglab.innerHTML = "";
  //   // fillboxes(mealId);
  // };

  deleteDMBtn.onclick = function () {
    deleteMeal(titleEn);
  };

  image.src = imageUrl;
  image.width = 140;
  image.height = 100;

  td1.innerHTML = titleEn;
  td2.innerHTML = titleAr;
  td3.appendChild(image);

  td4.appendChild(editDMBtn);
  td4.appendChild(deleteDMBtn);

  // trow.appendChild(td1);
  trow.appendChild(td1);
  trow.appendChild(td2);
  trow.appendChild(td3);
  trow.appendChild(td4);

  tableBody.appendChild(trow);
}

function addAllItemToMealTable(meals) {
  tableBody.innerHTML = "";
  meals.forEach((element) => {
    addrowToMealTable(element.titleEn, element.titleAr, element.imageUrl);
  });
}

  async function UploadMealInformation(action) {
    // new Compressor(file[, options])
    var imageUpload = files[0];

    var imageName = nameofBox.value + ext.innerHTML;
    const metaData = {
      contentType: imageUpload.type,
    };
    const storage = getStorage();

    const storageRef = ref(storage, "dailymeals/"+ imageName);

    const uploadTask = uploadBytesResumable(
      storageRef,
      imageUpload,
      metaData
    );
    uploadTask.on(
      "state changed",
      (snapshot) => {
        var progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          imageProgressBar.style.width = progress+"%";
          proglab2.innerHTML = progress + "%";
      },
      (error) => {
        alert("error: image not uploaded");
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          saveMealtoFirestore(downloadURL,action);

          action == "add"?alert("meal added successfuly"):alert("meal updated successfuly");
        });
      }
    );
  }

  async function saveMealtoFirestore(url,action) {
    var name = englishTitle.value;
    var ext = extlab.innerHTML;
    var path = "dailymeals/";
    var ref = doc(cloudDB,path,name);
    action == "add"? await setDoc(ref, {
      titleEn: englishTitle.value,
      titleAr: arabicTitle.value,
      imageUrl: url,
    }):await updateDoc(ref,{
      titleEn: englishTitle.value,
      titleAr: arabicTitle.value,
      imageUrl: url,
    }).then(()=>{
        alert("Meal updated successfuly");
    }).catch((error)=>{
        alert('unsuccsesful operation, error'+error);
    });
  }



  async function deleteMeal(mealId) {
    console.log(mealId);
    var ref = doc(cloudDB, "dailymeals/", mealId);
    const docSnapshot = await getDoc(ref);
  
    if (!docSnapshot.exists()) {
      alert("document doesn't exsist");
    } else {
      await deleteDoc(ref)
        .then(() => {
          alert("data deleted successfuly");
        })
        .catch((error) => {
          alert("unsuccsesful operation, error" + error);
        });
    }
  }




async function getMeals() {
  const dbRef = collection(cloudDB, "dailymeals");
  onSnapshot(dbRef, (querySnapshot) => {
    var Meals = [];
    querySnapshot.forEach((doc) => {
      Meals.push(doc.data());
    });
    addAllItemToMealTable(Meals);
  });
}

window.onload = getMeals();

addDailyMeal.addEventListener('click',addMealToFirestore);