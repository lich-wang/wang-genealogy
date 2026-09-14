---
schema: wang-person/v1
id: p_XsdoaMXkbaKgPk427Juuva
status: active
merged_into: null
display_name: 王延齡
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MAhyWGciQhiFDQSQZfvDDv
        subject_person_id: p_XsdoaMXkbaKgPk427Juuva
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延齡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zUcksNWtzuPcA7mwPV5NAs
          claim_id: c_MAhyWGciQhiFDQSQZfvDDv
          source_id: s_9Pz9qTb7KQJTmNGs3u8imD
          stance: supports
          locator: CBDB:288338
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（288338）
          source: &a1
            id: s_9Pz9qTb7KQJTmNGs3u8imD
            source_type: api_record
            title: 中国历代人物传记资料库：王延齡（CBDB 288338）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288338&o=json
            external_identifier: CBDB:288338
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.291Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wYUgvGqELEC1dgXeZekqqo
        subject_person_id: p_XsdoaMXkbaKgPk427Juuva
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延齡，明人物。嘉靖八年進士，籍贯鄉寧。（中国历代人物传记资料库 CBDB 288338）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oY-l1o4SgfBCEbKypaT94o
          claim_id: c_wYUgvGqELEC1dgXeZekqqo
          source_id: s_9Pz9qTb7KQJTmNGs3u8imD
          stance: supports
          locator: CBDB:288338
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_zHOq26S3zmrgja0vLpKsDs
        subject_person_id: p_KHASkzeAzAbrH4KC5REzz6
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_XsdoaMXkbaKgPk427Juuva
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6J5I6vm89FcJYVyORaRICN
          claim_id: c_zHOq26S3zmrgja0vLpKsDs
          source_id: s_w12YWO7q00PhyNuAJJ0zzo
          stance: supports
          locator: CBDB：兄弟 王与龄（68464）之父／母 王爵
          quotation: null
          interpretation_note: 由兄弟关系推断：王延齡 与 王与龄 为同胞（CBDB 记「弟」），王与龄 之父／母即 王延齡 之父／母。
          source:
            id: s_w12YWO7q00PhyNuAJJ0zzo
            source_type: api_record
            title: 中国历代人物传记资料库：王延齡（CBDB 288338）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288338&o=json
            external_identifier: CBDB:288338
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KHASkzeAzAbrH4KC5REzz6
        status: active
        display_name: 王爵
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_btTF5vzozJ8mhyH9bklDx6
        subject_person_id: p_LYKX47nJ8c49oqYNGB3kRd
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_XsdoaMXkbaKgPk427Juuva
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lwX5_YOnvMzRQGUz1LWvi7
          claim_id: c_btTF5vzozJ8mhyH9bklDx6
          source_id: s_w12YWO7q00PhyNuAJJ0zzo
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 68464 王與齡）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_w12YWO7q00PhyNuAJJ0zzo
            source_type: api_record
            title: 中国历代人物传记资料库：王延齡（CBDB 288338）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288338&o=json
            external_identifier: CBDB:288338
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LYKX47nJ8c49oqYNGB3kRd
        status: active
        display_name: 王与龄
        merged_into_person_id: null
    - claim:
        id: c_HzIGae6YYBbaOrexfHDAzI
        subject_person_id: p_XsdoaMXkbaKgPk427Juuva
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qzznHsDy1MaFH1YWPbYub4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f45P9ZMl2XsFvq0doV1srB
          claim_id: c_HzIGae6YYBbaOrexfHDAzI
          source_id: s_w12YWO7q00PhyNuAJJ0zzo
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202447 王培齡）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_w12YWO7q00PhyNuAJJ0zzo
            source_type: api_record
            title: 中国历代人物传记资料库：王延齡（CBDB 288338）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288338&o=json
            external_identifier: CBDB:288338
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qzznHsDy1MaFH1YWPbYub4
        status: active
        display_name: 王培龄
        merged_into_person_id: null
---

# 王延齡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王延齡 | accepted |
| bio.summary | 王延齡，明人物。嘉靖八年進士，籍贯鄉寧。（中国历代人物传记资料库 CBDB 288338） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_KHASkzeAzAbrH4KC5REzz6 | 王爵 | accepted |
| other | p_LYKX47nJ8c49oqYNGB3kRd | 王与龄 | accepted |
| other | p_qzznHsDy1MaFH1YWPbYub4 | 王培龄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王延齡（CBDB 288338）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288338&o=json)
