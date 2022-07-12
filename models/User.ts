import { Table, Column, Model, HasMany, CreatedAt, UpdatedAt } from 'sequelize-typescript'

@Table({
    timestamps: true,
    tableName: 'Person'
})
class Person extends Model {
  @Column
  name: string

  @Column
  birthday: Date

  @CreatedAt
  creationDate: Date;

  @UpdatedAt
  updatedOn: Date;

//   @HasMany(() => Hobby)
//   hobbies: Hobby[]
}