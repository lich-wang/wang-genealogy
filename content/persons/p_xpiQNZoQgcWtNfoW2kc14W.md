---
schema: wang-person/v1
id: p_xpiQNZoQgcWtNfoW2kc14W
status: active
merged_into: null
display_name: 王允武
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9cpUaEd4WuQw82T43z3thi
        subject_person_id: p_xpiQNZoQgcWtNfoW2kc14W
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允武
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_z1PrusAwLqXfBX3axpZfuP
          claim_id: c_9cpUaEd4WuQw82T43z3thi
          source_id: s_SuKUKV1H1TkxJ6pKLg9oPZ
          stance: supports
          locator: CBDB:216908
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（216908）
          source: &a1
            id: s_SuKUKV1H1TkxJ6pKLg9oPZ
            source_type: api_record
            title: 中国历代人物传记资料库：王允武（CBDB 216908）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216908&o=json
            external_identifier: CBDB:216908
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.245Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YjCBMFB5hACTsKQHhzAaAJ
        subject_person_id: p_xpiQNZoQgcWtNfoW2kc14W
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允武，明人物。萬曆五年進士，籍贯廣平，曾任王府右長史。（中国历代人物传记资料库 CBDB 216908）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9EdbldkxeiqU3qCTsPFYSi
          claim_id: c_YjCBMFB5hACTsKQHhzAaAJ
          source_id: s_SuKUKV1H1TkxJ6pKLg9oPZ
          stance: supports
          locator: CBDB:216908
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_W2t1Y98Pa4LWxvKXFPw1mF
        subject_person_id: p_xpiQNZoQgcWtNfoW2kc14W
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9yrh3LG22eDzqwJQoBMgVx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hKnjEikv-YJfSAeUQ5nnHG
          claim_id: c_W2t1Y98Pa4LWxvKXFPw1mF
          source_id: s_SuKUKV1H1TkxJ6pKLg9oPZ
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第三甲第七十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_9yrh3LG22eDzqwJQoBMgVx
        status: active
        display_name: 王世揚
        merged_into_person_id: null
    - claim:
        id: c_KVClixQP_gau1muHK_8RJJ
        subject_person_id: p_xpiQNZoQgcWtNfoW2kc14W
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fNUQTeY9r9U4uZNpkZAEFJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Mm3JkVCCAOUuskGSw60dtS
          claim_id: c_KVClixQP_gau1muHK_8RJJ
          source_id: s_uBI38ltTyIsqHEx4Lf4e1t
          stance: supports
          locator: CBDB：兄弟 王世揚（126490）之父／母 王允武
          quotation: null
          interpretation_note: 由兄弟关系推断：王對揚 与 王世揚 为同胞（CBDB 记「弟」），王世揚 之父／母即 王對揚 之父／母。
          source:
            id: s_uBI38ltTyIsqHEx4Lf4e1t
            source_type: api_record
            title: 中国历代人物传记资料库：王對揚（CBDB 216912）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216912&o=json
            external_identifier: CBDB:216912
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fNUQTeY9r9U4uZNpkZAEFJ
        status: active
        display_name: 王對揚
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王允武

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王允武 | accepted |
| bio.summary | 王允武，明人物。萬曆五年進士，籍贯廣平，曾任王府右長史。（中国历代人物传记资料库 CBDB 216908） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_9yrh3LG22eDzqwJQoBMgVx | 王世揚 | accepted |
| children | p_fNUQTeY9r9U4uZNpkZAEFJ | 王對揚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王對揚（CBDB 216912）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216912&o=json)
- [中国历代人物传记资料库：王允武（CBDB 216908）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216908&o=json)
