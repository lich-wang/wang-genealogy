---
schema: wang-person/v1
id: p_83yzu33D3zG1xGPeEb9Ebe
status: active
merged_into: null
display_name: 王傅
cbdb_id: 279739
revision: 9
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PQPVQ3NbKQeWt3EvCA2CDq
        subject_person_id: p_83yzu33D3zG1xGPeEb9Ebe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傅，明人物。正德十二年進士，籍贯番禺，曾任州學正。（中国历代人物传记资料库 CBDB 279739）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_vVuUmnDNZ94efs7UtoVWwP
          claim_id: c_PQPVQ3NbKQeWt3EvCA2CDq
          source_id: s_vAk2x7KgBiFLSavEUvm6qT
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_vAk2x7KgBiFLSavEUvm6qT
            source_type: api_record
            title: 维基数据：王傅（Q45537293）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45537293
            external_identifier: Q45537293
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:33.526Z
            metadata_json: null
        - id: cs_fOAt0dG0sLO0bZFZQZfxJx
          claim_id: c_PQPVQ3NbKQeWt3EvCA2CDq
          source_id: s_SDFPVm5W1sqUCrHPQuGd2D
          stance: supports
          locator: CBDB:279739
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_SDFPVm5W1sqUCrHPQuGd2D
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王傅（279739）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279739&o=json
            external_identifier: CBDB:279739
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:33.679Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_bwDzDjZR9HApCMWPP4cDh4
        subject_person_id: p_83yzu33D3zG1xGPeEb9Ebe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傅
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_MLCnR48C7Wg7HCfGYqat5q
          claim_id: c_bwDzDjZR9HApCMWPP4cDh4
          source_id: s_vAk2x7KgBiFLSavEUvm6qT
          stance: supports
          locator: Q45537293
          quotation: null
          interpretation_note: null
          source:
            id: s_vAk2x7KgBiFLSavEUvm6qT
            source_type: api_record
            title: 维基数据：王傅（Q45537293）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45537293
            external_identifier: Q45537293
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:33.526Z
            metadata_json: null
        - id: cs_f5PQCXjcFp7VUfXsLPFjY7
          claim_id: c_bwDzDjZR9HApCMWPP4cDh4
          source_id: s_SDFPVm5W1sqUCrHPQuGd2D
          stance: supports
          locator: Q45537293
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_wLQVL8uP8qn1LWEsK7fPrW
        subject_person_id: p_RrddoDHvhLNarezkWkfGUJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_83yzu33D3zG1xGPeEb9Ebe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EjyKGn2xzs1X9jk5Hcjai6
          claim_id: c_wLQVL8uP8qn1LWEsK7fPrW
          source_id: s_vAk2x7KgBiFLSavEUvm6qT
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_vAk2x7KgBiFLSavEUvm6qT
            source_type: api_record
            title: 维基数据：王傅（Q45537293）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45537293
            external_identifier: Q45537293
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:33.526Z
            metadata_json: null
        - id: cs_ACaNaLNMmGCFf8Ga2KqFG6
          claim_id: c_wLQVL8uP8qn1LWEsK7fPrW
          source_id: s_51EvKaBbKzRW9e7MQ5tFVt
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_51EvKaBbKzRW9e7MQ5tFVt
            source_type: api_record
            title: 维基数据：王珤（Q45537229）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45537229
            external_identifier: Q45537229
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:40.541Z
            metadata_json: null
      object_person:
        id: p_RrddoDHvhLNarezkWkfGUJ
        status: active
        display_name: 王珤
        merged_into_person_id: null
  children:
    - claim:
        id: c_8WNJ1PDkKAbz6FPgxQAdpz
        subject_person_id: p_83yzu33D3zG1xGPeEb9Ebe
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_2ER4qeybN68kj6wmWDD4De
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3d4q85WWdj7y3pKT8bTsHN
          claim_id: c_8WNJ1PDkKAbz6FPgxQAdpz
          source_id: s_vAk2x7KgBiFLSavEUvm6qT
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_vAk2x7KgBiFLSavEUvm6qT
            source_type: api_record
            title: 维基数据：王傅（Q45537293）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45537293
            external_identifier: Q45537293
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:33.526Z
            metadata_json: null
        - id: cs_WDC2ivVqFL1rsSxivAkmnX
          claim_id: c_8WNJ1PDkKAbz6FPgxQAdpz
          source_id: s_uhnJ5ieZxrrzbhfZ7FgmZs
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_uhnJ5ieZxrrzbhfZ7FgmZs
            source_type: api_record
            title: 维基数据：王渐逵（Q15895449）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15895449
            external_identifier: Q15895449
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:26.704Z
            metadata_json: null
      object_person:
        id: p_2ER4qeybN68kj6wmWDD4De
        status: active
        display_name: 王渐逵
        merged_into_person_id: null
    - claim:
        id: c_7JVkxP32j7p2MbqfM71i6M
        subject_person_id: p_83yzu33D3zG1xGPeEb9Ebe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zAiQVyNzoej4Q1vwE84ZjB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FcqXZY8WuZLbn50WpFNDGS
          claim_id: c_7JVkxP32j7p2MbqfM71i6M
          source_id: s_zo7nrDWhznM6UPg2n7eSAd
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第二甲第三十五名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zo7nrDWhznM6UPg2n7eSAd
            source_type: api_record
            title: 中国历代人物传记资料库：王漸逵（CBDB 126774）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126774&o=json
            external_identifier: CBDB:126774
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.193Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_zAiQVyNzoej4Q1vwE84ZjB
        status: active
        display_name: 王漸逵
        merged_into_person_id: null
    - claim:
        id: c_AziRDiw_9IAlwIcSj4ZOc3
        subject_person_id: p_83yzu33D3zG1xGPeEb9Ebe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6ejbA13NwK2QQUt5VT8wE3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_29ABt-VGh0WsX0YGPjwAFA
          claim_id: c_AziRDiw_9IAlwIcSj4ZOc3
          source_id: s_HsNSGet-uZXsl_FzM3C5Z4
          stance: supports
          locator: CBDB：兄弟 王漸逵（126774）之父／母 王傅
          quotation: null
          interpretation_note: 由兄弟关系推断：王漸適 与 王漸逵 为同胞（CBDB 记「兄」），王漸逵 之父／母即 王漸適 之父／母。
          source:
            id: s_HsNSGet-uZXsl_FzM3C5Z4
            source_type: api_record
            title: 中国历代人物传记资料库：王漸適（CBDB 279747）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279747&o=json
            external_identifier: CBDB:279747
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6ejbA13NwK2QQUt5VT8wE3
        status: active
        display_name: 王漸適
        merged_into_person_id: null
    - claim:
        id: c_Jalj1vmM1UBLWqfeAnVE3Y
        subject_person_id: p_83yzu33D3zG1xGPeEb9Ebe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AxsVtrCi1ZCfXEQCu435z3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RoIISiCwDghq9WGTxaWcdv
          claim_id: c_Jalj1vmM1UBLWqfeAnVE3Y
          source_id: s_feriU1vMvJnMq6mXQBzW8K
          stance: supports
          locator: CBDB：兄弟 王漸逵（126774）之父／母 王傅
          quotation: null
          interpretation_note: 由兄弟关系推断：王适迪 与 王漸逵 为同胞（CBDB 记「弟」），王漸逵 之父／母即 王适迪 之父／母。
          source:
            id: s_feriU1vMvJnMq6mXQBzW8K
            source_type: api_record
            title: 中国历代人物传记资料库：王适迪（CBDB 279742）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279742&o=json
            external_identifier: CBDB:279742
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AxsVtrCi1ZCfXEQCu435z3
        status: active
        display_name: 王适迪
        merged_into_person_id: null
    - claim:
        id: c_tZLarg_HbuMLdZDlqr96Fm
        subject_person_id: p_83yzu33D3zG1xGPeEb9Ebe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BVBKSKkbmm3UpBzszMgVLL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MzB36_7NUBvwEoRwzcSB82
          claim_id: c_tZLarg_HbuMLdZDlqr96Fm
          source_id: s_eKDA9NC-CJG1PzkaHsMEz7
          stance: supports
          locator: CBDB：兄弟 王漸逵（126774）之父／母 王傅
          quotation: null
          interpretation_note: 由兄弟关系推断：王漸造 与 王漸逵 为同胞（CBDB 记「兄」），王漸逵 之父／母即 王漸造 之父／母。
          source:
            id: s_eKDA9NC-CJG1PzkaHsMEz7
            source_type: api_record
            title: 中国历代人物传记资料库：王漸造（CBDB 279745）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279745&o=json
            external_identifier: CBDB:279745
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BVBKSKkbmm3UpBzszMgVLL
        status: active
        display_name: 王漸造
        merged_into_person_id: null
    - claim:
        id: c_6B8gnBhqjb3p4Cu01TezTe
        subject_person_id: p_83yzu33D3zG1xGPeEb9Ebe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EJwVDZj1xNqv72p5LMTvfk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hciP_xJCbx0599-Lagd534
          claim_id: c_6B8gnBhqjb3p4Cu01TezTe
          source_id: s_w04pQc7yt1b9-lyZbWdRoh
          stance: supports
          locator: CBDB：兄弟 王漸逵（126774）之父／母 王傅
          quotation: null
          interpretation_note: 由兄弟关系推断：王達途 与 王漸逵 为同胞（CBDB 记「兄」），王漸逵 之父／母即 王達途 之父／母。
          source:
            id: s_w04pQc7yt1b9-lyZbWdRoh
            source_type: api_record
            title: 中国历代人物传记资料库：王達途（CBDB 279744）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279744&o=json
            external_identifier: CBDB:279744
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EJwVDZj1xNqv72p5LMTvfk
        status: active
        display_name: 王達途
        merged_into_person_id: null
    - claim:
        id: c_Y59_mPYb1BYF17j3fivVoe
        subject_person_id: p_83yzu33D3zG1xGPeEb9Ebe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_X8ey8mTATQs82jLVUHi3v5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e3lvCTjodkSMme6OtawjcM
          claim_id: c_Y59_mPYb1BYF17j3fivVoe
          source_id: s_uHbF-RV8N0jjl5CW8LgRfe
          stance: supports
          locator: CBDB：兄弟 王漸逵（126774）之父／母 王傅
          quotation: null
          interpretation_note: 由兄弟关系推断：王遲速 与 王漸逵 为同胞（CBDB 记「兄」），王漸逵 之父／母即 王遲速 之父／母。
          source:
            id: s_uHbF-RV8N0jjl5CW8LgRfe
            source_type: api_record
            title: 中国历代人物传记资料库：王遲速（CBDB 279743）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279743&o=json
            external_identifier: CBDB:279743
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_X8ey8mTATQs82jLVUHi3v5
        status: active
        display_name: 王遲速
        merged_into_person_id: null
    - claim:
        id: c_4jvGhBmvT_LBuOQN1oCw76
        subject_person_id: p_83yzu33D3zG1xGPeEb9Ebe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_foNgNH1fWVwkc8JrcWVu76
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_274OWdLKXDd7zIILwpeIPX
          claim_id: c_4jvGhBmvT_LBuOQN1oCw76
          source_id: s_06MlpVOJ2CYeGIzGKNtXax
          stance: supports
          locator: CBDB：兄弟 王漸逵（126774）之父／母 王傅
          quotation: null
          interpretation_note: 由兄弟关系推断：王漸逑 与 王漸逵 为同胞（CBDB 记「兄」），王漸逵 之父／母即 王漸逑 之父／母。
          source:
            id: s_06MlpVOJ2CYeGIzGKNtXax
            source_type: api_record
            title: 中国历代人物传记资料库：王漸逑（CBDB 279746）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279746&o=json
            external_identifier: CBDB:279746
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_foNgNH1fWVwkc8JrcWVu76
        status: active
        display_name: 王漸逑
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王傅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王傅，明人物。正德十二年進士，籍贯番禺，曾任州學正。（中国历代人物传记资料库 CBDB 279739） | accepted |
| name.primary | 王傅 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_RrddoDHvhLNarezkWkfGUJ | 王珤 | accepted |
| children | p_2ER4qeybN68kj6wmWDD4De | 王渐逵 | accepted |
| children | p_zAiQVyNzoej4Q1vwE84ZjB | 王漸逵 | accepted |
| children | p_6ejbA13NwK2QQUt5VT8wE3 | 王漸適 | accepted |
| children | p_AxsVtrCi1ZCfXEQCu435z3 | 王适迪 | accepted |
| children | p_BVBKSKkbmm3UpBzszMgVLL | 王漸造 | accepted |
| children | p_EJwVDZj1xNqv72p5LMTvfk | 王達途 | accepted |
| children | p_X8ey8mTATQs82jLVUHi3v5 | 王遲速 | accepted |
| children | p_foNgNH1fWVwkc8JrcWVu76 | 王漸逑 | accepted |

## 外部来源

- [维基数据：王珤（Q45537229）](https://www.wikidata.org/wiki/Q45537229)
- [维基数据：王傅（Q45537293）](https://www.wikidata.org/wiki/Q45537293)
- [维基数据：王渐逵（Q15895449）](https://www.wikidata.org/wiki/Q15895449)
- [中国历代人物传记资料库：王遲速（CBDB 279743）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279743&o=json)
- [中国历代人物传记资料库：王達途（CBDB 279744）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279744&o=json)
- [中国历代人物传记资料库：王漸逵（CBDB 126774）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126774&o=json)
- [中国历代人物传记资料库：王漸逑（CBDB 279746）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279746&o=json)
- [中国历代人物传记资料库：王漸適（CBDB 279747）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279747&o=json)
- [中国历代人物传记资料库：王漸造（CBDB 279745）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279745&o=json)
- [中国历代人物传记资料库：王适迪（CBDB 279742）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279742&o=json)
- [CBDB 中国历代人物传记资料库：王傅（279739）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279739&o=json)
