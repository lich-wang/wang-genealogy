---
schema: wang-person/v1
id: p_JCJBEueLs72MMGKKFXSBqw
status: active
merged_into: null
display_name: 王缙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9ewNFgm7i2booXYC3y2Co8
        subject_person_id: p_JCJBEueLs72MMGKKFXSBqw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王缙
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TSX5rc39G173iB62o3nKXg
          claim_id: c_9ewNFgm7i2booXYC3y2Co8
          source_id: s_pBuvbo48p6yG8GAGrmWa5t
          stance: supports
          locator: Q45581298
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_pBuvbo48p6yG8GAGrmWa5t
            source_type: api_record
            title: 维基数据：王缙（Q45581298）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45581298
            external_identifier: Q45581298
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_Yik2hjge48pLpekPARMFt6
          claim_id: c_9ewNFgm7i2booXYC3y2Co8
          source_id: s_L3neh6pEc1XHyPsBJPQanU
          stance: supports
          locator: CBDB:333591
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_L3neh6pEc1XHyPsBJPQanU
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王縉（333591）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333591&o=json
            external_identifier: CBDB:333591
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ATBzpaagLYKbS8HH6TPjmK
        subject_person_id: p_JCJBEueLs72MMGKKFXSBqw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: Ming dynasty person CBDB = 333591
          language: en
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uiF3Vn5to1dvxyzW5CRMAW
          claim_id: c_ATBzpaagLYKbS8HH6TPjmK
          source_id: s_pBuvbo48p6yG8GAGrmWa5t
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
        id: c_r3u1EKLTQEUtNJaWQDqW35
        subject_person_id: p_JCJBEueLs72MMGKKFXSBqw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_n8gJ8LAH7u4tCjt15ALE93
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cx9RfdRHPU59Zs6UF46gge
          claim_id: c_r3u1EKLTQEUtNJaWQDqW35
          source_id: s_4gu4oV8XXUSSjHMASEf7Ce
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_4gu4oV8XXUSSjHMASEf7Ce
            source_type: api_record
            title: 维基数据：王朝用（Q45581362）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45581362
            external_identifier: Q45581362
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:00.338Z
            metadata_json: null
        - id: cs_nMNKQ3dB6bHNZ2K75AhMZB
          claim_id: c_r3u1EKLTQEUtNJaWQDqW35
          source_id: s_pBuvbo48p6yG8GAGrmWa5t
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_n8gJ8LAH7u4tCjt15ALE93
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

# 王缙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王缙 | accepted |
| bio.summary | Ming dynasty person CBDB = 333591 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_n8gJ8LAH7u4tCjt15ALE93 | 王朝用 | accepted |

## 外部来源

- [维基数据：王朝用（Q45581362）](https://www.wikidata.org/wiki/Q45581362)
- [维基数据：王缙（Q45581298）](https://www.wikidata.org/wiki/Q45581298)
- [CBDB 中国历代人物传记资料库：王縉（333591）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333591&o=json)
