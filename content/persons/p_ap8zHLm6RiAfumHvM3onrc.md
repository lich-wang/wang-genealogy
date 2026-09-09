---
schema: wang-person/v1
id: p_ap8zHLm6RiAfumHvM3onrc
status: active
merged_into: null
display_name: 王綸三
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kp8xAYD83N3Edq2V3V3WSh
        subject_person_id: p_ap8zHLm6RiAfumHvM3onrc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綸三
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2Zz6e37Pd3x7M3YLW18chH
          claim_id: c_kp8xAYD83N3Edq2V3V3WSh
          source_id: s_8XpFKNEQzs2aDNVZzCdhkh
          stance: supports
          locator: CBDB:639836
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639836）
          source: &a1
            id: s_8XpFKNEQzs2aDNVZzCdhkh
            source_type: api_record
            title: 中国历代人物传记资料库：王綸三（CBDB 639836）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639836&o=json
            external_identifier: CBDB:639836
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.059Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2jNR84QZyJrTHQyH6uEWbz
        subject_person_id: p_ap8zHLm6RiAfumHvM3onrc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J8WPPNXKY6cpwvgfjBwSdC
          claim_id: c_2jNR84QZyJrTHQyH6uEWbz
          source_id: s_8XpFKNEQzs2aDNVZzCdhkh
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

# 王綸三

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綸三 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王綸三（CBDB 639836）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639836&o=json)
