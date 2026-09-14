---
schema: wang-person/v1
id: p_DPLB7GTcBTLEeL51Yhrdfa
status: active
merged_into: null
display_name: 王希稷
cbdb_id: 229381
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ii2jvxW4ftAiJqpRVsHuYK
        subject_person_id: p_DPLB7GTcBTLEeL51Yhrdfa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希稷，明人物。萬曆丙戌科進士進士，籍贯龍溪。（中国历代人物传记资料库 CBDB 229381）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_z-yBcpZMuWU-axZiiTyPdo
          claim_id: c_ii2jvxW4ftAiJqpRVsHuYK
          source_id: s_df61stSWi6LL9F8g8HcCf3
          stance: supports
          locator: CBDB:229381
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_df61stSWi6LL9F8g8HcCf3
            source_type: api_record
            title: 中国历代人物传记资料库：王希稷（CBDB 229381）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229381&o=json
            external_identifier: CBDB:229381
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_QLdoZBJYWZHHXtqde41BPD
        subject_person_id: p_DPLB7GTcBTLEeL51Yhrdfa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希稷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_AgGCAajjvYn2jmgUHfYNja
          claim_id: c_QLdoZBJYWZHHXtqde41BPD
          source_id: s_df61stSWi6LL9F8g8HcCf3
          stance: supports
          locator: CBDB:229381
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2701-2800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_M5LH_t_MDIukgGY1dbFaV1
        subject_person_id: p_fsKE1F67GJMdBZo9s2p2SK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DPLB7GTcBTLEeL51Yhrdfa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wy-tevla-iS0EG4NUMfx7M
          claim_id: c_M5LH_t_MDIukgGY1dbFaV1
          source_id: s_kAubSKIMyjN52k7Iqcz9fL
          stance: supports
          locator: CBDB：兄弟 王希夔（207197）之父／母 王俊民
          quotation: null
          interpretation_note: 由兄弟关系推断：王希稷 与 王希夔 为同胞（CBDB 记「兄」），王希夔 之父／母即 王希稷 之父／母。
          source:
            id: s_kAubSKIMyjN52k7Iqcz9fL
            source_type: api_record
            title: 中国历代人物传记资料库：王希稷（CBDB 229381）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229381&o=json
            external_identifier: CBDB:229381
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fsKE1F67GJMdBZo9s2p2SK
        status: active
        display_name: 王俊民
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_yoOkE4Ha7wZSltbMutNJQC
        subject_person_id: p_DPLB7GTcBTLEeL51Yhrdfa
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_p7XKo89NhBCAZto4tXob1s
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-Smy14QZRV3zBW9XwYZyvy
          claim_id: c_yoOkE4Ha7wZSltbMutNJQC
          source_id: s_kAubSKIMyjN52k7Iqcz9fL
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207197 王希夔）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_kAubSKIMyjN52k7Iqcz9fL
            source_type: api_record
            title: 中国历代人物传记资料库：王希稷（CBDB 229381）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229381&o=json
            external_identifier: CBDB:229381
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_p7XKo89NhBCAZto4tXob1s
        status: active
        display_name: 王希夔
        merged_into_person_id: null
---

# 王希稷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王希稷，明人物。萬曆丙戌科進士進士，籍贯龍溪。（中国历代人物传记资料库 CBDB 229381） | accepted |
| name.primary | 王希稷 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_fsKE1F67GJMdBZo9s2p2SK | 王俊民 | accepted |
| other | p_p7XKo89NhBCAZto4tXob1s | 王希夔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王希稷（CBDB 229381）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229381&o=json)
