---
schema: wang-person/v1
id: p_3zsERGNnSdJfLFVXc9rCRi
status: active
merged_into: null
display_name: 王諫
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bJ1Q5CuuJ5QqPLEMKCQGiv
        subject_person_id: p_3zsERGNnSdJfLFVXc9rCRi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王諫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oKrAF9GeLQ8YD2KB8mSZ73
          claim_id: c_bJ1Q5CuuJ5QqPLEMKCQGiv
          source_id: s_arswxMK4XGYq2WNZ7u3BRe
          stance: supports
          locator: CBDB:323925
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（323925）
          source: &a1
            id: s_arswxMK4XGYq2WNZ7u3BRe
            source_type: api_record
            title: 中国历代人物传记资料库：王諫（CBDB 323925）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323925&o=json
            external_identifier: CBDB:323925
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.155Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iJR2XoBKNcxJ6zR7sa875f
        subject_person_id: p_3zsERGNnSdJfLFVXc9rCRi
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
        - id: cs_QN9SrdGvt3mDfRVJ5Unvy3
          claim_id: c_iJR2XoBKNcxJ6zR7sa875f
          source_id: s_arswxMK4XGYq2WNZ7u3BRe
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
        id: c_hgdAPWkWCsZFdoecW9_xVr
        subject_person_id: p_3zsERGNnSdJfLFVXc9rCRi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JZ9ABX21r2pGL5CSXT41XF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JmwqaoM0-inP0jDONG7H59
          claim_id: c_hgdAPWkWCsZFdoecW9_xVr
          source_id: s_arswxMK4XGYq2WNZ7u3BRe
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第三甲第一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_JZ9ABX21r2pGL5CSXT41XF
        status: active
        display_name: 王淑
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王諫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王諫 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_JZ9ABX21r2pGL5CSXT41XF | 王淑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王諫（CBDB 323925）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323925&o=json)
