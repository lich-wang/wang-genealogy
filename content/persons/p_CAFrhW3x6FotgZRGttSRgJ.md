---
schema: wang-person/v1
id: p_CAFrhW3x6FotgZRGttSRgJ
status: active
merged_into: null
display_name: 王侃
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WJZ3UqbAV9HHHDYfr33dyG
        subject_person_id: p_CAFrhW3x6FotgZRGttSRgJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王侃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nn1FubtYvU1teu5Rn1bz3b
          claim_id: c_WJZ3UqbAV9HHHDYfr33dyG
          source_id: s_AwMDbecN5CpR3TJgkuVKQd
          stance: supports
          locator: CBDB:71106
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71106）
          source: &a1
            id: s_AwMDbecN5CpR3TJgkuVKQd
            source_type: api_record
            title: 中国历代人物传记资料库：王侃（CBDB 71106）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71106&o=json
            external_identifier: CBDB:71106
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.377Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_pxARpJBptrdAdtcLxFWXU8
        subject_person_id: p_CAFrhW3x6FotgZRGttSRgJ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1796年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9Cx2vg9Xgrsv49eX73Z5bS
          claim_id: c_pxARpJBptrdAdtcLxFWXU8
          source_id: s_AwMDbecN5CpR3TJgkuVKQd
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ngK56GsVNucL4My1NKmHfK
        subject_person_id: p_CAFrhW3x6FotgZRGttSRgJ
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
        - id: cs_3fJ1t5Y1izJz73MYjfEQ82
          claim_id: c_ngK56GsVNucL4My1NKmHfK
          source_id: s_AwMDbecN5CpR3TJgkuVKQd
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

# 王侃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王侃 | accepted |
| birth.date | 1796年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王侃（CBDB 71106）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71106&o=json)
