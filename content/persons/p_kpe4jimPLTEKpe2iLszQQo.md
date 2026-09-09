---
schema: wang-person/v1
id: p_kpe4jimPLTEKpe2iLszQQo
status: active
merged_into: null
display_name: 王宗佶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AgyUbZLsGnQ6HPPgT4h4QU
        subject_person_id: p_kpe4jimPLTEKpe2iLszQQo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗佶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Qh7pJo1SJkpKpVeg8e9otx
          claim_id: c_AgyUbZLsGnQ6HPPgT4h4QU
          source_id: s_kPVdh8DiaFHLEEPTcskH5g
          stance: supports
          locator: CBDB:383487
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（383487）
          source: &a1
            id: s_kPVdh8DiaFHLEEPTcskH5g
            source_type: api_record
            title: 中国历代人物传记资料库：王宗佶（CBDB 383487）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=383487&o=json
            external_identifier: CBDB:383487
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.841Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Fjz1E93tVFC4PcK2M9CTNN
        subject_person_id: p_kpe4jimPLTEKpe2iLszQQo
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
        - id: cs_b6ZUjNMBGK9ZJdifk4HtLQ
          claim_id: c_Fjz1E93tVFC4PcK2M9CTNN
          source_id: s_kPVdh8DiaFHLEEPTcskH5g
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

# 王宗佶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗佶 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗佶（CBDB 383487）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=383487&o=json)
