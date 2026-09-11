---
schema: wang-person/v1
id: p_UidqakXpG7WU72BqWJwGkC
status: active
merged_into: null
display_name: 王鎧
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_d2yiPWgs4LkgAB3ecyeSTG
        subject_person_id: p_UidqakXpG7WU72BqWJwGkC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JVKD9dKML22Rw7VBZw9E4i
          claim_id: c_d2yiPWgs4LkgAB3ecyeSTG
          source_id: s_EfdRYNxK4Pj7eDh9AcUE3R
          stance: supports
          locator: CBDB:318694
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（318694）
          source: &a1
            id: s_EfdRYNxK4Pj7eDh9AcUE3R
            source_type: api_record
            title: 中国历代人物传记资料库：王鎧（CBDB 318694）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318694&o=json
            external_identifier: CBDB:318694
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.010Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_M2kWbuJU6nKB3KePbLCTFm
        subject_person_id: p_UidqakXpG7WU72BqWJwGkC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎧，明人物。嘉靖三十二年進士，籍贯忻州。（中国历代人物传记资料库 CBDB 318694）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PcbLn46uD8tqhkElqzenE5
          claim_id: c_M2kWbuJU6nKB3KePbLCTFm
          source_id: s_EfdRYNxK4Pj7eDh9AcUE3R
          stance: supports
          locator: CBDB:318694
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_aUS0GTUS7ZD4mZpfgCumv8
        subject_person_id: p_UidqakXpG7WU72BqWJwGkC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YMRfqBqGcb2AtmuSSgfQHF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_39mM1QkL9SJnBw1BWfWpWS
          claim_id: c_aUS0GTUS7ZD4mZpfgCumv8
          source_id: s_EfdRYNxK4Pj7eDh9AcUE3R
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第二百六十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_YMRfqBqGcb2AtmuSSgfQHF
        status: active
        display_name: 王治
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鎧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎧 | accepted |
| bio.summary | 王鎧，明人物。嘉靖三十二年進士，籍贯忻州。（中国历代人物传记资料库 CBDB 318694） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_YMRfqBqGcb2AtmuSSgfQHF | 王治 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鎧（CBDB 318694）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318694&o=json)
