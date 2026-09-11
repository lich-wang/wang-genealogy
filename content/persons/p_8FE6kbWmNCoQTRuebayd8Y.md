---
schema: wang-person/v1
id: p_8FE6kbWmNCoQTRuebayd8Y
status: active
merged_into: null
display_name: 王元賓
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AoLa6FddY4DE13Erf5G6K4
        subject_person_id: p_8FE6kbWmNCoQTRuebayd8Y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hunYrUPZkkKfYJsKTXPE4d
          claim_id: c_AoLa6FddY4DE13Erf5G6K4
          source_id: s_heujF4GgGcN71jab3r7VRH
          stance: supports
          locator: CBDB:205321
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205321）
          source: &a1
            id: s_heujF4GgGcN71jab3r7VRH
            source_type: api_record
            title: 中国历代人物传记资料库：王元賓（CBDB 205321）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205321&o=json
            external_identifier: CBDB:205321
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.859Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_c5d1xgZmnVf1o3ULLsiEEd
        subject_person_id: p_8FE6kbWmNCoQTRuebayd8Y
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1539年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bMjv8iMXQXhNBedJz6d9gF
          claim_id: c_c5d1xgZmnVf1o3ULLsiEEd
          source_id: s_heujF4GgGcN71jab3r7VRH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Bm3LUrTbvw6AXfdfDFfhNo
        subject_person_id: p_8FE6kbWmNCoQTRuebayd8Y
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
        - id: cs_ZJ12Gn7autfnMzsNnoqz6g
          claim_id: c_Bm3LUrTbvw6AXfdfDFfhNo
          source_id: s_heujF4GgGcN71jab3r7VRH
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
        id: c_x4NFrRUemdBQa-7MxHmJvG
        subject_person_id: p_ZgyZoznnAJrPag6d8FS83S
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8FE6kbWmNCoQTRuebayd8Y
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pYyDajENDy1dF3e8jTTE6c
          claim_id: c_x4NFrRUemdBQa-7MxHmJvG
          source_id: s_pt8As57WMxXZiWgRwLRxXL
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第一百二十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_pt8As57WMxXZiWgRwLRxXL
            source_type: api_record
            title: 中国历代人物传记资料库：王天敘（CBDB 331575）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331575&o=json
            external_identifier: CBDB:331575
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.369Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ZgyZoznnAJrPag6d8FS83S
        status: active
        display_name: 王天敘
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_OfaRnrskGNh3aqwcu16vp4
        subject_person_id: p_1wWHhQNZgJfD93CSbaMxHB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_8FE6kbWmNCoQTRuebayd8Y
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2gu6MU0O6mB_wUbkgynPUh
          claim_id: c_OfaRnrskGNh3aqwcu16vp4
          source_id: s_pA7sXebaPic8P156EP379D
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第一百二十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_pA7sXebaPic8P156EP379D
            source_type: api_record
            title: 中国历代人物传记资料库：王峻（CBDB 331573）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331573&o=json
            external_identifier: CBDB:331573
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.367Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1wWHhQNZgJfD93CSbaMxHB
        status: active
        display_name: 王峻
        merged_into_person_id: null
    - claim:
        id: c_y7Fe60hVNtdhHEE_zieS73
        subject_person_id: p_gUUJKQGSX2LfpBpTeYDNpT
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_8FE6kbWmNCoQTRuebayd8Y
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KaWp1qFN9dJZo-Cy02Yq4U
          claim_id: c_y7Fe60hVNtdhHEE_zieS73
          source_id: s_6LNf1iku1BDXY79VE1yfsi
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第一百二十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6LNf1iku1BDXY79VE1yfsi
            source_type: api_record
            title: 中国历代人物传记资料库：王美（CBDB 331574）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331574&o=json
            external_identifier: CBDB:331574
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.368Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_gUUJKQGSX2LfpBpTeYDNpT
        status: active
        display_name: 王美
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王元賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元賓 | accepted |
| birth.date | 1539年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZgyZoznnAJrPag6d8FS83S | 王天敘 | accepted |
| ancestors | p_1wWHhQNZgJfD93CSbaMxHB | 王峻 | accepted |
| ancestors | p_gUUJKQGSX2LfpBpTeYDNpT | 王美 | accepted |

## 外部来源

- [中国历代人物传记资料库：王峻（CBDB 331573）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331573&o=json)
- [中国历代人物传记资料库：王美（CBDB 331574）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331574&o=json)
- [中国历代人物传记资料库：王天敘（CBDB 331575）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331575&o=json)
- [中国历代人物传记资料库：王元賓（CBDB 205321）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205321&o=json)
