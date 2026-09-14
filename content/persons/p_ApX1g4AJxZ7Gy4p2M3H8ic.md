---
schema: wang-person/v1
id: p_ApX1g4AJxZ7Gy4p2M3H8ic
status: active
merged_into: null
display_name: 王穀禎
cbdb_id: 287792
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9ooAEk89vcmjKWyTwwVuDe
        subject_person_id: p_ApX1g4AJxZ7Gy4p2M3H8ic
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王穀禎，明人物。嘉靖八年進士，籍贯長洲，曾任府經歷。（中国历代人物传记资料库 CBDB 287792）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Pk9Lx4PqxUX1Bt0CyVZHSM
          claim_id: c_9ooAEk89vcmjKWyTwwVuDe
          source_id: s_LPBuqo8CNfAZkmfgSzQZCH
          stance: supports
          locator: CBDB:287792
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_LPBuqo8CNfAZkmfgSzQZCH
            source_type: api_record
            title: 中国历代人物传记资料库：王穀禎（CBDB 287792）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287792&o=json
            external_identifier: CBDB:287792
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_khQK2WfocWDQJa2pxKoGbM
        subject_person_id: p_ApX1g4AJxZ7Gy4p2M3H8ic
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王穀禎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_E7EP2DQkH9svs9Es43MhDw
          claim_id: c_khQK2WfocWDQJa2pxKoGbM
          source_id: s_LPBuqo8CNfAZkmfgSzQZCH
          stance: supports
          locator: CBDB:287792
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3301-3400）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_w-kZzRXHq5fg-rE4Su-iN8
        subject_person_id: p_C8ZxQAECatcwVFYPVsxFYQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ApX1g4AJxZ7Gy4p2M3H8ic
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2la6AjSJxxcRtG6QSldXUu
          claim_id: c_w-kZzRXHq5fg-rE4Su-iN8
          source_id: s_mVJBeCPHJKmoq_1mWuHACn
          stance: supports
          locator: CBDB：兄弟 王穀祥（126804）之父／母 王觀
          quotation: null
          interpretation_note: 由兄弟关系推断：王穀禎 与 王穀祥 为同胞（CBDB 记「弟」），王穀祥 之父／母即 王穀禎 之父／母。
          source:
            id: s_mVJBeCPHJKmoq_1mWuHACn
            source_type: api_record
            title: 中国历代人物传记资料库：王穀禎（CBDB 287792）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287792&o=json
            external_identifier: CBDB:287792
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_C8ZxQAECatcwVFYPVsxFYQ
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
        id: c_XPFHT6fgvz41xIVBEKGwPI
        subject_person_id: p_ApX1g4AJxZ7Gy4p2M3H8ic
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_JX2kojoi67e76MdeNUyP8W
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UpFvsQb85dwWyoiqC6Vc9q
          claim_id: c_XPFHT6fgvz41xIVBEKGwPI
          source_id: s_mVJBeCPHJKmoq_1mWuHACn
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126804 王穀祥）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_mVJBeCPHJKmoq_1mWuHACn
            source_type: api_record
            title: 中国历代人物传记资料库：王穀禎（CBDB 287792）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287792&o=json
            external_identifier: CBDB:287792
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JX2kojoi67e76MdeNUyP8W
        status: active
        display_name: 王穀祥
        merged_into_person_id: null
---

# 王穀禎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王穀禎，明人物。嘉靖八年進士，籍贯長洲，曾任府經歷。（中国历代人物传记资料库 CBDB 287792） | accepted |
| name.primary | 王穀禎 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_C8ZxQAECatcwVFYPVsxFYQ | 王觀 | accepted |
| other | p_JX2kojoi67e76MdeNUyP8W | 王穀祥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王穀禎（CBDB 287792）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287792&o=json)
