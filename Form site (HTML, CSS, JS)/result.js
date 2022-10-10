// Transfer Data/////////////////////
window.addEventListener("load", ()=>{

  const name =localStorage.getItem("NAME");
const age =localStorage.getItem("AGE");
const city =localStorage.getItem("CITY");
const answerGen =localStorage.getItem("ANSWERGEN");
const answerTime = localStorage.getItem("ANSWERTIME");
})

// Clock function////////////////////////////////////////////////////
function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("txt").innerHTML = h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}
startTime()

//  Show result function//////////////////////////

 const resultEl = [
   {
     title: "Red Dead Redemption 2",
     intro:
       "Red Dead Redemption 2 promite sa spuna o poveste de viata din nemiloasa inima a Americii, lumea de joc vasta si plina de atmosfera urmand sa stea si la baza unei noi experiente multiplayer online.",
     enjoy:
       "In noul Red Dead, intri în bocancii lui Arthur Morgan, un cowboy care a fost crescut de van der Linde și care devine un fel de lider alături de Dutch.",
     image:
       "https://cdn-products.eneba.com/resized-products/6M1qP76B-j6vdX0T4bFCHgJeX99MaKBpXFxbpif1MqY_350x200_1x-0.jpeg",
   },

   {
     title: "Halo: Infinite",
     intro:
       "Cand orice speranta este pierduta si soarta umanitatii se afla in balanta, Master Chief este gata sa se confrunte cu cel mai nemilos dusman cu care s-a confruntat vreodata.",
     enjoy:
       "Intra in armura celui mai mare erou al umanitatii pentru a experimenta o aventura epica si a explora scara masiva a Halo ring.",
     image:
       "https://static.posters.cz/image/1300/postere/halo-infinite-planetside-i116575.jpg",
   },

   {
     title: "FIFA 23",
     intro:
       "EA SPORTS™ FIFA 23 aduce și mai mult din acțiunea și realismul fotbalului pe terenul de joc din sportul rege.",
     enjoy:
       "Bucură-te de o experiență mai reală a fotbalului în FIFA 23, cu noi caracteristici de joc care creează șuturi cu risc versus recompensă, lovituri libere, penaltiuri și cornere, precum și mai multă varietate de fotbal",
     image:
       "https://assets.reedpopcdn.com/fifa-main.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/fifa-main.jpg",
   },

   {
     title: "Days Gone",
     intro:
       "Situat in Pacific Northwest, Days Gone te invita sa explorezi o lume distrusa de oameni transformati in monstrii cunoscuti sub numele de Freakers. Lupta in peisaje pustii in cautarea resurselor si mai presus de tot, in cautarea unui motiv pentru a merge mai departe.",
     enjoy:
       "Intra in rolul fostului motociclist talhar Deacon St. John: un vagabond, un vanator de recompense, un ratacitor al umanitatii. Intr-o lume devastata, St. John pleaca singur la drum din taberele abandonate din salbaticie construite de ultimii supravietuitori ai omenirii.",
     image:
       "https://image.api.playstation.com/vulcan/ap/rnd/202011/0921/SypC9OYevRfIB2A4VfFi8qC5.jpg",
   }];


   function addContent(){
    const city = localStorage.getItem("CITY");
    const answerGen = localStorage.getItem("ANSWERGEN");
    let titleTxt=document.getElementById("title")
    let introTxt=document.getElementById("introText")
    let enjoyTxt=document.getElementById("enjoyText")
    let imageSrc=document.getElementById("gameImg") 
    let citySrc=document.getElementById("cityName")
    let action="action"
    let shooter="shooter"
    let sport="sport"
    let nothing="nothing"
    console.log(answerGen)
    citySrc.innerHTML=city
    
    if (answerGen===action) {   
        titleTxt.innerHTML = resultEl[0].title;
        introTxt.innerHTML = resultEl[0].intro;
        enjoyTxt.innerHTML = resultEl[0].enjoy;
        imageSrc.src = resultEl[0].image;
      }
     
       else if (answerGen===shooter){
       titleTxt.innerHTML = resultEl[1].title;
        introTxt.innerHTML = resultEl[1].intro;
        enjoyTxt.innerHTML = resultEl[1].enjoy;
        imageSrc.src = resultEl[1].image;
       }
       else if (answerGen===sport){
        titleTxt.innerHTML = resultEl[2].title;
        introTxt.innerHTML = resultEl[2].intro;
        enjoyTxt.innerHTML = resultEl[2].enjoy;
        imageSrc.src = resultEl[2].image;
       }
     else{
        titleTxt.innerHTML = resultEl[3].title;
        introTxt.innerHTML = resultEl[3].intro;
        enjoyTxt.innerHTML = resultEl[3].enjoy;
        imageSrc.src = resultEl[3].image;
     }
    }
   addContent()
   


  ///////Age button Function///////////////////////////
function formatAge() {
  const ageDate = localStorage.getItem("AGE");
  const ageNum = new Date(ageDate);
  let userYear = ageNum.getFullYear();
  let userMon = ageNum.getMonth();
  let userDay = ageNum.getDate();
  userMon= checkTime(userMon)
  userDay= checkTime(userDay)
  let age = userDay + "/" + userMon + "/" + userYear;
  console.log(age);
  return age
}

  function getAge(dateString) {
    var now = new Date();
    var today = new Date(now.getYear(), now.getMonth(), now.getDate());

    var yearNow = now.getYear();
    var monthNow = now.getMonth();
    var dateNow = now.getDate();

    var dob = new Date(
      dateString.substring(6, 10),
      dateString.substring(0, 2) - 1,
      dateString.substring(3, 5)
    );

    var yearDob = dob.getYear();
    var monthDob = dob.getMonth();
    var dateDob = dob.getDate();
    var age = {};
    var ageString = "";
    var yearString = "";
    var monthString = "";
    var dayString = "";

    yearAge = yearNow - yearDob;

    if (monthNow >= monthDob) var monthAge = monthNow - monthDob;
    else {
      yearAge--;
      var monthAge = 12 + monthNow - monthDob;
    }

    if (dateNow >= dateDob) var dateAge = dateNow - dateDob;
    else {
      monthAge--;
      var dateAge = 31 + dateNow - dateDob;

      if (monthAge < 0) {
        monthAge = 11;
        yearAge--;
      }
    }

    age = {
      years: yearAge,
      months: monthAge,
      days: dateAge,
    };

    if (age.years > 1) yearString = " ani";
    else yearString = " an";
    if (age.months > 1) monthString = " luni";
    else monthString = " luna";
    if (age.days > 1) dayString = " zile";
    else dayString = " zi";

    if (age.years > 0 && age.months > 0 && age.days > 0)
      ageString =
        age.years +
        yearString +
        ", " +
        age.months +
        monthString +
        ", si " +
        age.days +
        dayString +
        ".";
    else if (age.years == 0 && age.months == 0 && age.days > 0)
      ageString = "Doar " + age.days + dayString + "!";
    else if (age.years > 0 && age.months == 0 && age.days == 0)
      ageString = age.years + yearString + ". Happy Birthday!!";
    else if (age.years > 0 && age.months > 0 && age.days == 0)
      ageString =
        age.years + yearString + " si " + age.months + monthString + ".";
    else if (age.years == 0 && age.months > 0 && age.days > 0)
      ageString =
        age.months + monthString + " si " + age.days + dayString + ".";
    else if (age.years > 0 && age.months == 0 && age.days > 0)
      ageString =
        age.years + yearString + " si " + age.days + dayString + ".";
    else if (age.years == 0 && age.months > 0 && age.days == 0)
      ageString = age.months + monthString + ".";
    else ageString = "Oops! Could not calculate age!";

    return ageString;
  }
 


function displayAge() {
  document.getElementById("ageLocation").innerHTML=getAge(formatAge())
}

document.querySelector(".button-49").addEventListener("click", displayAge)
  

