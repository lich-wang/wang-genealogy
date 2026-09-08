---
schema: wang-person/v1
id: p_veJsDDNvSHy3VUwrKfXTt4
status: active
merged_into: null
display_name: 王思恭
cbdb_id: 175398
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Qt2VTd6frMSJbZwrpLkN92
        subject_person_id: p_veJsDDNvSHy3VUwrKfXTt4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思恭（卒于709年），唐人物。CBDB 记录其籍贯记录为京兆府，曾任丞。中国历代人物传记资料库（CBDB）以人物编号 175398 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_oomx6m3kbFXHwyFFT9aT1g
          claim_id: c_Qt2VTd6frMSJbZwrpLkN92
          source_id: s_PAGf33zCzXcAFzC5QvSBNg
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_PAGf33zCzXcAFzC5QvSBNg
            source_type: api_record
            title: 维基数据：王思恭（Q45657276）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657276
            external_identifier: Q45657276
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:34.351Z
            metadata_json: null
        - id: cs_zmT2VpAlwbWIKbCyVSfgxR
          claim_id: c_Qt2VTd6frMSJbZwrpLkN92
          source_id: s_AaCMULpFVBpPdgwonXTUkz
          stance: supports
          locator: CBDB:175398
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_AaCMULpFVBpPdgwonXTUkz
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王思恭（175398）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175398&o=json
            external_identifier: CBDB:175398
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:34.509Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_nbbyWBRJZnuxYLWs5GS6fh
        subject_person_id: p_veJsDDNvSHy3VUwrKfXTt4
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 709年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0709-01-01
            latest: 0709-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1Qs6jZxvBTZJXw3XziAxMM
          claim_id: c_nbbyWBRJZnuxYLWs5GS6fh
          source_id: s_PAGf33zCzXcAFzC5QvSBNg
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_PAGf33zCzXcAFzC5QvSBNg
            source_type: api_record
            title: 维基数据：王思恭（Q45657276）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657276
            external_identifier: Q45657276
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:34.351Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_LifJc54bJTqgpkJdn4kYVQ
        subject_person_id: p_veJsDDNvSHy3VUwrKfXTt4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思恭
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_EiWQXnnnoqtNg7HjVMeRNg
          claim_id: c_LifJc54bJTqgpkJdn4kYVQ
          source_id: s_AaCMULpFVBpPdgwonXTUkz
          stance: supports
          locator: Q45657276
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_gNZTUsedGmFVTD1zSZ5uw6
          claim_id: c_LifJc54bJTqgpkJdn4kYVQ
          source_id: s_PAGf33zCzXcAFzC5QvSBNg
          stance: supports
          locator: Q45657276
          quotation: null
          interpretation_note: null
          source:
            id: s_PAGf33zCzXcAFzC5QvSBNg
            source_type: api_record
            title: 维基数据：王思恭（Q45657276）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657276
            external_identifier: Q45657276
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:34.351Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_BUyEdqFus2JkcsURVxX6cz
        subject_person_id: p_AEv4UjMqpkRwJJqLF35aN2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_veJsDDNvSHy3VUwrKfXTt4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_R226DLf4HiRF9raKY9ou6L
          claim_id: c_BUyEdqFus2JkcsURVxX6cz
          source_id: s_e6fiAQEt58PZCsMB1pLE8o
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_e6fiAQEt58PZCsMB1pLE8o
            source_type: api_record
            title: 维基数据：王缄（Q18905540）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q18905540
            external_identifier: Q18905540
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:04:19.422Z
            metadata_json: null
        - id: cs_opYF88tPTzC1faDBmWaGuJ
          claim_id: c_BUyEdqFus2JkcsURVxX6cz
          source_id: s_uWEf33jcQqdtcyHZ72ihPi
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_uWEf33jcQqdtcyHZ72ihPi
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王緘（175394）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175394&o=json
            external_identifier: CBDB:175394
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:04:19.711Z
            metadata_json: null
        - id: cs_g6s7ShnyYHfaA4KMPX44ff
          claim_id: c_BUyEdqFus2JkcsURVxX6cz
          source_id: s_PAGf33zCzXcAFzC5QvSBNg
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_PAGf33zCzXcAFzC5QvSBNg
            source_type: api_record
            title: 维基数据：王思恭（Q45657276）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657276
            external_identifier: Q45657276
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:34.351Z
            metadata_json: null
        - id: cs_5LXS5Cd6DG9gVxX8QHC4fg
          claim_id: c_BUyEdqFus2JkcsURVxX6cz
          source_id: s_AaCMULpFVBpPdgwonXTUkz
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_AaCMULpFVBpPdgwonXTUkz
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王思恭（175398）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175398&o=json
            external_identifier: CBDB:175398
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:34.509Z
            metadata_json: null
      object_person:
        id: p_AEv4UjMqpkRwJJqLF35aN2
        status: active
        display_name: 王缄
        merged_into_person_id: null
  children:
    - claim:
        id: c_vf6dGMrnPCmmfkGPoQti7d
        subject_person_id: p_veJsDDNvSHy3VUwrKfXTt4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AXX2yqTEDSvrtatzvjW4d2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_4LHmNNGFoxMfD6J8L3reLU
          claim_id: c_vf6dGMrnPCmmfkGPoQti7d
          source_id: s_PAGf33zCzXcAFzC5QvSBNg
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_PAGf33zCzXcAFzC5QvSBNg
            source_type: api_record
            title: 维基数据：王思恭（Q45657276）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657276
            external_identifier: Q45657276
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:34.351Z
            metadata_json: null
        - id: cs_DfP3Vdi24hfn84JC2Y2JHX
          claim_id: c_vf6dGMrnPCmmfkGPoQti7d
          source_id: s_AaCMULpFVBpPdgwonXTUkz
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_AaCMULpFVBpPdgwonXTUkz
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王思恭（175398）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175398&o=json
            external_identifier: CBDB:175398
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:34.509Z
            metadata_json: null
        - id: cs_zPZAcxL6yj5NAh6h7iqvM7
          claim_id: c_vf6dGMrnPCmmfkGPoQti7d
          source_id: s_fHtUP7uYmGwRn4mSm4BoMN
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_fHtUP7uYmGwRn4mSm4BoMN
            source_type: api_record
            title: 维基数据：王希倩（Q45657334）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657334
            external_identifier: Q45657334
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:27.013Z
            metadata_json: null
        - id: cs_CNJq1tEGcGXZ5tG2WCPQiG
          claim_id: c_vf6dGMrnPCmmfkGPoQti7d
          source_id: s_NcVuNK6Q2LSEH14AP2Ezsn
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_NcVuNK6Q2LSEH14AP2Ezsn
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王希倩（175399）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175399&o=json
            external_identifier: CBDB:175399
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:27.329Z
            metadata_json: null
      object_person:
        id: p_AXX2yqTEDSvrtatzvjW4d2
        status: active
        display_name: 王希倩
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王思恭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王思恭（卒于709年），唐人物。CBDB 记录其籍贯记录为京兆府，曾任丞。中国历代人物传记资料库（CBDB）以人物编号 175398 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 709年 | accepted |
| name.primary | 王思恭 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_AEv4UjMqpkRwJJqLF35aN2 | 王缄 | accepted |
| children | p_AXX2yqTEDSvrtatzvjW4d2 | 王希倩 | accepted |

## 外部来源

- [维基数据：王缄（Q18905540）](https://www.wikidata.org/wiki/Q18905540)
- [维基数据：王思恭（Q45657276）](https://www.wikidata.org/wiki/Q45657276)
- [维基数据：王希倩（Q45657334）](https://www.wikidata.org/wiki/Q45657334)
- [CBDB 中国历代人物传记资料库：王緘（175394）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175394&o=json)
- [CBDB 中国历代人物传记资料库：王思恭（175398）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175398&o=json)
- [CBDB 中国历代人物传记资料库：王希倩（175399）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175399&o=json)
