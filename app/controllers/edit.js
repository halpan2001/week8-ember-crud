import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    editPost(post, event){
      event.preventDefault();

      //controller has model from the route
      // let post = this.model;
      post.save().then(() => {
        this.transitionToRoute('post', post.id);
      });
    }
  }
});
