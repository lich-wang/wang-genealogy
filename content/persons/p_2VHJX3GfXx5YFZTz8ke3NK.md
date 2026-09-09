---
schema: wang-person/v1
id: p_2VHJX3GfXx5YFZTz8ke3NK
status: active
merged_into: null
display_name: 王鑑相
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JqePjByTjGd1zybib3SnYy
        subject_person_id: p_2VHJX3GfXx5YFZTz8ke3NK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑑相
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_e3FRhF36kpxvGUi7qq4cpH
          claim_id: c_JqePjByTjGd1zybib3SnYy
          source_id: s_KHxv2pBsHKSVAusM8jedVp
          stance: supports
          locator: CBDB:640720
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640720）
          source: &a1
            id: s_KHxv2pBsHKSVAusM8jedVp
            source_type: api_record
            title: 中国历代人物传记资料库：王鑑相（CBDB 640720）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640720&o=json
            external_identifier: CBDB:640720
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.347Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ba5kFyJxMzNVvuNakZFbU5
        subject_person_id: p_2VHJX3GfXx5YFZTz8ke3NK
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
        - id: cs_qS2acMdTvUGsgEvdb3DCj4
          claim_id: c_ba5kFyJxMzNVvuNakZFbU5
          source_id: s_KHxv2pBsHKSVAusM8jedVp
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

# 王鑑相

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鑑相 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鑑相（CBDB 640720）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640720&o=json)
