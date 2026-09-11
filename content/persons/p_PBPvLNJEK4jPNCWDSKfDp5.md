---
schema: wang-person/v1
id: p_PBPvLNJEK4jPNCWDSKfDp5
status: active
merged_into: null
display_name: 王春復
cbdb_id: 203136
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Q5ooeULdr4Vqgj37razk3b
        subject_person_id: p_PBPvLNJEK4jPNCWDSKfDp5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王春復（生于1507年），明人物。中国历代人物传记资料库（CBDB）以人物编号 203136 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_yWr7bHfcTgu1xFl75JdBpy
          claim_id: c_Q5ooeULdr4Vqgj37razk3b
          source_id: s_NfGK3AwkKbEP1unU1PKMcc
          stance: supports
          locator: CBDB:203136
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_NfGK3AwkKbEP1unU1PKMcc
            source_type: api_record
            title: 中国历代人物传记资料库：王春復（CBDB 203136）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203136&o=json
            external_identifier: CBDB:203136
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_3dYJAyF6MCAwor634Q5UXu
        subject_person_id: p_PBPvLNJEK4jPNCWDSKfDp5
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1507年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1507-01-01
            latest: 1507-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FdfFXhgVwTLanuqzmdh1H3
          claim_id: c_3dYJAyF6MCAwor634Q5UXu
          source_id: s_NfGK3AwkKbEP1unU1PKMcc
          stance: supports
          locator: CBDB:203136
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1507
          source:
            id: s_NfGK3AwkKbEP1unU1PKMcc
            source_type: api_record
            title: 中国历代人物传记资料库：王春復（CBDB 203136）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203136&o=json
            external_identifier: CBDB:203136
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_54n78LUjB1rjsoNtXYvfps
        subject_person_id: p_PBPvLNJEK4jPNCWDSKfDp5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王春復
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_7AK1cjQ26pgieJzcFBJA2u
          claim_id: c_54n78LUjB1rjsoNtXYvfps
          source_id: s_NfGK3AwkKbEP1unU1PKMcc
          stance: supports
          locator: CBDB:203136
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1507
          source:
            id: s_NfGK3AwkKbEP1unU1PKMcc
            source_type: api_record
            title: 中国历代人物传记资料库：王春復（CBDB 203136）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203136&o=json
            external_identifier: CBDB:203136
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__rQgbjFd8gbRnF4kpoeRE4
        subject_person_id: p_djPzJATqP8N3fAgZuiGdme
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PBPvLNJEK4jPNCWDSKfDp5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U_BaWOxyl630bmI3nZJADM
          claim_id: c__rQgbjFd8gbRnF4kpoeRE4
          source_id: s_VF36nge6KQN5v437W8CR1Z
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第三甲第六十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VF36nge6KQN5v437W8CR1Z
            source_type: api_record
            title: 中国历代人物传记资料库：王琥（CBDB 300354）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300354&o=json
            external_identifier: CBDB:300354
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.625Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_djPzJATqP8N3fAgZuiGdme
        status: active
        display_name: 王琥
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_-5kbZZK-JLGxIC0g470FXc
        subject_person_id: p_AbVcjzx5u1oivmsbfrqHB3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_PBPvLNJEK4jPNCWDSKfDp5
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EyEZV5aewC3P4xUZwdPZ5Y
          claim_id: c_-5kbZZK-JLGxIC0g470FXc
          source_id: s_EW8kQ4gtTTL5QRFGJSxTjX
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第三甲第六十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_EW8kQ4gtTTL5QRFGJSxTjX
            source_type: api_record
            title: 中国历代人物传记资料库：王和（CBDB 300353）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300353&o=json
            external_identifier: CBDB:300353
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.622Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AbVcjzx5u1oivmsbfrqHB3
        status: active
        display_name: 王和
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王春復

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王春復（生于1507年），明人物。中国历代人物传记资料库（CBDB）以人物编号 203136 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| birth.date | 1507年 | accepted |
| name.primary | 王春復 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_djPzJATqP8N3fAgZuiGdme | 王琥 | accepted |
| ancestors | p_AbVcjzx5u1oivmsbfrqHB3 | 王和 | accepted |

## 外部来源

- [中国历代人物传记资料库：王春復（CBDB 203136）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203136&o=json)
- [中国历代人物传记资料库：王和（CBDB 300353）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300353&o=json)
- [中国历代人物传记资料库：王琥（CBDB 300354）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300354&o=json)
