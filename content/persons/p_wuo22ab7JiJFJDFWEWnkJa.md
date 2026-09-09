---
schema: wang-person/v1
id: p_wuo22ab7JiJFJDFWEWnkJa
status: active
merged_into: null
display_name: 王宰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NJB4DSBKN6cLhkfY88PPFA
        subject_person_id: p_wuo22ab7JiJFJDFWEWnkJa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1Dy8sQagrFdw1fYMAuUdsy
          claim_id: c_NJB4DSBKN6cLhkfY88PPFA
          source_id: s_UGR84EimhiKhkrFQduoZjp
          stance: supports
          locator: CBDB:377401
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（377401）
          source: &a1
            id: s_UGR84EimhiKhkrFQduoZjp
            source_type: api_record
            title: 中国历代人物传记资料库：王宰（CBDB 377401）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=377401&o=json
            external_identifier: CBDB:377401
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.623Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sA4PPb8x99EGeKJkLUHLAy
        subject_person_id: p_wuo22ab7JiJFJDFWEWnkJa
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
        - id: cs_JEruowWvX9gEDq2ZJKocoC
          claim_id: c_sA4PPb8x99EGeKJkLUHLAy
          source_id: s_UGR84EimhiKhkrFQduoZjp
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

# 王宰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宰 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宰（CBDB 377401）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=377401&o=json)
