---
schema: wang-person/v1
id: p_2q5oLPYeHNC3ozo65nG5VF
status: active
merged_into: null
display_name: 王叔杲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uXc4uGim2twDSFMVqvCD6d
        subject_person_id: p_2q5oLPYeHNC3ozo65nG5VF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔杲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EgFsXJA3VesG54mYSnKZNh
          claim_id: c_uXc4uGim2twDSFMVqvCD6d
          source_id: s_5FoRMCCjYq81yzD5zvd1kZ
          stance: supports
          locator: CBDB:126579
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126579）
          source: &a1
            id: s_5FoRMCCjYq81yzD5zvd1kZ
            source_type: api_record
            title: 中国历代人物传记资料库：王叔杲（CBDB 126579）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126579&o=json
            external_identifier: CBDB:126579
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.038Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_chyM6J7p6SVU1cnf6tX1fy
        subject_person_id: p_2q5oLPYeHNC3ozo65nG5VF
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1517年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_THEkLG8DGfHU8f936rMf7C
          claim_id: c_chyM6J7p6SVU1cnf6tX1fy
          source_id: s_5FoRMCCjYq81yzD5zvd1kZ
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
        id: c_EfJMQMp4vgzrb99PP6GTub
        subject_person_id: p_2q5oLPYeHNC3ozo65nG5VF
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1600年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B2PrcABnAZ22g1aRX7D7gJ
          claim_id: c_EfJMQMp4vgzrb99PP6GTub
          source_id: s_5FoRMCCjYq81yzD5zvd1kZ
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
        id: c_mAq1uariqR1n2qbm7uaK75
        subject_person_id: p_2q5oLPYeHNC3ozo65nG5VF
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
        - id: cs_kuA7SFEYKVvQuedHW3JzZY
          claim_id: c_mAq1uariqR1n2qbm7uaK75
          source_id: s_5FoRMCCjYq81yzD5zvd1kZ
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

# 王叔杲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王叔杲 | accepted |
| birth.date | 1517年 | accepted |
| death.date | 1600年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王叔杲（CBDB 126579）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126579&o=json)
