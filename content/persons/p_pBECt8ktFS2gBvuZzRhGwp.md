---
schema: wang-person/v1
id: p_pBECt8ktFS2gBvuZzRhGwp
status: active
merged_into: null
display_name: 盧氏
revision: 1
cbdb_id: 119090
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5MFUNb0jIVLJ35ejhCLn1R
        subject_person_id: p_pBECt8ktFS2gBvuZzRhGwp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 盧氏，史料所见人物。本项目依据《中国历代人物传记资料库：盧氏(王瀚妻)（CBDB 119090）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1V5ISPqq-BRxCJCUHkQeuJ
          claim_id: c_5MFUNb0jIVLJ35ejhCLn1R
          source_id: s_OVquW6MxMu5wmg5txtMIR0
          stance: supports
          locator: CBDB:119090
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_OVquW6MxMu5wmg5txtMIR0
            source_type: api_record
            title: 中国历代人物传记资料库：盧氏(王瀚妻)（CBDB 119090）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119090&o=json
            external_identifier: CBDB:119090
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1nMrtCUPWOX6-gwFo0O5MH
        subject_person_id: p_pBECt8ktFS2gBvuZzRhGwp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 盧氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vPjQsjldcQW84z7xrLN1pM
          claim_id: c_1nMrtCUPWOX6-gwFo0O5MH
          source_id: s_OVquW6MxMu5wmg5txtMIR0
          stance: supports
          locator: CBDB:119090
          quotation: null
          interpretation_note: CBDB 明确记录的王瀚配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_ccG6FQzQOPQgVwXKwqitO0
        subject_person_id: p_LSkTQV1uPkUXUu2mL2FLad
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_pBECt8ktFS2gBvuZzRhGwp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_giTDPABMfzaMx0-dmuFy8H
          claim_id: c_ccG6FQzQOPQgVwXKwqitO0
          source_id: s_OVquW6MxMu5wmg5txtMIR0
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #3152：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_LSkTQV1uPkUXUu2mL2FLad
        status: active
        display_name: 王瀚
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 盧氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 盧氏，史料所见人物。本项目依据《中国历代人物传记资料库：盧氏(王瀚妻)（CBDB 119090）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 盧氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_LSkTQV1uPkUXUu2mL2FLad | 王瀚 | accepted |

## 外部来源

- [中国历代人物传记资料库：盧氏(王瀚妻)（CBDB 119090）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119090&o=json)
