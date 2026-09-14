---
schema: wang-person/v1
id: p_g2Gb3yfFytNs2NFtyXe7FU
status: active
merged_into: null
display_name: 王元
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Tm2CPJ8d5vd5FVDfst7Wjd
        subject_person_id: p_g2Gb3yfFytNs2NFtyXe7FU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Wworgza55F5k8Pbu3Xdgv6
          claim_id: c_Tm2CPJ8d5vd5FVDfst7Wjd
          source_id: s_CV46GSL6vBh23jhaGENg5h
          stance: supports
          locator: CBDB:262293
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（262293）
          source: &a1
            id: s_CV46GSL6vBh23jhaGENg5h
            source_type: api_record
            title: 中国历代人物传记资料库：王元（CBDB 262293）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262293&o=json
            external_identifier: CBDB:262293
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.582Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LmgVgquHznPrG6TN2Vqzbp
        subject_person_id: p_g2Gb3yfFytNs2NFtyXe7FU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元，明人物。弘治三年進士，籍贯蠡縣。（中国历代人物传记资料库 CBDB 262293）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__XPQU5TdmEfH48uztMUue0
          claim_id: c_LmgVgquHznPrG6TN2Vqzbp
          source_id: s_CV46GSL6vBh23jhaGENg5h
          stance: supports
          locator: CBDB:262293
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_jFgUaec6uL-FrsG-d5OyYw
        subject_person_id: p_2XQ9edNzTjVFAjV2kU7q1C
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_g2Gb3yfFytNs2NFtyXe7FU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vfJAcOEQXbYoKsYVyW82FU
          claim_id: c_jFgUaec6uL-FrsG-d5OyYw
          source_id: s_SRc6_w7iiRRpXOxhDFnWd4
          stance: supports
          locator: CBDB：兄弟 王凱（200743）之父／母 王舉
          quotation: null
          interpretation_note: 由兄弟关系推断：王元 与 王凱 为同胞（CBDB 记「弟」），王凱 之父／母即 王元 之父／母。
          source:
            id: s_SRc6_w7iiRRpXOxhDFnWd4
            source_type: api_record
            title: 中国历代人物传记资料库：王元（CBDB 262293）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262293&o=json
            external_identifier: CBDB:262293
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2XQ9edNzTjVFAjV2kU7q1C
        status: active
        display_name: 王舉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_mfRgs1Iy9toWTYqkIGuHw9
        subject_person_id: p_g2Gb3yfFytNs2NFtyXe7FU
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_z8mgWQExeo9ps9NYQ1o1hg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C9qHKxXzSl0ihOm51578F0
          claim_id: c_mfRgs1Iy9toWTYqkIGuHw9
          source_id: s_SRc6_w7iiRRpXOxhDFnWd4
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200743 王凱）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_SRc6_w7iiRRpXOxhDFnWd4
            source_type: api_record
            title: 中国历代人物传记资料库：王元（CBDB 262293）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262293&o=json
            external_identifier: CBDB:262293
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_z8mgWQExeo9ps9NYQ1o1hg
        status: active
        display_name: 王凱
        merged_into_person_id: null
---

# 王元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元 | accepted |
| bio.summary | 王元，明人物。弘治三年進士，籍贯蠡縣。（中国历代人物传记资料库 CBDB 262293） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2XQ9edNzTjVFAjV2kU7q1C | 王舉 | accepted |
| other | p_z8mgWQExeo9ps9NYQ1o1hg | 王凱 | accepted |

## 外部来源

- [中国历代人物传记资料库：王元（CBDB 262293）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262293&o=json)
