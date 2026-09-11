---
schema: wang-person/v1
id: p_Y9FkFW41swDr63GXePvdJU
status: active
merged_into: null
display_name: 王潤之
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jkZcsifMLrQhkBv9FDmcEu
        subject_person_id: p_Y9FkFW41swDr63GXePvdJU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王潤之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7BS67fCvK8MN6GPDxx8Y4G
          claim_id: c_jkZcsifMLrQhkBv9FDmcEu
          source_id: s_NjK8CzDZLQAYHMXybKB3Qk
          stance: supports
          locator: CBDB:101433
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101433）
          source: &a1
            id: s_NjK8CzDZLQAYHMXybKB3Qk
            source_type: api_record
            title: 中国历代人物传记资料库：王潤之（CBDB 101433）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101433&o=json
            external_identifier: CBDB:101433
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.845Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dHMi98WcaHmmbFUPDihqoo
        subject_person_id: p_Y9FkFW41swDr63GXePvdJU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王潤之，元人物。身份为詞人。（中国历代人物传记资料库 CBDB 101433）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zvuam-6Hw64YuKSYazP5hd
          claim_id: c_dHMi98WcaHmmbFUPDihqoo
          source_id: s_NjK8CzDZLQAYHMXybKB3Qk
          stance: supports
          locator: CBDB:101433
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

# 王潤之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王潤之 | accepted |
| bio.summary | 王潤之，元人物。身份为詞人。（中国历代人物传记资料库 CBDB 101433） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王潤之（CBDB 101433）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101433&o=json)
