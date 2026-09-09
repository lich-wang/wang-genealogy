---
schema: wang-person/v1
id: p_x4pbuWJsWwis8DNvT4jFBk
status: active
merged_into: null
display_name: 王士醇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SNyj3v6V4dUaiZWvpZwCdf
        subject_person_id: p_x4pbuWJsWwis8DNvT4jFBk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士醇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KNze1ENMiSjyu2rJCm5f7B
          claim_id: c_SNyj3v6V4dUaiZWvpZwCdf
          source_id: s_DKyN1MF9EDUJ325R1vK8Xm
          stance: supports
          locator: CBDB:636823
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636823）
          source: &a1
            id: s_DKyN1MF9EDUJ325R1vK8Xm
            source_type: api_record
            title: 中国历代人物传记资料库：王士醇（CBDB 636823）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636823&o=json
            external_identifier: CBDB:636823
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.115Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jN5tuVi8qm1mTmX9Bs7Hfu
        subject_person_id: p_x4pbuWJsWwis8DNvT4jFBk
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
        - id: cs_7mLKC6LYMw2D7XifdHS51H
          claim_id: c_jN5tuVi8qm1mTmX9Bs7Hfu
          source_id: s_DKyN1MF9EDUJ325R1vK8Xm
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

# 王士醇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士醇 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士醇（CBDB 636823）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636823&o=json)
