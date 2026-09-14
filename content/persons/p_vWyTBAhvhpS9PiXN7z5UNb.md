---
schema: wang-person/v1
id: p_vWyTBAhvhpS9PiXN7z5UNb
status: active
merged_into: null
display_name: 王弘仁
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uG79VZPVHnwCGBc8NbvkC3
        subject_person_id: p_vWyTBAhvhpS9PiXN7z5UNb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_i7d689FXXZ1jMJLdnGREqZ
          claim_id: c_uG79VZPVHnwCGBc8NbvkC3
          source_id: s_4LwR6H7DNJjYYeUyV7CrDR
          stance: supports
          locator: CBDB:294206
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（294206）
          source: &a1
            id: s_4LwR6H7DNJjYYeUyV7CrDR
            source_type: api_record
            title: 中国历代人物传记资料库：王弘仁（CBDB 294206）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294206&o=json
            external_identifier: CBDB:294206
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.439Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FjmGo1XMvciyy75sw6RQaT
        subject_person_id: p_vWyTBAhvhpS9PiXN7z5UNb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘仁，明人物。嘉靖十一年進士，籍贯霑化。（中国历代人物传记资料库 CBDB 294206）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-LcB5e4pUTz7JbRpzNUa3j
          claim_id: c_FjmGo1XMvciyy75sw6RQaT
          source_id: s_4LwR6H7DNJjYYeUyV7CrDR
          stance: supports
          locator: CBDB:294206
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_BfF_ffcck-WwWhcoiG-ltV
        subject_person_id: p_aSjUnGimC5SWPWNHQXYgEV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vWyTBAhvhpS9PiXN7z5UNb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b0yMJX-XiJVK5hNpQM-mve
          claim_id: c_BfF_ffcck-WwWhcoiG-ltV
          source_id: s_b6kVMWEmbuVWwe4xu1Wrjl
          stance: supports
          locator: CBDB：兄弟 王弘道（202780）之父／母 王慶
          quotation: null
          interpretation_note: 由兄弟关系推断：王弘仁 与 王弘道 为同胞（CBDB 记「弟」），王弘道 之父／母即 王弘仁 之父／母。
          source:
            id: s_b6kVMWEmbuVWwe4xu1Wrjl
            source_type: api_record
            title: 中国历代人物传记资料库：王弘仁（CBDB 294206）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294206&o=json
            external_identifier: CBDB:294206
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aSjUnGimC5SWPWNHQXYgEV
        status: active
        display_name: 王慶
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_BqKu-1GuQ_VIel7NZCkBDA
        subject_person_id: p_sLhnC92rQu1PepE5sPJ3EL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_vWyTBAhvhpS9PiXN7z5UNb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_heNJwwikMiP_32-dDwkvFa
          claim_id: c_BqKu-1GuQ_VIel7NZCkBDA
          source_id: s_b6kVMWEmbuVWwe4xu1Wrjl
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202780 王弘道）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_b6kVMWEmbuVWwe4xu1Wrjl
            source_type: api_record
            title: 中国历代人物传记资料库：王弘仁（CBDB 294206）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294206&o=json
            external_identifier: CBDB:294206
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sLhnC92rQu1PepE5sPJ3EL
        status: active
        display_name: 王弘道
        merged_into_person_id: null
---

# 王弘仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王弘仁 | accepted |
| bio.summary | 王弘仁，明人物。嘉靖十一年進士，籍贯霑化。（中国历代人物传记资料库 CBDB 294206） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_aSjUnGimC5SWPWNHQXYgEV | 王慶 | accepted |
| other | p_sLhnC92rQu1PepE5sPJ3EL | 王弘道 | accepted |

## 外部来源

- [中国历代人物传记资料库：王弘仁（CBDB 294206）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294206&o=json)
