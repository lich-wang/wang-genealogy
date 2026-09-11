---
schema: wang-person/v1
id: p_vwyMFfRQ8wUBmmnSTnUaAt
status: active
merged_into: null
display_name: 王昭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YLXaJgnJ7jHabdJuZ2iwvN
        subject_person_id: p_vwyMFfRQ8wUBmmnSTnUaAt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_atT8e7DU74ABEGR1PnCxAf
          claim_id: c_YLXaJgnJ7jHabdJuZ2iwvN
          source_id: s_oz9dgn3Mu31LE1J4remMJw
          stance: supports
          locator: CBDB:553533
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（553533）
          source: &a1
            id: s_oz9dgn3Mu31LE1J4remMJw
            source_type: api_record
            title: 中国历代人物传记资料库：王昭（CBDB 553533）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=553533&o=json
            external_identifier: CBDB:553533
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.619Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_PE6GPAU8NkG3q9RT2DDaFX
        subject_person_id: p_vwyMFfRQ8wUBmmnSTnUaAt
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 925年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6fQryfZ54zNN4u6T5Nsj8J
          claim_id: c_PE6GPAU8NkG3q9RT2DDaFX
          source_id: s_oz9dgn3Mu31LE1J4remMJw
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
        id: c_PFcHNLH8S4ik49197mUq97
        subject_person_id: p_vwyMFfRQ8wUBmmnSTnUaAt
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 975年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YkXcreHYWfod7HAracR1Sf
          claim_id: c_PFcHNLH8S4ik49197mUq97
          source_id: s_oz9dgn3Mu31LE1J4remMJw
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
        id: c_Z2QHDsU5ujNSt83xgNWAQA
        subject_person_id: p_vwyMFfRQ8wUBmmnSTnUaAt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昭（925年—975年），史料所见人物。本项目依据《中国历代人物传记资料库：王昭（CBDB 553533）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bEtiSD7N2xNplypoM0SgNe
          claim_id: c_Z2QHDsU5ujNSt83xgNWAQA
          source_id: s_oz9dgn3Mu31LE1J4remMJw
          stance: supports
          locator: CBDB:553533
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
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

# 王昭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昭 | accepted |
| birth.date | 925年 | accepted |
| death.date | 975年 | accepted |
| bio.summary | 王昭（925年—975年），史料所见人物。本项目依据《中国历代人物传记资料库：王昭（CBDB 553533）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王昭（CBDB 553533）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=553533&o=json)
