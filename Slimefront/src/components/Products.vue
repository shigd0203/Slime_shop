<template>
  <div class="container">
    <h2 class="my-4">商品列表</h2>

    <!-- 新增商品表單 -->
    <form @submit.prevent="addProduct" class="mb-4">
      <div class="row g-2">
        <div class="col-md-3">
          <input v-model="newProduct.name" type="text" placeholder="商品名稱" class="form-control" required />
        </div>
        <div class="col-md-2">
          <input v-model.number="newProduct.price" type="number" placeholder="價格" class="form-control" required />
        </div>
        <div class="col-md-4">
          <input v-model="newProduct.image" type="url" placeholder="圖片網址" class="form-control" required />
        </div>
        <div class="col-md-2">
          <button type="submit" class="btn btn-success w-100">新增商品</button>
        </div>
      </div>
    </form>

    <!-- 商品列表 -->
    <div class="d-flex flex-wrap">
      <ProductCard
        v-for="item in products"
        :key="item.id"
        :product="item"
        @add-to-cart="addToCart"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import ProductCard from '../components/ProductCard.vue'

const products = ref([])
const newProduct = ref({
  name: '',
  price: '',
  image: ''
})

const fetchProducts = async () => {
  const res = await axios.get('http://127.0.0.1:8000/api/products')
  products.value = res.data
}

onMounted(fetchProducts)

const addProduct = async () => {
  await axios.post('http://127.0.0.1:8000/api/products', newProduct.value)
  newProduct.value = { name: '', price: '', image: '' }
  fetchProducts()
}

const addToCart = (product) => {
  alert(`加入購物車：${product.name}`)
}
</script>
