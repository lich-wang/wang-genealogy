---
schema: wang-person/v1
id: p_wxNC97go3Ly1JHGAcv6FvX
status: active
merged_into: null
display_name: 王佐
cbdb_id: 236878
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MPzs1hyNAgJZgz54keVufT
        subject_person_id: p_wxNC97go3Ly1JHGAcv6FvX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐，明人物。CBDB 记录其籍贯记录为江夏。中国历代人物传记资料库（CBDB）以人物编号 236878 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_kdYWgEYP5nCW4ucdxaNH7C
          claim_id: c_MPzs1hyNAgJZgz54keVufT
          source_id: s_9noZnKactHYY2Rut3H7eGs
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_9noZnKactHYY2Rut3H7eGs
            source_type: api_record
            title: 维基数据：王佐（Q45527630）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45527630
            external_identifier: Q45527630
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:33.526Z
            metadata_json: null
        - id: cs_j01n8S3BqGq6E1DLn065x8
          claim_id: c_MPzs1hyNAgJZgz54keVufT
          source_id: s_Wyjt1N8YUYBKZKFvA9KBTB
          stance: supports
          locator: CBDB:236878
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Wyjt1N8YUYBKZKFvA9KBTB
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王佐（236878）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236878&o=json
            external_identifier: CBDB:236878
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:33.683Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_bBY91MszQcp7gro747u114
        subject_person_id: p_wxNC97go3Ly1JHGAcv6FvX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_HybFFXqhVWzzRj5jmU1BZW
          claim_id: c_bBY91MszQcp7gro747u114
          source_id: s_9noZnKactHYY2Rut3H7eGs
          stance: supports
          locator: Q45527630
          quotation: null
          interpretation_note: null
          source:
            id: s_9noZnKactHYY2Rut3H7eGs
            source_type: api_record
            title: 维基数据：王佐（Q45527630）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45527630
            external_identifier: Q45527630
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:33.526Z
            metadata_json: null
        - id: cs_kWRor7wQE8bYZ92mbE4uw1
          claim_id: c_bBY91MszQcp7gro747u114
          source_id: s_Wyjt1N8YUYBKZKFvA9KBTB
          stance: supports
          locator: Q45527630
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_JpbTfSjX53GaWC93KZkSBt
        subject_person_id: p_yaK3v157GQYGTQP5RhE7JJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wxNC97go3Ly1JHGAcv6FvX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gyfp8Mt3zEjFu4gNmmdwhC
          claim_id: c_JpbTfSjX53GaWC93KZkSBt
          source_id: s_9noZnKactHYY2Rut3H7eGs
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_9noZnKactHYY2Rut3H7eGs
            source_type: api_record
            title: 维基数据：王佐（Q45527630）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45527630
            external_identifier: Q45527630
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:33.526Z
            metadata_json: null
        - id: cs_49NJfETCKuF9Gq7f3jPRdC
          claim_id: c_JpbTfSjX53GaWC93KZkSBt
          source_id: s_KerkffX6Nege7oC5WwMN2q
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_KerkffX6Nege7oC5WwMN2q
            source_type: api_record
            title: 维基数据：王俊卿（Q45527566）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45527566
            external_identifier: Q45527566
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:38.809Z
            metadata_json: null
      object_person:
        id: p_yaK3v157GQYGTQP5RhE7JJ
        status: active
        display_name: 王俊卿
        merged_into_person_id: null
  children:
    - claim:
        id: c_CQYPjfcHExBvvot23KRrb9
        subject_person_id: p_wxNC97go3Ly1JHGAcv6FvX
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_eFMUZgTCSMLNfAAU1Qe6q2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dNk4QMCXQ7bYKApcJ9hnsU
          claim_id: c_CQYPjfcHExBvvot23KRrb9
          source_id: s_WCqcm1QhQX3b91GirjdXXG
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_WCqcm1QhQX3b91GirjdXXG
            source_type: api_record
            title: 维基数据：王竑（Q15900659）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15900659
            external_identifier: Q15900659
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:28.301Z
            metadata_json: null
        - id: cs_fLz2QL71CHVEQgiWaLZWPw
          claim_id: c_CQYPjfcHExBvvot23KRrb9
          source_id: s_9noZnKactHYY2Rut3H7eGs
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_9noZnKactHYY2Rut3H7eGs
            source_type: api_record
            title: 维基数据：王佐（Q45527630）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45527630
            external_identifier: Q45527630
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:33.526Z
            metadata_json: null
      object_person:
        id: p_eFMUZgTCSMLNfAAU1Qe6q2
        status: active
        display_name: 王竑
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王佐，明人物。CBDB 记录其籍贯记录为江夏。中国历代人物传记资料库（CBDB）以人物编号 236878 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王佐 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_yaK3v157GQYGTQP5RhE7JJ | 王俊卿 | accepted |
| children | p_eFMUZgTCSMLNfAAU1Qe6q2 | 王竑 | accepted |

## 外部来源

- [维基数据：王竑（Q15900659）](https://www.wikidata.org/wiki/Q15900659)
- [维基数据：王俊卿（Q45527566）](https://www.wikidata.org/wiki/Q45527566)
- [维基数据：王佐（Q45527630）](https://www.wikidata.org/wiki/Q45527630)
- [CBDB 中国历代人物传记资料库：王佐（236878）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236878&o=json)
