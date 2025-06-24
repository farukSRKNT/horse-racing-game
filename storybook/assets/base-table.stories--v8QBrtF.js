import{d as Te,r as H,e as Me,c as r,a as n,f as j,n as t,F as E,g as R,h as W,o as l,i as F,t as h}from"./iframe-DzM-ZmAp.js";import{_ as Be}from"./_plugin-vue_export-helper-DlAUqK2U.js";const Ee=["onClick"],Re=["onClick"],Se=Te({__name:"base-table.component",props:{columns:{},data:{},striped:{type:Boolean,default:!0},hoverable:{type:Boolean,default:!0},emptyMessage:{default:"No data available"},defaultSort:{}},emits:["row-click","sort-change"],setup(p,{emit:i}){var A,I;const b=p,c=i,d=H(((A=b.defaultSort)==null?void 0:A.key)||""),u=H(((I=b.defaultSort)==null?void 0:I.direction)||"asc"),De=Me(()=>d.value?[...b.data].sort((e,m)=>{const a=g(e,d.value),s=g(m,d.value);if(a==null)return 1;if(s==null)return-1;const o=a<s?-1:a>s?1:0;return u.value==="asc"?o:-o}):b.data),g=(e,m)=>m.split(".").reduce((a,s)=>a&&typeof a=="object"&&s in a?a[s]:void 0,e),we=(e,m)=>{var a;return((a=e.id)==null?void 0:a.toString())||m.toString()},$e=e=>{d.value===e?u.value=u.value==="asc"?"desc":"asc":(d.value=e,u.value="asc"),c("sort-change",e,u.value)},Ne=e=>d.value!==e?"↕":u.value==="asc"?"↑":"↓";return(e,m)=>(l(),r("div",{class:t(e.$style.tableContainer)},[n("div",{class:t(e.$style.tableHead)},[n("table",{class:t(e.$style.table)},[n("thead",{class:t(e.$style.header)},[n("tr",null,[(l(!0),r(E,null,R(e.columns,a=>(l(),r("th",{key:a.key,class:t([e.$style.headerCell,{[e.$style.sortable]:a.sortable}]),onClick:s=>a.sortable?$e(a.key):null},[n("div",{class:t(e.$style.headerContent)},[F(h(a.label)+" ",1),a.sortable?(l(),r("span",{key:0,class:t(e.$style.sortIcon)},h(Ne(a.key)),3)):j("",!0)],2)],10,Ee))),128))])],2)],2)],2),n("div",{class:t(e.$style.tableBody)},[n("table",{class:t(e.$style.table)},[n("tbody",{class:t(e.$style.body)},[(l(!0),r(E,null,R(De.value,(a,s)=>(l(),r("tr",{key:we(a,s),class:t([e.$style.row,{[e.$style.striped]:e.striped&&s%2===1},{[e.$style.hoverable]:e.hoverable}]),onClick:o=>e.$emit("row-click",a,s)},[(l(!0),r(E,null,R(e.columns,o=>(l(),r("td",{key:o.key,class:t([e.$style.cell,o.cellClass])},[W(e.$slots,`cell-${o.key}`,{row:a,value:g(a,o.key),index:s},()=>[F(h(g(a,o.key)),1)])],2))),128))],10,Re))),128))],2)],2)],2),e.data.length===0?(l(),r("div",{key:0,class:t(e.$style.emptyState)},[W(e.$slots,"empty",{},()=>[n("p",{class:t(e.$style.emptyText)},h(e.emptyMessage),3)])],2)):j("",!0)],2))}}),Ve="_tableContainer_1fu6s_1",Ae="_tableHead_1fu6s_11",Ie="_tableBody_1fu6s_16",He="_table_1fu6s_1",je="_header_1fu6s_29",We="_headerCell_1fu6s_34",Fe="_sortable_1fu6s_41",Le="_headerContent_1fu6s_49",qe="_sortIcon_1fu6s_55",Je="_body_1fu6s_60",Oe="_row_1fu6s_64",ze="_striped_1fu6s_67",Ke="_hoverable_1fu6s_70",Pe="_cell_1fu6s_77",Qe="_emptyState_1fu6s_83",Ue="_emptyText_1fu6s_89",Ge={tableContainer:Ve,tableHead:Ae,tableBody:Ie,table:He,header:je,headerCell:We,sortable:Fe,headerContent:Le,sortIcon:qe,body:Je,row:Oe,striped:ze,hoverable:Ke,cell:Pe,emptyState:Qe,emptyText:Ue},Xe={$style:Ge},Ye=Be(Se,[["__cssModules",Xe]]);Se.__docgenInfo={exportName:"default",displayName:"base-table.component",description:"",tags:{},props:[{name:"columns",required:!0,type:{name:"Array",elements:[{name:"TableColumn"}]}},{name:"data",required:!0,type:{name:"Array",elements:[{name:"TableData"}]}},{name:"striped",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"hoverable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"emptyMessage",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'No data available'"}},{name:"defaultSort",required:!1,type:{name:`{
  key: string
  direction: SortDirection
}`}}],events:[{name:"row-click",type:{names:["TableData"]}},{name:"sort-change",type:{names:["string"]}}],slots:[{name:"`cell-${column.key}`",scoped:!0,bindings:[{name:"name",title:"binding"},{name:"row",title:"binding"},{name:"value",title:"binding"},{name:"index",title:"binding"}]},{name:"empty"}],sourceFiles:["/home/runner/work/horse-racing-game/horse-racing-game/src/components/atoms/table/base-table.component.vue"]};const na={title:"Atoms/BaseTable",component:Ye,parameters:{layout:"centered",docs:{description:{component:"A reusable base table component with sorting, custom cells, and responsive design."}}},argTypes:{striped:{control:"boolean",description:"Apply alternating row colors"},hoverable:{control:"boolean",description:"Enable hover effects on rows"},emptyMessage:{control:"text",description:"Message shown when no data is available"},"onRow-click":{action:"row-clicked"},"onSort-change":{action:"sort-changed"}},tags:["autodocs"]},y=[{key:"name",label:"Name",sortable:!0},{key:"email",label:"Email",sortable:!0},{key:"role",label:"Role",sortable:!1}],B=[{id:"1",name:"John Doe",email:"john@example.com",role:"Developer"},{id:"2",name:"Jane Smith",email:"jane@example.com",role:"Designer"},{id:"3",name:"Bob Johnson",email:"bob@example.com",role:"Manager"}],V=[{key:"name",label:"Horse Name",sortable:!0},{key:"condition",label:"Condition",sortable:!0},{key:"color",label:"Color",sortable:!1},{key:"speed",label:"Speed",sortable:!0}],_e=[{id:"1",name:"Thunder",condition:85,color:"#FF6B6B",speed:"45 km/h"},{id:"2",name:"Lightning",condition:92,color:"#4ECDC4",speed:"48 km/h"},{id:"3",name:"Storm",condition:78,color:"#45B7D1",speed:"42 km/h"},{id:"4",name:"Blaze",condition:88,color:"#F9CA24",speed:"46 km/h"},{id:"5",name:"Shadow",condition:95,color:"#6C5CE7",speed:"50 km/h"}],f={args:{columns:y,data:B,striped:!0,hoverable:!0}},v={args:{columns:y,data:B,striped:!1,hoverable:!0}},k={args:{columns:y,data:B,striped:!0,hoverable:!1}},C={args:{columns:y,data:[],emptyMessage:"No users found"}},S={args:{columns:V,data:[],emptyMessage:"No horses available for racing"}},_={args:{columns:V,data:_e,striped:!0,hoverable:!0,defaultSort:{key:"condition",direction:"desc"}},parameters:{docs:{description:{story:"Example showing horse racing data with condition-based sorting"}}}},Ze=p=>{const i=["Developer","Designer","Manager","QA Engineer","DevOps"];return Array.from({length:p},(b,c)=>({id:String(c+1),name:`User ${c+1}`,email:`user${c+1}@example.com`,role:i[c%i.length]}))},D={args:{columns:y,data:Ze(50),striped:!0,hoverable:!0},parameters:{docs:{description:{story:"Table with 50 rows to test performance and scrolling"}}}},xe=[{key:"user.name",label:"Name",sortable:!0},{key:"user.profile.age",label:"Age",sortable:!0},{key:"user.contact.email",label:"Email",sortable:!1},{key:"department.name",label:"Department",sortable:!0}],ea=[{id:"1",user:{name:"Alice Cooper",profile:{age:29},contact:{email:"alice@company.com"}},department:{name:"Engineering"}},{id:"2",user:{name:"Bob Wilson",profile:{age:34},contact:{email:"bob@company.com"}},department:{name:"Design"}}],w={args:{columns:xe,data:ea,striped:!0,hoverable:!0},parameters:{docs:{description:{story:"Table displaying nested object properties using dot notation"}}}},$={args:{columns:V,data:_e,defaultSort:{key:"condition",direction:"desc"},striped:!0,hoverable:!0},parameters:{docs:{description:{story:"Table with default sorting by condition (descending)"}}}},aa=[{key:"id",label:"ID",sortable:!0,width:"80px"},{key:"name",label:"Full Name",sortable:!0,width:"200px"},{key:"email",label:"Email Address",sortable:!0,width:"250px"},{key:"role",label:"Role",sortable:!1,width:"120px"}],N={args:{columns:aa,data:B.map((p,i)=>({...p,id:i+1})),striped:!0,hoverable:!0},parameters:{docs:{description:{story:"Table with custom column widths specified"}}}},ta=[{key:"position",label:"Position",sortable:!0},{key:"horseName",label:"Horse",sortable:!0},{key:"jockey",label:"Jockey",sortable:!0},{key:"time",label:"Time",sortable:!0},{key:"odds",label:"Odds",sortable:!1}],sa=[{id:"1",position:1,horseName:"Thunder",jockey:"M. Johnson",time:"2:05.32",odds:"3:1"},{id:"2",position:2,horseName:"Lightning",jockey:"S. Williams",time:"2:05.89",odds:"5:2"},{id:"3",position:3,horseName:"Storm",jockey:"R. Davis",time:"2:06.12",odds:"7:2"},{id:"4",position:4,horseName:"Blaze",jockey:"T. Brown",time:"2:06.45",odds:"4:1"}],T={args:{columns:ta,data:sa,defaultSort:{key:"position",direction:"asc"},striped:!0,hoverable:!0},parameters:{docs:{description:{story:"Race results table sorted by finishing position"}}}},M={args:{columns:[{key:"name",label:"Name"},{key:"value",label:"Value"}],data:[{id:"1",name:"Item 1",value:"Value 1"},{id:"2",name:"Item 2",value:"Value 2"}]},parameters:{docs:{description:{story:"Minimal table configuration without sorting or styling options"}}}};var L,q,J;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    data: basicData,
    striped: true,
    hoverable: true
  }
}`,...(J=(q=f.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var O,z,K;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    data: basicData,
    striped: false,
    hoverable: true
  }
}`,...(K=(z=v.parameters)==null?void 0:z.docs)==null?void 0:K.source}}};var P,Q,U;k.parameters={...k.parameters,docs:{...(P=k.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    data: basicData,
    striped: true,
    hoverable: false
  }
}`,...(U=(Q=k.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var G,X,Y;C.parameters={...C.parameters,docs:{...(G=C.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    data: [],
    emptyMessage: 'No users found'
  }
}`,...(Y=(X=C.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,x,ee;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    columns: horseColumns,
    data: [],
    emptyMessage: 'No horses available for racing'
  }
}`,...(ee=(x=S.parameters)==null?void 0:x.docs)==null?void 0:ee.source}}};var ae,te,se;_.parameters={..._.parameters,docs:{...(ae=_.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    columns: horseColumns,
    data: horseData,
    striped: true,
    hoverable: true,
    defaultSort: {
      key: 'condition',
      direction: 'desc'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Example showing horse racing data with condition-based sorting'
      }
    }
  }
}`,...(se=(te=_.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var oe,re,ne;D.parameters={...D.parameters,docs:{...(oe=D.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    data: generateLargeDataset(50),
    striped: true,
    hoverable: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with 50 rows to test performance and scrolling'
      }
    }
  }
}`,...(ne=(re=D.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var le,ie,ce;w.parameters={...w.parameters,docs:{...(le=w.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    columns: nestedColumns,
    data: nestedData,
    striped: true,
    hoverable: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Table displaying nested object properties using dot notation'
      }
    }
  }
}`,...(ce=(ie=w.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var de,ue,me;$.parameters={...$.parameters,docs:{...(de=$.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    columns: horseColumns,
    data: horseData,
    defaultSort: {
      key: 'condition',
      direction: 'desc'
    },
    striped: true,
    hoverable: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with default sorting by condition (descending)'
      }
    }
  }
}`,...(me=(ue=$.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var pe,be,ye;N.parameters={...N.parameters,docs:{...(pe=N.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    columns: customWidthColumns,
    data: basicData.map((item, index) => ({
      ...item,
      id: index + 1
    })),
    striped: true,
    hoverable: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with custom column widths specified'
      }
    }
  }
}`,...(ye=(be=N.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};var ge,he,fe;T.parameters={...T.parameters,docs:{...(ge=T.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    columns: raceResultColumns,
    data: raceResultData,
    defaultSort: {
      key: 'position',
      direction: 'asc'
    },
    striped: true,
    hoverable: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Race results table sorted by finishing position'
      }
    }
  }
}`,...(fe=(he=T.parameters)==null?void 0:he.docs)==null?void 0:fe.source}}};var ve,ke,Ce;M.parameters={...M.parameters,docs:{...(ve=M.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    columns: [{
      key: 'name',
      label: 'Name'
    }, {
      key: 'value',
      label: 'Value'
    }],
    data: [{
      id: '1',
      name: 'Item 1',
      value: 'Value 1'
    }, {
      id: '2',
      name: 'Item 2',
      value: 'Value 2'
    }]
  },
  parameters: {
    docs: {
      description: {
        story: 'Minimal table configuration without sorting or styling options'
      }
    }
  }
}`,...(Ce=(ke=M.parameters)==null?void 0:ke.docs)==null?void 0:Ce.source}}};const la=["Default","WithoutStriping","NotHoverable","EmptyState","CustomEmptyMessage","HorseTable","LargeDataset","NestedObjectData","DefaultSorting","CustomColumnWidths","RaceResults","Minimal"];export{N as CustomColumnWidths,S as CustomEmptyMessage,f as Default,$ as DefaultSorting,C as EmptyState,_ as HorseTable,D as LargeDataset,M as Minimal,w as NestedObjectData,k as NotHoverable,T as RaceResults,v as WithoutStriping,la as __namedExportsOrder,na as default};
