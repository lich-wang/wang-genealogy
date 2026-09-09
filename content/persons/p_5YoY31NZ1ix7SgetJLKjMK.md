---
schema: wang-person/v1
id: p_5YoY31NZ1ix7SgetJLKjMK
status: active
merged_into: null
display_name: 王守約
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rfbrXA38sfcDXx1Rza3Zw2
        subject_person_id: p_5YoY31NZ1ix7SgetJLKjMK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守約
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hfKwWiKq6TXAHymHLtjuiP
          claim_id: c_rfbrXA38sfcDXx1Rza3Zw2
          source_id: s_CXrXRK1Y7ysq3qZAGkJ8GZ
          stance: supports
          locator: CBDB:297182
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（297182）
          source: &a1
            id: s_CXrXRK1Y7ysq3qZAGkJ8GZ
            source_type: api_record
            title: 中国历代人物传记资料库：王守約（CBDB 297182）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297182&o=json
            external_identifier: CBDB:297182
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.550Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_daPj3QB938BFBbPfAkr8aW
        subject_person_id: p_5YoY31NZ1ix7SgetJLKjMK
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
        - id: cs_Z53EGAGKjn1iLGixKGPbxX
          claim_id: c_daPj3QB938BFBbPfAkr8aW
          source_id: s_CXrXRK1Y7ysq3qZAGkJ8GZ
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

# 王守約

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王守約 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王守約（CBDB 297182）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297182&o=json)
