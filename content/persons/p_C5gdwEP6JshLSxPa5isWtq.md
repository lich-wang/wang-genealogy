---
schema: wang-person/v1
id: p_C5gdwEP6JshLSxPa5isWtq
status: active
merged_into: null
display_name: 王异
cbdb_id: 17423
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4iMtGN6YCFD1a5pgMZTQcT
        subject_person_id: p_C5gdwEP6JshLSxPa5isWtq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王异
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8s64MrJt1qMfPjJAKp24aL
          claim_id: c_4iMtGN6YCFD1a5pgMZTQcT
          source_id: s_A5qwERCBYBB4o9rC5wm7KL
          stance: supports
          locator: Q45386110
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_A5qwERCBYBB4o9rC5wm7KL
            source_type: api_record
            title: 维基数据：王异（Q45386110）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45386110
            external_identifier: Q45386110
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_e8xepU66WHPrJ837fZk4wA
          claim_id: c_4iMtGN6YCFD1a5pgMZTQcT
          source_id: s_L33bdWsQPTsnWG6UgxsBXb
          stance: supports
          locator: CBDB:17423
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_L33bdWsQPTsnWG6UgxsBXb
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王异（17423）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17423&o=json
            external_identifier: CBDB:17423
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kBiD6Y6HpCqXv8reSa4bb7
        subject_person_id: p_C5gdwEP6JshLSxPa5isWtq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: Song dynasty person (CBDB = 17423)
          language: en
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qBYWAMyvDWC82KYNC5mgXH
          claim_id: c_kBiD6Y6HpCqXv8reSa4bb7
          source_id: s_A5qwERCBYBB4o9rC5wm7KL
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
        id: c_xNhK7D71rFc4ZBtdKPT3am
        subject_person_id: p_C5gdwEP6JshLSxPa5isWtq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4Hjde84UDSxNby7XrvDD1E
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EJBahnccATR5Ck1CQFtfAP
          claim_id: c_xNhK7D71rFc4ZBtdKPT3am
          source_id: s_vRaCPeuuKnxFV9tq7HyLW3
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_vRaCPeuuKnxFV9tq7HyLW3
            source_type: api_record
            title: 维基数据：王寂（Q45386119）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45386119
            external_identifier: Q45386119
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:10.721Z
            metadata_json: null
        - id: cs_b7fkQMVBcQ5Go6fMU4Ct77
          claim_id: c_xNhK7D71rFc4ZBtdKPT3am
          source_id: s_A5qwERCBYBB4o9rC5wm7KL
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_4Hjde84UDSxNby7XrvDD1E
        status: active
        display_name: 王寂
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王异

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王异 | accepted |
| bio.summary | Song dynasty person (CBDB = 17423) | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_4Hjde84UDSxNby7XrvDD1E | 王寂 | accepted |

## 外部来源

- [维基数据：王寂（Q45386119）](https://www.wikidata.org/wiki/Q45386119)
- [维基数据：王异（Q45386110）](https://www.wikidata.org/wiki/Q45386110)
- [CBDB 中国历代人物传记资料库：王异（17423）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17423&o=json)
