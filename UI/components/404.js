let Error404 = {

    render : async () => {
        let view =  /*html*/`
            <section class="wrapper404">
                <img src='../images/404_2.jpeg'/>
            </section>
        `
        return view
    }
    , after_render: async () => {
    }
}
export default Error404;