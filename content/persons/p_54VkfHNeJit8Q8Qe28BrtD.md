---
schema: wang-person/v1
id: p_54VkfHNeJit8Q8Qe28BrtD
status: active
merged_into: null
display_name: 王蕙芳
cbdb_id: 69516
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kYcWLTB5p8BL5M83VqYmbr
        subject_person_id: p_54VkfHNeJit8Q8Qe28BrtD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蕙芳，史料所见人物。本项目依据《中国历代人物传记资料库：王蕙芳（CBDB 69516）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_Vc_f_UR6oDWN6jPPSG9HTG
          claim_id: c_kYcWLTB5p8BL5M83VqYmbr
          source_id: s_f7ejUcAy9MsrXDPqLbF655
          stance: supports
          locator: CBDB:69516
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_f7ejUcAy9MsrXDPqLbF655
            source_type: api_record
            title: 中国历代人物传记资料库：王蕙芳（CBDB 69516）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69516&o=json
            external_identifier: CBDB:69516
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.831Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ATWmv5D8T2Ka8yDrQ3nssm
        subject_person_id: p_54VkfHNeJit8Q8Qe28BrtD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蕙芳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_MyosHqJ6hG2i6qoYTe3XE1
          claim_id: c_ATWmv5D8T2Ka8yDrQ3nssm
          source_id: s_f7ejUcAy9MsrXDPqLbF655
          stance: supports
          locator: CBDB:69516
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1501-1600）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_wCYpZdV_sS4VBhssz-wDpJ
        subject_person_id: p_8bF4i5x2ocJMKeudjfqjjX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_54VkfHNeJit8Q8Qe28BrtD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vnQkkAet-amW9QZ-SPE9EZ
          claim_id: c_wCYpZdV_sS4VBhssz-wDpJ
          source_id: s_f7ejUcAy9MsrXDPqLbF655
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1148, HuWenKai #254：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_f7ejUcAy9MsrXDPqLbF655
            source_type: api_record
            title: 中国历代人物传记资料库：王蕙芳（CBDB 69516）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69516&o=json
            external_identifier: CBDB:69516
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.831Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_8bF4i5x2ocJMKeudjfqjjX
        status: active
        display_name: 王陳翼
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_FvN9yINUoBICu4RFha60sC
        subject_person_id: p_54VkfHNeJit8Q8Qe28BrtD
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_gFteQeN8WXF48rQ1zSarFJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4tR_EBoJEGXcUE9kboFH9v
          claim_id: c_FvN9yINUoBICu4RFha60sC
          source_id: s_JhoBlSRFLDMUIcY0rp6-zh
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1147, HuWenKai #491：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JhoBlSRFLDMUIcY0rp6-zh
            source_type: api_record
            title: 中国历代人物传记资料库：袁鴻（CBDB 85806）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=85806&o=json
            external_identifier: CBDB:85806
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_gFteQeN8WXF48rQ1zSarFJ
        status: active
        display_name: 袁鴻
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王蕙芳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王蕙芳，史料所见人物。本项目依据《中国历代人物传记资料库：王蕙芳（CBDB 69516）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王蕙芳 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8bF4i5x2ocJMKeudjfqjjX | 王陳翼 | accepted |
| spouses | p_gFteQeN8WXF48rQ1zSarFJ | 袁鴻 | accepted |

## 外部来源

- [中国历代人物传记资料库：王蕙芳（CBDB 69516）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69516&o=json)
- [中国历代人物传记资料库：袁鴻（CBDB 85806）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=85806&o=json)
