---
schema: wang-person/v1
id: p_5n1We88RE6S2Lk8tXZoKi2
status: active
merged_into: null
display_name: 王觀
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KroC9ESy1As7hn2k7xBbUw
        subject_person_id: p_5n1We88RE6S2Lk8tXZoKi2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王觀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nAMtiuazii7bU4vhZKtA5W
          claim_id: c_KroC9ESy1As7hn2k7xBbUw
          source_id: s_BJy16rWpStJwMFcCtaq5Dj
          stance: supports
          locator: CBDB:26176
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（26176）
          source: &a1
            id: s_BJy16rWpStJwMFcCtaq5Dj
            source_type: api_record
            title: 中国历代人物传记资料库：王觀（CBDB 26176）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26176&o=json
            external_identifier: CBDB:26176
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.928Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ffA5BQV8ykoZ4iokTpYYox
        subject_person_id: p_5n1We88RE6S2Lk8tXZoKi2
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1448年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w12y1yfAMHry1KKTCeNsmA
          claim_id: c_ffA5BQV8ykoZ4iokTpYYox
          source_id: s_BJy16rWpStJwMFcCtaq5Dj
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_293Jra8gTTTw8LgfH3JrgW
        subject_person_id: p_5n1We88RE6S2Lk8tXZoKi2
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1521年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n85nkwsp2wPZPF2Jb7aZAA
          claim_id: c_293Jra8gTTTw8LgfH3JrgW
          source_id: s_BJy16rWpStJwMFcCtaq5Dj
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PTisC4XC41FwYMqLv2J2o8
        subject_person_id: p_5n1We88RE6S2Lk8tXZoKi2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王觀（1448年—1521年），明人物。籍贯長洲，身份为行醫。（中国历代人物传记资料库 CBDB 26176）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5JnwKmkiWJJiv7fn1Y6rDQ
          claim_id: c_PTisC4XC41FwYMqLv2J2o8
          source_id: s_BJy16rWpStJwMFcCtaq5Dj
          stance: supports
          locator: CBDB:26176
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_e62Gp4mkJ8vCZ0ov9K2LAe
        subject_person_id: p_xhFz35WotcAomJmq7S8F1y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5n1We88RE6S2Lk8tXZoKi2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Qf2mB1SebA0lp_Q83rKuY2
          claim_id: c_e62Gp4mkJ8vCZ0ov9K2LAe
          source_id: s_BJy16rWpStJwMFcCtaq5Dj
          stance: supports
          locator: CBDB 双向互证（父 王時勉 ⇄ 子 王觀）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_xhFz35WotcAomJmq7S8F1y
        status: active
        display_name: 王時勉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王觀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王觀 | accepted |
| birth.date | 1448年 | accepted |
| death.date | 1521年 | accepted |
| bio.summary | 王觀（1448年—1521年），明人物。籍贯長洲，身份为行醫。（中国历代人物传记资料库 CBDB 26176） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xhFz35WotcAomJmq7S8F1y | 王時勉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王觀（CBDB 26176）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26176&o=json)
