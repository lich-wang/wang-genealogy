---
schema: wang-person/v1
id: p_h6AzGZfURnJMZLqM8Pub53
status: active
merged_into: null
display_name: 王震
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8B7PyzfPCZRvXHU2Y93f5N
        subject_person_id: p_h6AzGZfURnJMZLqM8Pub53
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王震
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JB4bQGAE1Qk8fvXjEzxKRs
          claim_id: c_8B7PyzfPCZRvXHU2Y93f5N
          source_id: s_oCfJb2aReMkb9ffqJ2JP93
          stance: supports
          locator: CBDB:37853
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37853）
          source: &a1
            id: s_oCfJb2aReMkb9ffqJ2JP93
            source_type: api_record
            title: 中国历代人物传记资料库：王震（CBDB 37853）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37853&o=json
            external_identifier: CBDB:37853
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.272Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_EJHg6VPs1uExVzqBrVjRV5
        subject_person_id: p_h6AzGZfURnJMZLqM8Pub53
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1079年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T2moMoEM2CznU2DJFi7E5c
          claim_id: c_EJHg6VPs1uExVzqBrVjRV5
          source_id: s_oCfJb2aReMkb9ffqJ2JP93
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
        id: c_sPE3FvTLWDJsRGU2j8Zntu
        subject_person_id: p_h6AzGZfURnJMZLqM8Pub53
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1146年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wYrvFGQCehU4MWLzx5Kqtp
          claim_id: c_sPE3FvTLWDJsRGU2j8Zntu
          source_id: s_oCfJb2aReMkb9ffqJ2JP93
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
        id: c_R5ALpHHW86Mb6yNVTZiLch
        subject_person_id: p_h6AzGZfURnJMZLqM8Pub53
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王震（1079年—1146年），宋人物。籍贯開封府，入仕學校: 上舍及第，曾任左朝奉大夫、司法參軍、縣丞。（中国历代人物传记资料库 CBDB 37853）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hdDp85URDD36T3eIfKJiNk
          claim_id: c_R5ALpHHW86Mb6yNVTZiLch
          source_id: s_oCfJb2aReMkb9ffqJ2JP93
          stance: supports
          locator: CBDB:37853
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

# 王震

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王震 | accepted |
| birth.date | 1079年 | accepted |
| death.date | 1146年 | accepted |
| bio.summary | 王震（1079年—1146年），宋人物。籍贯開封府，入仕學校: 上舍及第，曾任左朝奉大夫、司法參軍、縣丞。（中国历代人物传记资料库 CBDB 37853） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王震（CBDB 37853）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37853&o=json)
