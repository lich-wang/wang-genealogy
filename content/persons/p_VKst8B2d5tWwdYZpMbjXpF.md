---
schema: wang-person/v1
id: p_VKst8B2d5tWwdYZpMbjXpF
status: active
merged_into: null
display_name: 王砺
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XkPnQpx8utaN25f6S7t2BP
        subject_person_id: p_VKst8B2d5tWwdYZpMbjXpF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王砺，宋人物。CBDB 记录其籍贯记录为虞城，入仕记录为科舉: 進士(籠統)，曾任秘書省少監、太師。中国历代人物传记资料库（CBDB）以人物编号 15706 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_FhodEvgmPLkEkDnwvtKkKA
          claim_id: c_XkPnQpx8utaN25f6S7t2BP
          source_id: s_cEzQFMJKfXkebXkBavgjxf
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_cEzQFMJKfXkebXkBavgjxf
            source_type: api_record
            title: 维基数据：王砺（Q45381094）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45381094
            external_identifier: Q45381094
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:00.249Z
            metadata_json: null
        - id: cs_RAxZ5nDbJyTZgJFvIkhSub
          claim_id: c_XkPnQpx8utaN25f6S7t2BP
          source_id: s_k4sFmeLJCYGtEaPGKsQ95C
          stance: supports
          locator: CBDB:15706
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_k4sFmeLJCYGtEaPGKsQ95C
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王礪（15706）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=15706&o=json
            external_identifier: CBDB:15706
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:00.404Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_KZ7PPrHfj3J4HTXYM98XsG
        subject_person_id: p_VKst8B2d5tWwdYZpMbjXpF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王砺
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_FmSvhU3136gGfnPgMG25Vf
          claim_id: c_KZ7PPrHfj3J4HTXYM98XsG
          source_id: s_k4sFmeLJCYGtEaPGKsQ95C
          stance: supports
          locator: Q45381094
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_mpPi9TvYiqUHTxoo6g6s9K
          claim_id: c_KZ7PPrHfj3J4HTXYM98XsG
          source_id: s_cEzQFMJKfXkebXkBavgjxf
          stance: supports
          locator: Q45381094
          quotation: null
          interpretation_note: null
          source:
            id: s_cEzQFMJKfXkebXkBavgjxf
            source_type: api_record
            title: 维基数据：王砺（Q45381094）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45381094
            external_identifier: Q45381094
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:00.249Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_nzTgQx8HuRmT4WGDijdTDZ
        subject_person_id: p_VKst8B2d5tWwdYZpMbjXpF
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_eJ5xPSqX9C5GQJFJ6vhqFc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_okPWrB2kyhfa91CPK8v9fN
          claim_id: c_nzTgQx8HuRmT4WGDijdTDZ
          source_id: s_bAVZu7wS9x2wcXBfq2WzC1
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_bAVZu7wS9x2wcXBfq2WzC1
            source_type: api_record
            title: 维基数据：王洙（Q15935485）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15935485
            external_identifier: Q15935485
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:33.095Z
            metadata_json: null
        - id: cs_vfp38C1K9cbJGTUgMf9mKz
          claim_id: c_nzTgQx8HuRmT4WGDijdTDZ
          source_id: s_cEzQFMJKfXkebXkBavgjxf
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_cEzQFMJKfXkebXkBavgjxf
            source_type: api_record
            title: 维基数据：王砺（Q45381094）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45381094
            external_identifier: Q45381094
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:00.249Z
            metadata_json: null
      object_person:
        id: p_eJ5xPSqX9C5GQJFJ6vhqFc
        status: active
        display_name: 王洙
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王砺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王砺，宋人物。CBDB 记录其籍贯记录为虞城，入仕记录为科舉: 進士(籠統)，曾任秘書省少監、太師。中国历代人物传记资料库（CBDB）以人物编号 15706 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王砺 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_eJ5xPSqX9C5GQJFJ6vhqFc | 王洙 | accepted |

## 外部来源

- [维基数据：王砺（Q45381094）](https://www.wikidata.org/wiki/Q45381094)
- [维基数据：王洙（Q15935485）](https://www.wikidata.org/wiki/Q15935485)
- [CBDB 中国历代人物传记资料库：王礪（15706）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=15706&o=json)
