---
schema: wang-person/v1
id: p_WcPAsoA5DPSvzLJbg6NE4c
status: active
merged_into: null
display_name: 王諏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pGr2nQQ81cU9GcqAW8TEzd
        subject_person_id: p_WcPAsoA5DPSvzLJbg6NE4c
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王諏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2BCuJ5mU7LgqFhokTknQ7D
          claim_id: c_pGr2nQQ81cU9GcqAW8TEzd
          source_id: s_YqpdtW13HUKCTJeZwBGmty
          stance: supports
          locator: CBDB:640277
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640277）
          source: &a1
            id: s_YqpdtW13HUKCTJeZwBGmty
            source_type: api_record
            title: 中国历代人物传记资料库：王諏（CBDB 640277）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640277&o=json
            external_identifier: CBDB:640277
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.062Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_a16UXGiNBT5JCMJ6V4Xt1p
        subject_person_id: p_WcPAsoA5DPSvzLJbg6NE4c
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王諏，清人物。籍贯閩縣，入仕監生，曾任撫民同知。（中国历代人物传记资料库 CBDB 640277）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OTttBgWRYBBjreOIdR1UXU
          claim_id: c_a16UXGiNBT5JCMJ6V4Xt1p
          source_id: s_YqpdtW13HUKCTJeZwBGmty
          stance: supports
          locator: CBDB:640277
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

# 王諏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王諏 | accepted |
| bio.summary | 王諏，清人物。籍贯閩縣，入仕監生，曾任撫民同知。（中国历代人物传记资料库 CBDB 640277） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王諏（CBDB 640277）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640277&o=json)
