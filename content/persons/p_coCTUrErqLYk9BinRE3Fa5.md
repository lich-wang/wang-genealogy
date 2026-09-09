---
schema: wang-person/v1
id: p_coCTUrErqLYk9BinRE3Fa5
status: active
merged_into: null
display_name: 王葵義
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fBAXZB1rcDjkTcd45SyL3k
        subject_person_id: p_coCTUrErqLYk9BinRE3Fa5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王葵義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_X5P87TfgLRN1gj7cDsPmAJ
          claim_id: c_fBAXZB1rcDjkTcd45SyL3k
          source_id: s_MWnELkdHHbNBNv6B6bYkGU
          stance: supports
          locator: CBDB:640141
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640141）
          source: &a1
            id: s_MWnELkdHHbNBNv6B6bYkGU
            source_type: api_record
            title: 中国历代人物传记资料库：王葵義（CBDB 640141）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640141&o=json
            external_identifier: CBDB:640141
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.162Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2evWioLnZDPiBNH8S1furF
        subject_person_id: p_coCTUrErqLYk9BinRE3Fa5
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
        - id: cs_xFU5SKWpMWipoCoEu8LHMR
          claim_id: c_2evWioLnZDPiBNH8S1furF
          source_id: s_MWnELkdHHbNBNv6B6bYkGU
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

# 王葵義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王葵義 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王葵義（CBDB 640141）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640141&o=json)
