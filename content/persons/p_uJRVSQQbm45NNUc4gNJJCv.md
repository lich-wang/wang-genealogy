---
schema: wang-person/v1
id: p_uJRVSQQbm45NNUc4gNJJCv
status: active
merged_into: null
display_name: 王汝霖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nfvmeqHVajzBCQebwtCacQ
        subject_person_id: p_uJRVSQQbm45NNUc4gNJJCv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝霖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_j9sm4boo9HGMF8YqnYmvP7
          claim_id: c_nfvmeqHVajzBCQebwtCacQ
          source_id: s_NQK9GxJKM5DGMan3tuH7Yo
          stance: supports
          locator: CBDB:126503
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126503）
          source: &a1
            id: s_NQK9GxJKM5DGMan3tuH7Yo
            source_type: api_record
            title: 中国历代人物传记资料库：王汝霖（CBDB 126503）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126503&o=json
            external_identifier: CBDB:126503
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.989Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KwJexzBTSx7vHu6dxdFht8
        subject_person_id: p_uJRVSQQbm45NNUc4gNJJCv
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
        - id: cs_pp3142NNYd8vC2aWg95Prf
          claim_id: c_KwJexzBTSx7vHu6dxdFht8
          source_id: s_NQK9GxJKM5DGMan3tuH7Yo
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

# 王汝霖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝霖 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王汝霖（CBDB 126503）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126503&o=json)
