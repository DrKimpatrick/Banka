let Error404 = {

    render : async () => {
        let view =  /*html*/`
            <section class="wrapper404">
                <img src="https://www.dropbox.com/s/vbc0rkbz8qq5wyv/patrick.jpg?raw=1"/>
            </section>
        `
        return view
    }
    , after_render: async () => {
    }
}
export default Error404;