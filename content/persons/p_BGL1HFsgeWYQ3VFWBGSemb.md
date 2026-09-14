---
schema: wang-person/v1
id: p_BGL1HFsgeWYQ3VFWBGSemb
status: active
merged_into: null
display_name: 王琮
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mfYZ8pT4SkaJvwrWoDYt6v
        subject_person_id: p_BGL1HFsgeWYQ3VFWBGSemb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KMfaoaSY66aQbUtdUZJ7yz
          claim_id: c_mfYZ8pT4SkaJvwrWoDYt6v
          source_id: s_xBqdQS3J8npNXQbvVRSH9d
          stance: supports
          locator: CBDB:276414
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（276414）
          source: &a1
            id: s_xBqdQS3J8npNXQbvVRSH9d
            source_type: api_record
            title: 中国历代人物传记资料库：王琮（CBDB 276414）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276414&o=json
            external_identifier: CBDB:276414
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.939Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mCrYGP65aqYy4JEw7jv1yN
        subject_person_id: p_BGL1HFsgeWYQ3VFWBGSemb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琮，明人物。正德六年進士，籍贯武城。（中国历代人物传记资料库 CBDB 276414）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rfOZrTvg3IrIYWUE5pOtbJ
          claim_id: c_mCrYGP65aqYy4JEw7jv1yN
          source_id: s_xBqdQS3J8npNXQbvVRSH9d
          stance: supports
          locator: CBDB:276414
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_auFESy6ttH1cvrseo4KPKH
        subject_person_id: p_BGL1HFsgeWYQ3VFWBGSemb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eQSeau4TnN2P1YHAKu1a3t
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eny2nQ8kjY0ScXe9UJu8bS
          claim_id: c_auFESy6ttH1cvrseo4KPKH
          source_id: s_xBqdQS3J8npNXQbvVRSH9d
          stance: supports
          locator: 正德六年進士登科錄:一卷，第二甲第六十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_eQSeau4TnN2P1YHAKu1a3t
        status: active
        display_name: 王道
        merged_into_person_id: null
    - claim:
        id: c_YvCqCMdbjqyIr83mxXTheX
        subject_person_id: p_BGL1HFsgeWYQ3VFWBGSemb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_29D3zZKvWQiHCfh1mCPcjC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9lffW8KOV8wNz9V3qZsRsW
          claim_id: c_YvCqCMdbjqyIr83mxXTheX
          source_id: s_PjmKovt-VMpFCYLQbpPY2q
          stance: supports
          locator: CBDB：兄弟 王道（126743）之父／母 王琮
          quotation: null
          interpretation_note: 由兄弟关系推断：王适 与 王道 为同胞（CBDB 记「兄」），王道 之父／母即 王适 之父／母。
          source:
            id: s_PjmKovt-VMpFCYLQbpPY2q
            source_type: api_record
            title: 中国历代人物传记资料库：王适（CBDB 276425）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276425&o=json
            external_identifier: CBDB:276425
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_29D3zZKvWQiHCfh1mCPcjC
        status: active
        display_name: 王适
        merged_into_person_id: null
    - claim:
        id: c_efFT0xurnWvvngOxQcs8T0
        subject_person_id: p_BGL1HFsgeWYQ3VFWBGSemb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5kHWtHG41N7FxgK4Dffrc3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TT1QaZIM-KOKIKeCGS2XtC
          claim_id: c_efFT0xurnWvvngOxQcs8T0
          source_id: s_RnfI542ldC2SnolTpjTZQc
          stance: supports
          locator: CBDB：兄弟 王道（126743）之父／母 王琮
          quotation: null
          interpretation_note: 由兄弟关系推断：王逈 与 王道 为同胞（CBDB 记「兄」），王道 之父／母即 王逈 之父／母。
          source:
            id: s_RnfI542ldC2SnolTpjTZQc
            source_type: api_record
            title: 中国历代人物传记资料库：王逈（CBDB 276423）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276423&o=json
            external_identifier: CBDB:276423
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5kHWtHG41N7FxgK4Dffrc3
        status: active
        display_name: 王逈
        merged_into_person_id: null
    - claim:
        id: c_c3KG8EhCUGMzp_P2izQYHW
        subject_person_id: p_BGL1HFsgeWYQ3VFWBGSemb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6vuEmZPvM17kD96hvGXxj6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Me2UjUl14CvxEmPgS2IYJa
          claim_id: c_c3KG8EhCUGMzp_P2izQYHW
          source_id: s_B1XVtRNAH02DA6hyZeMhJe
          stance: supports
          locator: CBDB：兄弟 王道（126743）之父／母 王琮
          quotation: null
          interpretation_note: 由兄弟关系推断：王選 与 王道 为同胞（CBDB 记「兄」），王道 之父／母即 王選 之父／母。
          source:
            id: s_B1XVtRNAH02DA6hyZeMhJe
            source_type: api_record
            title: 中国历代人物传记资料库：王選（CBDB 276421）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276421&o=json
            external_identifier: CBDB:276421
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6vuEmZPvM17kD96hvGXxj6
        status: active
        display_name: 王選
        merged_into_person_id: null
    - claim:
        id: c_tIgb9kAAYcO7cv-9JQdsP1
        subject_person_id: p_BGL1HFsgeWYQ3VFWBGSemb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PiFt1PACby6934NxdsbuQ1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YFSZnV8D1aMcGRZemRsDNs
          claim_id: c_tIgb9kAAYcO7cv-9JQdsP1
          source_id: s_E7L8H1t-SC0DLdFtAc-jnS
          stance: supports
          locator: CBDB：兄弟 王道（126743）之父／母 王琮
          quotation: null
          interpretation_note: 由兄弟关系推断：王邁 与 王道 为同胞（CBDB 记「兄」），王道 之父／母即 王邁 之父／母。
          source:
            id: s_E7L8H1t-SC0DLdFtAc-jnS
            source_type: api_record
            title: 中国历代人物传记资料库：王邁（CBDB 276424）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276424&o=json
            external_identifier: CBDB:276424
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PiFt1PACby6934NxdsbuQ1
        status: active
        display_name: 王邁
        merged_into_person_id: null
    - claim:
        id: c_oGZZBGqY9lLARJRGxIbESb
        subject_person_id: p_BGL1HFsgeWYQ3VFWBGSemb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WLx3Kf78a9Boh4RiRRgyWy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LMX65bjryiqUBkfPUW8EZA
          claim_id: c_oGZZBGqY9lLARJRGxIbESb
          source_id: s_fCwtL4ANei3r_MW0D_IWuG
          stance: supports
          locator: CBDB：兄弟 王道（126743）之父／母 王琮
          quotation: null
          interpretation_note: 由兄弟关系推断：王遇 与 王道 为同胞（CBDB 记「兄」），王道 之父／母即 王遇 之父／母。
          source:
            id: s_fCwtL4ANei3r_MW0D_IWuG
            source_type: api_record
            title: 中国历代人物传记资料库：王遇（CBDB 276422）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276422&o=json
            external_identifier: CBDB:276422
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WLx3Kf78a9Boh4RiRRgyWy
        status: active
        display_name: 王遇
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王琮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琮 | accepted |
| bio.summary | 王琮，明人物。正德六年進士，籍贯武城。（中国历代人物传记资料库 CBDB 276414） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_eQSeau4TnN2P1YHAKu1a3t | 王道 | accepted |
| children | p_29D3zZKvWQiHCfh1mCPcjC | 王适 | accepted |
| children | p_5kHWtHG41N7FxgK4Dffrc3 | 王逈 | accepted |
| children | p_6vuEmZPvM17kD96hvGXxj6 | 王選 | accepted |
| children | p_PiFt1PACby6934NxdsbuQ1 | 王邁 | accepted |
| children | p_WLx3Kf78a9Boh4RiRRgyWy | 王遇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琮（CBDB 276414）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276414&o=json)
- [中国历代人物传记资料库：王逈（CBDB 276423）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276423&o=json)
- [中国历代人物传记资料库：王邁（CBDB 276424）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276424&o=json)
- [中国历代人物传记资料库：王适（CBDB 276425）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276425&o=json)
- [中国历代人物传记资料库：王選（CBDB 276421）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276421&o=json)
- [中国历代人物传记资料库：王遇（CBDB 276422）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276422&o=json)
