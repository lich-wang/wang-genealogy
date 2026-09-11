---
schema: wang-person/v1
id: p_ZpLFFFqe4pFKQG5vaBz61j
status: active
merged_into: null
display_name: 王預
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EyEJtf22XVn95NMtvR8G8B
        subject_person_id: p_ZpLFFFqe4pFKQG5vaBz61j
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王預
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GqtY1w9F87JupjysFk7fDr
          claim_id: c_EyEJtf22XVn95NMtvR8G8B
          source_id: s_HaJxnSzMFqJEsHgXiPHLE4
          stance: supports
          locator: CBDB:485525
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（485525）
          source: &a1
            id: s_HaJxnSzMFqJEsHgXiPHLE4
            source_type: api_record
            title: 中国历代人物传记资料库：王預（CBDB 485525）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=485525&o=json
            external_identifier: CBDB:485525
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.899Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ff3WufWwHFC6E79Dh4FcB3
        subject_person_id: p_ZpLFFFqe4pFKQG5vaBz61j
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王預，明人物。入仕世襲(替)，曾任百戶。（中国历代人物传记资料库 CBDB 485525）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PYvhUL4WivHWWOqIRwwyf4
          claim_id: c_Ff3WufWwHFC6E79Dh4FcB3
          source_id: s_HaJxnSzMFqJEsHgXiPHLE4
          stance: supports
          locator: CBDB:485525
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王預

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王預 | accepted |
| bio.summary | 王預，明人物。入仕世襲(替)，曾任百戶。（中国历代人物传记资料库 CBDB 485525） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王預（CBDB 485525）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=485525&o=json)
