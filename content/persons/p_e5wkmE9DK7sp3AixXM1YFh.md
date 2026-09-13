---
schema: wang-person/v1
id: p_e5wkmE9DK7sp3AixXM1YFh
status: active
merged_into: null
display_name: 蒋倩
cbdb_id: 145354
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JhvAjPW-O99Cck6iTKYEIs
        subject_person_id: p_e5wkmE9DK7sp3AixXM1YFh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 蒋倩（卒於822），唐人物。籍贯河南。（中国历代人物传记资料库 CBDB 145354）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lavszR86T3qriHBaOSfFlS
          claim_id: c_JhvAjPW-O99Cck6iTKYEIs
          source_id: s_3kGC3BzseZS2XamvGKpQUJ
          stance: supports
          locator: CBDB:145354
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_3kGC3BzseZS2XamvGKpQUJ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：蔣倩（145354）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145354&o=json
            external_identifier: CBDB:145354
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:49.065Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_6YjfU9vQKNnWY23cmHKF3i
        subject_person_id: p_e5wkmE9DK7sp3AixXM1YFh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 蒋倩
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_etKEDgiyF97ZgBb1yA4eyj
          claim_id: c_6YjfU9vQKNnWY23cmHKF3i
          source_id: s_xhJYgGLNG3mMoXJKKQwhi5
          stance: supports
          locator: Q45457001
          quotation: null
          interpretation_note: null
          source:
            id: s_xhJYgGLNG3mMoXJKKQwhi5
            source_type: api_record
            title: 维基数据：蒋倩（Q45457001）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45457001
            external_identifier: Q45457001
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:48.907Z
            metadata_json: null
        - id: cs_sXd99TTwU4akYaM9QGb7En
          claim_id: c_6YjfU9vQKNnWY23cmHKF3i
          source_id: s_3kGC3BzseZS2XamvGKpQUJ
          stance: supports
          locator: Q45457001
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_Aoj6odG2djwkan17EMtjV4
        subject_person_id: p_Z5BPr9m4u9GFwUQLtaQNNb
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_e5wkmE9DK7sp3AixXM1YFh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_ng2GmgCYm7CypGFMZZi1Z6
          claim_id: c_Aoj6odG2djwkan17EMtjV4
          source_id: s_dE8bRYtyV2HpwTy6Hstwm4
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_dE8bRYtyV2HpwTy6Hstwm4
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王袞（141634）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141634&o=json
            external_identifier: CBDB:141634
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:11:06.517Z
            metadata_json: null
        - id: cs_pHBJBwSo4EUj79TWy1e2oo
          claim_id: c_Aoj6odG2djwkan17EMtjV4
          source_id: s_jMfGGAf4XMHLRJzhikBhoq
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_jMfGGAf4XMHLRJzhikBhoq
            source_type: api_record
            title: 维基数据：王袞（Q45537271）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45537271
            external_identifier: Q45537271
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:06.374Z
            metadata_json: null
        - id: cs_2pgKSycvGiWRS4PDQDudm3
          claim_id: c_Aoj6odG2djwkan17EMtjV4
          source_id: s_xhJYgGLNG3mMoXJKKQwhi5
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_xhJYgGLNG3mMoXJKKQwhi5
            source_type: api_record
            title: 维基数据：蒋倩（Q45457001）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45457001
            external_identifier: Q45457001
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:48.907Z
            metadata_json: null
      object_person:
        id: p_Z5BPr9m4u9GFwUQLtaQNNb
        status: active
        display_name: 王袞
        merged_into_person_id: null
    - claim:
        id: c_11POnHBQxLhxvCZu8YbnL6
        subject_person_id: p_e5wkmE9DK7sp3AixXM1YFh
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Z5BPr9m4u9GFwUQLtaQNNb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vipb-UB5fGKiNInUUG9SaJ
          claim_id: c_11POnHBQxLhxvCZu8YbnL6
          source_id: s_3kGC3BzseZS2XamvGKpQUJ
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Z5BPr9m4u9GFwUQLtaQNNb
        status: active
        display_name: 王袞
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 蒋倩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 蒋倩（卒於822），唐人物。籍贯河南。（中国历代人物传记资料库 CBDB 145354） | accepted |
| name.primary | 蒋倩 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_Z5BPr9m4u9GFwUQLtaQNNb | 王袞 | accepted |
| spouses | p_Z5BPr9m4u9GFwUQLtaQNNb | 王袞 | accepted |

## 外部来源

- [维基数据：蒋倩（Q45457001）](https://www.wikidata.org/wiki/Q45457001)
- [维基数据：王袞（Q45537271）](https://www.wikidata.org/wiki/Q45537271)
- [CBDB 中国历代人物传记资料库：蔣倩（145354）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145354&o=json)
- [CBDB 中国历代人物传记资料库：王袞（141634）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141634&o=json)
