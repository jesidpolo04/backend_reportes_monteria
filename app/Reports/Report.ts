import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Report extends BaseModel {

    public static table = 'reports'

    @column({isPrimary: true})
    public id: number

    @column()
    public type: number

    @column()
    public address: string

    @column()
    public reference: string

    @column()
    public latitude: number

    @column()
    public longitude: number

    @column()
    public description: string

    @column()
    public email: string

    @column()
    public images: string

    @column.dateTime({ autoCreate: true, columnName: 'created_at' })
    public createdAt: DateTime

    @column.dateTime({ autoCreate: true, columnName: 'updated_at' })
    public updatedAt: DateTime
}