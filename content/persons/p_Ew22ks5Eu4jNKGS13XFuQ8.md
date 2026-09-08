---
schema: wang-person/v1
id: p_Ew22ks5Eu4jNKGS13XFuQ8
status: active
merged_into: null
display_name: 王希范
cbdb_id: 175511
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Bh6K7dZf2nBue4nwn7ZPQF
        subject_person_id: p_Ew22ks5Eu4jNKGS13XFuQ8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希范（卒于875年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175511 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_EWKddAB2T1CaG8ggRmhaQR
          claim_id: c_Bh6K7dZf2nBue4nwn7ZPQF
          source_id: s_vsk1jwFEVGRiSqE17drWLk
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_vsk1jwFEVGRiSqE17drWLk
            source_type: api_record
            title: 维基数据：王希范（Q45663941）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663941
            external_identifier: Q45663941
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:51.856Z
            metadata_json: null
        - id: cs_DoM7iQ-Gj1rbKOoedk4Nda
          claim_id: c_Bh6K7dZf2nBue4nwn7ZPQF
          source_id: s_mAGLJ7LTvJQQvFc9BzLjrV
          stance: supports
          locator: CBDB:175511
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_mAGLJ7LTvJQQvFc9BzLjrV
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王希範（175511）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175511&o=json
            external_identifier: CBDB:175511
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:52.014Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_iwbv46RCgU2b2kJWjHC7Lo
        subject_person_id: p_Ew22ks5Eu4jNKGS13XFuQ8
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 875年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0875-01-01
            latest: 0875-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pUQE27VreqGg7kTZn9eD42
          claim_id: c_iwbv46RCgU2b2kJWjHC7Lo
          source_id: s_vsk1jwFEVGRiSqE17drWLk
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_vsk1jwFEVGRiSqE17drWLk
            source_type: api_record
            title: 维基数据：王希范（Q45663941）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663941
            external_identifier: Q45663941
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:51.856Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_yD7opoZsAhDSuadNaeeW9f
        subject_person_id: p_Ew22ks5Eu4jNKGS13XFuQ8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希范
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_DDj46NKWwXDKvLxg1bgKgC
          claim_id: c_yD7opoZsAhDSuadNaeeW9f
          source_id: s_mAGLJ7LTvJQQvFc9BzLjrV
          stance: supports
          locator: Q45663941
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_JJCTBWG1qFy2dA6SyUr1vv
          claim_id: c_yD7opoZsAhDSuadNaeeW9f
          source_id: s_vsk1jwFEVGRiSqE17drWLk
          stance: supports
          locator: Q45663941
          quotation: null
          interpretation_note: null
          source:
            id: s_vsk1jwFEVGRiSqE17drWLk
            source_type: api_record
            title: 维基数据：王希范（Q45663941）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663941
            external_identifier: Q45663941
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:51.856Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Y6B7U1RCyHxi8MNHYiPKD3
        subject_person_id: p_PV1N9AJ49Net787Bq8MWNN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ew22ks5Eu4jNKGS13XFuQ8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_fRDEfrrjQ79uSXqgLVuMjW
          claim_id: c_Y6B7U1RCyHxi8MNHYiPKD3
          source_id: s_V291aeUn77m6Gy7qHaTFNb
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_V291aeUn77m6Gy7qHaTFNb
            source_type: api_record
            title: 维基数据：王高（Q45663884）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663884
            external_identifier: Q45663884
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:33.132Z
            metadata_json: null
        - id: cs_qmWhKuc3GfsjAFwmHVBVXE
          claim_id: c_Y6B7U1RCyHxi8MNHYiPKD3
          source_id: s_KBgBG1N6t4HrAFymwMuyCn
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_KBgBG1N6t4HrAFymwMuyCn
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王高（175510）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175510&o=json
            external_identifier: CBDB:175510
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:33.284Z
            metadata_json: null
        - id: cs_NXam5BZxgZyfP15RkYEzLD
          claim_id: c_Y6B7U1RCyHxi8MNHYiPKD3
          source_id: s_vsk1jwFEVGRiSqE17drWLk
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_vsk1jwFEVGRiSqE17drWLk
            source_type: api_record
            title: 维基数据：王希范（Q45663941）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663941
            external_identifier: Q45663941
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:51.856Z
            metadata_json: null
        - id: cs_NAhB9VN3AvwdegoLok6LJ4
          claim_id: c_Y6B7U1RCyHxi8MNHYiPKD3
          source_id: s_mAGLJ7LTvJQQvFc9BzLjrV
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_mAGLJ7LTvJQQvFc9BzLjrV
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王希範（175511）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175511&o=json
            external_identifier: CBDB:175511
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:52.014Z
            metadata_json: null
      object_person:
        id: p_PV1N9AJ49Net787Bq8MWNN
        status: active
        display_name: 王高
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王希范

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王希范（卒于875年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175511 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 875年 | accepted |
| name.primary | 王希范 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PV1N9AJ49Net787Bq8MWNN | 王高 | accepted |

## 外部来源

- [维基数据：王高（Q45663884）](https://www.wikidata.org/wiki/Q45663884)
- [维基数据：王希范（Q45663941）](https://www.wikidata.org/wiki/Q45663941)
- [CBDB 中国历代人物传记资料库：王高（175510）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175510&o=json)
- [CBDB 中国历代人物传记资料库：王希範（175511）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175511&o=json)
