---
schema: wang-person/v1
id: p_1a4kV9bnUd3Gc32RqHYR8N
status: active
merged_into: null
display_name: 王思义
cbdb_id: 337953
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HA2PWj1F35C3CDCoK3qfcw
        subject_person_id: p_1a4kV9bnUd3Gc32RqHYR8N
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思义
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wC1nCsnBWRv2vXuvZnz527
          claim_id: c_HA2PWj1F35C3CDCoK3qfcw
          source_id: s_2xPmNcsS15tNrXDCEVj1CL
          stance: supports
          locator: Q45538216
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_2xPmNcsS15tNrXDCEVj1CL
            source_type: api_record
            title: 维基数据：王思义（Q45538216）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45538216
            external_identifier: Q45538216
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_ZoWRPb9pHoYo54UNoaLCbq
          claim_id: c_HA2PWj1F35C3CDCoK3qfcw
          source_id: s_7j18fpdugA8zQL1zmazVdV
          stance: supports
          locator: CBDB:337953
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_7j18fpdugA8zQL1zmazVdV
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王思義（337953）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337953&o=json
            external_identifier: CBDB:337953
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hspH9UQGz8Wih2MN6VjoPu
        subject_person_id: p_1a4kV9bnUd3Gc32RqHYR8N
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: Ming dynasty person CBDB = 337953
          language: en
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kjw7FxkXBuXaYLsMadxeJ3
          claim_id: c_hspH9UQGz8Wih2MN6VjoPu
          source_id: s_2xPmNcsS15tNrXDCEVj1CL
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 维基数据条目描述
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Mvgc5Nz431jfUntcNL5HkT
        subject_person_id: p_1a4kV9bnUd3Gc32RqHYR8N
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nmksiEiPj8BciQGG5LZXMB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pgcQjAtPM35ZAZYdLgPr5U
          claim_id: c_Mvgc5Nz431jfUntcNL5HkT
          source_id: s_pYzRbbN51bzA3eo9bup8B9
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_pYzRbbN51bzA3eo9bup8B9
            source_type: api_record
            title: 维基数据：王理（Q45538785）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45538785
            external_identifier: Q45538785
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:58.883Z
            metadata_json: null
        - id: cs_CN38XvyH4rSQ4F2VZ4VaBo
          claim_id: c_Mvgc5Nz431jfUntcNL5HkT
          source_id: s_2xPmNcsS15tNrXDCEVj1CL
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_nmksiEiPj8BciQGG5LZXMB
        status: active
        display_name: 王理
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王思义

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思义 | accepted |
| bio.summary | Ming dynasty person CBDB = 337953 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_nmksiEiPj8BciQGG5LZXMB | 王理 | accepted |

## 外部来源

- [维基数据：王理（Q45538785）](https://www.wikidata.org/wiki/Q45538785)
- [维基数据：王思义（Q45538216）](https://www.wikidata.org/wiki/Q45538216)
- [CBDB 中国历代人物传记资料库：王思義（337953）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337953&o=json)
