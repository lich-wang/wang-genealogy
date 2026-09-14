---
schema: wang-person/v1
id: p_EBfbydRv4JZEiVZULEada1
status: active
merged_into: null
display_name: 王寬
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KVysZKVF1AxCuRfaqGUQsL
        subject_person_id: p_EBfbydRv4JZEiVZULEada1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UdHS36Jsn3235D6XkwAizp
          claim_id: c_KVysZKVF1AxCuRfaqGUQsL
          source_id: s_jQthmMXgRSS42CkS1uY4BB
          stance: supports
          locator: CBDB:299909
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（299909）
          source: &a1
            id: s_jQthmMXgRSS42CkS1uY4BB
            source_type: api_record
            title: 中国历代人物传记资料库：王寬（CBDB 299909）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299909&o=json
            external_identifier: CBDB:299909
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.610Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YfmBnuvyeC8TCpZSg3aEMW
        subject_person_id: p_EBfbydRv4JZEiVZULEada1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寬，明人物。嘉靖十七年進士，籍贯安福。（中国历代人物传记资料库 CBDB 299909）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wNqoZkkL32ku5_T_RN-Jsd
          claim_id: c_YfmBnuvyeC8TCpZSg3aEMW
          source_id: s_jQthmMXgRSS42CkS1uY4BB
          stance: supports
          locator: CBDB:299909
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_kY82c2dJdTZTDPJIIIpm4A
        subject_person_id: p_EBfbydRv4JZEiVZULEada1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_acwBn4E2ueYuXmC3T9fy34
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0-7nbIJ4PLZv-p8m_gQB4Q
          claim_id: c_kY82c2dJdTZTDPJIIIpm4A
          source_id: s_5kvfUU16b6b7vdckWofLHL
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第三甲第十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5kvfUU16b6b7vdckWofLHL
            source_type: api_record
            title: 中国历代人物传记资料库：王士翹（CBDB 203106）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203106&o=json
            external_identifier: CBDB:203106
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.775Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_acwBn4E2ueYuXmC3T9fy34
        status: active
        display_name: 王士翹
        merged_into_person_id: null
    - claim:
        id: c_0DHkpBe4kWxAnWblI-7pCw
        subject_person_id: p_EBfbydRv4JZEiVZULEada1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3ezSSXeEgkYBWDcz5Z6Cuy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1Zt1qDMqFVuNRDGzD7lkQX
          claim_id: c_0DHkpBe4kWxAnWblI-7pCw
          source_id: s_NpoVNV19keFINmnSv8OHGX
          stance: supports
          locator: CBDB：兄弟 王士翹（203106）之父／母 王寬
          quotation: null
          interpretation_note: 由兄弟关系推断：王敏 与 王士翹 为同胞（CBDB 记「弟」），王士翹 之父／母即 王敏 之父／母。
          source:
            id: s_NpoVNV19keFINmnSv8OHGX
            source_type: api_record
            title: 中国历代人物传记资料库：王敏（CBDB 299914）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299914&o=json
            external_identifier: CBDB:299914
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3ezSSXeEgkYBWDcz5Z6Cuy
        status: active
        display_name: 王敏
        merged_into_person_id: null
    - claim:
        id: c_TmEhxQet3jyLyFWty5J0Tk
        subject_person_id: p_EBfbydRv4JZEiVZULEada1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VoaruXoEie1KQRFAAj192T
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Uc4kPK2WorbTMg4BPmIKfS
          claim_id: c_TmEhxQet3jyLyFWty5J0Tk
          source_id: s_i22HDqyNwpSFfpUVlwR-oT
          stance: supports
          locator: CBDB：兄弟 王士翹（203106）之父／母 王寬
          quotation: null
          interpretation_note: 由兄弟关系推断：王士俊 与 王士翹 为同胞（CBDB 记「弟」），王士翹 之父／母即 王士俊 之父／母。
          source:
            id: s_i22HDqyNwpSFfpUVlwR-oT
            source_type: api_record
            title: 中国历代人物传记资料库：王士俊（CBDB 299916）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299916&o=json
            external_identifier: CBDB:299916
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VoaruXoEie1KQRFAAj192T
        status: active
        display_name: 王士俊
        merged_into_person_id: null
    - claim:
        id: c_t0sQ2O9H6IbcDjqZZbKtY9
        subject_person_id: p_EBfbydRv4JZEiVZULEada1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bsHa1mTCgV7P78dFSE1khJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BT4Jp7HCyzErHojq6kJ79v
          claim_id: c_t0sQ2O9H6IbcDjqZZbKtY9
          source_id: s_j3Viunvf132MsdSjFiX6n6
          stance: supports
          locator: CBDB：兄弟 王士翹（203106）之父／母 王寬
          quotation: null
          interpretation_note: 由兄弟关系推断：王士翱 与 王士翹 为同胞（CBDB 记「兄」），王士翹 之父／母即 王士翱 之父／母。
          source:
            id: s_j3Viunvf132MsdSjFiX6n6
            source_type: api_record
            title: 中国历代人物传记资料库：王士翱（CBDB 299917）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299917&o=json
            external_identifier: CBDB:299917
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bsHa1mTCgV7P78dFSE1khJ
        status: active
        display_name: 王士翱
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王寬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寬 | accepted |
| bio.summary | 王寬，明人物。嘉靖十七年進士，籍贯安福。（中国历代人物传记资料库 CBDB 299909） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_acwBn4E2ueYuXmC3T9fy34 | 王士翹 | accepted |
| children | p_3ezSSXeEgkYBWDcz5Z6Cuy | 王敏 | accepted |
| children | p_VoaruXoEie1KQRFAAj192T | 王士俊 | accepted |
| children | p_bsHa1mTCgV7P78dFSE1khJ | 王士翱 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寬（CBDB 299909）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299909&o=json)
- [中国历代人物传记资料库：王敏（CBDB 299914）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299914&o=json)
- [中国历代人物传记资料库：王士翱（CBDB 299917）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299917&o=json)
- [中国历代人物传记资料库：王士俊（CBDB 299916）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299916&o=json)
- [中国历代人物传记资料库：王士翹（CBDB 203106）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203106&o=json)
