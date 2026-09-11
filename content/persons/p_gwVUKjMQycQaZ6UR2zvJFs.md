---
schema: wang-person/v1
id: p_gwVUKjMQycQaZ6UR2zvJFs
status: active
merged_into: null
display_name: 王順
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MA4FkVnePbG5wJbgKAu9Ld
        subject_person_id: p_gwVUKjMQycQaZ6UR2zvJFs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王順
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oeL1zVbmaYFSHAYPRh9hgA
          claim_id: c_MA4FkVnePbG5wJbgKAu9Ld
          source_id: s_oBoM5ZPjLx797LqUayBpbH
          stance: supports
          locator: CBDB:100852
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100852）
          source: &a1
            id: s_oBoM5ZPjLx797LqUayBpbH
            source_type: api_record
            title: 中国历代人物传记资料库：王順（CBDB 100852）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100852&o=json
            external_identifier: CBDB:100852
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.508Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_9BPpcYZ7yZmmVkkeCVnRok
        subject_person_id: p_gwVUKjMQycQaZ6UR2zvJFs
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1319年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j7CtG9rmNz3q9WwLaiMK4C
          claim_id: c_9BPpcYZ7yZmmVkkeCVnRok
          source_id: s_oBoM5ZPjLx797LqUayBpbH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_NJzwCheP7VMXsyjG9zhfdM
        subject_person_id: p_gwVUKjMQycQaZ6UR2zvJFs
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1376年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UokGXYkustaAr2zJmRPfSL
          claim_id: c_NJzwCheP7VMXsyjG9zhfdM
          source_id: s_oBoM5ZPjLx797LqUayBpbH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7EHP9HLfz8KrXj1RCT36h4
        subject_person_id: p_gwVUKjMQycQaZ6UR2zvJFs
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
        - id: cs_E9D43AGqr3kVm9tjvrNcR3
          claim_id: c_7EHP9HLfz8KrXj1RCT36h4
          source_id: s_oBoM5ZPjLx797LqUayBpbH
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
        id: c_5z0DSdxAGh-YJQQgH26-Di
        subject_person_id: p_E8y1MAzoBqFq8m9SnmCiAn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gwVUKjMQycQaZ6UR2zvJFs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dGHQoNfnRnJwNDMW4uHEc7
          claim_id: c_5z0DSdxAGh-YJQQgH26-Di
          source_id: s_oBoM5ZPjLx797LqUayBpbH
          stance: supports
          locator: 宋濂全集，1195：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_E8y1MAzoBqFq8m9SnmCiAn
        status: active
        display_name: 王棲
        merged_into_person_id: null
  children:
    - claim:
        id: c_WxmAtGjr9OHIBApXd_EJTG
        subject_person_id: p_gwVUKjMQycQaZ6UR2zvJFs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8CGfGgBfrrBdemwbx49Lvf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OrmFn4cO3VWqzdLIG2iR7y
          claim_id: c_WxmAtGjr9OHIBApXd_EJTG
          source_id: s_MRk5qwxwMFd2V43dqjQ6s4
          stance: supports
          locator: 宋濂全集，1196：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_MRk5qwxwMFd2V43dqjQ6s4
            source_type: api_record
            title: 中国历代人物传记资料库：王演（CBDB 134052）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134052&o=json
            external_identifier: CBDB:134052
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.301Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8CGfGgBfrrBdemwbx49Lvf
        status: active
        display_name: 王演
        merged_into_person_id: null
    - claim:
        id: c_YKDRfuUfIw88WJLOSj508u
        subject_person_id: p_gwVUKjMQycQaZ6UR2zvJFs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_btijS6X4NS7SnrgtkCfThv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1NfDOkkt83JH1cyhLn5piw
          claim_id: c_YKDRfuUfIw88WJLOSj508u
          source_id: s_kN7mRhHPPm3sWW95pvNETA
          stance: supports
          locator: 宋濂全集，1196：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_kN7mRhHPPm3sWW95pvNETA
            source_type: api_record
            title: 中国历代人物传记资料库：王淳（CBDB 134054）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134054&o=json
            external_identifier: CBDB:134054
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.302Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_btijS6X4NS7SnrgtkCfThv
        status: active
        display_name: 王淳
        merged_into_person_id: null
    - claim:
        id: c_dZXi370V-0dwxb0KxT2gT3
        subject_person_id: p_gwVUKjMQycQaZ6UR2zvJFs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_o5B1fX81D52tkYaod9JBHj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XZvPlZQ4eTRnmz3w2gep6T
          claim_id: c_dZXi370V-0dwxb0KxT2gT3
          source_id: s_oBoM5ZPjLx797LqUayBpbH
          stance: supports
          locator: 宋濂全集，1196：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_o5B1fX81D52tkYaod9JBHj
        status: active
        display_name: 王溢
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_X1zJkRUw5dmxm1ni7l1Sso
        subject_person_id: p_xKhBiXSv99m8MhpcWpPyAb
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_gwVUKjMQycQaZ6UR2zvJFs
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tzVZmnP4tu6sHAAY1etTMC
          claim_id: c_X1zJkRUw5dmxm1ni7l1Sso
          source_id: s_oBoM5ZPjLx797LqUayBpbH
          stance: supports
          locator: 宋濂全集，1195：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xKhBiXSv99m8MhpcWpPyAb
        status: active
        display_name: 王益之
        merged_into_person_id: null
    - claim:
        id: c_7_7lS50BePZayiS9HtC7lB
        subject_person_id: p_QLSeisJK24cmFFxc6B9i4K
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_gwVUKjMQycQaZ6UR2zvJFs
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hoaLxYMqKZtX4oPaUiGdTy
          claim_id: c_7_7lS50BePZayiS9HtC7lB
          source_id: s_oBoM5ZPjLx797LqUayBpbH
          stance: supports
          locator: 宋濂全集，1195：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_QLSeisJK24cmFFxc6B9i4K
        status: active
        display_name: 王文繼
        merged_into_person_id: null
  descendants:
    - claim:
        id: c_oJFZBobPbCIig2-2Wm7SHm
        subject_person_id: p_gwVUKjMQycQaZ6UR2zvJFs
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_u89tPzkDusF6SdK6p8sZk8
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ha_Pnl3bvOz9-QufNiNgFd
          claim_id: c_oJFZBobPbCIig2-2Wm7SHm
          source_id: s_oBoM5ZPjLx797LqUayBpbH
          stance: supports
          locator: 宋濂全集，1196：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_u89tPzkDusF6SdK6p8sZk8
        status: active
        display_name: 王至淑
        merged_into_person_id: null
    - claim:
        id: c_GNwWboD57lCjPIYoIu0MdD
        subject_person_id: p_gwVUKjMQycQaZ6UR2zvJFs
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_A1PiyeyBZmp3PGy45p7qJP
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YfipuH5tiMsZGNZjp9yj0q
          claim_id: c_GNwWboD57lCjPIYoIu0MdD
          source_id: s_oBoM5ZPjLx797LqUayBpbH
          stance: supports
          locator: 宋濂全集，1196：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_A1PiyeyBZmp3PGy45p7qJP
        status: active
        display_name: 王至剛
        merged_into_person_id: null
    - claim:
        id: c_LR6Y-qcf45N0YcbP4l3leo
        subject_person_id: p_gwVUKjMQycQaZ6UR2zvJFs
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_kgb1sTL7LdqQgEftcjsnu4
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YvenqhjGDEyHP_GeNJbSS2
          claim_id: c_LR6Y-qcf45N0YcbP4l3leo
          source_id: s_oBoM5ZPjLx797LqUayBpbH
          stance: supports
          locator: 宋濂全集，1196：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_kgb1sTL7LdqQgEftcjsnu4
        status: active
        display_name: 王至和
        merged_into_person_id: null
    - claim:
        id: c_EZkDGxvEDc_d6xwKdZ0fOr
        subject_person_id: p_gwVUKjMQycQaZ6UR2zvJFs
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ME3dJpCb56N7c85f8K1MSR
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wGA_SVzUs4Q7Bn9Ku3qnJ8
          claim_id: c_EZkDGxvEDc_d6xwKdZ0fOr
          source_id: s_oBoM5ZPjLx797LqUayBpbH
          stance: supports
          locator: 宋濂全集，1196：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ME3dJpCb56N7c85f8K1MSR
        status: active
        display_name: 王至誠
        merged_into_person_id: null
  other: []
---

# 王順

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王順 | accepted |
| birth.date | 1319年 | accepted |
| death.date | 1376年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_E8y1MAzoBqFq8m9SnmCiAn | 王棲 | accepted |
| children | p_8CGfGgBfrrBdemwbx49Lvf | 王演 | accepted |
| children | p_btijS6X4NS7SnrgtkCfThv | 王淳 | accepted |
| children | p_o5B1fX81D52tkYaod9JBHj | 王溢 | accepted |
| ancestors | p_xKhBiXSv99m8MhpcWpPyAb | 王益之 | accepted |
| ancestors | p_QLSeisJK24cmFFxc6B9i4K | 王文繼 | accepted |
| descendants | p_u89tPzkDusF6SdK6p8sZk8 | 王至淑 | accepted |
| descendants | p_A1PiyeyBZmp3PGy45p7qJP | 王至剛 | accepted |
| descendants | p_kgb1sTL7LdqQgEftcjsnu4 | 王至和 | accepted |
| descendants | p_ME3dJpCb56N7c85f8K1MSR | 王至誠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王淳（CBDB 134054）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134054&o=json)
- [中国历代人物传记资料库：王順（CBDB 100852）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100852&o=json)
- [中国历代人物传记资料库：王演（CBDB 134052）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134052&o=json)
