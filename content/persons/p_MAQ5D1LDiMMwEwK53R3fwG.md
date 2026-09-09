---
schema: wang-person/v1
id: p_MAQ5D1LDiMMwEwK53R3fwG
status: active
merged_into: null
display_name: 王隆章
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6tgtKd5L9EjKZ28K7QjpXU
        subject_person_id: p_MAQ5D1LDiMMwEwK53R3fwG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王隆章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ks7v8QXSfEZ9PFKKikWeao
          claim_id: c_6tgtKd5L9EjKZ28K7QjpXU
          source_id: s_RQAaCR3XWK4nR8Gr7PVhUT
          stance: supports
          locator: CBDB:640776
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640776）
          source: &a1
            id: s_RQAaCR3XWK4nR8Gr7PVhUT
            source_type: api_record
            title: 中国历代人物传记资料库：王隆章（CBDB 640776）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640776&o=json
            external_identifier: CBDB:640776
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.365Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dcehrVJg9jCRYBe5RsSboq
        subject_person_id: p_MAQ5D1LDiMMwEwK53R3fwG
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
        - id: cs_b76un7AMCvs1T6wHMho6mg
          claim_id: c_dcehrVJg9jCRYBe5RsSboq
          source_id: s_RQAaCR3XWK4nR8Gr7PVhUT
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

# 王隆章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王隆章 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王隆章（CBDB 640776）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640776&o=json)
