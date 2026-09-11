---
schema: wang-person/v1
id: p_xG9ZpGemQvRv5A24eT7tMu
status: active
merged_into: null
display_name: 王者聘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_frbGsRMvBMYHFNyKiDcUHR
        subject_person_id: p_xG9ZpGemQvRv5A24eT7tMu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王者聘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HXtA6kLKBiQRJxqS9aXupK
          claim_id: c_frbGsRMvBMYHFNyKiDcUHR
          source_id: s_YV3meAJEdGfdc7dcmtyuCr
          stance: supports
          locator: CBDB:639925
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639925）
          source: &a1
            id: s_YV3meAJEdGfdc7dcmtyuCr
            source_type: api_record
            title: 中国历代人物传记资料库：王者聘（CBDB 639925）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639925&o=json
            external_identifier: CBDB:639925
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.086Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_t6P2KzQQ5naQ8q5NKnmD8d
        subject_person_id: p_xG9ZpGemQvRv5A24eT7tMu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王者聘，清人物。籍贯天津，入仕廩貢生，曾任教諭、復設訓導。（中国历代人物传记资料库 CBDB 639925）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_F_mhPXdEkd0Qdvh-li45Q-
          claim_id: c_t6P2KzQQ5naQ8q5NKnmD8d
          source_id: s_YV3meAJEdGfdc7dcmtyuCr
          stance: supports
          locator: CBDB:639925
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

# 王者聘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王者聘 | accepted |
| bio.summary | 王者聘，清人物。籍贯天津，入仕廩貢生，曾任教諭、復設訓導。（中国历代人物传记资料库 CBDB 639925） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王者聘（CBDB 639925）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639925&o=json)
