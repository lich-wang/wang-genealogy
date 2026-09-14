---
schema: wang-person/v1
id: p_RaCULe8YbsQAC9UBv88tPg
status: active
merged_into: null
display_name: 王倫
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EjjMQRKNDityF3R3pXjLth
        subject_person_id: p_RaCULe8YbsQAC9UBv88tPg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王倫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nJsbbyT98B2siUPbeHKHKS
          claim_id: c_EjjMQRKNDityF3R3pXjLth
          source_id: s_Y5aWeTwaUqvM3hya2wVfe3
          stance: supports
          locator: CBDB:286072
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（286072）
          source: &a1
            id: s_Y5aWeTwaUqvM3hya2wVfe3
            source_type: api_record
            title: 中国历代人物传记资料库：王倫（CBDB 286072）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286072&o=json
            external_identifier: CBDB:286072
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.230Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GpLdGoE27K5zApHk3gZBv7
        subject_person_id: p_RaCULe8YbsQAC9UBv88tPg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王倫，明人物。正德十六年進士，籍贯金吾右衛，曾任義官。（中国历代人物传记资料库 CBDB 286072）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HVcP1g6P-zG2oLitqTxw6y
          claim_id: c_GpLdGoE27K5zApHk3gZBv7
          source_id: s_Y5aWeTwaUqvM3hya2wVfe3
          stance: supports
          locator: CBDB:286072
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Ms1Kr8I4jEab0cDdCstXWK
        subject_person_id: p_exNPQqiad19zXtFzRk4E7x
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RaCULe8YbsQAC9UBv88tPg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xHawJSAfb4c7dpz8LqBPfp
          claim_id: c_Ms1Kr8I4jEab0cDdCstXWK
          source_id: s_hpYukY3Bp9Zp77uV6LVlPr
          stance: supports
          locator: CBDB：兄弟 王傅（202284）之父／母 王琦
          quotation: null
          interpretation_note: 由兄弟关系推断：王倫 与 王傅 为同胞（CBDB 记「弟」），王傅 之父／母即 王倫 之父／母。
          source:
            id: s_hpYukY3Bp9Zp77uV6LVlPr
            source_type: api_record
            title: 中国历代人物传记资料库：王倫（CBDB 286072）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286072&o=json
            external_identifier: CBDB:286072
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_exNPQqiad19zXtFzRk4E7x
        status: active
        display_name: 王琦
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ZxEJut9DrRBQ8ZKrCnPdQ5
        subject_person_id: p_RaCULe8YbsQAC9UBv88tPg
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UHUqHrmc3KJzYiDRgXCMg7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HUNjD0jqzYq5RhcZpzTsbf
          claim_id: c_ZxEJut9DrRBQ8ZKrCnPdQ5
          source_id: s_hpYukY3Bp9Zp77uV6LVlPr
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202284 王傅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hpYukY3Bp9Zp77uV6LVlPr
            source_type: api_record
            title: 中国历代人物传记资料库：王倫（CBDB 286072）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286072&o=json
            external_identifier: CBDB:286072
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UHUqHrmc3KJzYiDRgXCMg7
        status: active
        display_name: 王傅
        merged_into_person_id: null
---

# 王倫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王倫 | accepted |
| bio.summary | 王倫，明人物。正德十六年進士，籍贯金吾右衛，曾任義官。（中国历代人物传记资料库 CBDB 286072） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_exNPQqiad19zXtFzRk4E7x | 王琦 | accepted |
| other | p_UHUqHrmc3KJzYiDRgXCMg7 | 王傅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王倫（CBDB 286072）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286072&o=json)
