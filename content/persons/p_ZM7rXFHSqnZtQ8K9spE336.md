---
schema: wang-person/v1
id: p_ZM7rXFHSqnZtQ8K9spE336
status: active
merged_into: null
display_name: 王頊
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7HaFxaDLE485JUdY9kZB6N
        subject_person_id: p_ZM7rXFHSqnZtQ8K9spE336
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王頊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6PDXHzo6LVtxaErrmRwtm2
          claim_id: c_7HaFxaDLE485JUdY9kZB6N
          source_id: s_XEVYA6jrkKNS1XX2CfBCE4
          stance: supports
          locator: CBDB:270705
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（270705）
          source: &a1
            id: s_XEVYA6jrkKNS1XX2CfBCE4
            source_type: api_record
            title: 中国历代人物传记资料库：王頊（CBDB 270705）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270705&o=json
            external_identifier: CBDB:270705
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.845Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8JJxJ5nvAJnT1CnrGW2ua3
        subject_person_id: p_ZM7rXFHSqnZtQ8K9spE336
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王頊，明人物。景泰五年進士，籍贯松江守禦千戶所。（中国历代人物传记资料库 CBDB 270705）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eF4Xtvno4ieiz4vufF3cqy
          claim_id: c_8JJxJ5nvAJnT1CnrGW2ua3
          source_id: s_XEVYA6jrkKNS1XX2CfBCE4
          stance: supports
          locator: CBDB:270705
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_K_Vk14-nKk6zLFRk1b8A2P
        subject_person_id: p_iBEGCX4PVUP88xatAFkBy4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZM7rXFHSqnZtQ8K9spE336
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QFy40f_pxZGzvhbOuaNesa
          claim_id: c_K_Vk14-nKk6zLFRk1b8A2P
          source_id: s_5uKNVWpN57fwHD0inhVERZ
          stance: supports
          locator: CBDB：兄弟 王珪（198426）之父／母 王士安
          quotation: null
          interpretation_note: 由兄弟关系推断：王頊 与 王珪 为同胞（CBDB 记「兄」），王珪 之父／母即 王頊 之父／母。
          source:
            id: s_5uKNVWpN57fwHD0inhVERZ
            source_type: api_record
            title: 中国历代人物传记资料库：王頊（CBDB 270705）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270705&o=json
            external_identifier: CBDB:270705
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_iBEGCX4PVUP88xatAFkBy4
        status: active
        display_name: 王士安
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_hj7nBxqsJOOsH9jf430CXj
        subject_person_id: p_CvioAH4pK1gg7UWTM6DCMS
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ZM7rXFHSqnZtQ8K9spE336
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9tBIUcC1jnV-IkL6WwrPWd
          claim_id: c_hj7nBxqsJOOsH9jf430CXj
          source_id: s_5uKNVWpN57fwHD0inhVERZ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198426 王珪）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_5uKNVWpN57fwHD0inhVERZ
            source_type: api_record
            title: 中国历代人物传记资料库：王頊（CBDB 270705）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270705&o=json
            external_identifier: CBDB:270705
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CvioAH4pK1gg7UWTM6DCMS
        status: active
        display_name: 王珪
        merged_into_person_id: null
---

# 王頊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王頊 | accepted |
| bio.summary | 王頊，明人物。景泰五年進士，籍贯松江守禦千戶所。（中国历代人物传记资料库 CBDB 270705） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_iBEGCX4PVUP88xatAFkBy4 | 王士安 | accepted |
| other | p_CvioAH4pK1gg7UWTM6DCMS | 王珪 | accepted |

## 外部来源

- [中国历代人物传记资料库：王頊（CBDB 270705）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270705&o=json)
