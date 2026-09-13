---
schema: wang-person/v1
id: p_bWS6dyCRFbobGToyXQueQ5
status: active
merged_into: null
display_name: 王先达
cbdb_id: 30376
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CTjuezfxbSXEEN3LPx5Zx2
        subject_person_id: p_bWS6dyCRFbobGToyXQueQ5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王先达，清人物。籍贯餘姚。（中国历代人物传记资料库 CBDB 30376）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_PAMmczWcaKEVEy9ZZjmj4b
          claim_id: c_CTjuezfxbSXEEN3LPx5Zx2
          source_id: s_CEYMPkRBML5xZS3az4aYjc
          stance: supports
          locator: null
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
        - id: cs_Q-Y7p9Fb8sj3jnTtMjvlc2
          claim_id: c_CTjuezfxbSXEEN3LPx5Zx2
          source_id: s_5sUDCLQpWBq947kHDUuxMb
          stance: supports
          locator: CBDB:30376
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1YMDLMa7V2HxPasdkeoqHT
        subject_person_id: p_bWS6dyCRFbobGToyXQueQ5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王先达
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3825j7RH5LCWCEcyw2LqtK
          claim_id: c_1YMDLMa7V2HxPasdkeoqHT
          source_id: s_5sUDCLQpWBq947kHDUuxMb
          stance: supports
          locator: Q45417765
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_9Shq2FTUD3cr4pQtMAN59D
          claim_id: c_1YMDLMa7V2HxPasdkeoqHT
          source_id: s_CEYMPkRBML5xZS3az4aYjc
          stance: supports
          locator: Q45417765
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
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_hGmsvipS46couFdLqMsovR
        subject_person_id: p_zgWjAeM1N1EqCXTXQW9HkX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bWS6dyCRFbobGToyXQueQ5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_56eAgEpAaExkBK1z36RwGi
          claim_id: c_hGmsvipS46couFdLqMsovR
          source_id: s_xoFjNHQqUB1QWiSpGJuY2W
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_xoFjNHQqUB1QWiSpGJuY2W
            source_type: api_record
            title: 维基数据：王承勋（Q15933146）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15933146
            external_identifier: Q15933146
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:49.469Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%89%BF%E5%8B%8B
        - id: cs_ofMZDLsBq1tdtjkFhJcsUJ
          claim_id: c_hGmsvipS46couFdLqMsovR
          source_id: s_dteLPPJXFAND6tCjr4jbrQ
          stance: supports
          locator: 亲属关系：次子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_dteLPPJXFAND6tCjr4jbrQ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王承勛（30377）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30377&o=json
            external_identifier: CBDB:30377
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:49.602Z
            metadata_json: null
        - id: cs_ohyXVq9UErpNKCm9zSsWdB
          claim_id: c_hGmsvipS46couFdLqMsovR
          source_id: s_CEYMPkRBML5xZS3az4aYjc
          stance: supports
          locator: P22（父）
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
        - id: cs_wP5Ddh7w2uQtZWvzogv6VU
          claim_id: c_hGmsvipS46couFdLqMsovR
          source_id: s_5sUDCLQpWBq947kHDUuxMb
          stance: supports
          locator: 亲属关系：父
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
      object_person:
        id: p_zgWjAeM1N1EqCXTXQW9HkX
        status: active
        display_name: 王承勋
        merged_into_person_id: null
  children:
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
        id: p_AjPBrK3KRnWF6QxHbu4MtJ
        status: active
        display_name: 王业弘
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王先达

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王先达，清人物。籍贯餘姚。（中国历代人物传记资料库 CBDB 30376） | accepted |
| name.primary | 王先达 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zgWjAeM1N1EqCXTXQW9HkX | 王承勋 | accepted |
| children | p_AjPBrK3KRnWF6QxHbu4MtJ | 王业弘 | accepted |

## 外部来源

- [维基数据：王承勋（Q15933146）](https://www.wikidata.org/wiki/Q15933146)
- [维基数据：王先达（Q45417765）](https://www.wikidata.org/wiki/Q45417765)
- [维基数据：王业弘（Q45417772）](https://www.wikidata.org/wiki/Q45417772)
- [CBDB 中国历代人物传记资料库：王承勛（30377）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30377&o=json)
- [CBDB 中国历代人物传记资料库：王先達（30376）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30376&o=json)
- [CBDB 中国历代人物传记资料库：王業弘（30380）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30380&o=json)
