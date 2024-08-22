"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[59076],{70883:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>m,data:()=>k});var i=o(86904);const n=(0,i.Lk)("h1",{id:"tuya-ts0601-cover-1",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#tuya-ts0601-cover-1"},[(0,i.Lk)("span",null,"Tuya TS0601_cover_1")])],-1),s=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1),a=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"TS0601_cover_1")],-1),l=(0,i.Lk)("td",null,"Vendor",-1),r=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"Curtain motor/roller blind motor/window pusher/tubular motor")],-1),c=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"cover (state, position), options, linkquality")],-1),d=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TS0601_cover_1.png",alt:"Tuya TS0601_cover_1"})])],-1),u=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"White-label"),(0,i.Lk)("td",null,"Yushun YS-MT750, Zemismart ZM79E-DT, Binthen BCM100D, Binthen CV01A, Zemismart M515EGB, Oz Smart Things ZM85EL-1Z, Tuya M515EGZT, Tuya DT82LEMA-1.2N, Tuya ZD82TN, Larkkey ZSTY-SM-1SRZG-EU, Zemismart AM43, Zemismart M2805EGBZTN, Zemismart BCM500DS-TYZ, A-OK AM25, Alutech AM/R-Sm, Quoya AT8510-TY")],-1),p=(0,i.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h2 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h2><p>On 2-button units; press down and set simultaneously until LED flashes blue. On 1-button units; press the set key 3 times in 5 seconds until the LED flashes blue.</p><h3 id="configuration-of-device-attributes" tabindex="-1"><a class="header-anchor" href="#configuration-of-device-attributes"><span>Configuration of device attributes</span></a></h3><p>By publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> various device attributes can be configured:</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">    <span class="token property">&quot;options&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span></span>\n<span class="line">        <span class="token property">&quot;reverse_direction&quot;</span><span class="token operator">:</span> xxx</span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>reverse_direction</strong>: (<code>true</code>/<code>false</code>, default: <code>false</code>). Device can be configured to act in an opposite direction.</li></ul><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',8),h=(0,i.Fv)('<ul><li><code>invert_cover</code>: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="cover" tabindex="-1"><a class="header-anchor" href="#cover"><span>Cover</span></a></h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="options-composite" tabindex="-1"><a class="header-anchor" href="#options-composite"><span>Options (composite)</span></a></h3><p>Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;options&quot;: {&quot;motor_speed&quot;: VALUE, &quot;reverse_direction&quot;: VALUE}}</code></p><ul><li><code>motor_speed</code> (numeric): Motor speed max value is 255</li><li><code>reverse_direction</code> (binary): Reverse the motor direction allowed values: <code>true</code> or <code>false</code></li></ul><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',9),v={},m=(0,o(19469).A)(v,[["render",function(e,t){const o=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[n,(0,i.Lk)("table",null,[s,(0,i.Lk)("tbody",null,[a,(0,i.Lk)("tr",null,[l,(0,i.Lk)("td",null,[(0,i.bF)(o,{to:"/supported-devices/#v=Tuya"},{default:(0,i.k6)((()=>[(0,i.eW)("Tuya")])),_:1})])]),r,c,d,u])]),p,(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[(0,i.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.k6)((()=>[(0,i.eW)("How to use device type specific configuration")])),_:1})])]),h])}]]),k=JSON.parse('{"path":"/devices/TS0601_cover_1.html","title":"Tuya TS0601_cover_1 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya TS0601_cover_1 control via MQTT","description":"Integrate your Tuya TS0601_cover_1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-02-01T14:45:57.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[]},{"level":2,"title":"Pairing","slug":"pairing","link":"#pairing","children":[{"level":3,"title":"Configuration of device attributes","slug":"configuration-of-device-attributes","link":"#configuration-of-device-attributes","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Cover","slug":"cover","link":"#cover","children":[]},{"level":3,"title":"Options (composite)","slug":"options-composite","link":"#options-composite","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1724266463000},"filePathRelative":"devices/TS0601_cover_1.md"}')}}]);