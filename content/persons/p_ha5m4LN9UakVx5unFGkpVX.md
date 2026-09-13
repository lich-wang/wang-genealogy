---
schema: wang-person/v1
id: p_ha5m4LN9UakVx5unFGkpVX
status: active
merged_into: null
display_name: 王迺
cbdb_id: 175472
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wY6XRy5KRS4bCKPu15MxHN
        subject_person_id: p_ha5m4LN9UakVx5unFGkpVX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王迺（卒于820年），唐人物。籍贯咸陽，曾任州刺史。（中国历代人物传记资料库 CBDB 175472）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_ZBKB2NB3zZXeFRCu9bcMoG
          claim_id: c_wY6XRy5KRS4bCKPu15MxHN
          source_id: s_v93UjDK4HtFgtC7k5uYMK8
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_v93UjDK4HtFgtC7k5uYMK8
            source_type: api_record
            title: 维基数据：王迺（Q45661685）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661685
            external_identifier: Q45661685
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:26.232Z
            metadata_json: null
        - id: cs_nXTj1aEKl7CJ99MQwnS_HZ
          claim_id: c_wY6XRy5KRS4bCKPu15MxHN
          source_id: s_kbAVZNXV2iP2or6UX1J3Mm
          stance: supports
          locator: CBDB:175472
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_kbAVZNXV2iP2or6UX1J3Mm
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王迺（175472）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175472&o=json
            external_identifier: CBDB:175472
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:26.392Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_k2at1gzZEfG7ewC2Sy2oAG
        subject_person_id: p_ha5m4LN9UakVx5unFGkpVX
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 820年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0820-01-01
            latest: 0820-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tH1KDNoLKsqJqn1Wtfp4r8
          claim_id: c_k2at1gzZEfG7ewC2Sy2oAG
          source_id: s_v93UjDK4HtFgtC7k5uYMK8
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_v93UjDK4HtFgtC7k5uYMK8
            source_type: api_record
            title: 维基数据：王迺（Q45661685）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661685
            external_identifier: Q45661685
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:26.232Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_AExfQnYShDY5umnD7K2Rtp
        subject_person_id: p_ha5m4LN9UakVx5unFGkpVX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王迺
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_bTG8eSGDVAu2qWr1GtmwMX
          claim_id: c_AExfQnYShDY5umnD7K2Rtp
          source_id: s_kbAVZNXV2iP2or6UX1J3Mm
          stance: supports
          locator: Q45661685
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_d6oZQ3x7Xv8W9yZJqguXpq
          claim_id: c_AExfQnYShDY5umnD7K2Rtp
          source_id: s_v93UjDK4HtFgtC7k5uYMK8
          stance: supports
          locator: Q45661685
          quotation: null
          interpretation_note: null
          source:
            id: s_v93UjDK4HtFgtC7k5uYMK8
            source_type: api_record
            title: 维基数据：王迺（Q45661685）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661685
            external_identifier: Q45661685
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:26.232Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_x2CvayzSdq6bQ4Rk6G3BMd
        subject_person_id: p_MSdU233nM5wdxC7iCwusHu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ha5m4LN9UakVx5unFGkpVX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_f9JcEg4CLfMgdBmgpBWoBL
          claim_id: c_x2CvayzSdq6bQ4Rk6G3BMd
          source_id: s_HhevPEBLU4JGud3etd1upo
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_HhevPEBLU4JGud3etd1upo
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王澄（175470）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175470&o=json
            external_identifier: CBDB:175470
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:56.082Z
            metadata_json: null
        - id: cs_mEoUqGNgALBQD7rgs9uzC2
          claim_id: c_x2CvayzSdq6bQ4Rk6G3BMd
          source_id: s_4fQBPy6QqzcQHB5fC9SqkK
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_4fQBPy6QqzcQHB5fC9SqkK
            source_type: api_record
            title: 维基数据：王澄（Q45661568）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661568
            external_identifier: Q45661568
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:55.918Z
            metadata_json: null
        - id: cs_xWFACiLTfXrgahdmJHmkpG
          claim_id: c_x2CvayzSdq6bQ4Rk6G3BMd
          source_id: s_v93UjDK4HtFgtC7k5uYMK8
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_v93UjDK4HtFgtC7k5uYMK8
            source_type: api_record
            title: 维基数据：王迺（Q45661685）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661685
            external_identifier: Q45661685
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:26.232Z
            metadata_json: null
        - id: cs_pukhUtH9FTJUiD8QVWMV6P
          claim_id: c_x2CvayzSdq6bQ4Rk6G3BMd
          source_id: s_kbAVZNXV2iP2or6UX1J3Mm
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_kbAVZNXV2iP2or6UX1J3Mm
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王迺（175472）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175472&o=json
            external_identifier: CBDB:175472
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:26.392Z
            metadata_json: null
      object_person:
        id: p_MSdU233nM5wdxC7iCwusHu
        status: active
        display_name: 王澄
        merged_into_person_id: null
  children:
    - claim:
        id: c_V6fwCaUso94n1WP1z68PLQ
        subject_person_id: p_ha5m4LN9UakVx5unFGkpVX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3jK9sTg786F3CP2aot15vN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_53p82uojDhaYTgSsQZod3S
          claim_id: c_V6fwCaUso94n1WP1z68PLQ
          source_id: s_kbAVZNXV2iP2or6UX1J3Mm
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_kbAVZNXV2iP2or6UX1J3Mm
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王迺（175472）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175472&o=json
            external_identifier: CBDB:175472
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:26.392Z
            metadata_json: null
        - id: cs_88xjiG8xMsJ3Z2MSQECZf2
          claim_id: c_V6fwCaUso94n1WP1z68PLQ
          source_id: s_v93UjDK4HtFgtC7k5uYMK8
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_v93UjDK4HtFgtC7k5uYMK8
            source_type: api_record
            title: 维基数据：王迺（Q45661685）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661685
            external_identifier: Q45661685
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:26.232Z
            metadata_json: null
        - id: cs_o5vWn1niudseW5Y7Yyv7WY
          claim_id: c_V6fwCaUso94n1WP1z68PLQ
          source_id: s_mnHR95MQLtKZkHjzeKmCZM
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_mnHR95MQLtKZkHjzeKmCZM
            source_type: api_record
            title: 维基数据：王𬬩（Q45661744）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661744
            external_identifier: Q45661744
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:04.037Z
            metadata_json: null
        - id: cs_oHL3BuM7YdR9DPLfs6fBp2
          claim_id: c_V6fwCaUso94n1WP1z68PLQ
          source_id: s_HcTYBmjzE3G7QihG4FiK47
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_HcTYBmjzE3G7QihG4FiK47
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王釴（175473）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175473&o=json
            external_identifier: CBDB:175473
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:20:04.241Z
            metadata_json: null
      object_person:
        id: p_3jK9sTg786F3CP2aot15vN
        status: active
        display_name: 王𬬩
        merged_into_person_id: null
    - claim:
        id: c_o6j4MMCLRwPnRNA5r8geX6
        subject_person_id: p_ha5m4LN9UakVx5unFGkpVX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_W7sbBGFLw3pXj4tgKRKqhx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_aafr6x7g8XnxWteVpw3S5K
          claim_id: c_o6j4MMCLRwPnRNA5r8geX6
          source_id: s_kbAVZNXV2iP2or6UX1J3Mm
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_kbAVZNXV2iP2or6UX1J3Mm
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王迺（175472）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175472&o=json
            external_identifier: CBDB:175472
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:26.392Z
            metadata_json: null
        - id: cs_coLCky4Fyr2zWPCYsqmFrb
          claim_id: c_o6j4MMCLRwPnRNA5r8geX6
          source_id: s_v93UjDK4HtFgtC7k5uYMK8
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_v93UjDK4HtFgtC7k5uYMK8
            source_type: api_record
            title: 维基数据：王迺（Q45661685）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661685
            external_identifier: Q45661685
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:26.232Z
            metadata_json: null
        - id: cs_HFBNjA2f36svL9858L8DES
          claim_id: c_o6j4MMCLRwPnRNA5r8geX6
          source_id: s_tFTUcEu5S49pbtsV1ms4aH
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_tFTUcEu5S49pbtsV1ms4aH
            source_type: api_record
            title: 维基数据：王镐（Q45661804）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661804
            external_identifier: Q45661804
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:04.038Z
            metadata_json: null
        - id: cs_z3CVpxCZnNedcyfpMPHTGW
          claim_id: c_o6j4MMCLRwPnRNA5r8geX6
          source_id: s_7UGoTBSHhk6PsaiwGZeuUq
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7UGoTBSHhk6PsaiwGZeuUq
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王鎬（175474）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175474&o=json
            external_identifier: CBDB:175474
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:20:04.263Z
            metadata_json: null
      object_person:
        id: p_W7sbBGFLw3pXj4tgKRKqhx
        status: active
        display_name: 王镐
        merged_into_person_id: null
    - claim:
        id: c_weHEQf1wzxPab3JRtHyLDG
        subject_person_id: p_ha5m4LN9UakVx5unFGkpVX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vmvqLZ7vdsKrGNSD1TycUV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_YkZ19FGVELyfZCHAqJG5Ms
          claim_id: c_weHEQf1wzxPab3JRtHyLDG
          source_id: s_kbAVZNXV2iP2or6UX1J3Mm
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_kbAVZNXV2iP2or6UX1J3Mm
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王迺（175472）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175472&o=json
            external_identifier: CBDB:175472
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:26.392Z
            metadata_json: null
        - id: cs_pPVXBKtKsASEr55CKZkV2Y
          claim_id: c_weHEQf1wzxPab3JRtHyLDG
          source_id: s_v93UjDK4HtFgtC7k5uYMK8
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_v93UjDK4HtFgtC7k5uYMK8
            source_type: api_record
            title: 维基数据：王迺（Q45661685）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661685
            external_identifier: Q45661685
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:26.232Z
            metadata_json: null
        - id: cs_UqtMiphPRtVzeKC7SwMpwA
          claim_id: c_weHEQf1wzxPab3JRtHyLDG
          source_id: s_M1cU3n3SMfVqeqeUy9zBvw
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_M1cU3n3SMfVqeqeUy9zBvw
            source_type: api_record
            title: 维基数据：王镕（Q45661863）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45661863
            external_identifier: Q45661863
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:04.038Z
            metadata_json: null
        - id: cs_KenLdLY41qH3T8G4NexPGJ
          claim_id: c_weHEQf1wzxPab3JRtHyLDG
          source_id: s_p11G33na4PfF9BsVCShiQC
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_p11G33na4PfF9BsVCShiQC
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王鎔（175475）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175475&o=json
            external_identifier: CBDB:175475
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:20:04.257Z
            metadata_json: null
      object_person:
        id: p_vmvqLZ7vdsKrGNSD1TycUV
        status: active
        display_name: 王镕
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王迺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王迺（卒于820年），唐人物。籍贯咸陽，曾任州刺史。（中国历代人物传记资料库 CBDB 175472） | accepted |
| death.date | 820年 | accepted |
| name.primary | 王迺 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MSdU233nM5wdxC7iCwusHu | 王澄 | accepted |
| children | p_3jK9sTg786F3CP2aot15vN | 王𬬩 | accepted |
| children | p_W7sbBGFLw3pXj4tgKRKqhx | 王镐 | accepted |
| children | p_vmvqLZ7vdsKrGNSD1TycUV | 王镕 | accepted |

## 外部来源

- [维基数据：王澄（Q45661568）](https://www.wikidata.org/wiki/Q45661568)
- [维基数据：王镐（Q45661804）](https://www.wikidata.org/wiki/Q45661804)
- [维基数据：王迺（Q45661685）](https://www.wikidata.org/wiki/Q45661685)
- [维基数据：王镕（Q45661863）](https://www.wikidata.org/wiki/Q45661863)
- [维基数据：王𬬩（Q45661744）](https://www.wikidata.org/wiki/Q45661744)
- [CBDB 中国历代人物传记资料库：王澄（175470）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175470&o=json)
- [CBDB 中国历代人物传记资料库：王鎬（175474）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175474&o=json)
- [CBDB 中国历代人物传记资料库：王迺（175472）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175472&o=json)
- [CBDB 中国历代人物传记资料库：王鎔（175475）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175475&o=json)
- [CBDB 中国历代人物传记资料库：王釴（175473）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175473&o=json)
