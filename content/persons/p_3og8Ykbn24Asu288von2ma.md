---
schema: wang-person/v1
id: p_3og8Ykbn24Asu288von2ma
status: active
merged_into: null
display_name: 王用汝
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sAtkHH9AgLENGcAUZf2dcK
        subject_person_id: p_3og8Ykbn24Asu288von2ma
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用汝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jZPT35Rso4LQkAhB1Ty1m4
          claim_id: c_sAtkHH9AgLENGcAUZf2dcK
          source_id: s_xMGNCpVZsLTzEf2jvu6RAN
          stance: supports
          locator: CBDB:294544
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（294544）
          source: &a1
            id: s_xMGNCpVZsLTzEf2jvu6RAN
            source_type: api_record
            title: 中国历代人物传记资料库：王用汝（CBDB 294544）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294544&o=json
            external_identifier: CBDB:294544
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.469Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vA8FKutTL5c7L5UDra1U8B
        subject_person_id: p_3og8Ykbn24Asu288von2ma
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用汝，明人物。嘉靖十一年進士，籍贯東莞。（中国历代人物传记资料库 CBDB 294544）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TZyxYN8YLz6KNePmijYZNx
          claim_id: c_vA8FKutTL5c7L5UDra1U8B
          source_id: s_xMGNCpVZsLTzEf2jvu6RAN
          stance: supports
          locator: CBDB:294544
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_u23cTR8HIXk8rLEGrCfV-L
        subject_person_id: p_DkL4KAP3Vyt4DGq87NkgHu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3og8Ykbn24Asu288von2ma
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_temOl-0LvNDRcahGK1uqZl
          claim_id: c_u23cTR8HIXk8rLEGrCfV-L
          source_id: s_F6hy_QlYgmONZJ2IUhrBGm
          stance: supports
          locator: CBDB：兄弟 王玉汝（202795）之父／母 王尚學
          quotation: null
          interpretation_note: 由兄弟关系推断：王用汝 与 王玉汝 为同胞（CBDB 记「兄」），王玉汝 之父／母即 王用汝 之父／母。
          source:
            id: s_F6hy_QlYgmONZJ2IUhrBGm
            source_type: api_record
            title: 中国历代人物传记资料库：王用汝（CBDB 294544）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294544&o=json
            external_identifier: CBDB:294544
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DkL4KAP3Vyt4DGq87NkgHu
        status: active
        display_name: 王尚學
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_4V_GdBKvZq6LKI4uKBqufL
        subject_person_id: p_3og8Ykbn24Asu288von2ma
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_aJQ3escM6jBxZ8EP2idom6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uVR5g2ieMZc59EV0EMPnCu
          claim_id: c_4V_GdBKvZq6LKI4uKBqufL
          source_id: s_F6hy_QlYgmONZJ2IUhrBGm
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202795 王玉汝）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_F6hy_QlYgmONZJ2IUhrBGm
            source_type: api_record
            title: 中国历代人物传记资料库：王用汝（CBDB 294544）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294544&o=json
            external_identifier: CBDB:294544
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aJQ3escM6jBxZ8EP2idom6
        status: active
        display_name: 王玉汝
        merged_into_person_id: null
---

# 王用汝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王用汝 | accepted |
| bio.summary | 王用汝，明人物。嘉靖十一年進士，籍贯東莞。（中国历代人物传记资料库 CBDB 294544） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DkL4KAP3Vyt4DGq87NkgHu | 王尚學 | accepted |
| other | p_aJQ3escM6jBxZ8EP2idom6 | 王玉汝 | accepted |

## 外部来源

- [中国历代人物传记资料库：王用汝（CBDB 294544）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294544&o=json)
