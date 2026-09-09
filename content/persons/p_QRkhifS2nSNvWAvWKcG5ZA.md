---
schema: wang-person/v1
id: p_QRkhifS2nSNvWAvWKcG5ZA
status: active
merged_into: null
display_name: 王者治
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dzCzJ6JE8P7rpv8Ym9ejL8
        subject_person_id: p_QRkhifS2nSNvWAvWKcG5ZA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王者治
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PDCy1QMLQZvWDa734bDEg2
          claim_id: c_dzCzJ6JE8P7rpv8Ym9ejL8
          source_id: s_pGNFXzuTo1WTXMwUL6juRJ
          stance: supports
          locator: CBDB:639924
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639924）
          source: &a1
            id: s_pGNFXzuTo1WTXMwUL6juRJ
            source_type: api_record
            title: 中国历代人物传记资料库：王者治（CBDB 639924）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639924&o=json
            external_identifier: CBDB:639924
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.086Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xFRRYyLtixpRvH4utcJr3f
        subject_person_id: p_QRkhifS2nSNvWAvWKcG5ZA
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
        - id: cs_B3nycDpAwj9F2WHyNbKyt4
          claim_id: c_xFRRYyLtixpRvH4utcJr3f
          source_id: s_pGNFXzuTo1WTXMwUL6juRJ
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

# 王者治

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王者治 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王者治（CBDB 639924）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639924&o=json)
