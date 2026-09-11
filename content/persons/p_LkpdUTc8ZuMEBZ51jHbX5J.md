---
schema: wang-person/v1
id: p_LkpdUTc8ZuMEBZ51jHbX5J
status: active
merged_into: null
display_name: 王琮
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nrT6KuxQhk8uMscm6GrKHg
        subject_person_id: p_LkpdUTc8ZuMEBZ51jHbX5J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qenXDR1qHwYfqWsSu9Ytid
          claim_id: c_nrT6KuxQhk8uMscm6GrKHg
          source_id: s_1XeXT8VUKAEPNbM6vMnJwb
          stance: supports
          locator: CBDB:695487
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（695487）
          source: &a1
            id: s_1XeXT8VUKAEPNbM6vMnJwb
            source_type: api_record
            title: 中国历代人物传记资料库：王琮（CBDB 695487）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=695487&o=json
            external_identifier: CBDB:695487
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.689Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qZfDyanBQ9Bv1ZuQA2G8jE
        subject_person_id: p_LkpdUTc8ZuMEBZ51jHbX5J
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
        - id: cs_uNJA1ead7yXpSZCR5q7B2J
          claim_id: c_qZfDyanBQ9Bv1ZuQA2G8jE
          source_id: s_1XeXT8VUKAEPNbM6vMnJwb
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_ww1tmgShT5aHcZjUOQ1JYL
        subject_person_id: p_LkpdUTc8ZuMEBZ51jHbX5J
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ouKG9NQbdBVNWDxCPVR49o
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uk1_N6yTFRh6xBr4uLo97l
          claim_id: c_ww1tmgShT5aHcZjUOQ1JYL
          source_id: s_1XeXT8VUKAEPNbM6vMnJwb
          stance: supports
          locator: "海鹽縣志: 二十二卷(光緒)，lgid=294127：子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ouKG9NQbdBVNWDxCPVR49o
        status: active
        display_name: 王宏
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王琮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琮 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ouKG9NQbdBVNWDxCPVR49o | 王宏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琮（CBDB 695487）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=695487&o=json)
