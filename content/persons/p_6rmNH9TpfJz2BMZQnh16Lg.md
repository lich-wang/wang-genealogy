---
schema: wang-person/v1
id: p_6rmNH9TpfJz2BMZQnh16Lg
status: active
merged_into: null
display_name: 王緩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GP8L4KkQVgk8tHbXwe8Rrh
        subject_person_id: p_6rmNH9TpfJz2BMZQnh16Lg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王緩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MMVf87csryCqfdKFJCpG9W
          claim_id: c_GP8L4KkQVgk8tHbXwe8Rrh
          source_id: s_wsPDKQg3ZTL9CTtzZuD5VL
          stance: supports
          locator: CBDB:141647
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（141647）
          source: &a1
            id: s_wsPDKQg3ZTL9CTtzZuD5VL
            source_type: api_record
            title: 中国历代人物传记资料库：王緩（CBDB 141647）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141647&o=json
            external_identifier: CBDB:141647
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.562Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_SAsigtHA8k5eXAExg9b6W6
        subject_person_id: p_6rmNH9TpfJz2BMZQnh16Lg
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 807年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UG5Etit21ThqB4Yw4bMW66
          claim_id: c_SAsigtHA8k5eXAExg9b6W6
          source_id: s_wsPDKQg3ZTL9CTtzZuD5VL
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
        id: c_aaFWwd8Cn8oK9FogcgDAFf
        subject_person_id: p_6rmNH9TpfJz2BMZQnh16Lg
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 833年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yNgy7jYc4LQC3CF7NpCbg9
          claim_id: c_aaFWwd8Cn8oK9FogcgDAFf
          source_id: s_wsPDKQg3ZTL9CTtzZuD5VL
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
        id: c_dV134pJJhTXPrDo92g3aXs
        subject_person_id: p_6rmNH9TpfJz2BMZQnh16Lg
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
        - id: cs_PU7Q8FP4yCGa1TSdRvZMJc
          claim_id: c_dV134pJJhTXPrDo92g3aXs
          source_id: s_wsPDKQg3ZTL9CTtzZuD5VL
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

# 王緩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王緩 | accepted |
| birth.date | 807年 | accepted |
| death.date | 833年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王緩（CBDB 141647）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141647&o=json)
