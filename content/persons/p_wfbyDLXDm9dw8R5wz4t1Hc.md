---
schema: wang-person/v1
id: p_wfbyDLXDm9dw8R5wz4t1Hc
status: active
merged_into: null
display_name: 王璠
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nJqGLYv9CuSMn1A5u1Twif
        subject_person_id: p_wfbyDLXDm9dw8R5wz4t1Hc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yFFNZVqDR2E5TY9EbMFh29
          claim_id: c_nJqGLYv9CuSMn1A5u1Twif
          source_id: s_HYe9LY7dX53EkxnAw9CvpD
          stance: supports
          locator: CBDB:288560
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（288560）
          source: &a1
            id: s_HYe9LY7dX53EkxnAw9CvpD
            source_type: api_record
            title: 中国历代人物传记资料库：王璠（CBDB 288560）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288560&o=json
            external_identifier: CBDB:288560
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.293Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hkyhZ17JL4HEb4JiL3PKM3
        subject_person_id: p_wfbyDLXDm9dw8R5wz4t1Hc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璠，明人物。嘉靖八年進士，籍贯武邑。（中国历代人物传记资料库 CBDB 288560）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_P1PWaIF5UofFzkJs4k2E4f
          claim_id: c_hkyhZ17JL4HEb4JiL3PKM3
          source_id: s_HYe9LY7dX53EkxnAw9CvpD
          stance: supports
          locator: CBDB:288560
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_gSFLOX0X6foq2Uk1eklOj_
        subject_person_id: p_wfbyDLXDm9dw8R5wz4t1Hc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JirTxmVijtiT96YhPfvEVf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oAw8ZhL0U9dfQHjeOzBh3d
          claim_id: c_gSFLOX0X6foq2Uk1eklOj_
          source_id: s_HYe9LY7dX53EkxnAw9CvpD
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_JirTxmVijtiT96YhPfvEVf
        status: active
        display_name: 王宗恆
        merged_into_person_id: null
    - claim:
        id: c_v6-vgdZ7tlAB4AHAq0ARmK
        subject_person_id: p_wfbyDLXDm9dw8R5wz4t1Hc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EMU4pX4z4qRFz6L3iM1NYp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9N8TA1YWbTFwhNkMGV24m5
          claim_id: c_v6-vgdZ7tlAB4AHAq0ARmK
          source_id: s_QyawDgLOuzsJSsLcd5Lu8z
          stance: supports
          locator: CBDB：兄弟 王宗恆（202460）之父／母 王璠
          quotation: null
          interpretation_note: 由兄弟关系推断：王左 与 王宗恆 为同胞（CBDB 记「弟」），王宗恆 之父／母即 王左 之父／母。
          source:
            id: s_QyawDgLOuzsJSsLcd5Lu8z
            source_type: api_record
            title: 中国历代人物传记资料库：王左（CBDB 288565）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288565&o=json
            external_identifier: CBDB:288565
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EMU4pX4z4qRFz6L3iM1NYp
        status: active
        display_name: 王左
        merged_into_person_id: null
    - claim:
        id: c_vjuj8hpReGV4XmU1JG38ql
        subject_person_id: p_wfbyDLXDm9dw8R5wz4t1Hc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UwNCvWWvN6o3AZxVK4aL3P
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tjsV4-x1lIcTYNSaO9u2vM
          claim_id: c_vjuj8hpReGV4XmU1JG38ql
          source_id: s_Z_kHS04yjDNHfLhVHmOC-9
          stance: supports
          locator: CBDB：兄弟 王宗恆（202460）之父／母 王璠
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗岱 与 王宗恆 为同胞（CBDB 记「弟」），王宗恆 之父／母即 王宗岱 之父／母。
          source:
            id: s_Z_kHS04yjDNHfLhVHmOC-9
            source_type: api_record
            title: 中国历代人物传记资料库：王宗岱（CBDB 288563）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288563&o=json
            external_identifier: CBDB:288563
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UwNCvWWvN6o3AZxVK4aL3P
        status: active
        display_name: 王宗岱
        merged_into_person_id: null
    - claim:
        id: c_Tuga-OZUypZtNKa3f8t1Vg
        subject_person_id: p_wfbyDLXDm9dw8R5wz4t1Hc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_f7UXXNE3UXDFMmDYru6194
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tidPV0Ox2ZYTIaWtC34MqB
          claim_id: c_Tuga-OZUypZtNKa3f8t1Vg
          source_id: s_rOI9kVMluA8XpnaUOyNYIZ
          stance: supports
          locator: CBDB：兄弟 王宗恆（202460）之父／母 王璠
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗華 与 王宗恆 为同胞（CBDB 记「弟」），王宗恆 之父／母即 王宗華 之父／母。
          source:
            id: s_rOI9kVMluA8XpnaUOyNYIZ
            source_type: api_record
            title: 中国历代人物传记资料库：王宗華（CBDB 288566）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288566&o=json
            external_identifier: CBDB:288566
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_f7UXXNE3UXDFMmDYru6194
        status: active
        display_name: 王宗華
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王璠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璠 | accepted |
| bio.summary | 王璠，明人物。嘉靖八年進士，籍贯武邑。（中国历代人物传记资料库 CBDB 288560） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_JirTxmVijtiT96YhPfvEVf | 王宗恆 | accepted |
| children | p_EMU4pX4z4qRFz6L3iM1NYp | 王左 | accepted |
| children | p_UwNCvWWvN6o3AZxVK4aL3P | 王宗岱 | accepted |
| children | p_f7UXXNE3UXDFMmDYru6194 | 王宗華 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璠（CBDB 288560）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288560&o=json)
- [中国历代人物传记资料库：王宗岱（CBDB 288563）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288563&o=json)
- [中国历代人物传记资料库：王宗華（CBDB 288566）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288566&o=json)
- [中国历代人物传记资料库：王左（CBDB 288565）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288565&o=json)
