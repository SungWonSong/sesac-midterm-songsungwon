module.exports = (sequelize, DataTypes) => {

  // 모델 정의
  const Todo = sequelize.define('todo', {
    id: {
          type: DataTypes.INTEGER,
          primaryKey : true, 
          // allowNull: false, -> primarykey 하면 설정
          autoIncrement: true,
    },

    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },

    done: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
  }, // 내보낼때 tablename을 안해주면 대소문자 구별이 안됨(필요)
}, {
tablename: 'todo',
timestamps: true,
});

  return Todo;
};
