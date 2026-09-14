---
schema: wang-person/v1
id: p_CXJD2x5NgucYYDoLj39JFo
status: active
merged_into: null
display_name: 王朝元
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3C65RDZ9R6rAk7zLwRgWVU
        subject_person_id: p_CXJD2x5NgucYYDoLj39JFo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aBQcPJRdNud1TQiHbPhD8j
          claim_id: c_3C65RDZ9R6rAk7zLwRgWVU
          source_id: s_Hz7vyoVxG17GJiwwYQGdfD
          stance: supports
          locator: CBDB:294145
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（294145）
          source: &a1
            id: s_Hz7vyoVxG17GJiwwYQGdfD
            source_type: api_record
            title: 中国历代人物传记资料库：王朝元（CBDB 294145）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294145&o=json
            external_identifier: CBDB:294145
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.436Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_R2bgy5t7FM6GsAJ54T73qo
        subject_person_id: p_CXJD2x5NgucYYDoLj39JFo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝元，明人物。嘉靖十一年進士，籍贯太康，曾任巡檢。（中国历代人物传记资料库 CBDB 294145）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_coM80LrtEmssxfk5RO_jp9
          claim_id: c_R2bgy5t7FM6GsAJ54T73qo
          source_id: s_Hz7vyoVxG17GJiwwYQGdfD
          stance: supports
          locator: CBDB:294145
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gpGEqW3H396q4ZN6iPh6L1
        subject_person_id: p_n2FPLD2HEJ5X29oj3Kwhfv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CXJD2x5NgucYYDoLj39JFo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jFgy3I-lxdb8Ti-OmhHt6j
          claim_id: c_gpGEqW3H396q4ZN6iPh6L1
          source_id: s_T0myBtdBOHIXpYjOJqLvUE
          stance: supports
          locator: CBDB：兄弟 王朝賢（202778）之父／母 王載
          quotation: null
          interpretation_note: 由兄弟关系推断：王朝元 与 王朝賢 为同胞（CBDB 记「弟」），王朝賢 之父／母即 王朝元 之父／母。
          source:
            id: s_T0myBtdBOHIXpYjOJqLvUE
            source_type: api_record
            title: 中国历代人物传记资料库：王朝元（CBDB 294145）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294145&o=json
            external_identifier: CBDB:294145
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_n2FPLD2HEJ5X29oj3Kwhfv
        status: active
        display_name: 王載
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_aadybSz0PFHJQlXZPqHxV0
        subject_person_id: p_CXJD2x5NgucYYDoLj39JFo
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_NYtdu2CY4GDrtrwsQaXuDi
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XoocvqpfKCbxQNNOpFRxyb
          claim_id: c_aadybSz0PFHJQlXZPqHxV0
          source_id: s_T0myBtdBOHIXpYjOJqLvUE
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202778 王朝賢）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_T0myBtdBOHIXpYjOJqLvUE
            source_type: api_record
            title: 中国历代人物传记资料库：王朝元（CBDB 294145）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294145&o=json
            external_identifier: CBDB:294145
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NYtdu2CY4GDrtrwsQaXuDi
        status: active
        display_name: 王朝賢
        merged_into_person_id: null
---

# 王朝元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朝元 | accepted |
| bio.summary | 王朝元，明人物。嘉靖十一年進士，籍贯太康，曾任巡檢。（中国历代人物传记资料库 CBDB 294145） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_n2FPLD2HEJ5X29oj3Kwhfv | 王載 | accepted |
| other | p_NYtdu2CY4GDrtrwsQaXuDi | 王朝賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王朝元（CBDB 294145）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294145&o=json)
