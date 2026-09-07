---
schema: wang-person/v1
id: p_B6Qa1QA1yXEX5CeG3LFhNd
status: active
merged_into: null
display_name: 王纯
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_X9NTK5uaxQVGAG78Q8ca4f
        subject_person_id: p_B6Qa1QA1yXEX5CeG3LFhNd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王纯（卒于770年），唐人物。CBDB 记录其籍贯记录为京兆府，曾任令。中国历代人物传记资料库（CBDB）以人物编号 175362 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_ktHZFLWrHnGkut4zoeqep9
          claim_id: c_X9NTK5uaxQVGAG78Q8ca4f
          source_id: s_PJFu4EjsuoKoC2HNaKEbB7
          stance: supports
          locator: null
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
        - id: cs_DQImqqaL-GCEnXqUpHthMN
          claim_id: c_X9NTK5uaxQVGAG78Q8ca4f
          source_id: s_CBiCsWpLMkRQaabaYLQHgN
          stance: supports
          locator: CBDB:175362
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_oN2KAPHzt3R5En4nf6ffD8
        subject_person_id: p_B6Qa1QA1yXEX5CeG3LFhNd
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 770年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0770-01-01
            latest: 0770-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MMmWJ6cvBNJayYkdKw7XbQ
          claim_id: c_oN2KAPHzt3R5En4nf6ffD8
          source_id: s_PJFu4EjsuoKoC2HNaKEbB7
          stance: supports
          locator: null
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Txw8AYBG6J5L7EAAqmVFgn
        subject_person_id: p_B6Qa1QA1yXEX5CeG3LFhNd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王纯
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ZogoJdqBzFM9sojsWrTiDX
          claim_id: c_Txw8AYBG6J5L7EAAqmVFgn
          source_id: s_PJFu4EjsuoKoC2HNaKEbB7
          stance: supports
          locator: Q45655286
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
        - id: cs_zLj52fK2ReCP1QsFFCQcgw
          claim_id: c_Txw8AYBG6J5L7EAAqmVFgn
          source_id: s_CBiCsWpLMkRQaabaYLQHgN
          stance: supports
          locator: Q45655286
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_E7VLWa8ShPiGhHCNJcoZ52
        subject_person_id: p_x7oJfELhd7NSvt2eNbNHmH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_B6Qa1QA1yXEX5CeG3LFhNd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_LH1c41XCZh9TpeNxhyo2fp
          claim_id: c_E7VLWa8ShPiGhHCNJcoZ52
          source_id: s_qZACLc9edrwCBZHy8db65x
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_qZACLc9edrwCBZHy8db65x
            source_type: api_record
            title: 维基数据：王景（Q45654870）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45654870
            external_identifier: Q45654870
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:32.651Z
            metadata_json: null
        - id: cs_x8DhSfdbm6kiwMn47j9qgn
          claim_id: c_E7VLWa8ShPiGhHCNJcoZ52
          source_id: s_7E1ug3Kpns8EmbLJFG6nt6
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7E1ug3Kpns8EmbLJFG6nt6
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王景（175355）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175355&o=json
            external_identifier: CBDB:175355
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:32.816Z
            metadata_json: null
        - id: cs_54ByR5b7Dd2bZkBE4TEL16
          claim_id: c_E7VLWa8ShPiGhHCNJcoZ52
          source_id: s_PJFu4EjsuoKoC2HNaKEbB7
          stance: supports
          locator: P22（父）
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
        - id: cs_VSHYHCyJoCeBpoPuAV3S37
          claim_id: c_E7VLWa8ShPiGhHCNJcoZ52
          source_id: s_CBiCsWpLMkRQaabaYLQHgN
          stance: supports
          locator: 亲属关系：父
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
      object_person:
        id: p_x7oJfELhd7NSvt2eNbNHmH
        status: active
        display_name: 王景
        merged_into_person_id: null
  children:
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
        id: p_tCKp1gYi5QhowxvZYFbJnt
        status: active
        display_name: 王澹
        merged_into_person_id: null
    - claim:
        id: c_J6jPy4CdnMPMwwpzHAfsaF
        subject_person_id: p_B6Qa1QA1yXEX5CeG3LFhNd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Jq2yDTSdBE6JgPn4mQWZDR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Si2mPXbGk6wa79S7UmLZjm
          claim_id: c_J6jPy4CdnMPMwwpzHAfsaF
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
        - id: cs_gabzrLwtzQMR9B76P8G7jo
          claim_id: c_J6jPy4CdnMPMwwpzHAfsaF
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
        - id: cs_RSMCUnMMkvprpv5piBu4TE
          claim_id: c_J6jPy4CdnMPMwwpzHAfsaF
          source_id: s_1CbUuy1TVm1VXzC3uqDbjE
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_1CbUuy1TVm1VXzC3uqDbjE
            source_type: api_record
            title: 维基数据：王沂（Q45655407）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45655407
            external_identifier: Q45655407
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:44.470Z
            metadata_json: null
        - id: cs_ACqshsq2pNRawkaKSKGfP3
          claim_id: c_J6jPy4CdnMPMwwpzHAfsaF
          source_id: s_gDRvQwTLh97QjxQUKWs5pR
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_gDRvQwTLh97QjxQUKWs5pR
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王沂（175364）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175364&o=json
            external_identifier: CBDB:175364
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:44.634Z
            metadata_json: null
      object_person:
        id: p_Jq2yDTSdBE6JgPn4mQWZDR
        status: active
        display_name: 王沂
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王纯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王纯（卒于770年），唐人物。CBDB 记录其籍贯记录为京兆府，曾任令。中国历代人物传记资料库（CBDB）以人物编号 175362 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 770年 | accepted |
| name.primary | 王纯 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_x7oJfELhd7NSvt2eNbNHmH | 王景 | accepted |
| children | p_tCKp1gYi5QhowxvZYFbJnt | 王澹 | accepted |
| children | p_Jq2yDTSdBE6JgPn4mQWZDR | 王沂 | accepted |

## 外部来源

- [维基数据：王纯（Q45655286）](https://www.wikidata.org/wiki/Q45655286)
- [维基数据：王澹（Q45655347）](https://www.wikidata.org/wiki/Q45655347)
- [维基数据：王景（Q45654870）](https://www.wikidata.org/wiki/Q45654870)
- [维基数据：王沂（Q45655407）](https://www.wikidata.org/wiki/Q45655407)
- [CBDB 中国历代人物传记资料库：王純（175362）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175362&o=json)
- [CBDB 中国历代人物传记资料库：王澹（175363）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175363&o=json)
- [CBDB 中国历代人物传记资料库：王景（175355）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175355&o=json)
- [CBDB 中国历代人物传记资料库：王沂（175364）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175364&o=json)
