---
schema: wang-person/v1
id: p_WG4LcJdg2iBTqvpZQpDp9o
status: active
merged_into: null
display_name: 王慶
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WrH8BTQdej43FAtbttfzh4
        subject_person_id: p_WG4LcJdg2iBTqvpZQpDp9o
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mUtb8VAA4jfzVHCggo4kgR
          claim_id: c_WrH8BTQdej43FAtbttfzh4
          source_id: s_P9wQqFz1g9NPy4Aq7kAejE
          stance: supports
          locator: CBDB:175940
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175940）
          source: &a1
            id: s_P9wQqFz1g9NPy4Aq7kAejE
            source_type: api_record
            title: 中国历代人物传记资料库：王慶（CBDB 175940）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175940&o=json
            external_identifier: CBDB:175940
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.210Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_2grpaW4xJDTNNJyJSjA8a3
        subject_person_id: p_WG4LcJdg2iBTqvpZQpDp9o
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 701年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_niVVfsxuDQBCNGPdkPf2aw
          claim_id: c_2grpaW4xJDTNNJyJSjA8a3
          source_id: s_P9wQqFz1g9NPy4Aq7kAejE
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vgjp9NDsk1j9k86mB98f6D
        subject_person_id: p_WG4LcJdg2iBTqvpZQpDp9o
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8JGN7u7pHKYC5aJGmLNG8V
          claim_id: c_vgjp9NDsk1j9k86mB98f6D
          source_id: s_P9wQqFz1g9NPy4Aq7kAejE
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_s5NQ7cBuSD_GInOsS_diI2
        subject_person_id: p_Tz4cxSqgtPp22G6bKRvsTQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WG4LcJdg2iBTqvpZQpDp9o
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9zBEyedU-jgQ1nHFYQ1ONY
          claim_id: c_s5NQ7cBuSD_GInOsS_diI2
          source_id: s_P9wQqFz1g9NPy4Aq7kAejE
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Tz4cxSqgtPp22G6bKRvsTQ
        status: active
        display_name: 王喆
        merged_into_person_id: null
  children:
    - claim:
        id: c_ACEXC5G9KEHnvt-fEUvcdW
        subject_person_id: p_WG4LcJdg2iBTqvpZQpDp9o
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9uzT9MsPAMdeGut41RiW3f
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1IBILRSE-vVgDHgmiofRy_
          claim_id: c_ACEXC5G9KEHnvt-fEUvcdW
          source_id: s_LaQHp5mjAHgZukLwRbkP2p
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LaQHp5mjAHgZukLwRbkP2p
            source_type: api_record
            title: 中国历代人物传记资料库：王易從（CBDB 92036）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92036&o=json
            external_identifier: CBDB:92036
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.098Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9uzT9MsPAMdeGut41RiW3f
        status: active
        display_name: 王易從
        merged_into_person_id: null
    - claim:
        id: c_x7-qIJ4d6qwCfCxVzljPTm
        subject_person_id: p_WG4LcJdg2iBTqvpZQpDp9o
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XuQqYyCT3CcPuEr7EZ5EGu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2siIZTzH_ZgmW4Wxjkjajk
          claim_id: c_x7-qIJ4d6qwCfCxVzljPTm
          source_id: s_P9wQqFz1g9NPy4Aq7kAejE
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_XuQqYyCT3CcPuEr7EZ5EGu
        status: active
        display_name: 王敬從
        merged_into_person_id: null
    - claim:
        id: c_JpofRAO9DOLfDmUuIaEfsd
        subject_person_id: p_WG4LcJdg2iBTqvpZQpDp9o
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yyG5m7BqW1DAadHkjg2Ep9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Pn3xjT6f-4aLpSjSpIS94g
          claim_id: c_JpofRAO9DOLfDmUuIaEfsd
          source_id: s_P9wQqFz1g9NPy4Aq7kAejE
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_yyG5m7BqW1DAadHkjg2Ep9
        status: active
        display_name: 王擇從
        merged_into_person_id: null
    - claim:
        id: c_uVVAYVeANHaDutNsujo5Zl
        subject_person_id: p_WG4LcJdg2iBTqvpZQpDp9o
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_R2rpiomoiCkDZ1dnRpPsmw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R_b7WUVQc4xEEgxk-PYg2a
          claim_id: c_uVVAYVeANHaDutNsujo5Zl
          source_id: s_P9wQqFz1g9NPy4Aq7kAejE
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_R2rpiomoiCkDZ1dnRpPsmw
        status: active
        display_name: 王朋從
        merged_into_person_id: null
    - claim:
        id: c_wI9s1UWiFTcT5Msm_NYMY2
        subject_person_id: p_WG4LcJdg2iBTqvpZQpDp9o
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FxW7Gd4sz1xBC9hzC73C2J
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Dp1L7uJOQ1Joir_C3ojucI
          claim_id: c_wI9s1UWiFTcT5Msm_NYMY2
          source_id: s_P9wQqFz1g9NPy4Aq7kAejE
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_FxW7Gd4sz1xBC9hzC73C2J
        status: active
        display_name: 王言從
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王慶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慶 | accepted |
| death.date | 701年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Tz4cxSqgtPp22G6bKRvsTQ | 王喆 | accepted |
| children | p_9uzT9MsPAMdeGut41RiW3f | 王易從 | accepted |
| children | p_XuQqYyCT3CcPuEr7EZ5EGu | 王敬從 | accepted |
| children | p_yyG5m7BqW1DAadHkjg2Ep9 | 王擇從 | accepted |
| children | p_R2rpiomoiCkDZ1dnRpPsmw | 王朋從 | accepted |
| children | p_FxW7Gd4sz1xBC9hzC73C2J | 王言從 | accepted |

## 外部来源

- [中国历代人物传记资料库：王慶（CBDB 175940）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175940&o=json)
- [中国历代人物传记资料库：王易從（CBDB 92036）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92036&o=json)
