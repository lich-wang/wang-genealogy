---
schema: wang-person/v1
id: p_rRe1MYifTALRTroz4iZG8i
status: active
merged_into: null
display_name: 王纵
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8KZkJ5AhnJSeNYAYkHqyuA
        subject_person_id: p_rRe1MYifTALRTroz4iZG8i
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王纵（卒于770年），唐人物。CBDB 记录其籍贯记录为京兆府。中国历代人物传记资料库（CBDB）以人物编号 175381 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_KZtAqoaJSnH7NVbF9eNLKd
          claim_id: c_8KZkJ5AhnJSeNYAYkHqyuA
          source_id: s_1y6Whfper9sB13aAFKU8bc
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_1y6Whfper9sB13aAFKU8bc
            source_type: api_record
            title: 维基数据：王纵（Q45656430）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656430
            external_identifier: Q45656430
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:52.101Z
            metadata_json: null
        - id: cs_DvSM2McpSh4xk2rzAWmrjJ
          claim_id: c_8KZkJ5AhnJSeNYAYkHqyuA
          source_id: s_1qVNJgS51ap7jEiNZPAHQm
          stance: supports
          locator: CBDB:175381
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_1qVNJgS51ap7jEiNZPAHQm
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王縱（175381）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175381&o=json
            external_identifier: CBDB:175381
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:52.267Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_9FV9k1G3uQvUa2ETjevHc3
        subject_person_id: p_rRe1MYifTALRTroz4iZG8i
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 770年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0770-01-01
            latest: 0770-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7vZsMtyo6pPRX8SF96CMLq
          claim_id: c_9FV9k1G3uQvUa2ETjevHc3
          source_id: s_1y6Whfper9sB13aAFKU8bc
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_1y6Whfper9sB13aAFKU8bc
            source_type: api_record
            title: 维基数据：王纵（Q45656430）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656430
            external_identifier: Q45656430
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:52.101Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_StEVjUafByEHRGDBhKiQt9
        subject_person_id: p_rRe1MYifTALRTroz4iZG8i
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王纵
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_KYD2CwtsputFkbpVAQgfPU
          claim_id: c_StEVjUafByEHRGDBhKiQt9
          source_id: s_1y6Whfper9sB13aAFKU8bc
          stance: supports
          locator: Q45656430
          quotation: null
          interpretation_note: null
          source:
            id: s_1y6Whfper9sB13aAFKU8bc
            source_type: api_record
            title: 维基数据：王纵（Q45656430）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656430
            external_identifier: Q45656430
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:52.101Z
            metadata_json: null
        - id: cs_kMPtfdsxVTMWNHE5F7LT95
          claim_id: c_StEVjUafByEHRGDBhKiQt9
          source_id: s_1qVNJgS51ap7jEiNZPAHQm
          stance: supports
          locator: Q45656430
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_G2nHHoxssLWE2cpVXsmkZY
        subject_person_id: p_gNNKGh9cA8mj3unQMkURSh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rRe1MYifTALRTroz4iZG8i
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_V3yzL2obxFKvJG5YawDRcU
          claim_id: c_G2nHHoxssLWE2cpVXsmkZY
          source_id: s_QQrkFEYA4rGqsNhmtcv3Fp
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_QQrkFEYA4rGqsNhmtcv3Fp
            source_type: api_record
            title: 维基数据：王升（Q45656308）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656308
            external_identifier: Q45656308
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:34.351Z
            metadata_json: null
        - id: cs_vfc2Yj4H6FYfho8VZWUKyT
          claim_id: c_G2nHHoxssLWE2cpVXsmkZY
          source_id: s_6PJvQF2kNSdTSx2XaQ7NC3
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_6PJvQF2kNSdTSx2XaQ7NC3
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王昇（175379）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175379&o=json
            external_identifier: CBDB:175379
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:34.513Z
            metadata_json: null
        - id: cs_XmirLXisejbspg7ru3WrLm
          claim_id: c_G2nHHoxssLWE2cpVXsmkZY
          source_id: s_1y6Whfper9sB13aAFKU8bc
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_1y6Whfper9sB13aAFKU8bc
            source_type: api_record
            title: 维基数据：王纵（Q45656430）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656430
            external_identifier: Q45656430
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:52.101Z
            metadata_json: null
        - id: cs_WaTFdDaWCsp15KBa67Vy27
          claim_id: c_G2nHHoxssLWE2cpVXsmkZY
          source_id: s_1qVNJgS51ap7jEiNZPAHQm
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_1qVNJgS51ap7jEiNZPAHQm
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王縱（175381）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175381&o=json
            external_identifier: CBDB:175381
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:52.267Z
            metadata_json: null
      object_person:
        id: p_gNNKGh9cA8mj3unQMkURSh
        status: active
        display_name: 王升
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王纵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王纵（卒于770年），唐人物。CBDB 记录其籍贯记录为京兆府。中国历代人物传记资料库（CBDB）以人物编号 175381 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 770年 | accepted |
| name.primary | 王纵 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gNNKGh9cA8mj3unQMkURSh | 王升 | accepted |

## 外部来源

- [维基数据：王升（Q45656308）](https://www.wikidata.org/wiki/Q45656308)
- [维基数据：王纵（Q45656430）](https://www.wikidata.org/wiki/Q45656430)
- [CBDB 中国历代人物传记资料库：王昇（175379）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175379&o=json)
- [CBDB 中国历代人物传记资料库：王縱（175381）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175381&o=json)
