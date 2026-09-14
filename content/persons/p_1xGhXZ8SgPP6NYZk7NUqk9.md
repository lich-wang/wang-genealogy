---
schema: wang-person/v1
id: p_1xGhXZ8SgPP6NYZk7NUqk9
status: active
merged_into: null
display_name: 王希張
cbdb_id: 315375
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VqfSWMy1xa7JM6CtgrAVEY
        subject_person_id: p_1xGhXZ8SgPP6NYZk7NUqk9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希張，明人物。嘉靖三十二年進士，籍贯臨川。（中国历代人物传记资料库 CBDB 315375）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_5NldXJD3sXUBv1rWnwmzx8
          claim_id: c_VqfSWMy1xa7JM6CtgrAVEY
          source_id: s_tsdLXv2RmFcamWm1akJm8S
          stance: supports
          locator: CBDB:315375
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_tsdLXv2RmFcamWm1akJm8S
            source_type: api_record
            title: 中国历代人物传记资料库：王希張（CBDB 315375）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315375&o=json
            external_identifier: CBDB:315375
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_c1R17d2mdGkLTaExgA6jDJ
        subject_person_id: p_1xGhXZ8SgPP6NYZk7NUqk9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希張
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_tNU1At3Pc2UDGMK8g41LGs
          claim_id: c_c1R17d2mdGkLTaExgA6jDJ
          source_id: s_tsdLXv2RmFcamWm1akJm8S
          stance: supports
          locator: CBDB:315375
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_uAujjG392SPymDDHoGZN88
        status: active
        display_name: 王廷望
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
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
        id: p_nqXSbp6gt3VE2aHb7rdeET
        status: active
        display_name: 王希烈
        merged_into_person_id: null
---

# 王希張

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王希張，明人物。嘉靖三十二年進士，籍贯臨川。（中国历代人物传记资料库 CBDB 315375） | accepted |
| name.primary | 王希張 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uAujjG392SPymDDHoGZN88 | 王廷望 | accepted |
| other | p_nqXSbp6gt3VE2aHb7rdeET | 王希烈 | accepted |

## 外部来源

- [中国历代人物传记资料库：王希張（CBDB 315375）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315375&o=json)
