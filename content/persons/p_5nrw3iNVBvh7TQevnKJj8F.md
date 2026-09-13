---
schema: wang-person/v1
id: p_5nrw3iNVBvh7TQevnKJj8F
status: active
merged_into: null
display_name: 王廷美
cbdb_id: 279498
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Z6vVaQUu6DBiJTgdMSRUiD
        subject_person_id: p_5nrw3iNVBvh7TQevnKJj8F
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷美，史料所见人物。本项目依据《中国历代人物传记资料库：王廷美（CBDB 279498）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_IBi7Goc_CF43Ry6n2kObk9
          claim_id: c_Z6vVaQUu6DBiJTgdMSRUiD
          source_id: s_QtqkMAGXv1rCP2bNHUq4YH
          stance: supports
          locator: CBDB:279498
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_QtqkMAGXv1rCP2bNHUq4YH
            source_type: api_record
            title: 中国历代人物传记资料库：王廷美（CBDB 279498）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279498&o=json
            external_identifier: CBDB:279498
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_19SSCPfxPWDVhahwkoU1VL
        subject_person_id: p_5nrw3iNVBvh7TQevnKJj8F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷美
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_6UbFV3Fy2T87CKv3vLAzRi
          claim_id: c_19SSCPfxPWDVhahwkoU1VL
          source_id: s_QtqkMAGXv1rCP2bNHUq4YH
          stance: supports
          locator: CBDB:279498
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
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
  descendants:
    - claim:
        id: c_2W6N5om6lOqnB1GCrX8Pls
        subject_person_id: p_5nrw3iNVBvh7TQevnKJj8F
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_nMT35SUBP5kHgrMqnHEGVw
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5ZA6n05NDj91qNSHA54CXm
          claim_id: c_2W6N5om6lOqnB1GCrX8Pls
          source_id: s_QtqkMAGXv1rCP2bNHUq4YH
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第一百三十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: &a2
            id: s_QtqkMAGXv1rCP2bNHUq4YH
            source_type: api_record
            title: 中国历代人物传记资料库：王廷美（CBDB 279498）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279498&o=json
            external_identifier: CBDB:279498
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_nMT35SUBP5kHgrMqnHEGVw
        status: active
        display_name: 王舜耕
        merged_into_person_id: null
    - claim:
        id: c_1IkS0biN0PG3EQn4A58Jwv
        subject_person_id: p_5nrw3iNVBvh7TQevnKJj8F
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_neZGHyEuAgnr3hzP3cHchk
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4CPz9LSyHB-0iJGuxU4GPs
          claim_id: c_1IkS0biN0PG3EQn4A58Jwv
          source_id: s_QtqkMAGXv1rCP2bNHUq4YH
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第二甲第十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a2
      object_person:
        id: p_neZGHyEuAgnr3hzP3cHchk
        status: active
        display_name: 王舜漁
        merged_into_person_id: null
  other: []
---

# 王廷美

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王廷美，史料所见人物。本项目依据《中国历代人物传记资料库：王廷美（CBDB 279498）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王廷美 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_nMT35SUBP5kHgrMqnHEGVw | 王舜耕 | accepted |
| descendants | p_neZGHyEuAgnr3hzP3cHchk | 王舜漁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王廷美（CBDB 279498）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279498&o=json)
