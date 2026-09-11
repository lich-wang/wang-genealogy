---
schema: wang-person/v1
id: p_pMWbZtWz4H8GindQ15E5pN
status: active
merged_into: null
display_name: 王寧
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ECXsR4yo3CAFoWA3o9M3xE
        subject_person_id: p_pMWbZtWz4H8GindQ15E5pN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LVQb79VoKcquf3PwB3suzV
          claim_id: c_ECXsR4yo3CAFoWA3o9M3xE
          source_id: s_AUy7E7wJcJs7gNLDmMsucQ
          stance: supports
          locator: CBDB:271404
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（271404）
          source: &a1
            id: s_AUy7E7wJcJs7gNLDmMsucQ
            source_type: api_record
            title: 中国历代人物传记资料库：王寧（CBDB 271404）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271404&o=json
            external_identifier: CBDB:271404
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.872Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1D8GKWqsiY67PDSdigVQRF
        subject_person_id: p_pMWbZtWz4H8GindQ15E5pN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4AQg7J5A4hssKbYXeeEqiL
          claim_id: c_1D8GKWqsiY67PDSdigVQRF
          source_id: s_AUy7E7wJcJs7gNLDmMsucQ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
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
          source:
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
      object_person:
        id: p_3vKgPJZPmMS9ZpS2a75EVV
        status: active
        display_name: 王稽
        merged_into_person_id: null
  other: []
---

# 王寧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寧 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_3vKgPJZPmMS9ZpS2a75EVV | 王稽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王稽（CBDB 198434）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198434&o=json)
- [中国历代人物传记资料库：王寧（CBDB 271404）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271404&o=json)
