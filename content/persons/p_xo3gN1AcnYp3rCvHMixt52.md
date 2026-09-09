---
schema: wang-person/v1
id: p_xo3gN1AcnYp3rCvHMixt52
status: active
merged_into: null
display_name: 王和卿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qAHy5QApdX5LAn5FwGaAcx
        subject_person_id: p_xo3gN1AcnYp3rCvHMixt52
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王和卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EVW65Hbz3pF7DJQn1XGzdj
          claim_id: c_qAHy5QApdX5LAn5FwGaAcx
          source_id: s_SBzBe9yC6S8S8aC38vWy9E
          stance: supports
          locator: CBDB:237284
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（237284）
          source: &a1
            id: s_SBzBe9yC6S8S8aC38vWy9E
            source_type: api_record
            title: 中国历代人物传记资料库：王和卿（CBDB 237284）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237284&o=json
            external_identifier: CBDB:237284
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.830Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_F3RxMv9hWwmn2UKzmNXJPi
        subject_person_id: p_xo3gN1AcnYp3rCvHMixt52
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
        - id: cs_J36XrYE4yxrEaNr9GxGQxy
          claim_id: c_F3RxMv9hWwmn2UKzmNXJPi
          source_id: s_SBzBe9yC6S8S8aC38vWy9E
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

# 王和卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王和卿 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王和卿（CBDB 237284）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237284&o=json)
