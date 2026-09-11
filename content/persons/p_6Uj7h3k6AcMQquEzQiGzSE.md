---
schema: wang-person/v1
id: p_6Uj7h3k6AcMQquEzQiGzSE
status: active
merged_into: null
display_name: 王颐
cbdb_id: 326773
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QXHCZG7p79pJCXUBb17rUp
        subject_person_id: p_6Uj7h3k6AcMQquEzQiGzSE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王颐，明人物。CBDB 记录其籍贯记录为濬縣，曾任陰陽訓術。中国历代人物传记资料库（CBDB）以人物编号 326773 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_nR7tNfgM1LPL1Ut2gbrd5b
          claim_id: c_QXHCZG7p79pJCXUBb17rUp
          source_id: s_DyFUEkjpYkThzuUgYuXCHG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_DyFUEkjpYkThzuUgYuXCHG
            source_type: api_record
            title: 维基数据：王颐（Q45512097）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45512097
            external_identifier: Q45512097
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:33.526Z
            metadata_json: null
        - id: cs_EbL8_xV_hGmMJJOrtcJv9K
          claim_id: c_QXHCZG7p79pJCXUBb17rUp
          source_id: s_NEzjHDBB2Kg1mmKGjUD75D
          stance: supports
          locator: CBDB:326773
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_NEzjHDBB2Kg1mmKGjUD75D
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王頤（326773）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326773&o=json
            external_identifier: CBDB:326773
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:33.688Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_XQq8kBZ17tKyc8NR1513rX
        subject_person_id: p_6Uj7h3k6AcMQquEzQiGzSE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王颐
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_MUZ3wqvHL4M5XfDTViMjDG
          claim_id: c_XQq8kBZ17tKyc8NR1513rX
          source_id: s_DyFUEkjpYkThzuUgYuXCHG
          stance: supports
          locator: Q45512097
          quotation: null
          interpretation_note: null
          source:
            id: s_DyFUEkjpYkThzuUgYuXCHG
            source_type: api_record
            title: 维基数据：王颐（Q45512097）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45512097
            external_identifier: Q45512097
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:33.526Z
            metadata_json: null
        - id: cs_yhKwUujwnN8K9MHE6gGz6u
          claim_id: c_XQq8kBZ17tKyc8NR1513rX
          source_id: s_NEzjHDBB2Kg1mmKGjUD75D
          stance: supports
          locator: Q45512097
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_FKmqNzDcQmNXY3ycZ6Y2sA
        subject_person_id: p_zicKU4bgAdp55gRC45KJy4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6Uj7h3k6AcMQquEzQiGzSE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9VPnQLG2CcVeRj4vnpjhTT
          claim_id: c_FKmqNzDcQmNXY3ycZ6Y2sA
          source_id: s_DyFUEkjpYkThzuUgYuXCHG
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_PvWWr2gkVScTwCcqofJ6h9
          claim_id: c_FKmqNzDcQmNXY3ycZ6Y2sA
          source_id: s_nNdH2CU9Sa9Bv9AJLQ9gQ2
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_nNdH2CU9Sa9Bv9AJLQ9gQ2
            source_type: api_record
            title: 维基数据：王子忠（Q45507096）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45507096
            external_identifier: Q45507096
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:38.809Z
            metadata_json: null
      object_person:
        id: p_zicKU4bgAdp55gRC45KJy4
        status: active
        display_name: 王子忠
        merged_into_person_id: null
  children:
    - claim:
        id: c_oBt5zKXpB9JpWaQQR6taXQ
        subject_person_id: p_6Uj7h3k6AcMQquEzQiGzSE
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_SAKZSsVXkQRnwcLYqa1oYe
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_M6bEV3XQ4Y2JCGLs7bhQE7
          claim_id: c_oBt5zKXpB9JpWaQQR6taXQ
          source_id: s_DyFUEkjpYkThzuUgYuXCHG
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_DyFUEkjpYkThzuUgYuXCHG
            source_type: api_record
            title: 维基数据：王颐（Q45512097）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45512097
            external_identifier: Q45512097
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:33.526Z
            metadata_json: null
        - id: cs_iw5bG1VqoVS4NziRPjSDya
          claim_id: c_oBt5zKXpB9JpWaQQR6taXQ
          source_id: s_imCRBQa6npPiEExJxToHdt
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_imCRBQa6npPiEExJxToHdt
            source_type: api_record
            title: 维基数据：王越（Q15898715）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15898715
            external_identifier: Q15898715
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:28.301Z
            metadata_json: null
      object_person:
        id: p_SAKZSsVXkQRnwcLYqa1oYe
        status: active
        display_name: 王越
        merged_into_person_id: null
    - claim:
        id: c_yRasBDGKYPRv72VbmPfc-S
        subject_person_id: p_6Uj7h3k6AcMQquEzQiGzSE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1CAD7Cg5ACndjPsTMwMUQ7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GjXgDsoSU8t_Fv_Akj0pbr
          claim_id: c_yRasBDGKYPRv72VbmPfc-S
          source_id: s_NEzjHDBB2Kg1mmKGjUD75D
          stance: supports
          locator: 景泰二年進士登科錄:一卷，第三甲第六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_1CAD7Cg5ACndjPsTMwMUQ7
        status: merged
        display_name: 王越
        merged_into_person_id: p_SAKZSsVXkQRnwcLYqa1oYe
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王颐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王颐，明人物。CBDB 记录其籍贯记录为濬縣，曾任陰陽訓術。中国历代人物传记资料库（CBDB）以人物编号 326773 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王颐 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zicKU4bgAdp55gRC45KJy4 | 王子忠 | accepted |
| children | p_SAKZSsVXkQRnwcLYqa1oYe | 王越 | accepted |
| children | p_1CAD7Cg5ACndjPsTMwMUQ7 | 王越 | accepted |

## 外部来源

- [维基数据：王颐（Q45512097）](https://www.wikidata.org/wiki/Q45512097)
- [维基数据：王越（Q15898715）](https://www.wikidata.org/wiki/Q15898715)
- [维基数据：王子忠（Q45507096）](https://www.wikidata.org/wiki/Q45507096)
- [CBDB 中国历代人物传记资料库：王頤（326773）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326773&o=json)
