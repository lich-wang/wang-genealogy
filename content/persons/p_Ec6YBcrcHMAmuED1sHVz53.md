---
schema: wang-person/v1
id: p_Ec6YBcrcHMAmuED1sHVz53
status: active
merged_into: null
display_name: 王宣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HGpJhkz9dt78UEdP3UCLm7
        subject_person_id: p_Ec6YBcrcHMAmuED1sHVz53
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_i1sExU9Ycg6YHyJiVrneFG
          claim_id: c_HGpJhkz9dt78UEdP3UCLm7
          source_id: s_1SGg9E2zY3EgPQ9BfZscBC
          stance: supports
          locator: CBDB:38444
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38444）
          source: &a1
            id: s_1SGg9E2zY3EgPQ9BfZscBC
            source_type: api_record
            title: 中国历代人物传记资料库：王宣（CBDB 38444）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38444&o=json
            external_identifier: CBDB:38444
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.474Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Ww2Byh3DCaaFP4PcrTZkJb
        subject_person_id: p_Ec6YBcrcHMAmuED1sHVz53
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1080年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ms3PAe2hBG6A3Z9NnzFM36
          claim_id: c_Ww2Byh3DCaaFP4PcrTZkJb
          source_id: s_1SGg9E2zY3EgPQ9BfZscBC
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SjFQpQUSax9JCxahrUWPQ2
        subject_person_id: p_Ec6YBcrcHMAmuED1sHVz53
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宣（卒于1080年），宋人物。曾任兵馬都監、都監、兵馬鈐轄。（中国历代人物传记资料库 CBDB 38444）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vBE-r1K1Ff-jOfKjG8swM0
          claim_id: c_SjFQpQUSax9JCxahrUWPQ2
          source_id: s_1SGg9E2zY3EgPQ9BfZscBC
          stance: supports
          locator: CBDB:38444
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

# 王宣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宣 | accepted |
| death.date | 1080年 | accepted |
| bio.summary | 王宣（卒于1080年），宋人物。曾任兵馬都監、都監、兵馬鈐轄。（中国历代人物传记资料库 CBDB 38444） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宣（CBDB 38444）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38444&o=json)
