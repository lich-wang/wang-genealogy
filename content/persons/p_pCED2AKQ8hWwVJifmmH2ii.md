---
schema: wang-person/v1
id: p_pCED2AKQ8hWwVJifmmH2ii
status: active
merged_into: null
display_name: 王桂
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LEsPhZ8zzXMPiS9yoAsv2Q
        subject_person_id: p_pCED2AKQ8hWwVJifmmH2ii
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Apu776U6aJFgs4ftvDwFxC
          claim_id: c_LEsPhZ8zzXMPiS9yoAsv2Q
          source_id: s_o3yGqn6qmEFaKvooeJB8MC
          stance: supports
          locator: CBDB:312875
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（312875）
          source: &a1
            id: s_o3yGqn6qmEFaKvooeJB8MC
            source_type: api_record
            title: 中国历代人物传记资料库：王桂（CBDB 312875）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312875&o=json
            external_identifier: CBDB:312875
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.888Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9GCMxaykH7TYfPCr38umvy
        subject_person_id: p_pCED2AKQ8hWwVJifmmH2ii
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桂，明人物。嘉靖二十九年進士，籍贯無為州。（中国历代人物传记资料库 CBDB 312875）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8qyOPQ-XoFCg00Rorl6L8G
          claim_id: c_9GCMxaykH7TYfPCr38umvy
          source_id: s_o3yGqn6qmEFaKvooeJB8MC
          stance: supports
          locator: CBDB:312875
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_BwwmgJ_ke6V8cPw-85cJ2L
        subject_person_id: p_6EWBQvVPeb2Qhu8gDXSsQ8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pCED2AKQ8hWwVJifmmH2ii
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NAn0eOM7JIZljdLvuOfoor
          claim_id: c_BwwmgJ_ke6V8cPw-85cJ2L
          source_id: s_a_xbYb_9SfWhjYMUZKpRWl
          stance: supports
          locator: CBDB：兄弟 王極（203985）之父／母 王濟
          quotation: null
          interpretation_note: 由兄弟关系推断：王桂 与 王極 为同胞（CBDB 记「兄」），王極 之父／母即 王桂 之父／母。
          source:
            id: s_a_xbYb_9SfWhjYMUZKpRWl
            source_type: api_record
            title: 中国历代人物传记资料库：王桂（CBDB 312875）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312875&o=json
            external_identifier: CBDB:312875
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6EWBQvVPeb2Qhu8gDXSsQ8
        status: active
        display_name: 王濟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_PjmZnZLxx7TiGZOnzoyMa9
        subject_person_id: p_3m7CP7DGKJ8uiCH5xxVdzo
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_pCED2AKQ8hWwVJifmmH2ii
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_17Kfx8PZZTewlH4PHVg5Q7
          claim_id: c_PjmZnZLxx7TiGZOnzoyMa9
          source_id: s_a_xbYb_9SfWhjYMUZKpRWl
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203985 王極）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_a_xbYb_9SfWhjYMUZKpRWl
            source_type: api_record
            title: 中国历代人物传记资料库：王桂（CBDB 312875）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312875&o=json
            external_identifier: CBDB:312875
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3m7CP7DGKJ8uiCH5xxVdzo
        status: active
        display_name: 王極
        merged_into_person_id: null
---

# 王桂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王桂 | accepted |
| bio.summary | 王桂，明人物。嘉靖二十九年進士，籍贯無為州。（中国历代人物传记资料库 CBDB 312875） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6EWBQvVPeb2Qhu8gDXSsQ8 | 王濟 | accepted |
| other | p_3m7CP7DGKJ8uiCH5xxVdzo | 王極 | accepted |

## 外部来源

- [中国历代人物传记资料库：王桂（CBDB 312875）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312875&o=json)
