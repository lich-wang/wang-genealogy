---
schema: wang-person/v1
id: p_uAujjG392SPymDDHoGZN88
status: active
merged_into: null
display_name: 王廷望
cbdb_id: 315367
revision: 7
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_N7ZyKvuau53gFXkzM6N1Ap
        subject_person_id: p_uAujjG392SPymDDHoGZN88
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷望，明人物。嘉靖三十二年進士，籍贯臨川。（中国历代人物传记资料库 CBDB 315367）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_F0ZrtYIYRoxXrAiIFkT_QQ
          claim_id: c_N7ZyKvuau53gFXkzM6N1Ap
          source_id: s_V1MpscM6Ut3vE83ht3RtGq
          stance: supports
          locator: CBDB:315367
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_V1MpscM6Ut3vE83ht3RtGq
            source_type: api_record
            title: 中国历代人物传记资料库：王廷望（CBDB 315367）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315367&o=json
            external_identifier: CBDB:315367
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_DkMsVtyZQiDdJcQa3XoJYP
        subject_person_id: p_uAujjG392SPymDDHoGZN88
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷望
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_7qW82kgUWHYSZbVRjHjLBx
          claim_id: c_DkMsVtyZQiDdJcQa3XoJYP
          source_id: s_V1MpscM6Ut3vE83ht3RtGq
          stance: supports
          locator: CBDB:315367
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_goH8tcrzsm3AhZpG_L3CGk
        subject_person_id: p_uAujjG392SPymDDHoGZN88
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nqXSbp6gt3VE2aHb7rdeET
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f5gVqQuUpjiqWbuCU4kUx-
          claim_id: c_goH8tcrzsm3AhZpG_L3CGk
          source_id: s_V1MpscM6Ut3vE83ht3RtGq
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第二甲第四十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_V1MpscM6Ut3vE83ht3RtGq
            source_type: api_record
            title: 中国历代人物传记资料库：王廷望（CBDB 315367）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315367&o=json
            external_identifier: CBDB:315367
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_nqXSbp6gt3VE2aHb7rdeET
        status: active
        display_name: 王希烈
        merged_into_person_id: null
    - claim:
        id: c_WHgw7SptYNGy5lVmEli1ry
        subject_person_id: p_uAujjG392SPymDDHoGZN88
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1xGhXZ8SgPP6NYZk7NUqk9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vG_ecu0W7sDKTgYOZwcKtE
          claim_id: c_WHgw7SptYNGy5lVmEli1ry
          source_id: s_gVEheTXEetdkd7FCtcN8Mg
          stance: supports
          locator: CBDB：兄弟 王希烈（126546）之父／母 王廷望
          quotation: null
          interpretation_note: 由兄弟关系推断：王希張 与 王希烈 为同胞（CBDB 记「兄」），王希烈 之父／母即 王希張 之父／母。
          source:
            id: s_gVEheTXEetdkd7FCtcN8Mg
            source_type: api_record
            title: 中国历代人物传记资料库：王希張（CBDB 315375）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315375&o=json
            external_identifier: CBDB:315375
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1xGhXZ8SgPP6NYZk7NUqk9
        status: active
        display_name: 王希張
        merged_into_person_id: null
    - claim:
        id: c_DLf02jZiENDQD_rRFS-c6P
        subject_person_id: p_uAujjG392SPymDDHoGZN88
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FJZK7j7kBnAQsDBNt9Fbyg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6F3WCqi2Xicmz1vIPDMJrs
          claim_id: c_DLf02jZiENDQD_rRFS-c6P
          source_id: s_k2FyJUJhUty-K2ityyCaY6
          stance: supports
          locator: CBDB：兄弟 王希烈（126546）之父／母 王廷望
          quotation: null
          interpretation_note: 由兄弟关系推断：王希程 与 王希烈 为同胞（CBDB 记「兄」），王希烈 之父／母即 王希程 之父／母。
          source:
            id: s_k2FyJUJhUty-K2ityyCaY6
            source_type: api_record
            title: 中国历代人物传记资料库：王希程（CBDB 315374）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315374&o=json
            external_identifier: CBDB:315374
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FJZK7j7kBnAQsDBNt9Fbyg
        status: active
        display_name: 王希程
        merged_into_person_id: null
    - claim:
        id: c_A-uGoU0PYiJCLVVFsWY1IP
        subject_person_id: p_uAujjG392SPymDDHoGZN88
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_G6aLsWXSmZW6hMNSaoQ5VW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qfs5f4o1GNiHRkIPl5gliS
          claim_id: c_A-uGoU0PYiJCLVVFsWY1IP
          source_id: s_6VZGLwhQb0lleD7UU6YDd7
          stance: supports
          locator: CBDB：兄弟 王希烈（126546）之父／母 王廷望
          quotation: null
          interpretation_note: 由兄弟关系推断：王希佐 与 王希烈 为同胞（CBDB 记「兄」），王希烈 之父／母即 王希佐 之父／母。
          source:
            id: s_6VZGLwhQb0lleD7UU6YDd7
            source_type: api_record
            title: 中国历代人物传记资料库：王希佐（CBDB 315376）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315376&o=json
            external_identifier: CBDB:315376
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_G6aLsWXSmZW6hMNSaoQ5VW
        status: active
        display_name: 王希佐
        merged_into_person_id: null
    - claim:
        id: c_yOQOvI3c9KapxsPLq_aD_8
        subject_person_id: p_uAujjG392SPymDDHoGZN88
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nQhoKkppEp1ZP31V93f2sm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DYS9pP7VRzCMSgaPazk3SZ
          claim_id: c_yOQOvI3c9KapxsPLq_aD_8
          source_id: s_gxlU6LaTBJkXC01CGSY06B
          stance: supports
          locator: CBDB：兄弟 王希烈（126546）之父／母 王廷望
          quotation: null
          interpretation_note: 由兄弟关系推断：王希昂 与 王希烈 为同胞（CBDB 记「弟」），王希烈 之父／母即 王希昂 之父／母。
          source:
            id: s_gxlU6LaTBJkXC01CGSY06B
            source_type: api_record
            title: 中国历代人物传记资料库：王希昂（CBDB 315371）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315371&o=json
            external_identifier: CBDB:315371
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nQhoKkppEp1ZP31V93f2sm
        status: active
        display_name: 王希昂
        merged_into_person_id: null
    - claim:
        id: c_--gYpbvmYo3jPkMqs7NeWV
        subject_person_id: p_uAujjG392SPymDDHoGZN88
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qh4q14MP1onDR6QTxwoRyv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GWRffLCOeYBgYW6l17CMZH
          claim_id: c_--gYpbvmYo3jPkMqs7NeWV
          source_id: s_T2gwdSZacF9VG2J4lgYeTa
          stance: supports
          locator: CBDB：兄弟 王希烈（126546）之父／母 王廷望
          quotation: null
          interpretation_note: 由兄弟关系推断：王希周 与 王希烈 为同胞（CBDB 记「兄」），王希烈 之父／母即 王希周 之父／母。
          source:
            id: s_T2gwdSZacF9VG2J4lgYeTa
            source_type: api_record
            title: 中国历代人物传记资料库：王希周（CBDB 315372）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315372&o=json
            external_identifier: CBDB:315372
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qh4q14MP1onDR6QTxwoRyv
        status: active
        display_name: 王希周
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王廷望

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王廷望，明人物。嘉靖三十二年進士，籍贯臨川。（中国历代人物传记资料库 CBDB 315367） | accepted |
| name.primary | 王廷望 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_nqXSbp6gt3VE2aHb7rdeET | 王希烈 | accepted |
| children | p_1xGhXZ8SgPP6NYZk7NUqk9 | 王希張 | accepted |
| children | p_FJZK7j7kBnAQsDBNt9Fbyg | 王希程 | accepted |
| children | p_G6aLsWXSmZW6hMNSaoQ5VW | 王希佐 | accepted |
| children | p_nQhoKkppEp1ZP31V93f2sm | 王希昂 | accepted |
| children | p_qh4q14MP1onDR6QTxwoRyv | 王希周 | accepted |

## 外部来源

- [中国历代人物传记资料库：王廷望（CBDB 315367）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315367&o=json)
- [中国历代人物传记资料库：王希昂（CBDB 315371）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315371&o=json)
- [中国历代人物传记资料库：王希程（CBDB 315374）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315374&o=json)
- [中国历代人物传记资料库：王希張（CBDB 315375）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315375&o=json)
- [中国历代人物传记资料库：王希周（CBDB 315372）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315372&o=json)
- [中国历代人物传记资料库：王希佐（CBDB 315376）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315376&o=json)
