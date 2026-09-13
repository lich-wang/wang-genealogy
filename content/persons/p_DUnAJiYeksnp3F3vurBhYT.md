---
schema: wang-person/v1
id: p_DUnAJiYeksnp3F3vurBhYT
status: active
merged_into: null
display_name: 王永譽
cbdb_id: 59996
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_F5jpjMzNi8hYLMYMQVKf7W
        subject_person_id: p_DUnAJiYeksnp3F3vurBhYT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永譽（卒于1704年），史料所见人物。本项目依据《中国历代人物传记资料库：王永譽（CBDB 59996）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_yi5TiQBTlsF59-MpypGZcf
          claim_id: c_F5jpjMzNi8hYLMYMQVKf7W
          source_id: s_amZ1sbs7EK5KSrXoj2u4zq
          stance: supports
          locator: CBDB:59996
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_amZ1sbs7EK5KSrXoj2u4zq
            source_type: api_record
            title: 中国历代人物传记资料库：王永譽（CBDB 59996）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=59996&o=json
            external_identifier: CBDB:59996
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:05.401Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_W5YSFuwh2KF6zENYKJ12jm
        subject_person_id: p_DUnAJiYeksnp3F3vurBhYT
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1704年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 1704-01-01
            latest: 1704-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MPfMWeArbGHDg7Le98xaLL
          claim_id: c_W5YSFuwh2KF6zENYKJ12jm
          source_id: s_amZ1sbs7EK5KSrXoj2u4zq
          stance: supports
          locator: CBDB:59996
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1-100）｜历史性依据：CBDB 卒年 = 1704
          source:
            id: s_amZ1sbs7EK5KSrXoj2u4zq
            source_type: api_record
            title: 中国历代人物传记资料库：王永譽（CBDB 59996）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=59996&o=json
            external_identifier: CBDB:59996
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:05.401Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_MVjuSv3g1K68Z2G51rF2PH
        subject_person_id: p_DUnAJiYeksnp3F3vurBhYT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永譽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ZfFVCWgJXZdP4YwF8Gx4bv
          claim_id: c_MVjuSv3g1K68Z2G51rF2PH
          source_id: s_amZ1sbs7EK5KSrXoj2u4zq
          stance: supports
          locator: CBDB:59996
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1-100）｜历史性依据：CBDB 卒年 = 1704
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_FbHy1qKKFBXMqsEVLigYoA
        subject_person_id: p_DUnAJiYeksnp3F3vurBhYT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wefPXNZhsYmMVSh2dQMnNV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QSbyldKGGns9bECYliuWiC
          claim_id: c_FbHy1qKKFBXMqsEVLigYoA
          source_id: s_amZ1sbs7EK5KSrXoj2u4zq
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），3305：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: &a2
            id: s_amZ1sbs7EK5KSrXoj2u4zq
            source_type: api_record
            title: 中国历代人物传记资料库：王永譽（CBDB 59996）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=59996&o=json
            external_identifier: CBDB:59996
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:05.401Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_wefPXNZhsYmMVSh2dQMnNV
        status: active
        display_name: 王興式
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_PucyP0INuVB91ct0-khnSm
        subject_person_id: p_DUnAJiYeksnp3F3vurBhYT
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_FJ6SmLeBzpcP6D9LgcDubz
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_enGnHovPbEGW86vwzD0UAR
          claim_id: c_PucyP0INuVB91ct0-khnSm
          source_id: s_amZ1sbs7EK5KSrXoj2u4zq
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），3305：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a2
      object_person:
        id: p_FJ6SmLeBzpcP6D9LgcDubz
        status: active
        display_name: 王福山
        merged_into_person_id: null
  other: []
---

# 王永譽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王永譽（卒于1704年），史料所见人物。本项目依据《中国历代人物传记资料库：王永譽（CBDB 59996）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 1704年 | accepted |
| name.primary | 王永譽 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_wefPXNZhsYmMVSh2dQMnNV | 王興式 | accepted |
| descendants | p_FJ6SmLeBzpcP6D9LgcDubz | 王福山 | accepted |

## 外部来源

- [中国历代人物传记资料库：王永譽（CBDB 59996）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=59996&o=json)
