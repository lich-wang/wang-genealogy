---
schema: wang-person/v1
id: p_94CFdkqmXHUjSS752NU9u4
status: active
merged_into: null
display_name: 王德輔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jZnxUe8bVCt4XDt6Fkuccw
        subject_person_id: p_94CFdkqmXHUjSS752NU9u4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德輔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oYNdxLykKAkxqCBUdd6FZw
          claim_id: c_jZnxUe8bVCt4XDt6Fkuccw
          source_id: s_PEV6Zn57iwqxGnmLvw23Du
          stance: supports
          locator: CBDB:72194
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72194）
          source: &a1
            id: s_PEV6Zn57iwqxGnmLvw23Du
            source_type: api_record
            title: 中国历代人物传记资料库：王德輔（CBDB 72194）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72194&o=json
            external_identifier: CBDB:72194
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.046Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_zvsA4M7Ec4BJP4ggx2A2oy
        subject_person_id: p_94CFdkqmXHUjSS752NU9u4
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1804年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DkdgiAunZefa4T1a1mj5eQ
          claim_id: c_zvsA4M7Ec4BJP4ggx2A2oy
          source_id: s_PEV6Zn57iwqxGnmLvw23Du
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
        id: c_wrCpTW63nE96p1E2D81ixN
        subject_person_id: p_94CFdkqmXHUjSS752NU9u4
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1852年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1biMrmewYVHRtBkB3a1tYw
          claim_id: c_wrCpTW63nE96p1E2D81ixN
          source_id: s_PEV6Zn57iwqxGnmLvw23Du
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
        id: c_pfWEoz1NJLDXDw8EBfCzau
        subject_person_id: p_94CFdkqmXHUjSS752NU9u4
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
        - id: cs_aAVPbHUxtKbvsEVskF1h6C
          claim_id: c_pfWEoz1NJLDXDw8EBfCzau
          source_id: s_PEV6Zn57iwqxGnmLvw23Du
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

# 王德輔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德輔 | accepted |
| birth.date | 1804年 | accepted |
| death.date | 1852年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王德輔（CBDB 72194）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72194&o=json)
