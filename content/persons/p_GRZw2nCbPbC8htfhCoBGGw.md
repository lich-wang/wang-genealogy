---
schema: wang-person/v1
id: p_GRZw2nCbPbC8htfhCoBGGw
status: active
merged_into: null
display_name: 王新民
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7xJmFrF73CRRyFpGN1bLC1
        subject_person_id: p_GRZw2nCbPbC8htfhCoBGGw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王新民
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2jnnx4F6n1XU8TiQooCZKk
          claim_id: c_7xJmFrF73CRRyFpGN1bLC1
          source_id: s_ESx5aiUPtMptUw9h92nrJG
          stance: supports
          locator: CBDB:209983
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（209983）
          source: &a1
            id: s_ESx5aiUPtMptUw9h92nrJG
            source_type: api_record
            title: 中国历代人物传记资料库：王新民（CBDB 209983）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209983&o=json
            external_identifier: CBDB:209983
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.991Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zGx3jpATjjXjGNVKFHvaF9
        subject_person_id: p_GRZw2nCbPbC8htfhCoBGGw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王新民，明人物。隆慶五年進士，籍贯合江。（中国历代人物传记资料库 CBDB 209983）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0rlfoX8M6yJtkDCuGpbDzq
          claim_id: c_zGx3jpATjjXjGNVKFHvaF9
          source_id: s_ESx5aiUPtMptUw9h92nrJG
          stance: supports
          locator: CBDB:209983
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_UlO_j7HAUXNveMJ2BdBPAF
        subject_person_id: p_MdJHKADyMQk6VMaKNEyXK2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GRZw2nCbPbC8htfhCoBGGw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LXZTTJvGsx-e6eT605zubH
          claim_id: c_UlO_j7HAUXNveMJ2BdBPAF
          source_id: s_PXPGeVp4pjMuODlM0PGnLI
          stance: supports
          locator: CBDB：兄弟 王淑民（205869）之父／母 王棟
          quotation: null
          interpretation_note: 由兄弟关系推断：王新民 与 王淑民 为同胞（CBDB 记「兄」），王淑民 之父／母即 王新民 之父／母。
          source:
            id: s_PXPGeVp4pjMuODlM0PGnLI
            source_type: api_record
            title: 中国历代人物传记资料库：王新民（CBDB 209983）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209983&o=json
            external_identifier: CBDB:209983
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MdJHKADyMQk6VMaKNEyXK2
        status: active
        display_name: 王棟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_UyD689E0Ew7zHOqlEPVlwu
        subject_person_id: p_3K8YMQuna5CRk3d72KDoG1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_GRZw2nCbPbC8htfhCoBGGw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XDEUjz-V8_8tV8xLSmp-g5
          claim_id: c_UyD689E0Ew7zHOqlEPVlwu
          source_id: s_PXPGeVp4pjMuODlM0PGnLI
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205869 王淑民）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_PXPGeVp4pjMuODlM0PGnLI
            source_type: api_record
            title: 中国历代人物传记资料库：王新民（CBDB 209983）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209983&o=json
            external_identifier: CBDB:209983
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3K8YMQuna5CRk3d72KDoG1
        status: active
        display_name: 王淑民
        merged_into_person_id: null
---

# 王新民

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王新民 | accepted |
| bio.summary | 王新民，明人物。隆慶五年進士，籍贯合江。（中国历代人物传记资料库 CBDB 209983） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MdJHKADyMQk6VMaKNEyXK2 | 王棟 | accepted |
| other | p_3K8YMQuna5CRk3d72KDoG1 | 王淑民 | accepted |

## 外部来源

- [中国历代人物传记资料库：王新民（CBDB 209983）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209983&o=json)
