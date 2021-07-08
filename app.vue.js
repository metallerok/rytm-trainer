const app = Vue.createApp({
  data() {
    return {
      randomSixteenthBars: [],
      randomTripletBars: [],
      sixteenthBars: [
        [
          [0, 0, 0, 0], [1, 1, 1, 1], [1, 0, 0, 0], [1, 0, 1, 0],
        ],
        [
          [1, 1, 0, 0], [1, 1, 1, 0], [0, 0, 1, 0], [0, 1, 1, 1],
        ],
        [
          [1, 0, 1, 1], [1, 1, 0, 1], [0, 0, 1, 1], [1, 0, 0, 1],
        ],
        [
          [0, 1, 1, 0], [0, 0, 0, 1], [0, 1, 0, 0], [0, 1, 0, 1],
        ],
      ],
      tripletBars: [
        [
          [0, 0, 0], [1, 1, 1], [1, 0, 0], [0, 1, 1],
        ],
        [
          [1, 0, 1], [1, 1, 0], [0, 1, 0], [0, 0, 1],
        ]
      ]
    }
  },
  mounted() {
    this.generate();
  },
  methods: {
    randomInteger(min, max) {
      let rand = min - 0.5 + Math.random() * (max - min + 1);
      return Math.round(rand);
    },
    selectRandomSixteenthBar() {
      let row = this.randomInteger(0, 3);
      let column = this.randomInteger(0, 3);
      return this.sixteenthBars[row][column];
    },
    selectRandomTripletBar() {
      let row = this.randomInteger(0, 1);
      let column = this.randomInteger(0, 3);
      return this.tripletBars[row][column];
    },
    generate() {
      this.randomSixteenthBars = [[
        this.selectRandomSixteenthBar(),
        this.selectRandomSixteenthBar(),
        this.selectRandomSixteenthBar(),
        this.selectRandomSixteenthBar()
      ]];
      this.randomTripletBars = [[
        this.selectRandomTripletBar(),
        this.selectRandomTripletBar(),
        this.selectRandomTripletBar(),
        this.selectRandomTripletBar()
      ]]
    }
  },
  template: `
    <div class="wrapper">
      <div class="card margin-top-10">  
        <div class="flex-row" :class="{ 'margin-top-10': r_index != 0 }" v-for="(row, r_index) in sixteenthBars" :key="r_index">
          <Bar v-for="(item, index) in row" :state="item" :key="index" />
        </div>
      </div>
      <div class="card margin-top-10">
        <div class="flex-row" :class="{ 'margin-top-10': r_index != 0 }" v-for="(row, r_index) in tripletBars" :key="r_index">
          <Bar v-for="(item, index) in row" :state="item" :key="index" />
        </div>
      </div>
      <div class="card margin-top-10">
        <div>Random combinations</div>
        <div class="margin-top-10"/>
        <div class="flex-row" :class="{ 'margin-top-10': r_index != 0 }" v-for="(row, r_index) in randomSixteenthBars" :key="r_index">
          <Bar v-for="(item, index) in row" :state="item" :key="index" />
        </div>
        <div class="flex-row" :class="{ 'margin-top-10': r_index != 0 }" v-for="(row, r_index) in randomTripletBars" :key="r_index">
          <Bar v-for="(item, index) in row" :state="item" :key="index" />
        </div>
        <div class="btn margin-top-10" @click="generate">
          generate
        </div>
      </div>
    </div>
  `,
});

app.component("Bar", Bar);
app.mount("#app");