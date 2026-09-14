---
schema: wang-person/v1
id: p_HxEM6RL9fRNSLHFJ3ioZEE
status: active
merged_into: null
display_name: 王芳
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RAcyvW5QJRkc48vAKWuXG5
        subject_person_id: p_HxEM6RL9fRNSLHFJ3ioZEE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王芳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SXXNEn7LNtcF7Aj9sAAnH5
          claim_id: c_RAcyvW5QJRkc48vAKWuXG5
          source_id: s_5PL8msvmn7vX5Z5ZQZUfJH
          stance: supports
          locator: CBDB:307682
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（307682）
          source: &a1
            id: s_5PL8msvmn7vX5Z5ZQZUfJH
            source_type: api_record
            title: 中国历代人物传记资料库：王芳（CBDB 307682）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307682&o=json
            external_identifier: CBDB:307682
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.793Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8y5EL8HV5S8dKwm5PizvPr
        subject_person_id: p_HxEM6RL9fRNSLHFJ3ioZEE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王芳，明人物。嘉靖二十三年進士，籍贯石首，曾任同知。（中国历代人物传记资料库 CBDB 307682）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2dKUGORhgtNpWpVWx2eTes
          claim_id: c_8y5EL8HV5S8dKwm5PizvPr
          source_id: s_5PL8msvmn7vX5Z5ZQZUfJH
          stance: supports
          locator: CBDB:307682
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_mzxwFqo8ED-JhdfMdquKK8
        subject_person_id: p_HxEM6RL9fRNSLHFJ3ioZEE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WQq7QzkQTzLqnMJ812eWYA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iFi0i-e-BPr1nSZ-bsp5HJ
          claim_id: c_mzxwFqo8ED-JhdfMdquKK8
          source_id: s_5PL8msvmn7vX5Z5ZQZUfJH
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第一百四十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_WQq7QzkQTzLqnMJ812eWYA
        status: active
        display_name: 王之誥
        merged_into_person_id: null
    - claim:
        id: c_Z5EMUxNjIfPENCETXhIcvR
        subject_person_id: p_HxEM6RL9fRNSLHFJ3ioZEE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2Td8Va1G7ufHJJBPdgJzEy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I8wg_j5xvZETIXVYxkBBgZ
          claim_id: c_Z5EMUxNjIfPENCETXhIcvR
          source_id: s_yyt36bk1FU74jRToflPcRf
          stance: supports
          locator: CBDB：兄弟 王之誥（124361）之父／母 王芳
          quotation: null
          interpretation_note: 由兄弟关系推断：王之紀 与 王之誥 为同胞（CBDB 记「兄」），王之誥 之父／母即 王之紀 之父／母。
          source:
            id: s_yyt36bk1FU74jRToflPcRf
            source_type: api_record
            title: 中国历代人物传记资料库：王之紀（CBDB 307688）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307688&o=json
            external_identifier: CBDB:307688
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2Td8Va1G7ufHJJBPdgJzEy
        status: active
        display_name: 王之紀
        merged_into_person_id: null
    - claim:
        id: c_QAabzuo7ZVe7fhuVJe6Ocd
        subject_person_id: p_HxEM6RL9fRNSLHFJ3ioZEE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2kqeoUNHtuY3VkNyjL441X
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SFXSQjs6A-onO-pLAQU9BV
          claim_id: c_QAabzuo7ZVe7fhuVJe6Ocd
          source_id: s_2_zNRQAzXD1_kH14kVEi_l
          stance: supports
          locator: CBDB：兄弟 王之誥（124361）之父／母 王芳
          quotation: null
          interpretation_note: 由兄弟关系推断：王之誠 与 王之誥 为同胞（CBDB 记「弟」），王之誥 之父／母即 王之誠 之父／母。
          source:
            id: s_2_zNRQAzXD1_kH14kVEi_l
            source_type: api_record
            title: 中国历代人物传记资料库：王之誠（CBDB 307686）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307686&o=json
            external_identifier: CBDB:307686
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2kqeoUNHtuY3VkNyjL441X
        status: active
        display_name: 王之誠
        merged_into_person_id: null
    - claim:
        id: c_UWj76PhcAS6lpWzZGbu9gF
        subject_person_id: p_HxEM6RL9fRNSLHFJ3ioZEE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7qYFGLzUZinwHFrnuom2wb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_brwhTpntKXsS5rDV1JV-Y_
          claim_id: c_UWj76PhcAS6lpWzZGbu9gF
          source_id: s_GcPixvkPzApY0JuO2ZfIMk
          stance: supports
          locator: CBDB：兄弟 王之誥（124361）之父／母 王芳
          quotation: null
          interpretation_note: 由兄弟关系推断：王之惠 与 王之誥 为同胞（CBDB 记「兄」），王之誥 之父／母即 王之惠 之父／母。
          source:
            id: s_GcPixvkPzApY0JuO2ZfIMk
            source_type: api_record
            title: 中国历代人物传记资料库：王之惠（CBDB 307690）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307690&o=json
            external_identifier: CBDB:307690
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7qYFGLzUZinwHFrnuom2wb
        status: active
        display_name: 王之惠
        merged_into_person_id: null
    - claim:
        id: c_PVs-zCjmXOXQ4FAl9dk6lL
        subject_person_id: p_HxEM6RL9fRNSLHFJ3ioZEE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Yh8cHEvSYh3boSfisEe3f6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kSE7mNsDAgQk8i0AHGo3xe
          claim_id: c_PVs-zCjmXOXQ4FAl9dk6lL
          source_id: s_WuiYvegFVVEYuA06muG3gc
          stance: supports
          locator: CBDB：兄弟 王之誥（124361）之父／母 王芳
          quotation: null
          interpretation_note: 由兄弟关系推断：王之綱 与 王之誥 为同胞（CBDB 记「兄」），王之誥 之父／母即 王之綱 之父／母。
          source:
            id: s_WuiYvegFVVEYuA06muG3gc
            source_type: api_record
            title: 中国历代人物传记资料库：王之綱（CBDB 307689）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307689&o=json
            external_identifier: CBDB:307689
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Yh8cHEvSYh3boSfisEe3f6
        status: active
        display_name: 王之綱
        merged_into_person_id: null
    - claim:
        id: c_ymTmUr9VkWGhxxy7wYIN9f
        subject_person_id: p_HxEM6RL9fRNSLHFJ3ioZEE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dWcZ38uBoPToBcS8pzjFDV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z2UXRhDPnFCBlyecsTwDLi
          claim_id: c_ymTmUr9VkWGhxxy7wYIN9f
          source_id: s_iEO15MX2MfjNze83NqvXVI
          stance: supports
          locator: CBDB：兄弟 王之誥（124361）之父／母 王芳
          quotation: null
          interpretation_note: 由兄弟关系推断：王之度 与 王之誥 为同胞（CBDB 记「兄」），王之誥 之父／母即 王之度 之父／母。
          source:
            id: s_iEO15MX2MfjNze83NqvXVI
            source_type: api_record
            title: 中国历代人物传记资料库：王之度（CBDB 307687）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307687&o=json
            external_identifier: CBDB:307687
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dWcZ38uBoPToBcS8pzjFDV
        status: active
        display_name: 王之度
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王芳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王芳 | accepted |
| bio.summary | 王芳，明人物。嘉靖二十三年進士，籍贯石首，曾任同知。（中国历代人物传记资料库 CBDB 307682） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_WQq7QzkQTzLqnMJ812eWYA | 王之誥 | accepted |
| children | p_2Td8Va1G7ufHJJBPdgJzEy | 王之紀 | accepted |
| children | p_2kqeoUNHtuY3VkNyjL441X | 王之誠 | accepted |
| children | p_7qYFGLzUZinwHFrnuom2wb | 王之惠 | accepted |
| children | p_Yh8cHEvSYh3boSfisEe3f6 | 王之綱 | accepted |
| children | p_dWcZ38uBoPToBcS8pzjFDV | 王之度 | accepted |

## 外部来源

- [中国历代人物传记资料库：王芳（CBDB 307682）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307682&o=json)
- [中国历代人物传记资料库：王之誠（CBDB 307686）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307686&o=json)
- [中国历代人物传记资料库：王之度（CBDB 307687）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307687&o=json)
- [中国历代人物传记资料库：王之綱（CBDB 307689）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307689&o=json)
- [中国历代人物传记资料库：王之惠（CBDB 307690）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307690&o=json)
- [中国历代人物传记资料库：王之紀（CBDB 307688）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307688&o=json)
