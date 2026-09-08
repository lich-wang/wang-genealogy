---
schema: wang-person/v1
id: p_Jq2yDTSdBE6JgPn4mQWZDR
status: active
merged_into: null
display_name: 王沂
cbdb_id: 175364
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FUcGsfJFb7tTyDpTRsooQi
        subject_person_id: p_Jq2yDTSdBE6JgPn4mQWZDR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沂（卒于807年），唐人物。CBDB 记录其籍贯记录为京兆府，身份包括詩人。中国历代人物传记资料库（CBDB）以人物编号 175364 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_hGFKGHRu4g8WTNN1861gd7
          claim_id: c_FUcGsfJFb7tTyDpTRsooQi
          source_id: s_1CbUuy1TVm1VXzC3uqDbjE
          stance: supports
          locator: null
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
        - id: cs_wz4lEtb5-7YQb81VoXkdPi
          claim_id: c_FUcGsfJFb7tTyDpTRsooQi
          source_id: s_gDRvQwTLh97QjxQUKWs5pR
          stance: supports
          locator: CBDB:175364
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_NbtEFpXAF7dG53Zppd36ph
        subject_person_id: p_Jq2yDTSdBE6JgPn4mQWZDR
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
        - id: cs_NcNin7yuVgUM3CGmUjrzXa
          claim_id: c_NbtEFpXAF7dG53Zppd36ph
          source_id: s_1CbUuy1TVm1VXzC3uqDbjE
          stance: supports
          locator: null
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Kw6isQt4gGU9V5YsjRwvQa
        subject_person_id: p_Jq2yDTSdBE6JgPn4mQWZDR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沂
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_bkCUUoPEQS4JnJeZC6AK7T
          claim_id: c_Kw6isQt4gGU9V5YsjRwvQa
          source_id: s_gDRvQwTLh97QjxQUKWs5pR
          stance: supports
          locator: Q45655407
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_rgtZLAoDWNeFhZqCKwKszS
          claim_id: c_Kw6isQt4gGU9V5YsjRwvQa
          source_id: s_1CbUuy1TVm1VXzC3uqDbjE
          stance: supports
          locator: Q45655407
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
      object_person: null
    alternatives: []
relationships:
  parents:
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

# 王沂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王沂（卒于807年），唐人物。CBDB 记录其籍贯记录为京兆府，身份包括詩人。中国历代人物传记资料库（CBDB）以人物编号 175364 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 807年 | accepted |
| name.primary | 王沂 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_B6Qa1QA1yXEX5CeG3LFhNd | 王纯 | accepted |

## 外部来源

- [维基数据：王纯（Q45655286）](https://www.wikidata.org/wiki/Q45655286)
- [维基数据：王沂（Q45655407）](https://www.wikidata.org/wiki/Q45655407)
- [CBDB 中国历代人物传记资料库：王純（175362）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175362&o=json)
- [CBDB 中国历代人物传记资料库：王沂（175364）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175364&o=json)
