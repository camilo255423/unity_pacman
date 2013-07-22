#pragma strict

function Start () {

}

function Update () {
 

}
function OnTriggerEnter(hit:Collider)
{
if(hit.tag.StartsWith("Galleta"))
{

Destroy(hit.gameObject);
}
}
