---
schema: wang-person/v1
id: p_86LNBmYKZz7jpSCGU33GA7
status: active
merged_into: null
display_name: 王成
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CSDyZ1EWtj77XUAwdwL7gv
        subject_person_id: p_86LNBmYKZz7jpSCGU33GA7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王成
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uDpKKgDkhEAWXm5298APgK
          claim_id: c_CSDyZ1EWtj77XUAwdwL7gv
          source_id: s_m9z4H11Vn9F7tWjwNfLjVy
          stance: supports
          locator: CBDB:332644
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（332644）
          source: &a1
            id: s_m9z4H11Vn9F7tWjwNfLjVy
            source_type: api_record
            title: 中国历代人物传记资料库：王成（CBDB 332644）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332644&o=json
            external_identifier: CBDB:332644
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.382Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_V2sKEqcdwB4YW9JDiiLWZs
        subject_person_id: p_86LNBmYKZz7jpSCGU33GA7
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
        - id: cs_CYdbw2wCr4xsz9XUM68vmc
          claim_id: c_V2sKEqcdwB4YW9JDiiLWZs
          source_id: s_m9z4H11Vn9F7tWjwNfLjVy
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

# 王成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王成 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王成（CBDB 332644）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332644&o=json)
