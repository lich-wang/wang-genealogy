---
schema: wang-person/v1
id: p_n3nPq1WofNomL7BU696aia
status: active
merged_into: null
display_name: 王德光
cbdb_id: 230043
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dTzc52ct2Gq6jPmtvuYMGG
        subject_person_id: p_n3nPq1WofNomL7BU696aia
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德光，明人物。萬曆丙戌科進士進士，籍贯安州，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 230043）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_tqU6mCUtbO1WLpVlxAnYBY
          claim_id: c_dTzc52ct2Gq6jPmtvuYMGG
          source_id: s_AJ1uNtXCzhpXFPfLMX24Af
          stance: supports
          locator: CBDB:230043
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_AJ1uNtXCzhpXFPfLMX24Af
            source_type: api_record
            title: 中国历代人物传记资料库：王德光（CBDB 230043）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230043&o=json
            external_identifier: CBDB:230043
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_PGR2ZjJAfxzh7jtKR8stAS
        subject_person_id: p_n3nPq1WofNomL7BU696aia
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德光
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3QgZYgrPDHLZRLKbXD4Dwt
          claim_id: c_PGR2ZjJAfxzh7jtKR8stAS
          source_id: s_AJ1uNtXCzhpXFPfLMX24Af
          stance: supports
          locator: CBDB:230043
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2701-2800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5UN-kVhFr1ZMlXOcmMk8Ij
        subject_person_id: p_2njDB7hmvoYHNUkzktGMvR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_n3nPq1WofNomL7BU696aia
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lS2xwzT_PFwaKy6XM7yHn_
          claim_id: c_5UN-kVhFr1ZMlXOcmMk8Ij
          source_id: s_lWVVi8eqogBRoQf2dtWk-8
          stance: supports
          locator: CBDB：兄弟 王德完（126817）之父／母 王梁
          quotation: null
          interpretation_note: 由兄弟关系推断：王德光 与 王德完 为同胞（CBDB 记「弟」），王德完 之父／母即 王德光 之父／母。
          source:
            id: s_lWVVi8eqogBRoQf2dtWk-8
            source_type: api_record
            title: 中国历代人物传记资料库：王德光（CBDB 230043）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230043&o=json
            external_identifier: CBDB:230043
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2njDB7hmvoYHNUkzktGMvR
        status: active
        display_name: 王梁
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_qXL9qWLOlm_Vcn7OW0fegw
        subject_person_id: p_E9W2DShq5Qkj6ZiKVB1xLN
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_n3nPq1WofNomL7BU696aia
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H66ECCwA0ystnjnzT65aVy
          claim_id: c_qXL9qWLOlm_Vcn7OW0fegw
          source_id: s_lWVVi8eqogBRoQf2dtWk-8
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126817 王德完）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_lWVVi8eqogBRoQf2dtWk-8
            source_type: api_record
            title: 中国历代人物传记资料库：王德光（CBDB 230043）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230043&o=json
            external_identifier: CBDB:230043
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_E9W2DShq5Qkj6ZiKVB1xLN
        status: active
        display_name: 王德完
        merged_into_person_id: null
---

# 王德光

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王德光，明人物。萬曆丙戌科進士進士，籍贯安州，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 230043） | accepted |
| name.primary | 王德光 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2njDB7hmvoYHNUkzktGMvR | 王梁 | accepted |
| other | p_E9W2DShq5Qkj6ZiKVB1xLN | 王德完 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德光（CBDB 230043）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230043&o=json)
