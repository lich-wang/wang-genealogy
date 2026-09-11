---
schema: wang-person/v1
id: p_jHw1ZP6CKrMSaDwjpFt5do
status: active
merged_into: null
display_name: 王湘娥
cbdb_id: 121031
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Evx5FbpkJRqmtEYbv15J5m
        subject_person_id: p_jHw1ZP6CKrMSaDwjpFt5do
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王湘娥，清人物。中国历代人物传记资料库（CBDB）以人物编号 121031 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_5ZvmiNGvCYBqblERxxclkl
          claim_id: c_Evx5FbpkJRqmtEYbv15J5m
          source_id: s_Hg6QAk76jSzk1x5M9Zxr7S
          stance: supports
          locator: CBDB:121031
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Hg6QAk76jSzk1x5M9Zxr7S
            source_type: api_record
            title: 中国历代人物传记资料库：王湘娥（CBDB 121031）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121031&o=json
            external_identifier: CBDB:121031
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_pFi56v1EhtMX3kuKx7JBQn
        subject_person_id: p_jHw1ZP6CKrMSaDwjpFt5do
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王湘娥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Li8rW8dYwETcPVME5NNpK8
          claim_id: c_pFi56v1EhtMX3kuKx7JBQn
          source_id: s_Hg6QAk76jSzk1x5M9Zxr7S
          stance: supports
          locator: CBDB:121031
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1901-2000）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_Hg6QAk76jSzk1x5M9Zxr7S
            source_type: api_record
            title: 中国历代人物传记资料库：王湘娥（CBDB 121031）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121031&o=json
            external_identifier: CBDB:121031
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_7R0FRYVyJdLd4F-IUO4qrP
        subject_person_id: p_aNsr7zpTw5pr86NiEYQufP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jHw1ZP6CKrMSaDwjpFt5do
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x0Qm3r5St6vUBHS4W-lKnY
          claim_id: c_7R0FRYVyJdLd4F-IUO4qrP
          source_id: s_Hg6QAk76jSzk1x5M9Zxr7S
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #4002, HuWenKai #241：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_aNsr7zpTw5pr86NiEYQufP
        status: active
        display_name: 王果
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_NJcnJmd1SJvctztNQ7aZf8
        subject_person_id: p_jHw1ZP6CKrMSaDwjpFt5do
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_NbcyYvuaXAZPeebLbtb4m9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9SBGyYrb_hrIFBY83n_2jT
          claim_id: c_NJcnJmd1SJvctztNQ7aZf8
          source_id: s_mzOBGhCx80WS3xB_39n0np
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #4002, HuWenKai #241：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_mzOBGhCx80WS3xB_39n0np
            source_type: api_record
            title: 中国历代人物传记资料库：林模（CBDB 121034）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121034&o=json
            external_identifier: CBDB:121034
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_NbcyYvuaXAZPeebLbtb4m9
        status: active
        display_name: 林模
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王湘娥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王湘娥，清人物。中国历代人物传记资料库（CBDB）以人物编号 121031 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王湘娥 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_aNsr7zpTw5pr86NiEYQufP | 王果 | accepted |
| spouses | p_NbcyYvuaXAZPeebLbtb4m9 | 林模 | accepted |

## 外部来源

- [中国历代人物传记资料库：林模（CBDB 121034）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121034&o=json)
- [中国历代人物传记资料库：王湘娥（CBDB 121031）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121031&o=json)
