---
schema: wang-person/v1
id: p_UDMV4U4rJ5Mjn7kpeFjqhq
status: active
merged_into: null
display_name: 王緝
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xYFTNNF33kBSggovFkRqxi
        subject_person_id: p_UDMV4U4rJ5Mjn7kpeFjqhq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王緝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oQ9m7zXmTf814AmuNpPEqc
          claim_id: c_xYFTNNF33kBSggovFkRqxi
          source_id: s_Y5HTEt7YcgnG6wvsQ4VQ3Y
          stance: supports
          locator: CBDB:242731
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（242731）
          source: &a1
            id: s_Y5HTEt7YcgnG6wvsQ4VQ3Y
            source_type: api_record
            title: 中国历代人物传记资料库：王緝（CBDB 242731）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242731&o=json
            external_identifier: CBDB:242731
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.980Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LQZVyA2fjWZzK5qyK7AXci
        subject_person_id: p_UDMV4U4rJ5Mjn7kpeFjqhq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王緝，明人物。成化五年進士，籍贯宜興。（中国历代人物传记资料库 CBDB 242731）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XcmGLEt2jdF-2ywHO-wUo8
          claim_id: c_LQZVyA2fjWZzK5qyK7AXci
          source_id: s_Y5HTEt7YcgnG6wvsQ4VQ3Y
          stance: supports
          locator: CBDB:242731
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_585Msx1wSbG133HLgW_ap0
        subject_person_id: p_kUx3oCAAhxc2diNZfU7tJD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UDMV4U4rJ5Mjn7kpeFjqhq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kBN1UaiTFOX6lR4Z5GIcvT
          claim_id: c_585Msx1wSbG133HLgW_ap0
          source_id: s_EZHOYvyCYhiBnHby4UFmVX
          stance: supports
          locator: CBDB：兄弟 王纓（199281）之父／母 王懋
          quotation: null
          interpretation_note: 由兄弟关系推断：王緝 与 王纓 为同胞（CBDB 记「兄」），王纓 之父／母即 王緝 之父／母。
          source:
            id: s_EZHOYvyCYhiBnHby4UFmVX
            source_type: api_record
            title: 中国历代人物传记资料库：王緝（CBDB 242731）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242731&o=json
            external_identifier: CBDB:242731
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kUx3oCAAhxc2diNZfU7tJD
        status: active
        display_name: 王懋
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_-QOMGf3PCI_LVm8Jlb4fZi
        subject_person_id: p_UDMV4U4rJ5Mjn7kpeFjqhq
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_peHrYdss4DG3Q61Kgik3ci
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1Qge1WB93M4-lcPbeovIFs
          claim_id: c_-QOMGf3PCI_LVm8Jlb4fZi
          source_id: s_EZHOYvyCYhiBnHby4UFmVX
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199281 王纓）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_EZHOYvyCYhiBnHby4UFmVX
            source_type: api_record
            title: 中国历代人物传记资料库：王緝（CBDB 242731）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242731&o=json
            external_identifier: CBDB:242731
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_peHrYdss4DG3Q61Kgik3ci
        status: active
        display_name: 王纓
        merged_into_person_id: null
---

# 王緝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王緝 | accepted |
| bio.summary | 王緝，明人物。成化五年進士，籍贯宜興。（中国历代人物传记资料库 CBDB 242731） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kUx3oCAAhxc2diNZfU7tJD | 王懋 | accepted |
| other | p_peHrYdss4DG3Q61Kgik3ci | 王纓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王緝（CBDB 242731）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242731&o=json)
