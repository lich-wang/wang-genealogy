---
schema: wang-person/v1
id: p_pXPDHgXhsJmbet7dfq14fb
status: active
merged_into: null
display_name: 王三讓
cbdb_id: 303947
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eQHnasvo8nBkZr8HVcFiTw
        subject_person_id: p_pXPDHgXhsJmbet7dfq14fb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三讓，明人物。嘉靖二十年進士，籍贯黃縣。（中国历代人物传记资料库 CBDB 303947）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_NNMd_aR-u3yJ08IH4Q-Rzn
          claim_id: c_eQHnasvo8nBkZr8HVcFiTw
          source_id: s_TyCshhQEB27RvWcyKS8gpy
          stance: supports
          locator: CBDB:303947
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_TyCshhQEB27RvWcyKS8gpy
            source_type: api_record
            title: 中国历代人物传记资料库：王三讓（CBDB 303947）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303947&o=json
            external_identifier: CBDB:303947
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_FYEHAFpkw5LSGcc5wd1w4x
        subject_person_id: p_pXPDHgXhsJmbet7dfq14fb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三讓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Y62BMCgh1gJauZjfR1Eu4G
          claim_id: c_FYEHAFpkw5LSGcc5wd1w4x
          source_id: s_TyCshhQEB27RvWcyKS8gpy
          stance: supports
          locator: CBDB:303947
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3501-3600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_czP_yplo_atABJW9t3pBoB
        subject_person_id: p_32qBUADizjGa3P7B3ZTimt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pXPDHgXhsJmbet7dfq14fb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__2NZkXP9KgvTxZ5I3QYNDf
          claim_id: c_czP_yplo_atABJW9t3pBoB
          source_id: s_N76ZGxk4KZ2r1bR8og6oLm
          stance: supports
          locator: CBDB：兄弟 王三聘（203385）之父／母 王瑤
          quotation: null
          interpretation_note: 由兄弟关系推断：王三讓 与 王三聘 为同胞（CBDB 记「兄」），王三聘 之父／母即 王三讓 之父／母。
          source:
            id: s_N76ZGxk4KZ2r1bR8og6oLm
            source_type: api_record
            title: 中国历代人物传记资料库：王三讓（CBDB 303947）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303947&o=json
            external_identifier: CBDB:303947
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_32qBUADizjGa3P7B3ZTimt
        status: active
        display_name: 王瑤
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_DQFfcldtQiJPm6RUJjxCTG
        subject_person_id: p_USmQUSMYXi4KzQDYfEfPrB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_pXPDHgXhsJmbet7dfq14fb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lc2LlOxzMCR70FxKGM7ztn
          claim_id: c_DQFfcldtQiJPm6RUJjxCTG
          source_id: s_N76ZGxk4KZ2r1bR8og6oLm
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203385 王三聘）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_N76ZGxk4KZ2r1bR8og6oLm
            source_type: api_record
            title: 中国历代人物传记资料库：王三讓（CBDB 303947）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303947&o=json
            external_identifier: CBDB:303947
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_USmQUSMYXi4KzQDYfEfPrB
        status: active
        display_name: 王三聘
        merged_into_person_id: null
---

# 王三讓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王三讓，明人物。嘉靖二十年進士，籍贯黃縣。（中国历代人物传记资料库 CBDB 303947） | accepted |
| name.primary | 王三讓 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_32qBUADizjGa3P7B3ZTimt | 王瑤 | accepted |
| other | p_USmQUSMYXi4KzQDYfEfPrB | 王三聘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王三讓（CBDB 303947）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303947&o=json)
