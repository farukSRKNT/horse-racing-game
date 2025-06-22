import{d as f,a as b,o as C,b as n,n as t,t as R,g as o}from"./iframe-DltdmoK9.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";const _=f({__name:"race-template.component",props:{title:{}},setup(a){return(e,A)=>(C(),b("div",{class:t(e.$style.layout)},[n("header",{class:t(e.$style.header)},[n("h1",{class:t(e.$style.title)},R(e.title),3),n("div",{class:t(e.$style.actions)},[o(e.$slots,"actions")],2)],2),n("main",{class:t(e.$style.content)},[n("section",{class:t(e.$style.section)},[o(e.$slots,"left")],2),n("section",{class:t(e.$style.section)},[o(e.$slots,"center")],2),n("section",{class:t(e.$style.section)},[o(e.$slots,"right")],2)],2)],2))}}),$="race-template-component-vue-vue-type-style-index-0-lang-module__layout___xraGQ",S="race-template-component-vue-vue-type-style-index-0-lang-module__header___sSnc0",k="race-template-component-vue-vue-type-style-index-0-lang-module__title___abBMe",x="race-template-component-vue-vue-type-style-index-0-lang-module__actions___C0mga",L="race-template-component-vue-vue-type-style-index-0-lang-module__content___DlR-v",E="race-template-component-vue-vue-type-style-index-0-lang-module__section___UmoUi",D={layout:$,header:S,title:k,actions:x,content:L,section:E},M={$style:D},p=T(_,[["__cssModules",M]]);_.__docgenInfo={exportName:"default",displayName:"race-template.component",description:"",tags:{},props:[{name:"title",required:!0,type:{name:"string"}}],slots:[{name:"actions"},{name:"left"},{name:"center"},{name:"right"}],sourceFiles:["/home/runner/work/horse-racing-game/horse-racing-game/src/components/templates/race/race-template.component.vue"]};const N={title:"Templates/Layout",component:p,parameters:{layout:"fullscreen"},argTypes:{title:{control:"text",description:"Header title text"}}},s={args:{title:"Dashboard"},render:a=>({components:{RaceTemplate:p},setup(){return{args:a}},template:`
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
    `})},r={args:{title:"Simple Layout"},render:a=>({components:{RaceTemplate:p},setup(){return{args:a}},template:`
      <RaceTemplate
     v-bind="args">
        <template #left>Left Content</template>
        <template #center>Center Content</template>
        <template #right>Right Content</template>
      </RaceTemplate
    >
    `})},l={args:{title:"Empty Layout"}};var m,c,i;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(i=(c=s.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var d,u,g;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var y,h,v;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    title: 'Empty Layout'
  }
}`,...(v=(h=l.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const U=["Default","WithoutActions","Empty"];export{s as Default,l as Empty,r as WithoutActions,U as __namedExportsOrder,N as default};
