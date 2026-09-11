---
schema: wang-person/v1
id: p_Yns1iWuHDB3R29fGN1dznn
status: active
merged_into: null
display_name: 王昺
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hkN85EKWxWADTaFiVd5tGe
        subject_person_id: p_Yns1iWuHDB3R29fGN1dznn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UwA2FjXic5M8QgLPsKaDMQ
          claim_id: c_hkN85EKWxWADTaFiVd5tGe
          source_id: s_D2f4hPtc5rxNZZ6PQvbTHX
          stance: supports
          locator: CBDB:257030
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（257030）
          source: &a1
            id: s_D2f4hPtc5rxNZZ6PQvbTHX
            source_type: api_record
            title: 中国历代人物传记资料库：王昺（CBDB 257030）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257030&o=json
            external_identifier: CBDB:257030
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.401Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_idYqHK8FwAM8cDXmtcyiny
        subject_person_id: p_Yns1iWuHDB3R29fGN1dznn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昺，明人物。成化十七年進士，籍贯龍泉。（中国历代人物传记资料库 CBDB 257030）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TxGK7Ffl2FUs-VrHE7pqGl
          claim_id: c_idYqHK8FwAM8cDXmtcyiny
          source_id: s_D2f4hPtc5rxNZZ6PQvbTHX
          stance: supports
          locator: CBDB:257030
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

# 王昺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昺 | accepted |
| bio.summary | 王昺，明人物。成化十七年進士，籍贯龍泉。（中国历代人物传记资料库 CBDB 257030） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王昺（CBDB 257030）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257030&o=json)
