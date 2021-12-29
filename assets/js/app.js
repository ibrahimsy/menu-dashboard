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

// import * as imageConversion from '../../node_modules/image-conversion';
// import Compressor from "../../node_modules/compressorjs";

var categories = [];
var tbody = document.getElementById("tbody1");
var addMealBtn = document.getElementById("add-meal-btn");
var addMealButton = document.getElementById("add-meal");
var editMealButton = document.getElementById("update-meal");
// var deleteMealBtn = document.getElementById("delete-meal");
// var sectionA = document.getElementById("sectionA");
var arTitle = document.getElementById("ar-title");
var enTitle = document.getElementById("en-title");
var price = document.getElementById("price");
var ingredientsAr = document.getElementById("ingredients-ar");
var ingredientsEn = document.getElementById("ingredients-en");
var catSelect = document.getElementById("cat-title");
var namebox = document.getElementById("namebox");
var extlab = document.getElementById("extlab");
var myimg = document.getElementById("myimg");
var proglab = document.getElementsByClassName("progress");
var progressBar = document.getElementById("progress-bar");
var myimg = document.getElementById("myimg");
var selectBtn = document.getElementById("selBtn");
var modalTitle = document.getElementById("exampleModalLongTitle");

/////////////////////////////////////Select the image /////////////////////
var files = [];
var reader = new FileReader();

myimg.style.height = 200;
myimg.style.width = 200;

var input = document.createElement("input");
input.type = "file";
input.onchange = (e) => {
  files = e.target.files;

  var extention = GetFileExt(files[0]);
  var name = GetFileName(files[0]);
  namebox.value = name;
  extlab.innerHTML = extention;

  reader.readAsDataURL(files[0]);
};
reader.onload = function () {
  myimg.src = reader.result;
};
selectBtn.onclick = function () {
  input.click();
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

//-------------------- fill the table
function addrowToCatTable(id, titleAr, titleEn, imageUrl) {
  let trow = document.createElement("tr");
  // let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");
  let td5 = document.createElement("td");
  let image = document.createElement("img");
  let editBtn = document.createElement("a");
  let deleteBtn = document.createElement("a");
  editBtn.innerHTML = "Edit";
  deleteBtn.innerHTML = "Delete";
  editBtn.classList.add("btn", "btn-primary");
  deleteBtn.classList.add("btn", "btn-danger");
  editBtn.onclick = function () {
    alert("edit");
  };
  deleteBtn.onclick = function () {
    deleteDocument(id);
  };

  image.src = imageUrl;
  image.width = 140;
  image.height = 100;

  // td1.innerHTML = id;
  td2.innerHTML = titleAr;
  td3.innerHTML = titleEn;
  td4.appendChild(image);
  td5.appendChild(editBtn);
  td5.appendChild(deleteBtn);

  // trow.appendChild(td1);
  trow.appendChild(td2);
  trow.appendChild(td3);
  trow.appendChild(td4);
  trow.appendChild(td5);
  tbody.appendChild(trow);
}
function addAllItemToCatTable(categories) {
  tbody.innerHTML = "";
  categories.forEach((element) => {
    addrowToCatTable(
      element.id,
      element.titleAr,
      element.titleEn,
      element.imageUrl
    );
  });
  //  console.log(categories);
}
//----------------GET ALL DATA --------------
async function getAllData() {
  const querySnapshot = await getDocs(collection(cloudDB, "categories"));
  var categories = [];
  querySnapshot.forEach((doc) => {
    categories.push(doc.data());
  });
  addAllItemToTable(categories);
}

async function getAllDataRealtime() {
  const dbRef = collection(cloudDB, "categories");

  onSnapshot(dbRef, (querySnapshot) => {
    var categories = [];
    querySnapshot.forEach((doc) => {
      categories.push(doc.data());
    });
    addAllItemToCatTable(categories);
  });
}

async function deleteDocument(id) {
  var ref = doc(cloudDB, "categories", id);
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

////////////////////////////////////////////////////////////////////////////////////////////////////

async function generateCatBtn() {
  const querySnapshot = await getDocs(collection(cloudDB, "categories"));

  querySnapshot.forEach((doc) => {
    categories.push(doc.data());
  });
  var container = document.getElementById("sidebar");
  categories.forEach((ele) => {
    let link = document.createElement("a");
    link.innerHTML = ele.titleEn;
    link.style.display = "block";
    link.classList.add("cat-link", "btn", "btn-primary", "shadow");
    link.onclick = function () {
      // showMeals(ele.id);
      getMeals(ele.id);
    };
    container.appendChild(link);
  });
}
//////////////////////////////show meals per category///////////////////////////////////
async function getMeals(catId) {
  const dbRef = collection(cloudDB, "categories/" + catId + "/meals");
  onSnapshot(dbRef, (querySnapshot) => {
    var Meals = [];
    var mealsId = [];
    querySnapshot.forEach((doc) => {
      Meals.push(doc.data());
      mealsId.push(doc.id);
    });
    addAllItemToMealTable(Meals, mealsId, catId);
  });
}

/////////////////////////////////Add row to meal table

function addrowToMealTable(
  catId,
  mealId,
  titleEn,
  titleAr,
  pr,
  ingreAr,
  ingreEn,
  imageUrl,
  imgName
) {
  let trow = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");
  let td5 = document.createElement("td");
  let td6 = document.createElement("td");
  let td7 = document.createElement("td");
  let image = document.createElement("img");
  //   <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter"></button>
  let editBtn = document.createElement("a");
  let deleteBtn = document.createElement("a");
  editBtn.innerHTML = "Edit";
  deleteBtn.innerHTML = "Delete";
  editBtn.classList.add("btn", "btn-success");
  deleteBtn.classList.add("btn", "btn-danger");
 
  editBtn.setAttribute("data-toggle","modal");
  editBtn.setAttribute("data-target","#exampleModalCenter");

  editBtn.onclick = function () {
    modalTitle.innerHTML = "Edit Meal"
  arTitle.value = titleAr;
  enTitle.value = titleEn;
  price.value = pr;
  ingredientsAr.value =ingreAr;
  ingredientsEn.value =ingreEn;
  namebox.value = imgName;
  // catSelect.innerHTML = "";

   
  myimg.src = imageUrl;
  namebox.value = "";
  extlab.innerHTML = "";
  proglab.innerHTML = "";

   categories.forEach((elem) => {
    var opt = document.createElement("option");
    opt.value = elem.id;
    opt.innerHTML = elem.titleEn; // whatever property it has
    // then append it to the select element
    catSelect.appendChild(opt);
  });
    // fillboxes(mealId);
  };
  deleteBtn.onclick = function () {
    deleteMeal(catId, mealId);
  };

  image.src = imageUrl;
  image.width = 140;
  image.height = 100;

  td1.innerHTML = titleEn;
  td2.innerHTML = titleAr;
  td3.innerHTML = pr;
  td4.innerHTML = ingreAr;
  td5.innerHTML = ingreEn;
  td6.appendChild(image);

  td7.appendChild(editBtn);
  td7.appendChild(deleteBtn);

  // trow.appendChild(td1);
  trow.appendChild(td1);
  trow.appendChild(td2);
  trow.appendChild(td3);
  trow.appendChild(td4);
  trow.appendChild(td5);
  trow.appendChild(td6);
  trow.appendChild(td7);

  tbody.appendChild(trow);
    
}

function addAllItemToMealTable(meals, mealsId, catId) {
  tbody.innerHTML = "";
  var counter = 0;
  meals.forEach((element) => {
    addrowToMealTable(
      catId,
      mealsId[counter],
      element.titleEn,
      element.titleAr,
      element.price,
      element.descAr,
      element.descEn,
      element.imageUrl,
      element.imgName,
    );
    counter++;
  });
  //  console.log(categories);
}

async function deleteMeal(catId, mealId) {
  console.log(mealId);
  var ref = doc(cloudDB, "categories/" + catId + "/meals/", mealId);
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

 function addMeal() {
  UploadProcess("add");
}
async function updateMeal() {
  UploadProcess("edit");
}


//////////////////////////upload image
async function UploadProcess(action) {
  // new Compressor(file[, options])
  var imageUpload = files[0];


  var imageName = namebox.value + extlab.innerHTML;
  const metaData = {
    contentType: imageUpload.type,
  };
  const storage = getStorage();

    var options = document.getElementsByTagName("option");
    var optionName = options[catSelect.selectedIndex].innerHTML; 
console.log(optionName);
  const storageRef = ref(storage, optionName+"/"+ imageName);

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
        progressBar.style.width = progress+"%";
        proglab.innerHTML = progress + "%";
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
///////////////////////end upload image
async function saveMealtoFirestore(url,action) {
  var name = enTitle.value;
  var ext = extlab.innerHTML;
  var path = "categories/"+catSelect.value+"/meals/";
  var ref = doc(cloudDB,path,name);
  action == "add"? await setDoc(ref, {
    titleEn: enTitle.value,
    titleAr: arTitle.value,
    price: price.value,
    descAr: ingredientsAr.value,
    descEn: ingredientsEn.value,
    imageUrl: url,
    imageName:name,
  }):await updateDoc(ref,{
    titleEn: enTitle.value,
    titleAr: arTitle.value,
    price: price.value,
    descAr: ingredientsAr.value,
    descEn: ingredientsEn.value,
    imageUrl: url,
    imageName:name,
  }).then(()=>{
      alert("Meal updated successfuly");
  }).catch((error)=>{
      alert('unsuccsesful operation, error'+error);
  });
}




window.onload = generateCatBtn();
console.log('welcome');

addMealButton.addEventListener('click',addMeal);

addMealBtn.addEventListener("click", () => {
  modalTitle.innerHTML = "Add Meal";
  arTitle.value = "";
  enTitle.value = "";
  price.value = "";
  ingredientsAr.value = "";
  ingredientsEn.value = "";
  catSelect.innerHTML = "";
  myimg.src = "../assets/images/add-image.jpg";
  namebox.value = "";
  extlab.innerHTML = "";
  proglab.innerHTML = "";
  categories.forEach((elem) => {
    var opt = document.createElement("option");
    opt.value = elem.id;
    opt.innerHTML = elem.titleEn; // whatever property it has
    // then append it to the select element
    catSelect.appendChild(opt);
  });
});


editMealButton.addEventListener('click',updateMeal);