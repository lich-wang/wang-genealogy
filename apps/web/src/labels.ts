// Chinese display labels for the code-style enum/predicate vocabularies. The
// enum *values* stay lower-case English per the domain rules; only the UI text
// is localized here.
import type {
  ClaimSourceStance,
  ClaimStatus,
  Confidence,
  LicenseCode,
  MergeStatus,
  PersonStatus,
  SourceType,
} from '@wang/domain';

export const PREDICATE_LABELS: Record<string, string> = {
  'name.primary': '規範姓名',
  'name.alias': '異名',
  'name.courtesy': '字',
  'name.pseudonym': '號',
  'name.genealogical': '譜名',
  'name.rank': '排行',
  'birth.date': '生年',
  'death.date': '卒年',
  'place.origin': '祖籍',
  'place.residence': '居所/遷居',
  'lineage.branch': '支派',
  'lineage.hall': '堂號',
  'lineage.commandery': '郡望',
  'lineage.founder': '始祖',
  'lineage.migrating_founder': '始遷祖',
  'generation.character': '字輩',
  'bio.summary': '簡單生平',
  'kinship.parent_of': '親子關係',
  'kinship.father_of': '父子／父女關係',
  'kinship.mother_of': '母子／母女關係',
  'kinship.spouse_of': '配偶關係',
  'kinship.adoptive_parent_of': '收養關係',
  'kinship.adoptive_father_of': '養父關係',
  'kinship.adoptive_mother_of': '養母關係',
  'kinship.step_parent_of': '繼親關係',
  'kinship.ancestor_of': '世系（先祖—後代）',
};

export function predicateLabel(predicate: string): string {
  return PREDICATE_LABELS[predicate] ?? predicate;
}

export const CLAIM_STATUS_LABELS: Record<ClaimStatus, string> = {
  proposed: '待核實',
  accepted: '已採納',
  disputed: '有爭議',
  retracted: '已撤回',
  superseded: '已被取代',
};

export const PERSON_STATUS_LABELS: Record<PersonStatus, string> = {
  candidate: '候選',
  active: '已公開',
  merged: '已合併',
  suppressed: '已隱藏',
};

export const CONFIDENCE_LABELS: Record<Confidence, string> = {
  unknown: '可信度未知',
  low: '可信度低',
  medium: '可信度中',
  high: '可信度高',
};

export const STANCE_LABELS: Record<ClaimSourceStance, string> = {
  supports: '支持',
  contradicts: '反對',
  mentions: '提及',
};

export const SOURCE_TYPE_LABELS: Record<SourceType, string> = {
  book: '書籍',
  genealogy: '族譜',
  gazetteer: '方誌',
  epitaph: '墓誌',
  biography: '傳記',
  exam_record: '科舉錄',
  api_record: 'API 資料',
  website: '網頁',
  user_testimony: '使用者口述',
};

export const MERGE_STATUS_LABELS: Record<MergeStatus, string> = {
  proposed: '已提出',
  reviewing: '審核中',
  approved: '已通過',
  rejected: '已駁回',
  reverted: '已回滾',
};

export const LICENSE_LABELS: Record<LicenseCode, string> = {
  'CC0-1.0': 'CC0 1.0（公有領域奉獻）',
  'CC-BY-4.0': 'CC BY 4.0',
  'CC-BY-SA-4.0': 'CC BY-SA 4.0',
  'CC-BY-NC-4.0': 'CC BY-NC 4.0',
  'CC-BY-NC-SA-4.0': 'CC BY-NC-SA 4.0',
  'public-domain': '公有領域',
  'all-rights-reserved': '保留所有權利',
  unknown: '許可未知',
};
