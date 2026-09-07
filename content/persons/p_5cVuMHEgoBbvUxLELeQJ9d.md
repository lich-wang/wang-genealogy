---
schema: wang-person/v1
id: p_5cVuMHEgoBbvUxLELeQJ9d
status: active
merged_into: null
display_name: 孝平王皇后
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iKebrNRz6XJCygFtQQ5hYX
        subject_person_id: p_5cVuMHEgoBbvUxLELeQJ9d
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 孝平王皇后（前7年—23年），史料所见人物。本项目依据《維基數據：孝平王皇后》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_ZDm3TfJE6ruc6ZEqvX4SnC
          claim_id: c_iKebrNRz6XJCygFtQQ5hYX
          source_id: s_JawYCzdd2kghY1PkvFYY6b
          stance: supports
          locator: Q712297
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_JawYCzdd2kghY1PkvFYY6b
            source_type: api_record
            title: 維基數據：孝平王皇后（Q712297）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q712297
            external_identifier: Q712297
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:48.190Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E5%AD%9D%E5%B9%B3%E7%8E%8B%E7%9A%87%E5%90%8E
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_viRV1u5Zof3yMNkrg2ELZc
        subject_person_id: p_5cVuMHEgoBbvUxLELeQJ9d
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 前7年
            calendar_note: 維基數據 P569 結構化日期，精度：年
            earliest: null
            latest: null
            precision: unknown
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_f6uMzTsi7Pu75oMhaMKLUX
          claim_id: c_viRV1u5Zof3yMNkrg2ELZc
          source_id: s_JawYCzdd2kghY1PkvFYY6b
          stance: supports
          locator: Q712297
          quotation: null
          interpretation_note: null
          source:
            id: s_JawYCzdd2kghY1PkvFYY6b
            source_type: api_record
            title: 維基數據：孝平王皇后（Q712297）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q712297
            external_identifier: Q712297
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:48.190Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E5%AD%9D%E5%B9%B3%E7%8E%8B%E7%9A%87%E5%90%8E
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_GWbEj5fofjVR8pzNKdwQQr
        subject_person_id: p_5cVuMHEgoBbvUxLELeQJ9d
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 23年
            calendar_note: 維基數據 P570 結構化日期，精度：年
            earliest: null
            latest: null
            precision: unknown
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eUvA5mDRiNktyiW9KefQws
          claim_id: c_GWbEj5fofjVR8pzNKdwQQr
          source_id: s_JawYCzdd2kghY1PkvFYY6b
          stance: supports
          locator: Q712297
          quotation: null
          interpretation_note: null
          source:
            id: s_JawYCzdd2kghY1PkvFYY6b
            source_type: api_record
            title: 維基數據：孝平王皇后（Q712297）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q712297
            external_identifier: Q712297
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:48.190Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E5%AD%9D%E5%B9%B3%E7%8E%8B%E7%9A%87%E5%90%8E
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_bVdpQSKkcJdkN1toGi6YY7
        subject_person_id: p_5cVuMHEgoBbvUxLELeQJ9d
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 孝平王皇后
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_LL1AmuCeogPCMxhdHJncnw
          claim_id: c_bVdpQSKkcJdkN1toGi6YY7
          source_id: s_JawYCzdd2kghY1PkvFYY6b
          stance: supports
          locator: Q712297
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_b3hGGJhhr7jQdL1dyzK5Y7
        subject_person_id: p_ftTmaf71Kwzdeaet16S991
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5cVuMHEgoBbvUxLELeQJ9d
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_z1c42sPCuC2H2SDDP1uLiL
          claim_id: c_b3hGGJhhr7jQdL1dyzK5Y7
          source_id: s_EGrTvgmWGEBNKAJcMtkpwp
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_EGrTvgmWGEBNKAJcMtkpwp
            source_type: website
            title: 中文维基百科：王莽
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/王莽
            external_identifier: Q7250
            license_code: CC-BY-SA-4.0
            accessed_at: null
            metadata_json: null
        - id: cs_1FoDKyvcm16v827m4N5wdK
          claim_id: c_b3hGGJhhr7jQdL1dyzK5Y7
          source_id: s_qaqNC35CuGhESSMxWoCLgu
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_qaqNC35CuGhESSMxWoCLgu
            source_type: api_record
            title: 維基數據：王莽（Q7250）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q7250
            external_identifier: Q7250
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:14:57.290Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%8E%BD
        - id: cs_gkcJNY4bCfTtp8i6Akd5Q6
          claim_id: c_b3hGGJhhr7jQdL1dyzK5Y7
          source_id: s_JawYCzdd2kghY1PkvFYY6b
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_JawYCzdd2kghY1PkvFYY6b
            source_type: api_record
            title: 維基數據：孝平王皇后（Q712297）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q712297
            external_identifier: Q712297
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:48.190Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E5%AD%9D%E5%B9%B3%E7%8E%8B%E7%9A%87%E5%90%8E
        - id: cs_oh5sPJQ6heyqZQpxrP4PCP
          claim_id: c_b3hGGJhhr7jQdL1dyzK5Y7
          source_id: s_sqrF6XzsKKeCiuVJk1wc6e
          stance: supports
          locator: 条文：之子/之女
          quotation: 王莽長女，母王氏
          interpretation_note: null
          source:
            id: s_sqrF6XzsKKeCiuVJk1wc6e
            source_type: website
            title: 中文维基百科：孝平王皇后
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%AD%9D%E5%B9%B3%E7%8E%8B%E7%9A%87%E5%90%8E
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:25:30.511Z
            metadata_json: null
        - id: cs_qzJBihdjDTRVxXn2UpoVcQ
          claim_id: c_b3hGGJhhr7jQdL1dyzK5Y7
          source_id: s_67D9PPi7fWYcQSTDZovxJz
          stance: supports
          locator: 条文：之子/之女
          quotation: 王莽長女，母王氏
          interpretation_note: null
          source:
            id: s_67D9PPi7fWYcQSTDZovxJz
            source_type: website
            title: 中文维基百科：孝平王皇后
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%AD%9D%E5%B9%B3%E7%8E%8B%E7%9A%87%E5%90%8E
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:47.944Z
            metadata_json: null
      object_person:
        id: p_ftTmaf71Kwzdeaet16S991
        status: active
        display_name: 王莽
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_NY5dB3EEEESaQvpabQHGyj
        subject_person_id: p_5cVuMHEgoBbvUxLELeQJ9d
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_zP7MfWZYoPQEWozxsdE3Fy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_BPUGk1DjxysLF1XHf91yCL
          claim_id: c_NY5dB3EEEESaQvpabQHGyj
          source_id: s_JawYCzdd2kghY1PkvFYY6b
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_JawYCzdd2kghY1PkvFYY6b
            source_type: api_record
            title: 維基數據：孝平王皇后（Q712297）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q712297
            external_identifier: Q712297
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:48.190Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E5%AD%9D%E5%B9%B3%E7%8E%8B%E7%9A%87%E5%90%8E
        - id: cs_Pd27fsnVtLC83iHQyF2FcW
          claim_id: c_NY5dB3EEEESaQvpabQHGyj
          source_id: s_Zs6r2fMKtHm4F2PDw3HW26
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_Zs6r2fMKtHm4F2PDw3HW26
            source_type: api_record
            title: 维基数据：汉平帝（Q7244）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q7244
            external_identifier: Q7244
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:33.656Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E6%B1%89%E5%B9%B3%E5%B8%9D
        - id: cs_WJVAGHVmButT3adNjDQGFU
          claim_id: c_NY5dB3EEEESaQvpabQHGyj
          source_id: s_sqrF6XzsKKeCiuVJk1wc6e
          stance: supports
          locator: 条文：信息框 夫
          quotation: 元宗孝平皇帝劉衎
          interpretation_note: null
          source:
            id: s_sqrF6XzsKKeCiuVJk1wc6e
            source_type: website
            title: 中文维基百科：孝平王皇后
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%AD%9D%E5%B9%B3%E7%8E%8B%E7%9A%87%E5%90%8E
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:25:30.511Z
            metadata_json: null
        - id: cs_tDvhVPnbpkFQxNDafX83FB
          claim_id: c_NY5dB3EEEESaQvpabQHGyj
          source_id: s_67D9PPi7fWYcQSTDZovxJz
          stance: supports
          locator: 条文：信息框 夫
          quotation: 元宗孝平皇帝劉衎
          interpretation_note: null
          source:
            id: s_67D9PPi7fWYcQSTDZovxJz
            source_type: website
            title: 中文维基百科：孝平王皇后
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%AD%9D%E5%B9%B3%E7%8E%8B%E7%9A%87%E5%90%8E
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:47.944Z
            metadata_json: null
      object_person:
        id: p_zP7MfWZYoPQEWozxsdE3Fy
        status: active
        display_name: 劉衎
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 孝平王皇后

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 孝平王皇后（前7年—23年），史料所见人物。本项目依据《維基數據：孝平王皇后》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 前7年 | accepted |
| death.date | 23年 | accepted |
| name.primary | 孝平王皇后 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ftTmaf71Kwzdeaet16S991 | 王莽 | accepted |
| spouses | p_zP7MfWZYoPQEWozxsdE3Fy | 劉衎 | accepted |

## 外部来源

- [维基数据：汉平帝（Q7244）](https://www.wikidata.org/wiki/Q7244)
- [維基數據：王莽（Q7250）](https://www.wikidata.org/wiki/Q7250)
- [維基數據：孝平王皇后（Q712297）](https://www.wikidata.org/wiki/Q712297)
- [中文维基百科：王莽](https://zh.wikipedia.org/wiki/王莽)
- [中文维基百科：孝平王皇后](https://zh.wikipedia.org/wiki/%E5%AD%9D%E5%B9%B3%E7%8E%8B%E7%9A%87%E5%90%8E)
