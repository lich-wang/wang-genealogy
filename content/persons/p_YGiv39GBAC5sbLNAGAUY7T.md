---
schema: wang-person/v1
id: p_YGiv39GBAC5sbLNAGAUY7T
status: active
merged_into: null
display_name: 王贇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_G53uyvZCJXZ38xeoDKd1mU
        subject_person_id: p_YGiv39GBAC5sbLNAGAUY7T
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王贇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZEiXW2SyFoDGdUu3fP51mw
          claim_id: c_G53uyvZCJXZ38xeoDKd1mU
          source_id: s_k9BneUmB8yCk1YvHgP7s9U
          stance: supports
          locator: CBDB:148836
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（148836）
          source: &a1
            id: s_k9BneUmB8yCk1YvHgP7s9U
            source_type: api_record
            title: 中国历代人物传记资料库：王贇（CBDB 148836）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148836&o=json
            external_identifier: CBDB:148836
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.774Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VKqNfY8bZVRuMLDbb5GXat
        subject_person_id: p_YGiv39GBAC5sbLNAGAUY7T
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UtDG78AHfmKgrotxBti1P7
          claim_id: c_VKqNfY8bZVRuMLDbb5GXat
          source_id: s_k9BneUmB8yCk1YvHgP7s9U
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

# 王贇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王贇 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王贇（CBDB 148836）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148836&o=json)
