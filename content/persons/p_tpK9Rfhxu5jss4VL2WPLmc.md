---
schema: wang-person/v1
id: p_tpK9Rfhxu5jss4VL2WPLmc
status: active
merged_into: null
display_name: 王用之
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zyN8A2iGN5hXVyPzgvsYu7
        subject_person_id: p_tpK9Rfhxu5jss4VL2WPLmc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vwsGg98Y1KBvxsAsXkh8TA
          claim_id: c_zyN8A2iGN5hXVyPzgvsYu7
          source_id: s_g4A4iLebxZMghqJ3jtcXG2
          stance: supports
          locator: CBDB:38496
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38496）
          source: &a1
            id: s_g4A4iLebxZMghqJ3jtcXG2
            source_type: api_record
            title: 中国历代人物传记资料库：王用之（CBDB 38496）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38496&o=json
            external_identifier: CBDB:38496
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.501Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_73sQ8Rx9ueZ7SLKLuyKEEZ
        subject_person_id: p_tpK9Rfhxu5jss4VL2WPLmc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用之，宋人物。籍贯錢塘，身份为畫家。（中国历代人物传记资料库 CBDB 38496）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jSpLFY1VXcGXES9vBsg6IR
          claim_id: c_73sQ8Rx9ueZ7SLKLuyKEEZ
          source_id: s_g4A4iLebxZMghqJ3jtcXG2
          stance: supports
          locator: CBDB:38496
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_h2rbGCS8SVFwxgLj8Ymn_D
        subject_person_id: p_AzchV2gadaNThZJMv4i97k
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tpK9Rfhxu5jss4VL2WPLmc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-tvB-83oNEG_HXeVUM91m9
          claim_id: c_h2rbGCS8SVFwxgLj8Ymn_D
          source_id: s_EvEpf3ZJ99QhhdpGGtsqMX
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1510：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_EvEpf3ZJ99QhhdpGGtsqMX
            source_type: api_record
            title: 中国历代人物传记资料库：王輝（CBDB 37866）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37866&o=json
            external_identifier: CBDB:37866
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.280Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AzchV2gadaNThZJMv4i97k
        status: active
        display_name: 王輝
        merged_into_person_id: null
    - claim:
        id: c_RQBx8TNeXH21gFlDmw6muQ
        subject_person_id: p_dLSWjUaYCaziTDKQLdPUkX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tpK9Rfhxu5jss4VL2WPLmc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DhmNlSxmVtafyPjk-Tolr5
          claim_id: c_RQBx8TNeXH21gFlDmw6muQ
          source_id: s_E2fDha9q9PP5juHdwi5GSe
          stance: supports
          locator: 宋人傳記資料索引(電子版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_E2fDha9q9PP5juHdwi5GSe
            source_type: api_record
            title: 中国历代人物传记资料库：王輝（CBDB 37868）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37868&o=json
            external_identifier: CBDB:37868
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.281Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dLSWjUaYCaziTDKQLdPUkX
        status: active
        display_name: 王輝
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王用之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王用之 | accepted |
| bio.summary | 王用之，宋人物。籍贯錢塘，身份为畫家。（中国历代人物传记资料库 CBDB 38496） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_AzchV2gadaNThZJMv4i97k | 王輝 | accepted |
| parents | p_dLSWjUaYCaziTDKQLdPUkX | 王輝 | accepted |

## 外部来源

- [中国历代人物传记资料库：王輝（CBDB 37866）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37866&o=json)
- [中国历代人物传记资料库：王輝（CBDB 37868）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37868&o=json)
- [中国历代人物传记资料库：王用之（CBDB 38496）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38496&o=json)
