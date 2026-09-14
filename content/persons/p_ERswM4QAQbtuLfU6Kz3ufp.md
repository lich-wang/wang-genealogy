---
schema: wang-person/v1
id: p_ERswM4QAQbtuLfU6Kz3ufp
status: active
merged_into: null
display_name: 王用賔
cbdb_id: 293427
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_p6JPPCRXTPtDLjxdw81Vdk
        subject_person_id: p_ERswM4QAQbtuLfU6Kz3ufp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用賔，明人物。嘉靖十一年進士，籍贯甌寧，曾任經歷。（中国历代人物传记资料库 CBDB 293427）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_4Nr5Sv68uOJkv0IrmUnmd2
          claim_id: c_p6JPPCRXTPtDLjxdw81Vdk
          source_id: s_EAqQ3g7NKANaPG4sTUEv1V
          stance: supports
          locator: CBDB:293427
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_EAqQ3g7NKANaPG4sTUEv1V
            source_type: api_record
            title: 中国历代人物传记资料库：王用賔（CBDB 293427）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293427&o=json
            external_identifier: CBDB:293427
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Vzmz9XSaRjDNYEe4kgLFsf
        subject_person_id: p_ERswM4QAQbtuLfU6Kz3ufp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用賔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Agiy7AEU7UeqU6RmvpURuf
          claim_id: c_Vzmz9XSaRjDNYEe4kgLFsf
          source_id: s_EAqQ3g7NKANaPG4sTUEv1V
          stance: supports
          locator: CBDB:293427
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3401-3500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_IzjTloXss3K-4HgUovHnZ9
        subject_person_id: p_5B4suypXr1H38m3G8Gpz1b
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ERswM4QAQbtuLfU6Kz3ufp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__K2cguFxHuSSdKCzrKnNf1
          claim_id: c_IzjTloXss3K-4HgUovHnZ9
          source_id: s_gYVKpPcD4_eBi4hz55doLv
          stance: supports
          locator: CBDB：兄弟 王應詔（202740）之父／母 王貴
          quotation: null
          interpretation_note: 由兄弟关系推断：王用賔 与 王應詔 为同胞（CBDB 记「弟」），王應詔 之父／母即 王用賔 之父／母。
          source:
            id: s_gYVKpPcD4_eBi4hz55doLv
            source_type: api_record
            title: 中国历代人物传记资料库：王用賔（CBDB 293427）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293427&o=json
            external_identifier: CBDB:293427
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5B4suypXr1H38m3G8Gpz1b
        status: active
        display_name: 王貴
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_4jgrb45lQsou7qdZvB2b_J
        subject_person_id: p_ERswM4QAQbtuLfU6Kz3ufp
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_g1ZQp25f7TDHH92Q6ePC8K
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M9jbSlgtJdEu6KvJIctuGl
          claim_id: c_4jgrb45lQsou7qdZvB2b_J
          source_id: s_gYVKpPcD4_eBi4hz55doLv
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202740 王應詔）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_gYVKpPcD4_eBi4hz55doLv
            source_type: api_record
            title: 中国历代人物传记资料库：王用賔（CBDB 293427）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293427&o=json
            external_identifier: CBDB:293427
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_g1ZQp25f7TDHH92Q6ePC8K
        status: active
        display_name: 王應詔
        merged_into_person_id: null
---

# 王用賔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王用賔，明人物。嘉靖十一年進士，籍贯甌寧，曾任經歷。（中国历代人物传记资料库 CBDB 293427） | accepted |
| name.primary | 王用賔 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5B4suypXr1H38m3G8Gpz1b | 王貴 | accepted |
| other | p_g1ZQp25f7TDHH92Q6ePC8K | 王應詔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王用賔（CBDB 293427）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293427&o=json)
