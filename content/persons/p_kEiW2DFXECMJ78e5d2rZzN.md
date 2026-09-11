---
schema: wang-person/v1
id: p_kEiW2DFXECMJ78e5d2rZzN
status: active
merged_into: null
display_name: 王萱
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DygbNDqMm2uMh6QWKvhEFG
        subject_person_id: p_kEiW2DFXECMJ78e5d2rZzN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_deBerEVM1s4UtzWQTjzGXT
          claim_id: c_DygbNDqMm2uMh6QWKvhEFG
          source_id: s_5BmvnxiEn5qr1cdrrV9A1v
          stance: supports
          locator: CBDB:313487
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（313487）
          source: &a1
            id: s_5BmvnxiEn5qr1cdrrV9A1v
            source_type: api_record
            title: 中国历代人物传记资料库：王萱（CBDB 313487）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313487&o=json
            external_identifier: CBDB:313487
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.909Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GdbzC9PGTivfWPKZCKGQKa
        subject_person_id: p_kEiW2DFXECMJ78e5d2rZzN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萱，明人物。嘉靖二十九年進士。（中国历代人物传记资料库 CBDB 313487）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9ujshYKmegNNmFHVcDuEoh
          claim_id: c_GdbzC9PGTivfWPKZCKGQKa
          source_id: s_5BmvnxiEn5qr1cdrrV9A1v
          stance: supports
          locator: CBDB:313487
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_yfgz3EJK-tfSY0hz89QkN_
        subject_person_id: p_kEiW2DFXECMJ78e5d2rZzN
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_KhmS5kyzCCCFTjqjDJhXt2
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NI0dsMh_8r6gTeOBQVzMSu
          claim_id: c_yfgz3EJK-tfSY0hz89QkN_
          source_id: s_5BmvnxiEn5qr1cdrrV9A1v
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第八十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_KhmS5kyzCCCFTjqjDJhXt2
        status: active
        display_name: 王用康
        merged_into_person_id: null
  other: []
---

# 王萱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王萱 | accepted |
| bio.summary | 王萱，明人物。嘉靖二十九年進士。（中国历代人物传记资料库 CBDB 313487） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_KhmS5kyzCCCFTjqjDJhXt2 | 王用康 | accepted |

## 外部来源

- [中国历代人物传记资料库：王萱（CBDB 313487）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313487&o=json)
