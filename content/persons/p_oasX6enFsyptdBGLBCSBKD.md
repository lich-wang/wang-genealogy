---
schema: wang-person/v1
id: p_oasX6enFsyptdBGLBCSBKD
status: active
merged_into: null
display_name: 王定保
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sAncfJRH6Doo9s7EP93eQP
        subject_person_id: p_oasX6enFsyptdBGLBCSBKD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王定保
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cELfPEvFe9uJ4oYuJ6QjPn
          claim_id: c_sAncfJRH6Doo9s7EP93eQP
          source_id: s_7LMJb12ikN8kKQ4ovzGwqN
          stance: supports
          locator: CBDB:175918
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175918）
          source: &a1
            id: s_7LMJb12ikN8kKQ4ovzGwqN
            source_type: api_record
            title: 中国历代人物传记资料库：王定保（CBDB 175918）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175918&o=json
            external_identifier: CBDB:175918
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.197Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_veeTNM59jc43GsW2gGgdL3
        subject_person_id: p_oasX6enFsyptdBGLBCSBKD
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 922年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F7i985gTe5pq23sBhZH637
          claim_id: c_veeTNM59jc43GsW2gGgdL3
          source_id: s_7LMJb12ikN8kKQ4ovzGwqN
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
        id: c_YxbH5PML7HibTs4tsjrs6M
        subject_person_id: p_oasX6enFsyptdBGLBCSBKD
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
        - id: cs_VgJvMA4uytQFLEzDQeCJN1
          claim_id: c_YxbH5PML7HibTs4tsjrs6M
          source_id: s_7LMJb12ikN8kKQ4ovzGwqN
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

# 王定保

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王定保 | accepted |
| death.date | 922年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王定保（CBDB 175918）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175918&o=json)
