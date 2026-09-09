---
schema: wang-person/v1
id: p_CvEsXMQ6J7PST7ecUX2ULA
status: active
merged_into: null
display_name: 王繼忠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_21UFoULz5jNPM8UKH525hH
        subject_person_id: p_CvEsXMQ6J7PST7ecUX2ULA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fsjsXP9xsKoKWhZMyQ3BqB
          claim_id: c_21UFoULz5jNPM8UKH525hH
          source_id: s_KKBWBBUMc19iWURcA5NgkB
          stance: supports
          locator: CBDB:1779
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1779）
          source: &a1
            id: s_KKBWBBUMc19iWURcA5NgkB
            source_type: api_record
            title: 中国历代人物传记资料库：王繼忠（CBDB 1779）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1779&o=json
            external_identifier: CBDB:1779
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.240Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GsgG5sVkg1R3cYBGpcFT3U
        subject_person_id: p_CvEsXMQ6J7PST7ecUX2ULA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为遼人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8ivX1o5Vj2KGBd9h5KMRtr
          claim_id: c_GsgG5sVkg1R3cYBGpcFT3U
          source_id: s_KKBWBBUMc19iWURcA5NgkB
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

# 王繼忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼忠 | accepted |
| bio.summary | CBDB 记载为遼人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王繼忠（CBDB 1779）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1779&o=json)
