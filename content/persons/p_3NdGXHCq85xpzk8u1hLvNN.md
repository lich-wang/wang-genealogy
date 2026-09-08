---
schema: wang-person/v1
id: p_3NdGXHCq85xpzk8u1hLvNN
status: active
merged_into: null
display_name: 王纯臣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9r74RTz6s8e382pULdf8TE
        subject_person_id: p_3NdGXHCq85xpzk8u1hLvNN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王纯臣
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_A29t7jnLU747w3TzfF6CGA
          claim_id: c_9r74RTz6s8e382pULdf8TE
          source_id: s_f27qmRqHoncLwuQt6A8YAk
          stance: supports
          locator: Q45381154
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_f27qmRqHoncLwuQt6A8YAk
            source_type: api_record
            title: 维基数据：王纯臣（Q45381154）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45381154
            external_identifier: Q45381154
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_pm17Czo8gQ3aZ4F1uYKHCi
          claim_id: c_9r74RTz6s8e382pULdf8TE
          source_id: s_iQEDngz5S3yqe7ttjDd7s6
          stance: supports
          locator: CBDB:15753
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_iQEDngz5S3yqe7ttjDd7s6
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王純臣（15753）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=15753&o=json
            external_identifier: CBDB:15753
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GffNARLkseoj7QRAScfTwr
        subject_person_id: p_3NdGXHCq85xpzk8u1hLvNN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: Song dynasty person CBDB = 15753
          language: en
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_esi32WiQULMYGQSrYj2QPY
          claim_id: c_GffNARLkseoj7QRAScfTwr
          source_id: s_f27qmRqHoncLwuQt6A8YAk
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 维基数据条目描述
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_NRRECRDWubbwhsFE49VWxr
        subject_person_id: p_MTk1zakKvoc4HW2SfG5Ese
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3NdGXHCq85xpzk8u1hLvNN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d6PcT7a1kSbJVBAviKAYKz
          claim_id: c_NRRECRDWubbwhsFE49VWxr
          source_id: s_f27qmRqHoncLwuQt6A8YAk
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_5UrWFMbP42s2KCrMXALu6K
          claim_id: c_NRRECRDWubbwhsFE49VWxr
          source_id: s_9haVnYnB1Mu8a5ABupm314
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_9haVnYnB1Mu8a5ABupm314
            source_type: api_record
            title: 维基数据：王渎（Q45363040）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45363040
            external_identifier: Q45363040
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:12.061Z
            metadata_json: null
        - id: cs_rVMmKeNwNyXf73hGG4FT4W
          claim_id: c_NRRECRDWubbwhsFE49VWxr
          source_id: s_nTUESHyNaXX4A6ufpnau6R
          stance: supports
          locator: 亲属关系：次子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_nTUESHyNaXX4A6ufpnau6R
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王瀆（3986）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3986&o=json
            external_identifier: CBDB:3986
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:12.219Z
            metadata_json: null
      object_person:
        id: p_MTk1zakKvoc4HW2SfG5Ese
        status: active
        display_name: 王渎
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王纯臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王纯臣 | accepted |
| bio.summary | Song dynasty person CBDB = 15753 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MTk1zakKvoc4HW2SfG5Ese | 王渎 | accepted |

## 外部来源

- [维基数据：王纯臣（Q45381154）](https://www.wikidata.org/wiki/Q45381154)
- [维基数据：王渎（Q45363040）](https://www.wikidata.org/wiki/Q45363040)
- [CBDB 中国历代人物传记资料库：王純臣（15753）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=15753&o=json)
- [CBDB 中国历代人物传记资料库：王瀆（3986）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3986&o=json)
