---
schema: wang-person/v1
id: p_GKpKRoKYCpYpZoj1iydyGj
status: active
merged_into: null
display_name: 王敬蕘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_886pr1XifHW6EezGQKvqz2
        subject_person_id: p_GKpKRoKYCpYpZoj1iydyGj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬蕘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NrXkRGdXpyhQjz91Ko8CNb
          claim_id: c_886pr1XifHW6EezGQKvqz2
          source_id: s_914WWy7MwKCEhF1XtLKERo
          stance: supports
          locator: CBDB:379072
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（379072）
          source: &a1
            id: s_914WWy7MwKCEhF1XtLKERo
            source_type: api_record
            title: 中国历代人物传记资料库：王敬蕘（CBDB 379072）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=379072&o=json
            external_identifier: CBDB:379072
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.677Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vi332nk5Lc5WfPXAMp4LFu
        subject_person_id: p_GKpKRoKYCpYpZoj1iydyGj
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
        - id: cs_vkaiDkFxLmkKpiAJn73Nmh
          claim_id: c_vi332nk5Lc5WfPXAMp4LFu
          source_id: s_914WWy7MwKCEhF1XtLKERo
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

# 王敬蕘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敬蕘 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王敬蕘（CBDB 379072）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=379072&o=json)
