
export const getFormData = (form: HTMLFormElement) => {
    const formData: FormData = new FormData();

    Array.from(form.elements)
        .forEach(elt => {
            if(elt.tagName.toLocaleLowerCase() !== "input"){
                return;
            }
            const inputElt = elt as HTMLInputElement;
            const inputName = inputElt.name;
            
            if(inputName){
                formData.append(inputName, inputElt.value);
            }
        });
    return formData;
    
}
export const getFormDataJSON = (form: HTMLFormElement) => {
    const formData: {[key: string]: string } = {};
    Array.from(form.elements)
        .forEach(elt => {
            if(elt.tagName.toLocaleLowerCase() !== "input"){
                return;
            }
            const inputElt = elt as HTMLInputElement;
            const inputName = inputElt.name;
            
            if(inputName){
                formData[inputName] = inputElt.value;
            }
        });
    return formData;
    
}