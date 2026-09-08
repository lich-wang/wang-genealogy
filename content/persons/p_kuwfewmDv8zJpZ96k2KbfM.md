---
schema: wang-person/v1
id: p_kuwfewmDv8zJpZ96k2KbfM
status: active
merged_into: null
display_name: 王澄
cbdb_id: 175388
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zWQJAFpDQq1829ucWXCLsD
        subject_person_id: p_kuwfewmDv8zJpZ96k2KbfM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澄（卒于733年），唐人物。CBDB 记录其籍贯记录为河南府。中国历代人物传记资料库（CBDB）以人物编号 175388 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_KLSCebE5LBt5BdP2LXjVYY
          claim_id: c_zWQJAFpDQq1829ucWXCLsD
          source_id: s_ynMP5VKqLLDN6inBHsQbDR
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_ynMP5VKqLLDN6inBHsQbDR
            source_type: api_record
            title: 维基数据：王澄（Q45656669）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656669
            external_identifier: Q45656669
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:41.403Z
            metadata_json: null
        - id: cs_QmTHM1iosypoO8W8jlkiUq
          claim_id: c_zWQJAFpDQq1829ucWXCLsD
          source_id: s_NYTEVwPu9XJq3wDcjBTMrq
          stance: supports
          locator: CBDB:175388
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_NYTEVwPu9XJq3wDcjBTMrq
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王澄（175388）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175388&o=json
            external_identifier: CBDB:175388
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:41.548Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_j2k3zUTBdGuDX8zTN1A77E
        subject_person_id: p_kuwfewmDv8zJpZ96k2KbfM
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 733年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0733-01-01
            latest: 0733-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PhH4NJB3kYZD3zTiy8T2RH
          claim_id: c_j2k3zUTBdGuDX8zTN1A77E
          source_id: s_ynMP5VKqLLDN6inBHsQbDR
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_ynMP5VKqLLDN6inBHsQbDR
            source_type: api_record
            title: 维基数据：王澄（Q45656669）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656669
            external_identifier: Q45656669
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:41.403Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_6Evn87XyALSwGBnQumUE6L
        subject_person_id: p_kuwfewmDv8zJpZ96k2KbfM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3ntM2PMmBqQVKS4s1hop53
          claim_id: c_6Evn87XyALSwGBnQumUE6L
          source_id: s_ynMP5VKqLLDN6inBHsQbDR
          stance: supports
          locator: Q45656669
          quotation: null
          interpretation_note: null
          source:
            id: s_ynMP5VKqLLDN6inBHsQbDR
            source_type: api_record
            title: 维基数据：王澄（Q45656669）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656669
            external_identifier: Q45656669
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:41.403Z
            metadata_json: null
        - id: cs_Xq2H1yhhf22PN8mNPQtPQZ
          claim_id: c_6Evn87XyALSwGBnQumUE6L
          source_id: s_NYTEVwPu9XJq3wDcjBTMrq
          stance: supports
          locator: Q45656669
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Go9HTAVZrUrYthCGsyiJyX
        subject_person_id: p_RQFRb7ZkfNHmmspp2wmJ84
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_kuwfewmDv8zJpZ96k2KbfM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_i1YsDX82gHpYJ13jH2GK9E
          claim_id: c_Go9HTAVZrUrYthCGsyiJyX
          source_id: s_s8KCNkkhKGQb5U2DcGajwh
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_s8KCNkkhKGQb5U2DcGajwh
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王方泰（154137）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154137&o=json
            external_identifier: CBDB:154137
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:04:21.769Z
            metadata_json: null
      object_person:
        id: p_RQFRb7ZkfNHmmspp2wmJ84
        status: active
        display_name: 王方泰
        merged_into_person_id: null
  children:
    - claim:
        id: c_48mVu8MrHDvqQ8LMdATu1i
        subject_person_id: p_kuwfewmDv8zJpZ96k2KbfM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_x5Ln1R22RSsi3UXUeTJwv4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_3FsNqrJhue3anKixYEarEh
          claim_id: c_48mVu8MrHDvqQ8LMdATu1i
          source_id: s_NYTEVwPu9XJq3wDcjBTMrq
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_NYTEVwPu9XJq3wDcjBTMrq
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王澄（175388）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175388&o=json
            external_identifier: CBDB:175388
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:41.548Z
            metadata_json: null
        - id: cs_UPw7YNqe64FYoJiVxWJnEi
          claim_id: c_48mVu8MrHDvqQ8LMdATu1i
          source_id: s_ynMP5VKqLLDN6inBHsQbDR
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_ynMP5VKqLLDN6inBHsQbDR
            source_type: api_record
            title: 维基数据：王澄（Q45656669）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656669
            external_identifier: Q45656669
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:41.403Z
            metadata_json: null
        - id: cs_tkyuizXf5yaghG9gqqjruW
          claim_id: c_48mVu8MrHDvqQ8LMdATu1i
          source_id: s_8KGr9D9ijfqn2yDh5weqwZ
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_8KGr9D9ijfqn2yDh5weqwZ
            source_type: api_record
            title: 维基数据：王志深（Q45656729）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45656729
            external_identifier: Q45656729
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:53.808Z
            metadata_json: null
        - id: cs_bqpG17985MMkVEhsj31965
          claim_id: c_48mVu8MrHDvqQ8LMdATu1i
          source_id: s_pGPwLst7pcMbh9VszvAp3B
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_pGPwLst7pcMbh9VszvAp3B
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王志深（175389）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175389&o=json
            external_identifier: CBDB:175389
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:53.959Z
            metadata_json: null
      object_person:
        id: p_x5Ln1R22RSsi3UXUeTJwv4
        status: active
        display_name: 王志深
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王澄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王澄（卒于733年），唐人物。CBDB 记录其籍贯记录为河南府。中国历代人物传记资料库（CBDB）以人物编号 175388 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 733年 | accepted |
| name.primary | 王澄 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_RQFRb7ZkfNHmmspp2wmJ84 | 王方泰 | accepted |
| children | p_x5Ln1R22RSsi3UXUeTJwv4 | 王志深 | accepted |

## 外部来源

- [维基数据：王澄（Q45656669）](https://www.wikidata.org/wiki/Q45656669)
- [维基数据：王志深（Q45656729）](https://www.wikidata.org/wiki/Q45656729)
- [CBDB 中国历代人物传记资料库：王澄（175388）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175388&o=json)
- [CBDB 中国历代人物传记资料库：王方泰（154137）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154137&o=json)
- [CBDB 中国历代人物传记资料库：王志深（175389）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175389&o=json)
