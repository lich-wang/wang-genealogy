---
schema: wang-person/v1
id: p_A881rM9t1ZsBXULN5A4SBH
status: active
merged_into: null
display_name: 王师逸
cbdb_id: 175428
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_U2J7b4mWL19mGsrLVs4tkP
        subject_person_id: p_A881rM9t1ZsBXULN5A4SBH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王师逸（卒于894年），唐人物。籍贯臨沂。（中国历代人物传记资料库 CBDB 175428）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_LWrGXiG3C2E4rwPvw5xX7D
          claim_id: c_U2J7b4mWL19mGsrLVs4tkP
          source_id: s_8qbHfSoNuuqzCez2CdZfsa
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_8qbHfSoNuuqzCez2CdZfsa
            source_type: api_record
            title: 维基数据：王师逸（Q45659057）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659057
            external_identifier: Q45659057
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:08.601Z
            metadata_json: null
        - id: cs_cSXs7JVzSVSCKbRXwoTdF1
          claim_id: c_U2J7b4mWL19mGsrLVs4tkP
          source_id: s_aJdvfQH46DjDpFzuFPhr9d
          stance: supports
          locator: CBDB:175428
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_aJdvfQH46DjDpFzuFPhr9d
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王師逸（175428）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175428&o=json
            external_identifier: CBDB:175428
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:08.746Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_kRVXkQCvt3WHqBLXnyPYMm
        subject_person_id: p_A881rM9t1ZsBXULN5A4SBH
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
        - id: cs_C9mDb4NwpXvmSQZCd3ZhkT
          claim_id: c_kRVXkQCvt3WHqBLXnyPYMm
          source_id: s_8qbHfSoNuuqzCez2CdZfsa
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_8qbHfSoNuuqzCez2CdZfsa
            source_type: api_record
            title: 维基数据：王师逸（Q45659057）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659057
            external_identifier: Q45659057
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:08.601Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_DboNPS35iwahyoTDsh8Vcr
        subject_person_id: p_A881rM9t1ZsBXULN5A4SBH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王师逸
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_GDg5uLt8rLcDDSNYZ5f2AB
          claim_id: c_DboNPS35iwahyoTDsh8Vcr
          source_id: s_aJdvfQH46DjDpFzuFPhr9d
          stance: supports
          locator: Q45659057
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_vHcUCGXwKS34cHEmWDjNv4
          claim_id: c_DboNPS35iwahyoTDsh8Vcr
          source_id: s_8qbHfSoNuuqzCez2CdZfsa
          stance: supports
          locator: Q45659057
          quotation: null
          interpretation_note: null
          source:
            id: s_8qbHfSoNuuqzCez2CdZfsa
            source_type: api_record
            title: 维基数据：王师逸（Q45659057）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659057
            external_identifier: Q45659057
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:08.601Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_G3wempiGA5i5XPq6uCxcpz
        subject_person_id: p_R43S4tSNhE9EYwSxHQi8DK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_A881rM9t1ZsBXULN5A4SBH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_La2ExQML9PXwdNx1bfBHXC
          claim_id: c_G3wempiGA5i5XPq6uCxcpz
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
        - id: cs_yAr9wm4r7r7nxTANGgJtKZ
          claim_id: c_G3wempiGA5i5XPq6uCxcpz
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
        - id: cs_2yBuiPn1C7WpSp63h2XjBC
          claim_id: c_G3wempiGA5i5XPq6uCxcpz
          source_id: s_8qbHfSoNuuqzCez2CdZfsa
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_8qbHfSoNuuqzCez2CdZfsa
            source_type: api_record
            title: 维基数据：王师逸（Q45659057）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659057
            external_identifier: Q45659057
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:08.601Z
            metadata_json: null
        - id: cs_9cydfjKGCnaydMWB6nr5iP
          claim_id: c_G3wempiGA5i5XPq6uCxcpz
          source_id: s_aJdvfQH46DjDpFzuFPhr9d
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_aJdvfQH46DjDpFzuFPhr9d
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王師逸（175428）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175428&o=json
            external_identifier: CBDB:175428
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:08.746Z
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

# 王师逸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王师逸（卒于894年），唐人物。籍贯臨沂。（中国历代人物传记资料库 CBDB 175428） | accepted |
| death.date | 894年 | accepted |
| name.primary | 王师逸 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_R43S4tSNhE9EYwSxHQi8DK | 王迺 | accepted |

## 外部来源

- [维基数据：王迺（Q45658880）](https://www.wikidata.org/wiki/Q45658880)
- [维基数据：王师逸（Q45659057）](https://www.wikidata.org/wiki/Q45659057)
- [CBDB 中国历代人物传记资料库：王迺（175425）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175425&o=json)
- [CBDB 中国历代人物传记资料库：王師逸（175428）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175428&o=json)
