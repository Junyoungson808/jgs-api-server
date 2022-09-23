'use strict';

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

async readManyToOne(id, model){
    try {
        let record = await CustomerModel.findOne({ where: {id}, include: model });
        return record;
    } catch (err) {
        console.log('We have an err', err);
        return err;
    }
}
