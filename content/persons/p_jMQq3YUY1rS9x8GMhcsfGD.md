---
schema: wang-person/v1
id: p_jMQq3YUY1rS9x8GMhcsfGD
status: active
merged_into: null
display_name: 王一德
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UynFMKaWaNrvJR4yRVHgEt
        subject_person_id: p_jMQq3YUY1rS9x8GMhcsfGD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DzXAsSy6MQ12FVtmFWX7zF
          claim_id: c_UynFMKaWaNrvJR4yRVHgEt
          source_id: s_GptL8GRYFcEFSy6s6UhTwQ
          stance: supports
          locator: CBDB:306150
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（306150）
          source: &a1
            id: s_GptL8GRYFcEFSy6s6UhTwQ
            source_type: api_record
            title: 中国历代人物传记资料库：王一德（CBDB 306150）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306150&o=json
            external_identifier: CBDB:306150
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.758Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CQ8g91k7yKfj14V9PDMWHq
        subject_person_id: p_jMQq3YUY1rS9x8GMhcsfGD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一德，明人物。嘉靖二十三年進士，籍贯江都。（中国历代人物传记资料库 CBDB 306150）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yWdh8kHwy5F7BNbU5Uc5hN
          claim_id: c_CQ8g91k7yKfj14V9PDMWHq
          source_id: s_GptL8GRYFcEFSy6s6UhTwQ
          stance: supports
          locator: CBDB:306150
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

# 王一德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一德 | accepted |
| bio.summary | 王一德，明人物。嘉靖二十三年進士，籍贯江都。（中国历代人物传记资料库 CBDB 306150） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王一德（CBDB 306150）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306150&o=json)
