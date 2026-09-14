---
schema: wang-person/v1
id: p_L1Ld8vqoE3DVKoVeesVKff
status: active
merged_into: null
display_name: 王翀
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RDoENoVtswQm8Jfm18FFH5
        subject_person_id: p_L1Ld8vqoE3DVKoVeesVKff
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ajh7Ssnu9KBJ9LVnA68gw1
          claim_id: c_RDoENoVtswQm8Jfm18FFH5
          source_id: s_W2KhhMXKaAAX6EAx8vL2a4
          stance: supports
          locator: CBDB:260344
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（260344）
          source: &a1
            id: s_W2KhhMXKaAAX6EAx8vL2a4
            source_type: api_record
            title: 中国历代人物传记资料库：王翀（CBDB 260344）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260344&o=json
            external_identifier: CBDB:260344
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.497Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FAagLwQpN2f4C7PH7hKjUE
        subject_person_id: p_L1Ld8vqoE3DVKoVeesVKff
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翀，明人物。成化二十三年進士，籍贯榮昌。（中国历代人物传记资料库 CBDB 260344）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1bp341csoXeG8TpVwxCy7Q
          claim_id: c_FAagLwQpN2f4C7PH7hKjUE
          source_id: s_W2KhhMXKaAAX6EAx8vL2a4
          stance: supports
          locator: CBDB:260344
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_rlUEM1eqegorEZtfdDAFQO
        subject_person_id: p_qXXWkVN4cPuCaB8LQ1BWBn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_L1Ld8vqoE3DVKoVeesVKff
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vgTqQ4QR1ID__RoLz2XVk6
          claim_id: c_rlUEM1eqegorEZtfdDAFQO
          source_id: s_Kz_BcYfVah1xAMiamvhjyT
          stance: supports
          locator: CBDB：兄弟 王貫（200606）之父／母 王玘
          quotation: null
          interpretation_note: 由兄弟关系推断：王翀 与 王貫 为同胞（CBDB 记「弟」），王貫 之父／母即 王翀 之父／母。
          source:
            id: s_Kz_BcYfVah1xAMiamvhjyT
            source_type: api_record
            title: 中国历代人物传记资料库：王翀（CBDB 260344）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260344&o=json
            external_identifier: CBDB:260344
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qXXWkVN4cPuCaB8LQ1BWBn
        status: active
        display_name: 王玘
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Y47CZs_q-hIQyGEfK58waR
        subject_person_id: p_L1Ld8vqoE3DVKoVeesVKff
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_uBDJjG7sJNJM9ZmFoir4HY
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aewKC7lmknZCZKMyLk4Fh7
          claim_id: c_Y47CZs_q-hIQyGEfK58waR
          source_id: s_Kz_BcYfVah1xAMiamvhjyT
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200606 王貫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Kz_BcYfVah1xAMiamvhjyT
            source_type: api_record
            title: 中国历代人物传记资料库：王翀（CBDB 260344）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260344&o=json
            external_identifier: CBDB:260344
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uBDJjG7sJNJM9ZmFoir4HY
        status: active
        display_name: 王貫
        merged_into_person_id: null
---

# 王翀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翀 | accepted |
| bio.summary | 王翀，明人物。成化二十三年進士，籍贯榮昌。（中国历代人物传记资料库 CBDB 260344） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qXXWkVN4cPuCaB8LQ1BWBn | 王玘 | accepted |
| other | p_uBDJjG7sJNJM9ZmFoir4HY | 王貫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王翀（CBDB 260344）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260344&o=json)
