import DetailedResponse from './DetailedResponse';
import TavernData from './TavernData';

export {
    User,
    AuthToken,
    UserRelationship,
    Plot,
    Character,
} from './Types';

export { Tag, PlayerPreference, Relationship, Role } from './Enum';

export {
    AuthRequest,
    LoginRequest,
    RelationRequest,
    VerifyRequest,
    TagRequest,
    PlayerPreferenceRequest,
    ReportRequest,
    RoleRequest,
    RolesRequest,
    TagsRequest,
    PlayerPreferencesRequest,
    RoleChangeRequest,
} from './Requests';

export default DetailedResponse;
export { TavernData };

export const EmptyGuid = '00000000000000000000000000000000';
