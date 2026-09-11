---
schema: wang-person/v1
id: p_74HTjLiVA9smKoDrQtJHxY
status: active
merged_into: null
display_name: 王述祖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9MXfNWFwyq1RjACjJ7ZUxM
        subject_person_id: p_74HTjLiVA9smKoDrQtJHxY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王述祖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QKj9wW1mx4ChKW7V9q8xLD
          claim_id: c_9MXfNWFwyq1RjACjJ7ZUxM
          source_id: s_dSHxPP5xgkGWEaD4tWYV2P
          stance: supports
          locator: CBDB:334091
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（334091）
          source: &a1
            id: s_dSHxPP5xgkGWEaD4tWYV2P
            source_type: api_record
            title: 中国历代人物传记资料库：王述祖（CBDB 334091）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334091&o=json
            external_identifier: CBDB:334091
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.432Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6LxHB8K9LkH1y57cUhGWv6
        subject_person_id: p_74HTjLiVA9smKoDrQtJHxY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王述祖，明人物。隆慶二年進士，籍贯南陽。（中国历代人物传记资料库 CBDB 334091）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_r0Zk-aFS-R3jzU2UNqd5ta
          claim_id: c_6LxHB8K9LkH1y57cUhGWv6
          source_id: s_dSHxPP5xgkGWEaD4tWYV2P
          stance: supports
          locator: CBDB:334091
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

# 王述祖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王述祖 | accepted |
| bio.summary | 王述祖，明人物。隆慶二年進士，籍贯南陽。（中国历代人物传记资料库 CBDB 334091） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王述祖（CBDB 334091）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334091&o=json)
