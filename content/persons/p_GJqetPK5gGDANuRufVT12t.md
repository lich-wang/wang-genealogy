---
schema: wang-person/v1
id: p_GJqetPK5gGDANuRufVT12t
status: active
merged_into: null
display_name: 王道高
cbdb_id: 321164
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4wS8D4TTDcZN3tmXZD6PvF
        subject_person_id: p_GJqetPK5gGDANuRufVT12t
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道高，明人物。嘉靖三十五年進士，籍贯常熟。（中国历代人物传记资料库 CBDB 321164）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_IRA7Fd0ttaWUYT88_OKXrd
          claim_id: c_4wS8D4TTDcZN3tmXZD6PvF
          source_id: s_kjGmaLkTSmu4q4dt8geNW9
          stance: supports
          locator: CBDB:321164
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_kjGmaLkTSmu4q4dt8geNW9
            source_type: api_record
            title: 中国历代人物传记资料库：王道高（CBDB 321164）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321164&o=json
            external_identifier: CBDB:321164
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7D37T1kSd3FHGdKoGeQvyu
        subject_person_id: p_GJqetPK5gGDANuRufVT12t
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道高
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_bpPK3V4NaGHvGC9yVrr3SP
          claim_id: c_7D37T1kSd3FHGdKoGeQvyu
          source_id: s_kjGmaLkTSmu4q4dt8geNW9
          stance: supports
          locator: CBDB:321164
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_0ny6ZSjUt1KK7B_7q3NEfe
        subject_person_id: p_VLfme2j6JVKmdY6bLRnUg5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GJqetPK5gGDANuRufVT12t
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I0mVvMqbXmKqXMzm3OeYVz
          claim_id: c_0ny6ZSjUt1KK7B_7q3NEfe
          source_id: s_2NZBE7emd21oyPLaEVmLLr
          stance: supports
          locator: CBDB：兄弟 王道充（204586）之父／母 王法
          quotation: null
          interpretation_note: 由兄弟关系推断：王道高 与 王道充 为同胞（CBDB 记「兄」），王道充 之父／母即 王道高 之父／母。
          source:
            id: s_2NZBE7emd21oyPLaEVmLLr
            source_type: api_record
            title: 中国历代人物传记资料库：王道高（CBDB 321164）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321164&o=json
            external_identifier: CBDB:321164
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VLfme2j6JVKmdY6bLRnUg5
        status: active
        display_name: 王法
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_vIvavKOoZaY8Nt6Diqa96c
        subject_person_id: p_GJqetPK5gGDANuRufVT12t
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_T3W95sW7SgUDh6EEZUezDy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MfCzZiU12FxifRVfL27yVi
          claim_id: c_vIvavKOoZaY8Nt6Diqa96c
          source_id: s_2NZBE7emd21oyPLaEVmLLr
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204586 王道充）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_2NZBE7emd21oyPLaEVmLLr
            source_type: api_record
            title: 中国历代人物传记资料库：王道高（CBDB 321164）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321164&o=json
            external_identifier: CBDB:321164
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_T3W95sW7SgUDh6EEZUezDy
        status: active
        display_name: 王道充
        merged_into_person_id: null
---

# 王道高

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王道高，明人物。嘉靖三十五年進士，籍贯常熟。（中国历代人物传记资料库 CBDB 321164） | accepted |
| name.primary | 王道高 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VLfme2j6JVKmdY6bLRnUg5 | 王法 | accepted |
| other | p_T3W95sW7SgUDh6EEZUezDy | 王道充 | accepted |

## 外部来源

- [中国历代人物传记资料库：王道高（CBDB 321164）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321164&o=json)
