---
schema: wang-person/v1
id: p_fAKCeM7BDQhgJG14kfc4mW
status: active
merged_into: null
display_name: 王存
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VQhvkYss9ToDRGSkzRD1yK
        subject_person_id: p_fAKCeM7BDQhgJG14kfc4mW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王存
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9SREqrRtTEsCAfN9DfjghM
          claim_id: c_VQhvkYss9ToDRGSkzRD1yK
          source_id: s_vf8YrPUUzDKbEQKeKTowpt
          stance: supports
          locator: CBDB:1897
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1897）
          source: &a1
            id: s_vf8YrPUUzDKbEQKeKTowpt
            source_type: api_record
            title: 中国历代人物传记资料库：王存（CBDB 1897）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1897&o=json
            external_identifier: CBDB:1897
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.379Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_X612JNoUS9DtNZQGyovEed
        subject_person_id: p_fAKCeM7BDQhgJG14kfc4mW
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1023年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J9VqL4PPb9kmqoMRZ4S9e8
          claim_id: c_X612JNoUS9DtNZQGyovEed
          source_id: s_vf8YrPUUzDKbEQKeKTowpt
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
        id: c_LZbjMs23PTNQfj5bj3Z2PN
        subject_person_id: p_fAKCeM7BDQhgJG14kfc4mW
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1101年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BZUYFrLr1GBdVEqYdig7Ry
          claim_id: c_LZbjMs23PTNQfj5bj3Z2PN
          source_id: s_vf8YrPUUzDKbEQKeKTowpt
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
        id: c_uAPNw9Mk8brBitQ1HRNBcn
        subject_person_id: p_fAKCeM7BDQhgJG14kfc4mW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8EL9yaR3YmTzNEXLqzf8nD
          claim_id: c_uAPNw9Mk8brBitQ1HRNBcn
          source_id: s_vf8YrPUUzDKbEQKeKTowpt
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

# 王存

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王存 | accepted |
| birth.date | 1023年 | accepted |
| death.date | 1101年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王存（CBDB 1897）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1897&o=json)
