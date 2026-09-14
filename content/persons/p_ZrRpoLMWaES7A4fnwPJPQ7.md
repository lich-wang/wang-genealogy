---
schema: wang-person/v1
id: p_ZrRpoLMWaES7A4fnwPJPQ7
status: active
merged_into: null
display_name: 王一孜
cbdb_id: 256439
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_F6ChuZq7ATFn4F14jSybwj
        subject_person_id: p_ZrRpoLMWaES7A4fnwPJPQ7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一孜，明人物。成化十七年進士，籍贯內江，入仕監生。（中国历代人物传记资料库 CBDB 256439）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_bY9mgBVt0OV0hFZXA6xI6g
          claim_id: c_F6ChuZq7ATFn4F14jSybwj
          source_id: s_JKir2GGmED7EkZgc2jCYu9
          stance: supports
          locator: CBDB:256439
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_JKir2GGmED7EkZgc2jCYu9
            source_type: api_record
            title: 中国历代人物传记资料库：王一孜（CBDB 256439）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256439&o=json
            external_identifier: CBDB:256439
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_xkAe9VDsNCinLd7siSNw4B
        subject_person_id: p_ZrRpoLMWaES7A4fnwPJPQ7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一孜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_cZWLfqkNVEyoEf7FyTpB4p
          claim_id: c_xkAe9VDsNCinLd7siSNw4B
          source_id: s_JKir2GGmED7EkZgc2jCYu9
          stance: supports
          locator: CBDB:256439
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3001-3100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_077pAon7tvqZHlvpM4Welz
        subject_person_id: p_JX4wDZH7pMF8Nb6HNMpXbw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZrRpoLMWaES7A4fnwPJPQ7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f3tMLoa5Wp70iykyQN4Boh
          claim_id: c_077pAon7tvqZHlvpM4Welz
          source_id: s_1H4truy43OKAcAG3HmWKg7
          stance: supports
          locator: CBDB：兄弟 王一言（200332）之父／母 王守約
          quotation: null
          interpretation_note: 由兄弟关系推断：王一孜 与 王一言 为同胞（CBDB 记「弟」），王一言 之父／母即 王一孜 之父／母。
          source:
            id: s_1H4truy43OKAcAG3HmWKg7
            source_type: api_record
            title: 中国历代人物传记资料库：王一孜（CBDB 256439）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256439&o=json
            external_identifier: CBDB:256439
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JX4wDZH7pMF8Nb6HNMpXbw
        status: active
        display_name: 王守約
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_0GTmEkQSLRp8qCyMKg_MRB
        subject_person_id: p_ZjPesmadeqK3r3wUy19KCm
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ZrRpoLMWaES7A4fnwPJPQ7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ufsDA2HXUWrumQQJUS7Jlx
          claim_id: c_0GTmEkQSLRp8qCyMKg_MRB
          source_id: s_1H4truy43OKAcAG3HmWKg7
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200332 王一言）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_1H4truy43OKAcAG3HmWKg7
            source_type: api_record
            title: 中国历代人物传记资料库：王一孜（CBDB 256439）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256439&o=json
            external_identifier: CBDB:256439
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZjPesmadeqK3r3wUy19KCm
        status: active
        display_name: 王一言
        merged_into_person_id: null
---

# 王一孜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王一孜，明人物。成化十七年進士，籍贯內江，入仕監生。（中国历代人物传记资料库 CBDB 256439） | accepted |
| name.primary | 王一孜 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_JX4wDZH7pMF8Nb6HNMpXbw | 王守約 | accepted |
| other | p_ZjPesmadeqK3r3wUy19KCm | 王一言 | accepted |

## 外部来源

- [中国历代人物传记资料库：王一孜（CBDB 256439）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256439&o=json)
