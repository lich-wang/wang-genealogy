---
schema: wang-person/v1
id: p_WG4LcJdg2iBTqvpZQpDp9o
status: active
merged_into: null
display_name: 王慶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WrH8BTQdej43FAtbttfzh4
        subject_person_id: p_WG4LcJdg2iBTqvpZQpDp9o
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mUtb8VAA4jfzVHCggo4kgR
          claim_id: c_WrH8BTQdej43FAtbttfzh4
          source_id: s_P9wQqFz1g9NPy4Aq7kAejE
          stance: supports
          locator: CBDB:175940
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175940）
          source: &a1
            id: s_P9wQqFz1g9NPy4Aq7kAejE
            source_type: api_record
            title: 中国历代人物传记资料库：王慶（CBDB 175940）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175940&o=json
            external_identifier: CBDB:175940
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.210Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_2grpaW4xJDTNNJyJSjA8a3
        subject_person_id: p_WG4LcJdg2iBTqvpZQpDp9o
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 701年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_niVVfsxuDQBCNGPdkPf2aw
          claim_id: c_2grpaW4xJDTNNJyJSjA8a3
          source_id: s_P9wQqFz1g9NPy4Aq7kAejE
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
        id: c_vgjp9NDsk1j9k86mB98f6D
        subject_person_id: p_WG4LcJdg2iBTqvpZQpDp9o
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
        - id: cs_8JGN7u7pHKYC5aJGmLNG8V
          claim_id: c_vgjp9NDsk1j9k86mB98f6D
          source_id: s_P9wQqFz1g9NPy4Aq7kAejE
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

# 王慶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慶 | accepted |
| death.date | 701年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王慶（CBDB 175940）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175940&o=json)
