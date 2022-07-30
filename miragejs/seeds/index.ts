/*
 * Mirage JS guide on Seeds: https://miragejs.com/docs/data-layer/factories#in-development
 */

import { Server } from "miragejs";

const productsSeeder = (server: Server) => {
  server.createList('product', 10);
};

export default function seeds(server: Server) {
  productsSeeder(server);
}
