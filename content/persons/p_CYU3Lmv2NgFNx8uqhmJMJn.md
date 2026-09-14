---
schema: wang-person/v1
id: p_CYU3Lmv2NgFNx8uqhmJMJn
status: active
merged_into: null
display_name: 王周
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FvQ4iB2zw99niQgDeVNC9P
        subject_person_id: p_CYU3Lmv2NgFNx8uqhmJMJn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王周
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GfbFEwh1VKT8hwCpZymQGF
          claim_id: c_FvQ4iB2zw99niQgDeVNC9P
          source_id: s_a9YEAaB7pVMV4iABCgpKZJ
          stance: supports
          locator: CBDB:326924
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（326924）
          source: &a1
            id: s_a9YEAaB7pVMV4iABCgpKZJ
            source_type: api_record
            title: 中国历代人物传记资料库：王周（CBDB 326924）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326924&o=json
            external_identifier: CBDB:326924
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.233Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vtK3e5PX3zNKqEDvxE8wBP
        subject_person_id: p_CYU3Lmv2NgFNx8uqhmJMJn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王周，明人物。嘉靖四十一年進士，籍贯秀水。（中国历代人物传记资料库 CBDB 326924）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AlsRc7KFDiB7JtX5ET8_K8
          claim_id: c_vtK3e5PX3zNKqEDvxE8wBP
          source_id: s_a9YEAaB7pVMV4iABCgpKZJ
          stance: supports
          locator: CBDB:326924
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_c8koLmQAzj6H9NTXzRsOmo
        subject_person_id: p_CYU3Lmv2NgFNx8uqhmJMJn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4j28cTB4FbkC46frs3J8PW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zkGN_FVoFU7M5yi_OkRtiL
          claim_id: c_c8koLmQAzj6H9NTXzRsOmo
          source_id: s_Zrb5Fnnx5w1Cpuv9PTChnJ
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第二甲第六十五名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Zrb5Fnnx5w1Cpuv9PTChnJ
            source_type: api_record
            title: 中国历代人物传记资料库：王俸（CBDB 204993）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204993&o=json
            external_identifier: CBDB:204993
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.846Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4j28cTB4FbkC46frs3J8PW
        status: active
        display_name: 王俸
        merged_into_person_id: null
    - claim:
        id: c_YJAIwYrspDATM5SAWji_4r
        subject_person_id: p_CYU3Lmv2NgFNx8uqhmJMJn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5xAVa3shVSKKWDozY77843
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p68sowQbkPCovUSDGyrKGZ
          claim_id: c_YJAIwYrspDATM5SAWji_4r
          source_id: s_dRhJNSqrFbbesJm5DZj8Rg
          stance: supports
          locator: CBDB：兄弟 王俸（204993）之父／母 王周
          quotation: null
          interpretation_note: 由兄弟关系推断：王儼 与 王俸 为同胞（CBDB 记「弟」），王俸 之父／母即 王儼 之父／母。
          source:
            id: s_dRhJNSqrFbbesJm5DZj8Rg
            source_type: api_record
            title: 中国历代人物传记资料库：王儼（CBDB 326928）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326928&o=json
            external_identifier: CBDB:326928
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5xAVa3shVSKKWDozY77843
        status: active
        display_name: 王儼
        merged_into_person_id: null
    - claim:
        id: c_ZzsQRjpOQQ5dD2CazhfQaU
        subject_person_id: p_CYU3Lmv2NgFNx8uqhmJMJn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cXHv7PKynVHMNbBR9FMZQr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TgRWXw7hMh-yo9AdLbDPrV
          claim_id: c_ZzsQRjpOQQ5dD2CazhfQaU
          source_id: s_OXRr7eeHJSX0y53-MgP2qP
          stance: supports
          locator: CBDB：兄弟 王俸（204993）之父／母 王周
          quotation: null
          interpretation_note: 由兄弟关系推断：王化 与 王俸 为同胞（CBDB 记「弟」），王俸 之父／母即 王化 之父／母。
          source:
            id: s_OXRr7eeHJSX0y53-MgP2qP
            source_type: api_record
            title: 中国历代人物传记资料库：王化（CBDB 326927）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326927&o=json
            external_identifier: CBDB:326927
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cXHv7PKynVHMNbBR9FMZQr
        status: active
        display_name: 王化
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王周

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王周 | accepted |
| bio.summary | 王周，明人物。嘉靖四十一年進士，籍贯秀水。（中国历代人物传记资料库 CBDB 326924） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_4j28cTB4FbkC46frs3J8PW | 王俸 | accepted |
| children | p_5xAVa3shVSKKWDozY77843 | 王儼 | accepted |
| children | p_cXHv7PKynVHMNbBR9FMZQr | 王化 | accepted |

## 外部来源

- [中国历代人物传记资料库：王俸（CBDB 204993）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204993&o=json)
- [中国历代人物传记资料库：王化（CBDB 326927）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326927&o=json)
- [中国历代人物传记资料库：王儼（CBDB 326928）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326928&o=json)
- [中国历代人物传记资料库：王周（CBDB 326924）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326924&o=json)
