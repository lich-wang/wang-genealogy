---
schema: wang-person/v1
id: p_8LsJEYCjbbE642tn4yUoiz
status: active
merged_into: null
display_name: 王延陵
cbdb_id: 34587
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pgmeZpxKGEgBvG7V5DpSmb
        subject_person_id: p_8LsJEYCjbbE642tn4yUoiz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延陵，明人物。CBDB 记录其籍贯记录为吳縣，入仕记录为恩蔭、蔭補(籠統)。中国历代人物传记资料库（CBDB）以人物编号 34587 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_TGdAP66EN5gqb3s2aiguuv
          claim_id: c_pgmeZpxKGEgBvG7V5DpSmb
          source_id: s_ptDntG5E45PDfXMYjSPz1x
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_ptDntG5E45PDfXMYjSPz1x
            source_type: api_record
            title: 维基数据：王延陵（Q45426546）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45426546
            external_identifier: Q45426546
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:32.124Z
            metadata_json: null
        - id: cs_6mJ1msLUJdf6-66USBRv0V
          claim_id: c_pgmeZpxKGEgBvG7V5DpSmb
          source_id: s_jKYBq66gCJngVZyPZBwYP6
          stance: supports
          locator: CBDB:34587
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_jKYBq66gCJngVZyPZBwYP6
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王延陵（34587）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34587&o=json
            external_identifier: CBDB:34587
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:32.290Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_uaJExqyfyf9J8QWrhqpReQ
        subject_person_id: p_8LsJEYCjbbE642tn4yUoiz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延陵
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_D8ba6XdXkYmtCxwrB4ZjZx
          claim_id: c_uaJExqyfyf9J8QWrhqpReQ
          source_id: s_jKYBq66gCJngVZyPZBwYP6
          stance: supports
          locator: Q45426546
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_b1LV2Lq8bB41gTXVCbdumb
          claim_id: c_uaJExqyfyf9J8QWrhqpReQ
          source_id: s_ptDntG5E45PDfXMYjSPz1x
          stance: supports
          locator: Q45426546
          quotation: null
          interpretation_note: null
          source:
            id: s_ptDntG5E45PDfXMYjSPz1x
            source_type: api_record
            title: 维基数据：王延陵（Q45426546）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45426546
            external_identifier: Q45426546
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:32.124Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_49NdZWVxn6tqfe55EqZHW6
        subject_person_id: p_Wp6B6oFJWureDLbUWC4XTo
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_8LsJEYCjbbE642tn4yUoiz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_B4NpwHEa6tJbUWMYbKtUia
          claim_id: c_49NdZWVxn6tqfe55EqZHW6
          source_id: s_dWRCcR6daat23BeqA6jHUm
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_dWRCcR6daat23BeqA6jHUm
            source_type: api_record
            title: 维基数据：王鏊（Q15904946）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15904946
            external_identifier: Q15904946
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:35.973Z
            metadata_json: null
        - id: cs_BSgSz9fSY19anrLdPVSAVk
          claim_id: c_49NdZWVxn6tqfe55EqZHW6
          source_id: s_ptDntG5E45PDfXMYjSPz1x
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_ptDntG5E45PDfXMYjSPz1x
            source_type: api_record
            title: 维基数据：王延陵（Q45426546）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45426546
            external_identifier: Q45426546
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:32.124Z
            metadata_json: null
        - id: cs_RScP3H1DJBuGZTWYQfnSin
          claim_id: c_49NdZWVxn6tqfe55EqZHW6
          source_id: s_5F5Mp5wNXSLuYE7mo8tsT9
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_5F5Mp5wNXSLuYE7mo8tsT9
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王鏊（34579）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34579&o=json
            external_identifier: CBDB:34579
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:08.975Z
            metadata_json: null
      object_person:
        id: p_Wp6B6oFJWureDLbUWC4XTo
        status: active
        display_name: 王鏊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王延陵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王延陵，明人物。CBDB 记录其籍贯记录为吳縣，入仕记录为恩蔭、蔭補(籠統)。中国历代人物传记资料库（CBDB）以人物编号 34587 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王延陵 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Wp6B6oFJWureDLbUWC4XTo | 王鏊 | accepted |

## 外部来源

- [维基数据：王鏊（Q15904946）](https://www.wikidata.org/wiki/Q15904946)
- [维基数据：王延陵（Q45426546）](https://www.wikidata.org/wiki/Q45426546)
- [CBDB 中国历代人物传记资料库：王鏊（34579）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34579&o=json)
- [CBDB 中国历代人物传记资料库：王延陵（34587）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34587&o=json)
