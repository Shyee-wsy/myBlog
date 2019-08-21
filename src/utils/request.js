import axios from 'axios'
import Vue from 'vue'
import state from '../store/index'

const service = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 15000
})
