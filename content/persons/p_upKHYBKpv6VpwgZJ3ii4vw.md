---
schema: wang-person/v1
id: p_upKHYBKpv6VpwgZJ3ii4vw
status: active
merged_into: null
display_name: 王錫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LJw7WFGQ17qrR5yuaY4K9f
        subject_person_id: p_upKHYBKpv6VpwgZJ3ii4vw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5C5vS47hunQVLJfycmjb8a
          claim_id: c_LJw7WFGQ17qrR5yuaY4K9f
          source_id: s_Cag9BNE45RKGBvVuCPQoW2
          stance: supports
          locator: CBDB:126832
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126832）
          source: &a1
            id: s_Cag9BNE45RKGBvVuCPQoW2
            source_type: api_record
            title: 中国历代人物传记资料库：王錫（CBDB 126832）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126832&o=json
            external_identifier: CBDB:126832
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.241Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HRPXn8NartF3BpwhhREnKC
        subject_person_id: p_upKHYBKpv6VpwgZJ3ii4vw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫，明人物。籍贯翼城，曾任縣教諭。（中国历代人物传记资料库 CBDB 126832）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gNZN9rv-9D5Fmt63gnvRzr
          claim_id: c_HRPXn8NartF3BpwhhREnKC
          source_id: s_Cag9BNE45RKGBvVuCPQoW2
          stance: supports
          locator: CBDB:126832
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

# 王錫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錫 | accepted |
| bio.summary | 王錫，明人物。籍贯翼城，曾任縣教諭。（中国历代人物传记资料库 CBDB 126832） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錫（CBDB 126832）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126832&o=json)
