---
schema: wang-person/v1
id: p_XdtDFjMTu3YEdr574aNAWC
status: active
merged_into: null
display_name: 王慶賢
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_27vJhmsMZRAZjdj8nWcsGq
        subject_person_id: p_XdtDFjMTu3YEdr574aNAWC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wwdMC8wVBPddCSoHA1Y1io
          claim_id: c_27vJhmsMZRAZjdj8nWcsGq
          source_id: s_GzEUNnRVbMcnmxA4TNJXBm
          stance: supports
          locator: CBDB:292746
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（292746）
          source: &a1
            id: s_GzEUNnRVbMcnmxA4TNJXBm
            source_type: api_record
            title: 中国历代人物传记资料库：王慶賢（CBDB 292746）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292746&o=json
            external_identifier: CBDB:292746
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.417Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nBBX5nFqMudAxJwKLCbwNH
        subject_person_id: p_XdtDFjMTu3YEdr574aNAWC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶賢，明人物。嘉靖十一年進士，籍贯中江。（中国历代人物传记资料库 CBDB 292746）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_E7LVFfOc3tDyGgy0y4J36D
          claim_id: c_nBBX5nFqMudAxJwKLCbwNH
          source_id: s_GzEUNnRVbMcnmxA4TNJXBm
          stance: supports
          locator: CBDB:292746
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_eOCVfLjq2LsaQDk5fmYfx1
        subject_person_id: p_MfVeb7fgPLZUX4FfJniEs9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XdtDFjMTu3YEdr574aNAWC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nOY5c_EW-jFneJ28YHQU9E
          claim_id: c_eOCVfLjq2LsaQDk5fmYfx1
          source_id: s_hZA6G-JplYYwKDaph34Pzb
          stance: supports
          locator: CBDB：兄弟 王惟賢（202709）之父／母 王錫
          quotation: null
          interpretation_note: 由兄弟关系推断：王慶賢 与 王惟賢 为同胞（CBDB 记「兄」），王惟賢 之父／母即 王慶賢 之父／母。
          source:
            id: s_hZA6G-JplYYwKDaph34Pzb
            source_type: api_record
            title: 中国历代人物传记资料库：王慶賢（CBDB 292746）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292746&o=json
            external_identifier: CBDB:292746
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MfVeb7fgPLZUX4FfJniEs9
        status: active
        display_name: 王錫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_jLHLGy_bRPvzIxgeBgaiUO
        subject_person_id: p_XdtDFjMTu3YEdr574aNAWC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_gyNUeFDDZGNowk91dtAr1B
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4zjWcUhNvxDhje7jJWZv27
          claim_id: c_jLHLGy_bRPvzIxgeBgaiUO
          source_id: s_hZA6G-JplYYwKDaph34Pzb
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202709 王惟賢）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hZA6G-JplYYwKDaph34Pzb
            source_type: api_record
            title: 中国历代人物传记资料库：王慶賢（CBDB 292746）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292746&o=json
            external_identifier: CBDB:292746
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gyNUeFDDZGNowk91dtAr1B
        status: active
        display_name: 王惟賢
        merged_into_person_id: null
---

# 王慶賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慶賢 | accepted |
| bio.summary | 王慶賢，明人物。嘉靖十一年進士，籍贯中江。（中国历代人物传记资料库 CBDB 292746） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MfVeb7fgPLZUX4FfJniEs9 | 王錫 | accepted |
| other | p_gyNUeFDDZGNowk91dtAr1B | 王惟賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王慶賢（CBDB 292746）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292746&o=json)
