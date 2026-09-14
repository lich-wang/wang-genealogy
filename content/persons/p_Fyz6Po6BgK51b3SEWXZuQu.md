---
schema: wang-person/v1
id: p_Fyz6Po6BgK51b3SEWXZuQu
status: active
merged_into: null
display_name: 王禎
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6CzyT5oaaX3zMbDfdhqLEJ
        subject_person_id: p_Fyz6Po6BgK51b3SEWXZuQu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2WjKX5KKrBmK9bpdLLvKrD
          claim_id: c_6CzyT5oaaX3zMbDfdhqLEJ
          source_id: s_ZWbhQytwvADx67M5j5fNgp
          stance: supports
          locator: CBDB:222723
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（222723）
          source: &a1
            id: s_ZWbhQytwvADx67M5j5fNgp
            source_type: api_record
            title: 中国历代人物传记资料库：王禎（CBDB 222723）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222723&o=json
            external_identifier: CBDB:222723
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.386Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iudZJiQfBdCNfLeVjfJdv3
        subject_person_id: p_Fyz6Po6BgK51b3SEWXZuQu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禎，明人物。萬曆十一年進士，籍贯開州。（中国历代人物传记资料库 CBDB 222723）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9zlomAL16Vrcr7HbRQXoxh
          claim_id: c_iudZJiQfBdCNfLeVjfJdv3
          source_id: s_ZWbhQytwvADx67M5j5fNgp
          stance: supports
          locator: CBDB:222723
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_umtB3lNvrIM1SiIhV64KnX
        subject_person_id: p_yE8jyFvK41t2tC3V3Q5knu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Fyz6Po6BgK51b3SEWXZuQu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i4x_OuDFJ7T9d-o2TW8QZP
          claim_id: c_umtB3lNvrIM1SiIhV64KnX
          source_id: s_jkb3PElUj7-_Ttdf4jmlEG
          stance: supports
          locator: CBDB：兄弟 王祺（206753）之父／母 王曰銓
          quotation: null
          interpretation_note: 由兄弟关系推断：王禎 与 王祺 为同胞（CBDB 记「兄」），王祺 之父／母即 王禎 之父／母。
          source:
            id: s_jkb3PElUj7-_Ttdf4jmlEG
            source_type: api_record
            title: 中国历代人物传记资料库：王禎（CBDB 222723）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222723&o=json
            external_identifier: CBDB:222723
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yE8jyFvK41t2tC3V3Q5knu
        status: active
        display_name: 王曰銓
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_8t_VwCLZuD8chNxrLBwyx-
        subject_person_id: p_Fyz6Po6BgK51b3SEWXZuQu
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dS2fybT134JWfvQgxwSUXh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EEyzoR8xZVgn67_I1-PGOR
          claim_id: c_8t_VwCLZuD8chNxrLBwyx-
          source_id: s_jkb3PElUj7-_Ttdf4jmlEG
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206753 王祺）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_jkb3PElUj7-_Ttdf4jmlEG
            source_type: api_record
            title: 中国历代人物传记资料库：王禎（CBDB 222723）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222723&o=json
            external_identifier: CBDB:222723
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dS2fybT134JWfvQgxwSUXh
        status: active
        display_name: 王祺
        merged_into_person_id: null
---

# 王禎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王禎 | accepted |
| bio.summary | 王禎，明人物。萬曆十一年進士，籍贯開州。（中国历代人物传记资料库 CBDB 222723） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_yE8jyFvK41t2tC3V3Q5knu | 王曰銓 | accepted |
| other | p_dS2fybT134JWfvQgxwSUXh | 王祺 | accepted |

## 外部来源

- [中国历代人物传记资料库：王禎（CBDB 222723）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222723&o=json)
