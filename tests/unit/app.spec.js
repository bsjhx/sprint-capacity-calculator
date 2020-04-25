import { shallowMount } from '@vue/test-utils'
import App from "../../src/App";

describe('App.vue', () => {
  it('Component should be created', () => {
    const wrapper = shallowMount(App);
    expect(wrapper).toBeTruthy();
  });

  it('Capacity should be created', () => {
    const wrapper = shallowMount(App);
    wrapper.vm.numberOfWeeks = 2;
    wrapper.vm.numberOfDaysInWeek = 5;
    wrapper.vm.hoursPerDay = 5;
    wrapper.vm.numberOfEmployees = 4;
    wrapper.vm.hoursForRetro = 1;
    wrapper.vm.hoursForPlanning = 2;
    wrapper.vm.hoursForDemo = 1;
    wrapper.vm.hoursForRefinements = 2;
    wrapper.vm.calculateCapacity();
    wrapper.vm.$data;
    expect(wrapper.vm.calculatedCapacity).toBe(194);
  });
});
