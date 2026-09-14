---
schema: wang-person/v1
id: p_peeTqcu5W5PCnqfBM2QXEG
status: active
merged_into: null
display_name: 王易
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_y4Ki5uw1fj7KDk4ncUBFHY
        subject_person_id: p_peeTqcu5W5PCnqfBM2QXEG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王易
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zL7Xv6K8G1WHXLZh4bAK3j
          claim_id: c_y4Ki5uw1fj7KDk4ncUBFHY
          source_id: s_BhLD43dtYnLAU1A5Z5V7XR
          stance: supports
          locator: CBDB:257032
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（257032）
          source: &a1
            id: s_BhLD43dtYnLAU1A5Z5V7XR
            source_type: api_record
            title: 中国历代人物传记资料库：王易（CBDB 257032）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257032&o=json
            external_identifier: CBDB:257032
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.403Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TwdDKCMrGyH5Zufg9A1qxD
        subject_person_id: p_peeTqcu5W5PCnqfBM2QXEG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王易，明人物。成化十七年進士，籍贯龍泉。（中国历代人物传记资料库 CBDB 257032）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EFvDr5PCquPw2vmN2XyhHQ
          claim_id: c_TwdDKCMrGyH5Zufg9A1qxD
          source_id: s_BhLD43dtYnLAU1A5Z5V7XR
          stance: supports
          locator: CBDB:257032
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_BBuCegazMJYPCjHNPB634C
        subject_person_id: p_sQKFgBKrX6N7mKYfJwtry2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_peeTqcu5W5PCnqfBM2QXEG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eSQ0WU8LB8P22HNjL8Riff
          claim_id: c_BBuCegazMJYPCjHNPB634C
          source_id: s_ik-_CaUCEd5yBAcXext1oW
          stance: supports
          locator: CBDB：兄弟 王杲（200384）之父／母 王洪
          quotation: null
          interpretation_note: 由兄弟关系推断：王易 与 王杲 为同胞（CBDB 记「兄」），王杲 之父／母即 王易 之父／母。
          source:
            id: s_ik-_CaUCEd5yBAcXext1oW
            source_type: api_record
            title: 中国历代人物传记资料库：王易（CBDB 257032）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257032&o=json
            external_identifier: CBDB:257032
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sQKFgBKrX6N7mKYfJwtry2
        status: active
        display_name: 王洪
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_uEpbDkGWMDW1KnnwziKu6P
        subject_person_id: p_Y6fRdWmSHjB68krJYq7FPT
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_peeTqcu5W5PCnqfBM2QXEG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_boN4Yo1zBsiPAtZc0tvVxJ
          claim_id: c_uEpbDkGWMDW1KnnwziKu6P
          source_id: s_ik-_CaUCEd5yBAcXext1oW
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200384 王杲）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ik-_CaUCEd5yBAcXext1oW
            source_type: api_record
            title: 中国历代人物传记资料库：王易（CBDB 257032）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257032&o=json
            external_identifier: CBDB:257032
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Y6fRdWmSHjB68krJYq7FPT
        status: active
        display_name: 王杲
        merged_into_person_id: null
---

# 王易

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王易 | accepted |
| bio.summary | 王易，明人物。成化十七年進士，籍贯龍泉。（中国历代人物传记资料库 CBDB 257032） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_sQKFgBKrX6N7mKYfJwtry2 | 王洪 | accepted |
| other | p_Y6fRdWmSHjB68krJYq7FPT | 王杲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王易（CBDB 257032）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257032&o=json)
