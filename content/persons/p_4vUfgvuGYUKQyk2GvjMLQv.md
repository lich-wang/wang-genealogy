---
schema: wang-person/v1
id: p_4vUfgvuGYUKQyk2GvjMLQv
status: active
merged_into: null
display_name: 王文素
cbdb_id: 34059
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aGz7Xiec4fd55s7oRtW5uk
        subject_person_id: p_4vUfgvuGYUKQyk2GvjMLQv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文素，史料所见人物。本项目依据《中国历代人物传记资料库：王文素（CBDB 34059）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_H6AV4y4l47LFzh17VuhFhX
          claim_id: c_aGz7Xiec4fd55s7oRtW5uk
          source_id: s_ULKfHSbJjPye58yZoDwTNo
          stance: supports
          locator: CBDB:34059
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_ULKfHSbJjPye58yZoDwTNo
            source_type: api_record
            title: 中国历代人物传记资料库：王文素（CBDB 34059）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34059&o=json
            external_identifier: CBDB:34059
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.707Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_nHoR2BUN56k1MWoyWGtmLA
        subject_person_id: p_4vUfgvuGYUKQyk2GvjMLQv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文素
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_HyFqRcpEtwA5qqdRAFoX1X
          claim_id: c_nHoR2BUN56k1MWoyWGtmLA
          source_id: s_ULKfHSbJjPye58yZoDwTNo
          stance: supports
          locator: CBDB:34059
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1101-1200）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_QHYq8tOZP5NO3VozPmVQ2B
        subject_person_id: p_4vUfgvuGYUKQyk2GvjMLQv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_w2AotMiaiwLWFjQAANJQ54
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tC5TIzPNbeyh4UXJhXV0W0
          claim_id: c_QHYq8tOZP5NO3VozPmVQ2B
          source_id: s_Ap3LxwBAapk2xL7a1ofXXM
          stance: supports
          locator: CBDB 双向互证（父 王文素 ⇄ 子 王朏）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_Ap3LxwBAapk2xL7a1ofXXM
            source_type: api_record
            title: 中国历代人物传记资料库：王朏（CBDB 34060）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34060&o=json
            external_identifier: CBDB:34060
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.075Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_w2AotMiaiwLWFjQAANJQ54
        status: active
        display_name: 王朏
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王文素

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王文素，史料所见人物。本项目依据《中国历代人物传记资料库：王文素（CBDB 34059）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王文素 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_w2AotMiaiwLWFjQAANJQ54 | 王朏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王朏（CBDB 34060）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34060&o=json)
- [中国历代人物传记资料库：王文素（CBDB 34059）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34059&o=json)
