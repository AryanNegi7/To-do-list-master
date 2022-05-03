function addlist()
{
    event.preventDefault();
    var t=document.getElementById("tform-text");
    var d=document.getElementById("tform-description");
    var text=t.value;
    var description=d.value;
    if(text=="" || description=="")
    {
        t.style.borderColor="red";
        t.style.style="solid";
        d.style.borderColor="red";
        d.style.style="solid";
        document.getElementById('p1').innerText="Enter text!!";
        document.getElementById('p2').innerText="Enter description!!";
        // alert("enter title and description!!");
        return;
    }
    else
    {
        t.style.borderColor="white";
        t.style.style="solid";
        d.style.borderColor="white";
        d.style.style="solid";
        document.getElementById('p1').innerText="Add an item to your list";
        document.getElementById('p2').innerText="Add an description to your item";
    }
    t.value="";
    d.value="";
    let storeArr=[];
    if(localStorage.getItem('store')==null)
    {
        storeArr=[];
        storeArr.push({text:text,description:description});
        localStorage.setItem('store',JSON.stringify(storeArr));
    }
    else
    {
        storeArrStr=localStorage.getItem('store');
        storeArr=JSON.parse(storeArrStr);
        storeArr.push({text:text,description:description});
        localStorage.setItem('store',JSON.stringify(storeArr));
    }
    showList();
    // document.getElementById('ttable').classList+="card";
    // tbody.=str;
    // console.log(tbody.innerHTML)
    // document.getElementById("ttable").appendChild(element);   
}
const showList=()=>{
    let tbody=document.getElementsByTagName('tbody');
    storeArrStr=localStorage.getItem('store');
    storeArr=JSON.parse(storeArrStr);
    console.log(storeArr);
    let str='';
    document.getElementById('tbody').innerHTML='';
    {storeArr.map((item,i) =>
        // {const element=document.createElement('tr');}
        // element.innerHTML=`<td>1</td>
        // <td>${item.text}</td>
        // <td>${item.description}</td>
        // <td>Action</td>`;
        document.getElementById('tbody').innerHTML+=`<tr>
        <td>${i}</td>
        <td>${item.text}</td>
        <td>${item.description}</td>
        <td><button onclick='del(${i})'>Action</button></td>
        </tr><hr/>`
    )}
}
function del(index){
    toreArrStr=localStorage.getItem('store');
    storeArr=JSON.parse(storeArrStr);
    newArr=[];
    {storeArr.map((item,i)=>{
        if(i!=index)
        {
            newArr.push(item);
        }
    })}
    storeArr=newArr.slice();
    localStorage.setItem('store',JSON.stringify(storeArr));
    showList(); 
}
function resetlist()
{
    event.preventDefault();
    if(localStorage.getItem('store'))
    {
        localStorage.setItem('store',JSON.stringify([]));   
    }
    let tbody=document.getElementsByTagName('tbody');
    storeArrStr=localStorage.getItem('store');
    storeArr=JSON.parse(storeArrStr);
    console.log(storeArr);
    let str='';
    document.getElementById('tbody').innerHTML='';
    var t=document.getElementById("tform-text");
    var d=document.getElementById("tform-description");
    var text=t.value;
    var description=d.value;
    t.style.borderColor="white";
    t.style.style="solid";
    d.style.borderColor="white";
    d.style.style="solid";
    document.getElementById('p1').innerText="Add an item to your list";
    document.getElementById('p2').innerText="Add an description to your item";
    // var k=document.getElementById('ttable');
    // k.innerHTML=tablehead();
}
function tablehead()
{
    return `<tr>
    <th>Sno</th>
    <th>Item Title</th>
    <th>Item Description</th>
    <th>Action</th>
    </tr>`;
}
// window.onload=()=>{
//     var t=document.getElementById('ttable');
//     t.innerHTML=tablehead();
// }