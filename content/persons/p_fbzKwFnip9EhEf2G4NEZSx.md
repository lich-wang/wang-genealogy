---
schema: wang-person/v1
id: p_fbzKwFnip9EhEf2G4NEZSx
status: active
merged_into: null
display_name: 王追
cbdb_id: 290817
revision: 5
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DBHnKG7DsTHABjc55MKC3Q
        subject_person_id: p_fbzKwFnip9EhEf2G4NEZSx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王追，明人物。嘉靖十一年進士，籍贯南充。（中国历代人物传记资料库 CBDB 290817）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_KBySKmClYG-phg-9lOmzdp
          claim_id: c_DBHnKG7DsTHABjc55MKC3Q
          source_id: s_nB4h6VDse5KYgX7PGGknK7
          stance: supports
          locator: CBDB:290817
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_nB4h6VDse5KYgX7PGGknK7
            source_type: api_record
            title: 中国历代人物传记资料库：王追（CBDB 290817）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290817&o=json
            external_identifier: CBDB:290817
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Krh2QgfnojLD19RUqLk1Ak
        subject_person_id: p_fbzKwFnip9EhEf2G4NEZSx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王追
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5SesU4DvDkmmwxL1ZixyJp
          claim_id: c_Krh2QgfnojLD19RUqLk1Ak
          source_id: s_nB4h6VDse5KYgX7PGGknK7
          stance: supports
          locator: CBDB:290817
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3401-3500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_9PyFkRPh5i4jo_4n7--Vgl
        subject_person_id: p_N7qE8Uar4CzK9TTK6UVM28
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fbzKwFnip9EhEf2G4NEZSx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bqiyNTeU62xSQ6VCR0Rj1s
          claim_id: c_9PyFkRPh5i4jo_4n7--Vgl
          source_id: s_gYbq4vwudUBHSAnV_hMsX3
          stance: supports
          locator: CBDB：兄弟 王廷（69148）之父／母 王希文
          quotation: null
          interpretation_note: 由兄弟关系推断：王追 与 王廷 为同胞（CBDB 记「兄」），王廷 之父／母即 王追 之父／母。
          source:
            id: s_gYbq4vwudUBHSAnV_hMsX3
            source_type: api_record
            title: 中国历代人物传记资料库：王追（CBDB 290817）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290817&o=json
            external_identifier: CBDB:290817
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_N7qE8Uar4CzK9TTK6UVM28
        status: active
        display_name: 王希文
        merged_into_person_id: null
    - claim:
        id: c_zcsq_TdvXJeNpp1Jk_PV_j
        subject_person_id: p_rw3SZ4WX6NQUFQKsyEHVZ4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fbzKwFnip9EhEf2G4NEZSx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UlISaln9WSKjFfaNS3TeME
          claim_id: c_zcsq_TdvXJeNpp1Jk_PV_j
          source_id: s_gYbq4vwudUBHSAnV_hMsX3
          stance: supports
          locator: CBDB：兄弟 王遵（202897）之父／母 王希德
          quotation: null
          interpretation_note: 由兄弟关系推断：王追 与 王遵 为同胞（CBDB 记「兄」），王遵 之父／母即 王追 之父／母。
          source:
            id: s_gYbq4vwudUBHSAnV_hMsX3
            source_type: api_record
            title: 中国历代人物传记资料库：王追（CBDB 290817）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290817&o=json
            external_identifier: CBDB:290817
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rw3SZ4WX6NQUFQKsyEHVZ4
        status: active
        display_name: 王希德
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_OB6KQGlX_7u_rl0XBmAQ9z
        subject_person_id: p_fbzKwFnip9EhEf2G4NEZSx
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_pv2pDE9A1jj2uMGHCGpC7T
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bHKvpqNWlp34DYiC4rAtHF
          claim_id: c_OB6KQGlX_7u_rl0XBmAQ9z
          source_id: s_gYbq4vwudUBHSAnV_hMsX3
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 69148 王廷）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_gYbq4vwudUBHSAnV_hMsX3
            source_type: api_record
            title: 中国历代人物传记资料库：王追（CBDB 290817）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290817&o=json
            external_identifier: CBDB:290817
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pv2pDE9A1jj2uMGHCGpC7T
        status: active
        display_name: 王廷
        merged_into_person_id: null
    - claim:
        id: c_Nm2GP8TbUL-esn2Gv2eku6
        subject_person_id: p_2LvZRKXC4bvnUqu11G57yb
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fbzKwFnip9EhEf2G4NEZSx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XXY0Pkv1IwSyXCOOgti44m
          claim_id: c_Nm2GP8TbUL-esn2Gv2eku6
          source_id: s_gYbq4vwudUBHSAnV_hMsX3
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202897 王遵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_gYbq4vwudUBHSAnV_hMsX3
            source_type: api_record
            title: 中国历代人物传记资料库：王追（CBDB 290817）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290817&o=json
            external_identifier: CBDB:290817
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2LvZRKXC4bvnUqu11G57yb
        status: active
        display_name: 王遵
        merged_into_person_id: null
---

# 王追

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王追，明人物。嘉靖十一年進士，籍贯南充。（中国历代人物传记资料库 CBDB 290817） | accepted |
| name.primary | 王追 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_N7qE8Uar4CzK9TTK6UVM28 | 王希文 | accepted |
| parents | p_rw3SZ4WX6NQUFQKsyEHVZ4 | 王希德 | accepted |
| other | p_pv2pDE9A1jj2uMGHCGpC7T | 王廷 | accepted |
| other | p_2LvZRKXC4bvnUqu11G57yb | 王遵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王追（CBDB 290817）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290817&o=json)
