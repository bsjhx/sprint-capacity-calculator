<template>
    <div id="app" class="app-class">
        <div class="container">

            <div class="section-title">
                Enter your sprint main information!
            </div>

            <div class="columns">
                <div class="field column is-4">
                    <label class="label" for="weeksInSprint">Numbers of weeks in sprint</label>
                    <div class="control">
                        <input id="weeksInSprint"
                               class="input"
                               type="text"
                               placeholder="2"
                               v-model="numberOfWeeks">
                    </div>
                </div>

                <div class="field column is-4">
                    <label class="label" for="hoursPerDay">Numbers of hours per day</label>
                    <div class="control">
                        <input id="hoursPerDay"
                               class="input"
                               type="text"
                               placeholder="8"
                               v-model="hoursPerDay">
                    </div>
                </div>

                <div class="field column is-4">
                    <label class="label" for="numberOfEmployees">Numbers of developers</label>
                    <div class="control">
                        <input id="numberOfEmployees"
                               class="input"
                               type="text"
                               placeholder="1"
                               v-model="numberOfEmployees">
                    </div>
                </div>
            </div>

            <div class="section-title">
                Now enter how long will your sprint ceremonies take
            </div>

            <div class="columns">
                <div class="field column is-6">
                    <label class="label" for="hoursForRetro">Number of hours for retro</label>
                    <div class="control">
                        <input id="hoursForRetro"
                               class="input"
                               type="text"
                               placeholder="1"
                               v-model="hoursForRetro">
                    </div>
                </div>

                <div class="field column is-6">
                    <label class="label" for="hoursForPlanning">Number of hours for planning</label>
                    <div class="control">
                        <input id="hoursForPlanning"
                               class="input"
                               type="text"
                               placeholder="1"
                               v-model="hoursForPlanning">
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="field column is-6">
                    <label class="label" for="hoursForDemo">Number of hours for demo</label>
                    <div class="control">
                        <input id="hoursForDemo"
                               class="input"
                               type="text"
                               placeholder="1"
                               v-model="hoursForDemo">
                    </div>
                </div>

                <div class="field column is-6">
                    <label class="label" for="hoursForRefinements">Number of hours for refinements</label>
                    <div class="control">
                        <input id="hoursForRefinements"
                               class="input"
                               type="text"
                               placeholder="1"
                               v-model="hoursForRefinements">
                    </div>
                </div>
            </div>
        </div>

        <div class="section-title">
            Now click this button to calculate your capacity!
        </div>

        <div class="container has-text-centered">
                <button class="button is-primary" v-on:click="calculateCapacity()">Calculate capacity!</button>
                <p class="capacity-section notification is-success" v-if="calculatedCapacity">{{calculatedCapacity}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'App',
        components: {},
        data: function () {
            return {
                numberOfWeeks: 2,
                numberOfDaysInWeek: 5,
                hoursPerDay: 5,
                numberOfEmployees: 4,
                hoursForRetro: 1,
                hoursForPlanning: 4,
                hoursForDemo: 0,
                hoursForRefinements: 0,
                calculatedCapacity: null
            }
        },
        methods: {
            calculateCapacity: function () {
                const maxAvailableHours = +this.numberOfWeeks * +this.numberOfDaysInWeek * +this.hoursPerDay * +this.numberOfEmployees;
                const ceremoniesHours = +this.hoursForRetro + +this.hoursForPlanning + +this.hoursForDemo + +this.hoursForRefinements;
                this.calculatedCapacity = maxAvailableHours - ceremoniesHours;
                console.log(this.calculatedCapacity);
            }
        }
    }
</script>

<style>
    .app-class {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        margin: 50px 20%;
    }

    .section-title {
        text-align: center;
        margin: 20px;
        font-size: 25px;
    }

    .capacity-section {
        margin-top: 25px;
        font-size: 40px;
    }
</style>
