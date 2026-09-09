---
schema: wang-person/v1
id: p_zu5NTH1LEsyjEPowXJQ533
status: active
merged_into: null
display_name: 王灃
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XAeNXxC5KKPAmx2DshjNHo
        subject_person_id: p_zu5NTH1LEsyjEPowXJQ533
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王灃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_G8QPen1Ft1dxDC1mX5fnTQ
          claim_id: c_XAeNXxC5KKPAmx2DshjNHo
          source_id: s_AcJos2qWBASA3T8EzhvDci
          stance: supports
          locator: CBDB:639270
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639270）
          source: &a1
            id: s_AcJos2qWBASA3T8EzhvDci
            source_type: api_record
            title: 中国历代人物传记资料库：王灃（CBDB 639270）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639270&o=json
            external_identifier: CBDB:639270
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.898Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Q788UzMMSFfmg6WbTyeFZ9
        subject_person_id: p_zu5NTH1LEsyjEPowXJQ533
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
        - id: cs_QVLKPJbgifH54stctgFvEN
          claim_id: c_Q788UzMMSFfmg6WbTyeFZ9
          source_id: s_AcJos2qWBASA3T8EzhvDci
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

# 王灃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王灃 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王灃（CBDB 639270）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639270&o=json)
