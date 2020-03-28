export const tabControlMixin = {
  data(){
    return {
      currentType:'pop',
    }
  },
  methods:{
    tabClick(index){
      switch(index){
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell';
          break;
      }

    }

  }

}