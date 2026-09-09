---
schema: wang-person/v1
id: p_5y2bY3Eb2gqyskmc9LabRJ
status: active
merged_into: null
display_name: 王爾楫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TqxTnszByuHkkrJSE8URT4
        subject_person_id: p_5y2bY3Eb2gqyskmc9LabRJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王爾楫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1A867ca9drynD8h1dR5ksQ
          claim_id: c_TqxTnszByuHkkrJSE8URT4
          source_id: s_WGikZwWqQn2Gots8QWooJa
          stance: supports
          locator: CBDB:639358
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639358）
          source: &a1
            id: s_WGikZwWqQn2Gots8QWooJa
            source_type: api_record
            title: 中国历代人物传记资料库：王爾楫（CBDB 639358）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639358&o=json
            external_identifier: CBDB:639358
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.908Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mYh85DmH8ZTavWFtxJvjLs
        subject_person_id: p_5y2bY3Eb2gqyskmc9LabRJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MCCmHrMp3AJR781vh6PqeE
          claim_id: c_mYh85DmH8ZTavWFtxJvjLs
          source_id: s_WGikZwWqQn2Gots8QWooJa
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

# 王爾楫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王爾楫 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王爾楫（CBDB 639358）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639358&o=json)
