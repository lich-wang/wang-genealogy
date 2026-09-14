---
schema: wang-person/v1
id: p_h8sJHgEUaQHScKxtt1BkuB
status: active
merged_into: null
display_name: 王宣清
cbdb_id: 254948
revision: 5
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VQCG41GcFU96Wf17r9w8xh
        subject_person_id: p_h8sJHgEUaQHScKxtt1BkuB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宣清，明人物。成化十七年進士，籍贯泰和，曾任教授。（中国历代人物传记资料库 CBDB 254948）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_5soLw5GGAX5QpkzBxxsTrF
          claim_id: c_VQCG41GcFU96Wf17r9w8xh
          source_id: s_czNMCZxur46EJbK9nicQL9
          stance: supports
          locator: CBDB:254948
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_czNMCZxur46EJbK9nicQL9
            source_type: api_record
            title: 中国历代人物传记资料库：王宣清（CBDB 254948）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254948&o=json
            external_identifier: CBDB:254948
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_m2QwPZaJgEfxxtAH127n4H
        subject_person_id: p_h8sJHgEUaQHScKxtt1BkuB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宣清
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_KeRLJhPogs8yoYM9JWYomW
          claim_id: c_m2QwPZaJgEfxxtAH127n4H
          source_id: s_czNMCZxur46EJbK9nicQL9
          stance: supports
          locator: CBDB:254948
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3001-3100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_0PeANNmbwVMMNedYYdI5QA
        subject_person_id: p_h8sJHgEUaQHScKxtt1BkuB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_G8UB9fUGo95gK5v77Cu4Q6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0iOkwIpe9V6SaeM0b4tQzX
          claim_id: c_0PeANNmbwVMMNedYYdI5QA
          source_id: s_D8dDpacficMiYsJ44XxbBo
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第二甲第二十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_D8dDpacficMiYsJ44XxbBo
            source_type: api_record
            title: 中国历代人物传记资料库：王機（CBDB 200214）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200214&o=json
            external_identifier: CBDB:200214
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.595Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_G8UB9fUGo95gK5v77Cu4Q6
        status: active
        display_name: 王機
        merged_into_person_id: null
    - claim:
        id: c_GY2Dk7v-TRy87eaUlLXC1e
        subject_person_id: p_h8sJHgEUaQHScKxtt1BkuB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PKLtpPAo6poSetxCuJo41k
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XXeMvVKByQP1P7upayRyOG
          claim_id: c_GY2Dk7v-TRy87eaUlLXC1e
          source_id: s_hVWIGhUcp53HP3Zu-u8dST
          stance: supports
          locator: CBDB：兄弟 王機（200214）之父／母 王宣清
          quotation: null
          interpretation_note: 由兄弟关系推断：王椐 与 王機 为同胞（CBDB 记「兄」），王機 之父／母即 王椐 之父／母。
          source:
            id: s_hVWIGhUcp53HP3Zu-u8dST
            source_type: api_record
            title: 中国历代人物传记资料库：王椐（CBDB 254954）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254954&o=json
            external_identifier: CBDB:254954
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PKLtpPAo6poSetxCuJo41k
        status: active
        display_name: 王椐
        merged_into_person_id: null
    - claim:
        id: c_I5kDBRM79POVTRhTrSDCNo
        subject_person_id: p_h8sJHgEUaQHScKxtt1BkuB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_S96tZ7d3dKfu3Hc5ofu6ZH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dUnvC2FtvKKHLjqhFjSRfj
          claim_id: c_I5kDBRM79POVTRhTrSDCNo
          source_id: s_SEWqfYkbMw_oyqwvHFGIOQ
          stance: supports
          locator: CBDB：兄弟 王機（200214）之父／母 王宣清
          quotation: null
          interpretation_note: 由兄弟关系推断：王柌 与 王機 为同胞（CBDB 记「兄」），王機 之父／母即 王柌 之父／母。
          source:
            id: s_SEWqfYkbMw_oyqwvHFGIOQ
            source_type: api_record
            title: 中国历代人物传记资料库：王柌（CBDB 254953）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254953&o=json
            external_identifier: CBDB:254953
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_S96tZ7d3dKfu3Hc5ofu6ZH
        status: active
        display_name: 王柌
        merged_into_person_id: null
    - claim:
        id: c_8-rqFlK6gBuhKGB5XaKbKL
        subject_person_id: p_h8sJHgEUaQHScKxtt1BkuB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iWeMomEw1RbNhWSYdX7awh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RMSNwJAfkep6GiQU2oUwCl
          claim_id: c_8-rqFlK6gBuhKGB5XaKbKL
          source_id: s_oX2K1rR4GHA761Crdh6lm9
          stance: supports
          locator: CBDB：兄弟 王機（200214）之父／母 王宣清
          quotation: null
          interpretation_note: 由兄弟关系推断：王柏 与 王機 为同胞（CBDB 记「弟」），王機 之父／母即 王柏 之父／母。
          source:
            id: s_oX2K1rR4GHA761Crdh6lm9
            source_type: api_record
            title: 中国历代人物传记资料库：王柏（CBDB 254952）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254952&o=json
            external_identifier: CBDB:254952
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_iWeMomEw1RbNhWSYdX7awh
        status: active
        display_name: 王柏
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王宣清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宣清，明人物。成化十七年進士，籍贯泰和，曾任教授。（中国历代人物传记资料库 CBDB 254948） | accepted |
| name.primary | 王宣清 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_G8UB9fUGo95gK5v77Cu4Q6 | 王機 | accepted |
| children | p_PKLtpPAo6poSetxCuJo41k | 王椐 | accepted |
| children | p_S96tZ7d3dKfu3Hc5ofu6ZH | 王柌 | accepted |
| children | p_iWeMomEw1RbNhWSYdX7awh | 王柏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王柏（CBDB 254952）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254952&o=json)
- [中国历代人物传记资料库：王柌（CBDB 254953）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254953&o=json)
- [中国历代人物传记资料库：王機（CBDB 200214）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200214&o=json)
- [中国历代人物传记资料库：王椐（CBDB 254954）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254954&o=json)
- [中国历代人物传记资料库：王宣清（CBDB 254948）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254948&o=json)
