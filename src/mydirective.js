export default {
    bind(el, bindings) {
        console.log('bind');
        let arg = bindings.arg;
        let mymodifier = bindings.modifiers['font'];
        if (mymodifier) {
            el.style.color = bindings.value;
        }
        el.style[arg] = bindings.value;
    },
    inserted() {
        console.log('inserted');
    },
    update() {
        console.log('update');
    },
    componentUpdated() {
        console.log('componentUpdated');
    },
    unbind() {
        console.log('unbind');
    }
};