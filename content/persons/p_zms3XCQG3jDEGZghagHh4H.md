---
schema: wang-person/v1
id: p_zms3XCQG3jDEGZghagHh4H
status: active
merged_into: null
display_name: 王源旭
cbdb_id: 175598
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tPNx518YsV7hdxwAzQ886D
        subject_person_id: p_zms3XCQG3jDEGZghagHh4H
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王源旭（卒于820年），唐人物。籍贯咸陽。（中国历代人物传记资料库 CBDB 175598）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_wMgYmWyMksc3rjX2sEASJX
          claim_id: c_tPNx518YsV7hdxwAzQ886D
          source_id: s_yMKh7d8VoLyomJ4w4APrZD
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_yMKh7d8VoLyomJ4w4APrZD
            source_type: api_record
            title: 维基数据：王源旭（Q45668472）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668472
            external_identifier: Q45668472
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:43.395Z
            metadata_json: null
        - id: cs_cIw3gu-zAiBtSlKaXfcyWh
          claim_id: c_tPNx518YsV7hdxwAzQ886D
          source_id: s_PSJsdrzM4L7j1eUN2mrJo6
          stance: supports
          locator: CBDB:175598
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_PSJsdrzM4L7j1eUN2mrJo6
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源旭（175598）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175598&o=json
            external_identifier: CBDB:175598
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:43.550Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_R8wTzKRBM955uPfxkzQKae
        subject_person_id: p_zms3XCQG3jDEGZghagHh4H
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
        - id: cs_RExm7s6jvqJKEU9d6gk3ci
          claim_id: c_R8wTzKRBM955uPfxkzQKae
          source_id: s_yMKh7d8VoLyomJ4w4APrZD
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_yMKh7d8VoLyomJ4w4APrZD
            source_type: api_record
            title: 维基数据：王源旭（Q45668472）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668472
            external_identifier: Q45668472
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:43.395Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_kXndCzBqKjJFGdd2cjZKHP
        subject_person_id: p_zms3XCQG3jDEGZghagHh4H
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王源旭
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_BmHmZhbJiqdSB2Q3jdoRVn
          claim_id: c_kXndCzBqKjJFGdd2cjZKHP
          source_id: s_PSJsdrzM4L7j1eUN2mrJo6
          stance: supports
          locator: Q45668472
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_tx5EYBxfJaJyYRygHpPPPF
          claim_id: c_kXndCzBqKjJFGdd2cjZKHP
          source_id: s_yMKh7d8VoLyomJ4w4APrZD
          stance: supports
          locator: Q45668472
          quotation: null
          interpretation_note: null
          source:
            id: s_yMKh7d8VoLyomJ4w4APrZD
            source_type: api_record
            title: 维基数据：王源旭（Q45668472）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668472
            external_identifier: Q45668472
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:43.395Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_VpikFQJJJe48kBuzjfiL4o
        subject_person_id: p_iDjU7xfWF1u1bfDbSWDe7b
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zms3XCQG3jDEGZghagHh4H
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_WjdeKi6sXWXzufZMQptc5J
          claim_id: c_VpikFQJJJe48kBuzjfiL4o
          source_id: s_oCtsBQHAxfAi2HUf2GR7z8
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_oCtsBQHAxfAi2HUf2GR7z8
            source_type: api_record
            title: 维基数据：王涛（Q45668270）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668270
            external_identifier: Q45668270
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:48.700Z
            metadata_json: null
        - id: cs_zVyj49fuB1cY8XRmMB495Z
          claim_id: c_VpikFQJJJe48kBuzjfiL4o
          source_id: s_19dKF6FW2uFWmfB9JTQYBZ
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_19dKF6FW2uFWmfB9JTQYBZ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王濤（175594）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175594&o=json
            external_identifier: CBDB:175594
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:48.866Z
            metadata_json: null
        - id: cs_FHTHfP14BBfTRcCcXSLT5R
          claim_id: c_VpikFQJJJe48kBuzjfiL4o
          source_id: s_yMKh7d8VoLyomJ4w4APrZD
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_yMKh7d8VoLyomJ4w4APrZD
            source_type: api_record
            title: 维基数据：王源旭（Q45668472）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668472
            external_identifier: Q45668472
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:43.395Z
            metadata_json: null
        - id: cs_NWbXYsvaDSaKPcGoANNXhJ
          claim_id: c_VpikFQJJJe48kBuzjfiL4o
          source_id: s_PSJsdrzM4L7j1eUN2mrJo6
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_PSJsdrzM4L7j1eUN2mrJo6
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源旭（175598）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175598&o=json
            external_identifier: CBDB:175598
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:43.550Z
            metadata_json: null
      object_person:
        id: p_iDjU7xfWF1u1bfDbSWDe7b
        status: active
        display_name: 王涛
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王源旭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王源旭（卒于820年），唐人物。籍贯咸陽。（中国历代人物传记资料库 CBDB 175598） | accepted |
| death.date | 820年 | accepted |
| name.primary | 王源旭 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_iDjU7xfWF1u1bfDbSWDe7b | 王涛 | accepted |

## 外部来源

- [维基数据：王涛（Q45668270）](https://www.wikidata.org/wiki/Q45668270)
- [维基数据：王源旭（Q45668472）](https://www.wikidata.org/wiki/Q45668472)
- [CBDB 中国历代人物传记资料库：王濤（175594）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175594&o=json)
- [CBDB 中国历代人物传记资料库：王源旭（175598）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175598&o=json)
