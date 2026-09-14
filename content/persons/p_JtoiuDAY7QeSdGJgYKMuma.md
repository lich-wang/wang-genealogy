---
schema: wang-person/v1
id: p_JtoiuDAY7QeSdGJgYKMuma
status: active
merged_into: null
display_name: 王夢羆
cbdb_id: 297286
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WF7s4MrRyCdUd2ivYpwAzt
        subject_person_id: p_JtoiuDAY7QeSdGJgYKMuma
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢羆，明人物。嘉靖十四年進士，籍贯代州。（中国历代人物传记资料库 CBDB 297286）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Z9rTsFjFtUil9vt13ZyJ6i
          claim_id: c_WF7s4MrRyCdUd2ivYpwAzt
          source_id: s_KLGtNVqjUN6TGzCBm49NkP
          stance: supports
          locator: CBDB:297286
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_KLGtNVqjUN6TGzCBm49NkP
            source_type: api_record
            title: 中国历代人物传记资料库：王夢羆（CBDB 297286）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297286&o=json
            external_identifier: CBDB:297286
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_DWqthjNfCb9HvvcJPBg12F
        subject_person_id: p_JtoiuDAY7QeSdGJgYKMuma
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢羆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_dZg26E38PicAUC7Krdtt2E
          claim_id: c_DWqthjNfCb9HvvcJPBg12F
          source_id: s_KLGtNVqjUN6TGzCBm49NkP
          stance: supports
          locator: CBDB:297286
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3501-3600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_r7Tg9Urdz5w-bWwMP2P1Vf
        subject_person_id: p_gQeCuqLFbJY887X7LuDmRP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JtoiuDAY7QeSdGJgYKMuma
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TFxhfTxtVN7QJoudglaCMc
          claim_id: c_r7Tg9Urdz5w-bWwMP2P1Vf
          source_id: s_XfMcp6rVAnSodEhfGiK8n_
          stance: supports
          locator: CBDB：兄弟 王夢弼（126784）之父／母 王世忠
          quotation: null
          interpretation_note: 由兄弟关系推断：王夢羆 与 王夢弼 为同胞（CBDB 记「兄」），王夢弼 之父／母即 王夢羆 之父／母。
          source:
            id: s_XfMcp6rVAnSodEhfGiK8n_
            source_type: api_record
            title: 中国历代人物传记资料库：王夢羆（CBDB 297286）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297286&o=json
            external_identifier: CBDB:297286
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gQeCuqLFbJY887X7LuDmRP
        status: active
        display_name: 王世忠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_jHsdaLJ7iRrG18TnbetcQB
        subject_person_id: p_BxBsFV6nqQmQf8oa142DSX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_JtoiuDAY7QeSdGJgYKMuma
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-TPGhzlkm4T4iuwpZVMROL
          claim_id: c_jHsdaLJ7iRrG18TnbetcQB
          source_id: s_XfMcp6rVAnSodEhfGiK8n_
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126784 王夢弼）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_XfMcp6rVAnSodEhfGiK8n_
            source_type: api_record
            title: 中国历代人物传记资料库：王夢羆（CBDB 297286）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297286&o=json
            external_identifier: CBDB:297286
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BxBsFV6nqQmQf8oa142DSX
        status: active
        display_name: 王夢弼
        merged_into_person_id: null
---

# 王夢羆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王夢羆，明人物。嘉靖十四年進士，籍贯代州。（中国历代人物传记资料库 CBDB 297286） | accepted |
| name.primary | 王夢羆 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gQeCuqLFbJY887X7LuDmRP | 王世忠 | accepted |
| other | p_BxBsFV6nqQmQf8oa142DSX | 王夢弼 | accepted |

## 外部来源

- [中国历代人物传记资料库：王夢羆（CBDB 297286）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297286&o=json)
