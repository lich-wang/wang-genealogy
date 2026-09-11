---
schema: wang-person/v1
id: p_5zhGEimBSRibG2X8DZoDuG
status: active
merged_into: null
display_name: 王嘉元
cbdb_id: 202937
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_stWPHNp2PgLvzV236XetED
        subject_person_id: p_5zhGEimBSRibG2X8DZoDuG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉元（生于1508年），明人物。中国历代人物传记资料库（CBDB）以人物编号 202937 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_MHAX6_Th3UKUkClvK8oSc_
          claim_id: c_stWPHNp2PgLvzV236XetED
          source_id: s_jseNDm4CYQRwHCd3tfDrS1
          stance: supports
          locator: CBDB:202937
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_jseNDm4CYQRwHCd3tfDrS1
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉元（CBDB 202937）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202937&o=json
            external_identifier: CBDB:202937
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_3Ff36xPWjX3Vvw7GY4FWTn
        subject_person_id: p_5zhGEimBSRibG2X8DZoDuG
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1508年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1508-01-01
            latest: 1508-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uNVDx26xRBDm9pUMF5HwTT
          claim_id: c_3Ff36xPWjX3Vvw7GY4FWTn
          source_id: s_jseNDm4CYQRwHCd3tfDrS1
          stance: supports
          locator: CBDB:202937
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1508
          source:
            id: s_jseNDm4CYQRwHCd3tfDrS1
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉元（CBDB 202937）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202937&o=json
            external_identifier: CBDB:202937
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_n3d5Rcf9AqKh9NjqiQt9Zb
        subject_person_id: p_5zhGEimBSRibG2X8DZoDuG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_26nZrydEJri64cCvNKeb2U
          claim_id: c_n3d5Rcf9AqKh9NjqiQt9Zb
          source_id: s_jseNDm4CYQRwHCd3tfDrS1
          stance: supports
          locator: CBDB:202937
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1508
          source:
            id: s_jseNDm4CYQRwHCd3tfDrS1
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉元（CBDB 202937）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202937&o=json
            external_identifier: CBDB:202937
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Z0PwYhiPmVRYf4DRodjKny
        subject_person_id: p_a6D7qHy2jxWGfawEs3gBYP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5zhGEimBSRibG2X8DZoDuG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-gBft2Mavk9TROt9iGkg0L
          claim_id: c_Z0PwYhiPmVRYf4DRodjKny
          source_id: s_cSvRQn84xMP3ZrUnt4Zgb2
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第八十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_cSvRQn84xMP3ZrUnt4Zgb2
            source_type: api_record
            title: 中国历代人物传记资料库：王璧（CBDB 297017）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297017&o=json
            external_identifier: CBDB:297017
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.540Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_a6D7qHy2jxWGfawEs3gBYP
        status: active
        display_name: 王璧
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_LTSAT3hFo-Lja_avpyabYW
        subject_person_id: p_5aaPocJjVfpX24FZAV17rS
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5zhGEimBSRibG2X8DZoDuG
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N8dTmwuqyBYN_n8_ly1DsC
          claim_id: c_LTSAT3hFo-Lja_avpyabYW
          source_id: s_agwSEDVYMSq6DXoQuXA7JR
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第八十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_agwSEDVYMSq6DXoQuXA7JR
            source_type: api_record
            title: 中国历代人物传记资料库：王應嵩（CBDB 297016）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297016&o=json
            external_identifier: CBDB:297016
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_5aaPocJjVfpX24FZAV17rS
        status: active
        display_name: 王應嵩
        merged_into_person_id: null
    - claim:
        id: c_ZcyHV3owIS_6LTUl_cwntJ
        subject_person_id: p_y3uDoq5DyF6vq6rEudHWGt
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5zhGEimBSRibG2X8DZoDuG
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YUhg40_5gQ8Ktm_b-GNtQi
          claim_id: c_ZcyHV3owIS_6LTUl_cwntJ
          source_id: s_MrRnRhQMcZV9LPapED9sD8
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第八十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_MrRnRhQMcZV9LPapED9sD8
            source_type: api_record
            title: 中国历代人物传记资料库：王永鼐（CBDB 297015）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297015&o=json
            external_identifier: CBDB:297015
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_y3uDoq5DyF6vq6rEudHWGt
        status: active
        display_name: 王永鼐
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王嘉元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王嘉元（生于1508年），明人物。中国历代人物传记资料库（CBDB）以人物编号 202937 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| birth.date | 1508年 | accepted |
| name.primary | 王嘉元 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_a6D7qHy2jxWGfawEs3gBYP | 王璧 | accepted |
| ancestors | p_5aaPocJjVfpX24FZAV17rS | 王應嵩 | accepted |
| ancestors | p_y3uDoq5DyF6vq6rEudHWGt | 王永鼐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璧（CBDB 297017）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297017&o=json)
- [中国历代人物传记资料库：王嘉元（CBDB 202937）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202937&o=json)
- [中国历代人物传记资料库：王應嵩（CBDB 297016）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297016&o=json)
- [中国历代人物传记资料库：王永鼐（CBDB 297015）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297015&o=json)
