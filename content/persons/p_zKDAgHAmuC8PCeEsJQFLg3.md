---
schema: wang-person/v1
id: p_zKDAgHAmuC8PCeEsJQFLg3
status: active
merged_into: null
display_name: 王耀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZJoT514YvhGHhHnX4SFa9s
        subject_person_id: p_zKDAgHAmuC8PCeEsJQFLg3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王耀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CbBweWPGm1bBeD7YMqB7Ro
          claim_id: c_ZJoT514YvhGHhHnX4SFa9s
          source_id: s_tdr3Eu4KSdt9XRcm4SD74R
          stance: supports
          locator: CBDB:459922
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（459922）
          source: &a1
            id: s_tdr3Eu4KSdt9XRcm4SD74R
            source_type: api_record
            title: 中国历代人物传记资料库：王耀（CBDB 459922）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=459922&o=json
            external_identifier: CBDB:459922
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.740Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wH6QTrahByDmGFCv5SPvc9
        subject_person_id: p_zKDAgHAmuC8PCeEsJQFLg3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王耀，明人物。曾任典史。（中国历代人物传记资料库 CBDB 459922）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_phfU8QWII16mFf7cSdnMd9
          claim_id: c_wH6QTrahByDmGFCv5SPvc9
          source_id: s_tdr3Eu4KSdt9XRcm4SD74R
          stance: supports
          locator: CBDB:459922
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

# 王耀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王耀 | accepted |
| bio.summary | 王耀，明人物。曾任典史。（中国历代人物传记资料库 CBDB 459922） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王耀（CBDB 459922）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=459922&o=json)
