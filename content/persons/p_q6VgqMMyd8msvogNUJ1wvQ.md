---
schema: wang-person/v1
id: p_q6VgqMMyd8msvogNUJ1wvQ
status: active
merged_into: null
display_name: 王誥
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_c2NF12iBb11jPmDUQH5tGA
        subject_person_id: p_q6VgqMMyd8msvogNUJ1wvQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王誥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gViH3nXTnGYDe5Aw4oipr8
          claim_id: c_c2NF12iBb11jPmDUQH5tGA
          source_id: s_jS4KYLoWQ3AS13GFfJEp1P
          stance: supports
          locator: CBDB:296396
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（296396）
          source: &a1
            id: s_jS4KYLoWQ3AS13GFfJEp1P
            source_type: api_record
            title: 中国历代人物传记资料库：王誥（CBDB 296396）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296396&o=json
            external_identifier: CBDB:296396
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.521Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MbW8F2rQ5ehbhbHpExEJYv
        subject_person_id: p_q6VgqMMyd8msvogNUJ1wvQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王誥，明人物。嘉靖十四年進士，籍贯南充。（中国历代人物传记资料库 CBDB 296396）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MBziRMSJo-duScRn8TOBJ8
          claim_id: c_MbW8F2rQ5ehbhbHpExEJYv
          source_id: s_jS4KYLoWQ3AS13GFfJEp1P
          stance: supports
          locator: CBDB:296396
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ginagpYY1UR5zQYHmMWo9x
        subject_person_id: p_rw3SZ4WX6NQUFQKsyEHVZ4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_q6VgqMMyd8msvogNUJ1wvQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zPpTCzcguRQVG4PBEdBZ7_
          claim_id: c_ginagpYY1UR5zQYHmMWo9x
          source_id: s__7ZRAgQGVoKgPpP7G1Lq2U
          stance: supports
          locator: CBDB：兄弟 王遵（202897）之父／母 王希德
          quotation: null
          interpretation_note: 由兄弟关系推断：王誥 与 王遵 为同胞（CBDB 记「弟」），王遵 之父／母即 王誥 之父／母。
          source:
            id: s__7ZRAgQGVoKgPpP7G1Lq2U
            source_type: api_record
            title: 中国历代人物传记资料库：王誥（CBDB 296396）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296396&o=json
            external_identifier: CBDB:296396
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rw3SZ4WX6NQUFQKsyEHVZ4
        status: active
        display_name: 王希德
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_pGjLS45k9HlGspUn1WVid1
        subject_person_id: p_2LvZRKXC4bvnUqu11G57yb
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_q6VgqMMyd8msvogNUJ1wvQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3kxUbbgKHHAWaVIX9-0n1Y
          claim_id: c_pGjLS45k9HlGspUn1WVid1
          source_id: s__7ZRAgQGVoKgPpP7G1Lq2U
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202897 王遵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__7ZRAgQGVoKgPpP7G1Lq2U
            source_type: api_record
            title: 中国历代人物传记资料库：王誥（CBDB 296396）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296396&o=json
            external_identifier: CBDB:296396
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2LvZRKXC4bvnUqu11G57yb
        status: active
        display_name: 王遵
        merged_into_person_id: null
---

# 王誥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王誥 | accepted |
| bio.summary | 王誥，明人物。嘉靖十四年進士，籍贯南充。（中国历代人物传记资料库 CBDB 296396） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rw3SZ4WX6NQUFQKsyEHVZ4 | 王希德 | accepted |
| other | p_2LvZRKXC4bvnUqu11G57yb | 王遵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王誥（CBDB 296396）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296396&o=json)
