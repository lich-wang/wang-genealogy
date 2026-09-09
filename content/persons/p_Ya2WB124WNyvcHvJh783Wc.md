---
schema: wang-person/v1
id: p_Ya2WB124WNyvcHvJh783Wc
status: active
merged_into: null
display_name: 王化光
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JvBQ1BJDL2puySqtft3JXr
        subject_person_id: p_Ya2WB124WNyvcHvJh783Wc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王化光
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wQbSBKNquqEpmX6TB3S5DS
          claim_id: c_JvBQ1BJDL2puySqtft3JXr
          source_id: s_L6BYmrVGPC62JVm17zZtpf
          stance: supports
          locator: CBDB:71406
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71406）
          source: &a1
            id: s_L6BYmrVGPC62JVm17zZtpf
            source_type: api_record
            title: 中国历代人物传记资料库：王化光（CBDB 71406）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71406&o=json
            external_identifier: CBDB:71406
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.647Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Tukv8p6kQ4Kb9LY8zEmSvV
        subject_person_id: p_Ya2WB124WNyvcHvJh783Wc
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1833年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_njwJYQ81nrHY14p8HBxNex
          claim_id: c_Tukv8p6kQ4Kb9LY8zEmSvV
          source_id: s_L6BYmrVGPC62JVm17zZtpf
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
        id: c_HbyVxrAp7HsiDzAq8nTevN
        subject_person_id: p_Ya2WB124WNyvcHvJh783Wc
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
        - id: cs_FbEXhh4KQtid75g11rWUR7
          claim_id: c_HbyVxrAp7HsiDzAq8nTevN
          source_id: s_L6BYmrVGPC62JVm17zZtpf
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

# 王化光

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王化光 | accepted |
| birth.date | 1833年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王化光（CBDB 71406）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71406&o=json)
