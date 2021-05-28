const btn=document.querySelector('#btn');
const calculateTemp=()=>{
    const numberTemp=document.getElementById('insert').value;
    const tempselected=document.getElementById('temp');
    const valueTemp=temp.options[tempselected.selectedIndex].value;
    const celToFah=(cel)=>{
        let fahrenhite=Math.round((cel*9/5)+32);
        return fahrenhite;
    }
    const fahToCel=(fah)=>{
        let celcius=Math.round((fah-32)*5/9);
        return celcius;
    }
    var result;
    if(valueTemp=='cel'){
        result=celToFah(numberTemp);
        document.getElementById('para').innerHTML=`=${result} Fahrenheit`;
    }
    else if(valueTemp=='fah'){
        result=fahToCel(numberTemp);
        document.getElementById('para').innerHTML=`=${result} Celcius`; 
    }
}
btn.addEventListener('click',calculateTemp);