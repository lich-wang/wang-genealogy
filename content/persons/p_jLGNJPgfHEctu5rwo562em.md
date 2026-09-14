---
schema: wang-person/v1
id: p_jLGNJPgfHEctu5rwo562em
status: active
merged_into: null
display_name: 王淮
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5tWZaCcPmDbb7yo8fYGBJA
        subject_person_id: p_jLGNJPgfHEctu5rwo562em
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fG3LRuTMGNAGTaiqipfKXK
          claim_id: c_5tWZaCcPmDbb7yo8fYGBJA
          source_id: s_edQ8NiYrdpRWq4GDAbzYD3
          stance: supports
          locator: CBDB:318314
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（318314）
          source: &a1
            id: s_edQ8NiYrdpRWq4GDAbzYD3
            source_type: api_record
            title: 中国历代人物传记资料库：王淮（CBDB 318314）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318314&o=json
            external_identifier: CBDB:318314
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.991Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AFcA6HE76u9WXiLtBqiJ2H
        subject_person_id: p_jLGNJPgfHEctu5rwo562em
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淮，明人物。嘉靖三十二年進士，籍贯濱州。（中国历代人物传记资料库 CBDB 318314）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ARBbLZbpXcYjNNwgzGBs_L
          claim_id: c_AFcA6HE76u9WXiLtBqiJ2H
          source_id: s_edQ8NiYrdpRWq4GDAbzYD3
          stance: supports
          locator: CBDB:318314
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_JhH_adgyovf5je41fQhg7I
        subject_person_id: p_EGM3NKNbuzivbf6yG7YfAa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jLGNJPgfHEctu5rwo562em
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sPpuMn-6Kua_jqmuRGAZb5
          claim_id: c_JhH_adgyovf5je41fQhg7I
          source_id: s__Mt179SmdGn7fiDY12wyYD
          stance: supports
          locator: CBDB：兄弟 王汝言（126500）之父／母 王鎌
          quotation: null
          interpretation_note: 由兄弟关系推断：王淮 与 王汝言 为同胞（CBDB 记「弟」），王汝言 之父／母即 王淮 之父／母。
          source:
            id: s__Mt179SmdGn7fiDY12wyYD
            source_type: api_record
            title: 中国历代人物传记资料库：王淮（CBDB 318314）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318314&o=json
            external_identifier: CBDB:318314
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EGM3NKNbuzivbf6yG7YfAa
        status: active
        display_name: 王鎌
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_rFEOVQ3ooA6UJExrijwYH9
        subject_person_id: p_jLGNJPgfHEctu5rwo562em
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sNBx1By3rYXjFtLdVCyoze
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Uj2JDmNkBG9BFo6x0REPPT
          claim_id: c_rFEOVQ3ooA6UJExrijwYH9
          source_id: s__Mt179SmdGn7fiDY12wyYD
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126500 王汝言）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__Mt179SmdGn7fiDY12wyYD
            source_type: api_record
            title: 中国历代人物传记资料库：王淮（CBDB 318314）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318314&o=json
            external_identifier: CBDB:318314
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sNBx1By3rYXjFtLdVCyoze
        status: active
        display_name: 王汝言
        merged_into_person_id: null
---

# 王淮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淮 | accepted |
| bio.summary | 王淮，明人物。嘉靖三十二年進士，籍贯濱州。（中国历代人物传记资料库 CBDB 318314） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EGM3NKNbuzivbf6yG7YfAa | 王鎌 | accepted |
| other | p_sNBx1By3rYXjFtLdVCyoze | 王汝言 | accepted |

## 外部来源

- [中国历代人物传记资料库：王淮（CBDB 318314）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318314&o=json)
