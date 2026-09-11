---
schema: wang-person/v1
id: p_vodvantD8hnRhiMQZiicM4
status: active
merged_into: null
display_name: 王之幾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eJfQcz1tUrNTY49Gp2JUWS
        subject_person_id: p_vodvantD8hnRhiMQZiicM4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之幾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_S39mATs4PEJYnPeNyiz8cT
          claim_id: c_eJfQcz1tUrNTY49Gp2JUWS
          source_id: s_qiiH64aqNHhBNE2fcRdSqJ
          stance: supports
          locator: CBDB:635789
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635789）
          source: &a1
            id: s_qiiH64aqNHhBNE2fcRdSqJ
            source_type: api_record
            title: 中国历代人物传记资料库：王之幾（CBDB 635789）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635789&o=json
            external_identifier: CBDB:635789
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.793Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yDj957Qumqh7Qni7WFDkmj
        subject_person_id: p_vodvantD8hnRhiMQZiicM4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之幾，清人物。籍贯永定，入仕廩貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 635789）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uB3tiedEQpsgexU5ZiK6gl
          claim_id: c_yDj957Qumqh7Qni7WFDkmj
          source_id: s_qiiH64aqNHhBNE2fcRdSqJ
          stance: supports
          locator: CBDB:635789
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

# 王之幾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之幾 | accepted |
| bio.summary | 王之幾，清人物。籍贯永定，入仕廩貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 635789） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之幾（CBDB 635789）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635789&o=json)
