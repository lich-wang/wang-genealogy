---
schema: wang-person/v1
id: p_q1HFE8oSn85haUzRcMpjwN
status: active
merged_into: null
display_name: 王履
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Mc65riSpAZCvMGqRfKaMQh
        subject_person_id: p_q1HFE8oSn85haUzRcMpjwN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王履
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ur6MFfESi9R5hX2ihGNqVj
          claim_id: c_Mc65riSpAZCvMGqRfKaMQh
          source_id: s_xMqXFcxQYiHz4WZjV9omVV
          stance: supports
          locator: CBDB:25089
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（25089）
          source: &a1
            id: s_xMqXFcxQYiHz4WZjV9omVV
            source_type: api_record
            title: 中国历代人物传记资料库：王履（CBDB 25089）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25089&o=json
            external_identifier: CBDB:25089
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.907Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4K7kcjfhK7j2KJQQwbM3Nm
        subject_person_id: p_q1HFE8oSn85haUzRcMpjwN
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1079年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jQyw1yfbJqo51muDoUVKhp
          claim_id: c_4K7kcjfhK7j2KJQQwbM3Nm
          source_id: s_xMqXFcxQYiHz4WZjV9omVV
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
        id: c_mRc2rbg5Znde8JaPomupdu
        subject_person_id: p_q1HFE8oSn85haUzRcMpjwN
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1126年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ANRJkLqs7mvYDP5a344NWm
          claim_id: c_mRc2rbg5Znde8JaPomupdu
          source_id: s_xMqXFcxQYiHz4WZjV9omVV
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
        id: c_9d1YwjzzzMWF3TTeqBsYm3
        subject_person_id: p_q1HFE8oSn85haUzRcMpjwN
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
        - id: cs_VNsNAnKwZ8c8ajMKnHfXiZ
          claim_id: c_9d1YwjzzzMWF3TTeqBsYm3
          source_id: s_xMqXFcxQYiHz4WZjV9omVV
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

# 王履

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王履 | accepted |
| birth.date | 1079年 | accepted |
| death.date | 1126年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王履（CBDB 25089）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25089&o=json)
