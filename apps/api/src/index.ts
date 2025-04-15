import { defineAbilityFor } from '@saas/auth'

const ability = defineAbilityFor({ id: '1', role: 'ADMIN' })

// const userCanInviteSomeoneElse = ability.can('invite', 'User')

const userCanDeleteOthersUsers = ability.can('delete', 'User')

const userCannotDeleteOthersUsers = ability.cannot('delete', 'User')

// console.log(userCanInviteSomeoneElse)

console.log(userCanDeleteOthersUsers)

console.log(userCannotDeleteOthersUsers)
