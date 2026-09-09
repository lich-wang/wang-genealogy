---
schema: wang-person/v1
id: p_N17i1q97DkTdkq8DXdoNpy
status: active
merged_into: null
display_name: 王允成
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oJqxUJG7tC88muwbB69roK
        subject_person_id: p_N17i1q97DkTdkq8DXdoNpy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允成
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Nt3LtCQjAmQCqC1cp9qnsT
          claim_id: c_oJqxUJG7tC88muwbB69roK
          source_id: s_q6qRQUAeHPiBHuft2K4y8W
          stance: supports
          locator: CBDB:38274
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38274）
          source: &a1
            id: s_q6qRQUAeHPiBHuft2K4y8W
            source_type: api_record
            title: 中国历代人物传记资料库：王允成（CBDB 38274）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38274&o=json
            external_identifier: CBDB:38274
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.410Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_USpXcAn9EMoJKWYMZ4Wu8r
        subject_person_id: p_N17i1q97DkTdkq8DXdoNpy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KeqsaS57SMESpkD5MhtESx
          claim_id: c_USpXcAn9EMoJKWYMZ4Wu8r
          source_id: s_q6qRQUAeHPiBHuft2K4y8W
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

# 王允成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王允成 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王允成（CBDB 38274）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38274&o=json)
