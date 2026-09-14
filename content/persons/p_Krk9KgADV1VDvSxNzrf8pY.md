---
schema: wang-person/v1
id: p_Krk9KgADV1VDvSxNzrf8pY
status: active
merged_into: null
display_name: 王化
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_km6mKKDC9mkaMSFXLV8AY7
        subject_person_id: p_Krk9KgADV1VDvSxNzrf8pY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王化
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5iYN6s783N1EZ3yDuoc69d
          claim_id: c_km6mKKDC9mkaMSFXLV8AY7
          source_id: s_qTLSD2vb32SVMaj36UGqPM
          stance: supports
          locator: CBDB:304728
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（304728）
          source: &a1
            id: s_qTLSD2vb32SVMaj36UGqPM
            source_type: api_record
            title: 中国历代人物传记资料库：王化（CBDB 304728）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304728&o=json
            external_identifier: CBDB:304728
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.729Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2JFZS5RYAg8fsenYyM9FHo
        subject_person_id: p_Krk9KgADV1VDvSxNzrf8pY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王化，明人物。嘉靖二十年進士，籍贯宿州。（中国历代人物传记资料库 CBDB 304728）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KAWDzH9I97lHEggoL3Y1hi
          claim_id: c_2JFZS5RYAg8fsenYyM9FHo
          source_id: s_qTLSD2vb32SVMaj36UGqPM
          stance: supports
          locator: CBDB:304728
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_WW8adUK9_297jSwCP02A91
        subject_person_id: p_1vXBcYgVQiVxBH61v91xXQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Krk9KgADV1VDvSxNzrf8pY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZojHxxgU8v_7VYMjzMrrNe
          claim_id: c_WW8adUK9_297jSwCP02A91
          source_id: s_EQQ4gfoJ12jxJUemjraw67
          stance: supports
          locator: CBDB：兄弟 王俸（203437）之父／母 王廉
          quotation: null
          interpretation_note: 由兄弟关系推断：王化 与 王俸 为同胞（CBDB 记「兄」），王俸 之父／母即 王化 之父／母。
          source:
            id: s_EQQ4gfoJ12jxJUemjraw67
            source_type: api_record
            title: 中国历代人物传记资料库：王化（CBDB 304728）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304728&o=json
            external_identifier: CBDB:304728
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1vXBcYgVQiVxBH61v91xXQ
        status: active
        display_name: 王廉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_k4iK0FesvFyMqAfKE6-I2L
        subject_person_id: p_Krk9KgADV1VDvSxNzrf8pY
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Z6vCWYnkMUoH1H52LSJS5y
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vRDNbin0j6YVVfpC-C5G2V
          claim_id: c_k4iK0FesvFyMqAfKE6-I2L
          source_id: s_EQQ4gfoJ12jxJUemjraw67
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203437 王俸）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_EQQ4gfoJ12jxJUemjraw67
            source_type: api_record
            title: 中国历代人物传记资料库：王化（CBDB 304728）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304728&o=json
            external_identifier: CBDB:304728
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Z6vCWYnkMUoH1H52LSJS5y
        status: active
        display_name: 王俸
        merged_into_person_id: null
---

# 王化

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王化 | accepted |
| bio.summary | 王化，明人物。嘉靖二十年進士，籍贯宿州。（中国历代人物传记资料库 CBDB 304728） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1vXBcYgVQiVxBH61v91xXQ | 王廉 | accepted |
| other | p_Z6vCWYnkMUoH1H52LSJS5y | 王俸 | accepted |

## 外部来源

- [中国历代人物传记资料库：王化（CBDB 304728）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304728&o=json)
