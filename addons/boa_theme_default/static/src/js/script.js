odoo.define("boa_theme_default.WebClient", function (require) {
  "use strict";

  var AbstractWebClient = require("web.AbstractWebClient");
  
  AbstractWebClient = AbstractWebClient.include({
    start: function (parent) {
      this.set("title_part", { zopenerp: "HyperB" });

      this._super(parent);
    },
  });
});

odoo.define("boa_theme_default.searchUtils", function (require) {
  "use strict";

  const { FACET_ICONS } = require("web.searchUtils");

  FACET_ICONS.filter = "paifont  pai-screening";
  FACET_ICONS.groupBy = "paifont pai-menu";
  FACET_ICONS.favorite = "paifont  pai-quxiaoshoucang1";
  // FACET_ICONS.comparison = "paifont pai-menu";
});

odoo.define("boa_theme_default.message", function (require) {
  "use strict";

  const Message = require("mail/static/src/components/message/message.js");
  console.log(Message);

  Object.defineProperty(Message.prototype, "avatar", {
    get: function avatar() {
      if (
        this.message.author &&
        this.message.author === this.env.messaging.partnerRoot
      ) {
        return "/boa_theme_default/static/src/img/ionToneed.svg";
      } else if (this.message.author) {
        // TODO FIXME for public user this might not be accessible. task-2223236
        // we should probably use the correspondig attachment id + access token
        // or create a dedicated route to get message image, checking the access right of the message
        return this.message.author.avatarUrl;
      } else if (this.message.message_type === "email") {
        return "/mail/static/src/img/email_icon.png";
      }
      return "/mail/static/src/img/smiley/avatar.jpg";
    },
  });
});



// odoo.define('boa_theme_default.settings', function (require) {
//   "use strict";
  
//   var BaseSettingRenderer = require('base.settings').Renderer;
  
//   BaseSettingRenderer.include({
  
//       _getAppIconUrl: function (module) {
//         console.log(module);
//           if (module == 'sale_management') {
//               return "/boa_theme_default/static/description/icon.png";
//           }
//           else {
//               return this._super.apply(this, arguments);
//           }
//       }
//   });
//   });

odoo.define("boa_theme_default.threadPreview", function (require) {
  "use strict";

  var ThreadPreview = require("mail/static/src/components/thread_preview/thread_preview.js");

  ThreadPreview.prototype.image = function () {
    if (this.thread.correspondent) {
      return "/boa_theme_default/static/src/img/ionToneed.svg";
    }
    return `/web/image/mail.channel/${this.thread.id}/image_128`;
  };

  // ThreadPreview.extend({
  //   image() {
  //     if (this.thread.correspondent) {
  //       return null;
  //     }
  //     return null;
  //   },
  // });

  // const { patch } = require("web.utils");

  // patch(ThreadPreview, {
  //   //--------------------------------------------------------------------------
  //   // Public
  //   //--------------------------------------------------------------------------

  //   /**
  //    * @override
  //    */
  //   image(...args) {
  //    return null
  //   },
  // });
});
