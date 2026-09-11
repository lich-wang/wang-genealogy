---
schema: wang-person/v1
id: p_o67uzbhKc1SNsyeitxQQE1
status: active
merged_into: null
display_name: 王仲淇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_H44s3hDxLguzPp4DPKPZqQ
        subject_person_id: p_o67uzbhKc1SNsyeitxQQE1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲淇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GYDTGMSVLPzaZmr9RMZwy3
          claim_id: c_H44s3hDxLguzPp4DPKPZqQ
          source_id: s_q2ompWEBjiQPT1XW2QVGEN
          stance: supports
          locator: CBDB:635950
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635950）
          source: &a1
            id: s_q2ompWEBjiQPT1XW2QVGEN
            source_type: api_record
            title: 中国历代人物传记资料库：王仲淇（CBDB 635950）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635950&o=json
            external_identifier: CBDB:635950
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.065Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KTDoTj9a86QfZ92zX7NEjX
        subject_person_id: p_o67uzbhKc1SNsyeitxQQE1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲淇，清人物。籍贯吳縣，入仕軍功補授(軍功)，曾任縣丞。（中国历代人物传记资料库 CBDB 635950）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aK44XOWd90OaDtTjlPKJqB
          claim_id: c_KTDoTj9a86QfZ92zX7NEjX
          source_id: s_q2ompWEBjiQPT1XW2QVGEN
          stance: supports
          locator: CBDB:635950
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

# 王仲淇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲淇 | accepted |
| bio.summary | 王仲淇，清人物。籍贯吳縣，入仕軍功補授(軍功)，曾任縣丞。（中国历代人物传记资料库 CBDB 635950） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仲淇（CBDB 635950）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635950&o=json)
