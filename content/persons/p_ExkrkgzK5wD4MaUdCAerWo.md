---
schema: wang-person/v1
id: p_ExkrkgzK5wD4MaUdCAerWo
status: active
merged_into: null
display_name: 王师造
cbdb_id: 175432
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_r2p9rk6767XMsn2PFs1Bxm
        subject_person_id: p_ExkrkgzK5wD4MaUdCAerWo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王师造（卒于894年），唐人物。籍贯臨沂。（中国历代人物传记资料库 CBDB 175432）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_iKrHhj7nCP7wqhU1PQib3V
          claim_id: c_r2p9rk6767XMsn2PFs1Bxm
          source_id: s_4TeHKanyNSxQghiXPjQjeH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_4TeHKanyNSxQghiXPjQjeH
            source_type: api_record
            title: 维基数据：王师造（Q45659296）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659296
            external_identifier: Q45659296
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:10.336Z
            metadata_json: null
        - id: cs_VMdThn1ZevF05597jN4Nai
          claim_id: c_r2p9rk6767XMsn2PFs1Bxm
          source_id: s_AWgaa59P49c6jEyPeXtHSb
          stance: supports
          locator: CBDB:175432
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_AWgaa59P49c6jEyPeXtHSb
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王師造（175432）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175432&o=json
            external_identifier: CBDB:175432
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:10.485Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_NptJjq5DFBW9dHwXde2wkN
        subject_person_id: p_ExkrkgzK5wD4MaUdCAerWo
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 894年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0894-01-01
            latest: 0894-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_N9BzNYD8LaPvqauNQxGzHF
          claim_id: c_NptJjq5DFBW9dHwXde2wkN
          source_id: s_4TeHKanyNSxQghiXPjQjeH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_4TeHKanyNSxQghiXPjQjeH
            source_type: api_record
            title: 维基数据：王师造（Q45659296）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659296
            external_identifier: Q45659296
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:10.336Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_9XhGg1ukkffN1PHEWUhQ7P
        subject_person_id: p_ExkrkgzK5wD4MaUdCAerWo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王师造
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_6DJE67udToQwQyHzb6XNjf
          claim_id: c_9XhGg1ukkffN1PHEWUhQ7P
          source_id: s_4TeHKanyNSxQghiXPjQjeH
          stance: supports
          locator: Q45659296
          quotation: null
          interpretation_note: null
          source:
            id: s_4TeHKanyNSxQghiXPjQjeH
            source_type: api_record
            title: 维基数据：王师造（Q45659296）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659296
            external_identifier: Q45659296
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:10.336Z
            metadata_json: null
        - id: cs_Ld9XgmL3T7LqwCYQALYaus
          claim_id: c_9XhGg1ukkffN1PHEWUhQ7P
          source_id: s_AWgaa59P49c6jEyPeXtHSb
          stance: supports
          locator: Q45659296
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_tWAQ8vVfFtarpWxx1MuNwj
        subject_person_id: p_R43S4tSNhE9EYwSxHQi8DK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ExkrkgzK5wD4MaUdCAerWo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_CFfF8tkMQY9N1PBeTPQXE8
          claim_id: c_tWAQ8vVfFtarpWxx1MuNwj
          source_id: s_6HC9Tz6usZG9tpzmYrAfiQ
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_6HC9Tz6usZG9tpzmYrAfiQ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王迺（175425）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175425&o=json
            external_identifier: CBDB:175425
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:58.862Z
            metadata_json: null
        - id: cs_JDxpm2kPp7xkwQuGk1ENUS
          claim_id: c_tWAQ8vVfFtarpWxx1MuNwj
          source_id: s_q2HM3LSwn2hCoD23EH61RQ
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_q2HM3LSwn2hCoD23EH61RQ
            source_type: api_record
            title: 维基数据：王迺（Q45658880）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658880
            external_identifier: Q45658880
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:58.710Z
            metadata_json: null
        - id: cs_prFR7pDXFB11girHW3JGGq
          claim_id: c_tWAQ8vVfFtarpWxx1MuNwj
          source_id: s_4TeHKanyNSxQghiXPjQjeH
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_4TeHKanyNSxQghiXPjQjeH
            source_type: api_record
            title: 维基数据：王师造（Q45659296）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659296
            external_identifier: Q45659296
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:10.336Z
            metadata_json: null
        - id: cs_7xgvafsnJ1JwCjEGcQd9nE
          claim_id: c_tWAQ8vVfFtarpWxx1MuNwj
          source_id: s_AWgaa59P49c6jEyPeXtHSb
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_AWgaa59P49c6jEyPeXtHSb
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王師造（175432）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175432&o=json
            external_identifier: CBDB:175432
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:10.485Z
            metadata_json: null
      object_person:
        id: p_R43S4tSNhE9EYwSxHQi8DK
        status: active
        display_name: 王迺
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王师造

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王师造（卒于894年），唐人物。籍贯臨沂。（中国历代人物传记资料库 CBDB 175432） | accepted |
| death.date | 894年 | accepted |
| name.primary | 王师造 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_R43S4tSNhE9EYwSxHQi8DK | 王迺 | accepted |

## 外部来源

- [维基数据：王迺（Q45658880）](https://www.wikidata.org/wiki/Q45658880)
- [维基数据：王师造（Q45659296）](https://www.wikidata.org/wiki/Q45659296)
- [CBDB 中国历代人物传记资料库：王迺（175425）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175425&o=json)
- [CBDB 中国历代人物传记资料库：王師造（175432）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175432&o=json)
