---
schema: wang-person/v1
id: p_gC4iFQV5zmKZu4vwjHgRNx
status: active
merged_into: null
display_name: 王逢泰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yE48FHmg112XFp41DqUBtH
        subject_person_id: p_gC4iFQV5zmKZu4vwjHgRNx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逢泰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LN5gSqhzozzKKALLr1mSLP
          claim_id: c_yE48FHmg112XFp41DqUBtH
          source_id: s_7WoeRhEJ6hUC5zqDf7P8Ci
          stance: supports
          locator: CBDB:640408
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640408）
          source: &a1
            id: s_7WoeRhEJ6hUC5zqDf7P8Ci
            source_type: api_record
            title: 中国历代人物传记资料库：王逢泰（CBDB 640408）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640408&o=json
            external_identifier: CBDB:640408
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.096Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GJAyr3SHyj2nqjFGiZsgnb
        subject_person_id: p_gC4iFQV5zmKZu4vwjHgRNx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逢泰，清人物。籍贯河南省，入仕行伍，曾任都司、藍翎侍衛。（中国历代人物传记资料库 CBDB 640408）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dTErVmQEqCgaR1XxPM4AFy
          claim_id: c_GJAyr3SHyj2nqjFGiZsgnb
          source_id: s_7WoeRhEJ6hUC5zqDf7P8Ci
          stance: supports
          locator: CBDB:640408
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

# 王逢泰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王逢泰 | accepted |
| bio.summary | 王逢泰，清人物。籍贯河南省，入仕行伍，曾任都司、藍翎侍衛。（中国历代人物传记资料库 CBDB 640408） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王逢泰（CBDB 640408）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640408&o=json)
