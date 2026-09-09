---
schema: wang-person/v1
id: p_y4dEAWFG1Ks4D9y8rZbN8B
status: active
merged_into: null
display_name: 王桂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZfUU4RYxoZgCVd3gkvSr9y
        subject_person_id: p_y4dEAWFG1Ks4D9y8rZbN8B
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7BwGzXAdBpgwJQU3DpoAbv
          claim_id: c_ZfUU4RYxoZgCVd3gkvSr9y
          source_id: s_NbdhLQULyZuVGKiwEcJgjm
          stance: supports
          locator: CBDB:71155
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71155）
          source: &a1
            id: s_NbdhLQULyZuVGKiwEcJgjm
            source_type: api_record
            title: 中国历代人物传记资料库：王桂（CBDB 71155）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71155&o=json
            external_identifier: CBDB:71155
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.438Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_7Y34SjsXDWM74tDNRADWd6
        subject_person_id: p_y4dEAWFG1Ks4D9y8rZbN8B
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1688年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fPSYsw7iaDzzNJ1fHaoNar
          claim_id: c_7Y34SjsXDWM74tDNRADWd6
          source_id: s_NbdhLQULyZuVGKiwEcJgjm
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
        id: c_Ch12W64R6i5jsdihyHNvoc
        subject_person_id: p_y4dEAWFG1Ks4D9y8rZbN8B
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1766年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4xD586JiA9i9TZ8NLjjRp5
          claim_id: c_Ch12W64R6i5jsdihyHNvoc
          source_id: s_NbdhLQULyZuVGKiwEcJgjm
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
        id: c_4Qq27aDU8NCoWTD93nctYa
        subject_person_id: p_y4dEAWFG1Ks4D9y8rZbN8B
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
        - id: cs_ydMDdTAwbDk1SRCMSELNAW
          claim_id: c_4Qq27aDU8NCoWTD93nctYa
          source_id: s_NbdhLQULyZuVGKiwEcJgjm
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

# 王桂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王桂 | accepted |
| birth.date | 1688年 | accepted |
| death.date | 1766年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王桂（CBDB 71155）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71155&o=json)
