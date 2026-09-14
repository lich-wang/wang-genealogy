---
schema: wang-person/v1
id: p_xs6RgvvreikrtPXBqdHT2K
status: active
merged_into: null
display_name: 王寧
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RLhraBWowsynKbtErHo6Pa
        subject_person_id: p_xs6RgvvreikrtPXBqdHT2K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BtPvh4GT3tvMt7NL5448fF
          claim_id: c_RLhraBWowsynKbtErHo6Pa
          source_id: s_j6q3uuVLqcTcrSXKh8VmBe
          stance: supports
          locator: CBDB:327534
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（327534）
          source: &a1
            id: s_j6q3uuVLqcTcrSXKh8VmBe
            source_type: api_record
            title: 中国历代人物传记资料库：王寧（CBDB 327534）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327534&o=json
            external_identifier: CBDB:327534
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.249Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kAYqLdVRFXLTWo3vCLx7B9
        subject_person_id: p_xs6RgvvreikrtPXBqdHT2K
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寧，明人物。嘉靖四十一年進士，籍贯安邑。（中国历代人物传记资料库 CBDB 327534）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_slrgfSC092zlk9sgxH6k3p
          claim_id: c_kAYqLdVRFXLTWo3vCLx7B9
          source_id: s_j6q3uuVLqcTcrSXKh8VmBe
          stance: supports
          locator: CBDB:327534
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_-8wKJww81bbQau4d2ssnmo
        subject_person_id: p_kmpABikpWftaJACcFD3yJ1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xs6RgvvreikrtPXBqdHT2K
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B17J7bL4j0NYT40pKIAXEk
          claim_id: c_-8wKJww81bbQau4d2ssnmo
          source_id: s_NIMdDLb3tvNuF8SagHeHTO
          stance: supports
          locator: CBDB：兄弟 王宇（205042）之父／母 王繼德
          quotation: null
          interpretation_note: 由兄弟关系推断：王寧 与 王宇 为同胞（CBDB 记「兄」），王宇 之父／母即 王寧 之父／母。
          source:
            id: s_NIMdDLb3tvNuF8SagHeHTO
            source_type: api_record
            title: 中国历代人物传记资料库：王寧（CBDB 327534）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327534&o=json
            external_identifier: CBDB:327534
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kmpABikpWftaJACcFD3yJ1
        status: active
        display_name: 王繼德
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_y_ClZ7HfF0vO7K3j6lGiaK
        subject_person_id: p_DhXJg1QUSd5Fvqo5eHzd45
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xs6RgvvreikrtPXBqdHT2K
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PyOD2kWbZxsNWoXCumkaVH
          claim_id: c_y_ClZ7HfF0vO7K3j6lGiaK
          source_id: s_NIMdDLb3tvNuF8SagHeHTO
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205042 王宇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_NIMdDLb3tvNuF8SagHeHTO
            source_type: api_record
            title: 中国历代人物传记资料库：王寧（CBDB 327534）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327534&o=json
            external_identifier: CBDB:327534
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DhXJg1QUSd5Fvqo5eHzd45
        status: active
        display_name: 王宇
        merged_into_person_id: null
---

# 王寧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寧 | accepted |
| bio.summary | 王寧，明人物。嘉靖四十一年進士，籍贯安邑。（中国历代人物传记资料库 CBDB 327534） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kmpABikpWftaJACcFD3yJ1 | 王繼德 | accepted |
| other | p_DhXJg1QUSd5Fvqo5eHzd45 | 王宇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寧（CBDB 327534）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327534&o=json)
