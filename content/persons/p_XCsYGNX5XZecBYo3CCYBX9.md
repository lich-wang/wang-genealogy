---
schema: wang-person/v1
id: p_XCsYGNX5XZecBYo3CCYBX9
status: merged
merged_into: p_QcouJWUA6YJBp4PXTJf4RW
display_name: 王師震
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qh22MUnXyehutAcxz7kTKn
        subject_person_id: p_XCsYGNX5XZecBYo3CCYBX9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師震
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1c7nHzhW7vorwpXEF46tKh
          claim_id: c_qh22MUnXyehutAcxz7kTKn
          source_id: s_q2SxcHj7Qx6uMDtPWnxjcU
          stance: supports
          locator: CBDB:555353
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（555353）
          source: &a1
            id: s_q2SxcHj7Qx6uMDtPWnxjcU
            source_type: api_record
            title: 中国历代人物传记资料库：王師震（CBDB 555353）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555353&o=json
            external_identifier: CBDB:555353
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.634Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HeUaZJCzkNS8q6RbYn2gup
        subject_person_id: p_XCsYGNX5XZecBYo3CCYBX9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a84EjjECwFvzy4RgLhCAwA
          claim_id: c_HeUaZJCzkNS8q6RbYn2gup
          source_id: s_q2SxcHj7Qx6uMDtPWnxjcU
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
  descendants: []
  other: []
---

# 王師震

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王師震 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王師震（CBDB 555353）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555353&o=json)
