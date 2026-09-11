---
schema: wang-person/v1
id: p_3vKgPJZPmMS9ZpS2a75EVV
status: active
merged_into: null
display_name: 王稽
revision: 3
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
  other: []
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

## 外部来源

- [中国历代人物传记资料库：黃氏(王稽妻)（CBDB 271462）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271462&o=json)
- [中国历代人物传记资料库：王稽（CBDB 198434）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198434&o=json)
