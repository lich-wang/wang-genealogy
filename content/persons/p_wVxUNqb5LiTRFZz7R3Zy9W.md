---
schema: wang-person/v1
id: p_wVxUNqb5LiTRFZz7R3Zy9W
status: active
merged_into: null
display_name: 王世福
cbdb_id: 314591
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rn8XJvuh6Nx1Uiikf56ZmQ
        subject_person_id: p_wVxUNqb5LiTRFZz7R3Zy9W
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世福，明人物。中国历代人物传记资料库（CBDB）以人物编号 314591 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_IEVNG0xSZv33IZ90zCaePG
          claim_id: c_rn8XJvuh6Nx1Uiikf56ZmQ
          source_id: s_8uLMw84HLbQRFATLZa9q1x
          stance: supports
          locator: CBDB:314591
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_8uLMw84HLbQRFATLZa9q1x
            source_type: api_record
            title: 中国历代人物传记资料库：王世福（CBDB 314591）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314591&o=json
            external_identifier: CBDB:314591
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_o8GeJuRpz5qFV4K6ouYpgr
        subject_person_id: p_wVxUNqb5LiTRFZz7R3Zy9W
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世福
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_8YP4EzcWQTWT34b1UxdFn7
          claim_id: c_o8GeJuRpz5qFV4K6ouYpgr
          source_id: s_8uLMw84HLbQRFATLZa9q1x
          stance: supports
          locator: CBDB:314591
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_8uLMw84HLbQRFATLZa9q1x
            source_type: api_record
            title: 中国历代人物传记资料库：王世福（CBDB 314591）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314591&o=json
            external_identifier: CBDB:314591
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_tOJQyPUmtVeRMUjl2RZu3i
        subject_person_id: p_wVxUNqb5LiTRFZz7R3Zy9W
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2wQZ4HH3qUsaPxm7C4niKV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VUR9dL3vM5SwKvXg6H11Fe
          claim_id: c_tOJQyPUmtVeRMUjl2RZu3i
          source_id: s_CbSVVPUWeW1qptLLBhXx8A
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第一百九十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CbSVVPUWeW1qptLLBhXx8A
            source_type: api_record
            title: 中国历代人物传记资料库：王言（CBDB 204113）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204113&o=json
            external_identifier: CBDB:204113
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.818Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2wQZ4HH3qUsaPxm7C4niKV
        status: active
        display_name: 王言
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王世福

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王世福，明人物。中国历代人物传记资料库（CBDB）以人物编号 314591 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王世福 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_2wQZ4HH3qUsaPxm7C4niKV | 王言 | accepted |

## 外部来源

- [中国历代人物传记资料库：王世福（CBDB 314591）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314591&o=json)
- [中国历代人物传记资料库：王言（CBDB 204113）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204113&o=json)
