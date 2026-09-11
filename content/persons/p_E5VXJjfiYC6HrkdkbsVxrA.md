---
schema: wang-person/v1
id: p_E5VXJjfiYC6HrkdkbsVxrA
status: active
merged_into: null
display_name: 王碧蘭
cbdb_id: 122911
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3YoBpmKTSWR9HZWNZiWUU6
        subject_person_id: p_E5VXJjfiYC6HrkdkbsVxrA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王碧蘭，清人物。中国历代人物传记资料库（CBDB）以人物编号 122911 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_3NuEGssRTj4-FQ8jMZlGwc
          claim_id: c_3YoBpmKTSWR9HZWNZiWUU6
          source_id: s_vqeZgLMkq1ViatnCPd6vxi
          stance: supports
          locator: CBDB:122911
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_vqeZgLMkq1ViatnCPd6vxi
            source_type: api_record
            title: 中国历代人物传记资料库：王碧蘭（CBDB 122911）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=122911&o=json
            external_identifier: CBDB:122911
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_yq16v53JGnKCgjiPNVFVLM
        subject_person_id: p_E5VXJjfiYC6HrkdkbsVxrA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王碧蘭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_yW5eDbXJKr5N5DjMF7oQMf
          claim_id: c_yq16v53JGnKCgjiPNVFVLM
          source_id: s_vqeZgLMkq1ViatnCPd6vxi
          stance: supports
          locator: CBDB:122911
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1901-2000）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_vqeZgLMkq1ViatnCPd6vxi
            source_type: api_record
            title: 中国历代人物传记资料库：王碧蘭（CBDB 122911）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=122911&o=json
            external_identifier: CBDB:122911
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_7iGvxf_MVE5IotjPfz3ykO
        subject_person_id: p_E5VXJjfiYC6HrkdkbsVxrA
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_sdQ41DL1vduMjA7H2vCPvR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YB5sry2dpMUo38abudDhLH
          claim_id: c_7iGvxf_MVE5IotjPfz3ykO
          source_id: s_p2iMZ8qmjoAbsHPmf3ffYp
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #5317：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_p2iMZ8qmjoAbsHPmf3ffYp
            source_type: api_record
            title: 中国历代人物传记资料库：俞嘉謨（CBDB 122912）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=122912&o=json
            external_identifier: CBDB:122912
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_sdQ41DL1vduMjA7H2vCPvR
        status: active
        display_name: 俞嘉謨
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王碧蘭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王碧蘭，清人物。中国历代人物传记资料库（CBDB）以人物编号 122911 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王碧蘭 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_sdQ41DL1vduMjA7H2vCPvR | 俞嘉謨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王碧蘭（CBDB 122911）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=122911&o=json)
- [中国历代人物传记资料库：俞嘉謨（CBDB 122912）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=122912&o=json)
