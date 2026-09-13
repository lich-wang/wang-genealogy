---
schema: wang-person/v1
id: p_oRDvznu4syTic9ZyER4cPh
status: active
merged_into: null
display_name: 王性演
cbdb_id: 192003
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1jxEDenV6AFJzZw2JopHAy
        subject_person_id: p_oRDvznu4syTic9ZyER4cPh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王性演（卒于828年），史料所见人物。本项目依据《中国历代人物传记资料库：王性演（CBDB 192003）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_4JarFNaJ40DNm1ZQKDGyWn
          claim_id: c_1jxEDenV6AFJzZw2JopHAy
          source_id: s_6Ts7M6B46NJC4sdU6Fsbq9
          stance: supports
          locator: CBDB:192003
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_6Ts7M6B46NJC4sdU6Fsbq9
            source_type: api_record
            title: 中国历代人物传记资料库：王性演（CBDB 192003）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192003&o=json
            external_identifier: CBDB:192003
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_GvJV2N72DZZTKT8dv9ZUJe
        subject_person_id: p_oRDvznu4syTic9ZyER4cPh
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 828年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 0828-01-01
            latest: 0828-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_atsaQhQ8RYZxEHpNNQ1Ki2
          claim_id: c_GvJV2N72DZZTKT8dv9ZUJe
          source_id: s_6Ts7M6B46NJC4sdU6Fsbq9
          stance: supports
          locator: CBDB:192003
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 828
          source:
            id: s_6Ts7M6B46NJC4sdU6Fsbq9
            source_type: api_record
            title: 中国历代人物传记资料库：王性演（CBDB 192003）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192003&o=json
            external_identifier: CBDB:192003
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_KBGPQ5PzCE4L9q5Mdrqjkp
        subject_person_id: p_oRDvznu4syTic9ZyER4cPh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王性演
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_6Meremz3oA6rX9t9E6Zmoo
          claim_id: c_KBGPQ5PzCE4L9q5Mdrqjkp
          source_id: s_6Ts7M6B46NJC4sdU6Fsbq9
          stance: supports
          locator: CBDB:192003
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 828
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8A4qLOITTOR45_pSSIoQ9_
        subject_person_id: p_9B5ANk8vxa7D7phY5dTTsm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oRDvznu4syTic9ZyER4cPh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gTxGpMOKrYkHfjaIblT2qI
          claim_id: c_8A4qLOITTOR45_pSSIoQ9_
          source_id: s_F4AnebQmkt32k7zkvanzLD
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_F4AnebQmkt32k7zkvanzLD
            source_type: api_record
            title: 中国历代人物传记资料库：王恭（CBDB 145741）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145741&o=json
            external_identifier: CBDB:145741
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.695Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9B5ANk8vxa7D7phY5dTTsm
        status: active
        display_name: 王恭
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王性演

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王性演（卒于828年），史料所见人物。本项目依据《中国历代人物传记资料库：王性演（CBDB 192003）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 828年 | accepted |
| name.primary | 王性演 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_9B5ANk8vxa7D7phY5dTTsm | 王恭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王恭（CBDB 145741）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145741&o=json)
- [中国历代人物传记资料库：王性演（CBDB 192003）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192003&o=json)
