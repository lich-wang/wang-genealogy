---
schema: wang-person/v1
id: p_6sGYC9YM3Ed7K2oVcFK24a
status: active
merged_into: null
display_name: 王冔
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qjzT9RG1bsLM1ykDRVF7kN
        subject_person_id: p_6sGYC9YM3Ed7K2oVcFK24a
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王冔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FY266Uk5e3eGmzgqgERF2Y
          claim_id: c_qjzT9RG1bsLM1ykDRVF7kN
          source_id: s_1cqDenzG8hFTfvXEt2zZG2
          stance: supports
          locator: CBDB:247214
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（247214）
          source: &a1
            id: s_1cqDenzG8hFTfvXEt2zZG2
            source_type: api_record
            title: 中国历代人物传记资料库：王冔（CBDB 247214）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247214&o=json
            external_identifier: CBDB:247214
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.101Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LdcFCBYcVuu669gTdkB8U5
        subject_person_id: p_6sGYC9YM3Ed7K2oVcFK24a
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王冔，明人物。成化八年進士，籍贯吉水。（中国历代人物传记资料库 CBDB 247214）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IlBfv2WIOXMj9epsFQ4ZWZ
          claim_id: c_LdcFCBYcVuu669gTdkB8U5
          source_id: s_1cqDenzG8hFTfvXEt2zZG2
          stance: supports
          locator: CBDB:247214
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_QFlhBBQWDrFUBDM-9BH4q1
        subject_person_id: p_PASiCHQs3ZcH2e9PXEScwH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6sGYC9YM3Ed7K2oVcFK24a
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yUGRB2m6dkkNyatuYM759v
          claim_id: c_QFlhBBQWDrFUBDM-9BH4q1
          source_id: s_gDH39AVgR26OPzLkEBudSo
          stance: supports
          locator: CBDB：兄弟 王弁（199608）之父／母 王效
          quotation: null
          interpretation_note: 由兄弟关系推断：王冔 与 王弁 为同胞（CBDB 记「兄」），王弁 之父／母即 王冔 之父／母。
          source:
            id: s_gDH39AVgR26OPzLkEBudSo
            source_type: api_record
            title: 中国历代人物传记资料库：王冔（CBDB 247214）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247214&o=json
            external_identifier: CBDB:247214
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PASiCHQs3ZcH2e9PXEScwH
        status: active
        display_name: 王效
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_yrCHI8zPdhMRbEstsAGrIy
        subject_person_id: p_6sGYC9YM3Ed7K2oVcFK24a
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_aoocqwv9rrDDvPqTtq5ozW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zvz6Gq-y9IxsU7dvKy3D1-
          claim_id: c_yrCHI8zPdhMRbEstsAGrIy
          source_id: s_gDH39AVgR26OPzLkEBudSo
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199608 王弁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_gDH39AVgR26OPzLkEBudSo
            source_type: api_record
            title: 中国历代人物传记资料库：王冔（CBDB 247214）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247214&o=json
            external_identifier: CBDB:247214
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aoocqwv9rrDDvPqTtq5ozW
        status: active
        display_name: 王弁
        merged_into_person_id: null
---

# 王冔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王冔 | accepted |
| bio.summary | 王冔，明人物。成化八年進士，籍贯吉水。（中国历代人物传记资料库 CBDB 247214） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PASiCHQs3ZcH2e9PXEScwH | 王效 | accepted |
| other | p_aoocqwv9rrDDvPqTtq5ozW | 王弁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王冔（CBDB 247214）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247214&o=json)
