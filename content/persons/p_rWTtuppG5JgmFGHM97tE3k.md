---
schema: wang-person/v1
id: p_rWTtuppG5JgmFGHM97tE3k
status: active
merged_into: null
display_name: 王海實
cbdb_id: 228113
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uuqAAA41PdLwbgSMtBBsME
        subject_person_id: p_rWTtuppG5JgmFGHM97tE3k
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王海實，明人物。萬曆丙戌科進士進士，籍贯耀州。（中国历代人物传记资料库 CBDB 228113）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_3RZeDfMk8Jjs08lxvZu1M0
          claim_id: c_uuqAAA41PdLwbgSMtBBsME
          source_id: s_bD8pgMoPLbVJ4yGo7KRtDB
          stance: supports
          locator: CBDB:228113
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_bD8pgMoPLbVJ4yGo7KRtDB
            source_type: api_record
            title: 中国历代人物传记资料库：王海實（CBDB 228113）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228113&o=json
            external_identifier: CBDB:228113
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_yyWi9JTG5fpDk61LgKh2qb
        subject_person_id: p_rWTtuppG5JgmFGHM97tE3k
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王海實
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_oUABNkKNBDunmFpEp7AJWf
          claim_id: c_yyWi9JTG5fpDk61LgKh2qb
          source_id: s_bD8pgMoPLbVJ4yGo7KRtDB
          stance: supports
          locator: CBDB:228113
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2601-2700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Cq671EblFLgF-nMTL3lsGG
        subject_person_id: p_q3ewFUkH4tvUNYqQiNKdGz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rWTtuppG5JgmFGHM97tE3k
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6ePVvjARf-Nc_Pxx31Ah5F
          claim_id: c_Cq671EblFLgF-nMTL3lsGG
          source_id: s_eB6sIk9u53zrKFBTQ3GzpO
          stance: supports
          locator: CBDB：兄弟 王圖（123710）之父／母 王邦憲
          quotation: null
          interpretation_note: 由兄弟关系推断：王海實 与 王圖 为同胞（CBDB 记「兄」），王圖 之父／母即 王海實 之父／母。
          source:
            id: s_eB6sIk9u53zrKFBTQ3GzpO
            source_type: api_record
            title: 中国历代人物传记资料库：王海實（CBDB 228113）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228113&o=json
            external_identifier: CBDB:228113
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_q3ewFUkH4tvUNYqQiNKdGz
        status: active
        display_name: 王邦憲
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_0klmKjnC9AQjK0PmyZ7G4s
        subject_person_id: p_h3Q7yK4WppDDdJLx2W9dJW
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rWTtuppG5JgmFGHM97tE3k
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oyAL7cK38lZalse6AviV4u
          claim_id: c_0klmKjnC9AQjK0PmyZ7G4s
          source_id: s_eB6sIk9u53zrKFBTQ3GzpO
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 123710 王圖）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_eB6sIk9u53zrKFBTQ3GzpO
            source_type: api_record
            title: 中国历代人物传记资料库：王海實（CBDB 228113）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228113&o=json
            external_identifier: CBDB:228113
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_h3Q7yK4WppDDdJLx2W9dJW
        status: active
        display_name: 王圖
        merged_into_person_id: null
---

# 王海實

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王海實，明人物。萬曆丙戌科進士進士，籍贯耀州。（中国历代人物传记资料库 CBDB 228113） | accepted |
| name.primary | 王海實 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_q3ewFUkH4tvUNYqQiNKdGz | 王邦憲 | accepted |
| other | p_h3Q7yK4WppDDdJLx2W9dJW | 王圖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王海實（CBDB 228113）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228113&o=json)
