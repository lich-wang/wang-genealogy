---
schema: wang-person/v1
id: p_QteW8buGGKvKrPPyBxj2xk
status: active
merged_into: null
display_name: 盧觀
revision: 1
cbdb_id: 33401
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mvONKW1Bc7vjJlitkw8HYH
        subject_person_id: p_QteW8buGGKvKrPPyBxj2xk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 盧觀
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NFjXP9OjPVt6uyKGAoiWwq
          claim_id: c_mvONKW1Bc7vjJlitkw8HYH
          source_id: s_4SuRm41IzZgQTcvONoWWw5
          stance: supports
          locator: CBDB:33401
          quotation: null
          interpretation_note: CBDB 明确记录的王蕙配偶
          source: &a1
            id: s_4SuRm41IzZgQTcvONoWWw5
            source_type: api_record
            title: 中国历代人物传记资料库：盧觀（CBDB 33401）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33401&o=json
            external_identifier: CBDB:33401
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
        id: c_PaUccbJ1Ir0VV_WPfAzkzy
        subject_person_id: p_Y5F3tYJsNVWyLBKbUcZ8za
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_QteW8buGGKvKrPPyBxj2xk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XSpe9RWG8j3Fgj-mPVGZTN
          claim_id: c_PaUccbJ1Ir0VV_WPfAzkzy
          source_id: s_4SuRm41IzZgQTcvONoWWw5
          stance: supports
          locator: CBDB 双向互证（丈夫 盧觀）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Y5F3tYJsNVWyLBKbUcZ8za
        status: active
        display_name: 王蕙
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 盧觀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 盧觀 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_Y5F3tYJsNVWyLBKbUcZ8za | 王蕙 | accepted |

## 外部来源

- [中国历代人物传记资料库：盧觀（CBDB 33401）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33401&o=json)
