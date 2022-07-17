app.component('review-form', {
  template:
  /*html*/
  `<form class="review-form" @submit.prevent="onSubmit">
    <h3>Leave a review</h3>
    <label for="name">Your Name:</label>
    <input id="name" v-model="name">

    <label for=bname">Select Book</label>
    <select id="bname" v-model="bname">
      <option>Frankenstein</option>
      <option>The Last Man</option>
    </select>

    <label for="comment">Comment:</label>
    <textarea id="comment" v-model="comment"></textarea>

    <label for="rating">Rating:</label>
    <select id="rating" v-model.number="rating">
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>2</option>
      <option>1</option>
    </select>

    <label for="recommend">Would you recommend this product?</label>
    <select id="recommend" v-model="recommend">
      <option>Yes</option>
      <option>No</option>
    </select>

    <input class="button" type="submit" value="Submit">

  </form>`,
  data() {
    return {
      name: '',
      bname: null,
      comment: '',
      rating: null,
      recommend: null

    }
  },
  methods: {
    onSubmit() {
      if (this.name === '' || this.bname === null || this.comment === '' || this.rating === null || this.recommend === null) {
        alert('Review is incomplete. Please fill out every field.')
        return
      }

      let productReview = {
        name: this.name,
        bname:this.bname,
        comment: this.comment,
        rating: this.rating,
        recommend: this.recommend

      }
      this.$emit('review-submitted', productReview)

      this.name = ''
      this.bname = null
      this.comment = ''
      this.rating = null
      this.recommend = null

    }
  }
})
