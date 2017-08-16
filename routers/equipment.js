var express = require('express')
var router = express.Router()
const models = require('../models')

router.get('/')

// router.get('/', (req, res)=>{
//   models.Equipment.findAll()
//     .then(equipments=>{
//       let promise = equipments.map(equipment=>{
//         return new Promise((resolve, reject)=>{
//           equipment.getUsers()
//             .then(users=>{
//               equipment['users'] = users
//               resolve(equipment)
//             })
//             .catch(err=>{
//               reject(err)
//             })
//         })
//       })
//       Promise.all(promise)
//         .then(equipments=>{
//           res.render('equipments', {equip:equipments, title:'All Data Equipments'})
//         })
//         .catch(err=>{
//           res.send(err)
//         })
//     })
//     .catch(err=>{
//       res.send(err)
//     })
// })

router.get('/', (req, res)=>{
  res.send('equiment')
})

router.get('/add', (req, res)=>{
  res.render('addEquipment', {title:'Add Equipment'})
})

router.post('/add', (req, res)=>{
  models.Equipment.create(req.body)
    .then(()=>{
      res.redirect('/equipment')
    })
    .catch(err=>{
      res.send(err)
    })
})

router.get('/edit/:id', (req, res)=>{
  models.Equipment.findById(req.params.id)
    .then(equipment=>{
      res.render('editEquipment', {title: 'Edit Equipment'})
    })
    .catch(err=>{
      res.send(err)
    })
})

router.post('/edit/:id', (req, res)=>{
  models.Equiment.update(req.body,{
    where: {id:req.params.id}
  }).then(()=>{
    res.redirect('/equipment')
  }).catch(err=>{
    res.send(err)
  })
})

router.get('/delete/:id', (req, res)=>{
  models.Equipment.destroy({
    where:{id:req.params.id}
  }).then(()=>{
    res.redirect('/equipment')
  }).catch(err=>{
    res.send(err)
  })
})

module.exports = router
