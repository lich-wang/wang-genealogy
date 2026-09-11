---
schema: wang-person/v1
id: p_SVNZL8P3EB13LuNV5sxppY
status: active
merged_into: null
display_name: 王天爵
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8uQnpxkykSgnD4ZKkSsJpw
        subject_person_id: p_SVNZL8P3EB13LuNV5sxppY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天爵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D9GUtBLT5SEzrKmiVsKxCm
          claim_id: c_8uQnpxkykSgnD4ZKkSsJpw
          source_id: s_EjKdf46TDnTzhRhoN38gKt
          stance: supports
          locator: CBDB:126474
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126474）
          source: &a1
            id: s_EjKdf46TDnTzhRhoN38gKt
            source_type: api_record
            title: 中国历代人物传记资料库：王天爵（CBDB 126474）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126474&o=json
            external_identifier: CBDB:126474
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.978Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Ara9SU14JuoeKAuc7JY8Mc
        subject_person_id: p_SVNZL8P3EB13LuNV5sxppY
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1516年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uPhm1dRiP4yycfKg1iSRF3
          claim_id: c_Ara9SU14JuoeKAuc7JY8Mc
          source_id: s_EjKdf46TDnTzhRhoN38gKt
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
        id: c_fsX8EAy4ggKsyHFRQKo22f
        subject_person_id: p_SVNZL8P3EB13LuNV5sxppY
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1600年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uMavc1cWtL8STRT3hqHAEU
          claim_id: c_fsX8EAy4ggKsyHFRQKo22f
          source_id: s_EjKdf46TDnTzhRhoN38gKt
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
        id: c_iSKzEPmhcQ6Hzo9HypwnuK
        subject_person_id: p_SVNZL8P3EB13LuNV5sxppY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天爵（1516年—1600年），明人物。明清進士進士，籍贯歙縣，身份为以疾廢，入仕進士。（中国历代人物传记资料库 CBDB 126474）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7TO03YHNyZ4gwiJqNhAcBs
          claim_id: c_iSKzEPmhcQ6Hzo9HypwnuK
          source_id: s_EjKdf46TDnTzhRhoN38gKt
          stance: supports
          locator: CBDB:126474
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_COxS7jrr0HQmzg5KtJRfke
        subject_person_id: p_BZ632SwpqzGW4p9bQ7s6FS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SVNZL8P3EB13LuNV5sxppY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WGy1LhWLS-sX6c-QdC4LLu
          claim_id: c_COxS7jrr0HQmzg5KtJRfke
          source_id: s_ZMW58ooJeCqNM9XCcCLDqk
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第三甲第四十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ZMW58ooJeCqNM9XCcCLDqk
            source_type: api_record
            title: 中国历代人物传记资料库：王廷政（CBDB 324338）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324338&o=json
            external_identifier: CBDB:324338
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_BZ632SwpqzGW4p9bQ7s6FS
        status: active
        display_name: 王廷政
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_E4H5td9vNuHJ5wBSVBW0ay
        subject_person_id: p_E2HwHr2pi9WqbFQAvC6jo7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_SVNZL8P3EB13LuNV5sxppY
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CPgEuHBsm9ArgXJwKRRgiq
          claim_id: c_E4H5td9vNuHJ5wBSVBW0ay
          source_id: s_XD5jiFZD7E1boaKYJ5iKBp
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第三甲第四十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_XD5jiFZD7E1boaKYJ5iKBp
            source_type: api_record
            title: 中国历代人物传记资料库：王鶴（CBDB 324337）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324337&o=json
            external_identifier: CBDB:324337
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.177Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_E2HwHr2pi9WqbFQAvC6jo7
        status: active
        display_name: 王鶴
        merged_into_person_id: null
    - claim:
        id: c_p5eF1i0-aFPGSEa-2NUTWk
        subject_person_id: p_Cg9bCFiwbwFZ5DeCWev5Vs
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_SVNZL8P3EB13LuNV5sxppY
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6QeZe-xDDnOKCXlHQGFr1F
          claim_id: c_p5eF1i0-aFPGSEa-2NUTWk
          source_id: s_rKoh5L8nub14GGEWFvvGCw
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第三甲第四十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rKoh5L8nub14GGEWFvvGCw
            source_type: api_record
            title: 中国历代人物传记资料库：王企孫（CBDB 324336）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324336&o=json
            external_identifier: CBDB:324336
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_Cg9bCFiwbwFZ5DeCWev5Vs
        status: active
        display_name: 王企孫
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王天爵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王天爵 | accepted |
| birth.date | 1516年 | accepted |
| death.date | 1600年 | accepted |
| bio.summary | 王天爵（1516年—1600年），明人物。明清進士進士，籍贯歙縣，身份为以疾廢，入仕進士。（中国历代人物传记资料库 CBDB 126474） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BZ632SwpqzGW4p9bQ7s6FS | 王廷政 | accepted |
| ancestors | p_E2HwHr2pi9WqbFQAvC6jo7 | 王鶴 | accepted |
| ancestors | p_Cg9bCFiwbwFZ5DeCWev5Vs | 王企孫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鶴（CBDB 324337）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324337&o=json)
- [中国历代人物传记资料库：王企孫（CBDB 324336）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324336&o=json)
- [中国历代人物传记资料库：王天爵（CBDB 126474）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126474&o=json)
- [中国历代人物传记资料库：王廷政（CBDB 324338）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324338&o=json)
