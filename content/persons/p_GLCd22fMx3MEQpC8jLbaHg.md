---
schema: wang-person/v1
id: p_GLCd22fMx3MEQpC8jLbaHg
status: active
merged_into: null
display_name: 王守一
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EHueXcykZFewFrKkiRDLKX
        subject_person_id: p_GLCd22fMx3MEQpC8jLbaHg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守一（7世纪?—723年），同州下邽县（在今陕西省渭南市境）人，王仁皎之子。唐朝官员、外戚、驸马。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_bDqlmUTpnG13Rz0D8G7WVr
          claim_id: c_EHueXcykZFewFrKkiRDLKX
          source_id: s_raHqSHfDEue2dcSR3LxKQ3
          stance: supports
          locator: 导言
          quotation: 王守一（7世纪?—723年），同州下邽县（在今陕西省渭南市境）人
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_raHqSHfDEue2dcSR3LxKQ3
            source_type: website
            title: 中文维基百科：王守一
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%88%E4%B8%80
            external_identifier: Q16077224
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:33:22.403Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Q5nBqP7u1hLYDgLpLWtoDk
        subject_person_id: p_GLCd22fMx3MEQpC8jLbaHg
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 7世纪
            calendar_note: 维基数据 P569 结构化日期，精度：世纪
            earliest: 0601-01-01
            latest: 0700-12-31
            precision: century
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_HryHp4zMLFK3srHdyM12pq
          claim_id: c_Q5nBqP7u1hLYDgLpLWtoDk
          source_id: s_RK4X2gh8bDsvYSKsyLDdEe
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_RK4X2gh8bDsvYSKsyLDdEe
            source_type: api_record
            title: 维基数据：王守一（Q16077224）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16077224
            external_identifier: Q16077224
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:52.064Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_8urhD1jVL9Zj3UBEcDd1ZS
        subject_person_id: p_GLCd22fMx3MEQpC8jLbaHg
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 724年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0724-01-01
            latest: 0724-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_dNjHHF3mRkx5vu4Hocq7uc
          claim_id: c_8urhD1jVL9Zj3UBEcDd1ZS
          source_id: s_RK4X2gh8bDsvYSKsyLDdEe
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_RK4X2gh8bDsvYSKsyLDdEe
            source_type: api_record
            title: 维基数据：王守一（Q16077224）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16077224
            external_identifier: Q16077224
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:52.064Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_osCHMBcSbCawRx54AAjA2e
        subject_person_id: p_GLCd22fMx3MEQpC8jLbaHg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守一
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_NHNEDCngaRxm9LjLXgjnxS
          claim_id: c_osCHMBcSbCawRx54AAjA2e
          source_id: s_RK4X2gh8bDsvYSKsyLDdEe
          stance: supports
          locator: Q16077224
          quotation: null
          interpretation_note: null
          source:
            id: s_RK4X2gh8bDsvYSKsyLDdEe
            source_type: api_record
            title: 维基数据：王守一（Q16077224）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16077224
            external_identifier: Q16077224
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:52.064Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3XMLY6bgdpmKhEg8S8fD4e
        subject_person_id: p_Me5GtcBE8N1AnXQtkd8Bj5
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_GLCd22fMx3MEQpC8jLbaHg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_K5uMKADRWDSqj5QRAUewSY
          claim_id: c_3XMLY6bgdpmKhEg8S8fD4e
          source_id: s_RK4X2gh8bDsvYSKsyLDdEe
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_RK4X2gh8bDsvYSKsyLDdEe
            source_type: api_record
            title: 维基数据：王守一（Q16077224）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16077224
            external_identifier: Q16077224
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:52.064Z
            metadata_json: null
        - id: cs_aqYt69J7H4QFKFZ4JAGJLs
          claim_id: c_3XMLY6bgdpmKhEg8S8fD4e
          source_id: s_FcCBHWnbG37LfXADXYFZkz
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_FcCBHWnbG37LfXADXYFZkz
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王仁皎（175881）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175881&o=json
            external_identifier: CBDB:175881
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:28.466Z
            metadata_json: null
        - id: cs_s3A4LKB5wiUC632iFYSVS3
          claim_id: c_3XMLY6bgdpmKhEg8S8fD4e
          source_id: s_REUWRjLFSrubFWsUb6HWdd
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_REUWRjLFSrubFWsUb6HWdd
            source_type: api_record
            title: 维基数据：王仁皎（Q15912695）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15912695
            external_identifier: Q15912695
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:10.709Z
            metadata_json: null
      object_person:
        id: p_Me5GtcBE8N1AnXQtkd8Bj5
        status: active
        display_name: 王仁皎
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王守一

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王守一（7世纪?—723年），同州下邽县（在今陕西省渭南市境）人，王仁皎之子。唐朝官员、外戚、驸马。 | accepted |
| birth.date | 7世纪 | accepted |
| death.date | 724年 | accepted |
| name.primary | 王守一 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Me5GtcBE8N1AnXQtkd8Bj5 | 王仁皎 | accepted |

## 外部来源

- [维基数据：王仁皎（Q15912695）](https://www.wikidata.org/wiki/Q15912695)
- [维基数据：王守一（Q16077224）](https://www.wikidata.org/wiki/Q16077224)
- [中文维基百科：王守一](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%88%E4%B8%80)
- [CBDB 中国历代人物传记资料库：王仁皎（175881）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175881&o=json)
