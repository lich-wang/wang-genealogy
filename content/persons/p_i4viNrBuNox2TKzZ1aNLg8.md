---
schema: wang-person/v1
id: p_i4viNrBuNox2TKzZ1aNLg8
status: active
merged_into: null
display_name: 王倜
cbdb_id: 175546
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BPkAePfLfEN4yNeFHJRvG9
        subject_person_id: p_i4viNrBuNox2TKzZ1aNLg8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王倜（卒于916年），唐人物。籍贯咸陽，曾任直弘文館。（中国历代人物传记资料库 CBDB 175546）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_ME3iSRFtn8SFSo1xQHKTDZ
          claim_id: c_BPkAePfLfEN4yNeFHJRvG9
          source_id: s_896dNAEmApLS5KgM7FGf6F
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_896dNAEmApLS5KgM7FGf6F
            source_type: api_record
            title: 维基数据：王倜（Q45665784）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665784
            external_identifier: Q45665784
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:46:15.306Z
            metadata_json: null
        - id: cs_OJdj68tUPeeJi4zH8CQkdX
          claim_id: c_BPkAePfLfEN4yNeFHJRvG9
          source_id: s_gr7av3xpTJ4QKSfJRnCkme
          stance: supports
          locator: CBDB:175546
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_gr7av3xpTJ4QKSfJRnCkme
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王倜（175546）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175546&o=json
            external_identifier: CBDB:175546
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:46:15.447Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_n5JXH8ExQd8KHNHab3JM9i
        subject_person_id: p_i4viNrBuNox2TKzZ1aNLg8
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 916年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0916-01-01
            latest: 0916-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6ASR57x5dSGtQ5fKqoKZvk
          claim_id: c_n5JXH8ExQd8KHNHab3JM9i
          source_id: s_896dNAEmApLS5KgM7FGf6F
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_896dNAEmApLS5KgM7FGf6F
            source_type: api_record
            title: 维基数据：王倜（Q45665784）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665784
            external_identifier: Q45665784
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:46:15.306Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_12ThQ74ZHyRJFoxSCgZafN
        subject_person_id: p_i4viNrBuNox2TKzZ1aNLg8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王倜
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_C4Q6F6DM4ofaSMnZxt41pM
          claim_id: c_12ThQ74ZHyRJFoxSCgZafN
          source_id: s_gr7av3xpTJ4QKSfJRnCkme
          stance: supports
          locator: Q45665784
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_o1QTcPS7dT2JF4fz3xKnMu
          claim_id: c_12ThQ74ZHyRJFoxSCgZafN
          source_id: s_896dNAEmApLS5KgM7FGf6F
          stance: supports
          locator: Q45665784
          quotation: null
          interpretation_note: null
          source:
            id: s_896dNAEmApLS5KgM7FGf6F
            source_type: api_record
            title: 维基数据：王倜（Q45665784）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665784
            external_identifier: Q45665784
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:46:15.306Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ux4obhcDEt4gvSf3AF7XPh
        subject_person_id: p_DgA93iH24ZodpFmFWyHcNR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_i4viNrBuNox2TKzZ1aNLg8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_6shTpGs8PcS57W9tnMa9eD
          claim_id: c_ux4obhcDEt4gvSf3AF7XPh
          source_id: s_Luponw9m711YWZVTA2bFZp
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Luponw9m711YWZVTA2bFZp
            source_type: api_record
            title: 维基数据：王搏（Q45665731）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665731
            external_identifier: Q45665731
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:45:02.529Z
            metadata_json: null
        - id: cs_gePN6toSwEU14P6mjZk4ts
          claim_id: c_ux4obhcDEt4gvSf3AF7XPh
          source_id: s_ZsaLJJ1y7ju46UGxvbk2kS
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_ZsaLJJ1y7ju46UGxvbk2kS
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王搏（175545）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175545&o=json
            external_identifier: CBDB:175545
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:45:02.677Z
            metadata_json: null
        - id: cs_edTvXM7UiMCZ6j7SqdyomQ
          claim_id: c_ux4obhcDEt4gvSf3AF7XPh
          source_id: s_896dNAEmApLS5KgM7FGf6F
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_896dNAEmApLS5KgM7FGf6F
            source_type: api_record
            title: 维基数据：王倜（Q45665784）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45665784
            external_identifier: Q45665784
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:46:15.306Z
            metadata_json: null
        - id: cs_43qpHg2fYCgckE47HMPFs3
          claim_id: c_ux4obhcDEt4gvSf3AF7XPh
          source_id: s_gr7av3xpTJ4QKSfJRnCkme
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_gr7av3xpTJ4QKSfJRnCkme
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王倜（175546）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175546&o=json
            external_identifier: CBDB:175546
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:46:15.447Z
            metadata_json: null
      object_person:
        id: p_DgA93iH24ZodpFmFWyHcNR
        status: active
        display_name: 王搏
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王倜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王倜（卒于916年），唐人物。籍贯咸陽，曾任直弘文館。（中国历代人物传记资料库 CBDB 175546） | accepted |
| death.date | 916年 | accepted |
| name.primary | 王倜 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DgA93iH24ZodpFmFWyHcNR | 王搏 | accepted |

## 外部来源

- [维基数据：王搏（Q45665731）](https://www.wikidata.org/wiki/Q45665731)
- [维基数据：王倜（Q45665784）](https://www.wikidata.org/wiki/Q45665784)
- [CBDB 中国历代人物传记资料库：王搏（175545）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175545&o=json)
- [CBDB 中国历代人物传记资料库：王倜（175546）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175546&o=json)
