---
schema: wang-person/v1
id: p_2FfCNSZbmawkyTxk2zgdBv
status: active
merged_into: null
display_name: 王僧修
cbdb_id: 175866
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Jmk7Kmr3nG1nrHQDnzmBmm
        subject_person_id: p_2FfCNSZbmawkyTxk2zgdBv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王僧修（卒于556年），史料所见人物。本项目依据《中国历代人物传记资料库：王僧修（CBDB 175866）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_erlv8Mct-ClmjRP4vryxU5
          claim_id: c_Jmk7Kmr3nG1nrHQDnzmBmm
          source_id: s_LFZd3LdBMNDQVVU646NX4V
          stance: supports
          locator: CBDB:175866
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_LFZd3LdBMNDQVVU646NX4V
            source_type: api_record
            title: 中国历代人物传记资料库：王僧修（CBDB 175866）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175866&o=json
            external_identifier: CBDB:175866
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Yz2ATHuyrSV7HX21uMhi2u
        subject_person_id: p_2FfCNSZbmawkyTxk2zgdBv
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 556年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 0556-01-01
            latest: 0556-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_i3y8bm6LiRbE7XqSjdZQJY
          claim_id: c_Yz2ATHuyrSV7HX21uMhi2u
          source_id: s_LFZd3LdBMNDQVVU646NX4V
          stance: supports
          locator: CBDB:175866
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（401-500）｜历史性依据：CBDB 卒年 = 556
          source:
            id: s_LFZd3LdBMNDQVVU646NX4V
            source_type: api_record
            title: 中国历代人物传记资料库：王僧修（CBDB 175866）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175866&o=json
            external_identifier: CBDB:175866
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_v8qUU9EHwx2MxQCBfVi285
        subject_person_id: p_2FfCNSZbmawkyTxk2zgdBv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王僧修
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_TqaRJeZAhn4qPHNP2XWRH6
          claim_id: c_v8qUU9EHwx2MxQCBfVi285
          source_id: s_LFZd3LdBMNDQVVU646NX4V
          stance: supports
          locator: CBDB:175866
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（401-500）｜历史性依据：CBDB 卒年 = 556
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_9jBicmIvsJvD9tsqHBA5N7
        subject_person_id: p_XYgRDTMQMKLwMjzmrS4u9S
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2FfCNSZbmawkyTxk2zgdBv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xFacOXk-QPkL3U_Ko12XAg
          claim_id: c_9jBicmIvsJvD9tsqHBA5N7
          source_id: s_7pwdxXmyoz1AKHuC8L9wQ3
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7pwdxXmyoz1AKHuC8L9wQ3
            source_type: api_record
            title: 中国历代人物传记资料库：王神念（CBDB 175838）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175838&o=json
            external_identifier: CBDB:175838
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.155Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_XYgRDTMQMKLwMjzmrS4u9S
        status: active
        display_name: 王神念
        merged_into_person_id: null
  children:
    - claim:
        id: c_4oULUTNxTeNnJDA6yzFgiG
        subject_person_id: p_2FfCNSZbmawkyTxk2zgdBv
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_6PF94LpiFwv7ZBPi4LiuxW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hWZQNQ3RFCNA68Ca9wAiLB
          claim_id: c_4oULUTNxTeNnJDA6yzFgiG
          source_id: s_amneLzd6PAqKJP64P3Sdud
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_amneLzd6PAqKJP64P3Sdud
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王景孝（175867）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175867&o=json
            external_identifier: CBDB:175867
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person:
        id: p_6PF94LpiFwv7ZBPi4LiuxW
        status: active
        display_name: 王景孝
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王僧修

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王僧修（卒于556年），史料所见人物。本项目依据《中国历代人物传记资料库：王僧修（CBDB 175866）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 556年 | accepted |
| name.primary | 王僧修 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XYgRDTMQMKLwMjzmrS4u9S | 王神念 | accepted |
| children | p_6PF94LpiFwv7ZBPi4LiuxW | 王景孝 | accepted |

## 外部来源

- [中国历代人物传记资料库：王僧修（CBDB 175866）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175866&o=json)
- [中国历代人物传记资料库：王神念（CBDB 175838）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175838&o=json)
- [CBDB 中国历代人物传记资料库：王景孝（175867）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175867&o=json)
