---
schema: wang-person/v1
id: p_HrkkgqQR2n2D5BStWXVbwx
status: active
merged_into: null
display_name: 王來問
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CvpAX6FfBrVUC1yLx825pC
        subject_person_id: p_HrkkgqQR2n2D5BStWXVbwx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王來問
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vqbKAzQaYRT1wC8fEAci8w
          claim_id: c_CvpAX6FfBrVUC1yLx825pC
          source_id: s_qR1RPtD9g3fSKLoWAnha3X
          stance: supports
          locator: CBDB:210619
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（210619）
          source: &a1
            id: s_qR1RPtD9g3fSKLoWAnha3X
            source_type: api_record
            title: 中国历代人物传记资料库：王來問（CBDB 210619）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210619&o=json
            external_identifier: CBDB:210619
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.013Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EHmEaEyNJKJpFfu1Dw3y7r
        subject_person_id: p_HrkkgqQR2n2D5BStWXVbwx
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
        - id: cs_krtdhh7THk6p4rpdy5BieD
          claim_id: c_EHmEaEyNJKJpFfu1Dw3y7r
          source_id: s_qR1RPtD9g3fSKLoWAnha3X
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

# 王來問

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王來問 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王來問（CBDB 210619）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210619&o=json)
