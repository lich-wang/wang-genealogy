---
schema: wang-person/v1
id: p_mz9BXCY2MrMzrtedYeaKMu
status: active
merged_into: null
display_name: 王滔
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mRqNsMwTRAirT7bDb7S8KK
        subject_person_id: p_mz9BXCY2MrMzrtedYeaKMu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王滔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_N5xwXgRUK2PY72wYMajk1s
          claim_id: c_mRqNsMwTRAirT7bDb7S8KK
          source_id: s_3bUYPAJ3VBmeuq3LMyjgZ2
          stance: supports
          locator: CBDB:314532
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（314532）
          source: &a1
            id: s_3bUYPAJ3VBmeuq3LMyjgZ2
            source_type: api_record
            title: 中国历代人物传记资料库：王滔（CBDB 314532）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314532&o=json
            external_identifier: CBDB:314532
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.931Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_D4MtSSqLakm74sK3QUc3XF
        subject_person_id: p_mz9BXCY2MrMzrtedYeaKMu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王滔，明人物。嘉靖二十九年進士，籍贯烏程，曾任醫學正術。（中国历代人物传记资料库 CBDB 314532）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9aeQCbi6FvIE_Ot1ENmG3h
          claim_id: c_D4MtSSqLakm74sK3QUc3XF
          source_id: s_3bUYPAJ3VBmeuq3LMyjgZ2
          stance: supports
          locator: CBDB:314532
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_fn-nDPo_QKcv4W1Vf9QSEX
        subject_person_id: p_mz9BXCY2MrMzrtedYeaKMu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SGWPi4n8QUjY5AE1caMiEq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HqWctAKkcklbI5a7-ENEV5
          claim_id: c_fn-nDPo_QKcv4W1Vf9QSEX
          source_id: s_3bUYPAJ3VBmeuq3LMyjgZ2
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第一百八十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_SGWPi4n8QUjY5AE1caMiEq
        status: active
        display_name: 王傑
        merged_into_person_id: null
    - claim:
        id: c_PV83DkpowTCS_1JGEbkqcD
        subject_person_id: p_mz9BXCY2MrMzrtedYeaKMu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ajw6Fqyss17DGRpSEdXew1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k_sdxPXUqyFgeolVP5iQIk
          claim_id: c_PV83DkpowTCS_1JGEbkqcD
          source_id: s_hnq2vehJBosS7WejEuBCQn
          stance: supports
          locator: CBDB：兄弟 王傑（204108）之父／母 王滔
          quotation: null
          interpretation_note: 由兄弟关系推断：王樂 与 王傑 为同胞（CBDB 记「兄」），王傑 之父／母即 王樂 之父／母。
          source:
            id: s_hnq2vehJBosS7WejEuBCQn
            source_type: api_record
            title: 中国历代人物传记资料库：王樂（CBDB 314542）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314542&o=json
            external_identifier: CBDB:314542
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Ajw6Fqyss17DGRpSEdXew1
        status: active
        display_name: 王樂
        merged_into_person_id: null
    - claim:
        id: c_AISsdBbD6aIMZBPNLa2d7D
        subject_person_id: p_mz9BXCY2MrMzrtedYeaKMu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BMr8fHe6qjj9pcZdEtmZ7G
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t94n2uo98H7W92Kwo6V7TJ
          claim_id: c_AISsdBbD6aIMZBPNLa2d7D
          source_id: s_T2i3ti6i5gXuEq6WrM-6WR
          stance: supports
          locator: CBDB：兄弟 王傑（204108）之父／母 王滔
          quotation: null
          interpretation_note: 由兄弟关系推断：王桐 与 王傑 为同胞（CBDB 记「兄」），王傑 之父／母即 王桐 之父／母。
          source:
            id: s_T2i3ti6i5gXuEq6WrM-6WR
            source_type: api_record
            title: 中国历代人物传记资料库：王桐（CBDB 314543）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314543&o=json
            external_identifier: CBDB:314543
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BMr8fHe6qjj9pcZdEtmZ7G
        status: active
        display_name: 王桐
        merged_into_person_id: null
    - claim:
        id: c_TjQRz8UZJjmMaA01ea2fZT
        subject_person_id: p_mz9BXCY2MrMzrtedYeaKMu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_C5KPY2rU8Xhk2zhHW5t6TH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0xH9KkQYl2LsB-rE55DZFE
          claim_id: c_TjQRz8UZJjmMaA01ea2fZT
          source_id: s_hL05Tf1q5OpOBLJkdF2M28
          stance: supports
          locator: CBDB：兄弟 王傑（204108）之父／母 王滔
          quotation: null
          interpretation_note: 由兄弟关系推断：王梯 与 王傑 为同胞（CBDB 记「兄」），王傑 之父／母即 王梯 之父／母。
          source:
            id: s_hL05Tf1q5OpOBLJkdF2M28
            source_type: api_record
            title: 中国历代人物传记资料库：王梯（CBDB 314541）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314541&o=json
            external_identifier: CBDB:314541
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_C5KPY2rU8Xhk2zhHW5t6TH
        status: active
        display_name: 王梯
        merged_into_person_id: null
    - claim:
        id: c_-Yg66_2VxEkMzBO9OOM5Ir
        subject_person_id: p_mz9BXCY2MrMzrtedYeaKMu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ee4iFkc9roSHJWdXooW3sy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jJgaNqQ6N7sHn_GnqIHKCl
          claim_id: c_-Yg66_2VxEkMzBO9OOM5Ir
          source_id: s_J6geewZld3LIFnmZYtWk0f
          stance: supports
          locator: CBDB：兄弟 王傑（204108）之父／母 王滔
          quotation: null
          interpretation_note: 由兄弟关系推断：王榜 与 王傑 为同胞（CBDB 记「兄」），王傑 之父／母即 王榜 之父／母。
          source:
            id: s_J6geewZld3LIFnmZYtWk0f
            source_type: api_record
            title: 中国历代人物传记资料库：王榜（CBDB 314537）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314537&o=json
            external_identifier: CBDB:314537
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Ee4iFkc9roSHJWdXooW3sy
        status: active
        display_name: 王榜
        merged_into_person_id: null
    - claim:
        id: c_qyzflDwi7CG_PUoXRYnuN6
        subject_person_id: p_mz9BXCY2MrMzrtedYeaKMu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QnFzyqPLNBaxunjvwAc26X
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EbPTJdOduO1Od5DvNeiHkv
          claim_id: c_qyzflDwi7CG_PUoXRYnuN6
          source_id: s_8PF7r75d8i486yePiq5YCl
          stance: supports
          locator: CBDB：兄弟 王傑（204108）之父／母 王滔
          quotation: null
          interpretation_note: 由兄弟关系推断：王杏 与 王傑 为同胞（CBDB 记「兄」），王傑 之父／母即 王杏 之父／母。
          source:
            id: s_8PF7r75d8i486yePiq5YCl
            source_type: api_record
            title: 中国历代人物传记资料库：王杏（CBDB 314540）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314540&o=json
            external_identifier: CBDB:314540
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QnFzyqPLNBaxunjvwAc26X
        status: active
        display_name: 王杏
        merged_into_person_id: null
    - claim:
        id: c_14lheF8TFC9swIiy1d1TfZ
        subject_person_id: p_mz9BXCY2MrMzrtedYeaKMu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UFDKS92oNLzJRy5ZNTb8oN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NJ1khtMlziR8Dh4pz8zwAT
          claim_id: c_14lheF8TFC9swIiy1d1TfZ
          source_id: s_6-uclET-5HFi9WSRvPq_y6
          stance: supports
          locator: CBDB：兄弟 王傑（204108）之父／母 王滔
          quotation: null
          interpretation_note: 由兄弟关系推断：王材 与 王傑 为同胞（CBDB 记「弟」），王傑 之父／母即 王材 之父／母。
          source:
            id: s_6-uclET-5HFi9WSRvPq_y6
            source_type: api_record
            title: 中国历代人物传记资料库：王材（CBDB 314536）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314536&o=json
            external_identifier: CBDB:314536
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UFDKS92oNLzJRy5ZNTb8oN
        status: active
        display_name: 王材
        merged_into_person_id: null
    - claim:
        id: c_Usy4S5hD1LQRSs2bjCl-UB
        subject_person_id: p_mz9BXCY2MrMzrtedYeaKMu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_s1RhRcXywNH5GQTB7Z7BjE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__9NPvz1JDEAUN1j0kpTpBH
          claim_id: c_Usy4S5hD1LQRSs2bjCl-UB
          source_id: s_QPtgqWQU4IGtGHcKY0C8_c
          stance: supports
          locator: CBDB：兄弟 王傑（204108）之父／母 王滔
          quotation: null
          interpretation_note: 由兄弟关系推断：王本 与 王傑 为同胞（CBDB 记「兄」），王傑 之父／母即 王本 之父／母。
          source:
            id: s_QPtgqWQU4IGtGHcKY0C8_c
            source_type: api_record
            title: 中国历代人物传记资料库：王本（CBDB 314538）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314538&o=json
            external_identifier: CBDB:314538
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_s1RhRcXywNH5GQTB7Z7BjE
        status: active
        display_name: 王本
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王滔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王滔 | accepted |
| bio.summary | 王滔，明人物。嘉靖二十九年進士，籍贯烏程，曾任醫學正術。（中国历代人物传记资料库 CBDB 314532） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_SGWPi4n8QUjY5AE1caMiEq | 王傑 | accepted |
| children | p_Ajw6Fqyss17DGRpSEdXew1 | 王樂 | accepted |
| children | p_BMr8fHe6qjj9pcZdEtmZ7G | 王桐 | accepted |
| children | p_C5KPY2rU8Xhk2zhHW5t6TH | 王梯 | accepted |
| children | p_Ee4iFkc9roSHJWdXooW3sy | 王榜 | accepted |
| children | p_QnFzyqPLNBaxunjvwAc26X | 王杏 | accepted |
| children | p_UFDKS92oNLzJRy5ZNTb8oN | 王材 | accepted |
| children | p_s1RhRcXywNH5GQTB7Z7BjE | 王本 | accepted |

## 外部来源

- [中国历代人物传记资料库：王榜（CBDB 314537）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314537&o=json)
- [中国历代人物传记资料库：王本（CBDB 314538）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314538&o=json)
- [中国历代人物传记资料库：王材（CBDB 314536）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314536&o=json)
- [中国历代人物传记资料库：王樂（CBDB 314542）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314542&o=json)
- [中国历代人物传记资料库：王滔（CBDB 314532）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314532&o=json)
- [中国历代人物传记资料库：王梯（CBDB 314541）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314541&o=json)
- [中国历代人物传记资料库：王桐（CBDB 314543）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314543&o=json)
- [中国历代人物传记资料库：王杏（CBDB 314540）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314540&o=json)
