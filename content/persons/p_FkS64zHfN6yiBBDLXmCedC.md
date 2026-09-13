---
schema: wang-person/v1
id: p_FkS64zHfN6yiBBDLXmCedC
status: active
merged_into: null
display_name: 王國宥
cbdb_id: 191569
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BeUUiUFcKVvWh1C951KyZW
        subject_person_id: p_FkS64zHfN6yiBBDLXmCedC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國宥（卒于834年），史料所见人物。本项目依据《中国历代人物传记资料库：王國宥（CBDB 191569）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_tyG5a_RmwaOfyy6oWK24GN
          claim_id: c_BeUUiUFcKVvWh1C951KyZW
          source_id: s_9YykM815eSY6jyiMLGCq2r
          stance: supports
          locator: CBDB:191569
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_9YykM815eSY6jyiMLGCq2r
            source_type: api_record
            title: 中国历代人物传记资料库：王國宥（CBDB 191569）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191569&o=json
            external_identifier: CBDB:191569
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_SnWiP1DGFqjXH6GagCq9JG
        subject_person_id: p_FkS64zHfN6yiBBDLXmCedC
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 834年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 0834-01-01
            latest: 0834-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2VPevGHchqAeqw2GtiBPvt
          claim_id: c_SnWiP1DGFqjXH6GagCq9JG
          source_id: s_9YykM815eSY6jyiMLGCq2r
          stance: supports
          locator: CBDB:191569
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 834
          source:
            id: s_9YykM815eSY6jyiMLGCq2r
            source_type: api_record
            title: 中国历代人物传记资料库：王國宥（CBDB 191569）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191569&o=json
            external_identifier: CBDB:191569
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_q3eoa6ePvQXvWKMR2BNDBo
        subject_person_id: p_FkS64zHfN6yiBBDLXmCedC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國宥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_eGgJc1JeSFsCCdzuWn5CMf
          claim_id: c_q3eoa6ePvQXvWKMR2BNDBo
          source_id: s_9YykM815eSY6jyiMLGCq2r
          stance: supports
          locator: CBDB:191569
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 834
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_G1n5GlDxaWcsIhnqqsW0d_
        subject_person_id: p_GYZYeCEFAABsTQwFy7Lrmg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FkS64zHfN6yiBBDLXmCedC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RWRRZALRnf_cJ7zK_BCizn
          claim_id: c_G1n5GlDxaWcsIhnqqsW0d_
          source_id: s_9YykM815eSY6jyiMLGCq2r
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9YykM815eSY6jyiMLGCq2r
            source_type: api_record
            title: 中国历代人物传记资料库：王國宥（CBDB 191569）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191569&o=json
            external_identifier: CBDB:191569
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_GYZYeCEFAABsTQwFy7Lrmg
        status: active
        display_name: 王希遷
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王國宥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王國宥（卒于834年），史料所见人物。本项目依据《中国历代人物传记资料库：王國宥（CBDB 191569）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 834年 | accepted |
| name.primary | 王國宥 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GYZYeCEFAABsTQwFy7Lrmg | 王希遷 | accepted |

## 外部来源

- [中国历代人物传记资料库：王國宥（CBDB 191569）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191569&o=json)
