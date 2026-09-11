---
schema: wang-person/v1
id: p_tPeJZEocH1QKA3BmR8tG3i
status: active
merged_into: null
display_name: 王燧
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FBgSybETwRpxx67dXwkcJX
        subject_person_id: p_tPeJZEocH1QKA3BmR8tG3i
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王燧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LHW7s1Vpth6YptiZNTHLJQ
          claim_id: c_FBgSybETwRpxx67dXwkcJX
          source_id: s_7vYCzKm7YzykDq62qxASs6
          stance: supports
          locator: CBDB:488901
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（488901）
          source: &a1
            id: s_7vYCzKm7YzykDq62qxASs6
            source_type: api_record
            title: 中国历代人物传记资料库：王燧（CBDB 488901）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=488901&o=json
            external_identifier: CBDB:488901
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.002Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cAYwBDc4jhCMjW8yQSRRBL
        subject_person_id: p_tPeJZEocH1QKA3BmR8tG3i
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王燧，明人物。入仕監生，曾任通判。（中国历代人物传记资料库 CBDB 488901）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kmU5AcDnOADs9WA86gkwWw
          claim_id: c_cAYwBDc4jhCMjW8yQSRRBL
          source_id: s_7vYCzKm7YzykDq62qxASs6
          stance: supports
          locator: CBDB:488901
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

# 王燧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王燧 | accepted |
| bio.summary | 王燧，明人物。入仕監生，曾任通判。（中国历代人物传记资料库 CBDB 488901） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王燧（CBDB 488901）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=488901&o=json)
