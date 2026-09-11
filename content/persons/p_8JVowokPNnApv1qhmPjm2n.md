---
schema: wang-person/v1
id: p_8JVowokPNnApv1qhmPjm2n
status: active
merged_into: null
display_name: 王嬌嬌
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jVcQ2y7JhYuexzh3uD1KeG
        subject_person_id: p_8JVowokPNnApv1qhmPjm2n
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嬌嬌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_61nvAeuHoDg6QKU4WHu5bR
          claim_id: c_jVcQ2y7JhYuexzh3uD1KeG
          source_id: s_qeVU48z3TDVjrNPKBkAKsC
          stance: supports
          locator: CBDB:141990
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（141990）
          source: &a1
            id: s_qeVU48z3TDVjrNPKBkAKsC
            source_type: api_record
            title: 中国历代人物传记资料库：王嬌嬌（CBDB 141990）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141990&o=json
            external_identifier: CBDB:141990
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.208Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_DHtxMoPVaoNvLswjBxHA79
        subject_person_id: p_8JVowokPNnApv1qhmPjm2n
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 847年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n3xVZC2yVDVGWPKLCP4vNQ
          claim_id: c_DHtxMoPVaoNvLswjBxHA79
          source_id: s_qeVU48z3TDVjrNPKBkAKsC
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
        id: c_PHTj37Q9uC39D9KP17WKM5
        subject_person_id: p_8JVowokPNnApv1qhmPjm2n
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 864年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8HuS3GoPym43VwCV33yZmF
          claim_id: c_PHTj37Q9uC39D9KP17WKM5
          source_id: s_qeVU48z3TDVjrNPKBkAKsC
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
        id: c_5JGPLgYRovrGnuPq1HmvDA
        subject_person_id: p_8JVowokPNnApv1qhmPjm2n
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
        - id: cs_4xfB9PqJBnT112MkYx4BaQ
          claim_id: c_5JGPLgYRovrGnuPq1HmvDA
          source_id: s_qeVU48z3TDVjrNPKBkAKsC
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
  spouses:
    - claim:
        id: c_hn5dFqUKrZgb4Cm_gRub5H
        subject_person_id: p_8JVowokPNnApv1qhmPjm2n
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_enHjPjEWpkMSsUjBKXcUAJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ov9qcbz_6X0ii-piDObN3K
          claim_id: c_hn5dFqUKrZgb4Cm_gRub5H
          source_id: s_F4rQ1acaZQ2ft0ZtX0SDzy
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xiantong 38：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_F4rQ1acaZQ2ft0ZtX0SDzy
            source_type: api_record
            title: 中国历代人物传记资料库：楊籌（CBDB 160411）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160411&o=json
            external_identifier: CBDB:160411
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_enHjPjEWpkMSsUjBKXcUAJ
        status: active
        display_name: 楊籌
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王嬌嬌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嬌嬌 | accepted |
| birth.date | 847年 | accepted |
| death.date | 864年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_enHjPjEWpkMSsUjBKXcUAJ | 楊籌 | accepted |

## 外部来源

- [中国历代人物传记资料库：王嬌嬌（CBDB 141990）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141990&o=json)
- [中国历代人物传记资料库：楊籌（CBDB 160411）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160411&o=json)
