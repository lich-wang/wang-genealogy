---
schema: wang-person/v1
id: p_51Pca5wdng4NB9T2FpYuFX
status: active
merged_into: null
display_name: 王可
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_j3qAqP7Nxt1fQYfSdKGBgU
        subject_person_id: p_51Pca5wdng4NB9T2FpYuFX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王可，明人物。CBDB 记录其籍贯记录为南陽，曾任通判。中国历代人物传记资料库（CBDB）以人物编号 334081 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_KLGBefr9jLyLCRZAbmL1Du
          claim_id: c_j3qAqP7Nxt1fQYfSdKGBgU
          source_id: s_6kSWPjkGQP4kypDPpgbhbH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_6kSWPjkGQP4kypDPpgbhbH
            source_type: api_record
            title: 维基数据：王可（Q45603634）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45603634
            external_identifier: Q45603634
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:12.193Z
            metadata_json: null
        - id: cs_intjVaKIu-K-oFvcn1lIio
          claim_id: c_j3qAqP7Nxt1fQYfSdKGBgU
          source_id: s_4hULzQvG2j4W8T4NELP39w
          stance: supports
          locator: CBDB:334081
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_4hULzQvG2j4W8T4NELP39w
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王可（334081）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334081&o=json
            external_identifier: CBDB:334081
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:12.368Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1F7CetCkEcwEVeJMJAM3Li
        subject_person_id: p_51Pca5wdng4NB9T2FpYuFX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王可
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_2A4hX334FmTeox52X1eJB5
          claim_id: c_1F7CetCkEcwEVeJMJAM3Li
          source_id: s_6kSWPjkGQP4kypDPpgbhbH
          stance: supports
          locator: Q45603634
          quotation: null
          interpretation_note: null
          source:
            id: s_6kSWPjkGQP4kypDPpgbhbH
            source_type: api_record
            title: 维基数据：王可（Q45603634）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45603634
            external_identifier: Q45603634
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:12.193Z
            metadata_json: null
        - id: cs_VQXwzuGY6QeLXfDgT3Q9Mn
          claim_id: c_1F7CetCkEcwEVeJMJAM3Li
          source_id: s_4hULzQvG2j4W8T4NELP39w
          stance: supports
          locator: Q45603634
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_xk4KPJv1taqGwjwcLRVkK3
        subject_person_id: p_Wdd9WrspYiEE72NGMNp75f
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_51Pca5wdng4NB9T2FpYuFX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5bKwbYsaBhXwYXKD11QJRF
          claim_id: c_xk4KPJv1taqGwjwcLRVkK3
          source_id: s_g1q73gKvB6bGzszoP8GtLg
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_g1q73gKvB6bGzszoP8GtLg
            source_type: api_record
            title: 维基数据：王鸿儒（Q15933067）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15933067
            external_identifier: Q15933067
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:26.978Z
            metadata_json: null
        - id: cs_WJD3g5r1TQjJKbqSb7GToZ
          claim_id: c_xk4KPJv1taqGwjwcLRVkK3
          source_id: s_6kSWPjkGQP4kypDPpgbhbH
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_6kSWPjkGQP4kypDPpgbhbH
            source_type: api_record
            title: 维基数据：王可（Q45603634）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45603634
            external_identifier: Q45603634
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:12.193Z
            metadata_json: null
      object_person:
        id: p_Wdd9WrspYiEE72NGMNp75f
        status: active
        display_name: 王鸿儒
        merged_into_person_id: null
  children:
    - claim:
        id: c_qw9AU9TFUn14MU8QP5HAkn
        subject_person_id: p_51Pca5wdng4NB9T2FpYuFX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iRoPCMQGG7T8QWQEfbMdBx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n2Z6nP1dxxiDpw29aMQmPh
          claim_id: c_qw9AU9TFUn14MU8QP5HAkn
          source_id: s_6kSWPjkGQP4kypDPpgbhbH
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_P5DMDvn3JXjq59yaCUZF2P
          claim_id: c_qw9AU9TFUn14MU8QP5HAkn
          source_id: s_4aAHVT5jB6WtTJCwPKgxKa
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_4aAHVT5jB6WtTJCwPKgxKa
            source_type: api_record
            title: 维基数据：王汝鲁（Q45577422）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45577422
            external_identifier: Q45577422
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:07.754Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%B1%9D%E9%AD%AF
        - id: cs_1FqW4Udt1VoYER6vpQVeyG
          claim_id: c_qw9AU9TFUn14MU8QP5HAkn
          source_id: s_4hULzQvG2j4W8T4NELP39w
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：隆慶二年進士登科錄:一卷
          source: *a1
      object_person:
        id: p_iRoPCMQGG7T8QWQEfbMdBx
        status: active
        display_name: 王汝鲁
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王可

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王可，明人物。CBDB 记录其籍贯记录为南陽，曾任通判。中国历代人物传记资料库（CBDB）以人物编号 334081 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王可 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Wdd9WrspYiEE72NGMNp75f | 王鸿儒 | accepted |
| children | p_iRoPCMQGG7T8QWQEfbMdBx | 王汝鲁 | accepted |

## 外部来源

- [维基数据：王鸿儒（Q15933067）](https://www.wikidata.org/wiki/Q15933067)
- [维基数据：王可（Q45603634）](https://www.wikidata.org/wiki/Q45603634)
- [维基数据：王汝鲁（Q45577422）](https://www.wikidata.org/wiki/Q45577422)
- [CBDB 中国历代人物传记资料库：王可（334081）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334081&o=json)
