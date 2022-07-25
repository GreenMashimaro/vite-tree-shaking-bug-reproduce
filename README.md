# vite tree shaking bug reproduce

# Operation steps

```
pnpm install

cd runtime

npm run build
```

and then in `./runtime/dist/client` search content `Secure random number generation is not supported by this browser`

When `serialize-javascript` is packaged, it can be searched.

# Problem

Build result is not tree shaking.

In `./packages/utils/src/index.ts` file export function `testTreeShaking`

The testtreeshaking function is never import, but the result of build contains `serialize-javascript`
