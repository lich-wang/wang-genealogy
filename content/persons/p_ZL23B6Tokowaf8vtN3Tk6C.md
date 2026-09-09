---
schema: wang-person/v1
id: p_ZL23B6Tokowaf8vtN3Tk6C
status: active
merged_into: null
display_name: 王居厚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QDxinScNeT7fdfs7P9HDbG
        subject_person_id: p_ZL23B6Tokowaf8vtN3Tk6C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王居厚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Kg8SYUbaQJMCu3XCTUFL94
          claim_id: c_QDxinScNeT7fdfs7P9HDbG
          source_id: s_egT4cuXTqFzqRCXHN2vy3N
          stance: supports
          locator: CBDB:119738
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（119738）
          source: &a1
            id: s_egT4cuXTqFzqRCXHN2vy3N
            source_type: api_record
            title: 中国历代人物传记资料库：王居厚（CBDB 119738）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119738&o=json
            external_identifier: CBDB:119738
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.890Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oLYqDyb65SvLQCwGgSnH7V
        subject_person_id: p_ZL23B6Tokowaf8vtN3Tk6C
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yzwQ4a9BWov59EGwZcjNNE
          claim_id: c_oLYqDyb65SvLQCwGgSnH7V
          source_id: s_egT4cuXTqFzqRCXHN2vy3N
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

# 王居厚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王居厚 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王居厚（CBDB 119738）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119738&o=json)
