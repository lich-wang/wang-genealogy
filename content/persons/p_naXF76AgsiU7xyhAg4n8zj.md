---
schema: wang-person/v1
id: p_naXF76AgsiU7xyhAg4n8zj
status: active
merged_into: null
display_name: 王興寰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VqFk9KPnhZ3XMoc6sU4yMe
        subject_person_id: p_naXF76AgsiU7xyhAg4n8zj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王興寰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_imWPo8nMNLH1UUamSCF6io
          claim_id: c_VqFk9KPnhZ3XMoc6sU4yMe
          source_id: s_b3G53d4wesMtGAgdvzQ8SR
          stance: supports
          locator: CBDB:557375
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（557375）
          source: &a1
            id: s_b3G53d4wesMtGAgdvzQ8SR
            source_type: api_record
            title: 中国历代人物传记资料库：王興寰（CBDB 557375）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557375&o=json
            external_identifier: CBDB:557375
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.538Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mVYNNwNnDt7Rb1k6Gggva1
        subject_person_id: p_naXF76AgsiU7xyhAg4n8zj
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
        - id: cs_STqm2W3dHADDn2zoifKPYG
          claim_id: c_mVYNNwNnDt7Rb1k6Gggva1
          source_id: s_b3G53d4wesMtGAgdvzQ8SR
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

# 王興寰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王興寰 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王興寰（CBDB 557375）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557375&o=json)
