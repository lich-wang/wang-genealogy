---
schema: wang-person/v1
id: p_JG5RASaVF6uFZTx3VQyy5G
status: active
merged_into: null
display_name: 王濟
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5nbyWgLQiGdWBLSvCPKgHn
        subject_person_id: p_JG5RASaVF6uFZTx3VQyy5G
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4tBXCywHFiQi4D3WgDt6iz
          claim_id: c_5nbyWgLQiGdWBLSvCPKgHn
          source_id: s_JGSjuBXD9Yw7LkmuGRB2xt
          stance: supports
          locator: CBDB:247650
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（247650）
          source: &a1
            id: s_JGSjuBXD9Yw7LkmuGRB2xt
            source_type: api_record
            title: 中国历代人物传记资料库：王濟（CBDB 247650）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247650&o=json
            external_identifier: CBDB:247650
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.122Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4xPXxZUmxdnPD7JqnejmmS
        subject_person_id: p_JG5RASaVF6uFZTx3VQyy5G
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濟，明人物。成化十一年進士，籍贯武進。（中国历代人物传记资料库 CBDB 247650）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_umHKemteeu1vXvwwfuMVI8
          claim_id: c_4xPXxZUmxdnPD7JqnejmmS
          source_id: s_JGSjuBXD9Yw7LkmuGRB2xt
          stance: supports
          locator: CBDB:247650
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_cj4aeiIuyhGMDMt2_ZR-3U
        subject_person_id: p_MiT45BEZABeDdxC6DUoAF7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JG5RASaVF6uFZTx3VQyy5G
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8WiKXw7oNahPP38IW-PWt2
          claim_id: c_cj4aeiIuyhGMDMt2_ZR-3U
          source_id: s_Mf4Eu1tcX2-quEiBgqxU47
          stance: supports
          locator: CBDB：兄弟 王沂（126526）之父／母 王㒜
          quotation: null
          interpretation_note: 由兄弟关系推断：王濟 与 王沂 为同胞（CBDB 记「兄」），王沂 之父／母即 王濟 之父／母。
          source:
            id: s_Mf4Eu1tcX2-quEiBgqxU47
            source_type: api_record
            title: 中国历代人物传记资料库：王濟（CBDB 247650）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247650&o=json
            external_identifier: CBDB:247650
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MiT45BEZABeDdxC6DUoAF7
        status: active
        display_name: 王㒜
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_tOYvne1b34p8t-kxM6H-TL
        subject_person_id: p_AUAav2wMYc11o1wGoqCa9M
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_JG5RASaVF6uFZTx3VQyy5G
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4tHuhh7rMgyqASBj93w181
          claim_id: c_tOYvne1b34p8t-kxM6H-TL
          source_id: s_Mf4Eu1tcX2-quEiBgqxU47
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126526 王沂）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Mf4Eu1tcX2-quEiBgqxU47
            source_type: api_record
            title: 中国历代人物传记资料库：王濟（CBDB 247650）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247650&o=json
            external_identifier: CBDB:247650
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AUAav2wMYc11o1wGoqCa9M
        status: active
        display_name: 王沂
        merged_into_person_id: null
---

# 王濟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王濟 | accepted |
| bio.summary | 王濟，明人物。成化十一年進士，籍贯武進。（中国历代人物传记资料库 CBDB 247650） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MiT45BEZABeDdxC6DUoAF7 | 王㒜 | accepted |
| other | p_AUAav2wMYc11o1wGoqCa9M | 王沂 | accepted |

## 外部来源

- [中国历代人物传记资料库：王濟（CBDB 247650）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247650&o=json)
