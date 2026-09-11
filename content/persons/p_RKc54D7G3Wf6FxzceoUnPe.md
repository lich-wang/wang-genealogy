---
schema: wang-person/v1
id: p_RKc54D7G3Wf6FxzceoUnPe
status: active
merged_into: null
display_name: 王檉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xdTuztn2GQJJeeyAmB2fHg
        subject_person_id: p_RKc54D7G3Wf6FxzceoUnPe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王檉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qTBW8ETCF4WPjA4ixACJ3L
          claim_id: c_xdTuztn2GQJJeeyAmB2fHg
          source_id: s_kgeug3LyHbHSegrNFNcq6B
          stance: supports
          locator: CBDB:100975
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100975）
          source: &a1
            id: s_kgeug3LyHbHSegrNFNcq6B
            source_type: api_record
            title: 中国历代人物传记资料库：王檉（CBDB 100975）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100975&o=json
            external_identifier: CBDB:100975
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.159Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_zUmDEhUe3U8zn8KXxvBom7
        subject_person_id: p_RKc54D7G3Wf6FxzceoUnPe
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1298年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h7LkuA979B3ijKEhjt5UAj
          claim_id: c_zUmDEhUe3U8zn8KXxvBom7
          source_id: s_kgeug3LyHbHSegrNFNcq6B
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_He8WC3FaJ4AV9ESt9FUrqJ
        subject_person_id: p_RKc54D7G3Wf6FxzceoUnPe
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1344年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DBp5sm377JA9TBneZRYh27
          claim_id: c_He8WC3FaJ4AV9ESt9FUrqJ
          source_id: s_kgeug3LyHbHSegrNFNcq6B
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1YaV7dmoVAb9AoUB4X7q4F
        subject_person_id: p_RKc54D7G3Wf6FxzceoUnPe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王檉（1298年—1344年），元人物。籍贯金鄉，曾任承發架閣庫管勾、吏、廉訪司照磨。（中国历代人物传记资料库 CBDB 100975）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dkO--b58inc_5swahLxjsj
          claim_id: c_1YaV7dmoVAb9AoUB4X7q4F
          source_id: s_kgeug3LyHbHSegrNFNcq6B
          stance: supports
          locator: CBDB:100975
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

# 王檉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王檉 | accepted |
| birth.date | 1298年 | accepted |
| death.date | 1344年 | accepted |
| bio.summary | 王檉（1298年—1344年），元人物。籍贯金鄉，曾任承發架閣庫管勾、吏、廉訪司照磨。（中国历代人物传记资料库 CBDB 100975） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王檉（CBDB 100975）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100975&o=json)
