---
schema: wang-person/v1
id: p_32qBUADizjGa3P7B3ZTimt
status: active
merged_into: null
display_name: 王瑤
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_435MrKbRW2r6aXMnbt5bNk
        subject_person_id: p_32qBUADizjGa3P7B3ZTimt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NJJ3b4u9apXx8xiFXzsieE
          claim_id: c_435MrKbRW2r6aXMnbt5bNk
          source_id: s_KsZnLRsXB29v8BDss4UGTC
          stance: supports
          locator: CBDB:303942
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（303942）
          source: &a1
            id: s_KsZnLRsXB29v8BDss4UGTC
            source_type: api_record
            title: 中国历代人物传记资料库：王瑤（CBDB 303942）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303942&o=json
            external_identifier: CBDB:303942
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.695Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mxn2YtyQubtJ2DHumWKG7e
        subject_person_id: p_32qBUADizjGa3P7B3ZTimt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑤，明人物。嘉靖二十年進士，籍贯黃縣，入仕監生。（中国历代人物传记资料库 CBDB 303942）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uz5YbH-blDcr29HklRH4Q2
          claim_id: c_mxn2YtyQubtJ2DHumWKG7e
          source_id: s_KsZnLRsXB29v8BDss4UGTC
          stance: supports
          locator: CBDB:303942
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_VmbgkNE6CrxJ6RTQYkVMlu
        subject_person_id: p_32qBUADizjGa3P7B3ZTimt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_USmQUSMYXi4KzQDYfEfPrB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WlYb0Drk7ecCCs_asjmMr6
          claim_id: c_VmbgkNE6CrxJ6RTQYkVMlu
          source_id: s_KsZnLRsXB29v8BDss4UGTC
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第八十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_USmQUSMYXi4KzQDYfEfPrB
        status: active
        display_name: 王三聘
        merged_into_person_id: null
    - claim:
        id: c_yGE4tLNLpK2B_pkHYpvOEL
        subject_person_id: p_32qBUADizjGa3P7B3ZTimt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_b9xjNccc1s62G7w8GroKVg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_72dOC4nmQyBCXBEnXn-Svt
          claim_id: c_yGE4tLNLpK2B_pkHYpvOEL
          source_id: s_I3Q2JJAwQZaDH5_h6IKNOg
          stance: supports
          locator: CBDB：兄弟 王三聘（203385）之父／母 王瑤
          quotation: null
          interpretation_note: 由兄弟关系推断：王三顧 与 王三聘 为同胞（CBDB 记「兄」），王三聘 之父／母即 王三顧 之父／母。
          source:
            id: s_I3Q2JJAwQZaDH5_h6IKNOg
            source_type: api_record
            title: 中国历代人物传记资料库：王三顧（CBDB 303946）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303946&o=json
            external_identifier: CBDB:303946
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_b9xjNccc1s62G7w8GroKVg
        status: active
        display_name: 王三顧
        merged_into_person_id: null
    - claim:
        id: c_czP_yplo_atABJW9t3pBoB
        subject_person_id: p_32qBUADizjGa3P7B3ZTimt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pXPDHgXhsJmbet7dfq14fb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__2NZkXP9KgvTxZ5I3QYNDf
          claim_id: c_czP_yplo_atABJW9t3pBoB
          source_id: s_N76ZGxk4KZ2r1bR8og6oLm
          stance: supports
          locator: CBDB：兄弟 王三聘（203385）之父／母 王瑤
          quotation: null
          interpretation_note: 由兄弟关系推断：王三讓 与 王三聘 为同胞（CBDB 记「兄」），王三聘 之父／母即 王三讓 之父／母。
          source:
            id: s_N76ZGxk4KZ2r1bR8og6oLm
            source_type: api_record
            title: 中国历代人物传记资料库：王三讓（CBDB 303947）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303947&o=json
            external_identifier: CBDB:303947
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pXPDHgXhsJmbet7dfq14fb
        status: active
        display_name: 王三讓
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王瑤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑤 | accepted |
| bio.summary | 王瑤，明人物。嘉靖二十年進士，籍贯黃縣，入仕監生。（中国历代人物传记资料库 CBDB 303942） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_USmQUSMYXi4KzQDYfEfPrB | 王三聘 | accepted |
| children | p_b9xjNccc1s62G7w8GroKVg | 王三顧 | accepted |
| children | p_pXPDHgXhsJmbet7dfq14fb | 王三讓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王三顧（CBDB 303946）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303946&o=json)
- [中国历代人物传记资料库：王三讓（CBDB 303947）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303947&o=json)
- [中国历代人物传记资料库：王瑤（CBDB 303942）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303942&o=json)
