---
schema: wang-person/v1
id: p_oP44rT6Ti6t4n4tQkRQQ4T
status: active
merged_into: null
display_name: 王寅
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mcqzXK316RPZFVHYGSk2fZ
        subject_person_id: p_oP44rT6Ti6t4n4tQkRQQ4T
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ozFSd3zuYuJ1xX3MUGmwG5
          claim_id: c_mcqzXK316RPZFVHYGSk2fZ
          source_id: s_CF1HUULxNHT6dKTD7MUTSy
          stance: supports
          locator: CBDB:327535
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（327535）
          source: &a1
            id: s_CF1HUULxNHT6dKTD7MUTSy
            source_type: api_record
            title: 中国历代人物传记资料库：王寅（CBDB 327535）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327535&o=json
            external_identifier: CBDB:327535
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.249Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ARD7pVnGSL5bsJZGCxPhou
        subject_person_id: p_oP44rT6Ti6t4n4tQkRQQ4T
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寅，明人物。嘉靖四十一年進士，籍贯安邑。（中国历代人物传记资料库 CBDB 327535）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MZP8cUnK6OhwBCCCXdbtyd
          claim_id: c_ARD7pVnGSL5bsJZGCxPhou
          source_id: s_CF1HUULxNHT6dKTD7MUTSy
          stance: supports
          locator: CBDB:327535
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_cDFeKY8hCfOZ7-ixovzKyp
        subject_person_id: p_kmpABikpWftaJACcFD3yJ1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oP44rT6Ti6t4n4tQkRQQ4T
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_msZVYzIX36wcGzFGH2cud9
          claim_id: c_cDFeKY8hCfOZ7-ixovzKyp
          source_id: s_A312e4Bwl1R9_On7x_9P8W
          stance: supports
          locator: CBDB：兄弟 王宇（205042）之父／母 王繼德
          quotation: null
          interpretation_note: 由兄弟关系推断：王寅 与 王宇 为同胞（CBDB 记「兄」），王宇 之父／母即 王寅 之父／母。
          source:
            id: s_A312e4Bwl1R9_On7x_9P8W
            source_type: api_record
            title: 中国历代人物传记资料库：王寅（CBDB 327535）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327535&o=json
            external_identifier: CBDB:327535
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kmpABikpWftaJACcFD3yJ1
        status: active
        display_name: 王繼德
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_PIcj65jH6Hb792npF0vMIG
        subject_person_id: p_DhXJg1QUSd5Fvqo5eHzd45
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oP44rT6Ti6t4n4tQkRQQ4T
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DzNWMOSjURlnYS-lVO5w_H
          claim_id: c_PIcj65jH6Hb792npF0vMIG
          source_id: s_A312e4Bwl1R9_On7x_9P8W
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205042 王宇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_A312e4Bwl1R9_On7x_9P8W
            source_type: api_record
            title: 中国历代人物传记资料库：王寅（CBDB 327535）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327535&o=json
            external_identifier: CBDB:327535
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DhXJg1QUSd5Fvqo5eHzd45
        status: active
        display_name: 王宇
        merged_into_person_id: null
---

# 王寅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寅 | accepted |
| bio.summary | 王寅，明人物。嘉靖四十一年進士，籍贯安邑。（中国历代人物传记资料库 CBDB 327535） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kmpABikpWftaJACcFD3yJ1 | 王繼德 | accepted |
| other | p_DhXJg1QUSd5Fvqo5eHzd45 | 王宇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寅（CBDB 327535）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327535&o=json)
