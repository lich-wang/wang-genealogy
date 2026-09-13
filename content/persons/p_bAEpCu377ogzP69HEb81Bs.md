---
schema: wang-person/v1
id: p_bAEpCu377ogzP69HEb81Bs
status: active
merged_into: null
display_name: 王超
cbdb_id: 7077
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bQTWTPAznog4kpWAfuxTKL
        subject_person_id: p_bAEpCu377ogzP69HEb81Bs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王超（951年—1012年），趙州人、北宋时期将领，身長七尺。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_o0Oag6wMhlDkY-X8GaZO-1
          claim_id: c_bQTWTPAznog4kpWAfuxTKL
          source_id: s_BGjyO4tTh0t7aVJB0UvOLR
          stance: supports
          locator: 导言
          quotation: 王超（951年—1012年），趙州人、北宋时期将领，身長七尺。
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_BGjyO4tTh0t7aVJB0UvOLR
            source_type: website
            title: 中文维基百科：王超 (北宋)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%B6%85_(%E5%8C%97%E5%AE%8B)
            external_identifier: Q16077506
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-11T10:29:31.867Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_h316L9eSWQ3q6Jnt3GDYjB
        subject_person_id: p_bAEpCu377ogzP69HEb81Bs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王超
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_E7agYyibSBjkoTu2hVTAiG
          claim_id: c_h316L9eSWQ3q6Jnt3GDYjB
          source_id: s_6Ns8JKYpFsSxcN4rRQ74oj
          stance: supports
          locator: Q16077506
          quotation: null
          interpretation_note: null
          source:
            id: s_6Ns8JKYpFsSxcN4rRQ74oj
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王超（7077）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7077&o=json
            external_identifier: CBDB:7077
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:58:55.919Z
            metadata_json: null
        - id: cs_PPp3QWUJHnEXfrsKskzDbX
          claim_id: c_h316L9eSWQ3q6Jnt3GDYjB
          source_id: s_zDkWjZZtLbX6M9LxBcAf7Z
          stance: supports
          locator: Q16077506
          quotation: null
          interpretation_note: null
          source: &a1
            id: s_zDkWjZZtLbX6M9LxBcAf7Z
            source_type: api_record
            title: 维基数据：王超（Q16077506）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16077506
            external_identifier: Q16077506
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:58:55.754Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%B6%85_(%E5%8C%97%E5%AE%8B)
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_qww4JAC9sm1FVkxAiXc8SQ
        subject_person_id: p_VABDaNqeokNeUhSBaXqRrB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bAEpCu377ogzP69HEb81Bs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_im65cEFXnJypdJd32Qh9Ff
          claim_id: c_qww4JAC9sm1FVkxAiXc8SQ
          source_id: s_zDkWjZZtLbX6M9LxBcAf7Z
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_P55964JEYPEMQm9pTkPmLE
          claim_id: c_qww4JAC9sm1FVkxAiXc8SQ
          source_id: s_ZU4AZH8igVG4hRZTkSYybo
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_ZU4AZH8igVG4hRZTkSYybo
            source_type: api_record
            title: 维基数据：王玄（Q45401566）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45401566
            external_identifier: Q45401566
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:12.861Z
            metadata_json: null
        - id: cs_Xn3EqiANAsJ1FH2SjQfjmA
          claim_id: c_qww4JAC9sm1FVkxAiXc8SQ
          source_id: s_4sGUMc4wRTGTMtQEDiCSra
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_4sGUMc4wRTGTMtQEDiCSra
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王玄（21949）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21949&o=json
            external_identifier: CBDB:21949
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:13.023Z
            metadata_json: null
      object_person:
        id: p_VABDaNqeokNeUhSBaXqRrB
        status: active
        display_name: 王玄
        merged_into_person_id: null
  children:
    - claim:
        id: c_PQGKNA1pFjUCmdxBiDdFg9
        subject_person_id: p_bAEpCu377ogzP69HEb81Bs
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_mDQwQDowHukUUJhyJA2Q4Z
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2XhnEJ7SaRggjFeBoRTLD6
          claim_id: c_PQGKNA1pFjUCmdxBiDdFg9
          source_id: s_zDkWjZZtLbX6M9LxBcAf7Z
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_zDkWjZZtLbX6M9LxBcAf7Z
            source_type: api_record
            title: 维基数据：王超（Q16077506）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16077506
            external_identifier: Q16077506
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:58:55.754Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%B6%85_(%E5%8C%97%E5%AE%8B)
        - id: cs_DiXm1WUAo4n6KcXRZFLcxR
          claim_id: c_PQGKNA1pFjUCmdxBiDdFg9
          source_id: s_81a22jZyFPFGnFLoTT9eP3
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_81a22jZyFPFGnFLoTT9eP3
            source_type: api_record
            title: 维基数据：王德用（Q10414172）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10414172
            external_identifier: Q10414172
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:44:43.212Z
            metadata_json: null
        - id: cs_hpwtfdmVHQMgk9CyFcg8Lb
          claim_id: c_PQGKNA1pFjUCmdxBiDdFg9
          source_id: s_6Ns8JKYpFsSxcN4rRQ74oj
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_6Ns8JKYpFsSxcN4rRQ74oj
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王超（7077）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7077&o=json
            external_identifier: CBDB:7077
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:58:55.919Z
            metadata_json: null
      object_person:
        id: p_mDQwQDowHukUUJhyJA2Q4Z
        status: active
        display_name: 王德用
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_pHsVsZHWcCXOYj0HXmm1VN
        subject_person_id: p_24nNxQysajKGx6Hd2e5iLj
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_bAEpCu377ogzP69HEb81Bs
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ts3jKGNlRF0OUi5ueerYzf
          claim_id: c_pHsVsZHWcCXOYj0HXmm1VN
          source_id: s_rHojNWwHBxL97txyU7eJLA
          stance: supports
          locator: 宋人傳記資料索引(電子版)，965;966：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rHojNWwHBxL97txyU7eJLA
            source_type: api_record
            title: 中国历代人物传记资料库：王方（CBDB 21948）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21948&o=json
            external_identifier: CBDB:21948
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.773Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_24nNxQysajKGx6Hd2e5iLj
        status: active
        display_name: 王方
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王超

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王超（951年—1012年），趙州人、北宋时期将领，身長七尺。 | accepted |
| name.primary | 王超 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VABDaNqeokNeUhSBaXqRrB | 王玄 | accepted |
| children | p_mDQwQDowHukUUJhyJA2Q4Z | 王德用 | accepted |
| ancestors | p_24nNxQysajKGx6Hd2e5iLj | 王方 | accepted |

## 外部来源

- [维基数据：王超（Q16077506）](https://www.wikidata.org/wiki/Q16077506)
- [维基数据：王德用（Q10414172）](https://www.wikidata.org/wiki/Q10414172)
- [维基数据：王玄（Q45401566）](https://www.wikidata.org/wiki/Q45401566)
- [中国历代人物传记资料库：王方（CBDB 21948）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21948&o=json)
- [中文维基百科：王超 (北宋)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%B6%85_(%E5%8C%97%E5%AE%8B))
- [CBDB 中国历代人物传记资料库：王超（7077）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7077&o=json)
- [CBDB 中国历代人物传记资料库：王玄（21949）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21949&o=json)
