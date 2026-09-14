---
schema: wang-person/v1
id: p_7mHTDv44Rhrt8TAWbQCrPB
status: active
merged_into: null
display_name: 王一卿
cbdb_id: 298428
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YTzS1JhTc8pXpuGPkZBB1G
        subject_person_id: p_7mHTDv44Rhrt8TAWbQCrPB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一卿，明人物。嘉靖十四年進士，籍贯福清。（中国历代人物传记资料库 CBDB 298428）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_cBPkl4w35oZr23pCj3g31M
          claim_id: c_YTzS1JhTc8pXpuGPkZBB1G
          source_id: s_8DpPgz6x4xF6RmPeR1ULUo
          stance: supports
          locator: CBDB:298428
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_8DpPgz6x4xF6RmPeR1ULUo
            source_type: api_record
            title: 中国历代人物传记资料库：王一卿（CBDB 298428）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298428&o=json
            external_identifier: CBDB:298428
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_UDpvKZXn1kybKz827GYaEN
        subject_person_id: p_7mHTDv44Rhrt8TAWbQCrPB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_r7iyPs1jTdxRVBDwZpS13e
          claim_id: c_UDpvKZXn1kybKz827GYaEN
          source_id: s_8DpPgz6x4xF6RmPeR1ULUo
          stance: supports
          locator: CBDB:298428
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3501-3600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_K24GMbFg4pRKKZOsVB2BCu
        subject_person_id: p_iMDGVDoU4FmPtvJuYa8xHG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7mHTDv44Rhrt8TAWbQCrPB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YJhvKXVOv5pEVgwoZ-lxIw
          claim_id: c_K24GMbFg4pRKKZOsVB2BCu
          source_id: s_DbLaCoWaVcJmmvXFRljmH_
          stance: supports
          locator: CBDB：兄弟 王一言（203015）之父／母 王諭
          quotation: null
          interpretation_note: 由兄弟关系推断：王一卿 与 王一言 为同胞（CBDB 记「兄」），王一言 之父／母即 王一卿 之父／母。
          source:
            id: s_DbLaCoWaVcJmmvXFRljmH_
            source_type: api_record
            title: 中国历代人物传记资料库：王一卿（CBDB 298428）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298428&o=json
            external_identifier: CBDB:298428
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
        id: c_wUkR6fsPTKTlh6yqDAvDLw
        subject_person_id: p_7mHTDv44Rhrt8TAWbQCrPB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_axvKJHczRE94VwEvMVemSc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VyLXOyIAqmcGpo3O8M4THn
          claim_id: c_wUkR6fsPTKTlh6yqDAvDLw
          source_id: s_DbLaCoWaVcJmmvXFRljmH_
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203015 王一言）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_DbLaCoWaVcJmmvXFRljmH_
            source_type: api_record
            title: 中国历代人物传记资料库：王一卿（CBDB 298428）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298428&o=json
            external_identifier: CBDB:298428
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_axvKJHczRE94VwEvMVemSc
        status: active
        display_name: 王一言
        merged_into_person_id: null
---

# 王一卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王一卿，明人物。嘉靖十四年進士，籍贯福清。（中国历代人物传记资料库 CBDB 298428） | accepted |
| name.primary | 王一卿 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_iMDGVDoU4FmPtvJuYa8xHG | 王諭 | accepted |
| other | p_axvKJHczRE94VwEvMVemSc | 王一言 | accepted |

## 外部来源

- [中国历代人物传记资料库：王一卿（CBDB 298428）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298428&o=json)
