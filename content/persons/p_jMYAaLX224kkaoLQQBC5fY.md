---
schema: wang-person/v1
id: p_jMYAaLX224kkaoLQQBC5fY
status: active
merged_into: null
display_name: 王溫之
cbdb_id: 155092
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fzDvN2JBgbLrYV6dJAzwvu
        subject_person_id: p_jMYAaLX224kkaoLQQBC5fY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王溫之，史料所见人物。本项目依据《中国历代人物传记资料库：王溫之（CBDB 155092）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_QGR3uNRr2SN8tedoLS65X5
          claim_id: c_fzDvN2JBgbLrYV6dJAzwvu
          source_id: s_vxkK8r5vT1rv7WftihWy7M
          stance: supports
          locator: CBDB:155092
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_vxkK8r5vT1rv7WftihWy7M
            source_type: api_record
            title: 中国历代人物传记资料库：王溫之（CBDB 155092）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155092&o=json
            external_identifier: CBDB:155092
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_qTe4NBMTB6kBv3gFRr3xgy
        subject_person_id: p_jMYAaLX224kkaoLQQBC5fY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王溫之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_pJ7Rx3D5aGHq73tKw95KPd
          claim_id: c_qTe4NBMTB6kBv3gFRr3xgy
          source_id: s_vxkK8r5vT1rv7WftihWy7M
          stance: supports
          locator: CBDB:155092
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2201-2300）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c__XMavymrvhhw46w4GeQTH8
        subject_person_id: p_jMYAaLX224kkaoLQQBC5fY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NF9nn9Yuihtu46ihig773u
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9m391_ldlEo0MHSSWL5_bG
          claim_id: c__XMavymrvhhw46w4GeQTH8
          source_id: s_VWimqdMRiRadHkL5uHkMTQ
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VWimqdMRiRadHkL5uHkMTQ
            source_type: api_record
            title: 中国历代人物传记资料库：王暹（CBDB 175815）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175815&o=json
            external_identifier: CBDB:175815
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.137Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_NF9nn9Yuihtu46ihig773u
        status: active
        display_name: 王暹
        merged_into_person_id: null
    - claim:
        id: c_yOgAuQqJAX4WByZS4-BVPL
        subject_person_id: p_jMYAaLX224kkaoLQQBC5fY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SGeMYrvQyjS48RnQNcBfCh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BDcsqkVrzIvDa_jlrDHWCD
          claim_id: c_yOgAuQqJAX4WByZS4-BVPL
          source_id: s_tif7iYmAbV5mFPFGRxQiXs
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_tif7iYmAbV5mFPFGRxQiXs
            source_type: api_record
            title: 中国历代人物传记资料库：王昇（CBDB 175818）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175818&o=json
            external_identifier: CBDB:175818
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.140Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_SGeMYrvQyjS48RnQNcBfCh
        status: active
        display_name: 王昇
        merged_into_person_id: null
    - claim:
        id: c_fXm_3X8CgL75aOqweXQIk_
        subject_person_id: p_jMYAaLX224kkaoLQQBC5fY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uHzqSMd3xdi6X81W3MDFuu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ctS7Pr5Z3Hqti1-ObWOmyz
          claim_id: c_fXm_3X8CgL75aOqweXQIk_
          source_id: s_md2KMc3VRAn1DYS4Gqjnx8
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_md2KMc3VRAn1DYS4Gqjnx8
            source_type: api_record
            title: 中国历代人物传记资料库：王昱（CBDB 175828）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175828&o=json
            external_identifier: CBDB:175828
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.153Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_uHzqSMd3xdi6X81W3MDFuu
        status: active
        display_name: 王昱
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王溫之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王溫之，史料所见人物。本项目依据《中国历代人物传记资料库：王溫之（CBDB 155092）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王溫之 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_NF9nn9Yuihtu46ihig773u | 王暹 | accepted |
| children | p_SGeMYrvQyjS48RnQNcBfCh | 王昇 | accepted |
| children | p_uHzqSMd3xdi6X81W3MDFuu | 王昱 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昇（CBDB 175818）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175818&o=json)
- [中国历代人物传记资料库：王溫之（CBDB 155092）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155092&o=json)
- [中国历代人物传记资料库：王暹（CBDB 175815）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175815&o=json)
- [中国历代人物传记资料库：王昱（CBDB 175828）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175828&o=json)
