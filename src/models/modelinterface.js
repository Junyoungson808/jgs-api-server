'use strict';

class ModelInterface {
  constructor(model) {
    this.model = model;
  }

  async read(id = null) {
    try {
      let record;
      if (id) {
        record = await this.model.findOne({ where: { id } });
      } else {
        record = await this.model.findAll();
      }
      return record;
    } catch (err) {
      console.error('We have an err', err);
      return err;
    }
  }

  async readManyToOne(id, model) {
    try {
      let record = await this.model.findOne({ where: { id }, include: model });
      return record;
    } catch (err) {
      console.log('We have an err', err);
      return err;
    }
  }

  async create(data) {
    try {
      let record = await this.model.create(data);
      return record;
    } catch (err) {
      console.log('We have an err', err);
      return err;
    }
  }

  async update(data, id) {
    try {
      await this.model.update(data, { where: { id } });
      let record = await this.model.findOne({ where: { id } });
      return record;
    } catch (err) {
      console.log('We have an err', err);
      return err;
    }
  }

  async delete(id) {
    await this.model.destroy({ where: { id } });
    return 'Record Deleted';
  } catch(err) {

  }
}

module.exports = ModelInterface;
