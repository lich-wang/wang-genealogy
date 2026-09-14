---
schema: wang-person/v1
id: p_9Mxu2joESQeGJeXNQk3MVP
status: active
merged_into: null
display_name: 王文炤
cbdb_id: 316804
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XKYKx1RbZ5hSxLjNndA2oH
        subject_person_id: p_9Mxu2joESQeGJeXNQk3MVP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文炤，明人物。嘉靖三十二年進士，籍贯廬陵。（中国历代人物传记资料库 CBDB 316804）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Qekl0WBqX9_EMu2bNnfB_2
          claim_id: c_XKYKx1RbZ5hSxLjNndA2oH
          source_id: s_gR4PqNELtn2KKpBMaMZTx8
          stance: supports
          locator: CBDB:316804
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_gR4PqNELtn2KKpBMaMZTx8
            source_type: api_record
            title: 中国历代人物传记资料库：王文炤（CBDB 316804）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316804&o=json
            external_identifier: CBDB:316804
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_eErDKnQ5GSy6oPo6iCYLzK
        subject_person_id: p_9Mxu2joESQeGJeXNQk3MVP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文炤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ppNkGTJ9pWkz14TXcHy6py
          claim_id: c_eErDKnQ5GSy6oPo6iCYLzK
          source_id: s_gR4PqNELtn2KKpBMaMZTx8
          stance: supports
          locator: CBDB:316804
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_KGBgP3bb-R-Mh-D2ynKsrH
        subject_person_id: p_pRE8tgS2kdZDvfTt1GWCyR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9Mxu2joESQeGJeXNQk3MVP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__4hKkfRqjiJvix8OpyBNr4
          claim_id: c_KGBgP3bb-R-Mh-D2ynKsrH
          source_id: s_r0fhVf2-pVfpRl2j_jzsjW
          stance: supports
          locator: CBDB：兄弟 王文炳（126458）之父／母 王慶環
          quotation: null
          interpretation_note: 由兄弟关系推断：王文炤 与 王文炳 为同胞（CBDB 记「兄」），王文炳 之父／母即 王文炤 之父／母。
          source:
            id: s_r0fhVf2-pVfpRl2j_jzsjW
            source_type: api_record
            title: 中国历代人物传记资料库：王文炤（CBDB 316804）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316804&o=json
            external_identifier: CBDB:316804
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pRE8tgS2kdZDvfTt1GWCyR
        status: active
        display_name: 王慶環
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_vyxe-emjGGvRxw7ET1upZn
        subject_person_id: p_5HHB1Hb4zKCj9LE68zB5ne
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_9Mxu2joESQeGJeXNQk3MVP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lf2rvJz-Qewd_a9vrH10R0
          claim_id: c_vyxe-emjGGvRxw7ET1upZn
          source_id: s_r0fhVf2-pVfpRl2j_jzsjW
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126458 王文炳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_r0fhVf2-pVfpRl2j_jzsjW
            source_type: api_record
            title: 中国历代人物传记资料库：王文炤（CBDB 316804）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316804&o=json
            external_identifier: CBDB:316804
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5HHB1Hb4zKCj9LE68zB5ne
        status: active
        display_name: 王文炳
        merged_into_person_id: null
---

# 王文炤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王文炤，明人物。嘉靖三十二年進士，籍贯廬陵。（中国历代人物传记资料库 CBDB 316804） | accepted |
| name.primary | 王文炤 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_pRE8tgS2kdZDvfTt1GWCyR | 王慶環 | accepted |
| other | p_5HHB1Hb4zKCj9LE68zB5ne | 王文炳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文炤（CBDB 316804）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316804&o=json)
