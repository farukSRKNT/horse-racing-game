import{d as $e,r as I,c as Me,a as n,b as m,e as L,n as s,F as E,f as R,g as W,o as r,h as j,t as h}from"./iframe-DltdmoK9.js";import{_ as Be}from"./_plugin-vue_export-helper-DlAUqK2U.js";const Ee=["onClick"],Re=["onClick"],Ce=$e({__name:"base-table.component",props:{columns:{},data:{},striped:{type:Boolean,default:!0},hoverable:{type:Boolean,default:!0},emptyMessage:{default:"No data available"},defaultSort:{}},emits:["row-click","sort-change"],setup(p,{emit:l}){var A,x;const b=p,i=l,c=I(((A=b.defaultSort)==null?void 0:A.key)||""),d=I(((x=b.defaultSort)==null?void 0:x.direction)||"asc"),De=Me(()=>c.value?[...b.data].sort((e,u)=>{const a=g(e,c.value),t=g(u,c.value);if(a==null)return 1;if(t==null)return-1;const o=a<t?-1:a>t?1:0;return d.value==="asc"?o:-o}):b.data),g=(e,u)=>u.split(".").reduce((a,t)=>a&&typeof a=="object"&&t in a?a[t]:void 0,e),we=(e,u)=>{var a;return((a=e.id)==null?void 0:a.toString())||u.toString()},Ne=e=>{c.value===e?d.value=d.value==="asc"?"desc":"asc":(c.value=e,d.value="asc"),i("sort-change",e,d.value)},Te=e=>c.value!==e?"↕":d.value==="asc"?"↑":"↓";return(e,u)=>(r(),n("div",{class:s(e.$style.tableContainer)},[m("table",{class:s(e.$style.table)},[m("thead",{class:s(e.$style.header)},[m("tr",null,[(r(!0),n(E,null,R(e.columns,a=>(r(),n("th",{key:a.key,class:s([e.$style.headerCell,{[e.$style.sortable]:a.sortable}]),onClick:t=>a.sortable?Ne(a.key):null},[m("div",{class:s(e.$style.headerContent)},[j(h(a.label)+" ",1),a.sortable?(r(),n("span",{key:0,class:s(e.$style.sortIcon)},h(Te(a.key)),3)):L("",!0)],2)],10,Ee))),128))])],2),m("tbody",{class:s(e.$style.body)},[(r(!0),n(E,null,R(De.value,(a,t)=>(r(),n("tr",{key:we(a,t),class:s([e.$style.row,{[e.$style.striped]:e.striped&&t%2===1},{[e.$style.hoverable]:e.hoverable}]),onClick:o=>e.$emit("row-click",a,t)},[(r(!0),n(E,null,R(e.columns,o=>(r(),n("td",{key:o.key,class:s([e.$style.cell,o.cellClass])},[W(e.$slots,`cell-${o.key}`,{row:a,value:g(a,o.key),index:t},()=>[j(h(g(a,o.key)),1)])],2))),128))],10,Re))),128))],2)],2),e.data.length===0?(r(),n("div",{key:0,class:s(e.$style.emptyState)},[W(e.$slots,"empty",{},()=>[m("p",{class:s(e.$style.emptyText)},h(e.emptyMessage),3)])],2)):L("",!0)],2))}}),Ve="base-table-component-vue-vue-type-style-index-0-lang-module__tableContainer___qWD4J",Ae="base-table-component-vue-vue-type-style-index-0-lang-module__table___XylGc",xe="base-table-component-vue-vue-type-style-index-0-lang-module__header___BLd2O",Ie="base-table-component-vue-vue-type-style-index-0-lang-module__headerCell___mYfHA",Le="base-table-component-vue-vue-type-style-index-0-lang-module__sortable___lhPgF",We="base-table-component-vue-vue-type-style-index-0-lang-module__headerContent___uzwMN",je="base-table-component-vue-vue-type-style-index-0-lang-module__sortIcon___bLwXe",qe="base-table-component-vue-vue-type-style-index-0-lang-module__body___Liy9L",Fe="base-table-component-vue-vue-type-style-index-0-lang-module__row___bqq8W",He="base-table-component-vue-vue-type-style-index-0-lang-module__striped___YHIA9",Je="base-table-component-vue-vue-type-style-index-0-lang-module__hoverable___fugbV",Oe="base-table-component-vue-vue-type-style-index-0-lang-module__cell___u4-We",ze="base-table-component-vue-vue-type-style-index-0-lang-module__emptyState___KRm-4",Ke="base-table-component-vue-vue-type-style-index-0-lang-module__emptyText___owdnu",Pe={tableContainer:Ve,table:Ae,header:xe,headerCell:Ie,sortable:Le,headerContent:We,sortIcon:je,body:qe,row:Fe,striped:He,hoverable:Je,cell:Oe,emptyState:ze,emptyText:Ke},Xe={$style:Pe},Ye=Be(Ce,[["__cssModules",Xe]]);Ce.__docgenInfo={exportName:"default",displayName:"base-table.component",description:"",tags:{},props:[{name:"columns",required:!0,type:{name:"Array",elements:[{name:"TableColumn"}]}},{name:"data",required:!0,type:{name:"Array",elements:[{name:"TableData"}]}},{name:"striped",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"hoverable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"emptyMessage",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'No data available'"}},{name:"defaultSort",required:!1,type:{name:`{
  key: string
  direction: SortDirection
}`}}],events:[{name:"row-click",type:{names:["TableData"]}},{name:"sort-change",type:{names:["string"]}}],slots:[{name:"`cell-${column.key}`",scoped:!0,bindings:[{name:"name",title:"binding"},{name:"row",title:"binding"},{name:"value",title:"binding"},{name:"index",title:"binding"}]},{name:"empty"}],sourceFiles:["/home/runner/work/horse-racing-game/horse-racing-game/src/components/atoms/table/base-table.component.vue"]};const oa={title:"Atoms/BaseTable",component:Ye,parameters:{layout:"centered",docs:{description:{component:"A reusable base table component with sorting, custom cells, and responsive design."}}},argTypes:{striped:{control:"boolean",description:"Apply alternating row colors"},hoverable:{control:"boolean",description:"Enable hover effects on rows"},emptyMessage:{control:"text",description:"Message shown when no data is available"},"onRow-click":{action:"row-clicked"},"onSort-change":{action:"sort-changed"}},tags:["autodocs"]},y=[{key:"name",label:"Name",sortable:!0},{key:"email",label:"Email",sortable:!0},{key:"role",label:"Role",sortable:!1}],B=[{id:"1",name:"John Doe",email:"john@example.com",role:"Developer"},{id:"2",name:"Jane Smith",email:"jane@example.com",role:"Designer"},{id:"3",name:"Bob Johnson",email:"bob@example.com",role:"Manager"}],V=[{key:"name",label:"Horse Name",sortable:!0},{key:"condition",label:"Condition",sortable:!0},{key:"color",label:"Color",sortable:!1},{key:"speed",label:"Speed",sortable:!0}],Se=[{id:"1",name:"Thunder",condition:85,color:"#FF6B6B",speed:"45 km/h"},{id:"2",name:"Lightning",condition:92,color:"#4ECDC4",speed:"48 km/h"},{id:"3",name:"Storm",condition:78,color:"#45B7D1",speed:"42 km/h"},{id:"4",name:"Blaze",condition:88,color:"#F9CA24",speed:"46 km/h"},{id:"5",name:"Shadow",condition:95,color:"#6C5CE7",speed:"50 km/h"}],v={args:{columns:y,data:B,striped:!0,hoverable:!0}},f={args:{columns:y,data:B,striped:!1,hoverable:!0}},_={args:{columns:y,data:B,striped:!0,hoverable:!1}},k={args:{columns:y,data:[],emptyMessage:"No users found"}},C={args:{columns:V,data:[],emptyMessage:"No horses available for racing"}},S={args:{columns:V,data:Se,striped:!0,hoverable:!0,defaultSort:{key:"condition",direction:"desc"}},parameters:{docs:{description:{story:"Example showing horse racing data with condition-based sorting"}}}},Ge=p=>{const l=["Developer","Designer","Manager","QA Engineer","DevOps"];return Array.from({length:p},(b,i)=>({id:String(i+1),name:`User ${i+1}`,email:`user${i+1}@example.com`,role:l[i%l.length]}))},D={args:{columns:y,data:Ge(50),striped:!0,hoverable:!0},parameters:{docs:{description:{story:"Table with 50 rows to test performance and scrolling"}}}},Qe=[{key:"user.name",label:"Name",sortable:!0},{key:"user.profile.age",label:"Age",sortable:!0},{key:"user.contact.email",label:"Email",sortable:!1},{key:"department.name",label:"Department",sortable:!0}],Ue=[{id:"1",user:{name:"Alice Cooper",profile:{age:29},contact:{email:"alice@company.com"}},department:{name:"Engineering"}},{id:"2",user:{name:"Bob Wilson",profile:{age:34},contact:{email:"bob@company.com"}},department:{name:"Design"}}],w={args:{columns:Qe,data:Ue,striped:!0,hoverable:!0},parameters:{docs:{description:{story:"Table displaying nested object properties using dot notation"}}}},N={args:{columns:V,data:Se,defaultSort:{key:"condition",direction:"desc"},striped:!0,hoverable:!0},parameters:{docs:{description:{story:"Table with default sorting by condition (descending)"}}}},Ze=[{key:"id",label:"ID",sortable:!0,width:"80px"},{key:"name",label:"Full Name",sortable:!0,width:"200px"},{key:"email",label:"Email Address",sortable:!0,width:"250px"},{key:"role",label:"Role",sortable:!1,width:"120px"}],T={args:{columns:Ze,data:B.map((p,l)=>({...p,id:l+1})),striped:!0,hoverable:!0},parameters:{docs:{description:{story:"Table with custom column widths specified"}}}},ea=[{key:"position",label:"Position",sortable:!0},{key:"horseName",label:"Horse",sortable:!0},{key:"jockey",label:"Jockey",sortable:!0},{key:"time",label:"Time",sortable:!0},{key:"odds",label:"Odds",sortable:!1}],aa=[{id:"1",position:1,horseName:"Thunder",jockey:"M. Johnson",time:"2:05.32",odds:"3:1"},{id:"2",position:2,horseName:"Lightning",jockey:"S. Williams",time:"2:05.89",odds:"5:2"},{id:"3",position:3,horseName:"Storm",jockey:"R. Davis",time:"2:06.12",odds:"7:2"},{id:"4",position:4,horseName:"Blaze",jockey:"T. Brown",time:"2:06.45",odds:"4:1"}],$={args:{columns:ea,data:aa,defaultSort:{key:"position",direction:"asc"},striped:!0,hoverable:!0},parameters:{docs:{description:{story:"Race results table sorted by finishing position"}}}},M={args:{columns:[{key:"name",label:"Name"},{key:"value",label:"Value"}],data:[{id:"1",name:"Item 1",value:"Value 1"},{id:"2",name:"Item 2",value:"Value 2"}]},parameters:{docs:{description:{story:"Minimal table configuration without sorting or styling options"}}}};var q,F,H;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    data: basicData,
    striped: true,
    hoverable: true
  }
}`,...(H=(F=v.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var J,O,z;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    data: basicData,
    striped: false,
    hoverable: true
  }
}`,...(z=(O=f.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};var K,P,X;_.parameters={..._.parameters,docs:{...(K=_.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    data: basicData,
    striped: true,
    hoverable: false
  }
}`,...(X=(P=_.parameters)==null?void 0:P.docs)==null?void 0:X.source}}};var Y,G,Q;k.parameters={...k.parameters,docs:{...(Y=k.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    columns: basicColumns,
    data: [],
    emptyMessage: 'No users found'
  }
}`,...(Q=(G=k.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var U,Z,ee;C.parameters={...C.parameters,docs:{...(U=C.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    columns: horseColumns,
    data: [],
    emptyMessage: 'No horses available for racing'
  }
}`,...(ee=(Z=C.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,te,se;S.parameters={...S.parameters,docs:{...(ae=S.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(se=(te=S.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var oe,ne,re;D.parameters={...D.parameters,docs:{...(oe=D.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(re=(ne=D.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var le,ie,ce;w.parameters={...w.parameters,docs:{...(le=w.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ce=(ie=w.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var de,ue,me;N.parameters={...N.parameters,docs:{...(de=N.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(me=(ue=N.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var pe,be,ye;T.parameters={...T.parameters,docs:{...(pe=T.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ye=(be=T.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};var ge,he,ve;$.parameters={...$.parameters,docs:{...(ge=$.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(ve=(he=$.parameters)==null?void 0:he.docs)==null?void 0:ve.source}}};var fe,_e,ke;M.parameters={...M.parameters,docs:{...(fe=M.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(ke=(_e=M.parameters)==null?void 0:_e.docs)==null?void 0:ke.source}}};const na=["Default","WithoutStriping","NotHoverable","EmptyState","CustomEmptyMessage","HorseTable","LargeDataset","NestedObjectData","DefaultSorting","CustomColumnWidths","RaceResults","Minimal"];export{T as CustomColumnWidths,C as CustomEmptyMessage,v as Default,N as DefaultSorting,k as EmptyState,S as HorseTable,D as LargeDataset,M as Minimal,w as NestedObjectData,_ as NotHoverable,$ as RaceResults,f as WithoutStriping,na as __namedExportsOrder,oa as default};
