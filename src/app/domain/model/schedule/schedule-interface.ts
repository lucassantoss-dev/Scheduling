export interface ScheduleInterface {
	dayOfWeek?: number;
    date: string;
    hour: string;
    patient: string;
    physiotherapist: string;
    subcategory: string;
    additionalObservations: string;
    scheduleStatus: boolean;
}