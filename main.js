NameOfThingArray = [];
function submit ()
{
 var name1 = document.getElementById("NameOfThing1").value;
 var name2 = document.getElementById("NameOfThing2").value;
 var name3 = document.getElementById("NameOfThing3").value;
 var name4 = document.getElementById("NameOfThing4").value;
 var name5 = document.getElementById("NameOfThing5").value;

NameOfThingArray.push(name1);
NameOfThingArray.push(name2);
NameOfThingArray.push(name3);
NameOfThingArray.push(name4);
NameOfThingArray.push(name5);

document.getElementById("displayname").innerHTML = NameOfThingArray;
document.getElementById("submitButton").style.display = "none";
document.getElementById("sortButton").style.display = "inline-block";
}

function sorting()
{
NameOfThingArray.sort();
document.getElementById("displayname").innerHTML = NameOfThingArray;

}


















