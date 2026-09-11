---
schema: wang-person/v1
id: p_xf9mHYCEP9VyeEbrAsuExM
status: active
merged_into: null
display_name: 王仁
cbdb_id: 25783
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qf8ipHX33XwJ7NJ6oPXwkQ
        subject_person_id: p_xf9mHYCEP9VyeEbrAsuExM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁，東漢人物。CBDB 记录其籍贯记录为沂水。中国历代人物传记资料库（CBDB）以人物编号 25783 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_XDWXBCdV2A8jeu3n6tV7TA
          claim_id: c_qf8ipHX33XwJ7NJ6oPXwkQ
          source_id: s_E62U81cbJT7dBHVFDDwfqd
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_E62U81cbJT7dBHVFDDwfqd
            source_type: api_record
            title: 维基数据：王仁（Q22814785）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814785
            external_identifier: Q22814785
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:59.387Z
            metadata_json: null
        - id: cs_JBUXwSSjLjERuNXaHYpNaD
          claim_id: c_qf8ipHX33XwJ7NJ6oPXwkQ
          source_id: s_DC4LPUC297szmUsZqp59Mq
          stance: supports
          locator: CBDB:25783
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_DC4LPUC297szmUsZqp59Mq
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王仁（25783）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25783&o=json
            external_identifier: CBDB:25783
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:59.525Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_S4Xm9PzjyW5fDK7xzYRLJA
        subject_person_id: p_xf9mHYCEP9VyeEbrAsuExM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_bvvMmLWVvogA7FdxC7MSG9
          claim_id: c_S4Xm9PzjyW5fDK7xzYRLJA
          source_id: s_DC4LPUC297szmUsZqp59Mq
          stance: supports
          locator: Q22814785
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_byEB3tnWxttv7XFVge611E
          claim_id: c_S4Xm9PzjyW5fDK7xzYRLJA
          source_id: s_E62U81cbJT7dBHVFDDwfqd
          stance: supports
          locator: Q22814785
          quotation: null
          interpretation_note: null
          source:
            id: s_E62U81cbJT7dBHVFDDwfqd
            source_type: api_record
            title: 维基数据：王仁（Q22814785）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814785
            external_identifier: Q22814785
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:59.387Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5Cc3FsKXofMbzUTveRrfUa
        subject_person_id: p_HEAZUpK6B8392UvpQkxb4J
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xf9mHYCEP9VyeEbrAsuExM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_ATM2UothvXdYWKBKAQiGDZ
          claim_id: c_5Cc3FsKXofMbzUTveRrfUa
          source_id: s_E62U81cbJT7dBHVFDDwfqd
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_E62U81cbJT7dBHVFDDwfqd
            source_type: api_record
            title: 维基数据：王仁（Q22814785）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814785
            external_identifier: Q22814785
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:59.387Z
            metadata_json: null
        - id: cs_AUEYZ8Y4ZB8D6wjqGNgUsp
          claim_id: c_5Cc3FsKXofMbzUTveRrfUa
          source_id: s_jdcBv1F9fzN33tMfhQxUMK
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_jdcBv1F9fzN33tMfhQxUMK
            source_type: api_record
            title: 维基数据：王音（Q108167711）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q108167711
            external_identifier: Q108167711
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:17.813Z
            metadata_json: null
      object_person:
        id: p_HEAZUpK6B8392UvpQkxb4J
        status: active
        display_name: 王音
        merged_into_person_id: null
  children:
    - claim:
        id: c_yiV1aK9dgL4ne7rgZoVc5W
        subject_person_id: p_xf9mHYCEP9VyeEbrAsuExM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_G6A9Mv1GnTEMMvApxP4pWa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_BcCrE3YaDVkHAQGs3jNrVP
          claim_id: c_yiV1aK9dgL4ne7rgZoVc5W
          source_id: s_usi9A3QdLgsHXzkSBTdf9P
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_usi9A3QdLgsHXzkSBTdf9P
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王融（25784）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25784&o=json
            external_identifier: CBDB:25784
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:51:33.735Z
            metadata_json: null
        - id: cs_i86fBZgXGSsXoNiFUVEyXv
          claim_id: c_yiV1aK9dgL4ne7rgZoVc5W
          source_id: s_hKoGvmAvsyR2xVzQX9fBWX
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_hKoGvmAvsyR2xVzQX9fBWX
            source_type: api_record
            title: 維基數據：王融（Q22814786）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814786
            external_identifier: Q22814786
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:33.786Z
            metadata_json: null
        - id: cs_GoWj3RETjKSkXKuuuSB2CD
          claim_id: c_yiV1aK9dgL4ne7rgZoVc5W
          source_id: s_E62U81cbJT7dBHVFDDwfqd
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_E62U81cbJT7dBHVFDDwfqd
            source_type: api_record
            title: 维基数据：王仁（Q22814785）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814785
            external_identifier: Q22814785
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:59.387Z
            metadata_json: null
        - id: cs_wDHbkXoqGQN1j9WxthqPsA
          claim_id: c_yiV1aK9dgL4ne7rgZoVc5W
          source_id: s_DC4LPUC297szmUsZqp59Mq
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_DC4LPUC297szmUsZqp59Mq
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王仁（25783）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25783&o=json
            external_identifier: CBDB:25783
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:59.525Z
            metadata_json: null
      object_person:
        id: p_G6A9Mv1GnTEMMvApxP4pWa
        status: active
        display_name: 王融
        merged_into_person_id: null
    - claim:
        id: c_Gg2MmXyKFntqD7xLPippMS
        subject_person_id: p_xf9mHYCEP9VyeEbrAsuExM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vmBV1uQSC3WNCsyT7DEMtB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_772DajJhkUUWAFJgeP8KqF
          claim_id: c_Gg2MmXyKFntqD7xLPippMS
          source_id: s_E62U81cbJT7dBHVFDDwfqd
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_E62U81cbJT7dBHVFDDwfqd
            source_type: api_record
            title: 维基数据：王仁（Q22814785）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814785
            external_identifier: Q22814785
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:59.387Z
            metadata_json: null
        - id: cs_mbG3yZY4niPDor2nzpvDoX
          claim_id: c_Gg2MmXyKFntqD7xLPippMS
          source_id: s_tGCeJ58FwjuwHk2wxU2PfU
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_tGCeJ58FwjuwHk2wxU2PfU
            source_type: api_record
            title: 维基数据：王叡（Q8012902）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q8012902
            external_identifier: Q8012902
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:19.655Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8F%A1_(%E6%9D%B1%E6%BC%A2)
      object_person:
        id: p_vmBV1uQSC3WNCsyT7DEMtB
        status: active
        display_name: 王叡
        merged_into_person_id: null
    - claim:
        id: c_rEgbnOLB1H5KeW0VfQ1QV4
        subject_person_id: p_xf9mHYCEP9VyeEbrAsuExM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zvLndh537Hcxa1SH9KmMTE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WzNJcVGE5F-Meur5bu2rWJ
          claim_id: c_rEgbnOLB1H5KeW0VfQ1QV4
          source_id: s_DC4LPUC297szmUsZqp59Mq
          stance: supports
          locator: CBDB 双向互证（子 王融 ⇄ 父 王仁）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_zvLndh537Hcxa1SH9KmMTE
        status: active
        display_name: 王融
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王仁，東漢人物。CBDB 记录其籍贯记录为沂水。中国历代人物传记资料库（CBDB）以人物编号 25783 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王仁 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HEAZUpK6B8392UvpQkxb4J | 王音 | accepted |
| children | p_G6A9Mv1GnTEMMvApxP4pWa | 王融 | accepted |
| children | p_vmBV1uQSC3WNCsyT7DEMtB | 王叡 | accepted |
| children | p_zvLndh537Hcxa1SH9KmMTE | 王融 | accepted |

## 外部来源

- [维基数据：王仁（Q22814785）](https://www.wikidata.org/wiki/Q22814785)
- [维基数据：王叡（Q8012902）](https://www.wikidata.org/wiki/Q8012902)
- [维基数据：王音（Q108167711）](https://www.wikidata.org/wiki/Q108167711)
- [維基數據：王融（Q22814786）](https://www.wikidata.org/wiki/Q22814786)
- [CBDB 中国历代人物传记资料库：王仁（25783）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25783&o=json)
- [CBDB 中国历代人物传记资料库：王融（25784）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25784&o=json)
