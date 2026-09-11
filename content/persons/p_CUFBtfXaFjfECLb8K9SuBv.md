---
schema: wang-person/v1
id: p_CUFBtfXaFjfECLb8K9SuBv
status: active
merged_into: null
display_name: 王忠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3CLWenejS6TX9CZN82dPC3
        subject_person_id: p_CUFBtfXaFjfECLb8K9SuBv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QSmssMfK5yBimhxg1A4Pez
          claim_id: c_3CLWenejS6TX9CZN82dPC3
          source_id: s_ghePgYGXYAHjc3KKb4TwBb
          stance: supports
          locator: CBDB:271429
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（271429）
          source: &a1
            id: s_ghePgYGXYAHjc3KKb4TwBb
            source_type: api_record
            title: 中国历代人物传记资料库：王忠（CBDB 271429）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271429&o=json
            external_identifier: CBDB:271429
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.873Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5SLwAVEHLEJ9Zx2Ci2injL
        subject_person_id: p_CUFBtfXaFjfECLb8K9SuBv
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
        - id: cs_sJSi53aRupNpJT6N7ZHEgD
          claim_id: c_5SLwAVEHLEJ9Zx2Ci2injL
          source_id: s_ghePgYGXYAHjc3KKb4TwBb
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王忠 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_3vKgPJZPmMS9ZpS2a75EVV | 王稽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王稽（CBDB 198434）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198434&o=json)
- [中国历代人物传记资料库：王忠（CBDB 271429）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271429&o=json)
