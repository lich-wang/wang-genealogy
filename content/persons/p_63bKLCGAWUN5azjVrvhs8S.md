---
schema: wang-person/v1
id: p_63bKLCGAWUN5azjVrvhs8S
status: active
merged_into: null
display_name: 王文曾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iCL9Mr1dm99Q6RnpGq8jNy
        subject_person_id: p_63bKLCGAWUN5azjVrvhs8S
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CPKJccP5KM516PJb21uT25
          claim_id: c_iCL9Mr1dm99Q6RnpGq8jNy
          source_id: s_hDwqFAbkP4Vk4YG7ssMuYH
          stance: supports
          locator: CBDB:638230
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638230）
          source: &a1
            id: s_hDwqFAbkP4Vk4YG7ssMuYH
            source_type: api_record
            title: 中国历代人物传记资料库：王文曾（CBDB 638230）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638230&o=json
            external_identifier: CBDB:638230
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.568Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_q4fH5HzKsrNEdFbH1HjEnQ
        subject_person_id: p_63bKLCGAWUN5azjVrvhs8S
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文曾，清人物。籍贯湖州府，入仕廩貢生，曾任復設教諭。（中国历代人物传记资料库 CBDB 638230）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_deUdiQ9uKIwysB7XAyEA5q
          claim_id: c_q4fH5HzKsrNEdFbH1HjEnQ
          source_id: s_hDwqFAbkP4Vk4YG7ssMuYH
          stance: supports
          locator: CBDB:638230
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

# 王文曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文曾 | accepted |
| bio.summary | 王文曾，清人物。籍贯湖州府，入仕廩貢生，曾任復設教諭。（中国历代人物传记资料库 CBDB 638230） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文曾（CBDB 638230）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638230&o=json)
