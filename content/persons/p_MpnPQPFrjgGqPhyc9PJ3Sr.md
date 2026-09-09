---
schema: wang-person/v1
id: p_MpnPQPFrjgGqPhyc9PJ3Sr
status: active
merged_into: null
display_name: 王鐘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GYzkCbcE3RTPsz2x5J49wp
        subject_person_id: p_MpnPQPFrjgGqPhyc9PJ3Sr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鐘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ikD4p3ijpAt26P8fZA4QEC
          claim_id: c_GYzkCbcE3RTPsz2x5J49wp
          source_id: s_c9XLdAKFhyJNGhcp1L2q96
          stance: supports
          locator: CBDB:231765
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（231765）
          source: &a1
            id: s_c9XLdAKFhyJNGhcp1L2q96
            source_type: api_record
            title: 中国历代人物传记资料库：王鐘（CBDB 231765）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231765&o=json
            external_identifier: CBDB:231765
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.655Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rAUENUJwfnba64D7H8VZ2h
        subject_person_id: p_MpnPQPFrjgGqPhyc9PJ3Sr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dqdBKQmqtXfH9Z5Bzvohoo
          claim_id: c_rAUENUJwfnba64D7H8VZ2h
          source_id: s_c9XLdAKFhyJNGhcp1L2q96
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

# 王鐘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鐘 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鐘（CBDB 231765）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231765&o=json)
