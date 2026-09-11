---
schema: wang-person/v1
id: p_FiMbN8ry62EWxKcktvZXdG
status: active
merged_into: null
display_name: 王協一
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_S9MAwKVGL4eUQbhaiXLsNs
        subject_person_id: p_FiMbN8ry62EWxKcktvZXdG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王協一
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zaSLJP5RP6Wzd8k5Vk6ppr
          claim_id: c_S9MAwKVGL4eUQbhaiXLsNs
          source_id: s_niqxfsxwB46KSJCGAXTE5i
          stance: supports
          locator: CBDB:636426
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636426）
          source: &a1
            id: s_niqxfsxwB46KSJCGAXTE5i
            source_type: api_record
            title: 中国历代人物传记资料库：王協一（CBDB 636426）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636426&o=json
            external_identifier: CBDB:636426
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.170Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uYg2rhVTpG5TDELF5PkMeQ
        subject_person_id: p_FiMbN8ry62EWxKcktvZXdG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王協一，清人物。籍贯朝邑，入仕縣學附生，曾任知縣。（中国历代人物传记资料库 CBDB 636426）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_50I4V-dnr5Kmpvtf-Uclmf
          claim_id: c_uYg2rhVTpG5TDELF5PkMeQ
          source_id: s_niqxfsxwB46KSJCGAXTE5i
          stance: supports
          locator: CBDB:636426
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王協一

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王協一 | accepted |
| bio.summary | 王協一，清人物。籍贯朝邑，入仕縣學附生，曾任知縣。（中国历代人物传记资料库 CBDB 636426） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王協一（CBDB 636426）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636426&o=json)
