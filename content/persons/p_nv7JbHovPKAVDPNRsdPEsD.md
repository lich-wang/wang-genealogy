---
schema: wang-person/v1
id: p_nv7JbHovPKAVDPNRsdPEsD
status: active
merged_into: null
display_name: 王文洎
cbdb_id: 175880
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Nv5hSVHBnwts8CLimeyqTg
        subject_person_id: p_nv7JbHovPKAVDPNRsdPEsD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文洎（卒于724年），唐人物。籍贯萬年。（中国历代人物传记资料库 CBDB 175880）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_zjDJhRWbTMvBrAMeusV3Ya
          claim_id: c_Nv5hSVHBnwts8CLimeyqTg
          source_id: s_7x8AiyxuK8UF3YmJfPdspF
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_7x8AiyxuK8UF3YmJfPdspF
            source_type: api_record
            title: 维基数据：王文洎（Q45678375）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45678375
            external_identifier: Q45678375
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:40.609Z
            metadata_json: null
        - id: cs_QtyS31_twXdNctaPGB6IML
          claim_id: c_Nv5hSVHBnwts8CLimeyqTg
          source_id: s_cbAocrBRvDkRjcQ1E72MN1
          stance: supports
          locator: CBDB:175880
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_cbAocrBRvDkRjcQ1E72MN1
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王文洎（175880）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175880&o=json
            external_identifier: CBDB:175880
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:40.746Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_cfjNhJFeaxN9aWYJR1CMTZ
        subject_person_id: p_nv7JbHovPKAVDPNRsdPEsD
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
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_G61xyK16n2WHPGfWgdWUkr
          claim_id: c_cfjNhJFeaxN9aWYJR1CMTZ
          source_id: s_7x8AiyxuK8UF3YmJfPdspF
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_7x8AiyxuK8UF3YmJfPdspF
            source_type: api_record
            title: 维基数据：王文洎（Q45678375）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45678375
            external_identifier: Q45678375
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:40.609Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7B6Bk6PzfGM2vNq1wKK2iD
        subject_person_id: p_nv7JbHovPKAVDPNRsdPEsD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文洎
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_835K5DsY4TD9FbA2SAbZeh
          claim_id: c_7B6Bk6PzfGM2vNq1wKK2iD
          source_id: s_7x8AiyxuK8UF3YmJfPdspF
          stance: supports
          locator: Q45678375
          quotation: null
          interpretation_note: null
          source:
            id: s_7x8AiyxuK8UF3YmJfPdspF
            source_type: api_record
            title: 维基数据：王文洎（Q45678375）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45678375
            external_identifier: Q45678375
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:40.609Z
            metadata_json: null
        - id: cs_iUmU5pd9wi7UBa8Bkv172T
          claim_id: c_7B6Bk6PzfGM2vNq1wKK2iD
          source_id: s_cbAocrBRvDkRjcQ1E72MN1
          stance: supports
          locator: Q45678375
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_f78nVkANSGvLS6ocbiwrSr
        subject_person_id: p_3ZRkLDEZG2dQQN3S5tXUNJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nv7JbHovPKAVDPNRsdPEsD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AaNNajHm4TyGiVDXYhEBCo
          claim_id: c_f78nVkANSGvLS6ocbiwrSr
          source_id: s_7x8AiyxuK8UF3YmJfPdspF
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_7x8AiyxuK8UF3YmJfPdspF
            source_type: api_record
            title: 维基数据：王文洎（Q45678375）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45678375
            external_identifier: Q45678375
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:40.609Z
            metadata_json: null
        - id: cs_K3aK5Qswb1kikjpaZELbEh
          claim_id: c_f78nVkANSGvLS6ocbiwrSr
          source_id: s_7nxCcXcQbcV52na55JgCb6
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_7nxCcXcQbcV52na55JgCb6
            source_type: api_record
            title: 维基数据：王诠（Q45678043）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45678043
            external_identifier: Q45678043
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:02.160Z
            metadata_json: null
        - id: cs_RAKgYa4mJu9H7euFu96z2Q
          claim_id: c_f78nVkANSGvLS6ocbiwrSr
          source_id: s_JsU8nFXR4zJ4sDBJuQb5qn
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_JsU8nFXR4zJ4sDBJuQb5qn
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王詮（175868）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175868&o=json
            external_identifier: CBDB:175868
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:02.333Z
            metadata_json: null
      object_person:
        id: p_3ZRkLDEZG2dQQN3S5tXUNJ
        status: active
        display_name: 王诠
        merged_into_person_id: null
  children:
    - claim:
        id: c_QgheiPpC4J2MTsMr1Kr747
        subject_person_id: p_nv7JbHovPKAVDPNRsdPEsD
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_Me5GtcBE8N1AnXQtkd8Bj5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_G8UbKwUELv2CLPWex3ha22
          claim_id: c_QgheiPpC4J2MTsMr1Kr747
          source_id: s_REUWRjLFSrubFWsUb6HWdd
          stance: supports
          locator: P22（父）
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
        - id: cs_N6Yohe2ywkK6TfcxxJo6cB
          claim_id: c_QgheiPpC4J2MTsMr1Kr747
          source_id: s_7x8AiyxuK8UF3YmJfPdspF
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_7x8AiyxuK8UF3YmJfPdspF
            source_type: api_record
            title: 维基数据：王文洎（Q45678375）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45678375
            external_identifier: Q45678375
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:40.609Z
            metadata_json: null
      object_person:
        id: p_Me5GtcBE8N1AnXQtkd8Bj5
        status: active
        display_name: 王仁皎
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王文洎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王文洎（卒于724年），唐人物。籍贯萬年。（中国历代人物传记资料库 CBDB 175880） | accepted |
| death.date | 724年 | accepted |
| name.primary | 王文洎 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3ZRkLDEZG2dQQN3S5tXUNJ | 王诠 | accepted |
| children | p_Me5GtcBE8N1AnXQtkd8Bj5 | 王仁皎 | accepted |

## 外部来源

- [维基数据：王诠（Q45678043）](https://www.wikidata.org/wiki/Q45678043)
- [维基数据：王仁皎（Q15912695）](https://www.wikidata.org/wiki/Q15912695)
- [维基数据：王文洎（Q45678375）](https://www.wikidata.org/wiki/Q45678375)
- [CBDB 中国历代人物传记资料库：王詮（175868）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175868&o=json)
- [CBDB 中国历代人物传记资料库：王文洎（175880）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175880&o=json)
