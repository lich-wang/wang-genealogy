---
schema: wang-person/v1
id: p_i2UQKwz22Z88LRYj1TsSqo
status: active
merged_into: null
display_name: 王繡君
cbdb_id: 69811
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WeM3Z41B4JBYKGtJNRmk2G
        subject_person_id: p_i2UQKwz22Z88LRYj1TsSqo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繡君，史料所见人物。本项目依据《中国历代人物传记资料库：王繡君（CBDB 69811）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_DfBP7PTLTbjFWVWtz35xXm
          claim_id: c_WeM3Z41B4JBYKGtJNRmk2G
          source_id: s_NEst4SuGZngfM2ay7ETHrN
          stance: supports
          locator: CBDB:69811
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_NEst4SuGZngfM2ay7ETHrN
            source_type: api_record
            title: 中国历代人物传记资料库：王繡君（CBDB 69811）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69811&o=json
            external_identifier: CBDB:69811
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.831Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_mZH6bB7VBbHKhpCteqSn6P
        subject_person_id: p_i2UQKwz22Z88LRYj1TsSqo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繡君
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_JaWsuVR29grB3GPtn5ChnX
          claim_id: c_mZH6bB7VBbHKhpCteqSn6P
          source_id: s_NEst4SuGZngfM2ay7ETHrN
          stance: supports
          locator: CBDB:69811
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1501-1600）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_BibpXplgZvDJRvs9mPu4Ub
        subject_person_id: p_i2UQKwz22Z88LRYj1TsSqo
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_uKEKHMLFo8LMTQLxyEYTqM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2VoeYMUnMUKtujybxYcbEO
          claim_id: c_BibpXplgZvDJRvs9mPu4Ub
          source_id: s_fc6pJW97ijKZ-ICgRuREGD
          stance: supports
          locator: CBDB 双向互证（丈夫 馬振飛）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_fc6pJW97ijKZ-ICgRuREGD
            source_type: api_record
            title: 中国历代人物传记资料库：馬振飛（CBDB 69813）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69813&o=json
            external_identifier: CBDB:69813
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_uKEKHMLFo8LMTQLxyEYTqM
        status: active
        display_name: 馬振飛
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王繡君

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王繡君，史料所见人物。本项目依据《中国历代人物传记资料库：王繡君（CBDB 69811）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王繡君 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_uKEKHMLFo8LMTQLxyEYTqM | 馬振飛 | accepted |

## 外部来源

- [中国历代人物传记资料库：馬振飛（CBDB 69813）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69813&o=json)
- [中国历代人物传记资料库：王繡君（CBDB 69811）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69811&o=json)
