<template>
    <div class="project" :class="{ complete: project.complete }">
        <div class="actions">
            <h3 @click="showDetails = !showDetails">{{ project.title }}</h3>
            <div class="icons">
                <span class="material-icons tick" @click="toggleComplete">done</span>
                <span class="material-icons">edit</span>
                <span class="material-icons" @click="deleteProject">delete</span>
            </div>
        </div>

        <div class="details" v-if="showDetails">
            <p>{{ project.details }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import { reactive, toRefs } from "vue"
import axios from "axios"
export default {
    props: ['project'],
    data() {
        return {
            showDetails: false,
        }
    },
    // setup(props: any): any {
    //     let toggle: boolean = false
    //     return {
    //         toggle
    //     }
    // },
    methods:
    {
        deleteProject() {
            console.log(this.project.id)
            axios.delete(`http://localhost:3001/projects/${this.project.id}`)
                .then(() => this.$emit('delete', this.project.id))
                .catch(err => console.log(err))
        },
        toggleComplete() {
            axios.patch(`http://localhost:3001/projects/${this.project.id}`, { complete: !this.project.complete })
                .then(() => this.$emit('complete', this.project.id))
                .catch(err => console.log(err))
        }
    }
}
</script>

<style lang="scss">
.project {
    // width: 50%;
    margin: 20px auto;
    background: white;
    padding: 10px 20px;
    border-radius: 4px;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
    border-left: 4px solid #ef476f;
}
.actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
h3 {
    cursor: pointer;
    display: inline-block;
}
.material-icons {
    font-size: 24px;
    margin-left: 10px;
    color: #bbb;
    cursor: pointer;
}
.material-icons:hover {
    color: #777;
}
/* completed projects */
.project.complete {
    border-left: 4px solid #00ce89;
}
.project.complete .tick {
    color: #00ce89;
}
/*
 .project {
    margin: 20px auto;
    background: white;
    padding: 10px 20px;
    border-radius: 4px;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.05);
    border-left: 4px solid #e90074;
  }
  h3 {
    cursor: pointer;
  }
  .actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .material-icons {
    font-size: 24px;
    margin-left: 10px;
    color: #bbb;
    cursor: pointer;
  }
  .material-icons:hover {
    color: #777;
  }
*/
</style>