---
schema: wang-person/v1
id: p_cJkwLPWeu57i7jPvcKvk5X
status: active
merged_into: null
display_name: 王宜表
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pwWgKMzRnuQGWMFsKYWFEw
        subject_person_id: p_cJkwLPWeu57i7jPvcKvk5X
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宜表
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UqFAi3K4zV8hKA81TxB38P
          claim_id: c_pwWgKMzRnuQGWMFsKYWFEw
          source_id: s_vFKcC1zDE5pnd9MMr8aW3r
          stance: supports
          locator: CBDB:637149
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637149）
          source: &a1
            id: s_vFKcC1zDE5pnd9MMr8aW3r
            source_type: api_record
            title: 中国历代人物传记资料库：王宜表（CBDB 637149）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637149&o=json
            external_identifier: CBDB:637149
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.219Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UGEZMGiDeDfGpkrAhi4Bcf
        subject_person_id: p_cJkwLPWeu57i7jPvcKvk5X
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宜表，清人物。籍贯襄城，入仕監生，曾任經歷。（中国历代人物传记资料库 CBDB 637149）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3E8LeRiJ9VbKR9gVQCCoFF
          claim_id: c_UGEZMGiDeDfGpkrAhi4Bcf
          source_id: s_vFKcC1zDE5pnd9MMr8aW3r
          stance: supports
          locator: CBDB:637149
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

# 王宜表

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宜表 | accepted |
| bio.summary | 王宜表，清人物。籍贯襄城，入仕監生，曾任經歷。（中国历代人物传记资料库 CBDB 637149） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宜表（CBDB 637149）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637149&o=json)
