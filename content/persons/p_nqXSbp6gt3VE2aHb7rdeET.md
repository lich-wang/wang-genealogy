---
schema: wang-person/v1
id: p_nqXSbp6gt3VE2aHb7rdeET
status: active
merged_into: null
display_name: 王希烈
cbdb_id: 126546
revision: 9
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Dw2pKTVXghoF7FQ9uL6gYX
        subject_person_id: p_nqXSbp6gt3VE2aHb7rdeET
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希烈，明人物。明清進士進士，籍贯臨川，入仕進士，曾任編修、國子祭酒、翰林院庶吉士。（中国历代人物传记资料库 CBDB 126546）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_zh0sjk3y5PRETxM_n0a1_A
          claim_id: c_Dw2pKTVXghoF7FQ9uL6gYX
          source_id: s_QgtWhmwzvopNAXhnfGDat6
          stance: supports
          locator: CBDB:126546
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_QgtWhmwzvopNAXhnfGDat6
            source_type: api_record
            title: 中国历代人物传记资料库：王希烈（CBDB 126546）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126546&o=json
            external_identifier: CBDB:126546
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_TqCR1EPkVRFJqMJ7U7aEKG
        subject_person_id: p_nqXSbp6gt3VE2aHb7rdeET
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希烈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_fP4M21VUe3zpQrgGHScXvG
          claim_id: c_TqCR1EPkVRFJqMJ7U7aEKG
          source_id: s_QgtWhmwzvopNAXhnfGDat6
          stance: supports
          locator: CBDB:126546
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1901-2000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_uAujjG392SPymDDHoGZN88
        status: active
        display_name: 王廷望
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_pKfIHWnzSv7EytKyhgikRx
        subject_person_id: p_39p4Z47cj6Pu66BinzwEbo
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_nqXSbp6gt3VE2aHb7rdeET
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F3mjugfLahU649Nzu99tfF
          claim_id: c_pKfIHWnzSv7EytKyhgikRx
          source_id: s_fhU8rXLDi95wUGUSnLhBMs
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第二甲第四十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_fhU8rXLDi95wUGUSnLhBMs
            source_type: api_record
            title: 中国历代人物传记资料库：王崇禎（CBDB 315366）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315366&o=json
            external_identifier: CBDB:315366
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_39p4Z47cj6Pu66BinzwEbo
        status: active
        display_name: 王崇禎
        merged_into_person_id: null
    - claim:
        id: c_j492uCzw40vXzUhwBsyuAn
        subject_person_id: p_QVYnzKQ3Qmo2oe1E9Nx6jF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_nqXSbp6gt3VE2aHb7rdeET
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4dpXp9Pj55lckUaapi45jV
          claim_id: c_j492uCzw40vXzUhwBsyuAn
          source_id: s_b74VyMLjfHrZSh78AJLfB7
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第二甲第四十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_b74VyMLjfHrZSh78AJLfB7
            source_type: api_record
            title: 中国历代人物传记资料库：王紹肅（CBDB 315365）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315365&o=json
            external_identifier: CBDB:315365
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_QVYnzKQ3Qmo2oe1E9Nx6jF
        status: active
        display_name: 王紹肅
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_On2U7KT_7w8QeaKkKqqQjp
        subject_person_id: p_1xGhXZ8SgPP6NYZk7NUqk9
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nqXSbp6gt3VE2aHb7rdeET
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cUApRRIPw3gEeFtYpH6Xjw
          claim_id: c_On2U7KT_7w8QeaKkKqqQjp
          source_id: s_gVEheTXEetdkd7FCtcN8Mg
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126546 王希烈）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_PZXGzZtGwAT2F_9Hh8SWAG
        subject_person_id: p_FJZK7j7kBnAQsDBNt9Fbyg
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nqXSbp6gt3VE2aHb7rdeET
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YSuF1cnpHurpQlJUrcSe1G
          claim_id: c_PZXGzZtGwAT2F_9Hh8SWAG
          source_id: s_k2FyJUJhUty-K2ityyCaY6
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126546 王希烈）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_90TWBJ5zVaZ59U75-tAVQI
        subject_person_id: p_G6aLsWXSmZW6hMNSaoQ5VW
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nqXSbp6gt3VE2aHb7rdeET
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nRZIt30e_ID-Dmr4xXy_Ao
          claim_id: c_90TWBJ5zVaZ59U75-tAVQI
          source_id: s_6VZGLwhQb0lleD7UU6YDd7
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126546 王希烈）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_fcu7kxMeO8U3LF9cug4ewG
        subject_person_id: p_nQhoKkppEp1ZP31V93f2sm
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nqXSbp6gt3VE2aHb7rdeET
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X1kiU5tben9rlLdhxVApQ4
          claim_id: c_fcu7kxMeO8U3LF9cug4ewG
          source_id: s_gxlU6LaTBJkXC01CGSY06B
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126546 王希烈）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_auGM_WBudWy24Ppuim_mRf
        subject_person_id: p_nqXSbp6gt3VE2aHb7rdeET
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qh4q14MP1onDR6QTxwoRyv
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hoTKLOqbNwgafQskNzuiGn
          claim_id: c_auGM_WBudWy24Ppuim_mRf
          source_id: s_T2gwdSZacF9VG2J4lgYeTa
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126546 王希烈）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
---

# 王希烈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王希烈，明人物。明清進士進士，籍贯臨川，入仕進士，曾任編修、國子祭酒、翰林院庶吉士。（中国历代人物传记资料库 CBDB 126546） | accepted |
| name.primary | 王希烈 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uAujjG392SPymDDHoGZN88 | 王廷望 | accepted |
| ancestors | p_39p4Z47cj6Pu66BinzwEbo | 王崇禎 | accepted |
| ancestors | p_QVYnzKQ3Qmo2oe1E9Nx6jF | 王紹肅 | accepted |
| other | p_1xGhXZ8SgPP6NYZk7NUqk9 | 王希張 | accepted |
| other | p_FJZK7j7kBnAQsDBNt9Fbyg | 王希程 | accepted |
| other | p_G6aLsWXSmZW6hMNSaoQ5VW | 王希佐 | accepted |
| other | p_nQhoKkppEp1ZP31V93f2sm | 王希昂 | accepted |
| other | p_qh4q14MP1onDR6QTxwoRyv | 王希周 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇禎（CBDB 315366）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315366&o=json)
- [中国历代人物传记资料库：王紹肅（CBDB 315365）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315365&o=json)
- [中国历代人物传记资料库：王廷望（CBDB 315367）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315367&o=json)
- [中国历代人物传记资料库：王希昂（CBDB 315371）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315371&o=json)
- [中国历代人物传记资料库：王希程（CBDB 315374）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315374&o=json)
- [中国历代人物传记资料库：王希烈（CBDB 126546）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126546&o=json)
- [中国历代人物传记资料库：王希張（CBDB 315375）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315375&o=json)
- [中国历代人物传记资料库：王希周（CBDB 315372）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315372&o=json)
- [中国历代人物传记资料库：王希佐（CBDB 315376）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315376&o=json)
