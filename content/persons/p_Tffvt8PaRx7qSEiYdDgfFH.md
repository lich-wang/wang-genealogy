---
schema: wang-person/v1
id: p_Tffvt8PaRx7qSEiYdDgfFH
status: active
merged_into: null
display_name: 王淑陵
cbdb_id: 205297
revision: 11
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9FgvLP2WSZho19AqKFgVDx
        subject_person_id: p_Tffvt8PaRx7qSEiYdDgfFH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淑陵（生于1535年），明人物。明清進士進士，籍贯陽城，入仕進士。（中国历代人物传记资料库 CBDB 205297）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_qOmFgWBPY8yt6b4AXR0qGg
          claim_id: c_9FgvLP2WSZho19AqKFgVDx
          source_id: s_r8oM3YSLG8TCQ2P7Wgo1PP
          stance: supports
          locator: CBDB:205297
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_r8oM3YSLG8TCQ2P7Wgo1PP
            source_type: api_record
            title: 中国历代人物传记资料库：王淑陵（CBDB 205297）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205297&o=json
            external_identifier: CBDB:205297
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_jq3cZNJNbevCdwjVVBPx73
        subject_person_id: p_Tffvt8PaRx7qSEiYdDgfFH
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1535年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1535-01-01
            latest: 1535-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mr8wfcZCnDPp4QEV7z1XMJ
          claim_id: c_jq3cZNJNbevCdwjVVBPx73
          source_id: s_r8oM3YSLG8TCQ2P7Wgo1PP
          stance: supports
          locator: CBDB:205297
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1535
          source:
            id: s_r8oM3YSLG8TCQ2P7Wgo1PP
            source_type: api_record
            title: 中国历代人物传记资料库：王淑陵（CBDB 205297）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205297&o=json
            external_identifier: CBDB:205297
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_TVB59DPBxq6Pn4K5fkjrW2
        subject_person_id: p_Tffvt8PaRx7qSEiYdDgfFH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淑陵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_U7HbSiQJBeoJjxgtGGmRHz
          claim_id: c_TVB59DPBxq6Pn4K5fkjrW2
          source_id: s_r8oM3YSLG8TCQ2P7Wgo1PP
          stance: supports
          locator: CBDB:205297
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1535
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_SvIybh73tngXBriaj4CYRm
        subject_person_id: p_vQ7CxFfVeDD5gVP5SnofRA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Tffvt8PaRx7qSEiYdDgfFH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3aefzIfXLT6Q2rRdzM-G32
          claim_id: c_SvIybh73tngXBriaj4CYRm
          source_id: s_bdh78hDyKTZYMt8wkfB4ky
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第九十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_bdh78hDyKTZYMt8wkfB4ky
            source_type: api_record
            title: 中国历代人物传记资料库：王言（CBDB 331186）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331186&o=json
            external_identifier: CBDB:331186
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.361Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_vQ7CxFfVeDD5gVP5SnofRA
        status: active
        display_name: 王言
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_BlRSeRVZoFmEfVqjrYxfuR
        subject_person_id: p_DuKTEEgBLTiBiRuzsJ8s2i
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Tffvt8PaRx7qSEiYdDgfFH
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VR3VEhfYXXuGV9ZTVOMbFE
          claim_id: c_BlRSeRVZoFmEfVqjrYxfuR
          source_id: s_jHS5dQwUjNtmXJKj18PLYB
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第九十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jHS5dQwUjNtmXJKj18PLYB
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎（CBDB 331184）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331184&o=json
            external_identifier: CBDB:331184
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.360Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DuKTEEgBLTiBiRuzsJ8s2i
        status: active
        display_name: 王鼎
        merged_into_person_id: null
    - claim:
        id: c_KxWji4RfP-XIhpMq_GzCcs
        subject_person_id: p_U7StYZwmqTXFLDijuCwzNA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Tffvt8PaRx7qSEiYdDgfFH
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jm6Rzv0iJKUzEFn9sHh5Xr
          claim_id: c_KxWji4RfP-XIhpMq_GzCcs
          source_id: s_hWqCjA5UKaMR9kVjegp6Vn
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第九十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_hWqCjA5UKaMR9kVjegp6Vn
            source_type: api_record
            title: 中国历代人物传记资料库：王緯（CBDB 331185）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331185&o=json
            external_identifier: CBDB:331185
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.361Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_U7StYZwmqTXFLDijuCwzNA
        status: active
        display_name: 王緯
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_7octT3BWpnnQQ99WNV4Ruy
        subject_person_id: p_6WucMbhkQXJwBzBACZWi7R
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Tffvt8PaRx7qSEiYdDgfFH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hcKvf5FLdEWFTkVQ2RFjN8
          claim_id: c_7octT3BWpnnQQ99WNV4Ruy
          source_id: s_ETvtZ7dZqE2-mIsRWlgroh
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205297 王淑陵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ETvtZ7dZqE2-mIsRWlgroh
            source_type: api_record
            title: 中国历代人物传记资料库：王淑通（CBDB 331192）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331192&o=json
            external_identifier: CBDB:331192
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6WucMbhkQXJwBzBACZWi7R
        status: active
        display_name: 王淑通
        merged_into_person_id: null
    - claim:
        id: c_EAZM89Bzp2rJpVY7G33zZx
        subject_person_id: p_6ty1kreQG6ZpsK6jqSaE8y
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Tffvt8PaRx7qSEiYdDgfFH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8Mty9BM_35LKnWT6FuUt07
          claim_id: c_EAZM89Bzp2rJpVY7G33zZx
          source_id: s_5WTSeoO6Pkslgjy3OQpETo
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205297 王淑陵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_5WTSeoO6Pkslgjy3OQpETo
            source_type: api_record
            title: 中国历代人物传记资料库：王淑喬（CBDB 331191）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331191&o=json
            external_identifier: CBDB:331191
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6ty1kreQG6ZpsK6jqSaE8y
        status: active
        display_name: 王淑喬
        merged_into_person_id: null
    - claim:
        id: c_2h6VrbxHxkZQOXtLjc6QhJ
        subject_person_id: p_EDzigNMTevNdyF2FMvjkcn
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Tffvt8PaRx7qSEiYdDgfFH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aCJFX8K-yNpH_8n_hy2JNH
          claim_id: c_2h6VrbxHxkZQOXtLjc6QhJ
          source_id: s_9DbTVxmnyiLQM1wVeZ1iOm
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205297 王淑陵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_9DbTVxmnyiLQM1wVeZ1iOm
            source_type: api_record
            title: 中国历代人物传记资料库：王淑縉（CBDB 331195）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331195&o=json
            external_identifier: CBDB:331195
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EDzigNMTevNdyF2FMvjkcn
        status: active
        display_name: 王淑縉
        merged_into_person_id: null
    - claim:
        id: c_61g8BTTJiFR6PLgbtrKN8e
        subject_person_id: p_Ry8CxWsNdxGZGd9kVJmqK6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Tffvt8PaRx7qSEiYdDgfFH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Nnn7XB1iLA6qxq1_3vXMGH
          claim_id: c_61g8BTTJiFR6PLgbtrKN8e
          source_id: s_Y3Q4lvIleeP3K9YqGEzbiD
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205297 王淑陵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Y3Q4lvIleeP3K9YqGEzbiD
            source_type: api_record
            title: 中国历代人物传记资料库：王淑吉（CBDB 331197）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331197&o=json
            external_identifier: CBDB:331197
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Ry8CxWsNdxGZGd9kVJmqK6
        status: active
        display_name: 王淑吉
        merged_into_person_id: null
    - claim:
        id: c_EKAbKSAdjUvO8adC7nPBVT
        subject_person_id: p_Tffvt8PaRx7qSEiYdDgfFH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_TwDh5Y5nFZbMTDh7UouR38
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fr3QGsBWeszXy0BFJTgxC7
          claim_id: c_EKAbKSAdjUvO8adC7nPBVT
          source_id: s_Freo1Su_wQBrRQYaei6Au_
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205297 王淑陵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Freo1Su_wQBrRQYaei6Au_
            source_type: api_record
            title: 中国历代人物传记资料库：王淑燦（CBDB 331196）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331196&o=json
            external_identifier: CBDB:331196
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TwDh5Y5nFZbMTDh7UouR38
        status: active
        display_name: 王淑燦
        merged_into_person_id: null
    - claim:
        id: c_olyfFpy-xl726hUeO0rCmI
        subject_person_id: p_Tffvt8PaRx7qSEiYdDgfFH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_YSAbqVCxegBCEYgRaXR6U2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FL2Pu4MT1lJfwF3pIStNS_
          claim_id: c_olyfFpy-xl726hUeO0rCmI
          source_id: s_82kHmowwEA6C7r11MFryH6
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205297 王淑陵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_82kHmowwEA6C7r11MFryH6
            source_type: api_record
            title: 中国历代人物传记资料库：王淑旦（CBDB 331194）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331194&o=json
            external_identifier: CBDB:331194
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YSAbqVCxegBCEYgRaXR6U2
        status: active
        display_name: 王淑旦
        merged_into_person_id: null
    - claim:
        id: c_WGKuFDzZBSEBO62WA9J3Fc
        subject_person_id: p_Tffvt8PaRx7qSEiYdDgfFH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_x81DgwZM1tc16Nf4JHsvsx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ilJV-NrDPkatNmqOL_7KEs
          claim_id: c_WGKuFDzZBSEBO62WA9J3Fc
          source_id: s_es_Q_U-eRbaZaQy1rwPTAw
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205297 王淑陵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_es_Q_U-eRbaZaQy1rwPTAw
            source_type: api_record
            title: 中国历代人物传记资料库：王淑曾（CBDB 331193）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331193&o=json
            external_identifier: CBDB:331193
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_x81DgwZM1tc16Nf4JHsvsx
        status: active
        display_name: 王淑曾
        merged_into_person_id: null
---

# 王淑陵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王淑陵（生于1535年），明人物。明清進士進士，籍贯陽城，入仕進士。（中国历代人物传记资料库 CBDB 205297） | accepted |
| birth.date | 1535年 | accepted |
| name.primary | 王淑陵 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vQ7CxFfVeDD5gVP5SnofRA | 王言 | accepted |
| ancestors | p_DuKTEEgBLTiBiRuzsJ8s2i | 王鼎 | accepted |
| ancestors | p_U7StYZwmqTXFLDijuCwzNA | 王緯 | accepted |
| other | p_6WucMbhkQXJwBzBACZWi7R | 王淑通 | accepted |
| other | p_6ty1kreQG6ZpsK6jqSaE8y | 王淑喬 | accepted |
| other | p_EDzigNMTevNdyF2FMvjkcn | 王淑縉 | accepted |
| other | p_Ry8CxWsNdxGZGd9kVJmqK6 | 王淑吉 | accepted |
| other | p_TwDh5Y5nFZbMTDh7UouR38 | 王淑燦 | accepted |
| other | p_YSAbqVCxegBCEYgRaXR6U2 | 王淑旦 | accepted |
| other | p_x81DgwZM1tc16Nf4JHsvsx | 王淑曾 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鼎（CBDB 331184）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331184&o=json)
- [中国历代人物传记资料库：王淑燦（CBDB 331196）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331196&o=json)
- [中国历代人物传记资料库：王淑曾（CBDB 331193）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331193&o=json)
- [中国历代人物传记资料库：王淑旦（CBDB 331194）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331194&o=json)
- [中国历代人物传记资料库：王淑吉（CBDB 331197）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331197&o=json)
- [中国历代人物传记资料库：王淑縉（CBDB 331195）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331195&o=json)
- [中国历代人物传记资料库：王淑陵（CBDB 205297）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205297&o=json)
- [中国历代人物传记资料库：王淑喬（CBDB 331191）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331191&o=json)
- [中国历代人物传记资料库：王淑通（CBDB 331192）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331192&o=json)
- [中国历代人物传记资料库：王緯（CBDB 331185）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331185&o=json)
- [中国历代人物传记资料库：王言（CBDB 331186）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331186&o=json)
