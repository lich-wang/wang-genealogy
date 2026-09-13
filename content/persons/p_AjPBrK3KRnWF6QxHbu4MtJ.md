---
schema: wang-person/v1
id: p_AjPBrK3KRnWF6QxHbu4MtJ
status: active
merged_into: null
display_name: 王业弘
cbdb_id: 30380
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_P381dYu5MpQgyyisyGyc8U
        subject_person_id: p_AjPBrK3KRnWF6QxHbu4MtJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王业弘，清人物。籍贯餘姚。（中国历代人物传记资料库 CBDB 30380）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_2Zs1RDif4mGZ8APLYDyHmp
          claim_id: c_P381dYu5MpQgyyisyGyc8U
          source_id: s_sHoAAFEp9qwWn4YAnwyS4Z
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_sHoAAFEp9qwWn4YAnwyS4Z
            source_type: api_record
            title: 维基数据：王业弘（Q45417772）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45417772
            external_identifier: Q45417772
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:45.400Z
            metadata_json: null
        - id: cs_rn9cv6PDrhCByK5Sm3rZg0
          claim_id: c_P381dYu5MpQgyyisyGyc8U
          source_id: s_vuezERudeSQsW8etxt3Rnv
          stance: supports
          locator: CBDB:30380
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_vuezERudeSQsW8etxt3Rnv
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王業弘（30380）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30380&o=json
            external_identifier: CBDB:30380
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:14:45.545Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_gPGRD3vNLfPLDWBiKNUHMA
        subject_person_id: p_AjPBrK3KRnWF6QxHbu4MtJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王业弘
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_VqdA4Mj5xUK8LZtZa8ouS9
          claim_id: c_gPGRD3vNLfPLDWBiKNUHMA
          source_id: s_sHoAAFEp9qwWn4YAnwyS4Z
          stance: supports
          locator: Q45417772
          quotation: null
          interpretation_note: null
          source:
            id: s_sHoAAFEp9qwWn4YAnwyS4Z
            source_type: api_record
            title: 维基数据：王业弘（Q45417772）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45417772
            external_identifier: Q45417772
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:45.400Z
            metadata_json: null
        - id: cs_nryT24rSHLve5BEXb5CGLx
          claim_id: c_gPGRD3vNLfPLDWBiKNUHMA
          source_id: s_vuezERudeSQsW8etxt3Rnv
          stance: supports
          locator: Q45417772
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gHZFe58AhxFyxH1H8oCjy9
        subject_person_id: p_bWS6dyCRFbobGToyXQueQ5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AjPBrK3KRnWF6QxHbu4MtJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_5oAmQ24sob7wfTzGiuS7Rk
          claim_id: c_gHZFe58AhxFyxH1H8oCjy9
          source_id: s_CEYMPkRBML5xZS3az4aYjc
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_CEYMPkRBML5xZS3az4aYjc
            source_type: api_record
            title: 维基数据：王先达（Q45417765）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45417765
            external_identifier: Q45417765
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:11.041Z
            metadata_json: null
        - id: cs_AhZgYWbfFGhyzWzTCKQbHM
          claim_id: c_gHZFe58AhxFyxH1H8oCjy9
          source_id: s_5sUDCLQpWBq947kHDUuxMb
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_5sUDCLQpWBq947kHDUuxMb
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王先達（30376）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30376&o=json
            external_identifier: CBDB:30376
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:10:11.208Z
            metadata_json: null
        - id: cs_7kjGQ53PBCPHoBJetQ5Hwh
          claim_id: c_gHZFe58AhxFyxH1H8oCjy9
          source_id: s_sHoAAFEp9qwWn4YAnwyS4Z
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_sHoAAFEp9qwWn4YAnwyS4Z
            source_type: api_record
            title: 维基数据：王业弘（Q45417772）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45417772
            external_identifier: Q45417772
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:45.400Z
            metadata_json: null
        - id: cs_xdPrNwLCEgJF99ST55ECy8
          claim_id: c_gHZFe58AhxFyxH1H8oCjy9
          source_id: s_vuezERudeSQsW8etxt3Rnv
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_vuezERudeSQsW8etxt3Rnv
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王業弘（30380）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30380&o=json
            external_identifier: CBDB:30380
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:14:45.545Z
            metadata_json: null
      object_person:
        id: p_bWS6dyCRFbobGToyXQueQ5
        status: active
        display_name: 王先达
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王业弘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王业弘，清人物。籍贯餘姚。（中国历代人物传记资料库 CBDB 30380） | accepted |
| name.primary | 王业弘 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_bWS6dyCRFbobGToyXQueQ5 | 王先达 | accepted |

## 外部来源

- [维基数据：王先达（Q45417765）](https://www.wikidata.org/wiki/Q45417765)
- [维基数据：王业弘（Q45417772）](https://www.wikidata.org/wiki/Q45417772)
- [CBDB 中国历代人物传记资料库：王先達（30376）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30376&o=json)
- [CBDB 中国历代人物传记资料库：王業弘（30380）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30380&o=json)
