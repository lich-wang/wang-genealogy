---
schema: wang-person/v1
id: p_LYKX47nJ8c49oqYNGB3kRd
status: active
merged_into: null
display_name: 王与龄
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rmkJB8dzvx93UXHhv4FKw6
        subject_person_id: p_LYKX47nJ8c49oqYNGB3kRd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王与龄（1508年—1564年），史料所见人物。本项目依据《王与龄》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_ybrf-DBdvbswUO3U5jeY3t
          claim_id: c_rmkJB8dzvx93UXHhv4FKw6
          source_id: s_mSQjg4RmB78Azw6f47f7sr
          stance: supports
          locator: Q15924928
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_mSQjg4RmB78Azw6f47f7sr
            source_type: api_record
            title: 维基数据：王与龄（Q15924928）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15924928
            external_identifier: Q15924928
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:28.997Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_KJfzE67UE5K36D5P47iHo2
        subject_person_id: p_LYKX47nJ8c49oqYNGB3kRd
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1508年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 1508-01-01
            latest: 1508-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_B3jw99L34e6ksRWd1thWnm
          claim_id: c_KJfzE67UE5K36D5P47iHo2
          source_id: s_mSQjg4RmB78Azw6f47f7sr
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_mSQjg4RmB78Azw6f47f7sr
            source_type: api_record
            title: 维基数据：王与龄（Q15924928）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15924928
            external_identifier: Q15924928
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:28.997Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_SDXdaDjVMzRurqBpdwrumD
        subject_person_id: p_LYKX47nJ8c49oqYNGB3kRd
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1564年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1564-01-01
            latest: 1564-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_FYUvrcCmY7A3Htf48kdKx7
          claim_id: c_SDXdaDjVMzRurqBpdwrumD
          source_id: s_mSQjg4RmB78Azw6f47f7sr
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_mSQjg4RmB78Azw6f47f7sr
            source_type: api_record
            title: 维基数据：王与龄（Q15924928）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15924928
            external_identifier: Q15924928
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:28.997Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_eGbituWGr3T5UyZ7fkKyAQ
        subject_person_id: p_LYKX47nJ8c49oqYNGB3kRd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王与龄
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Aq1P6HHvLQC7Nm9W9LApx6
          claim_id: c_eGbituWGr3T5UyZ7fkKyAQ
          source_id: s_mSQjg4RmB78Azw6f47f7sr
          stance: supports
          locator: Q15924928
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_KtDUG74Ni1BG7aAhKMc7Po
        subject_person_id: p_KHASkzeAzAbrH4KC5REzz6
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_LYKX47nJ8c49oqYNGB3kRd
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_77sXx4gcU1nxTQreCiwvzb
          claim_id: c_KtDUG74Ni1BG7aAhKMc7Po
          source_id: s_7uDJHF5B7XAk94UpqzckJt
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_7uDJHF5B7XAk94UpqzckJt
            source_type: api_record
            title: 维基数据：王爵（Q45449767）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45449767
            external_identifier: Q45449767
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:49.962Z
            metadata_json: null
        - id: cs_YaUBQMXyun7LFSGnW9wqCu
          claim_id: c_KtDUG74Ni1BG7aAhKMc7Po
          source_id: s_mSQjg4RmB78Azw6f47f7sr
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_mSQjg4RmB78Azw6f47f7sr
            source_type: api_record
            title: 维基数据：王与龄（Q15924928）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15924928
            external_identifier: Q15924928
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:28.997Z
            metadata_json: null
      object_person:
        id: p_KHASkzeAzAbrH4KC5REzz6
        status: active
        display_name: 王爵
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_DB6Z4bR4H4oDSDZd48dZoj
        subject_person_id: p_LYKX47nJ8c49oqYNGB3kRd
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_b83k4g1WnCibKe1zSFCq2F
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_62q2p6Z6MLQcA3mZkseLbo
          claim_id: c_DB6Z4bR4H4oDSDZd48dZoj
          source_id: s_mMBMKh3S4GVLvRrkWDPeiD
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_mMBMKh3S4GVLvRrkWDPeiD
            source_type: api_record
            title: 维基数据：高氏（Q65814421）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65814421
            external_identifier: Q65814421
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:53.553Z
            metadata_json: null
        - id: cs_7mB9CbdkUVEfi8K4khNyNf
          claim_id: c_DB6Z4bR4H4oDSDZd48dZoj
          source_id: s_mSQjg4RmB78Azw6f47f7sr
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_mSQjg4RmB78Azw6f47f7sr
            source_type: api_record
            title: 维基数据：王与龄（Q15924928）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15924928
            external_identifier: Q15924928
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:28.997Z
            metadata_json: null
        - id: cs_N1yvrDXoD2SbhrcDPLhPr4
          claim_id: c_DB6Z4bR4H4oDSDZd48dZoj
          source_id: s_coJneE1s8JziNL2EvNC7jf
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：嘉靖八年進士登科錄:一卷
          source:
            id: s_coJneE1s8JziNL2EvNC7jf
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王與齡（68464）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68464&o=json
            external_identifier: CBDB:68464
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:37.527Z
            metadata_json: null
      object_person:
        id: p_b83k4g1WnCibKe1zSFCq2F
        status: active
        display_name: 高氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王与龄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王与龄（1508年—1564年），史料所见人物。本项目依据《王与龄》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1508年 | accepted |
| death.date | 1564年 | accepted |
| name.primary | 王与龄 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_KHASkzeAzAbrH4KC5REzz6 | 王爵 | accepted |
| spouses | p_b83k4g1WnCibKe1zSFCq2F | 高氏 | accepted |

## 外部来源

- [维基数据：高氏（Q65814421）](https://www.wikidata.org/wiki/Q65814421)
- [维基数据：王爵（Q45449767）](https://www.wikidata.org/wiki/Q45449767)
- [维基数据：王与龄（Q15924928）](https://www.wikidata.org/wiki/Q15924928)
- [CBDB 中国历代人物传记资料库：王與齡（68464）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68464&o=json)
