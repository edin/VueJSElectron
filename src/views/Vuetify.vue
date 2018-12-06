<template>
  <div class="home">
    <h2>Vuetify Demo</h2>

    <!-- buttons -->
    <h2>Buttons</h2>
    <div>
      <v-btn color="success">Success</v-btn>
      <v-btn color="error">Error</v-btn>
      <v-btn color="warning">Warning</v-btn>
      <v-btn color="info">Info</v-btn>
    </div>

    <v-layout row wrap>
      <v-flex xs12 sm4>
        <p>Overflow</p>

        <v-overflow-btn
          :items="dropdown_font"
          label="Overflow Btn"
          target="#dropdown-example"
        ></v-overflow-btn>
      </v-flex>

      <v-flex xs12 sm4>
        <p>Segmented</p>

        <v-overflow-btn
          :items="dropdown_icon"
          label="Segmented Btn"
          segmented
          target="#dropdown-example"
        ></v-overflow-btn>
      </v-flex>

      <v-flex xs12 sm4>
        <p>Editable</p>

        <v-overflow-btn
          :items="dropdown_edit"
          label="Editable Btn"
          editable
          item-value="text"
        ></v-overflow-btn>
      </v-flex>
    </v-layout>


    <div class="text-xs-center">
      <v-btn fab dark small color="primary">
        <v-icon dark>remove</v-icon>
      </v-btn>

      <v-btn fab dark small color="pink">
        <v-icon dark>favorite</v-icon>
      </v-btn>

      <v-btn fab dark color="indigo">
        <v-icon dark>add</v-icon>
      </v-btn>

      <v-btn fab dark color="teal">
        <v-icon dark>list</v-icon>
      </v-btn>

      <v-btn fab dark large color="cyan">
        <v-icon dark>edit</v-icon>
      </v-btn>

      <v-btn fab dark large color="purple">
        <v-icon dark>android</v-icon>
      </v-btn>
    </div>

  <h2>Data Table</h2>

  <template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    hide-actions
    item-key="name"
  >
    <template slot="items" slot-scope="props">
      <tr @click="props.expanded = !props.expanded">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.calories }}</td>
        <td class="text-xs-right">{{ props.item.fat }}</td>
        <td class="text-xs-right">{{ props.item.carbs }}</td>
        <td class="text-xs-right">{{ props.item.protein }}</td>
        <td class="text-xs-right">{{ props.item.iron }}

                    <v-btn fab dark small color="pink">
            <v-icon dark>favorite</v-icon>
          </v-btn>
        </td>
      </tr>
    </template>
    <template slot="expand" slot-scope="props">
      <v-card flat>
        <v-card-text>Peek-a-boo!</v-card-text>

    <div>
      <v-btn color="success">Success</v-btn>
      <v-btn color="error">Error</v-btn>
      <v-btn color="warning">Warning</v-btn>
      <v-btn color="info">Info</v-btn>
    </div>

      </v-card>
    </template>
  </v-data-table>
</template>

  <h2>Dialog</h2>

  <div class="text-xs-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <v-btn
        slot="activator"
        color="red lighten-2"
        dark
      >
        Click Me
      </v-btn>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Privacy Policy
        </v-card-title>

        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="dialog = false"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>

  <h2>Divider</h2>

  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar color="pink" dark>
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-toolbar-title>Inbox</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>check_circle</v-icon>
          </v-btn>
        </v-toolbar>
        <v-list two-line>
          <template v-for="(item, index) in items">
            <v-list-tile :key="index" avatar ripple @click="">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                <v-list-tile-sub-title class="text--primary">{{ item.headline }}</v-list-tile-sub-title>
                <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-list-tile-action-text>{{ item.action }}</v-list-tile-action-text>
                <v-icon color="grey lighten-1">star_border</v-icon>
              </v-list-tile-action>
            </v-list-tile>
            <v-divider v-if="index + 1 < items.length" :key="`divider-${index}`"></v-divider>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>


    <h2>Expansion Panel</h2>

    <v-expansion-panel>
    <v-expansion-panel-content
      v-for="(item,i) in 5"
      :key="i"
    >
      <div slot="header">Item</div>
      <v-card>
        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>

  <h2>Form controls </h2>
  <v-container fluid>
    <v-layout wrap>

      <v-flex  xs12>
        <v-slider v-model="slider"></v-slider>
      </v-flex>
      <v-flex  xs12>
        <v-slider v-model="slider"></v-slider>
      </v-flex>

      <v-flex xs12>
        <v-combobox
          v-model="select"
          :items="fitems"
          label="Select a favorite activity or create a new one"
        ></v-combobox>
      </v-flex>
      <v-flex xs12>
        <v-combobox
          v-model="select"
          :items="fitems"
          chips
          label="I use chips"
        ></v-combobox>
      </v-flex>
      <v-flex xs12>
        <v-combobox
          v-model="select"
          :items="fitems"
          chips
          label="I use a scoped slot"
        >
          <template slot="selection" slot-scope="data">
            <v-chip
              :selected="data.selected"
              :disabled="data.disabled"
              :key="JSON.stringify(data.item)"
              class="v-chip--select-multi "
              @input="data.parent.selectItem(data.item)"
            >
              <v-avatar class="accent white--text">
                {{ data.item.slice(0, 1).toUpperCase() }}
              </v-avatar>
              {{ data.item }}
            </v-chip>
          </template>
        </v-combobox>
      </v-flex>
      <v-flex xs12>
        <v-combobox
          v-model="select"
          chips
          label="I'm readonly"
          readonly
        ></v-combobox>
      </v-flex>


    </v-layout>
  </v-container>

  <h2>Snackbar</h2>
  <v-card>
    <v-card-text>
      <v-container fluid>
        <v-layout row wrap>
          <v-flex xs12 sm3>
            <v-checkbox
              v-model="x"
              label="Left"
              value="left"
            ></v-checkbox>
          </v-flex>

          <v-flex xs6 sm3>
            <v-checkbox
              v-model="x"
              label="Right"
              value="right"
            ></v-checkbox>
          </v-flex>

          <v-flex xs6 sm3>
            <v-checkbox
              v-model="y"
              label="Top"
              value="top"
            ></v-checkbox>
          </v-flex>

          <v-flex xs6 sm3>
            <v-checkbox
              v-model="y"
              label="Bottom"
              value="bottom"
            ></v-checkbox>
          </v-flex>

          <v-flex xs12 sm3>
            <v-checkbox
              v-model="mode"
              label="Multi-line (mobile)"
              value="multi-line"
            ></v-checkbox>
          </v-flex>

          <v-flex xs12 sm3>
            <v-checkbox
              v-model="mode"
              label="Vertical (mobile)"
              value="vertical"
            ></v-checkbox>
          </v-flex>

          <v-flex xs12 sm4 offset-sm4>
            <v-text-field
              v-model="text"
              label="Text"
              type="text"
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm4>
            <v-text-field
              v-model.number="timeout"
              label="Timeout"
              type="number"
            ></v-text-field>
          </v-flex>
        </v-layout>

      </v-container>
      <v-btn
        block
        color="primary"
        dark
        @click="snackbar = true"
      >
        Show Snackbar
      </v-btn>
    </v-card-text>

    <v-snackbar
      v-model="snackbar"
      :bottom="y === 'bottom'"
      :left="x === 'left'"
      :multi-line="mode === 'multi-line'"
      :right="x === 'right'"
      :timeout="timeout"
      :top="y === 'top'"
      :vertical="mode === 'vertical'"
    >
      {{ text }}
      <v-btn
        color="pink"
        flat
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </v-card>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';

@Component({})
export default class extends Vue {
    dialog =  false;
    headers = [
      {
        text: 'Dessert (100g serving)',
        align: 'left',
        sortable: false,
        value: 'name'
      },
      { text: 'Calories', value: 'calories' },
      { text: 'Fat (g)', value: 'fat' },
      { text: 'Carbs (g)', value: 'carbs' },
      { text: 'Protein (g)', value: 'protein' },
      { text: 'Iron (%)', value: 'iron' }
    ];
    desserts = [
      {
        value: false,
        name: 'Frozen Yogurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: '1%'
      },
      {
        value: false,
        name: 'Ice cream sandwich',
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        iron: '1%'
      },
      {
        value: false,
        name: 'Eclair',
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        iron: '7%'
      },
      {
        value: false,
        name: 'Cupcake',
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        iron: '8%'
      },
      {
        value: false,
        name: 'Gingerbread',
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        iron: '16%'
      },
      {
        value: false,
        name: 'Jelly bean',
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        iron: '0%'
      },
      {
        value: false,
        name: 'Lollipop',
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        iron: '2%'
      },
      {
        value: false,
        name: 'Honeycomb',
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        iron: '45%'
      },
      {
        value: false,
        name: 'Donut',
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        iron: '22%'
      },
      {
        value: false,
        name: 'KitKat',
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        iron: '6%'
      }
    ]

        items = [
          { action: '15 min', headline: 'Brunch this weekend?', title: 'Ali Connors', subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?" },
          { action: '2 hr', headline: 'Summer BBQ', title: 'me, Scrott, Jennifer', subtitle: "Wish I could come, but I'm out of town this weekend." },
          { action: '6 hr', headline: 'Oui oui', title: 'Sandra Adams', subtitle: 'Do you have Paris recommendations? Have you ever been?' },
          { action: '12 hr', headline: 'Birthday gift', title: 'Trevor Hansen', subtitle: 'Have any ideas about what we should get Heidi for her birthday?' },
          { action: '18hr', headline: 'Recipe to try', title: 'Britta Holt', subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.' }
        ]

        select = 'Programming';
        fitems = [
          'Programming',
          'Design',
          'Vue',
          'Vuetify'
        ]

        snackbar = false;
        y = 'top';
        x = null;
        mode = '';
        timeout = 6000;
        text = 'Hello, I\'m a snackbar';
}
</script>

<style>
h2{
  margin-top:30px;
  margin-bottom:10px;
  border-bottom:2px solid gray;
}
</style>