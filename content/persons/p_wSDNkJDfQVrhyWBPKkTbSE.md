---
schema: wang-person/v1
id: p_wSDNkJDfQVrhyWBPKkTbSE
status: active
merged_into: null
display_name: 王元炳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1o7Fj8R7v99Wh3etQEDFfv
        subject_person_id: p_wSDNkJDfQVrhyWBPKkTbSE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元炳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_twQTFeMhMK9No4quWqUMNL
          claim_id: c_1o7Fj8R7v99Wh3etQEDFfv
          source_id: s_CBRMAA7UU5XWLF5pLH5s17
          stance: supports
          locator: CBDB:636163
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636163）
          source: &a1
            id: s_CBRMAA7UU5XWLF5pLH5s17
            source_type: api_record
            title: 中国历代人物传记资料库：王元炳（CBDB 636163）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636163&o=json
            external_identifier: CBDB:636163
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.902Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1ETuffd1dVba8HHkt3i1gQ
        subject_person_id: p_wSDNkJDfQVrhyWBPKkTbSE
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
        - id: cs_TGrUv8kxzk9eC27AssmYG2
          claim_id: c_1ETuffd1dVba8HHkt3i1gQ
          source_id: s_CBRMAA7UU5XWLF5pLH5s17
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

# 王元炳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元炳 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元炳（CBDB 636163）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636163&o=json)
