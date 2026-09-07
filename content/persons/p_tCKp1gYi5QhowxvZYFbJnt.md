---
schema: wang-person/v1
id: p_tCKp1gYi5QhowxvZYFbJnt
status: active
merged_into: null
display_name: 王澹
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7J15giXDCdWWwN8MRnkURw
        subject_person_id: p_tCKp1gYi5QhowxvZYFbJnt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澹（卒于807年），唐人物。CBDB 记录其籍贯记录为京兆府。中国历代人物传记资料库（CBDB）以人物编号 175363 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_UJzLS9M743in7RTDo4eipR
          claim_id: c_7J15giXDCdWWwN8MRnkURw
          source_id: s_nzkkdmzKfbkrCCUR26Rc2P
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_nzkkdmzKfbkrCCUR26Rc2P
            source_type: api_record
            title: 维基数据：王澹（Q45655347）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45655347
            external_identifier: Q45655347
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:44.470Z
            metadata_json: null
        - id: cs_quwvGNdK8R_pBsVTVBORkV
          claim_id: c_7J15giXDCdWWwN8MRnkURw
          source_id: s_KLsCR4vqN3GxnLAqdyN8dp
          stance: supports
          locator: CBDB:175363
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_KLsCR4vqN3GxnLAqdyN8dp
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王澹（175363）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175363&o=json
            external_identifier: CBDB:175363
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:44.635Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Aj9e3CfUjeMs8r7NB2vABu
        subject_person_id: p_tCKp1gYi5QhowxvZYFbJnt
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 807年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0807-01-01
            latest: 0807-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SdXzDokupK7AeYoYRPRyXJ
          claim_id: c_Aj9e3CfUjeMs8r7NB2vABu
          source_id: s_nzkkdmzKfbkrCCUR26Rc2P
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_nzkkdmzKfbkrCCUR26Rc2P
            source_type: api_record
            title: 维基数据：王澹（Q45655347）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45655347
            external_identifier: Q45655347
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:44.470Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_K6bUUVBA583XSC5d2QwHsB
        subject_person_id: p_tCKp1gYi5QhowxvZYFbJnt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澹
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_NtTiAScTpwReY6wEwMRWKf
          claim_id: c_K6bUUVBA583XSC5d2QwHsB
          source_id: s_KLsCR4vqN3GxnLAqdyN8dp
          stance: supports
          locator: Q45655347
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_SGg4ZRonUvT9VUqLCsGoEk
          claim_id: c_K6bUUVBA583XSC5d2QwHsB
          source_id: s_nzkkdmzKfbkrCCUR26Rc2P
          stance: supports
          locator: Q45655347
          quotation: null
          interpretation_note: null
          source:
            id: s_nzkkdmzKfbkrCCUR26Rc2P
            source_type: api_record
            title: 维基数据：王澹（Q45655347）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45655347
            external_identifier: Q45655347
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:44.470Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_BjUxK3ZRNMeEisWnHzuMnR
        subject_person_id: p_B6Qa1QA1yXEX5CeG3LFhNd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tCKp1gYi5QhowxvZYFbJnt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_45Z4MaL5mfkKnL1jo5X2Ln
          claim_id: c_BjUxK3ZRNMeEisWnHzuMnR
          source_id: s_CBiCsWpLMkRQaabaYLQHgN
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_CBiCsWpLMkRQaabaYLQHgN
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王純（175362）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175362&o=json
            external_identifier: CBDB:175362
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:48.739Z
            metadata_json: null
        - id: cs_QaB19Rdc6C1BjDdGgGpQSp
          claim_id: c_BjUxK3ZRNMeEisWnHzuMnR
          source_id: s_PJFu4EjsuoKoC2HNaKEbB7
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_PJFu4EjsuoKoC2HNaKEbB7
            source_type: api_record
            title: 维基数据：王纯（Q45655286）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45655286
            external_identifier: Q45655286
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:48.584Z
            metadata_json: null
        - id: cs_uqdrX11aVYii9eE8A1CMoE
          claim_id: c_BjUxK3ZRNMeEisWnHzuMnR
          source_id: s_nzkkdmzKfbkrCCUR26Rc2P
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_nzkkdmzKfbkrCCUR26Rc2P
            source_type: api_record
            title: 维基数据：王澹（Q45655347）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45655347
            external_identifier: Q45655347
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:44.470Z
            metadata_json: null
        - id: cs_jRU7mLMWXxzJDYRocNGTcH
          claim_id: c_BjUxK3ZRNMeEisWnHzuMnR
          source_id: s_KLsCR4vqN3GxnLAqdyN8dp
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_KLsCR4vqN3GxnLAqdyN8dp
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王澹（175363）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175363&o=json
            external_identifier: CBDB:175363
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:44.635Z
            metadata_json: null
      object_person:
        id: p_B6Qa1QA1yXEX5CeG3LFhNd
        status: active
        display_name: 王纯
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王澹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王澹（卒于807年），唐人物。CBDB 记录其籍贯记录为京兆府。中国历代人物传记资料库（CBDB）以人物编号 175363 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 807年 | accepted |
| name.primary | 王澹 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_B6Qa1QA1yXEX5CeG3LFhNd | 王纯 | accepted |

## 外部来源

- [维基数据：王纯（Q45655286）](https://www.wikidata.org/wiki/Q45655286)
- [维基数据：王澹（Q45655347）](https://www.wikidata.org/wiki/Q45655347)
- [CBDB 中国历代人物传记资料库：王純（175362）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175362&o=json)
- [CBDB 中国历代人物传记资料库：王澹（175363）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175363&o=json)
