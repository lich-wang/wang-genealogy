---
schema: wang-person/v1
id: p_dDTf6ZBEvQU9wGCyMFhaRm
status: active
merged_into: null
display_name: 王朝用
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_J55XEJzo8MXKSDtiVAmGJZ
        subject_person_id: p_dDTf6ZBEvQU9wGCyMFhaRm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝用
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JW1YrzB6GtYGkaFR1AGx56
          claim_id: c_J55XEJzo8MXKSDtiVAmGJZ
          source_id: s_isJK8J4qaGEhbi5PBfi6Qv
          stance: supports
          locator: CBDB:317783
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（317783）
          source: &a1
            id: s_isJK8J4qaGEhbi5PBfi6Qv
            source_type: api_record
            title: 中国历代人物传记资料库：王朝用（CBDB 317783）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317783&o=json
            external_identifier: CBDB:317783
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.985Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YXhfCYm7KPpjxrG6cnvJtp
        subject_person_id: p_dDTf6ZBEvQU9wGCyMFhaRm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝用，明人物。嘉靖三十二年進士，籍贯成安。（中国历代人物传记资料库 CBDB 317783）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vDkqnk4cgnm4YkeyaMcO9c
          claim_id: c_YXhfCYm7KPpjxrG6cnvJtp
          source_id: s_isJK8J4qaGEhbi5PBfi6Qv
          stance: supports
          locator: CBDB:317783
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

# 王朝用

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朝用 | accepted |
| bio.summary | 王朝用，明人物。嘉靖三十二年進士，籍贯成安。（中国历代人物传记资料库 CBDB 317783） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王朝用（CBDB 317783）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317783&o=json)
