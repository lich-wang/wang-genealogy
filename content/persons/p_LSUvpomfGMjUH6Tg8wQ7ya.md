---
schema: wang-person/v1
id: p_LSUvpomfGMjUH6Tg8wQ7ya
status: active
merged_into: null
display_name: 王彩
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TkfCT7NEbjvBeuhsZSjNQL
        subject_person_id: p_LSUvpomfGMjUH6Tg8wQ7ya
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zkrxvwo5HPRtHKNaKW5c9g
          claim_id: c_TkfCT7NEbjvBeuhsZSjNQL
          source_id: s_EiH47J6djmEJKh85urESK7
          stance: supports
          locator: CBDB:259542
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（259542）
          source: &a1
            id: s_EiH47J6djmEJKh85urESK7
            source_type: api_record
            title: 中国历代人物传记资料库：王彩（CBDB 259542）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259542&o=json
            external_identifier: CBDB:259542
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.464Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bW431jJYDKAk37b8wjAqyK
        subject_person_id: p_LSUvpomfGMjUH6Tg8wQ7ya
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彩，明人物。成化二十三年進士，籍贯慈溪，曾任省祭官。（中国历代人物传记资料库 CBDB 259542）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fwd7KVt-Hxk86ngkORCCUz
          claim_id: c_bW431jJYDKAk37b8wjAqyK
          source_id: s_EiH47J6djmEJKh85urESK7
          stance: supports
          locator: CBDB:259542
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_huISWrnNyvt37Vly2rK_-4
        subject_person_id: p_isvcw6EfQic2NdXZzwfKeT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LSUvpomfGMjUH6Tg8wQ7ya
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bB8F0jbjl63PBUcRmtlD7N
          claim_id: c_huISWrnNyvt37Vly2rK_-4
          source_id: s_Ge0l9MtrtheRyHlk1k0_J9
          stance: supports
          locator: CBDB：兄弟 王術（200545）之父／母 王洪
          quotation: null
          interpretation_note: 由兄弟关系推断：王彩 与 王術 为同胞（CBDB 记「弟」），王術 之父／母即 王彩 之父／母。
          source:
            id: s_Ge0l9MtrtheRyHlk1k0_J9
            source_type: api_record
            title: 中国历代人物传记资料库：王彩（CBDB 259542）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259542&o=json
            external_identifier: CBDB:259542
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_isvcw6EfQic2NdXZzwfKeT
        status: active
        display_name: 王洪
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_OkC73KR_6k5VwO9ko2snw4
        subject_person_id: p_LSUvpomfGMjUH6Tg8wQ7ya
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RxU5daA7Pb2tQNaYot8QGE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rk02flhnx92HyHuvf1AYkZ
          claim_id: c_OkC73KR_6k5VwO9ko2snw4
          source_id: s_Ge0l9MtrtheRyHlk1k0_J9
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200545 王術）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Ge0l9MtrtheRyHlk1k0_J9
            source_type: api_record
            title: 中国历代人物传记资料库：王彩（CBDB 259542）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259542&o=json
            external_identifier: CBDB:259542
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RxU5daA7Pb2tQNaYot8QGE
        status: active
        display_name: 王術
        merged_into_person_id: null
---

# 王彩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彩 | accepted |
| bio.summary | 王彩，明人物。成化二十三年進士，籍贯慈溪，曾任省祭官。（中国历代人物传记资料库 CBDB 259542） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_isvcw6EfQic2NdXZzwfKeT | 王洪 | accepted |
| other | p_RxU5daA7Pb2tQNaYot8QGE | 王術 | accepted |

## 外部来源

- [中国历代人物传记资料库：王彩（CBDB 259542）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259542&o=json)
