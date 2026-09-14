---
schema: wang-person/v1
id: p_3ego6qZ7Tga1Q5Ykt4yXW3
status: active
merged_into: null
display_name: 王應璧
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TKtg5aCK2XayRw9fGYNJCU
        subject_person_id: p_3ego6qZ7Tga1Q5Ykt4yXW3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應璧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Uv6reVWNyDd2aB4bHNkdPV
          claim_id: c_TKtg5aCK2XayRw9fGYNJCU
          source_id: s_4YXrUDUKmD8xMBiGTThMeo
          stance: supports
          locator: CBDB:221872
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（221872）
          source: &a1
            id: s_4YXrUDUKmD8xMBiGTThMeo
            source_type: api_record
            title: 中国历代人物传记资料库：王應璧（CBDB 221872）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221872&o=json
            external_identifier: CBDB:221872
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.347Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QX38EbB7w79WKqojVqojcC
        subject_person_id: p_3ego6qZ7Tga1Q5Ykt4yXW3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應璧，明人物。萬曆八年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 221872）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MCYMg-lrm6R6_3UqXNwy1e
          claim_id: c_QX38EbB7w79WKqojVqojcC
          source_id: s_4YXrUDUKmD8xMBiGTThMeo
          stance: supports
          locator: CBDB:221872
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_t8r5oQ1-ff6cVVK2xx1wNn
        subject_person_id: p_iEzBpfQksvKwtnLVgiEPSK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3ego6qZ7Tga1Q5Ykt4yXW3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zQrHtwIbXYD3SFkcBCjCP-
          claim_id: c_t8r5oQ1-ff6cVVK2xx1wNn
          source_id: s_-qnOJwRby484dSUFx-KrBw
          stance: supports
          locator: CBDB：兄弟 王三陽（206708）之父／母 王賜良
          quotation: null
          interpretation_note: 由兄弟关系推断：王應璧 与 王三陽 为同胞（CBDB 记「兄」），王三陽 之父／母即 王應璧 之父／母。
          source:
            id: s_-qnOJwRby484dSUFx-KrBw
            source_type: api_record
            title: 中国历代人物传记资料库：王應璧（CBDB 221872）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221872&o=json
            external_identifier: CBDB:221872
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_iEzBpfQksvKwtnLVgiEPSK
        status: active
        display_name: 王賜良
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_PBT7E7o-O49VryZxyts2qt
        subject_person_id: p_3ego6qZ7Tga1Q5Ykt4yXW3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_CE6L82D742RNyGAmxCYAn5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QZhiuoruPG99LxpcLz59gM
          claim_id: c_PBT7E7o-O49VryZxyts2qt
          source_id: s_-qnOJwRby484dSUFx-KrBw
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206708 王三陽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_-qnOJwRby484dSUFx-KrBw
            source_type: api_record
            title: 中国历代人物传记资料库：王應璧（CBDB 221872）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221872&o=json
            external_identifier: CBDB:221872
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CE6L82D742RNyGAmxCYAn5
        status: active
        display_name: 王三陽
        merged_into_person_id: null
---

# 王應璧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應璧 | accepted |
| bio.summary | 王應璧，明人物。萬曆八年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 221872） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_iEzBpfQksvKwtnLVgiEPSK | 王賜良 | accepted |
| other | p_CE6L82D742RNyGAmxCYAn5 | 王三陽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王應璧（CBDB 221872）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221872&o=json)
