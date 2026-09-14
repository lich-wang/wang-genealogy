---
schema: wang-person/v1
id: p_518MAjgWUyHuRmraWVNPiT
status: active
merged_into: null
display_name: 王銳
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pEu2dJYdXPmyLEbMQPoF5G
        subject_person_id: p_518MAjgWUyHuRmraWVNPiT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yFKC3mYriMCFa1rHCP7fL1
          claim_id: c_pEu2dJYdXPmyLEbMQPoF5G
          source_id: s_WGX5dyw6MsP1pJTfq9JcDJ
          stance: supports
          locator: CBDB:270528
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（270528）
          source: &a1
            id: s_WGX5dyw6MsP1pJTfq9JcDJ
            source_type: api_record
            title: 中国历代人物传记资料库：王銳（CBDB 270528）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270528&o=json
            external_identifier: CBDB:270528
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.839Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bxN7JGBaE4QfTKtYfdLav1
        subject_person_id: p_518MAjgWUyHuRmraWVNPiT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銳，明人物。景泰五年進士，籍贯新城。（中国历代人物传记资料库 CBDB 270528）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_E1KqQLJnwqEvyEQo9Kx-vl
          claim_id: c_bxN7JGBaE4QfTKtYfdLav1
          source_id: s_WGX5dyw6MsP1pJTfq9JcDJ
          stance: supports
          locator: CBDB:270528
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_4fXWk9Vt2aq-UYnv5fqzQ1
        subject_person_id: p_Hgxi33jEZJCNUrJvtuJpZh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_518MAjgWUyHuRmraWVNPiT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ztus67iVAGZxj3y02cPv36
          claim_id: c_4fXWk9Vt2aq-UYnv5fqzQ1
          source_id: s_TLxC_cA2NMXvx0yj4V8G4S
          stance: supports
          locator: CBDB：兄弟 王欽（198425）之父／母 王庭哲
          quotation: null
          interpretation_note: 由兄弟关系推断：王銳 与 王欽 为同胞（CBDB 记「兄」），王欽 之父／母即 王銳 之父／母。
          source:
            id: s_TLxC_cA2NMXvx0yj4V8G4S
            source_type: api_record
            title: 中国历代人物传记资料库：王銳（CBDB 270528）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270528&o=json
            external_identifier: CBDB:270528
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Hgxi33jEZJCNUrJvtuJpZh
        status: active
        display_name: 王庭哲
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_dykVTSEFnTAjC7sFjU-ICU
        subject_person_id: p_518MAjgWUyHuRmraWVNPiT
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nr8RYEFav3WB5L5BxkUtUu
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W8nUP_TTsW8fCU7pfRMBGb
          claim_id: c_dykVTSEFnTAjC7sFjU-ICU
          source_id: s_TLxC_cA2NMXvx0yj4V8G4S
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198425 王欽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_TLxC_cA2NMXvx0yj4V8G4S
            source_type: api_record
            title: 中国历代人物传记资料库：王銳（CBDB 270528）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270528&o=json
            external_identifier: CBDB:270528
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nr8RYEFav3WB5L5BxkUtUu
        status: active
        display_name: 王欽
        merged_into_person_id: null
---

# 王銳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王銳 | accepted |
| bio.summary | 王銳，明人物。景泰五年進士，籍贯新城。（中国历代人物传记资料库 CBDB 270528） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Hgxi33jEZJCNUrJvtuJpZh | 王庭哲 | accepted |
| other | p_nr8RYEFav3WB5L5BxkUtUu | 王欽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王銳（CBDB 270528）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270528&o=json)
