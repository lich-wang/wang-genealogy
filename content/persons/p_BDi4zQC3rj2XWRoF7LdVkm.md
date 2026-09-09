---
schema: wang-person/v1
id: p_BDi4zQC3rj2XWRoF7LdVkm
status: active
merged_into: null
display_name: 王經國
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kDaUF3iXuFcYe7rQfD5GQn
        subject_person_id: p_BDi4zQC3rj2XWRoF7LdVkm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王經國
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dx1zz3AcQFy7SSMa8i6oCT
          claim_id: c_kDaUF3iXuFcYe7rQfD5GQn
          source_id: s_Kqnh29nzY15D3E3Pi5oEpY
          stance: supports
          locator: CBDB:498343
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（498343）
          source: &a1
            id: s_Kqnh29nzY15D3E3Pi5oEpY
            source_type: api_record
            title: 中国历代人物传记资料库：王經國（CBDB 498343）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=498343&o=json
            external_identifier: CBDB:498343
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.697Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UGovXTKHpBueNqKk6oCiiX
        subject_person_id: p_BDi4zQC3rj2XWRoF7LdVkm
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
        - id: cs_y8pHWXHGZcRYv2Bfwmg774
          claim_id: c_UGovXTKHpBueNqKk6oCiiX
          source_id: s_Kqnh29nzY15D3E3Pi5oEpY
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

# 王經國

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王經國 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王經國（CBDB 498343）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=498343&o=json)
