---
schema: wang-person/v1
id: p_ZEJD4GeHuakT9KGYa2Fo6D
status: active
merged_into: null
display_name: 王偡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_q1hHETRtoZNCL8D57TF1gj
        subject_person_id: p_ZEJD4GeHuakT9KGYa2Fo6D
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王偡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KgEkZRtjuThnc9CkbfkMUP
          claim_id: c_q1hHETRtoZNCL8D57TF1gj
          source_id: s_wErhKzgMQFFCKffT3NJ5yq
          stance: supports
          locator: CBDB:250190
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（250190）
          source: &a1
            id: s_wErhKzgMQFFCKffT3NJ5yq
            source_type: api_record
            title: 中国历代人物传记资料库：王偡（CBDB 250190）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250190&o=json
            external_identifier: CBDB:250190
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.212Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_A8SKTymDwcShxHcHGAAJc3
        subject_person_id: p_ZEJD4GeHuakT9KGYa2Fo6D
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王偡，明人物。成化十一年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 250190）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kkTK4coAR1zmhJPqaWLuID
          claim_id: c_A8SKTymDwcShxHcHGAAJc3
          source_id: s_wErhKzgMQFFCKffT3NJ5yq
          stance: supports
          locator: CBDB:250190
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王偡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王偡 | accepted |
| bio.summary | 王偡，明人物。成化十一年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 250190） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王偡（CBDB 250190）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250190&o=json)
