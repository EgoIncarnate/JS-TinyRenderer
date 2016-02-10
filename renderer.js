/*! SoftwareRenderer - ver. 0.1.0 */
function drawInit(){var a=document.getElementById("render");if(a.getContext){var b=a.getContext("2d");img=Object.create(Img),img.init(b),img.clear(),console.log("canvas loaded"),img.set(52,141,255,0,0),start=new Date;for(var c=0;1e6>c;c++)img.line(13,20,80,40,255,255,255),img.line(20,13,40,80,255,0,0),img.line(80,40,13,20,255,0,0);end=new Date;var d="Execution took "+(end.getTime()-start.getTime())+" ms";img.flush(),document.getElementById("info").innerHTML=d,console.log(d)}else console.error("Canvas context not supported!")}var Img=new Object;Img.ctx=null,Img.imgData=null,Img.util=null,Img.init=function(a){this.ctx=a,this.util=Object.create(Util),this.calls=0;var b=a.canvas.clientWidth;for(this.log2width=1;b>>=1;)this.log2width++;this.w=1<<this.log2width,this.h=a.canvas.clientHeight,console.log(this),this.imgData=a.createImageData(this.w,this.h),a.translate(0,this.h),a.scale(1,-1)},Img.clear=function(a){const b=this.imgData.data.length;for(var c=0;b>c;c+=4)this.imgData.data[c+3]=255},Img.set=function(a,b,c,d,e){const f=(b<<this.log2width)+a<<2;this.imgData.data[f]=c,this.imgData.data[f+1]=d,this.imgData.data[f+2]=e,this.imgData.data[f+3]=255,this.calls++},Img.line=function(a,b,c,d,e,f,g){var h=!1;Math.abs(a-c)<Math.abs(b-d)&&(b=[a,a=b][0],d=[c,c=d][0],h=!0),a>c&&(c=[a,a=c][0],d=[b,b=d][0]);const i=c-a,j=d-b,k=Math.abs(j/i);for(var l=0,m=b,n=a;c>=n;n++)h?this.set(n,m,e,f,g):this.set(m,n,e,f,g),l+=k,l>.5&&(m+=d>b?1:-1,l--)},Img.flush=function(){this.ctx.putImageData(this.imgData,0,0),console.log("Pixel draw calls: "+this.calls)};var Util=new Object,OBJmodel=new Object;OBJmodel.load=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1),b.onload=function(){if(200===b.status||0==b.status){var a=rawFile.responseText;console.log(a)}},b.send(null)};