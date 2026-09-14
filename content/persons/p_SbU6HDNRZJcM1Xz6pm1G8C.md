---
schema: wang-person/v1
id: p_SbU6HDNRZJcM1Xz6pm1G8C
status: active
merged_into: null
display_name: 王廷詔
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aoXGNefn7KQvkDKqPX27Bu
        subject_person_id: p_SbU6HDNRZJcM1Xz6pm1G8C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷詔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_f1d4KHquqWyF43SrpMSpzL
          claim_id: c_aoXGNefn7KQvkDKqPX27Bu
          source_id: s_kEP9sCz84SzQBbF2wGyTCb
          stance: supports
          locator: CBDB:279540
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（279540）
          source: &a1
            id: s_kEP9sCz84SzQBbF2wGyTCb
            source_type: api_record
            title: 中国历代人物传记资料库：王廷詔（CBDB 279540）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279540&o=json
            external_identifier: CBDB:279540
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.986Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RP8KamrrX8JrsHsnzPEVME
        subject_person_id: p_SbU6HDNRZJcM1Xz6pm1G8C
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷詔，明人物。正德十二年進士，籍贯黃岡。（中国历代人物传记资料库 CBDB 279540）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qRYoCcu9_BGg3tZjQgdF3y
          claim_id: c_RP8KamrrX8JrsHsnzPEVME
          source_id: s_kEP9sCz84SzQBbF2wGyTCb
          stance: supports
          locator: CBDB:279540
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_i51Cx4meFRz1XlzQb60hiT
        subject_person_id: p_CF5LJP7gMSDjjxZDLTJKd5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SbU6HDNRZJcM1Xz6pm1G8C
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8ulw-4ic4nmsdzSh_qrTw9
          claim_id: c_i51Cx4meFRz1XlzQb60hiT
          source_id: s_RY2XDvuB8JF9-L6mARYfn8
          stance: supports
          locator: CBDB：兄弟 王廷陳（34668）之父／母 王濟
          quotation: null
          interpretation_note: 由兄弟关系推断：王廷詔 与 王廷陳 为同胞（CBDB 记「弟」），王廷陳 之父／母即 王廷詔 之父／母。
          source:
            id: s_RY2XDvuB8JF9-L6mARYfn8
            source_type: api_record
            title: 中国历代人物传记资料库：王廷詔（CBDB 279540）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279540&o=json
            external_identifier: CBDB:279540
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CF5LJP7gMSDjjxZDLTJKd5
        status: active
        display_name: 王濟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_BvwZM4qBv-lKZG9q13yfZG
        subject_person_id: p_SbU6HDNRZJcM1Xz6pm1G8C
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qLcC4SmUNJ1rkkQyeeqtKk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ut7fVNc1HPBNiA81dKezsa
          claim_id: c_BvwZM4qBv-lKZG9q13yfZG
          source_id: s_RY2XDvuB8JF9-L6mARYfn8
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 34668 王廷陳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_RY2XDvuB8JF9-L6mARYfn8
            source_type: api_record
            title: 中国历代人物传记资料库：王廷詔（CBDB 279540）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279540&o=json
            external_identifier: CBDB:279540
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qLcC4SmUNJ1rkkQyeeqtKk
        status: active
        display_name: 王廷陳
        merged_into_person_id: null
---

# 王廷詔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷詔 | accepted |
| bio.summary | 王廷詔，明人物。正德十二年進士，籍贯黃岡。（中国历代人物传记资料库 CBDB 279540） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CF5LJP7gMSDjjxZDLTJKd5 | 王濟 | accepted |
| other | p_qLcC4SmUNJ1rkkQyeeqtKk | 王廷陳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王廷詔（CBDB 279540）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279540&o=json)
