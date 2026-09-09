---
schema: wang-person/v1
id: p_xCnPxfwWwQHjUwLts92TjC
status: active
merged_into: null
display_name: 王彥思
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iWhmu4oStCR5rhnvj5JRc3
        subject_person_id: p_xCnPxfwWwQHjUwLts92TjC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥思
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UQafZP2542unbHRHuEEd3P
          claim_id: c_iWhmu4oStCR5rhnvj5JRc3
          source_id: s_MivtpJJUoi6ZQyGermhHCS
          stance: supports
          locator: CBDB:36275
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（36275）
          source: &a1
            id: s_MivtpJJUoi6ZQyGermhHCS
            source_type: api_record
            title: 中国历代人物传记资料库：王彥思（CBDB 36275）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36275&o=json
            external_identifier: CBDB:36275
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.167Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ba6jLxHovTo2SGVbB6Q6fb
        subject_person_id: p_xCnPxfwWwQHjUwLts92TjC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yPbxg99m5qmmiiRftrR1pi
          claim_id: c_ba6jLxHovTo2SGVbB6Q6fb
          source_id: s_MivtpJJUoi6ZQyGermhHCS
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

# 王彥思

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彥思 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王彥思（CBDB 36275）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36275&o=json)
