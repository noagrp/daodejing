class DaodejingEngine{
  constructor(data){
    this.data=data;
    this.chapters=[...(data.chapters||[])];
    this.map=new Map(this.chapters.map(x=>[x.id,x]));
  }
  getMeta(){return this.data.meta;}
  list(){return this.chapters.slice();}
  get(id){return this.map.get(id)||null;}
  indexOf(id){return this.chapters.findIndex(x=>x.id===id);}
  getNext(id){const i=this.indexOf(id);return i>=0&&i<this.chapters.length-1?this.chapters[i+1]:null;}
  getPrevious(id){const i=this.indexOf(id);return i>0?this.chapters[i-1]:null;}
  listByPart(part){return this.chapters.filter(x=>x.part===part);}
  search(q){
    const s=String(q||"").trim().toLowerCase();if(!s)return this.list();
    return this.chapters.filter(x=>[
      x.title,x.part,x.original,x.explanation,x.note,...(x.terms||[]).flat()
    ].join(" ").toLowerCase().includes(s));
  }
}
async function loadDaodejingEngine(url="./data/daodejing.json"){
  const r=await fetch(url,{cache:"no-cache"});
  if(!r.ok)throw new Error("Unable to load 道德经 data");
  return new DaodejingEngine(await r.json());
}
if(typeof window!=="undefined"){
  window.DaodejingEngine=DaodejingEngine;
  window.loadDaodejingEngine=loadDaodejingEngine;
}
if(typeof module!=="undefined"&&module.exports)module.exports={DaodejingEngine,loadDaodejingEngine};