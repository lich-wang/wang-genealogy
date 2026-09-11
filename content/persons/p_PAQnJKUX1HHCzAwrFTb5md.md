---
schema: wang-person/v1
id: p_PAQnJKUX1HHCzAwrFTb5md
status: active
merged_into: null
display_name: 王本
cbdb_id: 257534
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KLmDVSAjZ7zCoyxa2Es3nC
        subject_person_id: p_PAQnJKUX1HHCzAwrFTb5md
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王本，明人物。CBDB 记录其籍贯记录为南陽。中国历代人物传记资料库（CBDB）以人物编号 257534 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_ctmF5qqKzrJqB9NQKT42fU
          claim_id: c_KLmDVSAjZ7zCoyxa2Es3nC
          source_id: s_aBqYKXy4FB34Qb4CoTKgaT
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_aBqYKXy4FB34Qb4CoTKgaT
            source_type: api_record
            title: 维基数据：王本（Q45491815）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45491815
            external_identifier: Q45491815
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:10.748Z
            metadata_json: null
        - id: cs_16Uirjs3J_i7LyO-ge7C2S
          claim_id: c_KLmDVSAjZ7zCoyxa2Es3nC
          source_id: s_KCPfC5x5Trg9brLzceiK4T
          stance: supports
          locator: CBDB:257534
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_KCPfC5x5Trg9brLzceiK4T
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王本（257534）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257534&o=json
            external_identifier: CBDB:257534
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:10.923Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_JQzE4JKURhZfAGoM492jAi
        subject_person_id: p_PAQnJKUX1HHCzAwrFTb5md
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王本
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_AzChRDxytxjUD8bQWaYohe
          claim_id: c_JQzE4JKURhZfAGoM492jAi
          source_id: s_KCPfC5x5Trg9brLzceiK4T
          stance: supports
          locator: Q45491815
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_adhXHDLwH9QqcKk4AKLzdJ
          claim_id: c_JQzE4JKURhZfAGoM492jAi
          source_id: s_aBqYKXy4FB34Qb4CoTKgaT
          stance: supports
          locator: Q45491815
          quotation: null
          interpretation_note: null
          source:
            id: s_aBqYKXy4FB34Qb4CoTKgaT
            source_type: api_record
            title: 维基数据：王本（Q45491815）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45491815
            external_identifier: Q45491815
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:10.748Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_4eUrHznUMarW3ZsgmTEqYc
        subject_person_id: p_Ns4Cdmr9SZRQforztCwkrA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PAQnJKUX1HHCzAwrFTb5md
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dKrMgpU6xcFnV47UJToCX7
          claim_id: c_4eUrHznUMarW3ZsgmTEqYc
          source_id: s_aBqYKXy4FB34Qb4CoTKgaT
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_Qb6orh3u7VqCDZbkGPHgGQ
          claim_id: c_4eUrHznUMarW3ZsgmTEqYc
          source_id: s_zRCWanQ9G8TMGENN7UWk8v
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_zRCWanQ9G8TMGENN7UWk8v
            source_type: api_record
            title: 维基数据：王成（Q45491751）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45491751
            external_identifier: Q45491751
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:19.152Z
            metadata_json: null
      object_person:
        id: p_Ns4Cdmr9SZRQforztCwkrA
        status: active
        display_name: 王成
        merged_into_person_id: null
  children:
    - claim:
        id: c_Lja4kG6wq2v3GTCYnJRw6i
        subject_person_id: p_PAQnJKUX1HHCzAwrFTb5md
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_Wdd9WrspYiEE72NGMNp75f
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1aMkBMt3T1gLxVJrV7nQ82
          claim_id: c_Lja4kG6wq2v3GTCYnJRw6i
          source_id: s_aBqYKXy4FB34Qb4CoTKgaT
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_aBqYKXy4FB34Qb4CoTKgaT
            source_type: api_record
            title: 维基数据：王本（Q45491815）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45491815
            external_identifier: Q45491815
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:10.748Z
            metadata_json: null
        - id: cs_GZiKTADAKWbWpzof2jKtxg
          claim_id: c_Lja4kG6wq2v3GTCYnJRw6i
          source_id: s_g1q73gKvB6bGzszoP8GtLg
          stance: supports
          locator: P22（父）
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
      object_person:
        id: p_Wdd9WrspYiEE72NGMNp75f
        status: active
        display_name: 王鸿儒
        merged_into_person_id: null
    - claim:
        id: c_ypLW9KDqu6wNxHmZmLHOmV
        subject_person_id: p_PAQnJKUX1HHCzAwrFTb5md
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bwdhzsnM77a9YN3tYyTmwB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ExDOZmv_BUSxOixtDDA-3_
          claim_id: c_ypLW9KDqu6wNxHmZmLHOmV
          source_id: s_D1Q1PMjTF3hG8x2zM1xYbq
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第二甲第八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_D1Q1PMjTF3hG8x2zM1xYbq
            source_type: api_record
            title: 中国历代人物传记资料库：王鴻儒（CBDB 33864）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33864&o=json
            external_identifier: CBDB:33864
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.072Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bwdhzsnM77a9YN3tYyTmwB
        status: active
        display_name: 王鴻儒
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王本

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王本，明人物。CBDB 记录其籍贯记录为南陽。中国历代人物传记资料库（CBDB）以人物编号 257534 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王本 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Ns4Cdmr9SZRQforztCwkrA | 王成 | accepted |
| children | p_Wdd9WrspYiEE72NGMNp75f | 王鸿儒 | accepted |
| children | p_bwdhzsnM77a9YN3tYyTmwB | 王鴻儒 | accepted |

## 外部来源

- [维基数据：王本（Q45491815）](https://www.wikidata.org/wiki/Q45491815)
- [维基数据：王成（Q45491751）](https://www.wikidata.org/wiki/Q45491751)
- [维基数据：王鸿儒（Q15933067）](https://www.wikidata.org/wiki/Q15933067)
- [中国历代人物传记资料库：王鴻儒（CBDB 33864）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33864&o=json)
- [CBDB 中国历代人物传记资料库：王本（257534）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257534&o=json)
