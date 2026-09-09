---
schema: wang-person/v1
id: p_y879UiTRBKZaXHHY531ywf
status: active
merged_into: null
display_name: 王价
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rPchucMdkLjX5i36Mpn6Fn
        subject_person_id: p_y879UiTRBKZaXHHY531ywf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王价
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mBKeN8ATn1AGNLcgaaU84g
          claim_id: c_rPchucMdkLjX5i36Mpn6Fn
          source_id: s_DzXG3LXn36MGy42WhJa3z1
          stance: supports
          locator: CBDB:206196
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（206196）
          source: &a1
            id: s_DzXG3LXn36MGy42WhJa3z1
            source_type: api_record
            title: 中国历代人物传记资料库：王价（CBDB 206196）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206196&o=json
            external_identifier: CBDB:206196
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.889Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_eZGpTm68nQhvewb9JxYYT9
        subject_person_id: p_y879UiTRBKZaXHHY531ywf
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1542年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VHhqCsi1cHsVGz9bB35Raf
          claim_id: c_eZGpTm68nQhvewb9JxYYT9
          source_id: s_DzXG3LXn36MGy42WhJa3z1
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eGvpvXbqNuUxEN3APDDViV
        subject_person_id: p_y879UiTRBKZaXHHY531ywf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DcXAba5w4BDHQkSmfFVrRC
          claim_id: c_eGvpvXbqNuUxEN3APDDViV
          source_id: s_DzXG3LXn36MGy42WhJa3z1
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

# 王价

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王价 | accepted |
| birth.date | 1542年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王价（CBDB 206196）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206196&o=json)
