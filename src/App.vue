<template>
    <div id="app" class="app-class">
        <ValidationObserver v-slot="{ invalid }">
            <div class="container">

                <div class="section-title">
                    Enter your sprint main information!
                </div>


                <div class="columns">
                    <div class="field column is-4">
                        <label class="label" for="weeksInSprint">Numbers of weeks in sprint</label>
                        <div class="control">

                            <ValidationProvider v-slot="{errors}" rules="required|min_value:1">
                                <input id="weeksInSprint"
                                       class="input"
                                       v-bind:class="{ 'input is-danger': errors[0]}"
                                       type="number"
                                       placeholder="2"
                                       v-model="numberOfWeeks">
                                <span class="has-text-danger">{{errors[0]}}</span>
                            </ValidationProvider>

                        </div>
                    </div>

                    <div class="field column is-4">
                        <label class="label" for="hoursPerDay">Numbers of hours per day</label>
                        <div class="control">

                            <ValidationProvider v-slot="{errors}" rules="required|min_value:1">
                                <input id="hoursPerDay"
                                       class="input"
                                       v-bind:class="{ 'input is-danger': errors[0]}"
                                       type="number"
                                       placeholder="8"
                                       v-model="hoursPerDay">
                                <span class="has-text-danger">{{errors[0]}}</span>
                            </ValidationProvider>
                        </div>
                    </div>

                    <div class="field column is-4">
                        <label class="label" for="numberOfEmployees">Numbers of employees</label>
                        <div class="control">

                            <ValidationProvider v-slot="{errors}" rules="required|min_value:1">
                                <input id="numberOfEmployees"
                                       class="input"
                                       v-bind:class="{ 'input is-danger': errors[0]}"
                                       type="number"
                                       placeholder="1"
                                       v-model="numberOfEmployees">
                                <span class="has-text-danger">{{errors[0]}}</span>
                            </ValidationProvider>

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

                            <ValidationProvider v-slot="{errors}" rules="required|min_value:0">
                                <input id="hoursForRetro"
                                       class="input"
                                       v-bind:class="{ 'input is-danger': errors[0]}"
                                       type="number"
                                       placeholder="1"
                                       v-model="hoursForRetro">
                                <span class="has-text-danger">{{errors[0]}}</span>
                            </ValidationProvider>

                        </div>
                    </div>

                    <div class="field column is-6">
                        <label class="label" for="hoursForPlanning">Number of hours for planning</label>
                        <div class="control">

                            <ValidationProvider v-slot="{errors}" rules="required|min_value:0">
                                <input id="hoursForPlanning"
                                       class="input"
                                       v-bind:class="{ 'input is-danger': errors[0]}"
                                       type="number"
                                       placeholder="1"
                                       v-model="hoursForPlanning">
                                <span class="has-text-danger">{{errors[0]}}</span>
                            </ValidationProvider>
                        </div>
                    </div>
                </div>
                <div class="columns">
                    <div class="field column is-6">
                        <label class="label" for="hoursForDemo">Number of hours for demo</label>
                        <div class="control">
                            <ValidationProvider v-slot="{errors}" rules="required|min_value:0">
                                <input id="hoursForDemo"
                                       class="input"
                                       v-bind:class="{ 'input is-danger': errors[0]}"
                                       type="number"
                                       placeholder="1"
                                       v-model="hoursForDemo">
                                <span class="has-text-danger">{{errors[0]}}</span>
                            </ValidationProvider>
                        </div>
                    </div>

                    <div class="field column is-6">
                        <label class="label" for="hoursForRefinements">Number of hours for refinements</label>
                        <div class="control">

                            <ValidationProvider v-slot="{errors}" rules="required|min_value:0">
                                <input id="hoursForRefinements"
                                       class="input"
                                       v-bind:class="{ 'input is-danger': errors[0]}"
                                       type="number"
                                       placeholder="1"
                                       v-model="hoursForRefinements">
                                <span class="has-text-danger">{{errors[0]}}</span>
                            </ValidationProvider>

                        </div>
                    </div>
                </div>
            </div>


            <div class="section-title" v-if="!invalid">
                Now click this button to calculate your capacity!
            </div>

            <div class="section-title" v-if="!!invalid">
                Ooops... Something is not ok! Check entered data!
            </div>

            <div class="container has-text-centered">
                <button class="button is-primary"
                        v-on:click="calculateCapacity()"
                        :disabled="invalid">Calculate capacity!</button>
                <p class="capacity-section notification is-success" v-if="calculatedCapacity">{{calculatedCapacity}}</p>
            </div>
        </ValidationObserver>
    </div>
</template>

<script>
    import {extend} from "vee-validate";
    import {min_value, required} from 'vee-validate/dist/rules';

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
                calculatedCapacity: null,
                isFormIsOk: true
            }
        },
        methods: {
            calculateCapacity: function () {
                const maxAvailableHours = +this.numberOfWeeks * +this.numberOfDaysInWeek * +this.hoursPerDay * +this.numberOfEmployees;
                const ceremoniesHours = +this.hoursForRetro + +this.hoursForPlanning + +this.hoursForDemo + +this.hoursForRefinements;
                this.calculatedCapacity = maxAvailableHours - ceremoniesHours;
            }
        }
    }

    extend('required', {
        ...required,
        message: 'This field is required'
    });

    extend('min_value', {
        ...min_value,
        message: 'This field value should be at least: ' + min_value.params.length
    });
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

    span {
        font-size: 10px;
    }
</style>
