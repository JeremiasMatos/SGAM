import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class SolicitacaoPrioridades extends BaseSchema {
  protected tableName = 'solicitacao_prioridades'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('descricao')
      table.string('slug')
      table.boolean('estado')
      table.integer('user_id').unsigned().references('users')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}