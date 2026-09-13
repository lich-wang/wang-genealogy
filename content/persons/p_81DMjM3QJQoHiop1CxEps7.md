---
schema: wang-person/v1
id: p_81DMjM3QJQoHiop1CxEps7
status: active
merged_into: null
display_name: 王道文
cbdb_id: 321158
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ce2K7uPCAAQRPxwWkSizuL
        subject_person_id: p_81DMjM3QJQoHiop1CxEps7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道文，明人物。嘉靖三十五年進士，籍贯常熟。（中国历代人物传记资料库 CBDB 321158）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_eODy20H2hE2qqwBV37rD4i
          claim_id: c_ce2K7uPCAAQRPxwWkSizuL
          source_id: s_jXTyk5u63NZdztkcqP4V5n
          stance: supports
          locator: CBDB:321158
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_jXTyk5u63NZdztkcqP4V5n
            source_type: api_record
            title: 中国历代人物传记资料库：王道文（CBDB 321158）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321158&o=json
            external_identifier: CBDB:321158
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Z3qR1FVM1phpPrLZR3yYen
        subject_person_id: p_81DMjM3QJQoHiop1CxEps7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5JY7EekBonNzMRFLUX8rjH
          claim_id: c_Z3qR1FVM1phpPrLZR3yYen
          source_id: s_jXTyk5u63NZdztkcqP4V5n
          stance: supports
          locator: CBDB:321158
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
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

# 王道文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王道文，明人物。嘉靖三十五年進士，籍贯常熟。（中国历代人物传记资料库 CBDB 321158） | accepted |
| name.primary | 王道文 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王道文（CBDB 321158）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321158&o=json)
