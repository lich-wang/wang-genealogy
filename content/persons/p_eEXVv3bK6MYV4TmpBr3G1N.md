---
schema: wang-person/v1
id: p_eEXVv3bK6MYV4TmpBr3G1N
status: active
merged_into: null
display_name: 王乂
cbdb_id: 175554
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5vnv5cjNJsJkekiLzsLBgA
        subject_person_id: p_eEXVv3bK6MYV4TmpBr3G1N
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王乂（卒于805年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175554 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Mi3K6BDXWTSVJkTbDt3bdA
          claim_id: c_5vnv5cjNJsJkekiLzsLBgA
          source_id: s_BcAFFHMGnzvEub1jLEpS18
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_BcAFFHMGnzvEub1jLEpS18
            source_type: api_record
            title: 维基数据：王乂（Q45666235）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666235
            external_identifier: Q45666235
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:13.730Z
            metadata_json: null
        - id: cs_z_JdeTvgGeGVmjpLxGjAl5
          claim_id: c_5vnv5cjNJsJkekiLzsLBgA
          source_id: s_kPAdrddJaYTGdXbFKbqSvq
          stance: supports
          locator: CBDB:175554
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_kPAdrddJaYTGdXbFKbqSvq
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王乂（175554）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175554&o=json
            external_identifier: CBDB:175554
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:13.874Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_g5cAaKFiU38Fgf4JGxfaEE
        subject_person_id: p_eEXVv3bK6MYV4TmpBr3G1N
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 805年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0805-01-01
            latest: 0805-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7ECAEVHNE2P97argWyeNff
          claim_id: c_g5cAaKFiU38Fgf4JGxfaEE
          source_id: s_BcAFFHMGnzvEub1jLEpS18
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_BcAFFHMGnzvEub1jLEpS18
            source_type: api_record
            title: 维基数据：王乂（Q45666235）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666235
            external_identifier: Q45666235
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:13.730Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4ADj6iaPWcuCKeeB1CvaCt
        subject_person_id: p_eEXVv3bK6MYV4TmpBr3G1N
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王乂
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Nog6i7bo2gX1ZavLDWfSQ4
          claim_id: c_4ADj6iaPWcuCKeeB1CvaCt
          source_id: s_BcAFFHMGnzvEub1jLEpS18
          stance: supports
          locator: Q45666235
          quotation: null
          interpretation_note: null
          source:
            id: s_BcAFFHMGnzvEub1jLEpS18
            source_type: api_record
            title: 维基数据：王乂（Q45666235）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666235
            external_identifier: Q45666235
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:13.730Z
            metadata_json: null
        - id: cs_eZBq1wGEbFUNa5BZwox4vj
          claim_id: c_4ADj6iaPWcuCKeeB1CvaCt
          source_id: s_kPAdrddJaYTGdXbFKbqSvq
          stance: supports
          locator: Q45666235
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gsm98ub3b7rYyKznE3G3xU
        subject_person_id: p_o3CtQwgPCb9SPDjiw6AWp7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eEXVv3bK6MYV4TmpBr3G1N
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_KfFiEYsCUQTLTW4srkYK4c
          claim_id: c_gsm98ub3b7rYyKznE3G3xU
          source_id: s_y7Ty8hHvBFKCvjH2p9WUi9
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_y7Ty8hHvBFKCvjH2p9WUi9
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王璵（175542）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175542&o=json
            external_identifier: CBDB:175542
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:20:06.035Z
            metadata_json: null
        - id: cs_zD5GCtz9wshfPWbgTRjwMw
          claim_id: c_gsm98ub3b7rYyKznE3G3xU
          source_id: s_8JJBz2XuxNkrWkBP19JReT
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_8JJBz2XuxNkrWkBP19JReT
            source_type: api_record
            title: 维基数据：王玙（Q7967736）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q7967736
            external_identifier: Q7967736
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:20:05.883Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%8E%99
        - id: cs_FKz5vt6dwcK7MddoCAonKU
          claim_id: c_gsm98ub3b7rYyKznE3G3xU
          source_id: s_BcAFFHMGnzvEub1jLEpS18
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_BcAFFHMGnzvEub1jLEpS18
            source_type: api_record
            title: 维基数据：王乂（Q45666235）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666235
            external_identifier: Q45666235
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:13.730Z
            metadata_json: null
        - id: cs_t1zbG35rjMKizGDaBcv7fU
          claim_id: c_gsm98ub3b7rYyKznE3G3xU
          source_id: s_kPAdrddJaYTGdXbFKbqSvq
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_kPAdrddJaYTGdXbFKbqSvq
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王乂（175554）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175554&o=json
            external_identifier: CBDB:175554
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:13.874Z
            metadata_json: null
      object_person:
        id: p_o3CtQwgPCb9SPDjiw6AWp7
        status: active
        display_name: 王玙
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王乂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王乂（卒于805年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175554 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 805年 | accepted |
| name.primary | 王乂 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_o3CtQwgPCb9SPDjiw6AWp7 | 王玙 | accepted |

## 外部来源

- [维基数据：王乂（Q45666235）](https://www.wikidata.org/wiki/Q45666235)
- [维基数据：王玙（Q7967736）](https://www.wikidata.org/wiki/Q7967736)
- [CBDB 中国历代人物传记资料库：王乂（175554）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175554&o=json)
- [CBDB 中国历代人物传记资料库：王璵（175542）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175542&o=json)
