---
schema: wang-person/v1
id: p_iJvJfwUqKTgqcKUSXQkKTK
status: active
merged_into: null
display_name: 王大任
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tjWrXABLSZJdV17ndWMX6Z
        subject_person_id: p_iJvJfwUqKTgqcKUSXQkKTK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大任
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5tvAYJyrBJ8TsL3nApQa5K
          claim_id: c_tjWrXABLSZJdV17ndWMX6Z
          source_id: s_jY4A1QnhcYJ5MVXPUoNUFg
          stance: supports
          locator: CBDB:204398
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204398）
          source: &a1
            id: s_jY4A1QnhcYJ5MVXPUoNUFg
            source_type: api_record
            title: 中国历代人物传记资料库：王大任（CBDB 204398）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204398&o=json
            external_identifier: CBDB:204398
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.826Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_oQULzGjPC5PPDTgQ3dAdaz
        subject_person_id: p_iJvJfwUqKTgqcKUSXQkKTK
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1527年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QK75BkFoDQsAy88kSMhWgf
          claim_id: c_oQULzGjPC5PPDTgQ3dAdaz
          source_id: s_jY4A1QnhcYJ5MVXPUoNUFg
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ayN6gUS2RN93GdiWJNQ55C
        subject_person_id: p_iJvJfwUqKTgqcKUSXQkKTK
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
        - id: cs_gJ1UXZ1KwwF5PgF36Q4jWa
          claim_id: c_ayN6gUS2RN93GdiWJNQ55C
          source_id: s_jY4A1QnhcYJ5MVXPUoNUFg
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

# 王大任

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大任 | accepted |
| birth.date | 1527年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大任（CBDB 204398）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204398&o=json)
