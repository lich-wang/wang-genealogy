---
schema: wang-person/v1
id: p_kRrHWkVehKECkYBgxMokae
status: active
merged_into: null
display_name: 王德浤
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qB2H81ZqRU1J77JXL855uz
        subject_person_id: p_kRrHWkVehKECkYBgxMokae
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德浤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_N4gkxpNWVgcjsQD1wxNA5m
          claim_id: c_qB2H81ZqRU1J77JXL855uz
          source_id: s_cxHhJKByzAG4eAAas894M5
          stance: supports
          locator: CBDB:527086
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（527086）
          source: &a1
            id: s_cxHhJKByzAG4eAAas894M5
            source_type: api_record
            title: 中国历代人物传记资料库：王德浤（CBDB 527086）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527086&o=json
            external_identifier: CBDB:527086
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.345Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GtD6wEDbGUkWbuECpHsj6c
        subject_person_id: p_kRrHWkVehKECkYBgxMokae
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德浤，史料所见人物。本项目依据《中国历代人物传记资料库：王德浤（CBDB 527086）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5rbFWDklLbmhyShoNUVygm
          claim_id: c_GtD6wEDbGUkWbuECpHsj6c
          source_id: s_cxHhJKByzAG4eAAas894M5
          stance: supports
          locator: CBDB:527086
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_jAIV_SRnlYiQPhmdr4c-KU
        subject_person_id: p_8PJiXYqEkyEx3bggE2E5DB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kRrHWkVehKECkYBgxMokae
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hT1dGwHwX9yf61nfPXrTKF
          claim_id: c_jAIV_SRnlYiQPhmdr4c-KU
          source_id: s_ShVQCuLJ6g6tnt4cEfddKP
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13237：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ShVQCuLJ6g6tnt4cEfddKP
            source_type: api_record
            title: 中国历代人物传记资料库：王鏜（CBDB 71279）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71279&o=json
            external_identifier: CBDB:71279
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.556Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8PJiXYqEkyEx3bggE2E5DB
        status: active
        display_name: 王鏜
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王德浤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德浤 | accepted |
| bio.summary | 王德浤，史料所见人物。本项目依据《中国历代人物传记资料库：王德浤（CBDB 527086）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8PJiXYqEkyEx3bggE2E5DB | 王鏜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德浤（CBDB 527086）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527086&o=json)
- [中国历代人物传记资料库：王鏜（CBDB 71279）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71279&o=json)
