---
schema: wang-person/v1
id: p_3vKgPJZPmMS9ZpS2a75EVV
status: active
merged_into: null
display_name: 王稽
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rwQBBXmDoG3P3VixZHT5gY
        subject_person_id: p_3vKgPJZPmMS9ZpS2a75EVV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王稽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_T2S2tEe8EXN8Np6AsATwzH
          claim_id: c_rwQBBXmDoG3P3VixZHT5gY
          source_id: s_ohc7t8WtVqFLyQtGXbDmnK
          stance: supports
          locator: CBDB:198434
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198434）
          source: &a1
            id: s_ohc7t8WtVqFLyQtGXbDmnK
            source_type: api_record
            title: 中国历代人物传记资料库：王稽（CBDB 198434）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198434&o=json
            external_identifier: CBDB:198434
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.493Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_NnBcA9mdM4Ro1nHAi2eRFe
        subject_person_id: p_3vKgPJZPmMS9ZpS2a75EVV
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1429年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J1FFWDScsUcNYDLMrEcs51
          claim_id: c_NnBcA9mdM4Ro1nHAi2eRFe
          source_id: s_ohc7t8WtVqFLyQtGXbDmnK
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eCJzGLgBPCTFNmRZKRAPU3
        subject_person_id: p_3vKgPJZPmMS9ZpS2a75EVV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王稽（生于1429年），明人物。景泰五年進士，籍贯金谿，入仕進士。（中国历代人物传记资料库 CBDB 198434）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YjBPpfo-II1oTjLe5NuQk2
          claim_id: c_eCJzGLgBPCTFNmRZKRAPU3
          source_id: s_ohc7t8WtVqFLyQtGXbDmnK
          stance: supports
          locator: CBDB:198434
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_PbeYU59NZ9vtobZMnEn7pX
        subject_person_id: p_CUFBtfXaFjfECLb8K9SuBv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3vKgPJZPmMS9ZpS2a75EVV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_61aKV27ohw2u1-stWCLD3_
          claim_id: c_PbeYU59NZ9vtobZMnEn7pX
          source_id: s_ohc7t8WtVqFLyQtGXbDmnK
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第一百一十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_CUFBtfXaFjfECLb8K9SuBv
        status: active
        display_name: 王忠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_OjqKuLC2dGpa4F2rrtBtMf
        subject_person_id: p_3vKgPJZPmMS9ZpS2a75EVV
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_m6EPDVJm31vYFqNffWhKzt
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J9b7Hpi6nC1a_nVFXcshdq
          claim_id: c_OjqKuLC2dGpa4F2rrtBtMf
          source_id: s_ecbczwB_rkJfdaqnJW3Kaa
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第一百一十一名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ecbczwB_rkJfdaqnJW3Kaa
            source_type: api_record
            title: 中国历代人物传记资料库：黃氏(王稽妻)（CBDB 271462）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271462&o=json
            external_identifier: CBDB:271462
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_m6EPDVJm31vYFqNffWhKzt
        status: active
        display_name: 黃氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_Q5_UAMNp5y2qeS4C__RbMd
        subject_person_id: p_pMWbZtWz4H8GindQ15E5pN
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3vKgPJZPmMS9ZpS2a75EVV
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8fD3850E7_mE0NuVu77vQY
          claim_id: c_Q5_UAMNp5y2qeS4C__RbMd
          source_id: s_ohc7t8WtVqFLyQtGXbDmnK
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第一百一十一名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_pMWbZtWz4H8GindQ15E5pN
        status: active
        display_name: 王寧
        merged_into_person_id: null
    - claim:
        id: c_OHynQjds4h8KydRL_S4gn4
        subject_person_id: p_hYg3mBY4z5L651ejsb35ci
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3vKgPJZPmMS9ZpS2a75EVV
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FCp9KptP7IlbX0pVTasLTB
          claim_id: c_OHynQjds4h8KydRL_S4gn4
          source_id: s_ohc7t8WtVqFLyQtGXbDmnK
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第一百一十一名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_hYg3mBY4z5L651ejsb35ci
        status: active
        display_name: 王仲和
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_7xGYKaft8XuLlZiWMXY-fV
        subject_person_id: p_2pz1La3gnmxK1AmRKNDz1j
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_3vKgPJZPmMS9ZpS2a75EVV
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4iWtFgUIvu2y-JkF2P-TCn
          claim_id: c_7xGYKaft8XuLlZiWMXY-fV
          source_id: s_sS8i5VqYXDpj1qCfdnMRY5
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198434 王稽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_sS8i5VqYXDpj1qCfdnMRY5
            source_type: api_record
            title: 中国历代人物传记资料库：王穆（CBDB 271506）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271506&o=json
            external_identifier: CBDB:271506
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2pz1La3gnmxK1AmRKNDz1j
        status: active
        display_name: 王穆
        merged_into_person_id: null
    - claim:
        id: c_ebRT9zCkoGFx85iq4cg9aU
        subject_person_id: p_3vKgPJZPmMS9ZpS2a75EVV
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ABJ8gsp2tbu2cYQ8XrpDCa
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_avsfr5EsIdODzV-vtbnxpy
          claim_id: c_ebRT9zCkoGFx85iq4cg9aU
          source_id: s_ZJ-sG_9c9ZnrOfmXF9kHqz
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198434 王稽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ZJ-sG_9c9ZnrOfmXF9kHqz
            source_type: api_record
            title: 中国历代人物传记资料库：王种（CBDB 271517）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271517&o=json
            external_identifier: CBDB:271517
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ABJ8gsp2tbu2cYQ8XrpDCa
        status: active
        display_name: 王种
        merged_into_person_id: null
    - claim:
        id: c_iI_lLlmbVjAWXwKsVsJtPs
        subject_person_id: p_3vKgPJZPmMS9ZpS2a75EVV
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_VNQDAMXMGx697Aaeg6F771
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I2jB48H0XeZRpKMaMhJY4A
          claim_id: c_iI_lLlmbVjAWXwKsVsJtPs
          source_id: s_J5jRUSIRyYnBVhPAir5qwp
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 198434 王稽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_J5jRUSIRyYnBVhPAir5qwp
            source_type: api_record
            title: 中国历代人物传记资料库：王吉（CBDB 271484）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271484&o=json
            external_identifier: CBDB:271484
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VNQDAMXMGx697Aaeg6F771
        status: active
        display_name: 王吉
        merged_into_person_id: null
    - claim:
        id: c_smA7wzKIizLaY1E5SZY3Yc
        subject_person_id: p_3vKgPJZPmMS9ZpS2a75EVV
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_e8hYUJFh9Q5fCVadiwHHmT
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5GSnI_avC4Kh-RvtggLA24
          claim_id: c_smA7wzKIizLaY1E5SZY3Yc
          source_id: s_p2QEKZdMLseRWrXSnA8Zi7
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 198434 王稽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_p2QEKZdMLseRWrXSnA8Zi7
            source_type: api_record
            title: 中国历代人物传记资料库：王赫（CBDB 271473）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271473&o=json
            external_identifier: CBDB:271473
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_e8hYUJFh9Q5fCVadiwHHmT
        status: active
        display_name: 王赫
        merged_into_person_id: null
    - claim:
        id: c_EnN6NtqDlABIE7Yc1TmgKT
        subject_person_id: p_3vKgPJZPmMS9ZpS2a75EVV
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yM3Q3hvVcAYjNabsHb8FDL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EbTO8WpwRBKVwok4LwlOxS
          claim_id: c_EnN6NtqDlABIE7Yc1TmgKT
          source_id: s_OyqRWw3IIg8KgISCjHe-cg
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 198434 王稽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_OyqRWw3IIg8KgISCjHe-cg
            source_type: api_record
            title: 中国历代人物传记资料库：王洪（CBDB 271495）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271495&o=json
            external_identifier: CBDB:271495
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yM3Q3hvVcAYjNabsHb8FDL
        status: active
        display_name: 王洪
        merged_into_person_id: null
---

# 王稽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王稽 | accepted |
| birth.date | 1429年 | accepted |
| bio.summary | 王稽（生于1429年），明人物。景泰五年進士，籍贯金谿，入仕進士。（中国历代人物传记资料库 CBDB 198434） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CUFBtfXaFjfECLb8K9SuBv | 王忠 | accepted |
| spouses | p_m6EPDVJm31vYFqNffWhKzt | 黃氏 | accepted |
| ancestors | p_pMWbZtWz4H8GindQ15E5pN | 王寧 | accepted |
| ancestors | p_hYg3mBY4z5L651ejsb35ci | 王仲和 | accepted |
| other | p_2pz1La3gnmxK1AmRKNDz1j | 王穆 | accepted |
| other | p_ABJ8gsp2tbu2cYQ8XrpDCa | 王种 | accepted |
| other | p_VNQDAMXMGx697Aaeg6F771 | 王吉 | accepted |
| other | p_e8hYUJFh9Q5fCVadiwHHmT | 王赫 | accepted |
| other | p_yM3Q3hvVcAYjNabsHb8FDL | 王洪 | accepted |

## 外部来源

- [中国历代人物传记资料库：黃氏(王稽妻)（CBDB 271462）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271462&o=json)
- [中国历代人物传记资料库：王赫（CBDB 271473）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271473&o=json)
- [中国历代人物传记资料库：王洪（CBDB 271495）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271495&o=json)
- [中国历代人物传记资料库：王稽（CBDB 198434）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198434&o=json)
- [中国历代人物传记资料库：王吉（CBDB 271484）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271484&o=json)
- [中国历代人物传记资料库：王穆（CBDB 271506）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271506&o=json)
- [中国历代人物传记资料库：王种（CBDB 271517）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271517&o=json)
