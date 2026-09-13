---
schema: wang-person/v1
id: p_AEv4UjMqpkRwJJqLF35aN2
status: active
merged_into: null
display_name: 王缄
cbdb_id: 175394
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ouaWPc43udDyAiLwu31J6T
        subject_person_id: p_AEv4UjMqpkRwJJqLF35aN2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王缄（卒于672年），唐人物。籍贯臨沂，曾任州司馬。（中国历代人物传记资料库 CBDB 175394）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_w4ZH92c7wasJkAtikk7481
          claim_id: c_ouaWPc43udDyAiLwu31J6T
          source_id: s_e6fiAQEt58PZCsMB1pLE8o
          stance: supports
          locator: null
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
        - id: cs_71gVwKQ4Cob0uSdIOEMraq
          claim_id: c_ouaWPc43udDyAiLwu31J6T
          source_id: s_uWEf33jcQqdtcyHZ72ihPi
          stance: supports
          locator: CBDB:175394
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_T7Vnp46NAJJ2Xf4guwK4AY
        subject_person_id: p_AEv4UjMqpkRwJJqLF35aN2
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 672年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0672-01-01
            latest: 0672-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6d3rtbu2eXGT8NAHQQbD2n
          claim_id: c_T7Vnp46NAJJ2Xf4guwK4AY
          source_id: s_e6fiAQEt58PZCsMB1pLE8o
          stance: supports
          locator: null
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ey6rPcaq9G16VZrmhT1aHm
        subject_person_id: p_AEv4UjMqpkRwJJqLF35aN2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王缄
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_mFMK9M3xtx5R3xBQpv61Pp
          claim_id: c_ey6rPcaq9G16VZrmhT1aHm
          source_id: s_uWEf33jcQqdtcyHZ72ihPi
          stance: supports
          locator: Q18905540
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_oBFvKvhG7JSoQH9rT5kXAM
          claim_id: c_ey6rPcaq9G16VZrmhT1aHm
          source_id: s_e6fiAQEt58PZCsMB1pLE8o
          stance: supports
          locator: Q18905540
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
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_dKx7oCiewvGahQegkL4BfJ
        subject_person_id: p_ujGjqexGpFHSeeL644vaA9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AEv4UjMqpkRwJJqLF35aN2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_FwpsFBM5miGaFRfgrJ7hoT
          claim_id: c_dKx7oCiewvGahQegkL4BfJ
          source_id: s_Nwn5LEBCq2tAp9BpBtAtnK
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_Nwn5LEBCq2tAp9BpBtAtnK
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王弘直（175393）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175393&o=json
            external_identifier: CBDB:175393
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:03:04.728Z
            metadata_json: null
        - id: cs_unmmmRC2KMSZusEvenFT9g
          claim_id: c_dKx7oCiewvGahQegkL4BfJ
          source_id: s_MuAKHk7C2oEADSy4mxkVHM
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_MuAKHk7C2oEADSy4mxkVHM
            source_type: api_record
            title: 维基数据：王弘直（Q45656974）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656974
            external_identifier: Q45656974
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:03:04.576Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BC%98%E7%9B%B4
        - id: cs_ZcmXbfSAt3qKDoFFy2qEtZ
          claim_id: c_dKx7oCiewvGahQegkL4BfJ
          source_id: s_e6fiAQEt58PZCsMB1pLE8o
          stance: supports
          locator: P22（父）
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
        - id: cs_Ke9ymSz9nYK1T6BVJ6PtP4
          claim_id: c_dKx7oCiewvGahQegkL4BfJ
          source_id: s_uWEf33jcQqdtcyHZ72ihPi
          stance: supports
          locator: 亲属关系：父
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
      object_person:
        id: p_ujGjqexGpFHSeeL644vaA9
        status: active
        display_name: 王弘直
        merged_into_person_id: null
  children:
    - claim:
        id: c_DfWVNzTe1nxPXiSquk8mqU
        subject_person_id: p_AEv4UjMqpkRwJJqLF35aN2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_V58imM4qevLKTMUDbrBs11
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_56QmMC7wLdr5LFmL3he7H5
          claim_id: c_DfWVNzTe1nxPXiSquk8mqU
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
        - id: cs_uUkPaC85MkB9FPQDjhriAn
          claim_id: c_DfWVNzTe1nxPXiSquk8mqU
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
        - id: cs_AwMErfaQQqn4Ek4WoM8L7V
          claim_id: c_DfWVNzTe1nxPXiSquk8mqU
          source_id: s_s2FJxWe83KuLYs8DuheY2b
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_s2FJxWe83KuLYs8DuheY2b
            source_type: api_record
            title: 维基数据：王思晳（Q45657096）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657096
            external_identifier: Q45657096
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:34.351Z
            metadata_json: null
        - id: cs_jVP7CkQ5faGtuDPcsJu7Wd
          claim_id: c_DfWVNzTe1nxPXiSquk8mqU
          source_id: s_3WPgNEFBUTB7C65GG9Pj3N
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_3WPgNEFBUTB7C65GG9Pj3N
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王思晳（175395）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175395&o=json
            external_identifier: CBDB:175395
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:34.503Z
            metadata_json: null
      object_person:
        id: p_V58imM4qevLKTMUDbrBs11
        status: active
        display_name: 王思晳
        merged_into_person_id: null
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
        id: p_veJsDDNvSHy3VUwrKfXTt4
        status: active
        display_name: 王思恭
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王缄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王缄（卒于672年），唐人物。籍贯臨沂，曾任州司馬。（中国历代人物传记资料库 CBDB 175394） | accepted |
| death.date | 672年 | accepted |
| name.primary | 王缄 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ujGjqexGpFHSeeL644vaA9 | 王弘直 | accepted |
| children | p_V58imM4qevLKTMUDbrBs11 | 王思晳 | accepted |
| children | p_veJsDDNvSHy3VUwrKfXTt4 | 王思恭 | accepted |

## 外部来源

- [维基数据：王弘直（Q45656974）](https://www.wikidata.org/wiki/Q45656974)
- [维基数据：王缄（Q18905540）](https://www.wikidata.org/wiki/Q18905540)
- [维基数据：王思恭（Q45657276）](https://www.wikidata.org/wiki/Q45657276)
- [维基数据：王思晳（Q45657096）](https://www.wikidata.org/wiki/Q45657096)
- [CBDB 中国历代人物传记资料库：王弘直（175393）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175393&o=json)
- [CBDB 中国历代人物传记资料库：王緘（175394）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175394&o=json)
- [CBDB 中国历代人物传记资料库：王思恭（175398）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175398&o=json)
- [CBDB 中国历代人物传记资料库：王思晳（175395）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175395&o=json)
