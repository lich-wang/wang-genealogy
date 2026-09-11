---
schema: wang-person/v1
id: p_NoAq9miu6kdHMYDNaGmzDr
status: active
merged_into: null
display_name: 崔氏
cbdb_id: 288337
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_L6tmMAzgte80yklm1TA_-4
        subject_person_id: p_NoAq9miu6kdHMYDNaGmzDr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 崔氏，明人物。嘉靖八年進士。（中国历代人物传记资料库 CBDB 288337）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BQnJ9kk8waRZL2LiopJvma
          claim_id: c_L6tmMAzgte80yklm1TA_-4
          source_id: s_itBa6ognvF5kRu9CHLmVog
          stance: supports
          locator: CBDB:288337
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_itBa6ognvF5kRu9CHLmVog
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：崔氏（288337）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288337&o=json
            external_identifier: CBDB:288337
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_sj6K7oP4dHMumEf6QJxFgS
        subject_person_id: p_NoAq9miu6kdHMYDNaGmzDr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 崔氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_s2bVVWxyrWE6FCBmCoB5Wx
          claim_id: c_sj6K7oP4dHMumEf6QJxFgS
          source_id: s_Exy2Giuho6h2p3V5NW5Bgi
          stance: supports
          locator: Q65812398
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a2
            id: s_Exy2Giuho6h2p3V5NW5Bgi
            source_type: api_record
            title: 维基数据：崔氏（Q65812398）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65812398
            external_identifier: Q65812398
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_t2zAbG3cZd86k74eBPGiN6
          claim_id: c_sj6K7oP4dHMumEf6QJxFgS
          source_id: s_itBa6ognvF5kRu9CHLmVog
          stance: supports
          locator: CBDB:288337
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_Lr6V1C1pwEawbgMgP4yGWa
        subject_person_id: p_NoAq9miu6kdHMYDNaGmzDr
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_qzznHsDy1MaFH1YWPbYub4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5QvEXZ9NxDsgqZz56k8Exs
          claim_id: c_Lr6V1C1pwEawbgMgP4yGWa
          source_id: s_qTrXfDWBFpFpZgrDZ9JGLL
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_qTrXfDWBFpFpZgrDZ9JGLL
            source_type: api_record
            title: 维基数据：王培龄（Q45690317）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45690317
            external_identifier: Q45690317
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:50.150Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%9F%B9%E9%BD%A1
        - id: cs_PnYFGZpE3tK1HgrTSRcitz
          claim_id: c_Lr6V1C1pwEawbgMgP4yGWa
          source_id: s_Exy2Giuho6h2p3V5NW5Bgi
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_co2Xo3u5Cz5Q4kBqdG4qeA
          claim_id: c_Lr6V1C1pwEawbgMgP4yGWa
          source_id: s_ts58X1Zaop75mBb14WiveM
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：嘉靖八年進士登科錄:一卷
          source:
            id: s_ts58X1Zaop75mBb14WiveM
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王培齡（202447）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202447&o=json
            external_identifier: CBDB:202447
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:50.339Z
            metadata_json: null
      object_person:
        id: p_qzznHsDy1MaFH1YWPbYub4
        status: active
        display_name: 王培龄
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 崔氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 崔氏，明人物。嘉靖八年進士。（中国历代人物传记资料库 CBDB 288337） | accepted |
| name.primary | 崔氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_qzznHsDy1MaFH1YWPbYub4 | 王培龄 | accepted |

## 外部来源

- [维基数据：崔氏（Q65812398）](https://www.wikidata.org/wiki/Q65812398)
- [维基数据：王培龄（Q45690317）](https://www.wikidata.org/wiki/Q45690317)
- [CBDB 中国历代人物传记资料库：崔氏（288337）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288337&o=json)
- [CBDB 中国历代人物传记资料库：王培齡（202447）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202447&o=json)
