    // using regex to find the url
    let str = window.location.href;
    let matchedStr = str.match(/(iframe=|url=).+?(?=(&|\s|\n|$))/);
    let urlStr = matchedStr[0].replace(/(iframe=|url=)/ , "");
    urlStr =urlStr.replace(/http/ , "https");
    const url = decodeURIComponent(urlStr);
    console.log("url : " , url);
    //div element which holds iframe and button
    let mydiv = document.createElement("div");
    mydiv.id = "pluginMydiv";

    //hover button
    let hoverbtn = document.createElement("button");
    hoverbtn.innerHTML = "<button type='button'>Hover</button>";
    hoverbtn.id = "pluginHoverbtn";
    mydiv.innerHTML = "<button type='button' id='pluginHoverbtn'>Hover</button>";

    //css styles
    const style = document.createElement('style');
    style.innerHTML = `
        #pluginHoverbtn:hover {
            color: white;
            background-color: black;
            
        }

        #pluginMydiv>div {
            margin:10px auto;
            text-align:center
        }

        #pluginMydiv{
            margin:10px auto;
        }

        #pluginHoverbtn{
            padding:5px;
            border:black solid 2px;
        }
    `;
    
    // append style to DOM
    document.head.appendChild(style);
    mydiv.innerHTML = "<div><button type='button' id='pluginHoverbtn'>Hover</button></div><div><iframe src="+url+" width='680' height='480' allowfullscreen></iframe></div>";
    //add the div to the body tag
    document.body.appendChild(mydiv) ;
    