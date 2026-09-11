---
schema: wang-person/v1
id: p_P7cZrKpwh44EGMwMKR3XMy
status: active
merged_into: null
display_name: 王明時
cbdb_id: 206277
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vFzZWnQzYE6JBx9QRUDWsZ
        subject_person_id: p_P7cZrKpwh44EGMwMKR3XMy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明時（生于1542年），明人物。中国历代人物传记资料库（CBDB）以人物编号 206277 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_meIzPybdIyBXzL1BXC8meC
          claim_id: c_vFzZWnQzYE6JBx9QRUDWsZ
          source_id: s_WbAWa8VuTHZRnxH8MoXERb
          stance: supports
          locator: CBDB:206277
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_WbAWa8VuTHZRnxH8MoXERb
            source_type: api_record
            title: 中国历代人物传记资料库：王明時（CBDB 206277）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206277&o=json
            external_identifier: CBDB:206277
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_mv4hrnnypcvX91GJCc5J8G
        subject_person_id: p_P7cZrKpwh44EGMwMKR3XMy
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1542年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1542-01-01
            latest: 1542-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Mfrm8aeqk4ZB72d7xLrnKe
          claim_id: c_mv4hrnnypcvX91GJCc5J8G
          source_id: s_WbAWa8VuTHZRnxH8MoXERb
          stance: supports
          locator: CBDB:206277
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1542
          source:
            id: s_WbAWa8VuTHZRnxH8MoXERb
            source_type: api_record
            title: 中国历代人物传记资料库：王明時（CBDB 206277）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206277&o=json
            external_identifier: CBDB:206277
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_D6yEJGiZJLecB32QUjRycF
        subject_person_id: p_P7cZrKpwh44EGMwMKR3XMy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明時
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_jTghLDx5gducWcJD7NbDpa
          claim_id: c_D6yEJGiZJLecB32QUjRycF
          source_id: s_WbAWa8VuTHZRnxH8MoXERb
          stance: supports
          locator: CBDB:206277
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1542
          source:
            id: s_WbAWa8VuTHZRnxH8MoXERb
            source_type: api_record
            title: 中国历代人物传记资料库：王明時（CBDB 206277）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206277&o=json
            external_identifier: CBDB:206277
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1SDMDxaR_1zvLS2HdPCX_9
        subject_person_id: p_kNGUEWZhssofqQKCnJW3XK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_P7cZrKpwh44EGMwMKR3XMy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5QaEATmyy8kHc2KZjMRtte
          claim_id: c_1SDMDxaR_1zvLS2HdPCX_9
          source_id: s_Wz1kXuQmT7igr9a14dVx8h
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第二甲第二十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Wz1kXuQmT7igr9a14dVx8h
            source_type: api_record
            title: 中国历代人物传记资料库：王啟芳（CBDB 215722）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215722&o=json
            external_identifier: CBDB:215722
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.190Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_kNGUEWZhssofqQKCnJW3XK
        status: active
        display_name: 王啟芳
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_suVz3EWl4HfS0CS8Q__4us
        subject_person_id: p_BMEd8a566iM36EvYEN4Boa
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_P7cZrKpwh44EGMwMKR3XMy
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b7fncKtMQNe53oEFJIWrvw
          claim_id: c_suVz3EWl4HfS0CS8Q__4us
          source_id: s_FAd6b6xaQWXXoauLzRxAMR
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第二甲第二十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FAd6b6xaQWXXoauLzRxAMR
            source_type: api_record
            title: 中国历代人物传记资料库：王詔（CBDB 215720）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215720&o=json
            external_identifier: CBDB:215720
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.188Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BMEd8a566iM36EvYEN4Boa
        status: active
        display_name: 王詔
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王明時

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王明時（生于1542年），明人物。中国历代人物传记资料库（CBDB）以人物编号 206277 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| birth.date | 1542年 | accepted |
| name.primary | 王明時 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kNGUEWZhssofqQKCnJW3XK | 王啟芳 | accepted |
| ancestors | p_BMEd8a566iM36EvYEN4Boa | 王詔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王明時（CBDB 206277）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206277&o=json)
- [中国历代人物传记资料库：王啟芳（CBDB 215722）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215722&o=json)
- [中国历代人物传记资料库：王詔（CBDB 215720）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215720&o=json)
