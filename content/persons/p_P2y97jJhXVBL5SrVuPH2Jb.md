---
schema: wang-person/v1
id: p_P2y97jJhXVBL5SrVuPH2Jb
status: active
merged_into: null
display_name: 王逵
cbdb_id: 34583
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_F3W4DVdxt6JQYYre2HwPBH
        subject_person_id: p_P2y97jJhXVBL5SrVuPH2Jb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逵，明人物。籍贯吳縣，身份为地方士人/鄉紳，入仕封贈。（中国历代人物传记资料库 CBDB 34583）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_yWTWGc5vmNtQ5jc4uUqqm3
          claim_id: c_F3W4DVdxt6JQYYre2HwPBH
          source_id: s_R7Q4MJBKETsoKXUfCBEiDk
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_R7Q4MJBKETsoKXUfCBEiDk
            source_type: api_record
            title: 维基数据：王逵（Q45426376）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45426376
            external_identifier: Q45426376
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:33.804Z
            metadata_json: null
        - id: cs_VEw5hoYm6Klgb8XWRbc86D
          claim_id: c_F3W4DVdxt6JQYYre2HwPBH
          source_id: s_WZsWGK6n29iNd2y92gVpEL
          stance: supports
          locator: CBDB:34583
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_WZsWGK6n29iNd2y92gVpEL
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王逵（34583）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34583&o=json
            external_identifier: CBDB:34583
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:33.993Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_jKynhJTCMPHGdgEorUQea6
        subject_person_id: p_P2y97jJhXVBL5SrVuPH2Jb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逵
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_x6GqWLSo961tWP7e4sis6A
          claim_id: c_jKynhJTCMPHGdgEorUQea6
          source_id: s_R7Q4MJBKETsoKXUfCBEiDk
          stance: supports
          locator: Q45426376
          quotation: null
          interpretation_note: null
          source:
            id: s_R7Q4MJBKETsoKXUfCBEiDk
            source_type: api_record
            title: 维基数据：王逵（Q45426376）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45426376
            external_identifier: Q45426376
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:33.804Z
            metadata_json: null
        - id: cs_zSMYHr1R78e7nSnaqbeCbc
          claim_id: c_jKynhJTCMPHGdgEorUQea6
          source_id: s_WZsWGK6n29iNd2y92gVpEL
          stance: supports
          locator: Q45426376
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_GZ1tvDNLM4EVMbiMs4MRP9
        subject_person_id: p_rfNi35kMF1FSma9nVH7tNg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_P2y97jJhXVBL5SrVuPH2Jb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YagnG2QbuqHvu58GfmarmG
          claim_id: c_GZ1tvDNLM4EVMbiMs4MRP9
          source_id: s_R7Q4MJBKETsoKXUfCBEiDk
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_HJE3i4UZoWPJmPKumufF1y
          claim_id: c_GZ1tvDNLM4EVMbiMs4MRP9
          source_id: s_E8oVkWzicUr2oy7sEHXWz6
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_E8oVkWzicUr2oy7sEHXWz6
            source_type: api_record
            title: 维基数据：王彦祥（Q45426420）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45426420
            external_identifier: Q45426420
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person:
        id: p_rfNi35kMF1FSma9nVH7tNg
        status: active
        display_name: 王彦祥
        merged_into_person_id: null
  children:
    - claim:
        id: c_cpS9ZtSMvjtM99NkY4ZJFp
        subject_person_id: p_P2y97jJhXVBL5SrVuPH2Jb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3JZgMSGQ5z3nPzBFS6irjA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kJgaNXehK77QzYePfsAxuC
          claim_id: c_cpS9ZtSMvjtM99NkY4ZJFp
          source_id: s_Pep3yEWZ9xNkK9JDhN8XfH
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_Pep3yEWZ9xNkK9JDhN8XfH
            source_type: api_record
            title: 维基数据：王琬（Q45426296）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45426296
            external_identifier: Q45426296
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:32.124Z
            metadata_json: null
        - id: cs_Gpu6V2tvQNXsfzoyRqN6s8
          claim_id: c_cpS9ZtSMvjtM99NkY4ZJFp
          source_id: s_R7Q4MJBKETsoKXUfCBEiDk
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_YSDXFw5Trs9bLfYjwUohc3
          claim_id: c_cpS9ZtSMvjtM99NkY4ZJFp
          source_id: s_WZsWGK6n29iNd2y92gVpEL
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source: *a1
      object_person:
        id: p_3JZgMSGQ5z3nPzBFS6irjA
        status: active
        display_name: 王琬
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王逵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王逵，明人物。籍贯吳縣，身份为地方士人/鄉紳，入仕封贈。（中国历代人物传记资料库 CBDB 34583） | accepted |
| name.primary | 王逵 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rfNi35kMF1FSma9nVH7tNg | 王彦祥 | accepted |
| children | p_3JZgMSGQ5z3nPzBFS6irjA | 王琬 | accepted |

## 外部来源

- [维基数据：王逵（Q45426376）](https://www.wikidata.org/wiki/Q45426376)
- [维基数据：王琬（Q45426296）](https://www.wikidata.org/wiki/Q45426296)
- [维基数据：王彦祥（Q45426420）](https://www.wikidata.org/wiki/Q45426420)
- [CBDB 中国历代人物传记资料库：王逵（34583）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34583&o=json)
