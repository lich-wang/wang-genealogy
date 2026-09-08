---
schema: wang-person/v1
id: p_FeTYKhXT263ArThLLQ1A9F
status: active
merged_into: null
display_name: 王世彦
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_34JKHcSSwLYJg2CLshbcQN
        subject_person_id: p_FeTYKhXT263ArThLLQ1A9F
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世彦，宋人物。CBDB 记录其籍贯记录为開封。中国历代人物传记资料库（CBDB）以人物编号 17779 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_vDca9Gqbz9Fem4aoDetHj1
          claim_id: c_34JKHcSSwLYJg2CLshbcQN
          source_id: s_AR4PsZDWVcPSsPLajb8s1c
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_AR4PsZDWVcPSsPLajb8s1c
            source_type: api_record
            title: 维基数据：王世彦（Q45387199）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45387199
            external_identifier: Q45387199
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:16.211Z
            metadata_json: null
        - id: cs_MQFj1R40uJZO7ba2Ofas2k
          claim_id: c_34JKHcSSwLYJg2CLshbcQN
          source_id: s_99qRkLEE1MfJL4Ac6oWaJ8
          stance: supports
          locator: CBDB:17779
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_99qRkLEE1MfJL4Ac6oWaJ8
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王世彥（17779）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17779&o=json
            external_identifier: CBDB:17779
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:16.361Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_LdVzcowJB5Kik99FUSQM51
        subject_person_id: p_FeTYKhXT263ArThLLQ1A9F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世彦
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_jk3ArhHhLYtJDMuZkBwEvA
          claim_id: c_LdVzcowJB5Kik99FUSQM51
          source_id: s_99qRkLEE1MfJL4Ac6oWaJ8
          stance: supports
          locator: Q45387199
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_yZMLRaEyTF8fs6R6HeX9q6
          claim_id: c_LdVzcowJB5Kik99FUSQM51
          source_id: s_AR4PsZDWVcPSsPLajb8s1c
          stance: supports
          locator: Q45387199
          quotation: null
          interpretation_note: null
          source:
            id: s_AR4PsZDWVcPSsPLajb8s1c
            source_type: api_record
            title: 维基数据：王世彦（Q45387199）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45387199
            external_identifier: Q45387199
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:16.211Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_9WLCzHt5tECLPWrNfL9GPi
        subject_person_id: p_85EbDNcrsn9ZB6rqXHzzZx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FeTYKhXT263ArThLLQ1A9F
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rH5fQsozTBfFUxpopw988r
          claim_id: c_9WLCzHt5tECLPWrNfL9GPi
          source_id: s_b6Pc1i8AQzFkjZM7aVVC7A
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_b6Pc1i8AQzFkjZM7aVVC7A
            source_type: api_record
            title: 维基数据：王承祐（Q45387105）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45387105
            external_identifier: Q45387105
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:01.600Z
            metadata_json: null
        - id: cs_pbR6T4jqYDJHQWfRVCoU2B
          claim_id: c_9WLCzHt5tECLPWrNfL9GPi
          source_id: s_AR4PsZDWVcPSsPLajb8s1c
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_86ETFxWWczhmnQMrQnRcZD
          claim_id: c_9WLCzHt5tECLPWrNfL9GPi
          source_id: s_A9no22qD7MHbRmwYnZYjQe
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_A9no22qD7MHbRmwYnZYjQe
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王承祐（17749）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17749&o=json
            external_identifier: CBDB:17749
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:01.779Z
            metadata_json: null
      object_person:
        id: p_85EbDNcrsn9ZB6rqXHzzZx
        status: active
        display_name: 王承祐
        merged_into_person_id: null
  children:
    - claim:
        id: c_L1JwYNBcsLwZp29hW4sBBe
        subject_person_id: p_FeTYKhXT263ArThLLQ1A9F
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NM9mn6Dc9dbq8DQ3665HJo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WVH9BCiQhLsMBC5RYFZn35
          claim_id: c_L1JwYNBcsLwZp29hW4sBBe
          source_id: s_MR67jA3WCNJBCtLy2PXqHp
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_MR67jA3WCNJBCtLy2PXqHp
            source_type: api_record
            title: 维基数据：王县太君（Q45364574）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45364574
            external_identifier: Q45364574
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:04.589Z
            metadata_json: null
        - id: cs_cg3GPbyLk5QXDzTFHPTU7w
          claim_id: c_L1JwYNBcsLwZp29hW4sBBe
          source_id: s_AR4PsZDWVcPSsPLajb8s1c
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_rcakKYoji78c9HKxpwEcvA
          claim_id: c_L1JwYNBcsLwZp29hW4sBBe
          source_id: s_99qRkLEE1MfJL4Ac6oWaJ8
          stance: supports
          locator: 亲属关系：女兒
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source: *a1
      object_person:
        id: p_NM9mn6Dc9dbq8DQ3665HJo
        status: active
        display_name: 王县太君
        merged_into_person_id: null
    - claim:
        id: c_DAfNfAmm8K7fYxwV2gqrFc
        subject_person_id: p_FeTYKhXT263ArThLLQ1A9F
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_v7JWLhD8VpBrRH7C1JHAte
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DyRgw9eyzYKCfhvW83yrbg
          claim_id: c_DAfNfAmm8K7fYxwV2gqrFc
          source_id: s_P4WdCsxRwaDnjL2NYiyCLu
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_P4WdCsxRwaDnjL2NYiyCLu
            source_type: api_record
            title: 维基数据：王氏（Q45364590）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45364590
            external_identifier: Q45364590
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_MSUMM7Zk76X2FJFuJPQMdb
          claim_id: c_DAfNfAmm8K7fYxwV2gqrFc
          source_id: s_AR4PsZDWVcPSsPLajb8s1c
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_9nHA44PzCFGKsygkfacAAR
          claim_id: c_DAfNfAmm8K7fYxwV2gqrFc
          source_id: s_99qRkLEE1MfJL4Ac6oWaJ8
          stance: supports
          locator: 亲属关系：女兒
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source: *a1
      object_person:
        id: p_v7JWLhD8VpBrRH7C1JHAte
        status: active
        display_name: 王氏
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王世彦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王世彦，宋人物。CBDB 记录其籍贯记录为開封。中国历代人物传记资料库（CBDB）以人物编号 17779 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王世彦 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_85EbDNcrsn9ZB6rqXHzzZx | 王承祐 | accepted |
| children | p_NM9mn6Dc9dbq8DQ3665HJo | 王县太君 | accepted |
| children | p_v7JWLhD8VpBrRH7C1JHAte | 王氏 | accepted |

## 外部来源

- [维基数据：王承祐（Q45387105）](https://www.wikidata.org/wiki/Q45387105)
- [维基数据：王氏（Q45364590）](https://www.wikidata.org/wiki/Q45364590)
- [维基数据：王世彦（Q45387199）](https://www.wikidata.org/wiki/Q45387199)
- [维基数据：王县太君（Q45364574）](https://www.wikidata.org/wiki/Q45364574)
- [CBDB 中国历代人物传记资料库：王承祐（17749）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17749&o=json)
- [CBDB 中国历代人物传记资料库：王世彥（17779）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17779&o=json)
