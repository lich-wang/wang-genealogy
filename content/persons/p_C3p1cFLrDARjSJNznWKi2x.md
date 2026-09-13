---
schema: wang-person/v1
id: p_C3p1cFLrDARjSJNznWKi2x
status: active
merged_into: null
display_name: 王國實
cbdb_id: 191566
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qRHvYPhJLCECwAtcqJ2rLM
        subject_person_id: p_C3p1cFLrDARjSJNznWKi2x
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國實（卒于834年），史料所见人物。本项目依据《中国历代人物传记资料库：王國實（CBDB 191566）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_McHLGsqRz77ni24NPEx5ie
          claim_id: c_qRHvYPhJLCECwAtcqJ2rLM
          source_id: s_yyaWbjtw8cTpe9QtgpsDjf
          stance: supports
          locator: CBDB:191566
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_yyaWbjtw8cTpe9QtgpsDjf
            source_type: api_record
            title: 中国历代人物传记资料库：王國實（CBDB 191566）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191566&o=json
            external_identifier: CBDB:191566
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_SKLr4C9LcxxWk8o3c449BH
        subject_person_id: p_C3p1cFLrDARjSJNznWKi2x
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
        - id: cs_3Jbe4Bwa3dXLq1SGsD8rzG
          claim_id: c_SKLr4C9LcxxWk8o3c449BH
          source_id: s_yyaWbjtw8cTpe9QtgpsDjf
          stance: supports
          locator: CBDB:191566
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 834
          source:
            id: s_yyaWbjtw8cTpe9QtgpsDjf
            source_type: api_record
            title: 中国历代人物传记资料库：王國實（CBDB 191566）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191566&o=json
            external_identifier: CBDB:191566
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_HJFd2ghvNCFf3C3E2DJ4pT
        subject_person_id: p_C3p1cFLrDARjSJNznWKi2x
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國實
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_VwYgjLrCpQtw8yYzrmiKhq
          claim_id: c_HJFd2ghvNCFf3C3E2DJ4pT
          source_id: s_yyaWbjtw8cTpe9QtgpsDjf
          stance: supports
          locator: CBDB:191566
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 834
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1nsOQb8dmcsu1sEBFzeNAQ
        subject_person_id: p_GYZYeCEFAABsTQwFy7Lrmg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_C3p1cFLrDARjSJNznWKi2x
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9OYH6kpsAqMetH-MRPpAsW
          claim_id: c_1nsOQb8dmcsu1sEBFzeNAQ
          source_id: s_yyaWbjtw8cTpe9QtgpsDjf
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_yyaWbjtw8cTpe9QtgpsDjf
            source_type: api_record
            title: 中国历代人物传记资料库：王國實（CBDB 191566）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191566&o=json
            external_identifier: CBDB:191566
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

# 王國實

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王國實（卒于834年），史料所见人物。本项目依据《中国历代人物传记资料库：王國實（CBDB 191566）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 834年 | accepted |
| name.primary | 王國實 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GYZYeCEFAABsTQwFy7Lrmg | 王希遷 | accepted |

## 外部来源

- [中国历代人物传记资料库：王國實（CBDB 191566）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191566&o=json)
