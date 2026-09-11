---
schema: wang-person/v1
id: p_A7zgUdKyG24bM3SwAFQ9iY
status: active
merged_into: null
display_name: 唐壽椿
revision: 1
cbdb_id: 56415
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LVgQm6HZ6FD1Ps6lNxUjFP
        subject_person_id: p_A7zgUdKyG24bM3SwAFQ9iY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 唐壽椿
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qh8F3H0nWBNgu1JDGS5zbd
          claim_id: c_LVgQm6HZ6FD1Ps6lNxUjFP
          source_id: s_7T8QLcG3KP8XqsJhCEj9Uy
          stance: supports
          locator: CBDB:56415
          quotation: null
          interpretation_note: CBDB 明确记录的王芬配偶
          source: &a1
            id: s_7T8QLcG3KP8XqsJhCEj9Uy
            source_type: api_record
            title: 中国历代人物传记资料库：唐壽椿（CBDB 56415）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56415&o=json
            external_identifier: CBDB:56415
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_5d7RrCdEio226tdHS4ZKqJ
        subject_person_id: p_LQSpaYuFABavSyUN99eFKH
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_A7zgUdKyG24bM3SwAFQ9iY
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dSUAg7F3fth-bPl3V3mpKI
          claim_id: c_5d7RrCdEio226tdHS4ZKqJ
          source_id: s_7T8QLcG3KP8XqsJhCEj9Uy
          stance: supports
          locator: CBDB 双向互证（丈夫 唐壽椿）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_LQSpaYuFABavSyUN99eFKH
        status: active
        display_name: 王芬
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 唐壽椿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 唐壽椿 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_LQSpaYuFABavSyUN99eFKH | 王芬 | accepted |

## 外部来源

- [中国历代人物传记资料库：唐壽椿（CBDB 56415）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56415&o=json)
