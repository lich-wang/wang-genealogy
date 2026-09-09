---
schema: wang-person/v1
id: p_QLZ1gQm5JVE4bqAWW3HzpK
status: active
merged_into: null
display_name: 王傅之
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2Sr3tY4s3F3mQWs8NLud8U
        subject_person_id: p_QLZ1gQm5JVE4bqAWW3HzpK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傅之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MVC7M3eZCdCs7Zoo67C3DK
          claim_id: c_2Sr3tY4s3F3mQWs8NLud8U
          source_id: s_jHGJJ537qNDA3DWnFrFaGg
          stance: supports
          locator: CBDB:185565
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（185565）
          source: &a1
            id: s_jHGJJ537qNDA3DWnFrFaGg
            source_type: api_record
            title: 中国历代人物传记资料库：王傅之（CBDB 185565）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185565&o=json
            external_identifier: CBDB:185565
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.247Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_wZQDRF6u6SuBtu5WhzkL1Q
        subject_person_id: p_QLZ1gQm5JVE4bqAWW3HzpK
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 824年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SMcC4XrfsJ7ZgH9HCieUXo
          claim_id: c_wZQDRF6u6SuBtu5WhzkL1Q
          source_id: s_jHGJJ537qNDA3DWnFrFaGg
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
        id: c_7PhPQqQxh1qQvkZkYrfayQ
        subject_person_id: p_QLZ1gQm5JVE4bqAWW3HzpK
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
        - id: cs_vJG6cvC1sH84NyXB69M7DW
          claim_id: c_7PhPQqQxh1qQvkZkYrfayQ
          source_id: s_jHGJJ537qNDA3DWnFrFaGg
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

# 王傅之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王傅之 | accepted |
| death.date | 824年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王傅之（CBDB 185565）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185565&o=json)
