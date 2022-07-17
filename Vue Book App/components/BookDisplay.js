app.component('product-display', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template:
  /*html*/
  `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img v-bind:src="image">
      </div>
      <div class="product-info">
        <h1>{{ brand }}</h1>
        <h3>{{ product }}</h3>

        <p v-if="inStock"><b>Frankenstein</b> (1818)<br><br>In Stock</p>
        <p v-else><b>The Last Man</b> (1826)<br><br>Out of Stock</p>

        <p>Shipping: {{ shipping }}</p>
        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>

        <div
          v-for="(book, index) in books"
          :key="book.id"
          @mouseover="updateProduct(index)"
          class="color-circle"
          :style="{ backgroundColor: book.color }">
        </div>

        <button
          class="button"
          :class="{ disabledButton: !inStock }"
          :disabled="!inStock"
          v-on:click="addToCart">
          Add to Cart
        </button>
      </div>
    </div>
    <review-list v-if="reviews.length" :reviews="reviews"></review-list>
    <review-form @review-submitted="addReview"></review-form>
  </div>`,
  data() {
    return {
        product: 'Explore the Mary Shelley Collection',
        brand: 'The Bookstore',
        selectedBook: 0,
        details: ['Language: English', 'Binding: Paperback'],
        books: [
          { id: 1, color: 'black', image: './assets/images/Frankenstein.jpg', quantity: 50 },
          { id: 2, color: 'red', image: './assets/images/TheLastMan.jpg', quantity: 0 },
        ],
        reviews: []
    }
  },
  methods: {
      addToCart() {
          this.$emit('add-to-cart', this.books[this.selectedBook].id)
      },
      updateProduct(index) {
          this.selectedBook = index
      },
      addReview(review) {
        this.reviews.push(review)
      }
  },
  computed: {
    
      image() {
          return this.books[this.selectedBook].image
      },
      inStock() {
          return this.books[this.selectedBook].quantity
      },
      shipping() {
        if (this.premium) {
          return 'Free'
        }
        return 2.99
      }
  }
})
