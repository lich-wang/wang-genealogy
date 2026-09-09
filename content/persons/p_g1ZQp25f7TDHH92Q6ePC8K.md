---
schema: wang-person/v1
id: p_g1ZQp25f7TDHH92Q6ePC8K
status: active
merged_into: null
display_name: 王應詔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tyW5suNHkLGY2MXzH9CMJk
        subject_person_id: p_g1ZQp25f7TDHH92Q6ePC8K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應詔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gmQDC89MKFpcPcj9H6txfW
          claim_id: c_tyW5suNHkLGY2MXzH9CMJk
          source_id: s_KMkQAVDmGwtdEAC6sGbnTv
          stance: supports
          locator: CBDB:202740
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202740）
          source: &a1
            id: s_KMkQAVDmGwtdEAC6sGbnTv
            source_type: api_record
            title: 中国历代人物传记资料库：王應詔（CBDB 202740）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202740&o=json
            external_identifier: CBDB:202740
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.751Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_GmMUqHXtmkyZg7m7nGFVch
        subject_person_id: p_g1ZQp25f7TDHH92Q6ePC8K
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1490年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z8M8FNJ8kjedt44K3L3LtK
          claim_id: c_GmMUqHXtmkyZg7m7nGFVch
          source_id: s_KMkQAVDmGwtdEAC6sGbnTv
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
        id: c_rdXK1MWVsxuFa3Rdgz6pGS
        subject_person_id: p_g1ZQp25f7TDHH92Q6ePC8K
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
        - id: cs_BaEe3v7pUhWK3yBXSuUGRk
          claim_id: c_rdXK1MWVsxuFa3Rdgz6pGS
          source_id: s_KMkQAVDmGwtdEAC6sGbnTv
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

# 王應詔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應詔 | accepted |
| birth.date | 1490年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王應詔（CBDB 202740）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202740&o=json)
