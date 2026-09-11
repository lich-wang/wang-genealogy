---
schema: wang-person/v1
id: p_FY11Ju9TzP3LyQdLWmRCmo
status: active
merged_into: null
display_name: 王大輈
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eQ2YSSJhSti158RVsAesGq
        subject_person_id: p_FY11Ju9TzP3LyQdLWmRCmo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大輈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SZzxRWA874KtEPHw9aFP4f
          claim_id: c_eQ2YSSJhSti158RVsAesGq
          source_id: s_mHc9xoacH3Xq2HZMFm6Xh2
          stance: supports
          locator: CBDB:636918
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636918）
          source: &a1
            id: s_mHc9xoacH3Xq2HZMFm6Xh2
            source_type: api_record
            title: 中国历代人物传记资料库：王大輈（CBDB 636918）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636918&o=json
            external_identifier: CBDB:636918
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.147Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gJRpFJ2A8H4hri6acCqktR
        subject_person_id: p_FY11Ju9TzP3LyQdLWmRCmo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大輈，清人物。籍贯永平，曾任訓導。（中国历代人物传记资料库 CBDB 636918）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JZBC-UUSj-X8t0Ye5IUuwJ
          claim_id: c_gJRpFJ2A8H4hri6acCqktR
          source_id: s_mHc9xoacH3Xq2HZMFm6Xh2
          stance: supports
          locator: CBDB:636918
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

# 王大輈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大輈 | accepted |
| bio.summary | 王大輈，清人物。籍贯永平，曾任訓導。（中国历代人物传记资料库 CBDB 636918） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大輈（CBDB 636918）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636918&o=json)
