---
schema: wang-person/v1
id: p_g8HT5pMUHvBq3y2VifEFXg
status: active
merged_into: null
display_name: 王炳堃
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TaVyJovKDBy6No76YPbs4K
        subject_person_id: p_g8HT5pMUHvBq3y2VifEFXg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炳堃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aNBuYLtKEp1YvBeLaRTjnR
          claim_id: c_TaVyJovKDBy6No76YPbs4K
          source_id: s_U115xZWnvRcs1r8yA3zMnF
          stance: supports
          locator: CBDB:639275
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639275）
          source: &a1
            id: s_U115xZWnvRcs1r8yA3zMnF
            source_type: api_record
            title: 中国历代人物传记资料库：王炳堃（CBDB 639275）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639275&o=json
            external_identifier: CBDB:639275
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.899Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_W9vARrAXadzjwSa4NXa1kB
        subject_person_id: p_g8HT5pMUHvBq3y2VifEFXg
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
        - id: cs_NzttuXcyYGdVzqMJ1e8Qce
          claim_id: c_W9vARrAXadzjwSa4NXa1kB
          source_id: s_U115xZWnvRcs1r8yA3zMnF
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

# 王炳堃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王炳堃 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王炳堃（CBDB 639275）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639275&o=json)
