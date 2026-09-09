---
schema: wang-person/v1
id: p_BSvRMS3VKTbeQ3PpPXoMkT
status: active
merged_into: null
display_name: 王淙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xngSF9Ywf5rUMAPapc9CLs
        subject_person_id: p_BSvRMS3VKTbeQ3PpPXoMkT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FkTUkN6GFv1GwRBQt38oKp
          claim_id: c_xngSF9Ywf5rUMAPapc9CLs
          source_id: s_e62uELS3ZAyVLYhCLA24CQ
          stance: supports
          locator: CBDB:175710
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175710）
          source: &a1
            id: s_e62uELS3ZAyVLYhCLA24CQ
            source_type: api_record
            title: 中国历代人物传记资料库：王淙（CBDB 175710）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175710&o=json
            external_identifier: CBDB:175710
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.071Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_corxWgcPdwzCerKcLrR1HP
        subject_person_id: p_BSvRMS3VKTbeQ3PpPXoMkT
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 880年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c8ovrtFJPPXxhQQgmeZUQX
          claim_id: c_corxWgcPdwzCerKcLrR1HP
          source_id: s_e62uELS3ZAyVLYhCLA24CQ
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
        id: c_BWF9LAHUG9hkPmf978g8TM
        subject_person_id: p_BSvRMS3VKTbeQ3PpPXoMkT
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
        - id: cs_rHrfC3L512TuYwgrAoEiQe
          claim_id: c_BWF9LAHUG9hkPmf978g8TM
          source_id: s_e62uELS3ZAyVLYhCLA24CQ
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

# 王淙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淙 | accepted |
| death.date | 880年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王淙（CBDB 175710）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175710&o=json)
