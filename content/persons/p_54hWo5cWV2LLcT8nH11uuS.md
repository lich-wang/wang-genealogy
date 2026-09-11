---
schema: wang-person/v1
id: p_54hWo5cWV2LLcT8nH11uuS
status: active
merged_into: null
display_name: 王作霖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wdX1Wn4XiEEFFoZJ7TG3CD
        subject_person_id: p_54hWo5cWV2LLcT8nH11uuS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王作霖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GouPpViEP5kusMxy4W5exr
          claim_id: c_wdX1Wn4XiEEFFoZJ7TG3CD
          source_id: s_tYNwADGAT4A6AuQXEU71L6
          stance: supports
          locator: CBDB:565096
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（565096）
          source: &a1
            id: s_tYNwADGAT4A6AuQXEU71L6
            source_type: api_record
            title: 中国历代人物传记资料库：王作霖（CBDB 565096）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=565096&o=json
            external_identifier: CBDB:565096
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.814Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3EZ3f2JqTbFDGACXMhV8s8
        subject_person_id: p_54hWo5cWV2LLcT8nH11uuS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王作霖，清人物。籍贯會稽，身份为畫家。（中国历代人物传记资料库 CBDB 565096）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_m9vXAzMmuVwoVlME2PU2Vr
          claim_id: c_3EZ3f2JqTbFDGACXMhV8s8
          source_id: s_tYNwADGAT4A6AuQXEU71L6
          stance: supports
          locator: CBDB:565096
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

# 王作霖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王作霖 | accepted |
| bio.summary | 王作霖，清人物。籍贯會稽，身份为畫家。（中国历代人物传记资料库 CBDB 565096） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王作霖（CBDB 565096）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=565096&o=json)
