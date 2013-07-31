#pragma strict

var sonidoComerGalleta:AudioClip;
var camara:Camera;

function Start () {

}

function Update () {
 

}
function OnTriggerEnter(hit:Collider)
{
if(hit.tag.StartsWith("Galleta"))
{

this.audio.PlayClipAtPoint(this.sonidoComerGalleta, camara.transform.position);
Destroy(hit.gameObject);
}
}
