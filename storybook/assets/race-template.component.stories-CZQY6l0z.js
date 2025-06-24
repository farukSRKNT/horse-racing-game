import{d as b,c as v,o as k,a as n,b as t,t as C,h as a}from"./iframe-CyghM2LZ.js";import{_ as R}from"./_plugin-vue_export-helper-DlAUqK2U.js";const _=b({__name:"race-template.component",props:{title:{}},setup(s){return(e,N)=>(k(),v("div",{class:t(e.$style.layout)},[n("header",{class:t(e.$style.header)},[n("h1",{class:t(e.$style.title)},C(e.title),3),n("div",{class:t(e.$style.actions)},[a(e.$slots,"actions")],2)],2),n("main",{class:t(e.$style.content)},[n("section",{class:t(e.$style.top)},[a(e.$slots,"top")],2),n("section",{class:t(e.$style.left)},[a(e.$slots,"left")],2),n("section",{class:t(e.$style.center)},[a(e.$slots,"center")],2),n("section",{class:t(e.$style.right)},[a(e.$slots,"right")],2)],2)],2))}}),$="_layout_1ekz5_1",T="_header_1ekz5_7",z="_title_1ekz5_15",L="_actions_1ekz5_19",S="_content_1ekz5_24",E="_top_1ekz5_35",D="_left_1ekz5_43",A="_center_1ekz5_51",M="_right_1ekz5_57",P={layout:$,header:T,title:z,actions:L,content:S,top:E,left:D,center:A,right:M},B={$style:P},p=R(_,[["__cssModules",B]]);_.__docgenInfo={exportName:"default",displayName:"race-template.component",description:"",tags:{},props:[{name:"title",required:!0,type:{name:"string"}}],slots:[{name:"actions"},{name:"top"},{name:"left"},{name:"center"},{name:"right"}],sourceFiles:["/home/runner/work/horse-racing-game/horse-racing-game/src/components/templates/race/race-template.component.vue"]};const w={title:"Templates/Layout",component:p,parameters:{layout:"fullscreen"},argTypes:{title:{control:"text",description:"Header title text"}}},o={args:{title:"Dashboard"},render:s=>({components:{RaceTemplate:p},setup(){return{args:s}},template:`
      <RaceTemplate
     v-bind="args">
        <template #actions>
          <button>Save</button>
          <button>Export</button>
        </template>

        <template #left>
          <div style="background: #f0f0f0; padding: 1rem; height: 200px;">
            Left Panel Content
          </div>
        </template>

        <template #center>
          <div style="background: #e0e0e0; padding: 1rem; height: 200px;">
            Main Content Area
          </div>
        </template>

        <template #right>
          <div style="background: #f0f0f0; padding: 1rem; height: 200px;">
            Right Panel Content
          </div>
        </template>
      </RaceTemplate
    >
    `})},r={args:{title:"Simple Layout"},render:s=>({components:{RaceTemplate:p},setup(){return{args:s}},template:`
      <RaceTemplate
     v-bind="args">
        <template #left>Left Content</template>
        <template #center>Center Content</template>
        <template #right>Right Content</template>
      </RaceTemplate
    >
    `})},l={args:{title:"Empty Layout"}};var c,m,i;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: 'Dashboard'
  },
  render: args => ({
    components: {
      RaceTemplate
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <RaceTemplate
     v-bind="args">
        <template #actions>
          <button>Save</button>
          <button>Export</button>
        </template>

        <template #left>
          <div style="background: #f0f0f0; padding: 1rem; height: 200px;">
            Left Panel Content
          </div>
        </template>

        <template #center>
          <div style="background: #e0e0e0; padding: 1rem; height: 200px;">
            Main Content Area
          </div>
        </template>

        <template #right>
          <div style="background: #f0f0f0; padding: 1rem; height: 200px;">
            Right Panel Content
          </div>
        </template>
      </RaceTemplate
    >
    \`
  })
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var d,g,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: 'Simple Layout'
  },
  render: args => ({
    components: {
      RaceTemplate
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <RaceTemplate
     v-bind="args">
        <template #left>Left Content</template>
        <template #center>Center Content</template>
        <template #right>Right Content</template>
      </RaceTemplate
    >
    \`
  })
}`,...(u=(g=r.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var h,f,y;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    title: 'Empty Layout'
  }
}`,...(y=(f=l.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const F=["Default","WithoutActions","Empty"];export{o as Default,l as Empty,r as WithoutActions,F as __namedExportsOrder,w as default};
