---
schema: wang-person/v1
id: p_EMuZoC6o82HbhGFazsFZ4c
status: active
merged_into: null
display_name: 王鍵
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GHMPCMd6WFoYw23au2ZvFw
        subject_person_id: p_EMuZoC6o82HbhGFazsFZ4c
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vJSs7Gsjb5zJ3H4cqZHn2Y
          claim_id: c_GHMPCMd6WFoYw23au2ZvFw
          source_id: s_D5RGsYFn9yF6irZLyQms4B
          stance: supports
          locator: CBDB:292620
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（292620）
          source: &a1
            id: s_D5RGsYFn9yF6irZLyQms4B
            source_type: api_record
            title: 中国历代人物传记资料库：王鍵（CBDB 292620）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292620&o=json
            external_identifier: CBDB:292620
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.411Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VA2rAZqGy9VMK3GxX4v7nH
        subject_person_id: p_EMuZoC6o82HbhGFazsFZ4c
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍵，明人物。嘉靖十一年進士，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 292620）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_APhmehMslog3IxHlRZwuL1
          claim_id: c_VA2rAZqGy9VMK3GxX4v7nH
          source_id: s_D5RGsYFn9yF6irZLyQms4B
          stance: supports
          locator: CBDB:292620
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_qtW-xdSCSGpKz_-3nC3xkg
        subject_person_id: p_MjhM3ee1A3Kj24vm13PmPv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EMuZoC6o82HbhGFazsFZ4c
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__SOHIwEW-86QAUS5m_0ulo
          claim_id: c_qtW-xdSCSGpKz_-3nC3xkg
          source_id: s_3nM2Vc4YFuAOtk82CuQ7mq
          stance: supports
          locator: CBDB：兄弟 王釴（202700）之父／母 王昇
          quotation: null
          interpretation_note: 由兄弟关系推断：王鍵 与 王釴 为同胞（CBDB 记「兄」），王釴 之父／母即 王鍵 之父／母。
          source:
            id: s_3nM2Vc4YFuAOtk82CuQ7mq
            source_type: api_record
            title: 中国历代人物传记资料库：王鍵（CBDB 292620）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292620&o=json
            external_identifier: CBDB:292620
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MjhM3ee1A3Kj24vm13PmPv
        status: active
        display_name: 王昇
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_FJMfqto5eV5aclQyccs4f2
        subject_person_id: p_5PGL3HfhnkubibTnY8wvjU
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_EMuZoC6o82HbhGFazsFZ4c
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0BlHD3-tYo5uex181-cQhC
          claim_id: c_FJMfqto5eV5aclQyccs4f2
          source_id: s_3nM2Vc4YFuAOtk82CuQ7mq
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202700 王釴）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_3nM2Vc4YFuAOtk82CuQ7mq
            source_type: api_record
            title: 中国历代人物传记资料库：王鍵（CBDB 292620）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292620&o=json
            external_identifier: CBDB:292620
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5PGL3HfhnkubibTnY8wvjU
        status: active
        display_name: 王釴
        merged_into_person_id: null
---

# 王鍵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鍵 | accepted |
| bio.summary | 王鍵，明人物。嘉靖十一年進士，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 292620） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MjhM3ee1A3Kj24vm13PmPv | 王昇 | accepted |
| other | p_5PGL3HfhnkubibTnY8wvjU | 王釴 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鍵（CBDB 292620）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292620&o=json)
