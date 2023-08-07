<template>
    <section class="bg-white text-secondaryColor flex justify-center items-center">
        <div class="md:max-w-5xl mx-8 py-4 flex md:justify-between justify-center w-full">
            <div class="mb-8">
                <div class="mb-8">
                    <h2 class="py-2 text-3xl">Get in Touch</h2>
                    <span class="text-xs text-zinc-400 font-bold">SIGN UP FOR OUR NEWSLETTER</span>
                </div>
                <form class="flex flex-col w-80">
                    <input class="input-field" type="text" placeholder="First Name">
                    <input class="input-field" type="text" placeholder="Last Name">
                    <input class="input-field" type="email" placeholder="Email">
                    <input class="input-field bg-secondaryColor text-primaryColor hover:bg-primaryColor hover:text-secondaryColor" type="submit" value="Sign Up">
                </form>
            </div>
            <div class="ml-8 max-w-md h-full overflow-hidden rounded-md hidden md:block">
                <img src="../assets/images/img-display-4.jpg" alt="candles" class="object-cover">
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>