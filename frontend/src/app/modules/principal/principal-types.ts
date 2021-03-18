import {UserResource} from "core-app/modules/hal/resources/user-resource";
import {PlaceholderUserResource} from "core-app/modules/hal/resources/placeholder-user-resource";
import {GroupResource} from "core-app/modules/hal/resources/group-resource";

export type PrincipalLike = UserResource|PlaceholderUserResource|GroupResource|{ id?:string, name:string, href?:string };