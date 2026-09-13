---
schema: wang-person/v1
id: p_yg6p7B8cBDPvTj6mcpQXsE
status: active
merged_into: null
display_name: 王旊
cbdb_id: 1803
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yF5AGuzMEppYvxU4wP9CQY
        subject_person_id: p_yg6p7B8cBDPvTj6mcpQXsE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王旊，宋人物。籍贯臨川，曾任提舉、轉運司判官。（中国历代人物传记资料库 CBDB 1803）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_Dxs1J6K7FCBFHaW1sqkWeF
          claim_id: c_yF5AGuzMEppYvxU4wP9CQY
          source_id: s_GwiACpL9uXTaevdv37LSo3
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_GwiACpL9uXTaevdv37LSo3
            source_type: api_record
            title: 维基数据：王旊（Q45359461）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359461
            external_identifier: Q45359461
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:02.686Z
            metadata_json: null
        - id: cs_eTWMmU-8XEgIDxKgBOEWrz
          claim_id: c_yF5AGuzMEppYvxU4wP9CQY
          source_id: s_ZEmzuFEpx2Wfkzs2uakALM
          stance: supports
          locator: CBDB:1803
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ZEmzuFEpx2Wfkzs2uakALM
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王旊（1803）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1803&o=json
            external_identifier: CBDB:1803
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:10:02.831Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_KfQ7JfttvQJucLgf5U3Rps
        subject_person_id: p_yg6p7B8cBDPvTj6mcpQXsE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王旊
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_J4rdWEyJWiKYBKCL2HNgHK
          claim_id: c_KfQ7JfttvQJucLgf5U3Rps
          source_id: s_ZEmzuFEpx2Wfkzs2uakALM
          stance: supports
          locator: Q45359461
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_dsTdXwdTYbrLwma4tfBqix
          claim_id: c_KfQ7JfttvQJucLgf5U3Rps
          source_id: s_GwiACpL9uXTaevdv37LSo3
          stance: supports
          locator: Q45359461
          quotation: null
          interpretation_note: null
          source:
            id: s_GwiACpL9uXTaevdv37LSo3
            source_type: api_record
            title: 维基数据：王旊（Q45359461）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359461
            external_identifier: Q45359461
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:02.686Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_QXctmDSd8RWUoksrxfcquZ
        subject_person_id: p_3junVkFJoVRzxzPkHGwJp6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yg6p7B8cBDPvTj6mcpQXsE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_nz8rUMCzpFeX9bxKq35xVt
          claim_id: c_QXctmDSd8RWUoksrxfcquZ
          source_id: s_eLUhkWfYU2avW7ALtX5HuY
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_eLUhkWfYU2avW7ALtX5HuY
            source_type: api_record
            title: 维基数据：王安国（Q16077282）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16077282
            external_identifier: Q16077282
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:48:57.213Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%89%E5%9C%8B_(%E5%8C%97%E5%AE%8B)
        - id: cs_rwF1Qv5Ga1PUsN7jmMprdL
          claim_id: c_QXctmDSd8RWUoksrxfcquZ
          source_id: s_iMR7HP2uaY3SbJBUifgDL8
          stance: supports
          locator: 亲属关系：長子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_iMR7HP2uaY3SbJBUifgDL8
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王安國（7076）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7076&o=json
            external_identifier: CBDB:7076
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:48:57.350Z
            metadata_json: null
        - id: cs_Tfm9BZmga52Sk4fWEryWS8
          claim_id: c_QXctmDSd8RWUoksrxfcquZ
          source_id: s_GwiACpL9uXTaevdv37LSo3
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_GwiACpL9uXTaevdv37LSo3
            source_type: api_record
            title: 维基数据：王旊（Q45359461）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359461
            external_identifier: Q45359461
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:02.686Z
            metadata_json: null
        - id: cs_unMKYJa2wguzEsbvdSUML7
          claim_id: c_QXctmDSd8RWUoksrxfcquZ
          source_id: s_ZEmzuFEpx2Wfkzs2uakALM
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_ZEmzuFEpx2Wfkzs2uakALM
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王旊（1803）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1803&o=json
            external_identifier: CBDB:1803
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:10:02.831Z
            metadata_json: null
      object_person:
        id: p_3junVkFJoVRzxzPkHGwJp6
        status: active
        display_name: 王安国
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王旊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王旊，宋人物。籍贯臨川，曾任提舉、轉運司判官。（中国历代人物传记资料库 CBDB 1803） | accepted |
| name.primary | 王旊 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3junVkFJoVRzxzPkHGwJp6 | 王安国 | accepted |

## 外部来源

- [维基数据：王安国（Q16077282）](https://www.wikidata.org/wiki/Q16077282)
- [维基数据：王旊（Q45359461）](https://www.wikidata.org/wiki/Q45359461)
- [CBDB 中国历代人物传记资料库：王安國（7076）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7076&o=json)
- [CBDB 中国历代人物传记资料库：王旊（1803）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1803&o=json)
