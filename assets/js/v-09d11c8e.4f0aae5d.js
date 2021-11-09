"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[82998],{16822:(e,t,a)=>{a.r(t),a.d(t,{data:()=>i});const i={key:"v-09d11c8e",path:"/devices/LS21001.html",title:"Linkind LS21001 control via MQTT",lang:"en-US",frontmatter:{title:"Linkind LS21001 control via MQTT",description:"Integrate your Linkind LS21001 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2021-09-01T18:11:17.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Water_leak (binary)",slug:"water-leak-binary",children:[]},{level:3,title:"Battery_low (binary)",slug:"battery-low-binary",children:[]},{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Alert_behaviour (enum)",slug:"alert-behaviour-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/LS21001.md",git:{updatedTime:1636462235e3}}},78566:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const i=(0,a(66252).uE)('<h1 id="linkind-ls21001" tabindex="-1"><a class="header-anchor" href="#linkind-ls21001" aria-hidden="true">#</a> Linkind LS21001</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>LS21001</td></tr><tr><td>Vendor</td><td>Linkind</td></tr><tr><td>Description</td><td>Water leak sensor</td></tr><tr><td>Exposes</td><td>water_leak, battery_low, battery, alert_behaviour, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/LS21001.jpg" alt="Linkind LS21001"></td></tr></tbody></table><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="water-leak-binary" tabindex="-1"><a class="header-anchor" href="#water-leak-binary" aria-hidden="true">#</a> Water_leak (binary)</h3><p>Indicates whether the device detected a water leak. Value can be found in the published state on the <code>water_leak</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> water_leak is ON, if <code>false</code> OFF.</p><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary" aria-hidden="true">#</a> Battery_low (binary)</h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery_low is ON, if <code>false</code> OFF.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="alert-behaviour-enum" tabindex="-1"><a class="header-anchor" href="#alert-behaviour-enum" aria-hidden="true">#</a> Alert_behaviour (enum)</h3><p>Controls behaviour of led/siren on alarm. Value can be found in the published state on the <code>alert_behaviour</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alert_behaviour&quot;: NEW_VALUE}</code>. The possible values are: <code>siren_led</code>, <code>siren</code>, <code>led</code>, <code>nothing</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',13),d={},r=(0,a(83744).Z)(d,[["render",function(e,t){return i}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[a,i]of t)e[a]=i;return e}}}]);