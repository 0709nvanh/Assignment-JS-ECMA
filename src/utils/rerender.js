// export const reRender = async (conponent, domElement) => {
//     document.querySelector(domElement).innerHTML = await reRender.component;
//     if(conponent.afterRender) await component.afterRender()
// }
export const reRender = async (component, domElement) => {
    if(component){
        document.querySelector(domElement).innerHTML = await component.render();
    }
    if(component.afterRender) await component.afterRender();
}