---
schema: wang-person/v1
id: p_N7iY5QthxJ8PsgD8QTSipc
status: active
merged_into: null
display_name: 王垂訓
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hEMKym3p6cNjCD5iGZJfQt
        subject_person_id: p_N7iY5QthxJ8PsgD8QTSipc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王垂訓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nYWc9gDsJdRBx6Jt8E6wZB
          claim_id: c_hEMKym3p6cNjCD5iGZJfQt
          source_id: s_vBBEGRoAW88fk3dK8JtjaD
          stance: supports
          locator: CBDB:527020
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（527020）
          source: &a1
            id: s_vBBEGRoAW88fk3dK8JtjaD
            source_type: api_record
            title: 中国历代人物传记资料库：王垂訓（CBDB 527020）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527020&o=json
            external_identifier: CBDB:527020
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.337Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_baSfaH38LibKwFJKQqx3si
        subject_person_id: p_N7iY5QthxJ8PsgD8QTSipc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王垂訓，史料所见人物。本项目依据《中国历代人物传记资料库：王垂訓（CBDB 527020）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5YKb_I0ogeHZ5uWVJU2BMG
          claim_id: c_baSfaH38LibKwFJKQqx3si
          source_id: s_vBBEGRoAW88fk3dK8JtjaD
          stance: supports
          locator: CBDB:527020
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_tNZhVooS3eYjZE3V2B85Sv
        subject_person_id: p_fFFejeNTAUwXPAWu7JRdwj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_N7iY5QthxJ8PsgD8QTSipc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6LEv8fF5q2HIKu4XlBl63e
          claim_id: c_tNZhVooS3eYjZE3V2B85Sv
          source_id: s_3G8X5aZSgEtsKYhYueEct5
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13182：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3G8X5aZSgEtsKYhYueEct5
            source_type: api_record
            title: 中国历代人物传记资料库：王龍光（CBDB 69470）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69470&o=json
            external_identifier: CBDB:69470
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.287Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fFFejeNTAUwXPAWu7JRdwj
        status: active
        display_name: 王龍光
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王垂訓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王垂訓 | accepted |
| bio.summary | 王垂訓，史料所见人物。本项目依据《中国历代人物传记资料库：王垂訓（CBDB 527020）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_fFFejeNTAUwXPAWu7JRdwj | 王龍光 | accepted |

## 外部来源

- [中国历代人物传记资料库：王垂訓（CBDB 527020）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527020&o=json)
- [中国历代人物传记资料库：王龍光（CBDB 69470）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69470&o=json)
