---
schema: wang-person/v1
id: p_FujQn99C56rGgzyuHWtSJs
status: active
merged_into: null
display_name: 王發祥
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZLvhsZDpzApwfWcXmcGABD
        subject_person_id: p_FujQn99C56rGgzyuHWtSJs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王發祥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AhgBLX9ws6JvAeotmvLEKM
          claim_id: c_ZLvhsZDpzApwfWcXmcGABD
          source_id: s_4JK15NQPAyeQ7hfkS3zkWt
          stance: supports
          locator: CBDB:54160
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（54160）
          source: &a1
            id: s_4JK15NQPAyeQ7hfkS3zkWt
            source_type: api_record
            title: 中国历代人物传记资料库：王發祥（CBDB 54160）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54160&o=json
            external_identifier: CBDB:54160
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.718Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_BGt1tPvKunGBbryX4DEn1G
        subject_person_id: p_FujQn99C56rGgzyuHWtSJs
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1617年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pgVoY7DBqMDXZtkjpP9dqa
          claim_id: c_BGt1tPvKunGBbryX4DEn1G
          source_id: s_4JK15NQPAyeQ7hfkS3zkWt
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KoT3RwdVRcr8Nj6CZZBMTu
        subject_person_id: p_FujQn99C56rGgzyuHWtSJs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王發祥（生于1617年），史料所见人物。本项目依据《中国历代人物传记资料库：王發祥（CBDB 54160）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PyBewOt9ZKfmaieDjMjcf0
          claim_id: c_KoT3RwdVRcr8Nj6CZZBMTu
          source_id: s_4JK15NQPAyeQ7hfkS3zkWt
          stance: supports
          locator: CBDB:54160
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
          source:
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
      object_person:
        id: p_786rsx6FLBjsdm4CnDpBrP
        status: active
        display_name: 王吉武
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王發祥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王發祥 | accepted |
| birth.date | 1617年 | accepted |
| bio.summary | 王發祥（生于1617年），史料所见人物。本项目依据《中国历代人物传记资料库：王發祥（CBDB 54160）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_786rsx6FLBjsdm4CnDpBrP | 王吉武 | accepted |

## 外部来源

- [中国历代人物传记资料库：王發祥（CBDB 54160）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54160&o=json)
- [中国历代人物传记资料库：王吉武（CBDB 54161）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54161&o=json)
