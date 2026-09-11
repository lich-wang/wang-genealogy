---
schema: wang-person/v1
id: p_5p9v79QfKWB44J7p15t9Pi
status: active
merged_into: null
display_name: 王惠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Hx5b682DJaDkw9Ey8FD9K7
        subject_person_id: p_5p9v79QfKWB44J7p15t9Pi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2HaeENYcKRqvVcMq4X5vG7
          claim_id: c_Hx5b682DJaDkw9Ey8FD9K7
          source_id: s_HgXvLSw7i2CSHf88M1TqhG
          stance: supports
          locator: CBDB:317277
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（317277）
          source: &a1
            id: s_HgXvLSw7i2CSHf88M1TqhG
            source_type: api_record
            title: 中国历代人物传记资料库：王惠（CBDB 317277）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317277&o=json
            external_identifier: CBDB:317277
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.971Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Bz6owBMh16sbYkVH32W17n
        subject_person_id: p_5p9v79QfKWB44J7p15t9Pi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惠，明人物。嘉靖三十二年進士。（中国历代人物传记资料库 CBDB 317277）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ep0pTMFJ-vRztEYzNV18Nx
          claim_id: c_Bz6owBMh16sbYkVH32W17n
          source_id: s_HgXvLSw7i2CSHf88M1TqhG
          stance: supports
          locator: CBDB:317277
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
        id: c_JMw2K2ycbZoRG5gRFeuq06
        subject_person_id: p_5p9v79QfKWB44J7p15t9Pi
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Lurfy4QMHhzD8PMMpjSfCa
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hOMBfO-Ng7jVZdPdSltnUj
          claim_id: c_JMw2K2ycbZoRG5gRFeuq06
          source_id: s_HgXvLSw7i2CSHf88M1TqhG
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第一百二十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Lurfy4QMHhzD8PMMpjSfCa
        status: active
        display_name: 王宗會
        merged_into_person_id: null
  other: []
---

# 王惠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惠 | accepted |
| bio.summary | 王惠，明人物。嘉靖三十二年進士。（中国历代人物传记资料库 CBDB 317277） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_Lurfy4QMHhzD8PMMpjSfCa | 王宗會 | accepted |

## 外部来源

- [中国历代人物传记资料库：王惠（CBDB 317277）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317277&o=json)
