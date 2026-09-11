---
schema: wang-person/v1
id: p_PMxPh6YFaGgPp7KZmoPJPf
status: active
merged_into: null
display_name: 王璹
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pS1rPwKLuG2KWE18NNqwSZ
        subject_person_id: p_PMxPh6YFaGgPp7KZmoPJPf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8dr54DeUtB4vufCQ8QHuoF
          claim_id: c_pS1rPwKLuG2KWE18NNqwSZ
          source_id: s_3sgWvUgwtbZ9d7TvQtKAVQ
          stance: supports
          locator: CBDB:1876
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1876）
          source: &a1
            id: s_3sgWvUgwtbZ9d7TvQtKAVQ
            source_type: api_record
            title: 中国历代人物传记资料库：王璹（CBDB 1876）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1876&o=json
            external_identifier: CBDB:1876
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.367Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1c5tGvfaBTY9fq1BLiBd4j
        subject_person_id: p_PMxPh6YFaGgPp7KZmoPJPf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璹，宋人物。籍贯真定，曾任朝散大夫、轉運司判官、轉運使。（中国历代人物传记资料库 CBDB 1876）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xK2WywR-Mcdex0KS2WiY4Y
          claim_id: c_1c5tGvfaBTY9fq1BLiBd4j
          source_id: s_3sgWvUgwtbZ9d7TvQtKAVQ
          stance: supports
          locator: CBDB:1876
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_RjlIGDRsE5_Z-j6FEzL82F
        subject_person_id: p_8mHMyrFjqZr1nrmVTR3TzK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PMxPh6YFaGgPp7KZmoPJPf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FnRay85q23EwBPGQth91_x
          claim_id: c_RjlIGDRsE5_Z-j6FEzL82F
          source_id: s_DXMXvfCuuComCHUn4wVjqF
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1268：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DXMXvfCuuComCHUn4wVjqF
            source_type: api_record
            title: 中国历代人物传记资料库：王詔（CBDB 1773）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1773&o=json
            external_identifier: CBDB:1773
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.229Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8mHMyrFjqZr1nrmVTR3TzK
        status: active
        display_name: 王詔
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王璹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璹 | accepted |
| bio.summary | 王璹，宋人物。籍贯真定，曾任朝散大夫、轉運司判官、轉運使。（中国历代人物传记资料库 CBDB 1876） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8mHMyrFjqZr1nrmVTR3TzK | 王詔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璹（CBDB 1876）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1876&o=json)
- [中国历代人物传记资料库：王詔（CBDB 1773）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1773&o=json)
