import{createContext as e,useState as n,useEffect as o,createElement as i,useContext as d}from"react";export*from"mirada";var t=e({loaded:!1,cv:void 0}),c=t.Consumer,r=t.Provider,a={wasmBinaryFile:"opencv_js.wasm",usingWasm:!0,onRuntimeInitialized:function(){}},v=function(e){var d=e.openCvVersion,t=void 0===d?"5.x":d,c=e.openCvPath,v=void 0===c?"":c,u=e.children,m=n({loaded:!1,cv:void 0}),p=m[0],s=m[1];return o(function(){var e;document.getElementById("opencv-react")||window.cv||(a.onRuntimeInitialized=function(){s({loaded:!0,cv:window.cv})},window.Module=a,document.body.appendChild(((e=document.createElement("script")).id="opencv-react",e.src=v||"https://docs.opencv.org/"+t+"/opencv.js",e.nonce="true",e.defer=!0,e.async=!0,e)))},[v,t]),i(r,{value:p},u)},u=function(){return d(t)};export{c as OpenCvConsumer,t as OpenCvContext,v as OpenCvProvider,u as useOpenCv};
//# sourceMappingURL=index.modern.js.map