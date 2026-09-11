---
schema: wang-person/v1
id: p_C4wiHQikTSjsz1i3ufG4AD
status: active
merged_into: null
display_name: 王世傑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9HtCMVfmqA1nwNptAK9th2
        subject_person_id: p_C4wiHQikTSjsz1i3ufG4AD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世傑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cGkBArK2HyGZR22b323qkf
          claim_id: c_9HtCMVfmqA1nwNptAK9th2
          source_id: s_7Efgg5dU6Kq6A1SRNyJSnn
          stance: supports
          locator: CBDB:462416
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（462416）
          source: &a1
            id: s_7Efgg5dU6Kq6A1SRNyJSnn
            source_type: api_record
            title: 中国历代人物传记资料库：王世傑（CBDB 462416）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=462416&o=json
            external_identifier: CBDB:462416
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.847Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Jqs8vPLYYyJdAYe3kXBZUS
        subject_person_id: p_C4wiHQikTSjsz1i3ufG4AD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世傑，清人物。曾任城守左營都司。（中国历代人物传记资料库 CBDB 462416）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FGTZ0hReDG5kTCD-MS8WNC
          claim_id: c_Jqs8vPLYYyJdAYe3kXBZUS
          source_id: s_7Efgg5dU6Kq6A1SRNyJSnn
          stance: supports
          locator: CBDB:462416
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

# 王世傑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世傑 | accepted |
| bio.summary | 王世傑，清人物。曾任城守左營都司。（中国历代人物传记资料库 CBDB 462416） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世傑（CBDB 462416）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=462416&o=json)
