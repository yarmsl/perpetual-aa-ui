
FROM node:16-alpine AS builder
WORKDIR /web
ADD package.json package.json
RUN yarn install
ADD . .
RUN yarn build

FROM nginx:1.21.0-alpine as production
ENV NODE_ENV production
COPY --from=builder /web/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]