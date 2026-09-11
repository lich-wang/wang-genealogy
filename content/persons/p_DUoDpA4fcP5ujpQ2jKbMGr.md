---
schema: wang-person/v1
id: p_DUoDpA4fcP5ujpQ2jKbMGr
status: active
merged_into: null
display_name: 王子興
cbdb_id: 525127
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Y4dy2yEQbs2CgzH7upECqW
        subject_person_id: p_DUoDpA4fcP5ujpQ2jKbMGr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子興，明人物。中国历代人物传记资料库（CBDB）以人物编号 525127 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_nNcO_C1PpVBNdI84iBocs3
          claim_id: c_Y4dy2yEQbs2CgzH7upECqW
          source_id: s_4M36N5GJzHpVMTzWkY6bxo
          stance: supports
          locator: CBDB:525127
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_4M36N5GJzHpVMTzWkY6bxo
            source_type: api_record
            title: 中国历代人物传记资料库：王子興（CBDB 525127）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=525127&o=json
            external_identifier: CBDB:525127
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_MzNuUjq6DQKoPPjs9QVLwd
        subject_person_id: p_DUoDpA4fcP5ujpQ2jKbMGr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子興
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_PikJ1fgRs14LfWB3RschXB
          claim_id: c_MzNuUjq6DQKoPPjs9QVLwd
          source_id: s_4M36N5GJzHpVMTzWkY6bxo
          stance: supports
          locator: CBDB:525127
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7001-7100）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_4M36N5GJzHpVMTzWkY6bxo
            source_type: api_record
            title: 中国历代人物传记资料库：王子興（CBDB 525127）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=525127&o=json
            external_identifier: CBDB:525127
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
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
        id: c_efj3oJhCItnc5S9mwI0YRG
        subject_person_id: p_DUoDpA4fcP5ujpQ2jKbMGr
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_PgGP8n81XBb5kcs7D54q73
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-KJ9rVVCAK9qtmjUhW4x8J
          claim_id: c_efj3oJhCItnc5S9mwI0YRG
          source_id: s_in1hTPavZdVJQK4k8xNZm1
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），11172：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_in1hTPavZdVJQK4k8xNZm1
            source_type: api_record
            title: 中国历代人物传记资料库：王直（CBDB 34493）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34493&o=json
            external_identifier: CBDB:34493
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.086Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_PgGP8n81XBb5kcs7D54q73
        status: active
        display_name: 王直
        merged_into_person_id: null
  other: []
---

# 王子興

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王子興，明人物。中国历代人物传记资料库（CBDB）以人物编号 525127 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王子興 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_PgGP8n81XBb5kcs7D54q73 | 王直 | accepted |

## 外部来源

- [中国历代人物传记资料库：王直（CBDB 34493）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34493&o=json)
- [中国历代人物传记资料库：王子興（CBDB 525127）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=525127&o=json)
