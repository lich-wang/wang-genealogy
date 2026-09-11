---
schema: wang-person/v1
id: p_rkd5c1LBcXarYgBwhcogvr
status: active
merged_into: null
display_name: 王源
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8CWAVyGXsj9GNJVeh2ekW7
        subject_person_id: p_rkd5c1LBcXarYgBwhcogvr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王源
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_52jdP25ZjWJX6yuLgxjnGc
          claim_id: c_8CWAVyGXsj9GNJVeh2ekW7
          source_id: s_FXPLfXHDYgGZafK5Rp2KCf
          stance: supports
          locator: CBDB:126739
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126739）
          source: &a1
            id: s_FXPLfXHDYgGZafK5Rp2KCf
            source_type: api_record
            title: 中国历代人物传记资料库：王源（CBDB 126739）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126739&o=json
            external_identifier: CBDB:126739
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.160Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_AbGN8BUqWJq86FZjn69ud4
        subject_person_id: p_rkd5c1LBcXarYgBwhcogvr
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1458年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vk4fPH38pCXP6hHieqMSeK
          claim_id: c_AbGN8BUqWJq86FZjn69ud4
          source_id: s_FXPLfXHDYgGZafK5Rp2KCf
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
        id: c_ieY8yicRbW8foq5fAUXGY1
        subject_person_id: p_rkd5c1LBcXarYgBwhcogvr
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1524年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Vfk2HDag8VeLw2cuSxAwoJ
          claim_id: c_ieY8yicRbW8foq5fAUXGY1
          source_id: s_FXPLfXHDYgGZafK5Rp2KCf
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
        id: c_kB7Z8d3R4krbv1M6NZoCT4
        subject_person_id: p_rkd5c1LBcXarYgBwhcogvr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王源（1458年—1524年），明人物。籍贯上元，曾任府同知。（中国历代人物传记资料库 CBDB 126739）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5LsMMME9lV0PymM20o3CAL
          claim_id: c_kB7Z8d3R4krbv1M6NZoCT4
          source_id: s_FXPLfXHDYgGZafK5Rp2KCf
          stance: supports
          locator: CBDB:126739
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

# 王源

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王源 | accepted |
| birth.date | 1458年 | accepted |
| death.date | 1524年 | accepted |
| bio.summary | 王源（1458年—1524年），明人物。籍贯上元，曾任府同知。（中国历代人物传记资料库 CBDB 126739） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王源（CBDB 126739）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126739&o=json)
