---
schema: wang-person/v1
id: p_GEvSYKNyDCnRLesR9j7DmA
status: active
merged_into: null
display_name: 王綸
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FR6X681K6iyPwjRRWKDgEh
        subject_person_id: p_GEvSYKNyDCnRLesR9j7DmA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_W4dgc7H95f5NsjJLp9fhHg
          claim_id: c_FR6X681K6iyPwjRRWKDgEh
          source_id: s_nNYKzYtVw9QTf3GiWMQerD
          stance: supports
          locator: CBDB:221659
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（221659）
          source: &a1
            id: s_nNYKzYtVw9QTf3GiWMQerD
            source_type: api_record
            title: 中国历代人物传记资料库：王綸（CBDB 221659）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221659&o=json
            external_identifier: CBDB:221659
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.326Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4prS9a9gcSX1MQgt5MkMyr
        subject_person_id: p_GEvSYKNyDCnRLesR9j7DmA
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
        - id: cs_SavF1UWVLtJfEwsnYrKNaF
          claim_id: c_4prS9a9gcSX1MQgt5MkMyr
          source_id: s_nNYKzYtVw9QTf3GiWMQerD
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
        id: c_fitGgoZ1dC5wMJv5XQ0zWr
        subject_person_id: p_GEvSYKNyDCnRLesR9j7DmA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DtN8Z5QdtH34dfH2KX2i1q
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FaWhMGHnnpK5NQEjsGFGaV
          claim_id: c_fitGgoZ1dC5wMJv5XQ0zWr
          source_id: s_nNYKzYtVw9QTf3GiWMQerD
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第二百零七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DtN8Z5QdtH34dfH2KX2i1q
        status: active
        display_name: 王夢暘
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王綸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綸 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_DtN8Z5QdtH34dfH2KX2i1q | 王夢暘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王綸（CBDB 221659）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221659&o=json)
