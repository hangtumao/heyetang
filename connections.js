// Abstract exhibition links, never real roads. Coordinates are presentation units.
// Protect the entire normalized model and the circular exhibition pad, not only buildings.
export const CONNECTION_MARGIN = 14;
export function createConnectionLayout(places, bounds) {
 const obstacles=places.map((p,i)=>{
  const b=bounds[i], sx=b.max[0]-b.min[0], sz=b.max[2]-b.min[2],scale=p.slot/Math.max(sx,sz);
  const hx=Math.max(sx*scale/2,p.slot*.53),hz=Math.max(sz*scale/2,p.slot*.53);
  return{id:p.id,minX:p.pos[0]-hx,maxX:p.pos[0]+hx,minZ:p.pos[2]-hz,maxZ:p.pos[2]+hz};
 });
 const anchors=places.map((p,i)=>i===2?[p.pos[0],obstacles[i].maxZ+18]:[obstacles[i].minX-18,p.pos[2]]);
 const junction=[-40,-60];
 const connections=[
  {id:'fuhoutang-link',node:0,proposed:false,points:[junction,[0,-62],anchors[0]]},
  {id:'baiyutang-link',node:1,proposed:false,points:[junction,[-82,-5],[-92,88],[-215,116],[-215,places[1].pos[2]],anchors[1]]},
  {id:'guangjiatang-link',node:2,proposed:true,points:[junction,[-92,-104],anchors[2]]},
  {id:'disheng-link',node:3,proposed:false,points:[junction,[0,20],[40,40],[76,60],anchors[3]]}
 ];
 return{obstacles,anchors,connections};
}
export function segmentTouchesBox(a,b,box,margin=CONNECTION_MARGIN){
 const min=[box.minX-margin,box.minZ-margin],max=[box.maxX+margin,box.maxZ+margin];let lo=0,hi=1;
 for(let i=0;i<2;i++){const d=b[i]-a[i];if(Math.abs(d)<1e-12){if(a[i]<min[i]||a[i]>max[i])return false;continue}let t0=(min[i]-a[i])/d,t1=(max[i]-a[i])/d;if(t0>t1)[t0,t1]=[t1,t0];lo=Math.max(lo,t0);hi=Math.min(hi,t1);if(lo>hi)return false}return true;
}
export function auditConnections(layout){const violations=[];for(const c of layout.connections)for(let i=1;i<c.points.length;i++)for(const o of layout.obstacles)if(segmentTouchesBox(c.points[i-1],c.points[i],o))violations.push({connection:c.id,segment:i-1,obstacle:o.id});return violations;}
