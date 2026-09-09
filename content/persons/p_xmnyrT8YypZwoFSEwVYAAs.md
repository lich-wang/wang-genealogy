---
schema: wang-person/v1
id: p_xmnyrT8YypZwoFSEwVYAAs
status: active
merged_into: null
display_name: 王江
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rKkeYE6kwqJ9GAWBzwrY1c
        subject_person_id: p_xmnyrT8YypZwoFSEwVYAAs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王江
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CGLiqq3gdTm8dqwnRJzyAM
          claim_id: c_rKkeYE6kwqJ9GAWBzwrY1c
          source_id: s_rgjAshy85dwpY8KT4fjQ8F
          stance: supports
          locator: CBDB:71062
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71062）
          source: &a1
            id: s_rgjAshy85dwpY8KT4fjQ8F
            source_type: api_record
            title: 中国历代人物传记资料库：王江（CBDB 71062）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71062&o=json
            external_identifier: CBDB:71062
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.328Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_gvjnV9qBWF3Pb5y1pkeS1G
        subject_person_id: p_xmnyrT8YypZwoFSEwVYAAs
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1655年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3yBDj27aCKw88aPcZtihLU
          claim_id: c_gvjnV9qBWF3Pb5y1pkeS1G
          source_id: s_rgjAshy85dwpY8KT4fjQ8F
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
        id: c_okMJGDtdeaDhWR64jzpcMW
        subject_person_id: p_xmnyrT8YypZwoFSEwVYAAs
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
        - id: cs_BABvE426RiF5ZRvVKBsFqu
          claim_id: c_okMJGDtdeaDhWR64jzpcMW
          source_id: s_rgjAshy85dwpY8KT4fjQ8F
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

# 王江

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王江 | accepted |
| death.date | 1655年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王江（CBDB 71062）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71062&o=json)
