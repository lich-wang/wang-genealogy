---
schema: wang-person/v1
id: p_u4hFdELHv3KfyaFEUbWCKP
status: active
merged_into: null
display_name: 王治清
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Lvi9VSKrEK484Th9Qf57Ba
        subject_person_id: p_u4hFdELHv3KfyaFEUbWCKP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王治清
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZQ79t3DLiimQZXHKizKpra
          claim_id: c_Lvi9VSKrEK484Th9Qf57Ba
          source_id: s_wBXRPY67tYwNDnuE2Am9TN
          stance: supports
          locator: CBDB:639063
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639063）
          source: &a1
            id: s_wBXRPY67tYwNDnuE2Am9TN
            source_type: api_record
            title: 中国历代人物传记资料库：王治清（CBDB 639063）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639063&o=json
            external_identifier: CBDB:639063
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.825Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1JALZ8LbJ3wPMDJ5umjtr3
        subject_person_id: p_u4hFdELHv3KfyaFEUbWCKP
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
        - id: cs_agSMZg3V1tdkmfJmD8NQ5P
          claim_id: c_1JALZ8LbJ3wPMDJ5umjtr3
          source_id: s_wBXRPY67tYwNDnuE2Am9TN
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

# 王治清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王治清 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王治清（CBDB 639063）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639063&o=json)
