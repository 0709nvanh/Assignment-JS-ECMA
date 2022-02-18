export const reRender = async (conponent, domElement) => {
    document.querySelector(domElement).innerHTML = await reRender.component;
    if(conponent.afterRender) component.afterRender()
}