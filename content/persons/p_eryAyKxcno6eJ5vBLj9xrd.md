---
schema: wang-person/v1
id: p_eryAyKxcno6eJ5vBLj9xrd
status: active
merged_into: null
display_name: 王瑸
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_x73cL3aRupnyBZ9QMJCLMD
        subject_person_id: p_eryAyKxcno6eJ5vBLj9xrd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑸
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_guZMPp8LkG7mNYKrxK2kEC
          claim_id: c_x73cL3aRupnyBZ9QMJCLMD
          source_id: s_MGzBL9Kb9Z9TNgQR8HuBSw
          stance: supports
          locator: CBDB:71261
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71261）
          source: &a1
            id: s_MGzBL9Kb9Z9TNgQR8HuBSw
            source_type: api_record
            title: 中国历代人物传记资料库：王瑸（CBDB 71261）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71261&o=json
            external_identifier: CBDB:71261
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.537Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_afUwtU4EBgSKNZrGNVDCwE
        subject_person_id: p_eryAyKxcno6eJ5vBLj9xrd
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1651年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jpfDdprNZCynnbZTU8xQNZ
          claim_id: c_afUwtU4EBgSKNZrGNVDCwE
          source_id: s_MGzBL9Kb9Z9TNgQR8HuBSw
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_6MPM8PDds7fmUQEdnUiccq
        subject_person_id: p_eryAyKxcno6eJ5vBLj9xrd
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1718年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F12Fwpb3LsXUDJUtK7YqWn
          claim_id: c_6MPM8PDds7fmUQEdnUiccq
          source_id: s_MGzBL9Kb9Z9TNgQR8HuBSw
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
        id: c_wxuZUK2PMHbHreeg1tL4o6
        subject_person_id: p_eryAyKxcno6eJ5vBLj9xrd
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
        - id: cs_BDKZY7WmAYWBWEX2kVQC5R
          claim_id: c_wxuZUK2PMHbHreeg1tL4o6
          source_id: s_MGzBL9Kb9Z9TNgQR8HuBSw
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

# 王瑸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑸 | accepted |
| birth.date | 1651年 | accepted |
| death.date | 1718年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瑸（CBDB 71261）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71261&o=json)
