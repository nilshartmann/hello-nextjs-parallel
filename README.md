# Parallel Routes example

- Motivation: in `/user/layout.tsx` I want to add a `header` component from `user/[userId]`
- While this approach in general seems to work, all routes in `user/[userId]` are rendered twice
  - (see build output when running `pnpm build`)
  - at runtime, you have to click on a link for the next user twice to make it work
    - clicking the link after that again it works correctly, probably because its coming from the cache then
  - `user` route is generated and rendered correctly (one time)

# Try out

* pnpm install
* pnpm build
* pnpm start
* App runs on http://localhost:4001
* Output `Header from /user/XXX` is inserted via parallel route/slot `@header` into `/user`-Layout component