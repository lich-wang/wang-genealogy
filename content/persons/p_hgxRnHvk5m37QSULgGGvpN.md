---
schema: wang-person/v1
id: p_hgxRnHvk5m37QSULgGGvpN
status: active
merged_into: null
display_name: 王昌
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3e5PscNUU3Xo4zVeZqa1HW
        subject_person_id: p_hgxRnHvk5m37QSULgGGvpN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UQQdazinmuYDEQsr6xesZv
          claim_id: c_3e5PscNUU3Xo4zVeZqa1HW
          source_id: s_3bLm2KkDXNwmhQfUoEj3HX
          stance: supports
          locator: CBDB:248394
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（248394）
          source: &a1
            id: s_3bLm2KkDXNwmhQfUoEj3HX
            source_type: api_record
            title: 中国历代人物传记资料库：王昌（CBDB 248394）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248394&o=json
            external_identifier: CBDB:248394
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.151Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HmeZ2QNGBXBwq69aAy9eLF
        subject_person_id: p_hgxRnHvk5m37QSULgGGvpN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昌，明人物。成化十一年進士，籍贯韓城。（中国历代人物传记资料库 CBDB 248394）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OhBIoDF7XGkw_6elYhQnJm
          claim_id: c_HmeZ2QNGBXBwq69aAy9eLF
          source_id: s_3bLm2KkDXNwmhQfUoEj3HX
          stance: supports
          locator: CBDB:248394
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_uMgv86RVN_7TGXSKuS_Anw
        subject_person_id: p_EanU2yYn4vz2RKu9z2UR1n
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hgxRnHvk5m37QSULgGGvpN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9BmjUXviNsRaKWzLw_vPfq
          claim_id: c_uMgv86RVN_7TGXSKuS_Anw
          source_id: s_Jx8vJSRSMusr8lfU5p4C-n
          stance: supports
          locator: CBDB：兄弟 王盛（126711）之父／母 王惠
          quotation: null
          interpretation_note: 由兄弟关系推断：王昌 与 王盛 为同胞（CBDB 记「弟」），王盛 之父／母即 王昌 之父／母。
          source:
            id: s_Jx8vJSRSMusr8lfU5p4C-n
            source_type: api_record
            title: 中国历代人物传记资料库：王昌（CBDB 248394）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248394&o=json
            external_identifier: CBDB:248394
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EanU2yYn4vz2RKu9z2UR1n
        status: active
        display_name: 王惠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_DoJ1A4Y2GoshPKDm9y298Z
        subject_person_id: p_2XRBAyxJK1NzbNZAjugN5q
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hgxRnHvk5m37QSULgGGvpN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9TSIwR7OQ4rHu9GJWyH4Nq
          claim_id: c_DoJ1A4Y2GoshPKDm9y298Z
          source_id: s_Jx8vJSRSMusr8lfU5p4C-n
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126711 王盛）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Jx8vJSRSMusr8lfU5p4C-n
            source_type: api_record
            title: 中国历代人物传记资料库：王昌（CBDB 248394）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248394&o=json
            external_identifier: CBDB:248394
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2XRBAyxJK1NzbNZAjugN5q
        status: active
        display_name: 王盛
        merged_into_person_id: null
---

# 王昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昌 | accepted |
| bio.summary | 王昌，明人物。成化十一年進士，籍贯韓城。（中国历代人物传记资料库 CBDB 248394） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EanU2yYn4vz2RKu9z2UR1n | 王惠 | accepted |
| other | p_2XRBAyxJK1NzbNZAjugN5q | 王盛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昌（CBDB 248394）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248394&o=json)
