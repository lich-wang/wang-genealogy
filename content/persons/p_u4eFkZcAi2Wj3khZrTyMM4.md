---
schema: wang-person/v1
id: p_u4eFkZcAi2Wj3khZrTyMM4
status: active
merged_into: null
display_name: 王棣
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_q1wD8f5f3h4tQzhxvR5am8
        subject_person_id: p_u4eFkZcAi2Wj3khZrTyMM4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棣（卒于1109年），宋人物。CBDB 记录其籍贯记录为臨川，曾任資政殿學士、顯謨閣待制。中国历代人物传记资料库（CBDB）以人物编号 22210 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_LYAi5JC25SF4Vua1h23thg
          claim_id: c_q1wD8f5f3h4tQzhxvR5am8
          source_id: s_uYseLrzAvUDGJLA7cNfC2e
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_uYseLrzAvUDGJLA7cNfC2e
            source_type: api_record
            title: 维基数据：王棣（Q45402041）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45402041
            external_identifier: Q45402041
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:22.443Z
            metadata_json: null
        - id: cs_f1mMKnABcjTBrHFjWrPUyI
          claim_id: c_q1wD8f5f3h4tQzhxvR5am8
          source_id: s_hyn3RBownq9NTiG26mHH8p
          stance: supports
          locator: CBDB:22210
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_hyn3RBownq9NTiG26mHH8p
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王棣（22210）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22210&o=json
            external_identifier: CBDB:22210
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:22.578Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_1kQ4KuJdqZWWdcEMzhfHs6
        subject_person_id: p_u4eFkZcAi2Wj3khZrTyMM4
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1109年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1109-01-01
            latest: 1109-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fCmA6h2dLkB9vSn9GczkLp
          claim_id: c_1kQ4KuJdqZWWdcEMzhfHs6
          source_id: s_uYseLrzAvUDGJLA7cNfC2e
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_uYseLrzAvUDGJLA7cNfC2e
            source_type: api_record
            title: 维基数据：王棣（Q45402041）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45402041
            external_identifier: Q45402041
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:22.443Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7DB4FEtWuaVcpFbSx2ak7z
        subject_person_id: p_u4eFkZcAi2Wj3khZrTyMM4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棣
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_DPtqMDoz24ZbzekAKuF9DQ
          claim_id: c_7DB4FEtWuaVcpFbSx2ak7z
          source_id: s_uYseLrzAvUDGJLA7cNfC2e
          stance: supports
          locator: Q45402041
          quotation: null
          interpretation_note: null
          source:
            id: s_uYseLrzAvUDGJLA7cNfC2e
            source_type: api_record
            title: 维基数据：王棣（Q45402041）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45402041
            external_identifier: Q45402041
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:22.443Z
            metadata_json: null
        - id: cs_FAKiU934E8zHDmKVSYPJ3m
          claim_id: c_7DB4FEtWuaVcpFbSx2ak7z
          source_id: s_hyn3RBownq9NTiG26mHH8p
          stance: supports
          locator: Q45402041
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_6JpLR5vaSs2JrbcLmBPGaB
        subject_person_id: p_3jndG2hj7kt16dVBTqH186
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_u4eFkZcAi2Wj3khZrTyMM4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_XETUEftJf9U3Z7mHjS3VrF
          claim_id: c_6JpLR5vaSs2JrbcLmBPGaB
          source_id: s_N8eFyA9jxYjP3URGB4QvGz
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_N8eFyA9jxYjP3URGB4QvGz
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王雱（3968）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3968&o=json
            external_identifier: CBDB:3968
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:20.279Z
            metadata_json: null
        - id: cs_ZeWGirjKuxV227JcyyGPjH
          claim_id: c_6JpLR5vaSs2JrbcLmBPGaB
          source_id: s_VdmXrxM2y5tkGjKCX4GHbD
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_VdmXrxM2y5tkGjKCX4GHbD
            source_type: api_record
            title: 維基數據：王雱（Q15936430）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15936430
            external_identifier: Q15936430
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:09:58.250Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%9B%B1
        - id: cs_J9VZgRmSM2ppzD61w7Z5o9
          claim_id: c_6JpLR5vaSs2JrbcLmBPGaB
          source_id: s_uYseLrzAvUDGJLA7cNfC2e
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_uYseLrzAvUDGJLA7cNfC2e
            source_type: api_record
            title: 维基数据：王棣（Q45402041）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45402041
            external_identifier: Q45402041
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:22.443Z
            metadata_json: null
        - id: cs_UQRN3bWGtsfRpa8bnMSg6r
          claim_id: c_6JpLR5vaSs2JrbcLmBPGaB
          source_id: s_hyn3RBownq9NTiG26mHH8p
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_hyn3RBownq9NTiG26mHH8p
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王棣（22210）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22210&o=json
            external_identifier: CBDB:22210
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:22.578Z
            metadata_json: null
      object_person:
        id: p_3jndG2hj7kt16dVBTqH186
        status: active
        display_name: 王雱
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王棣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王棣（卒于1109年），宋人物。CBDB 记录其籍贯记录为臨川，曾任資政殿學士、顯謨閣待制。中国历代人物传记资料库（CBDB）以人物编号 22210 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 1109年 | accepted |
| name.primary | 王棣 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3jndG2hj7kt16dVBTqH186 | 王雱 | accepted |

## 外部来源

- [维基数据：王棣（Q45402041）](https://www.wikidata.org/wiki/Q45402041)
- [維基數據：王雱（Q15936430）](https://www.wikidata.org/wiki/Q15936430)
- [CBDB 中国历代人物传记资料库：王棣（22210）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22210&o=json)
- [CBDB 中国历代人物传记资料库：王雱（3968）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3968&o=json)
