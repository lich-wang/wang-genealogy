---
schema: wang-person/v1
id: p_GBhfcv9MKSqujRSt3dZJND
status: active
merged_into: null
display_name: 汪清暎
revision: 1
cbdb_id: 120580
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oNvbFwaAlQ7ljOLCvJ8Xv2
        subject_person_id: p_GBhfcv9MKSqujRSt3dZJND
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 汪清暎，史料所见人物。本项目依据《中国历代人物传记资料库：汪清暎（CBDB 120580）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Bx8_M2WrODcv6jdZy7ZxII
          claim_id: c_oNvbFwaAlQ7ljOLCvJ8Xv2
          source_id: s_-J0YhHi2zaLP401ZVdjNus
          stance: supports
          locator: CBDB:120580
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_-J0YhHi2zaLP401ZVdjNus
            source_type: api_record
            title: 中国历代人物传记资料库：汪清暎（CBDB 120580）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120580&o=json
            external_identifier: CBDB:120580
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_MALWwZWbIAg6zdwHN2Fs97
        subject_person_id: p_GBhfcv9MKSqujRSt3dZJND
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 汪清暎
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oRsLep3A8-c1PcnioQclyf
          claim_id: c_MALWwZWbIAg6zdwHN2Fs97
          source_id: s_-J0YhHi2zaLP401ZVdjNus
          stance: supports
          locator: CBDB:120580
          quotation: null
          interpretation_note: CBDB 明确记录的王浤配偶
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
        id: c_E1LzcLUL0tqP45hvP2L2bz
        subject_person_id: p_ZZrGNgrwoWs5GNZCjNrcKG
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_GBhfcv9MKSqujRSt3dZJND
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PUxmaCSL7XVDn_1VEJURnL
          claim_id: c_E1LzcLUL0tqP45hvP2L2bz
          source_id: s_-J0YhHi2zaLP401ZVdjNus
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #4082, HuWenKai #353：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ZZrGNgrwoWs5GNZCjNrcKG
        status: active
        display_name: 王浤
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 汪清暎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 汪清暎，史料所见人物。本项目依据《中国历代人物传记资料库：汪清暎（CBDB 120580）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 汪清暎 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_ZZrGNgrwoWs5GNZCjNrcKG | 王浤 | accepted |

## 外部来源

- [中国历代人物传记资料库：汪清暎（CBDB 120580）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120580&o=json)
