const App = {
    data() {
        return {
            elementList: [],
            elementIndex: undefined,
            isShowPanel: false
            
        }
    },
    methods: {
        addElement() {
            this.elementList.push(
                {
                    width: 50,
                    height: 100,
                    x: 200,
                    y: 200,
                    color: 'red',
                    text: 'text'
                }
            );
        },
        editingElement(index) {
            this.isShowPanel = true;
            this.elementIndex = index;
            const currentElement = this.elementList[this.elementIndex];
            // Присваиваение свойств элемента в инпуты
            Object.keys(currentElement).forEach((prop) => {
                this.$refs[prop].value = currentElement[prop];
            });
        },
        saveElement() {
            this.isShowPanel = false;
            const currentElement = this.elementList[this.elementIndex];
            // Получение значений из инпутов и запись их в элемент
            Object.keys(currentElement).forEach((prop) => {
                currentElement[prop] = this.$refs[prop].value;
                this.$refs[prop].value = '';
            });
            console.log(this.elementList);
        },
        removeElement() {
            const currentElement = this.elementList[this.elementIndex];
            this.elementList.splice(this.elementIndex, 1);
            Object.keys(currentElement).forEach((prop) => {
                this.$refs[prop].value = '';
            });
            this.isShowPanel = false;
        }
    },

}

Vue.createApp(App).mount('#app');