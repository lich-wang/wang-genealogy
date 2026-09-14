---
schema: wang-person/v1
id: p_eNv5d7w4KD4ugJ5YeDzYxk
status: active
merged_into: null
display_name: 王汝耀
cbdb_id: 314231
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ncyd8JRpnxBM1C6bs5WyDS
        subject_person_id: p_eNv5d7w4KD4ugJ5YeDzYxk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝耀，明人物。嘉靖二十九年進士，籍贯金華，入仕監生。（中国历代人物传记资料库 CBDB 314231）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_P0O2baoFZyepJj9oFIbGDR
          claim_id: c_Ncyd8JRpnxBM1C6bs5WyDS
          source_id: s_GiA3YYcKhAReHQTRSEtteg
          stance: supports
          locator: CBDB:314231
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_GiA3YYcKhAReHQTRSEtteg
            source_type: api_record
            title: 中国历代人物传记资料库：王汝耀（CBDB 314231）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314231&o=json
            external_identifier: CBDB:314231
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_tLLPfbzC5RHQVLcoMNFNbi
        subject_person_id: p_eNv5d7w4KD4ugJ5YeDzYxk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝耀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_DAJhHuc9SqAXBx6oKwNZot
          claim_id: c_tLLPfbzC5RHQVLcoMNFNbi
          source_id: s_GiA3YYcKhAReHQTRSEtteg
          stance: supports
          locator: CBDB:314231
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_dkXPZZZk8SvUjsouWPScEe
        subject_person_id: p_jp7Who27nqLM3Z2dWPqF3U
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eNv5d7w4KD4ugJ5YeDzYxk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l8aAZtOmiVGLpqQLrEfv0C
          claim_id: c_dkXPZZZk8SvUjsouWPScEe
          source_id: s_vjLGOybTHnLaV0hohHsehT
          stance: supports
          locator: CBDB：兄弟 王汝述（204086）之父／母 王銓
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝耀 与 王汝述 为同胞（CBDB 记「弟」），王汝述 之父／母即 王汝耀 之父／母。
          source:
            id: s_vjLGOybTHnLaV0hohHsehT
            source_type: api_record
            title: 中国历代人物传记资料库：王汝耀（CBDB 314231）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314231&o=json
            external_identifier: CBDB:314231
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jp7Who27nqLM3Z2dWPqF3U
        status: active
        display_name: 王銓
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Bagr5Oxe17pVdmqmAHPuh8
        subject_person_id: p_FJ5VCJ2dfQ9YvKZT3bmX4c
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_eNv5d7w4KD4ugJ5YeDzYxk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_10hXcTGzHVILwUeg0jn4n-
          claim_id: c_Bagr5Oxe17pVdmqmAHPuh8
          source_id: s_vjLGOybTHnLaV0hohHsehT
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204086 王汝述）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_vjLGOybTHnLaV0hohHsehT
            source_type: api_record
            title: 中国历代人物传记资料库：王汝耀（CBDB 314231）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314231&o=json
            external_identifier: CBDB:314231
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FJ5VCJ2dfQ9YvKZT3bmX4c
        status: active
        display_name: 王汝述
        merged_into_person_id: null
---

# 王汝耀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王汝耀，明人物。嘉靖二十九年進士，籍贯金華，入仕監生。（中国历代人物传记资料库 CBDB 314231） | accepted |
| name.primary | 王汝耀 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_jp7Who27nqLM3Z2dWPqF3U | 王銓 | accepted |
| other | p_FJ5VCJ2dfQ9YvKZT3bmX4c | 王汝述 | accepted |

## 外部来源

- [中国历代人物传记资料库：王汝耀（CBDB 314231）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314231&o=json)
