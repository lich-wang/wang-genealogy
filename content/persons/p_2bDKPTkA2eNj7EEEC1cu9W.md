---
schema: wang-person/v1
id: p_2bDKPTkA2eNj7EEEC1cu9W
status: active
merged_into: null
display_name: 王季貞
cbdb_id: 175811
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3PZg8tLfaDq32uGU3zitcy
        subject_person_id: p_2bDKPTkA2eNj7EEEC1cu9W
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王季貞（卒于559年），史料所见人物。本项目依据《中国历代人物传记资料库：王季貞（CBDB 175811）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_Rg5ZpGLpb1DoAVcBBWC_C-
          claim_id: c_3PZg8tLfaDq32uGU3zitcy
          source_id: s_VGA62iprZP2aPVCkEYnTJz
          stance: supports
          locator: CBDB:175811
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_VGA62iprZP2aPVCkEYnTJz
            source_type: api_record
            title: 中国历代人物传记资料库：王季貞（CBDB 175811）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175811&o=json
            external_identifier: CBDB:175811
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_FK11kLrkLs11eP27v8dYf4
        subject_person_id: p_2bDKPTkA2eNj7EEEC1cu9W
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 559年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 0559-01-01
            latest: 0559-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vP86g95YG8cyrPFSMbCKNJ
          claim_id: c_FK11kLrkLs11eP27v8dYf4
          source_id: s_VGA62iprZP2aPVCkEYnTJz
          stance: supports
          locator: CBDB:175811
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（401-500）｜历史性依据：CBDB 卒年 = 559
          source:
            id: s_VGA62iprZP2aPVCkEYnTJz
            source_type: api_record
            title: 中国历代人物传记资料库：王季貞（CBDB 175811）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175811&o=json
            external_identifier: CBDB:175811
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_RXxyAU6LAUFA9QmjXNX4N9
        subject_person_id: p_2bDKPTkA2eNj7EEEC1cu9W
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王季貞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_oWJ5AEAKS7MjbTxaJF8AXP
          claim_id: c_RXxyAU6LAUFA9QmjXNX4N9
          source_id: s_VGA62iprZP2aPVCkEYnTJz
          stance: supports
          locator: CBDB:175811
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（401-500）｜历史性依据：CBDB 卒年 = 559
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_m4M9yEv_GM3gQ_qTUumVr3
        subject_person_id: p_5vNiHu3G4ma4pw4PWMpTnv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2bDKPTkA2eNj7EEEC1cu9W
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-3XHLwJYRCAQRvMOKyjIrs
          claim_id: c_m4M9yEv_GM3gQ_qTUumVr3
          source_id: s_jhnAYBd4hBZTSFsJp5j5u9
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jhnAYBd4hBZTSFsJp5j5u9
            source_type: api_record
            title: 中国历代人物传记资料库：王廣業（CBDB 155127）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155127&o=json
            external_identifier: CBDB:155127
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.874Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5vNiHu3G4ma4pw4PWMpTnv
        status: active
        display_name: 王廣業
        merged_into_person_id: null
  children:
    - claim:
        id: c_jBOLYgjfHNDQq_zJyRJEdm
        subject_person_id: p_2bDKPTkA2eNj7EEEC1cu9W
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nDFRLDKcAPbJ1Ka9TQ5CiC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QlSXlbsEceTFECWZk1lbC5
          claim_id: c_jBOLYgjfHNDQq_zJyRJEdm
          source_id: s_SDikk8ZYdetXoH7gtZ7Nee
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_SDikk8ZYdetXoH7gtZ7Nee
            source_type: api_record
            title: 中国历代人物传记资料库：王寶倫（CBDB 155121）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155121&o=json
            external_identifier: CBDB:155121
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_nDFRLDKcAPbJ1Ka9TQ5CiC
        status: active
        display_name: 王寶倫
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王季貞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王季貞（卒于559年），史料所见人物。本项目依据《中国历代人物传记资料库：王季貞（CBDB 175811）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 559年 | accepted |
| name.primary | 王季貞 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5vNiHu3G4ma4pw4PWMpTnv | 王廣業 | accepted |
| children | p_nDFRLDKcAPbJ1Ka9TQ5CiC | 王寶倫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寶倫（CBDB 155121）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155121&o=json)
- [中国历代人物传记资料库：王廣業（CBDB 155127）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155127&o=json)
- [中国历代人物传记资料库：王季貞（CBDB 175811）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175811&o=json)
