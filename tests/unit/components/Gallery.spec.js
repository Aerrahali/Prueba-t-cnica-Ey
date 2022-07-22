import { mount } from "@vue/test-utils";
import GalleryImage from "@/components/GalleryImage.vue";

describe("GalleryImage.vue", () => {
  it("renders props.msg when passed", () => {
    const wrapper = mount(GalleryImage, {
      propsData: {
        h1: "Image Gallery",
      },
    });
    expect(wrapper.text()).toContain("Image Gallery");
  });

  it("the list has been loaded successfully", () => {
    const wrapper = mount(GalleryImage);
    expect(wrapper.find("loading").exists()).toBe(false);
  });

  it("click image", async () => {
    const wrapper = mount(GalleryImage);
    await wrapper.trigger("click");
  });
});
