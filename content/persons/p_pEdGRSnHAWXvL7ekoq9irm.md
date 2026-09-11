---
schema: wang-person/v1
id: p_pEdGRSnHAWXvL7ekoq9irm
status: active
merged_into: null
display_name: 王家賓
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PjHTTwkAP6yvqsUWb2nSPC
        subject_person_id: p_pEdGRSnHAWXvL7ekoq9irm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gaBybPBGp6mjMwCPkXiy7H
          claim_id: c_PjHTTwkAP6yvqsUWb2nSPC
          source_id: s_n5SveC4vwRXeJFjECJn3hm
          stance: supports
          locator: CBDB:69290
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69290）
          source: &a1
            id: s_n5SveC4vwRXeJFjECJn3hm
            source_type: api_record
            title: 中国历代人物传记资料库：王家賓（CBDB 69290）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69290&o=json
            external_identifier: CBDB:69290
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.198Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_7q2Fa4RD1aLAkE8bvJevSd
        subject_person_id: p_pEdGRSnHAWXvL7ekoq9irm
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1748年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DaQTWr3RRoBvqaHrtNfTsD
          claim_id: c_7q2Fa4RD1aLAkE8bvJevSd
          source_id: s_n5SveC4vwRXeJFjECJn3hm
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_KXCnRjzc92t6eKn1LDJ5h5
        subject_person_id: p_pEdGRSnHAWXvL7ekoq9irm
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1794年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8i3oE51tH69Nn8euJRFhDw
          claim_id: c_KXCnRjzc92t6eKn1LDJ5h5
          source_id: s_n5SveC4vwRXeJFjECJn3hm
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1w4ehNnBiWRXLmKAPrPrEV
        subject_person_id: p_pEdGRSnHAWXvL7ekoq9irm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jNRSZKv5gJWQnSBLCDo1Ff
          claim_id: c_1w4ehNnBiWRXLmKAPrPrEV
          source_id: s_n5SveC4vwRXeJFjECJn3hm
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_vVdLGWnPCXzW5deVsA_a-j
        subject_person_id: p_pEdGRSnHAWXvL7ekoq9irm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6HLttk3bZpmGZhdge9j9Vv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jbntWmGOmy9c7A7flU0Ud4
          claim_id: c_vVdLGWnPCXzW5deVsA_a-j
          source_id: s_n5SveC4vwRXeJFjECJn3hm
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），12993：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_6HLttk3bZpmGZhdge9j9Vv
        status: active
        display_name: 王佑孚
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_uXkMY0K3v3ElCBoX2tvP5O
        subject_person_id: p_pEdGRSnHAWXvL7ekoq9irm
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_J2FQREsJ82hioqJaNMDC39
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8bxUxRZl5-NAlZVPAJXEP1
          claim_id: c_uXkMY0K3v3ElCBoX2tvP5O
          source_id: s_n5SveC4vwRXeJFjECJn3hm
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），12993：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_J2FQREsJ82hioqJaNMDC39
        status: active
        display_name: 王代昌
        merged_into_person_id: null
    - claim:
        id: c_SGtXR4FIrXrTAD_qlIZCfM
        subject_person_id: p_pEdGRSnHAWXvL7ekoq9irm
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_j2n3ygo1YiMXzXoDz14tZ3
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G4TvBQA3y16gTDIAH3fIJA
          claim_id: c_SGtXR4FIrXrTAD_qlIZCfM
          source_id: s_n5SveC4vwRXeJFjECJn3hm
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），12993：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_j2n3ygo1YiMXzXoDz14tZ3
        status: active
        display_name: 王代裕
        merged_into_person_id: null
    - claim:
        id: c_6kN4SWKLXCND1ncxzn5B44
        subject_person_id: p_pEdGRSnHAWXvL7ekoq9irm
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5G2qt9GaLPiCw5KRtPLsEg
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v1OW8P-ulUjmXjUSjOdJBt
          claim_id: c_6kN4SWKLXCND1ncxzn5B44
          source_id: s_n5SveC4vwRXeJFjECJn3hm
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），12993：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5G2qt9GaLPiCw5KRtPLsEg
        status: active
        display_name: 王代興
        merged_into_person_id: null
  other: []
---

# 王家賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王家賓 | accepted |
| birth.date | 1748年 | accepted |
| death.date | 1794年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_6HLttk3bZpmGZhdge9j9Vv | 王佑孚 | accepted |
| descendants | p_J2FQREsJ82hioqJaNMDC39 | 王代昌 | accepted |
| descendants | p_j2n3ygo1YiMXzXoDz14tZ3 | 王代裕 | accepted |
| descendants | p_5G2qt9GaLPiCw5KRtPLsEg | 王代興 | accepted |

## 外部来源

- [中国历代人物传记资料库：王家賓（CBDB 69290）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69290&o=json)
