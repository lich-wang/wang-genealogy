---
schema: wang-person/v1
id: p_xJsRqYi6bQ21m8ncMBogv4
status: active
merged_into: null
display_name: 王民
cbdb_id: 277428
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Tkj4wP6KLAJYcGw3GWjMD7
        subject_person_id: p_xJsRqYi6bQ21m8ncMBogv4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王民
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Mvky23FXR1c2z1j7NoL9DG
          claim_id: c_Tkj4wP6KLAJYcGw3GWjMD7
          source_id: s_L2JMk13QEy17HsL24NGnjn
          stance: supports
          locator: Q45663662
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_L2JMk13QEy17HsL24NGnjn
            source_type: api_record
            title: 维基数据：王民（Q45663662）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663662
            external_identifier: Q45663662
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_59HeuHipj2JDCijLQiLRsq
          claim_id: c_Tkj4wP6KLAJYcGw3GWjMD7
          source_id: s_zXk3J9ETwt3Au1CwLjm5kx
          stance: supports
          locator: CBDB:277428
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_zXk3J9ETwt3Au1CwLjm5kx
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王民（277428）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277428&o=json
            external_identifier: CBDB:277428
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HmDNXrxH8cZXXkKHhW5xJL
        subject_person_id: p_xJsRqYi6bQ21m8ncMBogv4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: Ming dynasty person CBDB=277428
          language: en
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gB54fHXk7NaRLx2ywR2WzM
          claim_id: c_HmDNXrxH8cZXXkKHhW5xJL
          source_id: s_L2JMk13QEy17HsL24NGnjn
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
        id: c_uUj1SaJ2iYwRALc29ZFv1P
        subject_person_id: p_xJsRqYi6bQ21m8ncMBogv4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ofwfED7cGNaG45dVNWJBNj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_twUQmMV7QkhSRr1tVKSEDm
          claim_id: c_uUj1SaJ2iYwRALc29ZFv1P
          source_id: s_SYCC4D3gpxEXf8QPU9rNwS
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_SYCC4D3gpxEXf8QPU9rNwS
            source_type: api_record
            title: 维基数据：王䪧（Q45663719）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663719
            external_identifier: Q45663719
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:02.160Z
            metadata_json: null
        - id: cs_4U2MgUptuF1VTZ8xDQ4z86
          claim_id: c_uUj1SaJ2iYwRALc29ZFv1P
          source_id: s_L2JMk13QEy17HsL24NGnjn
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_ofwfED7cGNaG45dVNWJBNj
        status: active
        display_name: 王䪧
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王民

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王民 | accepted |
| bio.summary | Ming dynasty person CBDB=277428 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ofwfED7cGNaG45dVNWJBNj | 王䪧 | accepted |

## 外部来源

- [维基数据：王民（Q45663662）](https://www.wikidata.org/wiki/Q45663662)
- [维基数据：王䪧（Q45663719）](https://www.wikidata.org/wiki/Q45663719)
- [CBDB 中国历代人物传记资料库：王民（277428）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277428&o=json)
