---
schema: wang-person/v1
id: p_NCUgiWasKpCG1soTZ2QcFB
status: active
merged_into: null
display_name: 王鎬
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3aArJD1dKr61bA9aYGYBMf
        subject_person_id: p_NCUgiWasKpCG1soTZ2QcFB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_T8c1JGr7y3VNoYdwR6rHhJ
          claim_id: c_3aArJD1dKr61bA9aYGYBMf
          source_id: s_zSo6LoAfF74Tm6bz7Xi1Ha
          stance: supports
          locator: CBDB:247840
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（247840）
          source: &a1
            id: s_zSo6LoAfF74Tm6bz7Xi1Ha
            source_type: api_record
            title: 中国历代人物传记资料库：王鎬（CBDB 247840）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247840&o=json
            external_identifier: CBDB:247840
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.142Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Xv1ox88mmKbjPrXHBe1LJo
        subject_person_id: p_NCUgiWasKpCG1soTZ2QcFB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎬，明人物。成化十一年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 247840）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_f1MZN-4lEYvqNnyaWfh9qc
          claim_id: c_Xv1ox88mmKbjPrXHBe1LJo
          source_id: s_zSo6LoAfF74Tm6bz7Xi1Ha
          stance: supports
          locator: CBDB:247840
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_KH4q2d52T2dHHenlZvNANO
        subject_person_id: p_gyKQYKFYiRFh2ZMNQQhCtN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NCUgiWasKpCG1soTZ2QcFB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DKFxVEMThaY6EQvFawn5d8
          claim_id: c_KH4q2d52T2dHHenlZvNANO
          source_id: s_NxUy5kE6XVQ9zA8LYSVDXn
          stance: supports
          locator: CBDB：兄弟 王鍃（199647）之父／母 王鼎
          quotation: null
          interpretation_note: 由兄弟关系推断：王鎬 与 王鍃 为同胞（CBDB 记「弟」），王鍃 之父／母即 王鎬 之父／母。
          source:
            id: s_NxUy5kE6XVQ9zA8LYSVDXn
            source_type: api_record
            title: 中国历代人物传记资料库：王鎬（CBDB 247840）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247840&o=json
            external_identifier: CBDB:247840
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gyKQYKFYiRFh2ZMNQQhCtN
        status: active
        display_name: 王鼎
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_gR9x1aEBa6nWw2iB1oI81w
        subject_person_id: p_NCUgiWasKpCG1soTZ2QcFB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ZjuF9BMneyLuUjQuike359
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VDdYVsqyhyYm5xGwLXsIme
          claim_id: c_gR9x1aEBa6nWw2iB1oI81w
          source_id: s_NxUy5kE6XVQ9zA8LYSVDXn
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199647 王鍃）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_NxUy5kE6XVQ9zA8LYSVDXn
            source_type: api_record
            title: 中国历代人物传记资料库：王鎬（CBDB 247840）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247840&o=json
            external_identifier: CBDB:247840
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZjuF9BMneyLuUjQuike359
        status: active
        display_name: 王鍃
        merged_into_person_id: null
---

# 王鎬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎬 | accepted |
| bio.summary | 王鎬，明人物。成化十一年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 247840） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gyKQYKFYiRFh2ZMNQQhCtN | 王鼎 | accepted |
| other | p_ZjuF9BMneyLuUjQuike359 | 王鍃 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鎬（CBDB 247840）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247840&o=json)
