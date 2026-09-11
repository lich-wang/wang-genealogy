---
schema: wang-person/v1
id: p_786rsx6FLBjsdm4CnDpBrP
status: active
merged_into: null
display_name: 王吉武
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Z38zBoAZiH298D911GGaDP
        subject_person_id: p_786rsx6FLBjsdm4CnDpBrP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王吉武
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Nd6f8j8rrXuaLnfHvH1ZRw
          claim_id: c_Z38zBoAZiH298D911GGaDP
          source_id: s_YUKJhUCAJgadizB1nKHfSR
          stance: supports
          locator: CBDB:54161
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（54161）
          source: &a1
            id: s_YUKJhUCAJgadizB1nKHfSR
            source_type: api_record
            title: 中国历代人物传记资料库：王吉武（CBDB 54161）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54161&o=json
            external_identifier: CBDB:54161
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.719Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_MEz3GkcBfHUA9SRcEuXtTJ
        subject_person_id: p_786rsx6FLBjsdm4CnDpBrP
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1645年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nJmBcJ4Usuwb9KtziYCAVx
          claim_id: c_MEz3GkcBfHUA9SRcEuXtTJ
          source_id: s_YUKJhUCAJgadizB1nKHfSR
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
        id: c_CNXiCPxcsho4vMuzkLuVCL
        subject_person_id: p_786rsx6FLBjsdm4CnDpBrP
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1725年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hfo5CvGAPkLy7BAJ1tKPtn
          claim_id: c_CNXiCPxcsho4vMuzkLuVCL
          source_id: s_YUKJhUCAJgadizB1nKHfSR
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
        id: c_yHwbNNLhMP6KtsDAj9qkcm
        subject_person_id: p_786rsx6FLBjsdm4CnDpBrP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王吉武（1645年—1725年），史料所见人物。本项目依据《中国历代人物传记资料库：王吉武（CBDB 54161）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7J5IciSjOcrgutDaMl134J
          claim_id: c_yHwbNNLhMP6KtsDAj9qkcm
          source_id: s_YUKJhUCAJgadizB1nKHfSR
          stance: supports
          locator: CBDB:54161
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_kJKAKsd789HH_g6LRRQoYK
        subject_person_id: p_FujQn99C56rGgzyuHWtSJs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_786rsx6FLBjsdm4CnDpBrP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_reqjMALn1Wn8T1NCT0Grds
          claim_id: c_kJKAKsd789HH_g6LRRQoYK
          source_id: s_YUKJhUCAJgadizB1nKHfSR
          stance: supports
          locator: CBDB 双向互证（父 王發祥 ⇄ 子 王吉武）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_FujQn99C56rGgzyuHWtSJs
        status: active
        display_name: 王發祥
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王吉武

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王吉武 | accepted |
| birth.date | 1645年 | accepted |
| death.date | 1725年 | accepted |
| bio.summary | 王吉武（1645年—1725年），史料所见人物。本项目依据《中国历代人物传记资料库：王吉武（CBDB 54161）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FujQn99C56rGgzyuHWtSJs | 王發祥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王吉武（CBDB 54161）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54161&o=json)
