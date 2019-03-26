
export let NavBar = {
    render : () => {
        let view =  /*html*/`
        <div class='navBar'>
            <div></div>
            <div class='navProfileWrapper'>
                <img src='../../images/patrick.jpg'/>
                <span>dr.kimpatrick</span>
            </div>
        </div>
        `
        return view
    },
    after_render: async () => {}
  }
  
  export default NavBar;
  