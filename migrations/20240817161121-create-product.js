// migrations/xxxx-update-products-table.js
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Products', 'enabled', {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    });

    await queryInterface.addColumn('Products', 'slug', {
      type: Sequelize.STRING,
      allowNull: false,
    });

    await queryInterface.addColumn('Products', 'price_with_discount', {
      type: Sequelize.FLOAT,
      allowNull: false,
    });

    await queryInterface.addColumn('Products', 'use_in_menu', {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    });

    await queryInterface.changeColumn('Products', 'price', {
      type: Sequelize.FLOAT,
      allowNull: false,
    });

    await queryInterface.changeColumn('Products', 'stock', {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    });

    await queryInterface.renameColumn('Products', 'createdAt', 'created_at');
    await queryInterface.renameColumn('Products', 'updatedAt', 'updated_at');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Products', 'enabled');
    await queryInterface.removeColumn('Products', 'slug');
    await queryInterface.removeColumn('Products', 'price_with_discount');
    await queryInterface.removeColumn('Products', 'use_in_menu');
    await queryInterface.changeColumn('Products', 'price', {
      type: Sequelize.DECIMAL(10, 0),
      allowNull: true,
    });
    await queryInterface.changeColumn('Products', 'stock', {
      type: Sequelize.INTEGER,
      allowNull: true,
    });
    await queryInterface.renameColumn('Products', 'created_at', 'createdAt');
    await queryInterface.renameColumn('Products', 'updated_at', 'updatedAt');
  },
};
