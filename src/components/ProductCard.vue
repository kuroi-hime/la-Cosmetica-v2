<script setup>
defineProps(["product"]);

function goDetails() {
  router.push(`/products/${product.slug_produit}`);
}
</script>

<template>

  <div class="product-card" v-if="product.nom_produit">
    <div class="badge">HOT SALE</div>
    <div class="tilt">
      <div class="img"><img src="https://plus.unsplash.com/premium_photo-1674739375749-7efe56fc8bbb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29zbWV0aWNzfGVufDB8fDB8fHww" alt="Premium Laptop"></div>
    </div>
    <div class="info">
        <div class="cat">categorie</div>
        <h2 class="title">{{product.nom_produit}}</h2>
        <div class="bottom">
          <div class="price">
            <!-- <span class="old">$2,499</span> -->
            <span class="new">{{product.prix_produit}} MAD</span>
          </div>
          <button class="btn">
            <span>Buy</span>
            <svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
          </button>
          <button class="btn">
            <span>Details</span>
            <svg class="icon" width="20" height="20" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="currentColor">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier"> 
                <title>details</title> 
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> 
                  <g id="Combined-Shape" fill="currentColor" transform="translate(64.000000, 64.000000)"> 
                    <path d="M384,64 L384,384 L64,384 L64,64 L384,64 Z M341.333333,106.666667 L106.666667,106.666667 L106.666667,341.333333 L341.333333,341.333333 L341.333333,106.666667 Z M320,1.42108547e-14 L320,42.6666667 L42.666,42.666 L42.6666667,320 L1.42108547e-14,320 L1.42108547e-14,1.42108547e-14 L320,1.42108547e-14 Z M298.666667,234.666667 L298.666667,277.333333 L149.333333,277.333333 L149.333333,234.666667 L298.666667,234.666667 Z M298.666667,149.333333 L298.666667,192 L149.333333,192 L149.333333,149.333333 L298.666667,149.333333 Z"> </path> 
                  </g> 
                </g> 
              </g>
            </svg>
          </button>
        </div>
        <!-- infos part -->
        <div class="meta">
          <div class="rating">
          <span class="rcount">245 orders</span>
          </div>
          <div class="stockless">Out of Stock</div>
          <div class="stock">In Stock</div> 
        </div>
    </div>
  </div>

</template>

<style>
.product-card{width:360px;background:#fff;border-radius:15px;box-shadow:0 5px 20px rgba(0,0,0,.1);transition:.3s;font-family:'Segoe UI',sans-serif;margin:20px auto;overflow:hidden;position:relative;cursor:pointer}
.product-card:hover{transform:translateY(-5px);box-shadow:0 10px 25px rgba(0,0,0,.15)}
.badge{position:absolute;top:10px;right:10px;background: linear-gradient(to right,  rgba(169,3,41,1) 0%,rgba(196,72,72,1) 44%,rgba(170,34,56,1) 100%);color:#fff;padding:5px 10px;font-size:11px;font-weight:600;letter-spacing:1px;text-transform:uppercase;border-radius:10px;box-shadow:0 3px 10px rgba(0,0,0,.2);z-index:10}
.tilt{overflow:hidden}
.img{height:200px;overflow:hidden}
.img img{width:100%;height:100%;object-fit:cover;transition:transform .5s}
.product-card:hover .img img{transform:scale(1.05)}
.info{padding:1.25rem}
.cat{font-size:11px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:#71717A;margin-bottom:5px}
.title{font-size:18px;font-weight:700;color:#18181B;margin:0 0 10px;letter-spacing:-.5px}
.desc{font-size:13px;color:#52525B;line-height:1.4;margin-bottom:12px}
.feats{display:flex;gap:6px;margin-bottom:15px}
.feat{font-size:10px;background:#F4F4F5;color:#71717A;padding:3px 8px;border-radius:10px;font-weight:500}
.bottom{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px}
.price{display:flex;flex-direction:column}
.old{font-size:13px;text-decoration:line-through;color:#A1A1AA;margin-bottom:2px}
.new{font-size:20px;font-weight:700;color:#18181B}
.btn{background:linear-gradient(45deg,#18181B,#27272A);color:#fff;border:none;border-radius:10px;padding:8px 15px;font-size:13px;font-weight:600;cursor:pointer;display:flex;align-items:center;gap:6px;transition:.3s;box-shadow:0 3px 10px rgba(0,0,0,.1)}
.btn:hover{background:linear-gradient(45deg,#27272A,#3F3F46);transform:translateY(-2px);box-shadow:0 5px 15px rgba(0,0,0,.15)}
.btn:before{content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.1),transparent);transition:.5s}
.btn:hover:before{left:100%}
.icon{transition:transform .3s}
.btn:hover .icon{transform:rotate(-10deg) scale(1.1)}
.meta{display:flex;justify-content:space-between;align-items:center;border-top:1px solid #F4F4F5;padding-top:12px}
.rating{display:flex;align-items:center;gap:2px}
.rcount{margin-left:6px;font-size:11px;color:#71717A}
.stock{font-size:11px;font-weight:600;color:#22C55E}
.stockless{font-size:11px;font-weight:600;color:#c53522}

</style>