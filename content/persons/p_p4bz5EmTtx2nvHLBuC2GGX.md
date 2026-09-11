---
schema: wang-person/v1
id: p_p4bz5EmTtx2nvHLBuC2GGX
status: active
merged_into: null
display_name: 王靜甫
cbdb_id: 100022
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kVHwCBe26UJk97juF2moEw
        subject_person_id: p_p4bz5EmTtx2nvHLBuC2GGX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王靜甫，清人物。中国历代人物传记资料库（CBDB）以人物编号 100022 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_0OxMEDiXURPqSktVWsBTvM
          claim_id: c_kVHwCBe26UJk97juF2moEw
          source_id: s_QVisLBX3KdU3giQkoKG35o
          stance: supports
          locator: CBDB:100022
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_QVisLBX3KdU3giQkoKG35o
            source_type: api_record
            title: 中国历代人物传记资料库：王靜甫（CBDB 100022）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100022&o=json
            external_identifier: CBDB:100022
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:49.564Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_LD7c7wyjVroxhyUjQ5S3ko
        subject_person_id: p_p4bz5EmTtx2nvHLBuC2GGX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王靜甫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_X9p2zK4enQ75oK1ykRBntp
          claim_id: c_LD7c7wyjVroxhyUjQ5S3ko
          source_id: s_QVisLBX3KdU3giQkoKG35o
          stance: supports
          locator: CBDB:100022
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1601-1700）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_QVisLBX3KdU3giQkoKG35o
            source_type: api_record
            title: 中国历代人物传记资料库：王靜甫（CBDB 100022）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100022&o=json
            external_identifier: CBDB:100022
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:49.564Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_SlIYT6luTDD5MB1n68DYKe
        subject_person_id: p_p4bz5EmTtx2nvHLBuC2GGX
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_qLJwLTLLK6CbF4ERew8zVQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XA1uvG_2kCud4-uAiCFM6b
          claim_id: c_SlIYT6luTDD5MB1n68DYKe
          source_id: s_y58ZhlWOJBJTfV5tj5lJoW
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1701, HuWenKai #681：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_y58ZhlWOJBJTfV5tj5lJoW
            source_type: api_record
            title: 中国历代人物传记资料库：溫廉貞（CBDB 56747）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56747&o=json
            external_identifier: CBDB:56747
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_qLJwLTLLK6CbF4ERew8zVQ
        status: active
        display_name: 溫廉貞
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王靜甫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王靜甫，清人物。中国历代人物传记资料库（CBDB）以人物编号 100022 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王靜甫 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_qLJwLTLLK6CbF4ERew8zVQ | 溫廉貞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王靜甫（CBDB 100022）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100022&o=json)
- [中国历代人物传记资料库：溫廉貞（CBDB 56747）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56747&o=json)
