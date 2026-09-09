---
schema: wang-person/v1
id: p_62oSbowCwe2D4ZKHA95fvz
status: active
merged_into: null
display_name: 王士祿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HrEjrNMK8JXkJoBzafM5w2
        subject_person_id: p_62oSbowCwe2D4ZKHA95fvz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士祿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_g4kWWTC3dT4s5DS4hjhwXw
          claim_id: c_HrEjrNMK8JXkJoBzafM5w2
          source_id: s_eKiRAQszeL6yob4tQww771
          stance: supports
          locator: CBDB:35060
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（35060）
          source: &a1
            id: s_eKiRAQszeL6yob4tQww771
            source_type: api_record
            title: 中国历代人物传记资料库：王士祿（CBDB 35060）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35060&o=json
            external_identifier: CBDB:35060
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.111Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_65P9cxSX27oBYhZw2UH9WK
        subject_person_id: p_62oSbowCwe2D4ZKHA95fvz
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1626年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1mCMKyN41yujqjtw9zd6iG
          claim_id: c_65P9cxSX27oBYhZw2UH9WK
          source_id: s_eKiRAQszeL6yob4tQww771
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_uEQxK5TkvmodFAAebwv1hg
        subject_person_id: p_62oSbowCwe2D4ZKHA95fvz
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1673年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CWLfnPF3CndRRuB5p6vqAf
          claim_id: c_uEQxK5TkvmodFAAebwv1hg
          source_id: s_eKiRAQszeL6yob4tQww771
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CdbHqh6gq8VH3P9HPSESGS
        subject_person_id: p_62oSbowCwe2D4ZKHA95fvz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dM7Y8wtNdVLR58YBmSKgay
          claim_id: c_CdbHqh6gq8VH3P9HPSESGS
          source_id: s_eKiRAQszeL6yob4tQww771
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王士祿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士祿 | accepted |
| birth.date | 1626年 | accepted |
| death.date | 1673年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士祿（CBDB 35060）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35060&o=json)
