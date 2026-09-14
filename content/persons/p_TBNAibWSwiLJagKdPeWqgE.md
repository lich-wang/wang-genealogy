---
schema: wang-person/v1
id: p_TBNAibWSwiLJagKdPeWqgE
status: active
merged_into: null
display_name: 王一陽
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_B8NGSBAFePizTZ82WXBrTN
        subject_person_id: p_TBNAibWSwiLJagKdPeWqgE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一陽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5SwsYZLi2vqMMLv5LYvNF7
          claim_id: c_B8NGSBAFePizTZ82WXBrTN
          source_id: s_muRRM2VJ9FAaER9LPaKwQF
          stance: supports
          locator: CBDB:332995
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（332995）
          source: &a1
            id: s_muRRM2VJ9FAaER9LPaKwQF
            source_type: api_record
            title: 中国历代人物传记资料库：王一陽（CBDB 332995）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332995&o=json
            external_identifier: CBDB:332995
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.390Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LEeuBuKXEd2LrXLhdE3AZq
        subject_person_id: p_TBNAibWSwiLJagKdPeWqgE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一陽，明人物。嘉靖四十四年進士，籍贯內江。（中国历代人物传记资料库 CBDB 332995）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_g-8GG6Q5uC60sM8BwEZvub
          claim_id: c_LEeuBuKXEd2LrXLhdE3AZq
          source_id: s_muRRM2VJ9FAaER9LPaKwQF
          stance: supports
          locator: CBDB:332995
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_dqeIDkZbMDW88WgnUIc0Iy
        subject_person_id: p_TBNAibWSwiLJagKdPeWqgE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RPorhHfNa1cjhpbMo2ZnFo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2mDSPEYhEgWgd3RsjX0AXD
          claim_id: c_dqeIDkZbMDW88WgnUIc0Iy
          source_id: s_muRRM2VJ9FAaER9LPaKwQF
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第二百六十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RPorhHfNa1cjhpbMo2ZnFo
        status: active
        display_name: 王三鍚
        merged_into_person_id: null
    - claim:
        id: c_bRL5rnq4wCB_FTo7h7uBAf
        subject_person_id: p_TBNAibWSwiLJagKdPeWqgE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2XzokrAz5W7AEL7C28M8dv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9y92ciaUIoVNY84td9sRj9
          claim_id: c_bRL5rnq4wCB_FTo7h7uBAf
          source_id: s_PeGCfgb_ejWh3NhI33Xz8y
          stance: supports
          locator: CBDB：兄弟 王三鍚（205426）之父／母 王一陽
          quotation: null
          interpretation_note: 由兄弟关系推断：王永鍚 与 王三鍚 为同胞（CBDB 记「兄」），王三鍚 之父／母即 王永鍚 之父／母。
          source:
            id: s_PeGCfgb_ejWh3NhI33Xz8y
            source_type: api_record
            title: 中国历代人物传记资料库：王永鍚（CBDB 333001）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333001&o=json
            external_identifier: CBDB:333001
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2XzokrAz5W7AEL7C28M8dv
        status: active
        display_name: 王永鍚
        merged_into_person_id: null
    - claim:
        id: c_21AdvcL0RceNlTtI1ZjqtZ
        subject_person_id: p_TBNAibWSwiLJagKdPeWqgE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_A6EyG9BRn5T91T78BjfrLz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b7jd6gzJumobj4N16tDwUk
          claim_id: c_21AdvcL0RceNlTtI1ZjqtZ
          source_id: s_Yl9-kiOVS3Xms6mHQViUg3
          stance: supports
          locator: CBDB：兄弟 王三鍚（205426）之父／母 王一陽
          quotation: null
          interpretation_note: 由兄弟关系推断：王廷鍚 与 王三鍚 为同胞（CBDB 记「兄」），王三鍚 之父／母即 王廷鍚 之父／母。
          source:
            id: s_Yl9-kiOVS3Xms6mHQViUg3
            source_type: api_record
            title: 中国历代人物传记资料库：王廷鍚（CBDB 332998）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332998&o=json
            external_identifier: CBDB:332998
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_A6EyG9BRn5T91T78BjfrLz
        status: active
        display_name: 王廷鍚
        merged_into_person_id: null
    - claim:
        id: c_FuFk4yB4jOeGuBSqrsnRwW
        subject_person_id: p_TBNAibWSwiLJagKdPeWqgE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Gp6y1q4dJWg2vQcGdDyeHS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eHoJwtrMMjhfY0-s81M7YS
          claim_id: c_FuFk4yB4jOeGuBSqrsnRwW
          source_id: s_Qp0oneK32t5gkAW1uHAOy7
          stance: supports
          locator: CBDB：兄弟 王三鍚（205426）之父／母 王一陽
          quotation: null
          interpretation_note: 由兄弟关系推断：王申鍚 与 王三鍚 为同胞（CBDB 记「兄」），王三鍚 之父／母即 王申鍚 之父／母。
          source:
            id: s_Qp0oneK32t5gkAW1uHAOy7
            source_type: api_record
            title: 中国历代人物传记资料库：王申鍚（CBDB 333002）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333002&o=json
            external_identifier: CBDB:333002
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Gp6y1q4dJWg2vQcGdDyeHS
        status: active
        display_name: 王申鍚
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王一陽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一陽 | accepted |
| bio.summary | 王一陽，明人物。嘉靖四十四年進士，籍贯內江。（中国历代人物传记资料库 CBDB 332995） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_RPorhHfNa1cjhpbMo2ZnFo | 王三鍚 | accepted |
| children | p_2XzokrAz5W7AEL7C28M8dv | 王永鍚 | accepted |
| children | p_A6EyG9BRn5T91T78BjfrLz | 王廷鍚 | accepted |
| children | p_Gp6y1q4dJWg2vQcGdDyeHS | 王申鍚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王申鍚（CBDB 333002）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333002&o=json)
- [中国历代人物传记资料库：王廷鍚（CBDB 332998）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332998&o=json)
- [中国历代人物传记资料库：王一陽（CBDB 332995）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332995&o=json)
- [中国历代人物传记资料库：王永鍚（CBDB 333001）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333001&o=json)
