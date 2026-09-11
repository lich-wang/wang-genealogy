---
schema: wang-person/v1
id: p_CpK3WbF33v6JpDHLmG41fn
status: active
merged_into: null
display_name: 王志一
cbdb_id: 261817
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8Z9rQKDx4ahvLASdGcH2C3
        subject_person_id: p_CpK3WbF33v6JpDHLmG41fn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志一，明人物。中国历代人物传记资料库（CBDB）以人物编号 261817 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_7u2y6Ol4QpnKf588vAczGU
          claim_id: c_8Z9rQKDx4ahvLASdGcH2C3
          source_id: s_Gb22MMkveB8NT49ZLePakq
          stance: supports
          locator: CBDB:261817
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Gb22MMkveB8NT49ZLePakq
            source_type: api_record
            title: 中国历代人物传记资料库：王志一（CBDB 261817）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261817&o=json
            external_identifier: CBDB:261817
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Coyo9vD6TGsE7CEuanxhju
        subject_person_id: p_CpK3WbF33v6JpDHLmG41fn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志一
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Tq7sAXEdPvUenV4P3EoZz1
          claim_id: c_Coyo9vD6TGsE7CEuanxhju
          source_id: s_Gb22MMkveB8NT49ZLePakq
          stance: supports
          locator: CBDB:261817
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_Gb22MMkveB8NT49ZLePakq
            source_type: api_record
            title: 中国历代人物传记资料库：王志一（CBDB 261817）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261817&o=json
            external_identifier: CBDB:261817
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
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
        id: c_b_C6FvGPNmXv6STnkneZ6w
        subject_person_id: p_CpK3WbF33v6JpDHLmG41fn
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_38MrYsNYkPoBeMisQP7Sof
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5uyFu41KFABSiFr8ajywwP
          claim_id: c_b_C6FvGPNmXv6STnkneZ6w
          source_id: s_Gb22MMkveB8NT49ZLePakq
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_38MrYsNYkPoBeMisQP7Sof
        status: active
        display_name: 王经
        merged_into_person_id: null
  other: []
---

# 王志一

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王志一，明人物。中国历代人物传记资料库（CBDB）以人物编号 261817 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王志一 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_38MrYsNYkPoBeMisQP7Sof | 王经 | accepted |

## 外部来源

- [中国历代人物传记资料库：王志一（CBDB 261817）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261817&o=json)
