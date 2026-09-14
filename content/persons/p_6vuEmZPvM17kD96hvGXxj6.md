---
schema: wang-person/v1
id: p_6vuEmZPvM17kD96hvGXxj6
status: active
merged_into: null
display_name: 王選
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_G3DH8UFy6BMuA7o1q6hLjT
        subject_person_id: p_6vuEmZPvM17kD96hvGXxj6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王選
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8WgJmZDwEYdGri1wVeDesE
          claim_id: c_G3DH8UFy6BMuA7o1q6hLjT
          source_id: s_xu7d18PmMvCYvML63eQLbm
          stance: supports
          locator: CBDB:276421
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（276421）
          source: &a1
            id: s_xu7d18PmMvCYvML63eQLbm
            source_type: api_record
            title: 中国历代人物传记资料库：王選（CBDB 276421）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276421&o=json
            external_identifier: CBDB:276421
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.940Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_46dAKJM2pp4oybQA8Ncwx3
        subject_person_id: p_6vuEmZPvM17kD96hvGXxj6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王選，明人物。正德六年進士，籍贯武城。（中国历代人物传记资料库 CBDB 276421）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_npK6atnhvJ5o28E8vw1Rpb
          claim_id: c_46dAKJM2pp4oybQA8Ncwx3
          source_id: s_xu7d18PmMvCYvML63eQLbm
          stance: supports
          locator: CBDB:276421
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_c3KG8EhCUGMzp_P2izQYHW
        subject_person_id: p_BGL1HFsgeWYQ3VFWBGSemb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6vuEmZPvM17kD96hvGXxj6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Me2UjUl14CvxEmPgS2IYJa
          claim_id: c_c3KG8EhCUGMzp_P2izQYHW
          source_id: s_B1XVtRNAH02DA6hyZeMhJe
          stance: supports
          locator: CBDB：兄弟 王道（126743）之父／母 王琮
          quotation: null
          interpretation_note: 由兄弟关系推断：王選 与 王道 为同胞（CBDB 记「兄」），王道 之父／母即 王選 之父／母。
          source:
            id: s_B1XVtRNAH02DA6hyZeMhJe
            source_type: api_record
            title: 中国历代人物传记资料库：王選（CBDB 276421）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276421&o=json
            external_identifier: CBDB:276421
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BGL1HFsgeWYQ3VFWBGSemb
        status: active
        display_name: 王琮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_dO3Pvk7K-lPOZbsAv_JPSj
        subject_person_id: p_6vuEmZPvM17kD96hvGXxj6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_eQSeau4TnN2P1YHAKu1a3t
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aHiLjXtHirASTw0atT1qCD
          claim_id: c_dO3Pvk7K-lPOZbsAv_JPSj
          source_id: s_B1XVtRNAH02DA6hyZeMhJe
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126743 王道）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_B1XVtRNAH02DA6hyZeMhJe
            source_type: api_record
            title: 中国历代人物传记资料库：王選（CBDB 276421）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276421&o=json
            external_identifier: CBDB:276421
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_eQSeau4TnN2P1YHAKu1a3t
        status: active
        display_name: 王道
        merged_into_person_id: null
---

# 王選

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王選 | accepted |
| bio.summary | 王選，明人物。正德六年進士，籍贯武城。（中国历代人物传记资料库 CBDB 276421） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BGL1HFsgeWYQ3VFWBGSemb | 王琮 | accepted |
| other | p_eQSeau4TnN2P1YHAKu1a3t | 王道 | accepted |

## 外部来源

- [中国历代人物传记资料库：王選（CBDB 276421）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276421&o=json)
