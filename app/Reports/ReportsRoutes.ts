import Route from '@ioc:Adonis/Core/Route'

const controllerPath:string = 'Reports/Controllers/ReportsController';

Route.get('/reports', `${controllerPath}.getAll`);

Route.post('/reports', `${controllerPath}.create`);