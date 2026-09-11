---
schema: wang-person/v1
id: p_n5M663iN3MWVejNrJxzDHK
status: active
merged_into: null
display_name: 王芳與
cbdb_id: 69901
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vN4w1wR7CTit1B29SDsHeQ
        subject_person_id: p_n5M663iN3MWVejNrJxzDHK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王芳與，清人物。中国历代人物传记资料库（CBDB）以人物编号 69901 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_lgIXRd7To70mo45wvtcVvR
          claim_id: c_vN4w1wR7CTit1B29SDsHeQ
          source_id: s_mQgQN4e8LNFspAgcsqKvzm
          stance: supports
          locator: CBDB:69901
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_mQgQN4e8LNFspAgcsqKvzm
            source_type: api_record
            title: 中国历代人物传记资料库：王芳與（CBDB 69901）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69901&o=json
            external_identifier: CBDB:69901
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.831Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZEpvMgtG1SKrQbP18dWoKC
        subject_person_id: p_n5M663iN3MWVejNrJxzDHK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王芳與
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_oRVU22GKcz8Cd5CQMVZwn8
          claim_id: c_ZEpvMgtG1SKrQbP18dWoKC
          source_id: s_mQgQN4e8LNFspAgcsqKvzm
          stance: supports
          locator: CBDB:69901
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1501-1600）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_mQgQN4e8LNFspAgcsqKvzm
            source_type: api_record
            title: 中国历代人物传记资料库：王芳與（CBDB 69901）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69901&o=json
            external_identifier: CBDB:69901
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.831Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_yz0meEWpYThqxTI3eTQGf6
        subject_person_id: p_bVVoVovQcGpoRGYgAzFn4N
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_n5M663iN3MWVejNrJxzDHK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WHOavg8kWlBJ9pkzDabayH
          claim_id: c_yz0meEWpYThqxTI3eTQGf6
          source_id: s_mQgQN4e8LNFspAgcsqKvzm
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1216, HuWenKai #234：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_bVVoVovQcGpoRGYgAzFn4N
        status: active
        display_name: 王祺
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_lnbEB8HAXL7MpwQIO9wWAR
        subject_person_id: p_n5M663iN3MWVejNrJxzDHK
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_kvuGHcyDwVB4afdt8W9pnf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mYVXtY_f-AggG3QQ5jsuq5
          claim_id: c_lnbEB8HAXL7MpwQIO9wWAR
          source_id: s_TcO_HXFHBv46Yf62D2MAXR
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1216, HuWenKai #234：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_TcO_HXFHBv46Yf62D2MAXR
            source_type: api_record
            title: 中国历代人物传记资料库：嚴沆（CBDB 76265）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=76265&o=json
            external_identifier: CBDB:76265
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_kvuGHcyDwVB4afdt8W9pnf
        status: active
        display_name: 嚴沆
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王芳與

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王芳與，清人物。中国历代人物传记资料库（CBDB）以人物编号 69901 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王芳與 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_bVVoVovQcGpoRGYgAzFn4N | 王祺 | accepted |
| spouses | p_kvuGHcyDwVB4afdt8W9pnf | 嚴沆 | accepted |

## 外部来源

- [中国历代人物传记资料库：王芳與（CBDB 69901）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69901&o=json)
- [中国历代人物传记资料库：嚴沆（CBDB 76265）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=76265&o=json)
