---
schema: wang-person/v1
id: p_SPdF8Kd1CdqXNK2ZQBMdGJ
status: active
merged_into: null
display_name: 王室屏
cbdb_id: 223630
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LJRtnKYTJPqbfsgYZ93GbM
        subject_person_id: p_SPdF8Kd1CdqXNK2ZQBMdGJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王室屏，明人物。萬曆十一年進士，籍贯曲周。（中国历代人物传记资料库 CBDB 223630）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Vm6LtUEN172lY7xfmyneWi
          claim_id: c_LJRtnKYTJPqbfsgYZ93GbM
          source_id: s_xRJ9dTrttpPLNBVyR9vbw4
          stance: supports
          locator: CBDB:223630
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_xRJ9dTrttpPLNBVyR9vbw4
            source_type: api_record
            title: 中国历代人物传记资料库：王室屏（CBDB 223630）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223630&o=json
            external_identifier: CBDB:223630
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_iie5bE2qVD5BRJu7CTGMz4
        subject_person_id: p_SPdF8Kd1CdqXNK2ZQBMdGJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王室屏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_db9gGLAHLq5s6HCEa28K98
          claim_id: c_iie5bE2qVD5BRJu7CTGMz4
          source_id: s_xRJ9dTrttpPLNBVyR9vbw4
          stance: supports
          locator: CBDB:223630
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2601-2700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_UTdDYYiWdgyuUvHLATiSrf
        subject_person_id: p_bGYu4dMVakhcDXuLef1B17
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SPdF8Kd1CdqXNK2ZQBMdGJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XRskxLguoQtULXdSId5zKb
          claim_id: c_UTdDYYiWdgyuUvHLATiSrf
          source_id: s_wisNwsKuTBcbb1CBvtZaPr
          stance: supports
          locator: CBDB：兄弟 王室垣（206814）之父／母 王一舉
          quotation: null
          interpretation_note: 由兄弟关系推断：王室屏 与 王室垣 为同胞（CBDB 记「兄」），王室垣 之父／母即 王室屏 之父／母。
          source:
            id: s_wisNwsKuTBcbb1CBvtZaPr
            source_type: api_record
            title: 中国历代人物传记资料库：王室屏（CBDB 223630）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223630&o=json
            external_identifier: CBDB:223630
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bGYu4dMVakhcDXuLef1B17
        status: active
        display_name: 王一舉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_HxwQ8jpsmzv7lm6mUEYQcp
        subject_person_id: p_3hY5he8M9mkvGyZik66bM3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_SPdF8Kd1CdqXNK2ZQBMdGJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1j6UmOazuNDsbqyrNLzxnX
          claim_id: c_HxwQ8jpsmzv7lm6mUEYQcp
          source_id: s_wisNwsKuTBcbb1CBvtZaPr
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206814 王室垣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_wisNwsKuTBcbb1CBvtZaPr
            source_type: api_record
            title: 中国历代人物传记资料库：王室屏（CBDB 223630）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223630&o=json
            external_identifier: CBDB:223630
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3hY5he8M9mkvGyZik66bM3
        status: active
        display_name: 王室垣
        merged_into_person_id: null
---

# 王室屏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王室屏，明人物。萬曆十一年進士，籍贯曲周。（中国历代人物传记资料库 CBDB 223630） | accepted |
| name.primary | 王室屏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_bGYu4dMVakhcDXuLef1B17 | 王一舉 | accepted |
| other | p_3hY5he8M9mkvGyZik66bM3 | 王室垣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王室屏（CBDB 223630）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223630&o=json)
