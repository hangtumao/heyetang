import * as THREE from 'three';
// Same camera and unchanged original models as the r02 composition render.
const camera=new THREE.OrthographicCamera(-390,390,312,-312,.1,5000);
camera.position.set(430,720,650);camera.lookAt(0,0,0);camera.updateMatrixWorld();camera.updateProjectionMatrix();
const project=(x,y,z)=>{const p=new THREE.Vector3(x,y,z).project(camera);return[(p.x*.5+.5)*1200,(-p.y*.5+.5)*960]};
export function overviewPreview(places,{active=-1,labels=true,routes=true,layout=null}={}){
 const centers=[[796.332,476.966],[254.376,546.614],[600.468,231.322],[780.228,660]];
 const excluded=places.map(p=>{const r=p.slot*.57,pts=[];for(const x of[-r,r])for(const z of[-r,r])for(const y of[0,48])pts.push(project(p.pos[0]+x,y,p.pos[2]+z));const xs=pts.map(p=>p[0]),ys=pts.map(p=>p[1]);return `<rect x="${Math.min(...xs)-7}" y="${Math.min(...ys)-7}" width="${Math.max(...xs)-Math.min(...xs)+14}" height="${Math.max(...ys)-Math.min(...ys)+14}" fill="black"/>`}).join('');
 const lines=routes&&layout?`<g mask="url(#protect-models)" fill="none" stroke-linecap="round" stroke-linejoin="round">${layout.connections.map(c=>`<polyline points="${c.points.map(([x,z])=>project(x,1,z).join(',')).join(' ')}" stroke="#edf1d5" stroke-width="8" opacity=".2"/><polyline points="${c.points.map(([x,z])=>project(x,1,z).join(',')).join(' ')}" stroke="#d9e3b9" stroke-width="3" opacity=".7"/>`).join('')}</g>`:'';
 const nodes=places.map((p,i)=>{const[x,y]=centers[i];return`<g data-node="${i}" role="button" tabindex="0" aria-label="查看${p.title}" class="preview-node" transform="translate(${x} ${y})"><circle r="36" fill="transparent"/><circle r="9" fill="#f8f4d9" stroke="#4e754b" stroke-width="3"/>${labels?`<g transform="translate(0 40)"><rect x="-77" y="-20" width="154" height="40" rx="7" fill="${active===i?'#365b42':'#f5f7e9'}" stroke="#b5c5a4"/><text y="7" text-anchor="middle" font-size="21" fill="${active===i?'#fff8dd':'#36533c'}">${i+1} ${p.title}</text></g>`:''}</g>`}).join('');
 return`<svg viewBox="65 65 1070 830" xmlns="http://www.w3.org/2000/svg" aria-label="四节点原模型静态全景，可点选景点"><defs><mask id="protect-models"><rect width="1200" height="960" fill="white"/>${excluded}</mask></defs><image href="assets/overview-preview.png" width="1200" height="960"/>${lines}${nodes}</svg>`;
}
