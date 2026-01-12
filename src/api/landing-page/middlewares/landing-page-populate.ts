/**
 * `landing-page-populate` middleware
 */

import type { Core } from "@strapi/strapi";

const populate = {
  blocks: {
    on: {
      "blocks.hero": {
        populate: {
          links: true,
          stats: true,
          info_card: {
            populate: {
              link: true,
            },
          },
          video: true,
        },
      },
      "blocks.section-heading": true,
      "blocks.card-grid": {
        populate: {
          cards: {
            populate: {
              image: {
                fields: ["url", "alternativeText"],
              },
            },
          },
        },
      },
      "blocks.guarantee": {
        populate: {
          list: true,
          link: true,
          stats: true,
          image: {
            fields: ["url", "alternativeText"],
          },
        },
      },
    },
  },
};

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In landing-page-populate middleware.");
    ctx.query.populate = populate;

    await next();
  };
};
