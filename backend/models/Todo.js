module.exports = (sequelize, DataTypes) => {

    // 모델 정의
    const Todo = sequelize.define('todo', {
      id: {
            type: DataTypes.INTEGER, 
            allowNull: false,
            autoIncrement: true,
      },

      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      done: {
        type: DataTypes.BOOLEAN,
        allowNull: false,

    }, 
      tablename: 'todo',
      timestamps: true,
      // 내보낼때 tablename을 안해주면 대소문자 구별이 안됨(필요)
    });
  
    return Todo;
  };
  