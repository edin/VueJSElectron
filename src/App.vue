<template>
    <v-app id="inspire">
        <v-navigation-drawer v-model="drawer" fixed app disable-resize-watcher>
            <v-list dense>
                <template v-for="item in items">
                    <v-list-tile :key="item.text" :to="{name: item.name }">
                        <v-list-tile-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>{{ item.text }}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </template>
            </v-list>
        </v-navigation-drawer>

        <v-toolbar color="purple darken-3" dark app fixed>
            <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
                <v-toolbar-side-icon @click.stop="toggleDrawer()"></v-toolbar-side-icon>
                <span class="hidden-sm-and-down">Dev Meetup</span>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon> <v-icon>apps</v-icon> </v-btn>
            <v-btn icon> <v-icon>notifications</v-icon> </v-btn>

            <v-btn icon large>
                <v-avatar size="32px" tile>
                    <img src="@/assets/logo.png" alt="Vuetify" >
                </v-avatar>
            </v-btn>
        </v-toolbar>
        <v-content style="margin:10px;">
            <center>
                <router-view></router-view>
            </center>
        </v-content>
    </v-app>
</template>
<script>
export default {
    data: () => ({
        dialog: false,
        drawer: true,
        items: [
            { icon: "settings", text: "Binding",  name:"binding", params: {} },
            { icon: "settings", text: "Plot",  name:"plot", params: {} },
            { icon: "settings", text: "Todo",  name:"todoview", params: {} },
            { icon: "settings", text: "Vuetify UI", name:"vuetify", params: {} },
            { icon: "settings", text: "Open GL", name:"opengl", params: {} },
        ]
    }),
    props: {
        source: String
    },
    methods: {
        toggleDrawer() {
            this.drawer = ! this.drawer;
        }
    }
};
</script>