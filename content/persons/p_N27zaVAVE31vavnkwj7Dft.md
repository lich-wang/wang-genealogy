---
schema: wang-person/v1
id: p_N27zaVAVE31vavnkwj7Dft
status: active
merged_into: null
display_name: 王伯永
cbdb_id: 272142
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3PTA4NJMFg9bCpSH3hQFue
        subject_person_id: p_N27zaVAVE31vavnkwj7Dft
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯永
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xEVS84gq3hZPSDUABEAwaX
          claim_id: c_3PTA4NJMFg9bCpSH3hQFue
          source_id: s_MWP84KndnYovf7Pbpt3qzp
          stance: supports
          locator: Q45436469
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_MWP84KndnYovf7Pbpt3qzp
            source_type: api_record
            title: 维基数据：王伯永（Q45436469）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45436469
            external_identifier: Q45436469
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_SFRvkWNGiTqJHkDGMCmwJx
          claim_id: c_3PTA4NJMFg9bCpSH3hQFue
          source_id: s_Xu4hHeWSyLA3aEvJiaoiG8
          stance: supports
          locator: CBDB:272142
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_Xu4hHeWSyLA3aEvJiaoiG8
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王伯永（272142）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272142&o=json
            external_identifier: CBDB:272142
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QBFWgfvEhgK3vnwTipjKY4
        subject_person_id: p_N27zaVAVE31vavnkwj7Dft
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: Ming dynasty person CBDB = 272142
          language: en
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G5k9EouSZquZMnH39ZCF3o
          claim_id: c_QBFWgfvEhgK3vnwTipjKY4
          source_id: s_MWP84KndnYovf7Pbpt3qzp
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
        id: c_G3QbgJaKVtYzJVfZZHALfz
        subject_person_id: p_N27zaVAVE31vavnkwj7Dft
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_255t2nDMrWzFXS93NLqNE3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XEhryB12KfdzKtnQHuYduj
          claim_id: c_G3QbgJaKVtYzJVfZZHALfz
          source_id: s_aQzAA5DLYuYCc83Ec75f7c
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_aQzAA5DLYuYCc83Ec75f7c
            source_type: api_record
            title: 维基数据：王宗（Q45436530）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45436530
            external_identifier: Q45436530
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:56.022Z
            metadata_json: null
        - id: cs_ALAzyWs5DTz3mJrNya9QhX
          claim_id: c_G3QbgJaKVtYzJVfZZHALfz
          source_id: s_MWP84KndnYovf7Pbpt3qzp
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_255t2nDMrWzFXS93NLqNE3
        status: active
        display_name: 王宗
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王伯永

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王伯永 | accepted |
| bio.summary | Ming dynasty person CBDB = 272142 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_255t2nDMrWzFXS93NLqNE3 | 王宗 | accepted |

## 外部来源

- [维基数据：王伯永（Q45436469）](https://www.wikidata.org/wiki/Q45436469)
- [维基数据：王宗（Q45436530）](https://www.wikidata.org/wiki/Q45436530)
- [CBDB 中国历代人物传记资料库：王伯永（272142）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272142&o=json)
