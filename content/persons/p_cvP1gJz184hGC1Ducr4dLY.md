---
schema: wang-person/v1
id: p_cvP1gJz184hGC1Ducr4dLY
status: active
merged_into: null
display_name: 王子文
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZXrD7PvjHEP9oEYNqFHacF
        subject_person_id: p_cvP1gJz184hGC1Ducr4dLY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子文
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2iRxxArLxBZE67PEc4KTpf
          claim_id: c_ZXrD7PvjHEP9oEYNqFHacF
          source_id: s_t8ew93v9cGWaw4qi4iL8Z8
          stance: supports
          locator: Q45620962
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_t8ew93v9cGWaw4qi4iL8Z8
            source_type: api_record
            title: 维基数据：王子文（Q45620962）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45620962
            external_identifier: Q45620962
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_shP3taP8JKWb4ecwF87CNr
          claim_id: c_ZXrD7PvjHEP9oEYNqFHacF
          source_id: s_mF5GN7fg2ATQRAvZXUeEmF
          stance: supports
          locator: CBDB:308146
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_mF5GN7fg2ATQRAvZXUeEmF
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王子文（308146）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308146&o=json
            external_identifier: CBDB:308146
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xDNSDENiy59Rp4XEwKPHmE
        subject_person_id: p_cvP1gJz184hGC1Ducr4dLY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: Ming dynasty person CBDB = 308146
          language: en
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U4JF59GxskJ4e1eaARQ1iY
          claim_id: c_xDNSDENiy59Rp4XEwKPHmE
          source_id: s_t8ew93v9cGWaw4qi4iL8Z8
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
        id: c_euou14QTXMMYKQzM2thGWv
        subject_person_id: p_cvP1gJz184hGC1Ducr4dLY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qMBPniX9L5uzUSacCxGcRs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PTzQXDRCw3tisvKFACdwzX
          claim_id: c_euou14QTXMMYKQzM2thGWv
          source_id: s_7LuvuxPskiCyDZ6ZzoBu4f
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_7LuvuxPskiCyDZ6ZzoBu4f
            source_type: api_record
            title: 维基数据：王昺（Q45621024）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45621024
            external_identifier: Q45621024
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:44.307Z
            metadata_json: null
        - id: cs_MESA5i9zrz9ugi3M7CPF8S
          claim_id: c_euou14QTXMMYKQzM2thGWv
          source_id: s_t8ew93v9cGWaw4qi4iL8Z8
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_qMBPniX9L5uzUSacCxGcRs
        status: active
        display_name: 王昺
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王子文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王子文 | accepted |
| bio.summary | Ming dynasty person CBDB = 308146 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_qMBPniX9L5uzUSacCxGcRs | 王昺 | accepted |

## 外部来源

- [维基数据：王昺（Q45621024）](https://www.wikidata.org/wiki/Q45621024)
- [维基数据：王子文（Q45620962）](https://www.wikidata.org/wiki/Q45620962)
- [CBDB 中国历代人物传记资料库：王子文（308146）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308146&o=json)
