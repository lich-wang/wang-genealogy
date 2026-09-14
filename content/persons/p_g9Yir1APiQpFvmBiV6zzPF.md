---
schema: wang-person/v1
id: p_g9Yir1APiQpFvmBiV6zzPF
status: active
merged_into: null
display_name: 王同儼
cbdb_id: 326627
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5KGPaxM2Bm49ehKiVrZZWc
        subject_person_id: p_g9Yir1APiQpFvmBiV6zzPF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同儼，明人物。嘉靖四十一年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 326627）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_eyd_wcFVY_-ZD8IIt3baRw
          claim_id: c_5KGPaxM2Bm49ehKiVrZZWc
          source_id: s_5N37FKhQH8YoGFTKLo7CMn
          stance: supports
          locator: CBDB:326627
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_5N37FKhQH8YoGFTKLo7CMn
            source_type: api_record
            title: 中国历代人物传记资料库：王同儼（CBDB 326627）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326627&o=json
            external_identifier: CBDB:326627
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_zoQguzksD8gJu28Kg3KEYM
        subject_person_id: p_g9Yir1APiQpFvmBiV6zzPF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同儼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_vQD8xn48h4VzQDDVSgLDhH
          claim_id: c_zoQguzksD8gJu28Kg3KEYM
          source_id: s_5N37FKhQH8YoGFTKLo7CMn
          stance: supports
          locator: CBDB:326627
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3801-3900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_SrqydCAzj0cf8_KAXXEmsI
        subject_person_id: p_BQt5KMQt85phWutCQLQcnd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_g9Yir1APiQpFvmBiV6zzPF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1vbgXpo77h926R8qaLN4t5
          claim_id: c_SrqydCAzj0cf8_KAXXEmsI
          source_id: s_HMIdz8SysTWZaj-quoRZy4
          stance: supports
          locator: CBDB：兄弟 王同讚（204969）之父／母 王叔中
          quotation: null
          interpretation_note: 由兄弟关系推断：王同儼 与 王同讚 为同胞（CBDB 记「兄」），王同讚 之父／母即 王同儼 之父／母。
          source:
            id: s_HMIdz8SysTWZaj-quoRZy4
            source_type: api_record
            title: 中国历代人物传记资料库：王同儼（CBDB 326627）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326627&o=json
            external_identifier: CBDB:326627
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BQt5KMQt85phWutCQLQcnd
        status: active
        display_name: 王叔中
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_-42rV4ySQb90Z8bvFVo8-I
        subject_person_id: p_4PMudrRao4a9cRDuakPq7M
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_g9Yir1APiQpFvmBiV6zzPF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CKa3sarhJeFNwT9bx7NRVR
          claim_id: c_-42rV4ySQb90Z8bvFVo8-I
          source_id: s_HMIdz8SysTWZaj-quoRZy4
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204969 王同讚）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_HMIdz8SysTWZaj-quoRZy4
            source_type: api_record
            title: 中国历代人物传记资料库：王同儼（CBDB 326627）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326627&o=json
            external_identifier: CBDB:326627
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4PMudrRao4a9cRDuakPq7M
        status: active
        display_name: 王同讚
        merged_into_person_id: null
---

# 王同儼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王同儼，明人物。嘉靖四十一年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 326627） | accepted |
| name.primary | 王同儼 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BQt5KMQt85phWutCQLQcnd | 王叔中 | accepted |
| other | p_4PMudrRao4a9cRDuakPq7M | 王同讚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王同儼（CBDB 326627）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326627&o=json)
