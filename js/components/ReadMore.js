export let readMore = Vue.component("read-more", {
  /* html */
  template: `<div>
            <h2>{{title}}</h2>
            <div>
                <p 
                  class="mb-3 d-block cut-text"  
                  v-bind:style="readMoreStyle" 
                >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos ipsa neque odio consectetur impedit tempore modi accusantium! Voluptatem molestiae nemo inventore soluta corrupti. Culpa perferendis sapiente deserunt aperiam maxime consectetur recusandae quasi commodi dicta temporibus pariatur ab repellendus dignissimos natus aliquam odit ullam, quaerat autem non hic, quidem dolore laboriosam.</p> 
                <button 
                  class="btn btn-primary"
                  @click="readMore"
                >{{readMoreText}}</button>
            </div>
            <hr class="mb-4">
        </div>`,
  data() {
    return {
      title: "",
      readMoreText: "Read More",
      readMoreStyle: "display: none !important",
    };
  },
  methods: {
    readMore() {
      if (this.readMoreText == "Read More" && this.readMoreStyle == "display: none !important") {
        this.readMoreText = "Read Less";
        this.readMoreStyle = "";
      } else {
        this.readMoreText = "Read More";
        this.readMoreStyle = "display: none !important";
      }
    },
  },
  computed: {},
});
