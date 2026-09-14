---
schema: wang-person/v1
id: p_p6a6PegDLKhh6e58pdYza1
status: active
merged_into: null
display_name: 王稷
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EVkJ3NyzHy29dKrvYfGrGB
        subject_person_id: p_p6a6PegDLKhh6e58pdYza1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王稷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DCJ4APAs34VNim8ZKfMhhF
          claim_id: c_EVkJ3NyzHy29dKrvYfGrGB
          source_id: s_XfwDNprGL5qCa8v6BLE3vX
          stance: supports
          locator: CBDB:332959
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（332959）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Te344DpwKqzjuX5rN2brWN
        subject_person_id: p_p6a6PegDLKhh6e58pdYza1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王稷，明人物。嘉靖四十四年進士，籍贯南陽衛。（中国历代人物传记资料库 CBDB 332959）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_n_6P1zAsZl_9d2E5yFdLA9
          claim_id: c_Te344DpwKqzjuX5rN2brWN
          source_id: s_XfwDNprGL5qCa8v6BLE3vX
          stance: supports
          locator: CBDB:332959
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
          source: *a1
      object_person:
        id: p_wfvFAbMeeGg2JCRsQFqRMn
        status: active
        display_name: 王家卿
        merged_into_person_id: null
    - claim:
        id: c_4UVX76-ohhRvMbbJDWMVF6
        subject_person_id: p_p6a6PegDLKhh6e58pdYza1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Dptj7idKPKe4A6Ah2yLWgv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rozCtVzjWyuvRZ4u4b4X3E
          claim_id: c_4UVX76-ohhRvMbbJDWMVF6
          source_id: s_UajKyD48FSYpIYsHL1qdYC
          stance: supports
          locator: CBDB：兄弟 王家卿（205423）之父／母 王稷
          quotation: null
          interpretation_note: 由兄弟关系推断：王家脩 与 王家卿 为同胞（CBDB 记「兄」），王家卿 之父／母即 王家脩 之父／母。
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
        id: c_-McomNWSfJwuqIL5Fj63CN
        subject_person_id: p_p6a6PegDLKhh6e58pdYza1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KMpzZ5dpsqaEMsN2E6PP3T
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fdYW_Jn2T2ogKdu0pUIuak
          claim_id: c_-McomNWSfJwuqIL5Fj63CN
          source_id: s_cFh4swKiC7hTYCZyGZoO0R
          stance: supports
          locator: CBDB：兄弟 王家卿（205423）之父／母 王稷
          quotation: null
          interpretation_note: 由兄弟关系推断：王家慶 与 王家卿 为同胞（CBDB 记「兄」），王家卿 之父／母即 王家慶 之父／母。
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
        id: c_lEramFqEy3a4TRbZ-Sg7sE
        subject_person_id: p_p6a6PegDLKhh6e58pdYza1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mLgxXCozHQCNzKLeL97rHv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3snC6j1UzuMJt2yqdMPlY7
          claim_id: c_lEramFqEy3a4TRbZ-Sg7sE
          source_id: s_AOXw6fV9WjiRofdVmuJMME
          stance: supports
          locator: CBDB：兄弟 王家卿（205423）之父／母 王稷
          quotation: null
          interpretation_note: 由兄弟关系推断：王家民 与 王家卿 为同胞（CBDB 记「兄」），王家卿 之父／母即 王家民 之父／母。
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
        id: c__9dPGMOLJFh1M3Kj8Pj_YL
        subject_person_id: p_p6a6PegDLKhh6e58pdYza1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xHr3XaRrT84QgHCS6x3jos
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JnWs75CQqKixfQWfSQPOy_
          claim_id: c__9dPGMOLJFh1M3Kj8Pj_YL
          source_id: s_HJql--11_xBPmEy2co2yhO
          stance: supports
          locator: CBDB：兄弟 王家卿（205423）之父／母 王稷
          quotation: null
          interpretation_note: 由兄弟关系推断：王家仁 与 王家卿 为同胞（CBDB 记「兄」），王家卿 之父／母即 王家仁 之父／母。
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
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王稷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王稷 | accepted |
| bio.summary | 王稷，明人物。嘉靖四十四年進士，籍贯南陽衛。（中国历代人物传记资料库 CBDB 332959） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_wfvFAbMeeGg2JCRsQFqRMn | 王家卿 | accepted |
| children | p_Dptj7idKPKe4A6Ah2yLWgv | 王家脩 | accepted |
| children | p_KMpzZ5dpsqaEMsN2E6PP3T | 王家慶 | accepted |
| children | p_mLgxXCozHQCNzKLeL97rHv | 王家民 | accepted |
| children | p_xHr3XaRrT84QgHCS6x3jos | 王家仁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王稷（CBDB 332959）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332959&o=json)
- [中国历代人物传记资料库：王家民（CBDB 332964）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332964&o=json)
- [中国历代人物传记资料库：王家慶（CBDB 332967）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332967&o=json)
- [中国历代人物传记资料库：王家仁（CBDB 332965）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332965&o=json)
- [中国历代人物传记资料库：王家脩（CBDB 332968）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332968&o=json)
