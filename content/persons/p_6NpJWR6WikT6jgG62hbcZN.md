---
schema: wang-person/v1
id: p_6NpJWR6WikT6jgG62hbcZN
status: active
merged_into: null
display_name: 王昕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SsKyJeBSLc5yzd323MdoEz
        subject_person_id: p_6NpJWR6WikT6jgG62hbcZN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KZXJGmu71M3zUgiVSCpPZw
          claim_id: c_SsKyJeBSLc5yzd323MdoEz
          source_id: s_VnxFrpHnXPVaFBiYUE3QgW
          stance: supports
          locator: CBDB:492799
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（492799）
          source: &a1
            id: s_VnxFrpHnXPVaFBiYUE3QgW
            source_type: api_record
            title: 中国历代人物传记资料库：王昕（CBDB 492799）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=492799&o=json
            external_identifier: CBDB:492799
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.330Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_B5M6zLmK2Squd4scggafxm
        subject_person_id: p_6NpJWR6WikT6jgG62hbcZN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昕，清人物。入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 492799）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6NvKoMROtcAnEBfwz-Kl6x
          claim_id: c_B5M6zLmK2Squd4scggafxm
          source_id: s_VnxFrpHnXPVaFBiYUE3QgW
          stance: supports
          locator: CBDB:492799
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

# 王昕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昕 | accepted |
| bio.summary | 王昕，清人物。入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 492799） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王昕（CBDB 492799）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=492799&o=json)
