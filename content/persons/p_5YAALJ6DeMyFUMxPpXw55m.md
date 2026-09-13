---
schema: wang-person/v1
id: p_5YAALJ6DeMyFUMxPpXw55m
status: active
merged_into: null
display_name: 王基昌
cbdb_id: 414149
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oQsQ3PbZiKCnpytHZRGQUM
        subject_person_id: p_5YAALJ6DeMyFUMxPpXw55m
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王基昌，清人物。曾任知縣。（中国历代人物传记资料库 CBDB 414149）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_GeCIF_VDkZGQwylALdKQZb
          claim_id: c_oQsQ3PbZiKCnpytHZRGQUM
          source_id: s_ThPkMXTo9jhk3k21ikL9xy
          stance: supports
          locator: CBDB:414149
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ThPkMXTo9jhk3k21ikL9xy
            source_type: api_record
            title: 中国历代人物传记资料库：王基昌（CBDB 414149）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414149&o=json
            external_identifier: CBDB:414149
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:28.654Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_oKmiwcWcqavM8t895AQfJd
        subject_person_id: p_5YAALJ6DeMyFUMxPpXw55m
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王基昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_hKL6D2rCBSGgtC7EZCAFZG
          claim_id: c_oKmiwcWcqavM8t895AQfJd
          source_id: s_ThPkMXTo9jhk3k21ikL9xy
          stance: supports
          locator: CBDB:414149
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（5201-5300）｜历史性依据：CBDB 朝代 = 清
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

# 王基昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王基昌，清人物。曾任知縣。（中国历代人物传记资料库 CBDB 414149） | accepted |
| name.primary | 王基昌 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王基昌（CBDB 414149）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414149&o=json)
