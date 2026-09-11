---
schema: wang-person/v1
id: p_k2tNkb2j9gtacPUz8v9vJ7
status: active
merged_into: null
display_name: 吳修月
revision: 1
cbdb_id: 78485
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ol7aIHFasrC7S051E2X8hC
        subject_person_id: p_k2tNkb2j9gtacPUz8v9vJ7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 吳修月
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h-8q8eiAEJbcnw3fGiJM9u
          claim_id: c_ol7aIHFasrC7S051E2X8hC
          source_id: s_hr4m_7qbEMZSSDM9OazPzQ
          stance: supports
          locator: CBDB:78485
          quotation: null
          interpretation_note: CBDB 明确记录的王定執配偶
          source: &a1
            id: s_hr4m_7qbEMZSSDM9OazPzQ
            source_type: api_record
            title: 中国历代人物传记资料库：吳修月（CBDB 78485）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=78485&o=json
            external_identifier: CBDB:78485
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_0WU_493IbHF4DSwYQbxT7x
        subject_person_id: p_hqm8QJPDYRRDX7Me858AJ1
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_k2tNkb2j9gtacPUz8v9vJ7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LDwRUCZzu6X6HEZL-6EbZV
          claim_id: c_0WU_493IbHF4DSwYQbxT7x
          source_id: s_hr4m_7qbEMZSSDM9OazPzQ
          stance: supports
          locator: "民國歙縣志: 十六卷，lgid=1164292：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_hqm8QJPDYRRDX7Me858AJ1
        status: active
        display_name: 王定執
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 吳修月

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 吳修月 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_hqm8QJPDYRRDX7Me858AJ1 | 王定執 | accepted |

## 外部来源

- [中国历代人物传记资料库：吳修月（CBDB 78485）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=78485&o=json)
