---
schema: wang-person/v1
id: p_1bhgsEnY1DU8RfEY4VdEyU
status: active
merged_into: null
display_name: 王騭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_G3PyChAWvz5mKJG8dfh5Za
        subject_person_id: p_1bhgsEnY1DU8RfEY4VdEyU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王騭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9CR7FwQGrwuBTqZ5aPt1gq
          claim_id: c_G3PyChAWvz5mKJG8dfh5Za
          source_id: s_9JDPMLpP6kNS4di5FKofxu
          stance: supports
          locator: CBDB:71234
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71234）
          source: &a1
            id: s_9JDPMLpP6kNS4di5FKofxu
            source_type: api_record
            title: 中国历代人物传记资料库：王騭（CBDB 71234）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71234&o=json
            external_identifier: CBDB:71234
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.513Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_G3x8QDoZ3FADuDJ9bL5tKZ
        subject_person_id: p_1bhgsEnY1DU8RfEY4VdEyU
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1613年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aiyx45pvEe7PR6CRZv2dMe
          claim_id: c_G3x8QDoZ3FADuDJ9bL5tKZ
          source_id: s_9JDPMLpP6kNS4di5FKofxu
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
        id: c_8DaHAPNCbk6amn28d8RMEL
        subject_person_id: p_1bhgsEnY1DU8RfEY4VdEyU
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1695年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H9ZMjR4zrk9AMAbaiBroLJ
          claim_id: c_8DaHAPNCbk6amn28d8RMEL
          source_id: s_9JDPMLpP6kNS4di5FKofxu
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
        id: c_szK89fMKHX6b4QEQQuMB9x
        subject_person_id: p_1bhgsEnY1DU8RfEY4VdEyU
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
        - id: cs_DCfY753osxGnw4g3AAcU13
          claim_id: c_szK89fMKHX6b4QEQQuMB9x
          source_id: s_9JDPMLpP6kNS4di5FKofxu
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

# 王騭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王騭 | accepted |
| birth.date | 1613年 | accepted |
| death.date | 1695年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王騭（CBDB 71234）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71234&o=json)
