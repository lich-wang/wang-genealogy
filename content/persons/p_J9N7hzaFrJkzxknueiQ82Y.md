---
schema: wang-person/v1
id: p_J9N7hzaFrJkzxknueiQ82Y
status: active
merged_into: null
display_name: 王度
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wjfQfzNwbpTSR5KXqJsC2W
        subject_person_id: p_J9N7hzaFrJkzxknueiQ82Y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王度
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DEoGHN3uABmdM9tKh8pjUy
          claim_id: c_wjfQfzNwbpTSR5KXqJsC2W
          source_id: s_EUfL97Mpr84pZAgg62g13t
          stance: supports
          locator: CBDB:198501
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198501）
          source: &a1
            id: s_EUfL97Mpr84pZAgg62g13t
            source_type: api_record
            title: 中国历代人物传记资料库：王度（CBDB 198501）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198501&o=json
            external_identifier: CBDB:198501
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.498Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_GqTza1QKon3hiuk1v2AFnB
        subject_person_id: p_J9N7hzaFrJkzxknueiQ82Y
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1407年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9bMj9b68NaDAPvL7jhPnP6
          claim_id: c_GqTza1QKon3hiuk1v2AFnB
          source_id: s_EUfL97Mpr84pZAgg62g13t
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
        id: c_56CJFd5AgAd1FVzBBoQKvz
        subject_person_id: p_J9N7hzaFrJkzxknueiQ82Y
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
        - id: cs_JPNvWU5Yw96asf9hwAVf4Y
          claim_id: c_56CJFd5AgAd1FVzBBoQKvz
          source_id: s_EUfL97Mpr84pZAgg62g13t
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

# 王度

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王度 | accepted |
| birth.date | 1407年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王度（CBDB 198501）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198501&o=json)
