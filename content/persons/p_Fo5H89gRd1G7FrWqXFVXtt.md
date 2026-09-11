---
schema: wang-person/v1
id: p_Fo5H89gRd1G7FrWqXFVXtt
status: active
merged_into: null
display_name: 王節
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Txg5VLjLnV4sk7nWRTQrPT
        subject_person_id: p_Fo5H89gRd1G7FrWqXFVXtt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王節
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yVHNzA4GiMKasqDdvFB7DB
          claim_id: c_Txg5VLjLnV4sk7nWRTQrPT
          source_id: s_ME4J2g2xqALo2PrEEMnvAH
          stance: supports
          locator: CBDB:137375
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（137375）
          source: &a1
            id: s_ME4J2g2xqALo2PrEEMnvAH
            source_type: api_record
            title: 中国历代人物传记资料库：王節（CBDB 137375）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=137375&o=json
            external_identifier: CBDB:137375
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.346Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_w3cEDoY2SBfzZYddvjqAc8
        subject_person_id: p_Fo5H89gRd1G7FrWqXFVXtt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2GingepqGpDj5NKSp9Kn7m
          claim_id: c_w3cEDoY2SBfzZYddvjqAc8
          source_id: s_ME4J2g2xqALo2PrEEMnvAH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_wq-4vvNFj6xSKWCWWvPqXN
        subject_person_id: p_S6ZZKMVMpbpMSQYqkUgMjL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Fo5H89gRd1G7FrWqXFVXtt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gk1U0i5PlJLwKIO8TCIkNz
          claim_id: c_wq-4vvNFj6xSKWCWWvPqXN
          source_id: s_ME4J2g2xqALo2PrEEMnvAH
          stance: supports
          locator: 寶祐登科錄：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_S6ZZKMVMpbpMSQYqkUgMjL
        status: active
        display_name: 王晞亮
        merged_into_person_id: null
  children:
    - claim:
        id: c_9DW103s0In1X-dxb14dYOI
        subject_person_id: p_Fo5H89gRd1G7FrWqXFVXtt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_e8fyUGVWsewm8vpP5EJCF4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k7_V6G7fLIrU2gUtRgunvH
          claim_id: c_9DW103s0In1X-dxb14dYOI
          source_id: s_ME4J2g2xqALo2PrEEMnvAH
          stance: supports
          locator: 寶祐登科錄：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_e8fyUGVWsewm8vpP5EJCF4
        status: active
        display_name: 王民望
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_P9AsrYPvpDxHhqk0IC9KRN
        subject_person_id: p_Fo5H89gRd1G7FrWqXFVXtt
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_6yFP175w8qJgJRVTRiUkab
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fo6gQ5hTfW3V9MYYxDXCnD
          claim_id: c_P9AsrYPvpDxHhqk0IC9KRN
          source_id: s_efjbH4VURWrYSiJRiFkgFR
          stance: supports
          locator: 寶祐登科錄：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_efjbH4VURWrYSiJRiFkgFR
            source_type: api_record
            title: 中国历代人物传记资料库：王一奇（CBDB 12910）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12910&o=json
            external_identifier: CBDB:12910
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.613Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6yFP175w8qJgJRVTRiUkab
        status: active
        display_name: 王一奇
        merged_into_person_id: null
  other: []
---

# 王節

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王節 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_S6ZZKMVMpbpMSQYqkUgMjL | 王晞亮 | accepted |
| children | p_e8fyUGVWsewm8vpP5EJCF4 | 王民望 | accepted |
| descendants | p_6yFP175w8qJgJRVTRiUkab | 王一奇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王節（CBDB 137375）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=137375&o=json)
- [中国历代人物传记资料库：王一奇（CBDB 12910）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12910&o=json)
