---
schema: wang-person/v1
id: p_df5qMUS2WxknCbo6MQhRBA
status: active
merged_into: null
display_name: 王紘
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Wd8jiCDXfwAiqGVZK6JcqV
        subject_person_id: p_df5qMUS2WxknCbo6MQhRBA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rQA9LLBw2LZhoWGWEHT7vc
          claim_id: c_Wd8jiCDXfwAiqGVZK6JcqV
          source_id: s_KN4P6r4V5EJB19YZ6FLi3p
          stance: supports
          locator: CBDB:295318
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（295318）
          source: &a1
            id: s_KN4P6r4V5EJB19YZ6FLi3p
            source_type: api_record
            title: 中国历代人物传记资料库：王紘（CBDB 295318）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295318&o=json
            external_identifier: CBDB:295318
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.488Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_u5afLFfuP17YNFQwHU5rVY
        subject_person_id: p_df5qMUS2WxknCbo6MQhRBA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紘，明人物。天順元年進士，籍贯薊州。（中国历代人物传记资料库 CBDB 295318）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PSXZSsASwf9j4L3k8xDnHR
          claim_id: c_u5afLFfuP17YNFQwHU5rVY
          source_id: s_KN4P6r4V5EJB19YZ6FLi3p
          stance: supports
          locator: CBDB:295318
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Tm3mSrf0xPeuqih7Ij8RiQ
        subject_person_id: p_kXrauqiRDQXXD79d2V6tEj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_df5qMUS2WxknCbo6MQhRBA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oKOLQTPXypo-ozeHhQcG3X
          claim_id: c_Tm3mSrf0xPeuqih7Ij8RiQ
          source_id: s_w_g_ExFxhsBChBFX96zHMr
          stance: supports
          locator: CBDB：兄弟 王冕（198620）之父／母 王觀
          quotation: null
          interpretation_note: 由兄弟关系推断：王紘 与 王冕 为同胞（CBDB 记「兄」），王冕 之父／母即 王紘 之父／母。
          source:
            id: s_w_g_ExFxhsBChBFX96zHMr
            source_type: api_record
            title: 中国历代人物传记资料库：王紘（CBDB 295318）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295318&o=json
            external_identifier: CBDB:295318
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kXrauqiRDQXXD79d2V6tEj
        status: active
        display_name: 王觀
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_te4cNT_n3WqeBnfNcD0Cea
        subject_person_id: p_7XvdYNGwLHctu4cLzYQ7kr
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_df5qMUS2WxknCbo6MQhRBA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_29Gd4EFxcRB9LV17kM9JgR
          claim_id: c_te4cNT_n3WqeBnfNcD0Cea
          source_id: s_w_g_ExFxhsBChBFX96zHMr
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198620 王冕）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_w_g_ExFxhsBChBFX96zHMr
            source_type: api_record
            title: 中国历代人物传记资料库：王紘（CBDB 295318）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295318&o=json
            external_identifier: CBDB:295318
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7XvdYNGwLHctu4cLzYQ7kr
        status: active
        display_name: 王冕
        merged_into_person_id: null
---

# 王紘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紘 | accepted |
| bio.summary | 王紘，明人物。天順元年進士，籍贯薊州。（中国历代人物传记资料库 CBDB 295318） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kXrauqiRDQXXD79d2V6tEj | 王觀 | accepted |
| other | p_7XvdYNGwLHctu4cLzYQ7kr | 王冕 | accepted |

## 外部来源

- [中国历代人物传记资料库：王紘（CBDB 295318）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295318&o=json)
