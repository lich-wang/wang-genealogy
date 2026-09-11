---
schema: wang-person/v1
id: p_unNn1CDc81UKHpZiBvRxrp
status: active
merged_into: null
display_name: 王之魯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MDQALRK7yn1QemRQqNKtgo
        subject_person_id: p_unNn1CDc81UKHpZiBvRxrp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之魯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RkdUUkji5YRQ5hA1Ef4ihA
          claim_id: c_MDQALRK7yn1QemRQqNKtgo
          source_id: s_9XuxX8yBkMC3FEuG93h4u6
          stance: supports
          locator: CBDB:635827
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635827）
          source: &a1
            id: s_9XuxX8yBkMC3FEuG93h4u6
            source_type: api_record
            title: 中国历代人物传记资料库：王之魯（CBDB 635827）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635827&o=json
            external_identifier: CBDB:635827
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.028Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SuWDu4fWjKxCgZ9QA5AtKd
        subject_person_id: p_unNn1CDc81UKHpZiBvRxrp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之魯，清人物。籍贯鳳凰直隸廳，曾任教諭、復設訓導。（中国历代人物传记资料库 CBDB 635827）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_t32wmVlee0O_N_6Bq6s7ml
          claim_id: c_SuWDu4fWjKxCgZ9QA5AtKd
          source_id: s_9XuxX8yBkMC3FEuG93h4u6
          stance: supports
          locator: CBDB:635827
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王之魯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之魯 | accepted |
| bio.summary | 王之魯，清人物。籍贯鳳凰直隸廳，曾任教諭、復設訓導。（中国历代人物传记资料库 CBDB 635827） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之魯（CBDB 635827）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635827&o=json)
