---
schema: wang-person/v1
id: p_PPNZnTHWQZoFJFBeBGWT9K
status: active
merged_into: null
display_name: 王來徵
cbdb_id: 336276
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZqvsYkPCYXc5J3gUq4UdUP
        subject_person_id: p_PPNZnTHWQZoFJFBeBGWT9K
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王來徵，明人物。隆慶二年進士，籍贯博野。（中国历代人物传记资料库 CBDB 336276）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_3HcCsCm8NU5vShl9XZEkUU
          claim_id: c_ZqvsYkPCYXc5J3gUq4UdUP
          source_id: s_R7bXdW1UmZLmNHonkP6fKA
          stance: supports
          locator: CBDB:336276
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_R7bXdW1UmZLmNHonkP6fKA
            source_type: api_record
            title: 中国历代人物传记资料库：王來徵（CBDB 336276）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336276&o=json
            external_identifier: CBDB:336276
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:08.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_9uJ71LKZ9ndV1GGmULfkGT
        subject_person_id: p_PPNZnTHWQZoFJFBeBGWT9K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王來徵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Ry3d5Y8WfEiutPMr2dhX32
          claim_id: c_9uJ71LKZ9ndV1GGmULfkGT
          source_id: s_R7bXdW1UmZLmNHonkP6fKA
          stance: supports
          locator: CBDB:336276
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4001-4100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_f_vCUt2dk9n3Zt9-35Jhzc
        subject_person_id: p_75am3pR1oJY4F4kK4X9iA5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PPNZnTHWQZoFJFBeBGWT9K
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kuTPS8QI1l36UN-rYQH3Er
          claim_id: c_f_vCUt2dk9n3Zt9-35Jhzc
          source_id: s_gS0lzVXDIWLXwXkBAvACmd
          stance: supports
          locator: CBDB：兄弟 王詔（205634）之父／母 王崇德
          quotation: null
          interpretation_note: 由兄弟关系推断：王來徵 与 王詔 为同胞（CBDB 记「兄」），王詔 之父／母即 王來徵 之父／母。
          source:
            id: s_gS0lzVXDIWLXwXkBAvACmd
            source_type: api_record
            title: 中国历代人物传记资料库：王來徵（CBDB 336276）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336276&o=json
            external_identifier: CBDB:336276
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_75am3pR1oJY4F4kK4X9iA5
        status: active
        display_name: 王崇德
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_NbDegZlsQkiSw0uGKLISeb
        subject_person_id: p_4DoEiYtLovxcVEfxd27r2A
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_PPNZnTHWQZoFJFBeBGWT9K
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zzu-ElNTZ3J8Ul-_gfZyBC
          claim_id: c_NbDegZlsQkiSw0uGKLISeb
          source_id: s_gS0lzVXDIWLXwXkBAvACmd
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205634 王詔）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_gS0lzVXDIWLXwXkBAvACmd
            source_type: api_record
            title: 中国历代人物传记资料库：王來徵（CBDB 336276）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336276&o=json
            external_identifier: CBDB:336276
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4DoEiYtLovxcVEfxd27r2A
        status: active
        display_name: 王詔
        merged_into_person_id: null
---

# 王來徵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王來徵，明人物。隆慶二年進士，籍贯博野。（中国历代人物传记资料库 CBDB 336276） | accepted |
| name.primary | 王來徵 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_75am3pR1oJY4F4kK4X9iA5 | 王崇德 | accepted |
| other | p_4DoEiYtLovxcVEfxd27r2A | 王詔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王來徵（CBDB 336276）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336276&o=json)
