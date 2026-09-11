---
schema: wang-person/v1
id: p_6SUG1f8gMGhXWQQPzxELj4
status: active
merged_into: null
display_name: 王巖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_445hxTrsh7ivTPGH5tUqdv
        subject_person_id: p_6SUG1f8gMGhXWQQPzxELj4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王巖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ivfiC1EkmoSqQ5vdcK6qSJ
          claim_id: c_445hxTrsh7ivTPGH5tUqdv
          source_id: s_6bLC6aaKz28o68FwFXH3cc
          stance: supports
          locator: CBDB:576153
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（576153）
          source: &a1
            id: s_6bLC6aaKz28o68FwFXH3cc
            source_type: api_record
            title: 中国历代人物传记资料库：王巖（CBDB 576153）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576153&o=json
            external_identifier: CBDB:576153
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.950Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JfYCzbwvFPywZ5WiEo5K3P
        subject_person_id: p_6SUG1f8gMGhXWQQPzxELj4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王巖，清人物。籍贯清豐，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 576153）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rud9j-Gn0dBEtQXX1zwkj6
          claim_id: c_JfYCzbwvFPywZ5WiEo5K3P
          source_id: s_6bLC6aaKz28o68FwFXH3cc
          stance: supports
          locator: CBDB:576153
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

# 王巖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王巖 | accepted |
| bio.summary | 王巖，清人物。籍贯清豐，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 576153） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王巖（CBDB 576153）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576153&o=json)
