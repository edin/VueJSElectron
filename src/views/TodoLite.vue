<template>
    <div style="margin: auto; width: 400px; margin-top: 100px">
        <h1>Todo App</h1>
        <v-text-field v-model="model.title" class="form-control" style="margin-bottom:10px" v-on:keypress.13="model.add()" ></v-text-field>
        <div v-if="model.errorMessage" style="color:red"> {{model.errorMessage}} </div>
        <v-btn @click="model.add()" class="btn btn-primary">Add</v-btn>
        <v-btn @click="model.removeCompleted()" class="btn btn-danger">Remove</v-btn>

        <div v-if="model.uncompletedItems.length">
            <h1>Uncompleted: {{model.uncompletedItems.length}}</h1>
            <v-data-table :items="model.uncompletedItems" hide-actions item-key="title">
                <template slot="items" slot-scope="props">
                <tr>
                    <td>{{ props.item.title }}</td>
                    <td class="text-xs-right">
                        <v-btn dark small color="pink" @click="props.item.done = true" >Done</v-btn>
                    </td>
                </tr>
                </template>
            </v-data-table>
        </div>

        <div v-if="model.completedItems.length">
            <h1>Completed: {{model.completedItems.length}}</h1>
            <v-data-table :items="model.completedItems" hide-actions item-key="title">
                <template slot="items" slot-scope="props">
                <tr>
                    <td>{{ props.item.title }}</td>
                    <td class="text-xs-right">
                        <v-btn dark small color="pink" @click="props.item.done = false" >Undone</v-btn>
                    </td>
                </tr>
                </template>
            </v-data-table>
        </div>

        <com title="World"> </com>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';


class TodoModel {
    title = "";
    items: any = [];
    errorMessage = "";

    get completedItems()   { return this.items.filter (e => e.done ); }
    get uncompletedItems() { return this.items.filter (e => !e.done); }
    removeCompleted()      { this.items = this.items.filter(e => !e.done); }

    add() {
        if (this.title === "") {
            this.errorMessage = "Hey dude, please enter something !";
            return;
        }
        this.errorMessage = "";
        this.items.push({title: this.title, done: false});
        this.title = "";
    }

    clearErrorMessage() {
        this.errorMessage = "";
    }
}

@Component({})
export default class extends Vue {
    model = new TodoModel()
}
</script>
