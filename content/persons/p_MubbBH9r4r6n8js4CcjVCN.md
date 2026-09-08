---
schema: wang-person/v1
id: p_MubbBH9r4r6n8js4CcjVCN
status: active
merged_into: null
display_name: 王缟
cbdb_id: 175423
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VdLEWKDDcsrZGfpiCngQHa
        subject_person_id: p_MubbBH9r4r6n8js4CcjVCN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王缟（卒于894年），唐人物。CBDB 记录其籍贯记录为京兆府。中国历代人物传记资料库（CBDB）以人物编号 175423 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_2UPxWVHnBZdG9Mxh1dUR6i
          claim_id: c_VdLEWKDDcsrZGfpiCngQHa
          source_id: s_7zavKkpQqmQoG7CB4Gaaxo
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_7zavKkpQqmQoG7CB4Gaaxo
            source_type: api_record
            title: 维基数据：王缟（Q45658763）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658763
            external_identifier: Q45658763
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:06.954Z
            metadata_json: null
        - id: cs_rJ2elZO4-EbuyUFU-QXaV4
          claim_id: c_VdLEWKDDcsrZGfpiCngQHa
          source_id: s_FPKQWGQsHbAKCyheacCo4g
          stance: supports
          locator: CBDB:175423
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_FPKQWGQsHbAKCyheacCo4g
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王縞（175423）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175423&o=json
            external_identifier: CBDB:175423
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:07.104Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_4EhL41Qbed7ugtgPiq76QU
        subject_person_id: p_MubbBH9r4r6n8js4CcjVCN
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 894年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0894-01-01
            latest: 0894-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EdEVqRC15QG2SEHj4w5t7u
          claim_id: c_4EhL41Qbed7ugtgPiq76QU
          source_id: s_7zavKkpQqmQoG7CB4Gaaxo
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_7zavKkpQqmQoG7CB4Gaaxo
            source_type: api_record
            title: 维基数据：王缟（Q45658763）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658763
            external_identifier: Q45658763
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:06.954Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_AJ3YW43z7op2BJ3WFwRFfm
        subject_person_id: p_MubbBH9r4r6n8js4CcjVCN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王缟
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_AvBjvBrqa4VoGH8yP9nGJz
          claim_id: c_AJ3YW43z7op2BJ3WFwRFfm
          source_id: s_FPKQWGQsHbAKCyheacCo4g
          stance: supports
          locator: Q45658763
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_ZSgHAGfcCfM5bLBBNcA5zK
          claim_id: c_AJ3YW43z7op2BJ3WFwRFfm
          source_id: s_7zavKkpQqmQoG7CB4Gaaxo
          stance: supports
          locator: Q45658763
          quotation: null
          interpretation_note: null
          source:
            id: s_7zavKkpQqmQoG7CB4Gaaxo
            source_type: api_record
            title: 维基数据：王缟（Q45658763）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658763
            external_identifier: Q45658763
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:06.954Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Gi54MKeyr6N8w5nV1c518j
        subject_person_id: p_ABttrGR9ETMfaUWfuE5Xsi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MubbBH9r4r6n8js4CcjVCN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_fYwCqgBVqkzcxmUJ2uQb9f
          claim_id: c_Gi54MKeyr6N8w5nV1c518j
          source_id: s_CdjpQpB9o7sfhYkeEHMHCN
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_CdjpQpB9o7sfhYkeEHMHCN
            source_type: api_record
            title: 维基数据：王逸（Q45658647）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658647
            external_identifier: Q45658647
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:58.710Z
            metadata_json: null
        - id: cs_hB2Q4xANnLoY1X4MLgBCJz
          claim_id: c_Gi54MKeyr6N8w5nV1c518j
          source_id: s_jmGu5vS3p9GvQHE422FM7J
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_jmGu5vS3p9GvQHE422FM7J
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王逸（175421）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175421&o=json
            external_identifier: CBDB:175421
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:58.863Z
            metadata_json: null
        - id: cs_dz6gZLNafhJJoJtqQmWYb8
          claim_id: c_Gi54MKeyr6N8w5nV1c518j
          source_id: s_7zavKkpQqmQoG7CB4Gaaxo
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_7zavKkpQqmQoG7CB4Gaaxo
            source_type: api_record
            title: 维基数据：王缟（Q45658763）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658763
            external_identifier: Q45658763
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:06.954Z
            metadata_json: null
        - id: cs_QgqAysfTWo77Ye3y5RtWBn
          claim_id: c_Gi54MKeyr6N8w5nV1c518j
          source_id: s_FPKQWGQsHbAKCyheacCo4g
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_FPKQWGQsHbAKCyheacCo4g
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王縞（175423）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175423&o=json
            external_identifier: CBDB:175423
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:07.104Z
            metadata_json: null
      object_person:
        id: p_ABttrGR9ETMfaUWfuE5Xsi
        status: active
        display_name: 王逸
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王缟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王缟（卒于894年），唐人物。CBDB 记录其籍贯记录为京兆府。中国历代人物传记资料库（CBDB）以人物编号 175423 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 894年 | accepted |
| name.primary | 王缟 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ABttrGR9ETMfaUWfuE5Xsi | 王逸 | accepted |

## 外部来源

- [维基数据：王缟（Q45658763）](https://www.wikidata.org/wiki/Q45658763)
- [维基数据：王逸（Q45658647）](https://www.wikidata.org/wiki/Q45658647)
- [CBDB 中国历代人物传记资料库：王縞（175423）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175423&o=json)
- [CBDB 中国历代人物传记资料库：王逸（175421）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175421&o=json)
