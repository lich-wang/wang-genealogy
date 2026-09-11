---
schema: wang-person/v1
id: p_WQUhurjj7aW6BmKDwcHajP
status: active
merged_into: null
display_name: 王汝安
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Nthy399dMp9LSSY5BqRAqG
        subject_person_id: p_WQUhurjj7aW6BmKDwcHajP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝安
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GwrDg5qFeNDpX1CX26Lu7G
          claim_id: c_Nthy399dMp9LSSY5BqRAqG
          source_id: s_5DkQSP1N7rvfQSSBW8Ym17
          stance: supports
          locator: CBDB:330486
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（330486）
          source: &a1
            id: s_5DkQSP1N7rvfQSSBW8Ym17
            source_type: api_record
            title: 中国历代人物传记资料库：王汝安（CBDB 330486）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330486&o=json
            external_identifier: CBDB:330486
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.349Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JQfqwJwoV81DpAdFkyk5tr
        subject_person_id: p_WQUhurjj7aW6BmKDwcHajP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝安，明人物。嘉靖四十四年進士，籍贯金華。（中国历代人物传记资料库 CBDB 330486）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ljWa_pwv3oPWHDGBgFFtah
          claim_id: c_JQfqwJwoV81DpAdFkyk5tr
          source_id: s_5DkQSP1N7rvfQSSBW8Ym17
          stance: supports
          locator: CBDB:330486
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

# 王汝安

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝安 | accepted |
| bio.summary | 王汝安，明人物。嘉靖四十四年進士，籍贯金華。（中国历代人物传记资料库 CBDB 330486） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王汝安（CBDB 330486）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330486&o=json)
