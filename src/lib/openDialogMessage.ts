import DialogMessage from "./DialogMessage.vue";
import {createApp, h} from 'vue';

export const openDialogMessage = (options) => {
  const {title, content, ok, img} = options;
  const div = document.createElement('div');
  document.body.appendChild(div);
  const close = () => {
    // @ts-ignore
    app.unmount(div);
    div.remove();
  };
  const app = createApp({
    render() {
      return h(DialogMessage,
        {
          visible: true,
          "onUpdate:visible": (newVisible) => {
            if (newVisible === false) {
              close();
            }
          }, ok
        },
        {img, title, content});
    }
  });
  app.mount(div);
};

