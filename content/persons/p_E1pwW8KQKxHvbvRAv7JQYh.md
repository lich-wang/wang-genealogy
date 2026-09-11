---
schema: wang-person/v1
id: p_E1pwW8KQKxHvbvRAv7JQYh
status: active
merged_into: null
display_name: 王愚軒
cbdb_id: 100196
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DwqbCW9ua7cFz5yLJzBs8e
        subject_person_id: p_E1pwW8KQKxHvbvRAv7JQYh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王愚軒，清人物。中国历代人物传记资料库（CBDB）以人物编号 100196 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_0rVCY9Hzcd8nYpGir8fy7O
          claim_id: c_DwqbCW9ua7cFz5yLJzBs8e
          source_id: s_bWFBP6R3grMtocepzEFJrp
          stance: supports
          locator: CBDB:100196
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_bWFBP6R3grMtocepzEFJrp
            source_type: api_record
            title: 中国历代人物传记资料库：王愚軒（CBDB 100196）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100196&o=json
            external_identifier: CBDB:100196
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:49.564Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_hfJSJoGGiUYqmLqzXNeEMu
        subject_person_id: p_E1pwW8KQKxHvbvRAv7JQYh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王愚軒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_UkJDgFsK8fEy5xFS5Ak6N3
          claim_id: c_hfJSJoGGiUYqmLqzXNeEMu
          source_id: s_bWFBP6R3grMtocepzEFJrp
          stance: supports
          locator: CBDB:100196
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1601-1700）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_bWFBP6R3grMtocepzEFJrp
            source_type: api_record
            title: 中国历代人物传记资料库：王愚軒（CBDB 100196）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100196&o=json
            external_identifier: CBDB:100196
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:49.564Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_5QrTLxwnRmKYCeXRdV-Q9p
        subject_person_id: p_E1pwW8KQKxHvbvRAv7JQYh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BBvMtaNAarHqeLAVUek5Lr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8y0T-uJ6zivfI4s6VAx0CR
          claim_id: c_5QrTLxwnRmKYCeXRdV-Q9p
          source_id: s_cdJyZ2MeGD4L13HBhJHepW
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1865, HuWenKai #252：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_cdJyZ2MeGD4L13HBhJHepW
            source_type: api_record
            title: 中国历代人物传记资料库：王慧增（CBDB 100197）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100197&o=json
            external_identifier: CBDB:100197
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.316Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BBvMtaNAarHqeLAVUek5Lr
        status: active
        display_name: 王慧增
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王愚軒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王愚軒，清人物。中国历代人物传记资料库（CBDB）以人物编号 100196 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王愚軒 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_BBvMtaNAarHqeLAVUek5Lr | 王慧增 | accepted |

## 外部来源

- [中国历代人物传记资料库：王慧增（CBDB 100197）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100197&o=json)
- [中国历代人物传记资料库：王愚軒（CBDB 100196）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100196&o=json)
