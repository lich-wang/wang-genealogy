---
schema: wang-person/v1
id: p_FLV7GQndUixaZCT6F8Qtf7
status: active
merged_into: null
display_name: 王勝元
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xxFWvsgwGCHDErnsruEzyd
        subject_person_id: p_FLV7GQndUixaZCT6F8Qtf7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勝元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5BZ3kuUNeAm925iqLRYzSK
          claim_id: c_xxFWvsgwGCHDErnsruEzyd
          source_id: s_ZsfFvtAeTrA35RPP2nswex
          stance: supports
          locator: CBDB:695255
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（695255）
          source: &a1
            id: s_ZsfFvtAeTrA35RPP2nswex
            source_type: api_record
            title: 中国历代人物传记资料库：王勝元（CBDB 695255）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=695255&o=json
            external_identifier: CBDB:695255
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.537Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gQKA28DCY3sHfGFw87G4eW
        subject_person_id: p_FLV7GQndUixaZCT6F8Qtf7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勝元，清人物。身份为死國難。（中国历代人物传记资料库 CBDB 695255）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JR47H3lghhmdxkfDvAPvz6
          claim_id: c_gQKA28DCY3sHfGFw87G4eW
          source_id: s_ZsfFvtAeTrA35RPP2nswex
          stance: supports
          locator: CBDB:695255
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

# 王勝元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王勝元 | accepted |
| bio.summary | 王勝元，清人物。身份为死國難。（中国历代人物传记资料库 CBDB 695255） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王勝元（CBDB 695255）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=695255&o=json)
