---
schema: wang-person/v1
id: p_JEUpyam7C1Pm8JC9r4xGZ3
status: active
merged_into: null
display_name: 王舉
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EdjKzi41rMB2JuACr8UFUL
        subject_person_id: p_JEUpyam7C1Pm8JC9r4xGZ3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_U37YAxph9GN1J77354e4g6
          claim_id: c_EdjKzi41rMB2JuACr8UFUL
          source_id: s_L6P7ygH343rxMdn3XqKfCG
          stance: supports
          locator: CBDB:199783
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199783）
          source: &a1
            id: s_L6P7ygH343rxMdn3XqKfCG
            source_type: api_record
            title: 中国历代人物传记资料库：王舉（CBDB 199783）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199783&o=json
            external_identifier: CBDB:199783
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.579Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_9bKAADo3oq1GMBLA641t45
        subject_person_id: p_JEUpyam7C1Pm8JC9r4xGZ3
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1441年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y6TWHA6ABtMPQ8fcbHT9CE
          claim_id: c_9bKAADo3oq1GMBLA641t45
          source_id: s_L6P7ygH343rxMdn3XqKfCG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ajw1Agq5AwyEzn2PBnkv2v
        subject_person_id: p_JEUpyam7C1Pm8JC9r4xGZ3
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
        - id: cs_nA46C8XMoby6b5QVpT6zE9
          claim_id: c_Ajw1Agq5AwyEzn2PBnkv2v
          source_id: s_L6P7ygH343rxMdn3XqKfCG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__HKktwuJu5SqDtwQKuGtlB
        subject_person_id: p_uBzLRGUwS4yvUJPvtC7Mfv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JEUpyam7C1Pm8JC9r4xGZ3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_y4EYz1BdKWBtX5RAohdwg2
          claim_id: c__HKktwuJu5SqDtwQKuGtlB
          source_id: s_KMw9QPDX84rB4MUKxnL14K
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第三甲第九十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_KMw9QPDX84rB4MUKxnL14K
            source_type: api_record
            title: 中国历代人物传记资料库：王傑（CBDB 249596）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249596&o=json
            external_identifier: CBDB:249596
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.182Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_uBzLRGUwS4yvUJPvtC7Mfv
        status: active
        display_name: 王傑
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_g51xDr4MHoMOD0aVR4QFV2
        subject_person_id: p_hMqJFCXEHXDTPbh4yzS2wD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_JEUpyam7C1Pm8JC9r4xGZ3
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tEWabGJys0V3-WKOdZnsMr
          claim_id: c_g51xDr4MHoMOD0aVR4QFV2
          source_id: s_b4agzCPNUJ21EsEzD9Sh8y
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第三甲第九十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_b4agzCPNUJ21EsEzD9Sh8y
            source_type: api_record
            title: 中国历代人物传记资料库：王志剛（CBDB 249595）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249595&o=json
            external_identifier: CBDB:249595
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.181Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hMqJFCXEHXDTPbh4yzS2wD
        status: active
        display_name: 王志剛
        merged_into_person_id: null
    - claim:
        id: c_eMDv4Mz7BR3smqyrcTotXv
        subject_person_id: p_p7Nju4nBEKVHt14JCWVPnr
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_JEUpyam7C1Pm8JC9r4xGZ3
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Aozcgz3MJRRIqXUituSaNe
          claim_id: c_eMDv4Mz7BR3smqyrcTotXv
          source_id: s_rF8e7572D57rAhqb26AHWU
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第三甲第九十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rF8e7572D57rAhqb26AHWU
            source_type: api_record
            title: 中国历代人物传记资料库：王直興（CBDB 249594）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249594&o=json
            external_identifier: CBDB:249594
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_p7Nju4nBEKVHt14JCWVPnr
        status: active
        display_name: 王直興
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王舉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王舉 | accepted |
| birth.date | 1441年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uBzLRGUwS4yvUJPvtC7Mfv | 王傑 | accepted |
| ancestors | p_hMqJFCXEHXDTPbh4yzS2wD | 王志剛 | accepted |
| ancestors | p_p7Nju4nBEKVHt14JCWVPnr | 王直興 | accepted |

## 外部来源

- [中国历代人物传记资料库：王傑（CBDB 249596）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249596&o=json)
- [中国历代人物传记资料库：王舉（CBDB 199783）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199783&o=json)
- [中国历代人物传记资料库：王直興（CBDB 249594）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249594&o=json)
- [中国历代人物传记资料库：王志剛（CBDB 249595）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249595&o=json)
