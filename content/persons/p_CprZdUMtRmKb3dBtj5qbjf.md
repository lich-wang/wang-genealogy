---
schema: wang-person/v1
id: p_CprZdUMtRmKb3dBtj5qbjf
status: active
merged_into: null
display_name: 王驥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Z59y9dctYUoVF1wBFzfStK
        subject_person_id: p_CprZdUMtRmKb3dBtj5qbjf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王驥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KEmik8zpcn27oiLpGAv3ip
          claim_id: c_Z59y9dctYUoVF1wBFzfStK
          source_id: s_G9r2dyh3sPLpQNTSaFfZXD
          stance: supports
          locator: CBDB:640902
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640902）
          source: &a1
            id: s_G9r2dyh3sPLpQNTSaFfZXD
            source_type: api_record
            title: 中国历代人物传记资料库：王驥（CBDB 640902）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640902&o=json
            external_identifier: CBDB:640902
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.234Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1GKP1dh6a8crK3YDbcYEEJ
        subject_person_id: p_CprZdUMtRmKb3dBtj5qbjf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王驥，清人物。籍贯廣州府，曾任訓導。（中国历代人物传记资料库 CBDB 640902）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rBWM8xj1puOTwwhBGRv9jA
          claim_id: c_1GKP1dh6a8crK3YDbcYEEJ
          source_id: s_G9r2dyh3sPLpQNTSaFfZXD
          stance: supports
          locator: CBDB:640902
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

# 王驥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王驥 | accepted |
| bio.summary | 王驥，清人物。籍贯廣州府，曾任訓導。（中国历代人物传记资料库 CBDB 640902） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王驥（CBDB 640902）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640902&o=json)
