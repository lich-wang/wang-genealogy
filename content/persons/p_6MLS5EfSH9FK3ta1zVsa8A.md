---
schema: wang-person/v1
id: p_6MLS5EfSH9FK3ta1zVsa8A
status: active
merged_into: null
display_name: 王仪
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zAFhHhdMa1FLsuh6p1DvFS
        subject_person_id: p_6MLS5EfSH9FK3ta1zVsa8A
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仪（？—252年），字朱表，北海郡营陵县（今山东省潍坊市）人，三国曹魏官员。王修之子。 王仪高亮雅直。司马昭为安东将军，王仪为司马。东关之战战败后，司马昭问：“近日之事，该归罪於谁？
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_z0vP_nKCObTy6XChCHbXgJ
          claim_id: c_zAFhHhdMa1FLsuh6p1DvFS
          source_id: s_OCPT3dmj9gLWmiDwSXu6uF
          stance: supports
          locator: 导言
          quotation: 王仪（？—252年），字朱表，北海郡营陵县（今山东省潍坊市）人，
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source: &a1
            id: s_OCPT3dmj9gLWmiDwSXu6uF
            source_type: website
            title: 中文维基百科：王仪 (三国)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BB%AA_(%E4%B8%89%E5%9B%BD)
            external_identifier: Q48926547
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:33:22.403Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7ttfvEUz7zZCnUebH4febT
        subject_person_id: p_6MLS5EfSH9FK3ta1zVsa8A
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仪
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_CURH1ksB9gRSgib5Y9wHzL
          claim_id: c_7ttfvEUz7zZCnUebH4febT
          source_id: s_bPR91GwZ1qT41Fj6ZqLHtn
          stance: supports
          locator: Q48926547
          quotation: null
          interpretation_note: null
          source:
            id: s_bPR91GwZ1qT41Fj6ZqLHtn
            source_type: api_record
            title: 维基数据：王仪（Q48926547）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q48926547
            external_identifier: Q48926547
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:48.261Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BB%AA_(%E4%B8%89%E5%9B%BD)
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_GTJGqaZM2cyMfgH1dVb6HL
        subject_person_id: p_MfcDh8uVVM9P47Bv4yWc8U
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6MLS5EfSH9FK3ta1zVsa8A
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KXg7xbtxsT2qJVGbqtwsmB
          claim_id: c_GTJGqaZM2cyMfgH1dVb6HL
          source_id: s_OCPT3dmj9gLWmiDwSXu6uF
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_Ut9X1snH3sXKBgNdP2A2eH
          claim_id: c_GTJGqaZM2cyMfgH1dVb6HL
          source_id: s_bTvjiyG7FrewdKX8pd528D
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_bTvjiyG7FrewdKX8pd528D
            source_type: api_record
            title: 维基数据：王修（Q713604）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q713604
            external_identifier: Q713604
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:44.307Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BF%AE
      object_person:
        id: p_MfcDh8uVVM9P47Bv4yWc8U
        status: active
        display_name: 王修
        merged_into_person_id: null
  children:
    - claim:
        id: c_qYfDWTzwFyH33o42DNAPwg
        subject_person_id: p_6MLS5EfSH9FK3ta1zVsa8A
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_rQFdAJL8jpXyr6Btww7x7K
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gzYeHeGKZY9AJvA6CCXPRz
          claim_id: c_qYfDWTzwFyH33o42DNAPwg
          source_id: s_bPR91GwZ1qT41Fj6ZqLHtn
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_bPR91GwZ1qT41Fj6ZqLHtn
            source_type: api_record
            title: 维基数据：王仪（Q48926547）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q48926547
            external_identifier: Q48926547
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:48.261Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BB%AA_(%E4%B8%89%E5%9B%BD)
        - id: cs_qzUW4ro34ASdcwyEHbUKMo
          claim_id: c_qYfDWTzwFyH33o42DNAPwg
          source_id: s_STHqQM2Diq5ow7FGvqS4BG
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_STHqQM2Diq5ow7FGvqS4BG
            source_type: api_record
            title: 维基数据：王裒（Q15914310）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15914310
            external_identifier: Q15914310
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:14.516Z
            metadata_json: null
      object_person:
        id: p_rQFdAJL8jpXyr6Btww7x7K
        status: active
        display_name: 王裒
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王仪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王仪（？—252年），字朱表，北海郡营陵县（今山东省潍坊市）人，三国曹魏官员。王修之子。 王仪高亮雅直。司马昭为安东将军，王仪为司马。东关之战战败后，司马昭问：“近日之事，该归罪於谁？ | accepted |
| name.primary | 王仪 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MfcDh8uVVM9P47Bv4yWc8U | 王修 | accepted |
| children | p_rQFdAJL8jpXyr6Btww7x7K | 王裒 | accepted |

## 外部来源

- [维基数据：王裒（Q15914310）](https://www.wikidata.org/wiki/Q15914310)
- [维基数据：王修（Q713604）](https://www.wikidata.org/wiki/Q713604)
- [维基数据：王仪（Q48926547）](https://www.wikidata.org/wiki/Q48926547)
- [中文维基百科：王仪 (三国)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BB%AA_(%E4%B8%89%E5%9B%BD))
