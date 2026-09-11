---
schema: wang-person/v1
id: p_Y5F3tYJsNVWyLBKbUcZ8za
status: active
merged_into: null
display_name: 王蕙
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nY7BH22sDYMWuFJWDXJGyU
        subject_person_id: p_Y5F3tYJsNVWyLBKbUcZ8za
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蕙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gJD7jFgcNMZ9QQuJjp82Ay
          claim_id: c_nY7BH22sDYMWuFJWDXJGyU
          source_id: s_q6mNqFRBT23YJCrXgjasxK
          stance: supports
          locator: CBDB:33403
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（33403）
          source: &a1
            id: s_q6mNqFRBT23YJCrXgjasxK
            source_type: api_record
            title: 中国历代人物传记资料库：王蕙（CBDB 33403）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33403&o=json
            external_identifier: CBDB:33403
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.068Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_AsNp6sKAb8FUMdRvdJ6EiW
        subject_person_id: p_Y5F3tYJsNVWyLBKbUcZ8za
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1305年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DKiD11qXQccJm67djRLYfd
          claim_id: c_AsNp6sKAb8FUMdRvdJ6EiW
          source_id: s_q6mNqFRBT23YJCrXgjasxK
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
        id: c_geNwWa9y7ZYjRntxkWbEGr
        subject_person_id: p_Y5F3tYJsNVWyLBKbUcZ8za
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1367年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bkaZtJq9JhVx5YmfKmxB49
          claim_id: c_geNwWa9y7ZYjRntxkWbEGr
          source_id: s_q6mNqFRBT23YJCrXgjasxK
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
        id: c_vvYAfUPGxZYQH6tKGp2a6T
        subject_person_id: p_Y5F3tYJsNVWyLBKbUcZ8za
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蕙（1305年—1367年），元人物。籍贯義烏，入仕封贈。（中国历代人物传记资料库 CBDB 33403）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oasBsnMkWoIlk6PlgMMG9E
          claim_id: c_vvYAfUPGxZYQH6tKGp2a6T
          source_id: s_q6mNqFRBT23YJCrXgjasxK
          stance: supports
          locator: CBDB:33403
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
          source:
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
      object_person:
        id: p_QteW8buGGKvKrPPyBxj2xk
        status: active
        display_name: 盧觀
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王蕙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蕙 | accepted |
| birth.date | 1305年 | accepted |
| death.date | 1367年 | accepted |
| bio.summary | 王蕙（1305年—1367年），元人物。籍贯義烏，入仕封贈。（中国历代人物传记资料库 CBDB 33403） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_QteW8buGGKvKrPPyBxj2xk | 盧觀 | accepted |

## 外部来源

- [中国历代人物传记资料库：盧觀（CBDB 33401）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33401&o=json)
- [中国历代人物传记资料库：王蕙（CBDB 33403）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33403&o=json)
