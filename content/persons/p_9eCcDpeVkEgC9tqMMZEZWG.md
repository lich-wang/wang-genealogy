---
schema: wang-person/v1
id: p_9eCcDpeVkEgC9tqMMZEZWG
status: active
merged_into: null
display_name: 王忠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_94FYbAxKQ6aBtdV6vVj4vc
        subject_person_id: p_9eCcDpeVkEgC9tqMMZEZWG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忠
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4BLM2vCw9G9DkXYUo4eCqq
          claim_id: c_94FYbAxKQ6aBtdV6vVj4vc
          source_id: s_DoBjWv3uiE5kRTQKLU6pMe
          stance: supports
          locator: Q45426092
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_DoBjWv3uiE5kRTQKLU6pMe
            source_type: api_record
            title: 维基数据：王忠（Q45426092）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45426092
            external_identifier: Q45426092
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_JNNrEQNVyXYULdzzQhyML6
          claim_id: c_94FYbAxKQ6aBtdV6vVj4vc
          source_id: s_rLvRBHHt6cqbCWBnxQXHBu
          stance: supports
          locator: CBDB:35273
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_rLvRBHHt6cqbCWBnxQXHBu
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王忠政（35273）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35273&o=json
            external_identifier: CBDB:35273
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JLHYA6XDyJHB2kBjB1uW6t
        subject_person_id: p_9eCcDpeVkEgC9tqMMZEZWG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: Song dynasty person CBDB = 35273
          language: en
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TM5HZTpAxgemTnk7Hk7cL4
          claim_id: c_JLHYA6XDyJHB2kBjB1uW6t
          source_id: s_DoBjWv3uiE5kRTQKLU6pMe
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
        id: c_J7pQ7fuFxJxLTd81GAHNKQ
        subject_person_id: p_9eCcDpeVkEgC9tqMMZEZWG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yv85iMSEixKWR4Bwa93MTf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_if7mfVMgC7MfduyYuPWXdX
          claim_id: c_J7pQ7fuFxJxLTd81GAHNKQ
          source_id: s_yJrmajipRuAV1QZPatauhk
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_yJrmajipRuAV1QZPatauhk
            source_type: api_record
            title: 维基数据：王朝用（Q45426051）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45426051
            external_identifier: Q45426051
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:14.259Z
            metadata_json: null
        - id: cs_He7adhF56nziofDuPL9FLp
          claim_id: c_J7pQ7fuFxJxLTd81GAHNKQ
          source_id: s_DoBjWv3uiE5kRTQKLU6pMe
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_yv85iMSEixKWR4Bwa93MTf
        status: active
        display_name: 王朝用
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王忠 | accepted |
| bio.summary | Song dynasty person CBDB = 35273 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_yv85iMSEixKWR4Bwa93MTf | 王朝用 | accepted |

## 外部来源

- [维基数据：王朝用（Q45426051）](https://www.wikidata.org/wiki/Q45426051)
- [维基数据：王忠（Q45426092）](https://www.wikidata.org/wiki/Q45426092)
- [CBDB 中国历代人物传记资料库：王忠政（35273）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35273&o=json)
