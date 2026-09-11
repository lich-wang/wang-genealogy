---
schema: wang-person/v1
id: p_zuufXjtyAjy8GSAVLJySPz
status: active
merged_into: null
display_name: 王嶔
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nP4xYLVY1MW77iFLqs821e
        subject_person_id: p_zuufXjtyAjy8GSAVLJySPz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嶔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_92PMnQ6jz5vmfxBpHVwKEF
          claim_id: c_nP4xYLVY1MW77iFLqs821e
          source_id: s_CsgiA5uWthVymAc6t9TALL
          stance: supports
          locator: CBDB:175774
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175774）
          source: &a1
            id: s_CsgiA5uWthVymAc6t9TALL
            source_type: api_record
            title: 中国历代人物传记资料库：王嶔（CBDB 175774）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175774&o=json
            external_identifier: CBDB:175774
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.118Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_iSNsEy7xNGEsXyqGYj5ex6
        subject_person_id: p_zuufXjtyAjy8GSAVLJySPz
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 699年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NqGFZ9jbvjFgECudpUcoGf
          claim_id: c_iSNsEy7xNGEsXyqGYj5ex6
          source_id: s_CsgiA5uWthVymAc6t9TALL
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
        id: c_eU293ctUu2ppMXipk7jfXg
        subject_person_id: p_zuufXjtyAjy8GSAVLJySPz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S7SZR6CiGdUhBpJEj6cnni
          claim_id: c_eU293ctUu2ppMXipk7jfXg
          source_id: s_CsgiA5uWthVymAc6t9TALL
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
        id: c_JGhf4n6ydoqBud817hyWkk
        subject_person_id: p_tneJQvKK7NPkwfNwUhfwqV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zuufXjtyAjy8GSAVLJySPz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9O_WoRxUkqEl-n24KcleSY
          claim_id: c_JGhf4n6ydoqBud817hyWkk
          source_id: s_P4PcPxcheiEx26Wv36v5Mk
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_P4PcPxcheiEx26Wv36v5Mk
            source_type: api_record
            title: 中国历代人物传记资料库：王孝倫（CBDB 175773）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175773&o=json
            external_identifier: CBDB:175773
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.259Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_tneJQvKK7NPkwfNwUhfwqV
        status: active
        display_name: 王孝倫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王嶔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嶔 | accepted |
| death.date | 699年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_tneJQvKK7NPkwfNwUhfwqV | 王孝倫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王嶔（CBDB 175774）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175774&o=json)
- [中国历代人物传记资料库：王孝倫（CBDB 175773）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175773&o=json)
