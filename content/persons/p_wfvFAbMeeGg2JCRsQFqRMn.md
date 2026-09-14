---
schema: wang-person/v1
id: p_wfvFAbMeeGg2JCRsQFqRMn
status: active
merged_into: null
display_name: 王家卿
cbdb_id: 205423
revision: 8
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FA5PGa1z2hmkwc1asgsx35
        subject_person_id: p_wfvFAbMeeGg2JCRsQFqRMn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家卿（生于1522年），明人物。明清進士進士，籍贯南陽衛，入仕進士。（中国历代人物传记资料库 CBDB 205423）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_gkDOH_eUJKuwQsjokwbA9w
          claim_id: c_FA5PGa1z2hmkwc1asgsx35
          source_id: s_8v3CG1D962ZT16dNsuNfQU
          stance: supports
          locator: CBDB:205423
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_8v3CG1D962ZT16dNsuNfQU
            source_type: api_record
            title: 中国历代人物传记资料库：王家卿（CBDB 205423）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205423&o=json
            external_identifier: CBDB:205423
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_LznFL45BUN91c3X9ZzSs6e
        subject_person_id: p_wfvFAbMeeGg2JCRsQFqRMn
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1522年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1522-01-01
            latest: 1522-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_N2Kq7kgpJDNV4zfBv5ymCp
          claim_id: c_LznFL45BUN91c3X9ZzSs6e
          source_id: s_8v3CG1D962ZT16dNsuNfQU
          stance: supports
          locator: CBDB:205423
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1522
          source:
            id: s_8v3CG1D962ZT16dNsuNfQU
            source_type: api_record
            title: 中国历代人物传记资料库：王家卿（CBDB 205423）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205423&o=json
            external_identifier: CBDB:205423
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_9t2Z1L7mN3c9xLM6SWmnRY
        subject_person_id: p_wfvFAbMeeGg2JCRsQFqRMn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_6cDXzZ66JT8NJzHEbSAnpZ
          claim_id: c_9t2Z1L7mN3c9xLM6SWmnRY
          source_id: s_8v3CG1D962ZT16dNsuNfQU
          stance: supports
          locator: CBDB:205423
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1522
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_HJ_sl-X__tttTVeyxV1Eo5
        subject_person_id: p_p6a6PegDLKhh6e58pdYza1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wfvFAbMeeGg2JCRsQFqRMn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jnsSkjQnmvVJpBdYSGGXuA
          claim_id: c_HJ_sl-X__tttTVeyxV1Eo5
          source_id: s_XfwDNprGL5qCa8v6BLE3vX
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第二百五十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_XfwDNprGL5qCa8v6BLE3vX
            source_type: api_record
            title: 中国历代人物传记资料库：王稷（CBDB 332959）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332959&o=json
            external_identifier: CBDB:332959
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.389Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_p6a6PegDLKhh6e58pdYza1
        status: active
        display_name: 王稷
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_6IsmbHP3aAKiUya6jFaVNk
        subject_person_id: p_ckXg1snXR9eZpgBTHaU1bX
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_wfvFAbMeeGg2JCRsQFqRMn
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HCjugI_VKLsA6cHphQzUrX
          claim_id: c_6IsmbHP3aAKiUya6jFaVNk
          source_id: s_H3rDz3jf9AqS3y8r6mt9DX
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第二百五十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_H3rDz3jf9AqS3y8r6mt9DX
            source_type: api_record
            title: 中国历代人物传记资料库：王繡（CBDB 332958）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332958&o=json
            external_identifier: CBDB:332958
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.388Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ckXg1snXR9eZpgBTHaU1bX
        status: active
        display_name: 王繡
        merged_into_person_id: null
    - claim:
        id: c_CwVSb4dbQegeNrsezYG1Um
        subject_person_id: p_XgxkFgvNXHpPkXYhFZf8BA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_wfvFAbMeeGg2JCRsQFqRMn
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ovlsIo05PLG3XUMUoAVwbl
          claim_id: c_CwVSb4dbQegeNrsezYG1Um
          source_id: s_Z61yWHbW6hyN58P9pqs1ay
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第二百五十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Z61yWHbW6hyN58P9pqs1ay
            source_type: api_record
            title: 中国历代人物传记资料库：王銳（CBDB 332957）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332957&o=json
            external_identifier: CBDB:332957
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.388Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_XgxkFgvNXHpPkXYhFZf8BA
        status: active
        display_name: 王銳
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_FIjhWrU3fyVBzIJehTFdZI
        subject_person_id: p_Dptj7idKPKe4A6Ah2yLWgv
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wfvFAbMeeGg2JCRsQFqRMn
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uEA1WK7Yiy_rzyJR9VvegA
          claim_id: c_FIjhWrU3fyVBzIJehTFdZI
          source_id: s_UajKyD48FSYpIYsHL1qdYC
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205423 王家卿）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_UajKyD48FSYpIYsHL1qdYC
            source_type: api_record
            title: 中国历代人物传记资料库：王家脩（CBDB 332968）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332968&o=json
            external_identifier: CBDB:332968
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Dptj7idKPKe4A6Ah2yLWgv
        status: active
        display_name: 王家脩
        merged_into_person_id: null
    - claim:
        id: c_qewVOZVAyxnsov4C6vVJcy
        subject_person_id: p_KMpzZ5dpsqaEMsN2E6PP3T
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wfvFAbMeeGg2JCRsQFqRMn
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ed6UYTALdhXX8Ck1ZHCriS
          claim_id: c_qewVOZVAyxnsov4C6vVJcy
          source_id: s_cFh4swKiC7hTYCZyGZoO0R
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205423 王家卿）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_cFh4swKiC7hTYCZyGZoO0R
            source_type: api_record
            title: 中国历代人物传记资料库：王家慶（CBDB 332967）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332967&o=json
            external_identifier: CBDB:332967
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KMpzZ5dpsqaEMsN2E6PP3T
        status: active
        display_name: 王家慶
        merged_into_person_id: null
    - claim:
        id: c_SQAwPIzK6eYf7fkhHFPAWp
        subject_person_id: p_mLgxXCozHQCNzKLeL97rHv
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wfvFAbMeeGg2JCRsQFqRMn
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dfIvEM6n_z0sQ0nq6qg_SB
          claim_id: c_SQAwPIzK6eYf7fkhHFPAWp
          source_id: s_AOXw6fV9WjiRofdVmuJMME
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205423 王家卿）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_AOXw6fV9WjiRofdVmuJMME
            source_type: api_record
            title: 中国历代人物传记资料库：王家民（CBDB 332964）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332964&o=json
            external_identifier: CBDB:332964
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mLgxXCozHQCNzKLeL97rHv
        status: active
        display_name: 王家民
        merged_into_person_id: null
    - claim:
        id: c_S4Kj5fGNDUojYrL5H3NSxa
        subject_person_id: p_wfvFAbMeeGg2JCRsQFqRMn
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xHr3XaRrT84QgHCS6x3jos
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BaQA2GBpPw3nVzavly-xqJ
          claim_id: c_S4Kj5fGNDUojYrL5H3NSxa
          source_id: s_HJql--11_xBPmEy2co2yhO
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205423 王家卿）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_HJql--11_xBPmEy2co2yhO
            source_type: api_record
            title: 中国历代人物传记资料库：王家仁（CBDB 332965）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332965&o=json
            external_identifier: CBDB:332965
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xHr3XaRrT84QgHCS6x3jos
        status: active
        display_name: 王家仁
        merged_into_person_id: null
---

# 王家卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王家卿（生于1522年），明人物。明清進士進士，籍贯南陽衛，入仕進士。（中国历代人物传记资料库 CBDB 205423） | accepted |
| birth.date | 1522年 | accepted |
| name.primary | 王家卿 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_p6a6PegDLKhh6e58pdYza1 | 王稷 | accepted |
| ancestors | p_ckXg1snXR9eZpgBTHaU1bX | 王繡 | accepted |
| ancestors | p_XgxkFgvNXHpPkXYhFZf8BA | 王銳 | accepted |
| other | p_Dptj7idKPKe4A6Ah2yLWgv | 王家脩 | accepted |
| other | p_KMpzZ5dpsqaEMsN2E6PP3T | 王家慶 | accepted |
| other | p_mLgxXCozHQCNzKLeL97rHv | 王家民 | accepted |
| other | p_xHr3XaRrT84QgHCS6x3jos | 王家仁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王稷（CBDB 332959）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332959&o=json)
- [中国历代人物传记资料库：王家民（CBDB 332964）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332964&o=json)
- [中国历代人物传记资料库：王家卿（CBDB 205423）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205423&o=json)
- [中国历代人物传记资料库：王家慶（CBDB 332967）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332967&o=json)
- [中国历代人物传记资料库：王家仁（CBDB 332965）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332965&o=json)
- [中国历代人物传记资料库：王家脩（CBDB 332968）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332968&o=json)
- [中国历代人物传记资料库：王銳（CBDB 332957）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332957&o=json)
- [中国历代人物传记资料库：王繡（CBDB 332958）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332958&o=json)
