import { ref } from "vue"
import { onMounted, onUnmounted } from 'vue';

// let el = window
// const isReachBottom = ref(false)
// const scrollTops = ref(0)
// const clientHeights = ref(0)
// const scrollHeights = ref(0)
// export default function usescroll(isref) {

//   // 监听文档滚动
//   // console.log(isref.value);
//   const scrolls = () => {
//     // 滚动高度
//     if (el === window) {
//       scrollTops.value = document.documentElement.scrollTop
//       // 可视高度
//       clientHeights.value = document.documentElement.clientHeight
//       // 总高度
//       scrollHeights.value = document.documentElement.scrollHeight

//     } else {
//       scrollTops.value = isref.value.scrollTop
//       clientHeights.value = isref.value.clientHeight
//       scrollHeights.value = isref.value.scrollHeight
//       // console.log(scrollTops.value,clientHeights.value,scrollHeights.value);
//       console.log("正在滚动");
//     }

//     if (Math.ceil(scrollTops.value + clientHeights.value) >= scrollHeights.value) {
//       isReachBottom.value = true
//       console.log("滚动到底部了");
//     }
//   }
//   onMounted(() => {
//     if (isref) {
//       el = isref.value;
//     }
//     el.addEventListener("scroll", scrolls)
//   })
//   onUnmounted(() => {
//     el.removeEventListener("scroll", scrolls)
//   })
//   console.log(scrollTops.value);
//   return { isReachBottom, scrollHeights, scrollTops, clientHeights }
// }


export default function useScroll(elRef) {
  let el = window

  const isReachBottom = ref(false)

  const clientHeight = ref(0)
  const scrollTop = ref(0)
  const scrollHeight = ref(0)

 
  const scrollListenerHandler =() => {
    if (el === window) {
      clientHeight.value = document.documentElement.clientHeight
      scrollTop.value = document.documentElement.scrollTop
      scrollHeight.value = document.documentElement.scrollHeight
    } else {
      clientHeight.value = el.clientHeight
      scrollTop.value = el.scrollTop
      scrollHeight.value = el.scrollHeight
    }
    if (clientHeight.value + Math.ceil(scrollTop.value) >= scrollHeight.value) {
      console.log("滚动到底部了")
      isReachBottom.value = true
    }
  }
  
  onMounted(() => {
    if (elRef) el = elRef.value
    // console.log(el);
    el.addEventListener("scroll", scrollListenerHandler)
  })
  
  onUnmounted(() => {
    el.removeEventListener("scroll", scrollListenerHandler)
  })
  return { isReachBottom, clientHeight, scrollTop, scrollHeight }
}
