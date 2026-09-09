---
schema: wang-person/v1
id: p_7xFeon8XjY4faqRLzNiUEf
status: active
merged_into: null
display_name: 王嘉言
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FBrvZRQUFbCd7JsvenrA19
        subject_person_id: p_7xFeon8XjY4faqRLzNiUEf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3f92aWd2Dqp5Jy7wBN8Jcu
          claim_id: c_FBrvZRQUFbCd7JsvenrA19
          source_id: s_8FdnMSTGJqAjC99c9f51nQ
          stance: supports
          locator: CBDB:97833
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（97833）
          source: &a1
            id: s_8FdnMSTGJqAjC99c9f51nQ
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉言（CBDB 97833）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97833&o=json
            external_identifier: CBDB:97833
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.189Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_59Xb1rJ4nN7H83oCN6QaDJ
        subject_person_id: p_7xFeon8XjY4faqRLzNiUEf
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
        - id: cs_77LQcxo8P8qu22SCtF7cAM
          claim_id: c_59Xb1rJ4nN7H83oCN6QaDJ
          source_id: s_8FdnMSTGJqAjC99c9f51nQ
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

# 王嘉言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嘉言 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嘉言（CBDB 97833）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97833&o=json)
