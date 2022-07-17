app.component('review-list', {
  props: {
    reviews: {
      type: Array,
      required: true
    }
  },
  template:
  /*html*/
  `
  <div class="review-container">
  <h3>Reviews:</h3>
    <ul>
      <li v-for="(review, index) in reviews" :key="index">
        {{ review.name }} gave {{ review.bname }} {{ review.rating }} stars
        <br>
        Comment: "{{ review.comment }}"
        <br>
        Recommended: {{ review.recommend }}
      </li>
    </ul>
  </div>
`
})
