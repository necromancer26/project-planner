<template>
    <div class="home">Home</div>
    <div v-if="projects.length">
        <div v-for="singleProject in projects" :key="singleProject.id">
            <SingleProject
                :project="singleProject"
                @delete="handleDelete"
                @complete="handleComplete"
            />
        </div>
    </div>
</template>

<script lang="ts" >
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { reactive } from "vue";
import SingleProject from "../components/SingleProject.vue";
import axios from "axios";
interface projectUnit { id: number, title: string, details: string, complete: boolean }
export default {
    components: { SingleProject },
    methods: {
        handleDelete(id:number) {
            this.projects = this.projects.filter(project => project.id !== id)
        },
        handleComplete(id:number) {
            let p = this.projects.find(project => {
                return project.id === id
            })
            p.complete = !p.complete
        },
    },
    data() {
        return {
            projects: []
        }
    },
    mounted(): void {
        axios.get('http://localhost:3001/projects')
            .then(res => {
                this.projects = res.data;
                console.log(res.data);
            })
            .catch(err => console.log(err));
    }
}
</script>

<style>
body {
    background: #f2f2f2;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    max-width: 600px;
    margin: 0 auto;
    color: #555;
}
</style>
