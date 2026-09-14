---
schema: wang-person/v1
id: p_TuFF97w586gB9dLGs2aawd
status: active
merged_into: null
display_name: 王學周
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4FgmYvyYXMNRwd31HQLSsm
        subject_person_id: p_TuFF97w586gB9dLGs2aawd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學周
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oFcw9ExtZq329YAE8S1tAM
          claim_id: c_4FgmYvyYXMNRwd31HQLSsm
          source_id: s_Wore2qfbJAV3gR5z8jMPiV
          stance: supports
          locator: CBDB:315449
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（315449）
          source: &a1
            id: s_Wore2qfbJAV3gR5z8jMPiV
            source_type: api_record
            title: 中国历代人物传记资料库：王學周（CBDB 315449）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315449&o=json
            external_identifier: CBDB:315449
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.947Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fNYYu3S5UHtFLkLDUeHVYJ
        subject_person_id: p_TuFF97w586gB9dLGs2aawd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學周，明人物。嘉靖三十二年進士，籍贯湘潭。（中国历代人物传记资料库 CBDB 315449）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0sAIqo-1BTuYtmznhR3JZT
          claim_id: c_fNYYu3S5UHtFLkLDUeHVYJ
          source_id: s_Wore2qfbJAV3gR5z8jMPiV
          stance: supports
          locator: CBDB:315449
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_NYqI7WPj_dpFElWGUJMG5h
        subject_person_id: p_6U2hKWNf3zvZ6acQ4hYSRb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TuFF97w586gB9dLGs2aawd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZW7rPFmZ89xAKRstrqVk3B
          claim_id: c_NYqI7WPj_dpFElWGUJMG5h
          source_id: s_vqCWmfMlFc3A3OsbfAl-PN
          stance: supports
          locator: CBDB：兄弟 王學顏（126840）之父／母 王相
          quotation: null
          interpretation_note: 由兄弟关系推断：王學周 与 王學顏 为同胞（CBDB 记「兄」），王學顏 之父／母即 王學周 之父／母。
          source:
            id: s_vqCWmfMlFc3A3OsbfAl-PN
            source_type: api_record
            title: 中国历代人物传记资料库：王學周（CBDB 315449）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315449&o=json
            external_identifier: CBDB:315449
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6U2hKWNf3zvZ6acQ4hYSRb
        status: active
        display_name: 王相
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_3A6EJV9N2nMEJ28uiULcgE
        subject_person_id: p_TuFF97w586gB9dLGs2aawd
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tJ4a7bRMV9hCP3y348uRJE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t9TTMMoJdmRbXoK8mpMzcP
          claim_id: c_3A6EJV9N2nMEJ28uiULcgE
          source_id: s_vqCWmfMlFc3A3OsbfAl-PN
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126840 王學顏）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_vqCWmfMlFc3A3OsbfAl-PN
            source_type: api_record
            title: 中国历代人物传记资料库：王學周（CBDB 315449）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315449&o=json
            external_identifier: CBDB:315449
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tJ4a7bRMV9hCP3y348uRJE
        status: active
        display_name: 王學顏
        merged_into_person_id: null
---

# 王學周

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王學周 | accepted |
| bio.summary | 王學周，明人物。嘉靖三十二年進士，籍贯湘潭。（中国历代人物传记资料库 CBDB 315449） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6U2hKWNf3zvZ6acQ4hYSRb | 王相 | accepted |
| other | p_tJ4a7bRMV9hCP3y348uRJE | 王學顏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王學周（CBDB 315449）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315449&o=json)
