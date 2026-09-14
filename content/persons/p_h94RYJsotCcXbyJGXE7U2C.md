---
schema: wang-person/v1
id: p_h94RYJsotCcXbyJGXE7U2C
status: active
merged_into: null
display_name: 王一弼
cbdb_id: 298426
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qpANDSbkagwZ7CfJnM2JBf
        subject_person_id: p_h94RYJsotCcXbyJGXE7U2C
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一弼，明人物。嘉靖十四年進士，籍贯福清。（中国历代人物传记资料库 CBDB 298426）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_ODpYgrjjszPmiLeqMx2ndi
          claim_id: c_qpANDSbkagwZ7CfJnM2JBf
          source_id: s_31wTjLkveArfNaG8hQbgF4
          stance: supports
          locator: CBDB:298426
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_31wTjLkveArfNaG8hQbgF4
            source_type: api_record
            title: 中国历代人物传记资料库：王一弼（CBDB 298426）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298426&o=json
            external_identifier: CBDB:298426
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_5YYWXD9P1CNCpnCTCSnQHn
        subject_person_id: p_h94RYJsotCcXbyJGXE7U2C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一弼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_eLiu8K9RyHrABRKzkbcs3t
          claim_id: c_5YYWXD9P1CNCpnCTCSnQHn
          source_id: s_31wTjLkveArfNaG8hQbgF4
          stance: supports
          locator: CBDB:298426
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3501-3600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_pLOOn2JqbugnK71BE5GW3O
        subject_person_id: p_iMDGVDoU4FmPtvJuYa8xHG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_h94RYJsotCcXbyJGXE7U2C
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fvGRXNT-DHkW56K839_oqA
          claim_id: c_pLOOn2JqbugnK71BE5GW3O
          source_id: s_60Iug9oNp2eoh_rtFaaZ2u
          stance: supports
          locator: CBDB：兄弟 王一言（203015）之父／母 王諭
          quotation: null
          interpretation_note: 由兄弟关系推断：王一弼 与 王一言 为同胞（CBDB 记「兄」），王一言 之父／母即 王一弼 之父／母。
          source:
            id: s_60Iug9oNp2eoh_rtFaaZ2u
            source_type: api_record
            title: 中国历代人物传记资料库：王一弼（CBDB 298426）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298426&o=json
            external_identifier: CBDB:298426
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_iMDGVDoU4FmPtvJuYa8xHG
        status: active
        display_name: 王諭
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_rD-RQVKVdIP8133ruBs-1u
        subject_person_id: p_axvKJHczRE94VwEvMVemSc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_h94RYJsotCcXbyJGXE7U2C
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hZ5nbj6hYCRypZ6KGHjCrS
          claim_id: c_rD-RQVKVdIP8133ruBs-1u
          source_id: s_60Iug9oNp2eoh_rtFaaZ2u
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203015 王一言）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_60Iug9oNp2eoh_rtFaaZ2u
            source_type: api_record
            title: 中国历代人物传记资料库：王一弼（CBDB 298426）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298426&o=json
            external_identifier: CBDB:298426
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_axvKJHczRE94VwEvMVemSc
        status: active
        display_name: 王一言
        merged_into_person_id: null
---

# 王一弼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王一弼，明人物。嘉靖十四年進士，籍贯福清。（中国历代人物传记资料库 CBDB 298426） | accepted |
| name.primary | 王一弼 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_iMDGVDoU4FmPtvJuYa8xHG | 王諭 | accepted |
| other | p_axvKJHczRE94VwEvMVemSc | 王一言 | accepted |

## 外部来源

- [中国历代人物传记资料库：王一弼（CBDB 298426）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298426&o=json)
