---
schema: wang-person/v1
id: p_NwPDVG6z5tS4QfELzYHZQB
status: active
merged_into: null
display_name: 王啟建
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4kGE6ZHdxb2h6v2cNHruLW
        subject_person_id: p_NwPDVG6z5tS4QfELzYHZQB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟建
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oKdW2DfTmF5qY3u7zjmeuf
          claim_id: c_4kGE6ZHdxb2h6v2cNHruLW
          source_id: s_SzoF3Cy93f2ijE2efMNBwL
          stance: supports
          locator: CBDB:636545
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636545）
          source: &a1
            id: s_SzoF3Cy93f2ijE2efMNBwL
            source_type: api_record
            title: 中国历代人物传记资料库：王啟建（CBDB 636545）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636545&o=json
            external_identifier: CBDB:636545
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.027Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6KNWud4eEQotLVeFLHCJkP
        subject_person_id: p_NwPDVG6z5tS4QfELzYHZQB
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
        - id: cs_KkNpFy99RNdhSea3QNE8gL
          claim_id: c_6KNWud4eEQotLVeFLHCJkP
          source_id: s_SzoF3Cy93f2ijE2efMNBwL
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

# 王啟建

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王啟建 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王啟建（CBDB 636545）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636545&o=json)
