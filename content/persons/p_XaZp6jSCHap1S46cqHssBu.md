---
schema: wang-person/v1
id: p_XaZp6jSCHap1S46cqHssBu
status: active
merged_into: null
display_name: 王柱
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_o9UNKdY8wjxm2JAkBBN5sJ
        subject_person_id: p_XaZp6jSCHap1S46cqHssBu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王柱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kmLzTt3AaDLnuaMQqbo7K9
          claim_id: c_o9UNKdY8wjxm2JAkBBN5sJ
          source_id: s_cCyFGA3A4Xq1X6gSDV643H
          stance: supports
          locator: CBDB:150201
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（150201）
          source: &a1
            id: s_cCyFGA3A4Xq1X6gSDV643H
            source_type: api_record
            title: 中国历代人物传记资料库：王柱（CBDB 150201）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150201&o=json
            external_identifier: CBDB:150201
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.811Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EvPUdVwyHeiN9m8MQ6haUw
        subject_person_id: p_XaZp6jSCHap1S46cqHssBu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王柱，唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 150201）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6s4JN7QoXZCaa8SHmWZRbS
          claim_id: c_EvPUdVwyHeiN9m8MQ6haUw
          source_id: s_cCyFGA3A4Xq1X6gSDV643H
          stance: supports
          locator: CBDB:150201
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_8QVO-j6W2ERkQHc-a-VbAQ
        subject_person_id: p_XaZp6jSCHap1S46cqHssBu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8LDhVhHS14LNBHSdAAFrN5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zBIRIIUZ1ZbZkq7IPdrrPx
          claim_id: c_8QVO-j6W2ERkQHc-a-VbAQ
          source_id: s_HR71AH8auK69CJZ4RX61Gz
          stance: supports
          locator: 唐代墓誌匯編:二卷，Shengli 48：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HR71AH8auK69CJZ4RX61Gz
            source_type: api_record
            title: 中国历代人物传记资料库：王建（CBDB 140076）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140076&o=json
            external_identifier: CBDB:140076
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.467Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8LDhVhHS14LNBHSdAAFrN5
        status: active
        display_name: 王建
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王柱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王柱 | accepted |
| bio.summary | 王柱，唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 150201） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_8LDhVhHS14LNBHSdAAFrN5 | 王建 | accepted |

## 外部来源

- [中国历代人物传记资料库：王建（CBDB 140076）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140076&o=json)
- [中国历代人物传记资料库：王柱（CBDB 150201）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150201&o=json)
