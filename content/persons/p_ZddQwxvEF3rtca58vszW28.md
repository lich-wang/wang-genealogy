---
schema: wang-person/v1
id: p_ZddQwxvEF3rtca58vszW28
status: active
merged_into: null
display_name: 王僎
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rhnJT9sW6vifW9EvnJj54w
        subject_person_id: p_ZddQwxvEF3rtca58vszW28
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王僎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eNotHpSXoXXP6pdpszm195
          claim_id: c_rhnJT9sW6vifW9EvnJj54w
          source_id: s_sY6SrXRbpZu2w8EC9FzGwp
          stance: supports
          locator: CBDB:558260
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（558260）
          source: &a1
            id: s_sY6SrXRbpZu2w8EC9FzGwp
            source_type: api_record
            title: 中国历代人物传记资料库：王僎（CBDB 558260）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558260&o=json
            external_identifier: CBDB:558260
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.696Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JAxgFCP255X87fjWNAG2mH
        subject_person_id: p_ZddQwxvEF3rtca58vszW28
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
        - id: cs_rjeQBVwcTburAf1iXZMSkJ
          claim_id: c_JAxgFCP255X87fjWNAG2mH
          source_id: s_sY6SrXRbpZu2w8EC9FzGwp
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gQ6-dfhq_C2tHT7agg5AQI
        subject_person_id: p_qoKRf6uJFFQkSbyeCVkof8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZddQwxvEF3rtca58vszW28
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4XQc2Bdzh_5a3caXzLHIse
          claim_id: c_gQ6-dfhq_C2tHT7agg5AQI
          source_id: s_sY6SrXRbpZu2w8EC9FzGwp
          stance: supports
          locator: 江西通志，Igid=1197811：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_qoKRf6uJFFQkSbyeCVkof8
        status: active
        display_name: 王鳳
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王僎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王僎 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qoKRf6uJFFQkSbyeCVkof8 | 王鳳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王僎（CBDB 558260）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558260&o=json)
