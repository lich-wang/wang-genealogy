---
schema: wang-person/v1
id: p_1iSvDHtRHkxhgvj9Gg5W8M
status: active
merged_into: null
display_name: 王仲貴
cbdb_id: 308778
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GVuLnzS213YtfDDrU6kBmd
        subject_person_id: p_1iSvDHtRHkxhgvj9Gg5W8M
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲貴，明人物。嘉靖二十六年進士，籍贯安福。（中国历代人物传记资料库 CBDB 308778）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_pP7krN-gEkUdP0WWk-Ijcv
          claim_id: c_GVuLnzS213YtfDDrU6kBmd
          source_id: s_PESyAC2FwYMNxkKGf7ppue
          stance: supports
          locator: CBDB:308778
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_PESyAC2FwYMNxkKGf7ppue
            source_type: api_record
            title: 中国历代人物传记资料库：王仲貴（CBDB 308778）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308778&o=json
            external_identifier: CBDB:308778
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_9RtY7FVvQ22oQt6HyG7gjW
        subject_person_id: p_1iSvDHtRHkxhgvj9Gg5W8M
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲貴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_zrXg6eN4VzeokE88GgfqJu
          claim_id: c_9RtY7FVvQ22oQt6HyG7gjW
          source_id: s_PESyAC2FwYMNxkKGf7ppue
          stance: supports
          locator: CBDB:308778
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3601-3700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_7PoBAlqM4zvs1KOlH_QWQz
        subject_person_id: p_1iSvDHtRHkxhgvj9Gg5W8M
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FDfwTTY5mqzGJCTTHJFcH8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8-Hrgn8yym5n8x9ToE9YKA
          claim_id: c_7PoBAlqM4zvs1KOlH_QWQz
          source_id: s_PESyAC2FwYMNxkKGf7ppue
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第二甲第二十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_PESyAC2FwYMNxkKGf7ppue
            source_type: api_record
            title: 中国历代人物传记资料库：王仲貴（CBDB 308778）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308778&o=json
            external_identifier: CBDB:308778
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_FDfwTTY5mqzGJCTTHJFcH8
        status: active
        display_name: 王一夔
        merged_into_person_id: null
    - claim:
        id: c_yUxn_uqqB71R0UWJ1RSTUV
        subject_person_id: p_1iSvDHtRHkxhgvj9Gg5W8M
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TBydJme7YoHhFCuggKw6FV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Dl37dHotQvznT-K8a3K9Y9
          claim_id: c_yUxn_uqqB71R0UWJ1RSTUV
          source_id: s_pO0n08pfcVmCmnvKVUSZ-_
          stance: supports
          locator: CBDB：兄弟 王一夔（203700）之父／母 王仲貴
          quotation: null
          interpretation_note: 由兄弟关系推断：王一尹 与 王一夔 为同胞（CBDB 记「兄」），王一夔 之父／母即 王一尹 之父／母。
          source:
            id: s_pO0n08pfcVmCmnvKVUSZ-_
            source_type: api_record
            title: 中国历代人物传记资料库：王一尹（CBDB 308782）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308782&o=json
            external_identifier: CBDB:308782
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TBydJme7YoHhFCuggKw6FV
        status: active
        display_name: 王一尹
        merged_into_person_id: null
    - claim:
        id: c_bszDW-TJYtgI9Nh4-p7gaT
        subject_person_id: p_1iSvDHtRHkxhgvj9Gg5W8M
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Zct7DGKt3pyCoL8pnTZaR8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UM_AYdu9n081w3pUsGwHE7
          claim_id: c_bszDW-TJYtgI9Nh4-p7gaT
          source_id: s_QRgvUIg-g2Qc0YOdDbN3jt
          stance: supports
          locator: CBDB：兄弟 王一夔（203700）之父／母 王仲貴
          quotation: null
          interpretation_note: 由兄弟关系推断：王一龍 与 王一夔 为同胞（CBDB 记「兄」），王一夔 之父／母即 王一龍 之父／母。
          source:
            id: s_QRgvUIg-g2Qc0YOdDbN3jt
            source_type: api_record
            title: 中国历代人物传记资料库：王一龍（CBDB 308781）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308781&o=json
            external_identifier: CBDB:308781
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Zct7DGKt3pyCoL8pnTZaR8
        status: active
        display_name: 王一龍
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王仲貴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王仲貴，明人物。嘉靖二十六年進士，籍贯安福。（中国历代人物传记资料库 CBDB 308778） | accepted |
| name.primary | 王仲貴 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_FDfwTTY5mqzGJCTTHJFcH8 | 王一夔 | accepted |
| children | p_TBydJme7YoHhFCuggKw6FV | 王一尹 | accepted |
| children | p_Zct7DGKt3pyCoL8pnTZaR8 | 王一龍 | accepted |

## 外部来源

- [中国历代人物传记资料库：王一龍（CBDB 308781）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308781&o=json)
- [中国历代人物传记资料库：王一尹（CBDB 308782）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308782&o=json)
- [中国历代人物传记资料库：王仲貴（CBDB 308778）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308778&o=json)
