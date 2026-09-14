---
schema: wang-person/v1
id: p_ZvcYSxF75Ub3o8A9bCQMfH
status: active
merged_into: null
display_name: 王志廣
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wpQor7qELXiHB2Hc4DLYey
        subject_person_id: p_ZvcYSxF75Ub3o8A9bCQMfH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志廣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AHU3MAzZWD2H5SyYvdMjqo
          claim_id: c_wpQor7qELXiHB2Hc4DLYey
          source_id: s_r49wptKfM3WBmgLjfP3a83
          stance: supports
          locator: CBDB:255755
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（255755）
          source: &a1
            id: s_r49wptKfM3WBmgLjfP3a83
            source_type: api_record
            title: 中国历代人物传记资料库：王志廣（CBDB 255755）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255755&o=json
            external_identifier: CBDB:255755
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.351Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_U7igc6c7H2Sz1MEfRkivFM
        subject_person_id: p_ZvcYSxF75Ub3o8A9bCQMfH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志廣，明人物。成化十七年進士，籍贯容城。（中国历代人物传记资料库 CBDB 255755）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mEkYKR8lyWL5iLPp8uCLbX
          claim_id: c_U7igc6c7H2Sz1MEfRkivFM
          source_id: s_r49wptKfM3WBmgLjfP3a83
          stance: supports
          locator: CBDB:255755
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_9mBss6Icxhbq8omzNSEcm-
        subject_person_id: p_ZvcYSxF75Ub3o8A9bCQMfH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qcp613MEZvW9QYvDGgbu1f
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_02046G-pJYndaEKd7dZXwG
          claim_id: c_9mBss6Icxhbq8omzNSEcm-
          source_id: s_r49wptKfM3WBmgLjfP3a83
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_qcp613MEZvW9QYvDGgbu1f
        status: active
        display_name: 王寅
        merged_into_person_id: null
    - claim:
        id: c_j7KxhnStx-7fH6Uw4Csi-A
        subject_person_id: p_ZvcYSxF75Ub3o8A9bCQMfH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aErr1qKr6x8hiEnMLnpyRv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qvYIGbrTw9BXiV2QQ3QDoQ
          claim_id: c_j7KxhnStx-7fH6Uw4Csi-A
          source_id: s_EsTCqgTeRQ9QuIqRhSjS-z
          stance: supports
          locator: CBDB：兄弟 王寅（126668）之父／母 王志廣
          quotation: null
          interpretation_note: 由兄弟关系推断：王宥 与 王寅 为同胞（CBDB 记「兄」），王寅 之父／母即 王宥 之父／母。
          source:
            id: s_EsTCqgTeRQ9QuIqRhSjS-z
            source_type: api_record
            title: 中国历代人物传记资料库：王宥（CBDB 255761）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255761&o=json
            external_identifier: CBDB:255761
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aErr1qKr6x8hiEnMLnpyRv
        status: active
        display_name: 王宥
        merged_into_person_id: null
    - claim:
        id: c_a_VOSNPnOM6IuhtWlRnGOM
        subject_person_id: p_ZvcYSxF75Ub3o8A9bCQMfH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_waDrA1e55QughStW4piQ1B
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EncgDfxNj_5KwE7mZi_VAa
          claim_id: c_a_VOSNPnOM6IuhtWlRnGOM
          source_id: s_kjL7DfDWvknUljovgfXWyT
          stance: supports
          locator: CBDB：兄弟 王寅（126668）之父／母 王志廣
          quotation: null
          interpretation_note: 由兄弟关系推断：王宸 与 王寅 为同胞（CBDB 记「兄」），王寅 之父／母即 王宸 之父／母。
          source:
            id: s_kjL7DfDWvknUljovgfXWyT
            source_type: api_record
            title: 中国历代人物传记资料库：王宸（CBDB 255760）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255760&o=json
            external_identifier: CBDB:255760
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_waDrA1e55QughStW4piQ1B
        status: active
        display_name: 王宸
        merged_into_person_id: null
    - claim:
        id: c__etWAvKWUcVXHnn2IeTZEU
        subject_person_id: p_ZvcYSxF75Ub3o8A9bCQMfH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zNSEty4Yr3kQxQHfcZbC3c
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3Rr-iac0TOZVjn1d8ajyL3
          claim_id: c__etWAvKWUcVXHnn2IeTZEU
          source_id: s__eEAl7LzRJvfMgsF1xLr1l
          stance: supports
          locator: CBDB：兄弟 王寅（126668）之父／母 王志廣
          quotation: null
          interpretation_note: 由兄弟关系推断：王憲 与 王寅 为同胞（CBDB 记「兄」），王寅 之父／母即 王憲 之父／母。
          source:
            id: s__eEAl7LzRJvfMgsF1xLr1l
            source_type: api_record
            title: 中国历代人物传记资料库：王憲（CBDB 255759）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255759&o=json
            external_identifier: CBDB:255759
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zNSEty4Yr3kQxQHfcZbC3c
        status: active
        display_name: 王憲
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王志廣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王志廣 | accepted |
| bio.summary | 王志廣，明人物。成化十七年進士，籍贯容城。（中国历代人物传记资料库 CBDB 255755） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_qcp613MEZvW9QYvDGgbu1f | 王寅 | accepted |
| children | p_aErr1qKr6x8hiEnMLnpyRv | 王宥 | accepted |
| children | p_waDrA1e55QughStW4piQ1B | 王宸 | accepted |
| children | p_zNSEty4Yr3kQxQHfcZbC3c | 王憲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宸（CBDB 255760）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255760&o=json)
- [中国历代人物传记资料库：王憲（CBDB 255759）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255759&o=json)
- [中国历代人物传记资料库：王宥（CBDB 255761）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255761&o=json)
- [中国历代人物传记资料库：王志廣（CBDB 255755）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255755&o=json)
