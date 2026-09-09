---
schema: wang-person/v1
id: p_YKqXCLjzE6BCr7yJ6Ve39B
status: active
merged_into: null
display_name: 王理
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xDV2hg1oQHhdPPq5tR2F5E
        subject_person_id: p_YKqXCLjzE6BCr7yJ6Ve39B
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王理
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oMK16gv9px8eDwvRbnsk7d
          claim_id: c_xDV2hg1oQHhdPPq5tR2F5E
          source_id: s_Gei5daFqNqQFcxX4giRyYk
          stance: supports
          locator: CBDB:439518
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（439518）
          source: &a1
            id: s_Gei5daFqNqQFcxX4giRyYk
            source_type: api_record
            title: 中国历代人物传记资料库：王理（CBDB 439518）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=439518&o=json
            external_identifier: CBDB:439518
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.097Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_MTTqrxiAJCD47A6ug6uJUJ
        subject_person_id: p_YKqXCLjzE6BCr7yJ6Ve39B
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1363年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MQM321Y7NZ1WJMXL2WL4DN
          claim_id: c_MTTqrxiAJCD47A6ug6uJUJ
          source_id: s_Gei5daFqNqQFcxX4giRyYk
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
        id: c_D1Un2xMutvS81pPbBbxfWC
        subject_person_id: p_YKqXCLjzE6BCr7yJ6Ve39B
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e1GoQv1HdvRVau7CAxD9jN
          claim_id: c_D1Un2xMutvS81pPbBbxfWC
          source_id: s_Gei5daFqNqQFcxX4giRyYk
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王理

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王理 | accepted |
| death.date | 1363年 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王理（CBDB 439518）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=439518&o=json)
