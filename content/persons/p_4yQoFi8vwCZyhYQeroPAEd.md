---
schema: wang-person/v1
id: p_4yQoFi8vwCZyhYQeroPAEd
status: active
merged_into: null
display_name: 王邁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dBWv54k2FRz9MxLHwei5EU
        subject_person_id: p_4yQoFi8vwCZyhYQeroPAEd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4oXMa63FMe2xP18vC48wUw
          claim_id: c_dBWv54k2FRz9MxLHwei5EU
          source_id: s_jE5WyofzuDfYyg5MoQHU1H
          stance: supports
          locator: CBDB:11391
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（11391）
          source: &a1
            id: s_jE5WyofzuDfYyg5MoQHU1H
            source_type: api_record
            title: 中国历代人物传记资料库：王邁（CBDB 11391）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=11391&o=json
            external_identifier: CBDB:11391
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.570Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_zCkY7k3vRbTCLpqfzCZ1WN
        subject_person_id: p_4yQoFi8vwCZyhYQeroPAEd
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1185年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aptoAoVG5yYwu2ugVAsr5k
          claim_id: c_zCkY7k3vRbTCLpqfzCZ1WN
          source_id: s_jE5WyofzuDfYyg5MoQHU1H
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_EMt796bnw5snL4ut6t7n5H
        subject_person_id: p_4yQoFi8vwCZyhYQeroPAEd
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1248年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vCxFnQsfJW5o6D1VLE6XF4
          claim_id: c_EMt796bnw5snL4ut6t7n5H
          source_id: s_jE5WyofzuDfYyg5MoQHU1H
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
        id: c_eeqGCp7sz33Yd1e3YDsFi8
        subject_person_id: p_4yQoFi8vwCZyhYQeroPAEd
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
        - id: cs_4Pjhkc6oPtk3KJpHhgtVH8
          claim_id: c_eeqGCp7sz33Yd1e3YDsFi8
          source_id: s_jE5WyofzuDfYyg5MoQHU1H
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

# 王邁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王邁 | accepted |
| birth.date | 1185年 | accepted |
| death.date | 1248年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王邁（CBDB 11391）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=11391&o=json)
