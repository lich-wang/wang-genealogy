---
schema: wang-person/v1
id: p_MoYjGDFKhbFzhuXnAkB1ME
status: active
merged_into: null
display_name: 王廷勳
cbdb_id: 121299
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aRjxDbzB4v2sczgSKQ9Sgj
        subject_person_id: p_MoYjGDFKhbFzhuXnAkB1ME
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷勳，清人物。中国历代人物传记资料库（CBDB）以人物编号 121299 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_xaePGRO7uWSxzflYRZ-yWl
          claim_id: c_aRjxDbzB4v2sczgSKQ9Sgj
          source_id: s_ksAXLhhvDE4wKGqsoBbu83
          stance: supports
          locator: CBDB:121299
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_ksAXLhhvDE4wKGqsoBbu83
            source_type: api_record
            title: 中国历代人物传记资料库：王廷勳（CBDB 121299）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121299&o=json
            external_identifier: CBDB:121299
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_PrvjNmrJ3EEfLnypZLc8eN
        subject_person_id: p_MoYjGDFKhbFzhuXnAkB1ME
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷勳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_TC2EncjNDZeyAyyZBfoDEY
          claim_id: c_PrvjNmrJ3EEfLnypZLc8eN
          source_id: s_ksAXLhhvDE4wKGqsoBbu83
          stance: supports
          locator: CBDB:121299
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1901-2000）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_ksAXLhhvDE4wKGqsoBbu83
            source_type: api_record
            title: 中国历代人物传记资料库：王廷勳（CBDB 121299）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121299&o=json
            external_identifier: CBDB:121299
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_eQk8iPJ2yJx1WyoigArZb8
        subject_person_id: p_MoYjGDFKhbFzhuXnAkB1ME
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AhBpa9iFkm9YgnHkR2PpGU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KoMOykrGJA7w0PmFGRx2eC
          claim_id: c_eQk8iPJ2yJx1WyoigArZb8
          source_id: s_p9UEyAF17q1yNHiDdTXxX5
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #4236, HuWenKai #796：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_p9UEyAF17q1yNHiDdTXxX5
            source_type: api_record
            title: 中国历代人物传记资料库：王庚（CBDB 121312）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121312&o=json
            external_identifier: CBDB:121312
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.912Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AhBpa9iFkm9YgnHkR2PpGU
        status: active
        display_name: 王庚
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王廷勳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王廷勳，清人物。中国历代人物传记资料库（CBDB）以人物编号 121299 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王廷勳 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_AhBpa9iFkm9YgnHkR2PpGU | 王庚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王庚（CBDB 121312）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121312&o=json)
- [中国历代人物传记资料库：王廷勳（CBDB 121299）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121299&o=json)
