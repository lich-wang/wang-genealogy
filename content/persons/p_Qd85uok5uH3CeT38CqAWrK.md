---
schema: wang-person/v1
id: p_Qd85uok5uH3CeT38CqAWrK
status: active
merged_into: null
display_name: 王昱
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vS9x18Mkos2d5E1MaKX1sC
        subject_person_id: p_Qd85uok5uH3CeT38CqAWrK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_K7jqgbFqmN8hj4A3wKUm5V
          claim_id: c_vS9x18Mkos2d5E1MaKX1sC
          source_id: s_jNPA88P9GujBGKSFpSjwHA
          stance: supports
          locator: CBDB:247369
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（247369）
          source: &a1
            id: s_jNPA88P9GujBGKSFpSjwHA
            source_type: api_record
            title: 中国历代人物传记资料库：王昱（CBDB 247369）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247369&o=json
            external_identifier: CBDB:247369
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.117Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4uTfHyizkV5RKhJux44RU4
        subject_person_id: p_Qd85uok5uH3CeT38CqAWrK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昱，明人物。成化八年進士，籍贯嵊縣。（中国历代人物传记资料库 CBDB 247369）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3eZXXeYs8cTaktWRxagzrO
          claim_id: c_4uTfHyizkV5RKhJux44RU4
          source_id: s_jNPA88P9GujBGKSFpSjwHA
          stance: supports
          locator: CBDB:247369
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_2mJ-wZp05uuSViFS5PhYFv
        subject_person_id: p_vNNRVNM4fb2RVGCGj65JaG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Qd85uok5uH3CeT38CqAWrK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LU_Ui8iRtN7Ipw-mLvXHy8
          claim_id: c_2mJ-wZp05uuSViFS5PhYFv
          source_id: s_4-oepba6hl_pXAEry68iKT
          stance: supports
          locator: CBDB：兄弟 王暄（199620）之父／母 王鈍
          quotation: null
          interpretation_note: 由兄弟关系推断：王昱 与 王暄 为同胞（CBDB 记「弟」），王暄 之父／母即 王昱 之父／母。
          source:
            id: s_4-oepba6hl_pXAEry68iKT
            source_type: api_record
            title: 中国历代人物传记资料库：王昱（CBDB 247369）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247369&o=json
            external_identifier: CBDB:247369
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vNNRVNM4fb2RVGCGj65JaG
        status: active
        display_name: 王鈍
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_FW7idon_op_3oLxa8eivMq
        subject_person_id: p_Qd85uok5uH3CeT38CqAWrK
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dHFBy8GTgBZpvwKJGG8hsX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o2kSx6Au7kOsIECWAJrfue
          claim_id: c_FW7idon_op_3oLxa8eivMq
          source_id: s_4-oepba6hl_pXAEry68iKT
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199620 王暄）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_4-oepba6hl_pXAEry68iKT
            source_type: api_record
            title: 中国历代人物传记资料库：王昱（CBDB 247369）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247369&o=json
            external_identifier: CBDB:247369
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dHFBy8GTgBZpvwKJGG8hsX
        status: active
        display_name: 王暄
        merged_into_person_id: null
---

# 王昱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昱 | accepted |
| bio.summary | 王昱，明人物。成化八年進士，籍贯嵊縣。（中国历代人物传记资料库 CBDB 247369） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vNNRVNM4fb2RVGCGj65JaG | 王鈍 | accepted |
| other | p_dHFBy8GTgBZpvwKJGG8hsX | 王暄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昱（CBDB 247369）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247369&o=json)
