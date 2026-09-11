---
schema: wang-person/v1
id: p_P62PwvTysFNxEPkUXBg1Fm
status: active
merged_into: null
display_name: 王德新
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HyFfUvcPRnUuvHs8KNQ6F4
        subject_person_id: p_P62PwvTysFNxEPkUXBg1Fm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德新
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KJZN5etHtXciN26CScik3Q
          claim_id: c_HyFfUvcPRnUuvHs8KNQ6F4
          source_id: s_Ldza8xWSRy9H786ZMeZvJ7
          stance: supports
          locator: CBDB:126819
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126819）
          source: &a1
            id: s_Ldza8xWSRy9H786ZMeZvJ7
            source_type: api_record
            title: 中国历代人物传记资料库：王德新（CBDB 126819）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126819&o=json
            external_identifier: CBDB:126819
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.229Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ydxLCYnLWmMnSDAm8NpJMh
        subject_person_id: p_P62PwvTysFNxEPkUXBg1Fm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sPQXNdFbzx3vg1vHAzvJZH
          claim_id: c_ydxLCYnLWmMnSDAm8NpJMh
          source_id: s_Ldza8xWSRy9H786ZMeZvJ7
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_s8MQ6EaKHxcp4kMiSPheha
        subject_person_id: p_BmJiYvE4u2XkahiPTHU6KL
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_P62PwvTysFNxEPkUXBg1Fm
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qU2sNIZotwg5ABUzRVfoM6
          claim_id: c_s8MQ6EaKHxcp4kMiSPheha
          source_id: s_uSUMFbvqSgs75BKZXo23c6
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第二甲第六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_uSUMFbvqSgs75BKZXo23c6
            source_type: api_record
            title: 中国历代人物传记资料库：王衡（CBDB 218701）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218701&o=json
            external_identifier: CBDB:218701
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.267Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BmJiYvE4u2XkahiPTHU6KL
        status: active
        display_name: 王衡
        merged_into_person_id: null
    - claim:
        id: c_sRTH-3orK1zIPagGa-R_vw
        subject_person_id: p_ecFrd5qerDXA9XmtuZkUzM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_P62PwvTysFNxEPkUXBg1Fm
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xXQ8xX2yE1T-7wioCF2rFw
          claim_id: c_sRTH-3orK1zIPagGa-R_vw
          source_id: s_WxYJKMb12xXJ9o4cKteH53
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第二甲第六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_WxYJKMb12xXJ9o4cKteH53
            source_type: api_record
            title: 中国历代人物传记资料库：王宗舜（CBDB 218702）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218702&o=json
            external_identifier: CBDB:218702
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.269Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ecFrd5qerDXA9XmtuZkUzM
        status: active
        display_name: 王宗舜
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王德新

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德新 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_BmJiYvE4u2XkahiPTHU6KL | 王衡 | accepted |
| ancestors | p_ecFrd5qerDXA9XmtuZkUzM | 王宗舜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德新（CBDB 126819）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126819&o=json)
- [中国历代人物传记资料库：王衡（CBDB 218701）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218701&o=json)
- [中国历代人物传记资料库：王宗舜（CBDB 218702）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218702&o=json)
