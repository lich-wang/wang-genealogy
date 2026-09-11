---
schema: wang-person/v1
id: p_JRML1qsp9uPx3mbaDJtmDQ
status: active
merged_into: null
display_name: 王詔
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QE7RqsL8NaGtPLGp6QqsdF
        subject_person_id: p_JRML1qsp9uPx3mbaDJtmDQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_miA3yhMGz7KrSY2AKEp3FA
          claim_id: c_QE7RqsL8NaGtPLGp6QqsdF
          source_id: s_5j55fkUh3gWhSKgwvKjRFk
          stance: supports
          locator: CBDB:67962
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67962）
          source: &a1
            id: s_5j55fkUh3gWhSKgwvKjRFk
            source_type: api_record
            title: 中国历代人物传记资料库：王詔（CBDB 67962）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67962&o=json
            external_identifier: CBDB:67962
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.037Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aKStMUy1XugTLy9vNJajEZ
        subject_person_id: p_JRML1qsp9uPx3mbaDJtmDQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Uaadt7YoCrPLKPnzBSXPkH
          claim_id: c_aKStMUy1XugTLy9vNJajEZ
          source_id: s_5j55fkUh3gWhSKgwvKjRFk
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_sklE5n68M1x7vpHT8qRxoQ
        subject_person_id: p_JRML1qsp9uPx3mbaDJtmDQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Aha9XPCnhd3jCdwEobiowC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8u8aPIWkFGzTSQfUJ16Z2V
          claim_id: c_sklE5n68M1x7vpHT8qRxoQ
          source_id: s_QgZHTBLR1fFGjZkv51TPU5
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），11609：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QgZHTBLR1fFGjZkv51TPU5
            source_type: api_record
            title: 中国历代人物传记资料库：王延世（CBDB 525689）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=525689&o=json
            external_identifier: CBDB:525689
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.328Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Aha9XPCnhd3jCdwEobiowC
        status: active
        display_name: 王延世
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王詔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王詔 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Aha9XPCnhd3jCdwEobiowC | 王延世 | accepted |

## 外部来源

- [中国历代人物传记资料库：王延世（CBDB 525689）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=525689&o=json)
- [中国历代人物传记资料库：王詔（CBDB 67962）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67962&o=json)
