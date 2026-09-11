---
schema: wang-person/v1
id: p_ECAKHMRDs8Na2Nz3MQ9W4z
status: active
merged_into: null
display_name: 王敬先
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CCgXUuaFAHDx9CzyK3LPkw
        subject_person_id: p_ECAKHMRDs8Na2Nz3MQ9W4z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬先
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hND3TRr6u116wThPjq1JWF
          claim_id: c_CCgXUuaFAHDx9CzyK3LPkw
          source_id: s_8oKAKyhYypbzs43icDaArH
          stance: supports
          locator: CBDB:252672
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（252672）
          source: &a1
            id: s_8oKAKyhYypbzs43icDaArH
            source_type: api_record
            title: 中国历代人物传记资料库：王敬先（CBDB 252672）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252672&o=json
            external_identifier: CBDB:252672
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.271Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QCzDN8dNrQ2PEvpv2dobv2
        subject_person_id: p_ECAKHMRDs8Na2Nz3MQ9W4z
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
        - id: cs_bySX9Rk7sW6DcrwS877Sbm
          claim_id: c_QCzDN8dNrQ2PEvpv2dobv2
          source_id: s_8oKAKyhYypbzs43icDaArH
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
  ancestors: []
  descendants:
    - claim:
        id: c__2boz_jAaaLEkP-vc0EIqO
        subject_person_id: p_ECAKHMRDs8Na2Nz3MQ9W4z
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Ar8Jm82UPjkwQTQshe4Qjp
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1qllUi7hV290O7CBEPvitg
          claim_id: c__2boz_jAaaLEkP-vc0EIqO
          source_id: s_ySYDtSpmMcv328B7MkqLJE
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第一百零六名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ySYDtSpmMcv328B7MkqLJE
            source_type: api_record
            title: 中国历代人物传记资料库：王和（CBDB 126584）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126584&o=json
            external_identifier: CBDB:126584
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.042Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Ar8Jm82UPjkwQTQshe4Qjp
        status: active
        display_name: 王和
        merged_into_person_id: null
  other: []
---

# 王敬先

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敬先 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_Ar8Jm82UPjkwQTQshe4Qjp | 王和 | accepted |

## 外部来源

- [中国历代人物传记资料库：王和（CBDB 126584）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126584&o=json)
- [中国历代人物传记资料库：王敬先（CBDB 252672）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252672&o=json)
