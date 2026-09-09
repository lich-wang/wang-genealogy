---
schema: wang-person/v1
id: p_HEQU7DxKJ26G7uHPVezaYP
status: active
merged_into: null
display_name: 王應嘉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uCd8HFp5ymEELd8xqCWrGd
        subject_person_id: p_HEQU7DxKJ26G7uHPVezaYP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應嘉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NUFfAUtx1VFHDv9oGKKPQu
          claim_id: c_uCd8HFp5ymEELd8xqCWrGd
          source_id: s_HsJ1CjHBJDAjfsJQ1WNRqC
          stance: supports
          locator: CBDB:685071
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（685071）
          source: &a1
            id: s_HsJ1CjHBJDAjfsJQ1WNRqC
            source_type: api_record
            title: 中国历代人物传记资料库：王應嘉（CBDB 685071）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=685071&o=json
            external_identifier: CBDB:685071
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.314Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2F53DUzE3xG34aCyTrSy8e
        subject_person_id: p_HEQU7DxKJ26G7uHPVezaYP
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
        - id: cs_dM1NoQRtFKWk1BP8kP2RWE
          claim_id: c_2F53DUzE3xG34aCyTrSy8e
          source_id: s_HsJ1CjHBJDAjfsJQ1WNRqC
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

# 王應嘉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應嘉 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王應嘉（CBDB 685071）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=685071&o=json)
