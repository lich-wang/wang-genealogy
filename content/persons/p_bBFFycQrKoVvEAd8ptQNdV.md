---
schema: wang-person/v1
id: p_bBFFycQrKoVvEAd8ptQNdV
status: active
merged_into: null
display_name: 王最曾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FvnMLZ34HvJBHvtF47ncFg
        subject_person_id: p_bBFFycQrKoVvEAd8ptQNdV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王最曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FzjkeoGN9run6Me9tRnb8K
          claim_id: c_FvnMLZ34HvJBHvtF47ncFg
          source_id: s_vRxWA3wzL64kkTtnFoNLU1
          stance: supports
          locator: CBDB:638563
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638563）
          source: &a1
            id: s_vRxWA3wzL64kkTtnFoNLU1
            source_type: api_record
            title: 中国历代人物传记资料库：王最曾（CBDB 638563）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638563&o=json
            external_identifier: CBDB:638563
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.675Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_U4WXe4pPH42Sfwu3crxsQQ
        subject_person_id: p_bBFFycQrKoVvEAd8ptQNdV
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
        - id: cs_DTp4W2fb5h6GgFarqVEhGK
          claim_id: c_U4WXe4pPH42Sfwu3crxsQQ
          source_id: s_vRxWA3wzL64kkTtnFoNLU1
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

# 王最曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王最曾 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王最曾（CBDB 638563）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638563&o=json)
