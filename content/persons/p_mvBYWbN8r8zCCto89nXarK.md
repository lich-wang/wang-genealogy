---
schema: wang-person/v1
id: p_mvBYWbN8r8zCCto89nXarK
status: active
merged_into: null
display_name: 王自越
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uhwB74GKKVLq36roTou6eM
        subject_person_id: p_mvBYWbN8r8zCCto89nXarK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王自越
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zETHzSsk9Gzi6a8xP6FNtu
          claim_id: c_uhwB74GKKVLq36roTou6eM
          source_id: s_AeStbK4FamsiUB7mNWro2n
          stance: supports
          locator: CBDB:572062
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（572062）
          source: &a1
            id: s_AeStbK4FamsiUB7mNWro2n
            source_type: api_record
            title: 中国历代人物传记资料库：王自越（CBDB 572062）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=572062&o=json
            external_identifier: CBDB:572062
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.649Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gt73BCR6ibGxRzAP265T4f
        subject_person_id: p_mvBYWbN8r8zCCto89nXarK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王自越，清人物。籍贯會稽。（中国历代人物传记资料库 CBDB 572062）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3mXUVspcJcpwoCq4lovsQb
          claim_id: c_gt73BCR6ibGxRzAP265T4f
          source_id: s_AeStbK4FamsiUB7mNWro2n
          stance: supports
          locator: CBDB:572062
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_7qSxbVk9jesij3m12OImHy
        subject_person_id: p_aTm4JhEeSSom8FhiPPYik7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mvBYWbN8r8zCCto89nXarK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p2UAk65yyxD-lpnEBOKPX5
          claim_id: c_7qSxbVk9jesij3m12OImHy
          source_id: s_VB5Gy_Z9j_5LkIzC0tFHKF
          stance: supports
          locator: CBDB：兄弟 王自超（71587）之父／母 王亹
          quotation: null
          interpretation_note: 由兄弟关系推断：王自越 与 王自超 为同胞（CBDB 记「兄」），王自超 之父／母即 王自越 之父／母。
          source:
            id: s_VB5Gy_Z9j_5LkIzC0tFHKF
            source_type: api_record
            title: 中国历代人物传记资料库：王自越（CBDB 572062）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=572062&o=json
            external_identifier: CBDB:572062
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aTm4JhEeSSom8FhiPPYik7
        status: active
        display_name: 王亹
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_-vfwUOMc07y_c8SolKFzhO
        subject_person_id: p_FJ8kB5ov8PURm7VjHpvGtx
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mvBYWbN8r8zCCto89nXarK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_83Ga2va8PIdfw0DrC_r0AP
          claim_id: c_-vfwUOMc07y_c8SolKFzhO
          source_id: s_VB5Gy_Z9j_5LkIzC0tFHKF
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 71587 王自超）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_VB5Gy_Z9j_5LkIzC0tFHKF
            source_type: api_record
            title: 中国历代人物传记资料库：王自越（CBDB 572062）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=572062&o=json
            external_identifier: CBDB:572062
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FJ8kB5ov8PURm7VjHpvGtx
        status: active
        display_name: 王自超
        merged_into_person_id: null
---

# 王自越

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王自越 | accepted |
| bio.summary | 王自越，清人物。籍贯會稽。（中国历代人物传记资料库 CBDB 572062） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_aTm4JhEeSSom8FhiPPYik7 | 王亹 | accepted |
| other | p_FJ8kB5ov8PURm7VjHpvGtx | 王自超 | accepted |

## 外部来源

- [中国历代人物传记资料库：王自越（CBDB 572062）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=572062&o=json)
