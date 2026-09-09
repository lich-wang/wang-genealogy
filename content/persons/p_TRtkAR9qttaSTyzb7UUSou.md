---
schema: wang-person/v1
id: p_TRtkAR9qttaSTyzb7UUSou
status: active
merged_into: null
display_name: 王建
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RFvPPfd7J8E3os7iHhAGkP
        subject_person_id: p_TRtkAR9qttaSTyzb7UUSou
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王建
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eJEDC8YHwN9GNY3GaCR3hk
          claim_id: c_RFvPPfd7J8E3os7iHhAGkP
          source_id: s_eTSWMkM9SWGe2B3DdCMGQ6
          stance: supports
          locator: CBDB:92047
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（92047）
          source: &a1
            id: s_eTSWMkM9SWGe2B3DdCMGQ6
            source_type: api_record
            title: 中国历代人物传记资料库：王建（CBDB 92047）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92047&o=json
            external_identifier: CBDB:92047
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.104Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_gdn9C7Azxjf6uHjPvspCuQ
        subject_person_id: p_TRtkAR9qttaSTyzb7UUSou
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 766年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4vmHyiR83zyE8sv1ExuiyP
          claim_id: c_gdn9C7Azxjf6uHjPvspCuQ
          source_id: s_eTSWMkM9SWGe2B3DdCMGQ6
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
        id: c_JhTc8QFwhPiNExdrZrPy3j
        subject_person_id: p_TRtkAR9qttaSTyzb7UUSou
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
        - id: cs_sLU8DmXtLHeS3H1D8K7j6G
          claim_id: c_JhTc8QFwhPiNExdrZrPy3j
          source_id: s_eTSWMkM9SWGe2B3DdCMGQ6
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

# 王建

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王建 | accepted |
| birth.date | 766年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王建（CBDB 92047）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92047&o=json)
