[...document.querySelectorAll(".input-location-dependant")].forEach(element =>
    element.classList.toggle("d-none")
  );

  // Function to set multiple attributes at once
  const setAttributes = (el, attrs) => {
    for (var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  };

  const toggleDistrict = target => {
    let lga = target.value,                                                         // Get value of lga
      selectDistrictOption = ["Select District..."],                                            // Define this once so as not to repeat it multiple times
      districtList = { 
		  Basse :[

"Basse Fulladu East ",
"Jimara ",
"Kantora ",
"Sandu ",
"Tumana" ,
"Wuli East ",
"Wuli West",
] ,
Janjanbureh :[



"Fulladu West",
"Janjanbureh",
"Niamina Dankunku", 
"Niamina East", 
"Niamina West" ],
Kuntaur :[

"Lower Saloum ",
"Niani ",
"Nianija" ,
"Sami" ,
"Upper Saloum" ],


Banjul :[


"Banjul Central", 
"Banjul North ",
"Banjul South" 
],
Kanifing :[


"Kanifing" ],

Brikama :[


"Foni Bintang-Karenai ",
"Foni Bondali ",
"Foni Brefet" ,
"Foni Jarrol" ,
"Foni Kansala ",
"Kombo Central ",
"Kombo East ",
"Kombo North ",
"Kombo South" ,
],

Kerewan :[

"Central Baddibu ",
"Illiasa" ,
"Jokadu" ,
"Lower Baddibu", 
"Lower Niumi ",
"Sabach Sanjal ",
"Upper Niumi "
],
Mansakonko :[


"Jarra Central ",
"Jarra East", 
"Jarra West ",
"Kiang Central",
"Kiang East ",
"Kiang West "

]
}[lga],                                                                       // Ternary switch operator to show list of Districts based on chosen lga
districts = [...selectDistrictOption, ...Object.values(districtList)],                         // Join select District option with list of Districts
form = target.parentElement.parentElement.parentElement.parentElement,          // Get parent up to the forth generation just in case District select element is deeply nested
districtSelect = form.querySelector(".select-district"),                                  // Get the District select element
length = districtSelect.options.length;                                              // Get number of options already existing in District select element

// Clear LGS select element
for (i = length - 1; i >= 0; i--) {
districtSelect.options[i] = null;
}

// Populate LGA select element
districts.forEach(district => {
let opt = document.createElement("option");                                     // Create option element
opt.appendChild(document.createTextNode(district));                                  // Append District to it
opt.value = district;                                                                // Set the value to District

// Make option asking you to select unclickable
district.includes("elect")
  ? setAttributes(opt, { disabled: "disabled", selected: "selected" })
  : "";

// Add this option element to LGA select element
districtSelect.appendChild(opt);
});
};
