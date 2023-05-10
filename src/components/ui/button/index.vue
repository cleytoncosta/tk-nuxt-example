<script setup lang="ts">
  import { cva, type VariantProps } from 'class-variance-authority';

  const buttonCva = cva('rounded transition-colors', {
    variants: {
      variant: {
        solid: 'bg-green-600 text-white [:not(:disabled)]hover:bg-green-700',
      },
      size: {
        sm: 'h-8',
        md: 'h-10',
        lg: 'h-12',
      },
      isloading: {
        true: 'opacity-50 cursor-not-allowed',
      },
    },
    defaultVariants: {
      variant: 'solid',
      size: 'md',
      isloading: false,
    },
  });

  type ButtonProps = VariantProps<typeof buttonCva>;

  defineProps<{
    variant?: ButtonProps['variant'];
    size?: ButtonProps['size'];
    isloading?: ButtonProps['isloading'];
  }>();
</script>

<template>
  <button :class="buttonCva({ variant, size, isloading })">
    <!-- <p :v-if="isloading">...loading</p> -->
    <slot />
  </button>
</template>
