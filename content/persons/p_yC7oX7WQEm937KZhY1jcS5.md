---
schema: wang-person/v1
id: p_yC7oX7WQEm937KZhY1jcS5
status: active
merged_into: null
display_name: 王迈
cbdb_id: 175479
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_R9mvCPpDuys4WEYimkhs8G
        subject_person_id: p_yC7oX7WQEm937KZhY1jcS5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王迈（卒于820年），唐人物。籍贯咸陽，曾任州刺史。（中国历代人物传记资料库 CBDB 175479）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_k6qV4CKpcNfCKYnMpvboYY
          claim_id: c_R9mvCPpDuys4WEYimkhs8G
          source_id: s_eseimQHD6NtaN9BWjDRd4J
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_eseimQHD6NtaN9BWjDRd4J
            source_type: api_record
            title: 维基数据：王迈（Q45662103）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662103
            external_identifier: Q45662103
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:26.232Z
            metadata_json: null
        - id: cs_EiMzh8KQp-V7_H3w2vbbzs
          claim_id: c_R9mvCPpDuys4WEYimkhs8G
          source_id: s_FVoY37iJwLTHSmJCJYnXFc
          stance: supports
          locator: CBDB:175479
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_FVoY37iJwLTHSmJCJYnXFc
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王邁（175479）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175479&o=json
            external_identifier: CBDB:175479
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:26.390Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_rFVtZ4L89RKXhtGWgyTqAe
        subject_person_id: p_yC7oX7WQEm937KZhY1jcS5
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
        - id: cs_gbM3JCfK4aipXCyztA89Uv
          claim_id: c_rFVtZ4L89RKXhtGWgyTqAe
          source_id: s_eseimQHD6NtaN9BWjDRd4J
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_eseimQHD6NtaN9BWjDRd4J
            source_type: api_record
            title: 维基数据：王迈（Q45662103）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662103
            external_identifier: Q45662103
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:26.232Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_r7MbNFW3LG9wbaWDMyT74F
        subject_person_id: p_yC7oX7WQEm937KZhY1jcS5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王迈
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_8HMj5W4auVMqA25fUKCetJ
          claim_id: c_r7MbNFW3LG9wbaWDMyT74F
          source_id: s_eseimQHD6NtaN9BWjDRd4J
          stance: supports
          locator: Q45662103
          quotation: null
          interpretation_note: null
          source:
            id: s_eseimQHD6NtaN9BWjDRd4J
            source_type: api_record
            title: 维基数据：王迈（Q45662103）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662103
            external_identifier: Q45662103
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:26.232Z
            metadata_json: null
        - id: cs_x1Dp9A56oLpt2MAFzG6dQc
          claim_id: c_r7MbNFW3LG9wbaWDMyT74F
          source_id: s_FVoY37iJwLTHSmJCJYnXFc
          stance: supports
          locator: Q45662103
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_6xo1vQv9pPBwgpn5ajaSmY
        subject_person_id: p_MSdU233nM5wdxC7iCwusHu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yC7oX7WQEm937KZhY1jcS5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_nQ7WVDQhBoJPQrXe8H9rH5
          claim_id: c_6xo1vQv9pPBwgpn5ajaSmY
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
        - id: cs_ngHpPYHjf8CLkahsM7g6BE
          claim_id: c_6xo1vQv9pPBwgpn5ajaSmY
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
        - id: cs_a6QoZKdaiWPGuij3sVZyMb
          claim_id: c_6xo1vQv9pPBwgpn5ajaSmY
          source_id: s_eseimQHD6NtaN9BWjDRd4J
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_eseimQHD6NtaN9BWjDRd4J
            source_type: api_record
            title: 维基数据：王迈（Q45662103）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662103
            external_identifier: Q45662103
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:26.232Z
            metadata_json: null
        - id: cs_AcjCKsxE6xV3uQkLdcs9Rj
          claim_id: c_6xo1vQv9pPBwgpn5ajaSmY
          source_id: s_FVoY37iJwLTHSmJCJYnXFc
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_FVoY37iJwLTHSmJCJYnXFc
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王邁（175479）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175479&o=json
            external_identifier: CBDB:175479
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:26.390Z
            metadata_json: null
      object_person:
        id: p_MSdU233nM5wdxC7iCwusHu
        status: active
        display_name: 王澄
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王迈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王迈（卒于820年），唐人物。籍贯咸陽，曾任州刺史。（中国历代人物传记资料库 CBDB 175479） | accepted |
| death.date | 820年 | accepted |
| name.primary | 王迈 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MSdU233nM5wdxC7iCwusHu | 王澄 | accepted |

## 外部来源

- [维基数据：王澄（Q45661568）](https://www.wikidata.org/wiki/Q45661568)
- [维基数据：王迈（Q45662103）](https://www.wikidata.org/wiki/Q45662103)
- [CBDB 中国历代人物传记资料库：王澄（175470）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175470&o=json)
- [CBDB 中国历代人物传记资料库：王邁（175479）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175479&o=json)
