---
schema: wang-person/v1
id: p_CqdH2vNBX5dBAHtdLtF8hN
status: active
merged_into: null
display_name: 王光宙
cbdb_id: 297378
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DMvSfWzVYU8PM6hTwXi9qV
        subject_person_id: p_CqdH2vNBX5dBAHtdLtF8hN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光宙，明人物。嘉靖十四年進士，籍贯臨晉。（中国历代人物传记资料库 CBDB 297378）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_syAIkMXNS3j1R-GteF4jlt
          claim_id: c_DMvSfWzVYU8PM6hTwXi9qV
          source_id: s_D9x2u4GMvLh9aEmTy3zKMZ
          stance: supports
          locator: CBDB:297378
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_D9x2u4GMvLh9aEmTy3zKMZ
            source_type: api_record
            title: 中国历代人物传记资料库：王光宙（CBDB 297378）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297378&o=json
            external_identifier: CBDB:297378
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_TuWYv9pni8TwzkwvkekQ3e
        subject_person_id: p_CqdH2vNBX5dBAHtdLtF8hN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光宙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_s5c4nFPxUH6CVbnLxJpn1M
          claim_id: c_TuWYv9pni8TwzkwvkekQ3e
          source_id: s_D9x2u4GMvLh9aEmTy3zKMZ
          stance: supports
          locator: CBDB:297378
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3501-3600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_epgMgZpv40QJOq8HWQd01z
        subject_person_id: p_epYzvTR9hN3wwDSSzwW3ua
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CqdH2vNBX5dBAHtdLtF8hN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nXtEgKgszbjd_xol6kK3M7
          claim_id: c_epgMgZpv40QJOq8HWQd01z
          source_id: s_EZC0-C4HKXIiJEAqWHFyC4
          stance: supports
          locator: CBDB：兄弟 王光宇（202958）之父／母 王謙益
          quotation: null
          interpretation_note: 由兄弟关系推断：王光宙 与 王光宇 为同胞（CBDB 记「兄」），王光宇 之父／母即 王光宙 之父／母。
          source:
            id: s_EZC0-C4HKXIiJEAqWHFyC4
            source_type: api_record
            title: 中国历代人物传记资料库：王光宙（CBDB 297378）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297378&o=json
            external_identifier: CBDB:297378
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_epYzvTR9hN3wwDSSzwW3ua
        status: active
        display_name: 王謙益
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_o2bWLF8KzRnXbS83sEXjPX
        subject_person_id: p_CqdH2vNBX5dBAHtdLtF8hN
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yPDG6qr1bXraqFkBrL15Y6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Aun9higfjmdu7hhm2TJl5H
          claim_id: c_o2bWLF8KzRnXbS83sEXjPX
          source_id: s_EZC0-C4HKXIiJEAqWHFyC4
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202958 王光宇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_EZC0-C4HKXIiJEAqWHFyC4
            source_type: api_record
            title: 中国历代人物传记资料库：王光宙（CBDB 297378）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297378&o=json
            external_identifier: CBDB:297378
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yPDG6qr1bXraqFkBrL15Y6
        status: active
        display_name: 王光宇
        merged_into_person_id: null
---

# 王光宙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王光宙，明人物。嘉靖十四年進士，籍贯臨晉。（中国历代人物传记资料库 CBDB 297378） | accepted |
| name.primary | 王光宙 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_epYzvTR9hN3wwDSSzwW3ua | 王謙益 | accepted |
| other | p_yPDG6qr1bXraqFkBrL15Y6 | 王光宇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王光宙（CBDB 297378）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297378&o=json)
