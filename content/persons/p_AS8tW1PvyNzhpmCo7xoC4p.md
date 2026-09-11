---
schema: wang-person/v1
id: p_AS8tW1PvyNzhpmCo7xoC4p
status: active
merged_into: null
display_name: 王利仁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4oKxFMu9fWVYHevm2ixdL3
        subject_person_id: p_AS8tW1PvyNzhpmCo7xoC4p
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王利仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hNbsP1GAbpMvktCfZ5PGWY
          claim_id: c_4oKxFMu9fWVYHevm2ixdL3
          source_id: s_5dcNoM5JsBKNb2i37vvd8T
          stance: supports
          locator: CBDB:636363
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636363）
          source: &a1
            id: s_5dcNoM5JsBKNb2i37vvd8T
            source_type: api_record
            title: 中国历代人物传记资料库：王利仁（CBDB 636363）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636363&o=json
            external_identifier: CBDB:636363
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.967Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Qz5npHSU2qFfDRfJ6nD1d7
        subject_person_id: p_AS8tW1PvyNzhpmCo7xoC4p
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王利仁，清人物。籍贯平越直隸州，入仕副榜，曾任復設教諭。（中国历代人物传记资料库 CBDB 636363）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jzYjkCnP0WjyFU3QMQ8QCS
          claim_id: c_Qz5npHSU2qFfDRfJ6nD1d7
          source_id: s_5dcNoM5JsBKNb2i37vvd8T
          stance: supports
          locator: CBDB:636363
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

# 王利仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王利仁 | accepted |
| bio.summary | 王利仁，清人物。籍贯平越直隸州，入仕副榜，曾任復設教諭。（中国历代人物传记资料库 CBDB 636363） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王利仁（CBDB 636363）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636363&o=json)
