---
schema: wang-person/v1
id: p_GxPP13NavUSFaar29YJ8r1
status: active
merged_into: null
display_name: 王訪
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ipPDZf9va22GzLuynHEGCj
        subject_person_id: p_GxPP13NavUSFaar29YJ8r1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王訪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_y7oybMK5i7reW4zVnKjmBs
          claim_id: c_ipPDZf9va22GzLuynHEGCj
          source_id: s_bANnFkM86dnkhiSeTHcNjs
          stance: supports
          locator: CBDB:491370
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（491370）
          source: &a1
            id: s_bANnFkM86dnkhiSeTHcNjs
            source_type: api_record
            title: 中国历代人物传记资料库：王訪（CBDB 491370）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=491370&o=json
            external_identifier: CBDB:491370
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.186Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_e9ZHrwbFBQu675AHPeQBny
        subject_person_id: p_GxPP13NavUSFaar29YJ8r1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王訪，清人物。曾任訓導。（中国历代人物传记资料库 CBDB 491370）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ii7VoIR30FIG3a_LXjBbFR
          claim_id: c_e9ZHrwbFBQu675AHPeQBny
          source_id: s_bANnFkM86dnkhiSeTHcNjs
          stance: supports
          locator: CBDB:491370
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

# 王訪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王訪 | accepted |
| bio.summary | 王訪，清人物。曾任訓導。（中国历代人物传记资料库 CBDB 491370） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王訪（CBDB 491370）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=491370&o=json)
