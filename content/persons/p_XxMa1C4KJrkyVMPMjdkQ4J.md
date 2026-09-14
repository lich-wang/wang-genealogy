---
schema: wang-person/v1
id: p_XxMa1C4KJrkyVMPMjdkQ4J
status: active
merged_into: null
display_name: 王同心
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eNhhSWVGbPSs5gny4mnwt7
        subject_person_id: p_XxMa1C4KJrkyVMPMjdkQ4J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同心
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3LGzHS9shcTE5LAWXHsF7U
          claim_id: c_eNhhSWVGbPSs5gny4mnwt7
          source_id: s_fn6FqwtGZP3jYpJ6J2qnwD
          stance: supports
          locator: CBDB:237755
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（237755）
          source: &a1
            id: s_fn6FqwtGZP3jYpJ6J2qnwD
            source_type: api_record
            title: 中国历代人物传记资料库：王同心（CBDB 237755）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237755&o=json
            external_identifier: CBDB:237755
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.851Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_coF2R86KYC5ui92kw3kgW8
        subject_person_id: p_XxMa1C4KJrkyVMPMjdkQ4J
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同心，明人物。正统七年進士，籍贯廬陵。（中国历代人物传记资料库 CBDB 237755）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4zQ_QKYRretCoaltabVh1D
          claim_id: c_coF2R86KYC5ui92kw3kgW8
          source_id: s_fn6FqwtGZP3jYpJ6J2qnwD
          stance: supports
          locator: CBDB:237755
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__X7BNbWGBJhNI5v9pQnWHl
        subject_person_id: p_H7kYUAXL18KkgnTsd1b4rh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XxMa1C4KJrkyVMPMjdkQ4J
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hMq__iawp9DOlxkwqdJT6s
          claim_id: c__X7BNbWGBJhNI5v9pQnWHl
          source_id: s_AXhI2q1M_r-hICtsf7MrkM
          stance: supports
          locator: CBDB：兄弟 王槩（126810）之父／母 王仲起
          quotation: null
          interpretation_note: 由兄弟关系推断：王同心 与 王槩 为同胞（CBDB 记「弟」），王槩 之父／母即 王同心 之父／母。
          source:
            id: s_AXhI2q1M_r-hICtsf7MrkM
            source_type: api_record
            title: 中国历代人物传记资料库：王同心（CBDB 237755）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237755&o=json
            external_identifier: CBDB:237755
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_H7kYUAXL18KkgnTsd1b4rh
        status: active
        display_name: 王仲起
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_TD6dvZju5kTmGOFFAF21K5
        subject_person_id: p_2N77V679N67chKYe7DivHB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_XxMa1C4KJrkyVMPMjdkQ4J
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TH1ULv63Ny6uWbaIP0EBFM
          claim_id: c_TD6dvZju5kTmGOFFAF21K5
          source_id: s_AXhI2q1M_r-hICtsf7MrkM
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126810 王槩）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_AXhI2q1M_r-hICtsf7MrkM
            source_type: api_record
            title: 中国历代人物传记资料库：王同心（CBDB 237755）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237755&o=json
            external_identifier: CBDB:237755
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2N77V679N67chKYe7DivHB
        status: active
        display_name: 王槩
        merged_into_person_id: null
---

# 王同心

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王同心 | accepted |
| bio.summary | 王同心，明人物。正统七年進士，籍贯廬陵。（中国历代人物传记资料库 CBDB 237755） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_H7kYUAXL18KkgnTsd1b4rh | 王仲起 | accepted |
| other | p_2N77V679N67chKYe7DivHB | 王槩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王同心（CBDB 237755）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237755&o=json)
