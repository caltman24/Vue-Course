<template>
  <div>
    <h1>Create an event</h1>
    <form>
      <BaseSelect
        v-model="event.category"
        :options="categories"
        label="Select a Category"
      />
      <h3>Name & describe your event</h3>

      <BaseInput v-model="event.title" label="Title" type="text" />

      <BaseInput v-model="event.description" label="Description" type="text" />

      <h3>Where is your event?</h3>

      <BaseInput v-model="event.location" label="Location" type="text" />

      <h3>Are pets allowed?</h3>

      <BaseRadioGroup
        :options="radioGroupOptions"
        name="pets"
        v-model="event.pets"
      />

      <h3>Extras</h3>
      <div>
        <BaseCheckbox v-model="event.extras.catering" label="Catering" />
      </div>

      <div>
        <BaseCheckbox v-model="event.extras.music" label="Live Music" />
      </div>

      <button class="button -fill-gradient" type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import BaseInput from "./BaseInput.vue";
import BaseSelect from "./BaseSelect.vue";
import BaseCheckbox from "./BaseCheckbox.vue";
import BaseRadio from "./BaseRadio.vue";
import BaseRadioGroup from "./BaseRadioGroup.vue";
export default {
  data() {
    return {
      categories: [
        "sustainability",
        "nature",
        "animal welfare",
        "housing",
        "education",
        "food",
        "community",
      ],
      event: {
        category: "",
        title: "",
        description: "",
        location: "",
        pets: 1,
        extras: {
          catering: false,
          music: false,
        },
      },
      radioGroupOptions: [
        {
          value: 1,
          label: "Yes",
        },
        {
          value: 0,
          label: "No",
        },
      ],
    };
  },
  components: {
    BaseInput,
    BaseSelect,
    BaseCheckbox,
    BaseRadio,
    BaseRadioGroup,
  },
};
</script>
