---
schema: wang-person/v1
id: p_oWPnNWFfNouZ1Pqjy2kkyj
status: active
merged_into: null
display_name: 王洙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EPxcqke3V6JCCDYP71RNbd
        subject_person_id: p_oWPnNWFfNouZ1Pqjy2kkyj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ik2jCGJFjvkAQM7h9uNozr
          claim_id: c_EPxcqke3V6JCCDYP71RNbd
          source_id: s_RUYf6e7CY7eSUj4UQWnKyp
          stance: supports
          locator: CBDB:469246
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（469246）
          source: &a1
            id: s_RUYf6e7CY7eSUj4UQWnKyp
            source_type: api_record
            title: 中国历代人物传记资料库：王洙（CBDB 469246）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=469246&o=json
            external_identifier: CBDB:469246
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.115Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LJ6FJXdKwTGjC9fynH7HR9
        subject_person_id: p_oWPnNWFfNouZ1Pqjy2kkyj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洙，宋人物。曾任縣主簿。（中国历代人物传记资料库 CBDB 469246）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Og4SVwn7OVHEpJ-78Gb6Sg
          claim_id: c_LJ6FJXdKwTGjC9fynH7HR9
          source_id: s_RUYf6e7CY7eSUj4UQWnKyp
          stance: supports
          locator: CBDB:469246
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王洙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王洙 | accepted |
| bio.summary | 王洙，宋人物。曾任縣主簿。（中国历代人物传记资料库 CBDB 469246） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王洙（CBDB 469246）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=469246&o=json)
