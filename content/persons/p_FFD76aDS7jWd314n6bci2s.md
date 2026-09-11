---
schema: wang-person/v1
id: p_FFD76aDS7jWd314n6bci2s
status: active
merged_into: null
display_name: 王紹
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MNeBeQ52GZvfmxPU4KNQ6o
        subject_person_id: p_FFD76aDS7jWd314n6bci2s
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WWYJdCdwP3Njsna7UvoQcK
          claim_id: c_MNeBeQ52GZvfmxPU4KNQ6o
          source_id: s_QaH9rACoxMXM3GXH5TdeBU
          stance: supports
          locator: CBDB:492239
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（492239）
          source: &a1
            id: s_QaH9rACoxMXM3GXH5TdeBU
            source_type: api_record
            title: 中国历代人物传记资料库：王紹（CBDB 492239）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=492239&o=json
            external_identifier: CBDB:492239
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.281Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Htgo81YYD3LarEQ89eYqu2
        subject_person_id: p_FFD76aDS7jWd314n6bci2s
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹，明人物。曾任教諭。（中国历代人物传记资料库 CBDB 492239）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zxa-yMKbJryhe0dqMKveS8
          claim_id: c_Htgo81YYD3LarEQ89eYqu2
          source_id: s_QaH9rACoxMXM3GXH5TdeBU
          stance: supports
          locator: CBDB:492239
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

# 王紹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紹 | accepted |
| bio.summary | 王紹，明人物。曾任教諭。（中国历代人物传记资料库 CBDB 492239） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王紹（CBDB 492239）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=492239&o=json)
