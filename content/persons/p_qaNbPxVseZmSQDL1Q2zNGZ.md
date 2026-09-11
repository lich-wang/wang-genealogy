---
schema: wang-person/v1
id: p_qaNbPxVseZmSQDL1Q2zNGZ
status: active
merged_into: null
display_name: 王惟德
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_asoLW2tZTbQaSX69mop61Y
        subject_person_id: p_qaNbPxVseZmSQDL1Q2zNGZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mGDh2WKaY3BfJ1dKZgB3nT
          claim_id: c_asoLW2tZTbQaSX69mop61Y
          source_id: s_36Phv2bBiahrh6AXtWfohB
          stance: supports
          locator: CBDB:38101
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38101）
          source: &a1
            id: s_36Phv2bBiahrh6AXtWfohB
            source_type: api_record
            title: 中国历代人物传记资料库：王惟德（CBDB 38101）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38101&o=json
            external_identifier: CBDB:38101
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.357Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_e2ATVW1Ny3RJEcHRD5AAZN
        subject_person_id: p_qaNbPxVseZmSQDL1Q2zNGZ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1027年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PFB6ByJYuU7G82WZWgDUdh
          claim_id: c_e2ATVW1Ny3RJEcHRD5AAZN
          source_id: s_36Phv2bBiahrh6AXtWfohB
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xApET6a1EML3rqiTUDDQDZ
        subject_person_id: p_qaNbPxVseZmSQDL1Q2zNGZ
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
        - id: cs_tUt8MbYyVe3KUF4zzWig74
          claim_id: c_xApET6a1EML3rqiTUDDQDZ
          source_id: s_36Phv2bBiahrh6AXtWfohB
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_4bU4EMAHl8B0QiDs0Nc0UQ
        subject_person_id: p_qaNbPxVseZmSQDL1Q2zNGZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dyyUkZWDywAtknXtDVBC7E
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EfabdVbET1W5-hZbMupJbc
          claim_id: c_4bU4EMAHl8B0QiDs0Nc0UQ
          source_id: s_GqK9ZxktA1TktUVgWBBvUb
          stance: supports
          locator: 司馬文正公集，鄆州處士王君墓誌：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GqK9ZxktA1TktUVgWBBvUb
            source_type: api_record
            title: 中国历代人物传记资料库：王宗道（CBDB 572686）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=572686&o=json
            external_identifier: CBDB:572686
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.890Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dyyUkZWDywAtknXtDVBC7E
        status: active
        display_name: 王宗道
        merged_into_person_id: null
    - claim:
        id: c_e6HWkw8hiL-tUz_AiHiBg7
        subject_person_id: p_qaNbPxVseZmSQDL1Q2zNGZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gTWvcwTJduGYjH4AFByofy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ig3cKbDws4ZcsOoZVbKrwf
          claim_id: c_e6HWkw8hiL-tUz_AiHiBg7
          source_id: s_J7bwYGL5fzMeeZ819EQEHt
          stance: supports
          locator: 司馬文正公集，鄆州處士王君墓誌：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_J7bwYGL5fzMeeZ819EQEHt
            source_type: api_record
            title: 中国历代人物传记资料库：王大臨（CBDB 38104）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38104&o=json
            external_identifier: CBDB:38104
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.358Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_gTWvcwTJduGYjH4AFByofy
        status: active
        display_name: 王大臨
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王惟德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惟德 | accepted |
| death.date | 1027年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_dyyUkZWDywAtknXtDVBC7E | 王宗道 | accepted |
| children | p_gTWvcwTJduGYjH4AFByofy | 王大臨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大臨（CBDB 38104）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38104&o=json)
- [中国历代人物传记资料库：王惟德（CBDB 38101）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38101&o=json)
- [中国历代人物传记资料库：王宗道（CBDB 572686）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=572686&o=json)
