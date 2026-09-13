---
schema: wang-person/v1
id: p_yCmo4it2633H71JuS76MJF
status: active
merged_into: null
display_name: 王培佑
cbdb_id: 61590
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QvaXNG33JQZFqq9856MPKq
        subject_person_id: p_yCmo4it2633H71JuS76MJF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王培佑（生于1848年），史料所见人物。本项目依据《中国历代人物传记资料库：王培佑（CBDB 61590）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_tnUv1N_sER2F2FUWyI_J-F
          claim_id: c_QvaXNG33JQZFqq9856MPKq
          source_id: s_VQnpUrLmd7zuJNPAqYB8ox
          stance: supports
          locator: CBDB:61590
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_VQnpUrLmd7zuJNPAqYB8ox
            source_type: api_record
            title: 中国历代人物传记资料库：王培佑（CBDB 61590）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61590&o=json
            external_identifier: CBDB:61590
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_nk6ebFymbeNwbNPEnnwEGB
        subject_person_id: p_yCmo4it2633H71JuS76MJF
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1848年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1848-01-01
            latest: 1848-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_s6wPk69jdNdV6EY7H4v9AR
          claim_id: c_nk6ebFymbeNwbNPEnnwEGB
          source_id: s_VQnpUrLmd7zuJNPAqYB8ox
          stance: supports
          locator: CBDB:61590
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（601-700）｜历史性依据：CBDB 生年 = 1848
          source:
            id: s_VQnpUrLmd7zuJNPAqYB8ox
            source_type: api_record
            title: 中国历代人物传记资料库：王培佑（CBDB 61590）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61590&o=json
            external_identifier: CBDB:61590
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_uqf8jqq2T7DHUQ5r7o4Fot
        subject_person_id: p_yCmo4it2633H71JuS76MJF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王培佑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_qusWEti6CskBWHf9rY8t2j
          claim_id: c_uqf8jqq2T7DHUQ5r7o4Fot
          source_id: s_VQnpUrLmd7zuJNPAqYB8ox
          stance: supports
          locator: CBDB:61590
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（601-700）｜历史性依据：CBDB 生年 = 1848
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

# 王培佑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王培佑（生于1848年），史料所见人物。本项目依据《中国历代人物传记资料库：王培佑（CBDB 61590）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1848年 | accepted |
| name.primary | 王培佑 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王培佑（CBDB 61590）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61590&o=json)
