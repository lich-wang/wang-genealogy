---
schema: wang-person/v1
id: p_Bbk1mtAuQYA8F7C18jdiAD
status: active
merged_into: null
display_name: 王錫祺
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9UUvnwUC8BnEi7ZLkEnveg
        subject_person_id: p_Bbk1mtAuQYA8F7C18jdiAD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫祺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wTKhPfgBe2nWofwUNEvYuA
          claim_id: c_9UUvnwUC8BnEi7ZLkEnveg
          source_id: s_LAqDakqmFr21LV1jFgvHZY
          stance: supports
          locator: CBDB:640633
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640633）
          source: &a1
            id: s_LAqDakqmFr21LV1jFgvHZY
            source_type: api_record
            title: 中国历代人物传记资料库：王錫祺（CBDB 640633）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640633&o=json
            external_identifier: CBDB:640633
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iYNxtnjiHknFKPNyf3xXQB
        subject_person_id: p_Bbk1mtAuQYA8F7C18jdiAD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫祺，清人物。籍贯嘉興，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 640633）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JVVvflXDcwYhfNBKw1Ntxr
          claim_id: c_iYNxtnjiHknFKPNyf3xXQB
          source_id: s_LAqDakqmFr21LV1jFgvHZY
          stance: supports
          locator: CBDB:640633
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

# 王錫祺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錫祺 | accepted |
| bio.summary | 王錫祺，清人物。籍贯嘉興，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 640633） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錫祺（CBDB 640633）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640633&o=json)
