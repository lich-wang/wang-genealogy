---
schema: wang-person/v1
id: p_yACyJMyRRSG9nPLiR6teqQ
status: active
merged_into: null
display_name: 王吉貞
cbdb_id: 520473
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YZgGbEFC2HsMLsdrpcBTT8
        subject_person_id: p_yACyJMyRRSG9nPLiR6teqQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王吉貞，清人物。中国历代人物传记资料库（CBDB）以人物编号 520473 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_CJkw-S43RFXMfBK7OL9i_d
          claim_id: c_YZgGbEFC2HsMLsdrpcBTT8
          source_id: s_HFRB2jGRdQoy9BLf2W4jtf
          stance: supports
          locator: CBDB:520473
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_HFRB2jGRdQoy9BLf2W4jtf
            source_type: api_record
            title: 中国历代人物传记资料库：王吉貞（CBDB 520473）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=520473&o=json
            external_identifier: CBDB:520473
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:16.852Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_HDVfFFyP4nXVnBDs5fk8zm
        subject_person_id: p_yACyJMyRRSG9nPLiR6teqQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王吉貞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_q3XU5gnGMV6PV6tihHDXuU
          claim_id: c_HDVfFFyP4nXVnBDs5fk8zm
          source_id: s_HFRB2jGRdQoy9BLf2W4jtf
          stance: supports
          locator: CBDB:520473
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6901-7000）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_HFRB2jGRdQoy9BLf2W4jtf
            source_type: api_record
            title: 中国历代人物传记资料库：王吉貞（CBDB 520473）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=520473&o=json
            external_identifier: CBDB:520473
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:16.852Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_LrYIxsFgdr14v6iHMiddR9
        subject_person_id: p_7K8PDevVjMrMSJG9pemnzS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yACyJMyRRSG9nPLiR6teqQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_r90o1HZOBPwstYsYY_mqGp
          claim_id: c_LrYIxsFgdr14v6iHMiddR9
          source_id: s_5BQSt3bFJhYVuZSKmuwJKR
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），5363：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5BQSt3bFJhYVuZSKmuwJKR
            source_type: api_record
            title: 中国历代人物传记资料库：王輔臣（CBDB 62015）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=62015&o=json
            external_identifier: CBDB:62015
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.924Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7K8PDevVjMrMSJG9pemnzS
        status: active
        display_name: 王輔臣
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王吉貞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王吉貞，清人物。中国历代人物传记资料库（CBDB）以人物编号 520473 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王吉貞 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7K8PDevVjMrMSJG9pemnzS | 王輔臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王輔臣（CBDB 62015）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=62015&o=json)
- [中国历代人物传记资料库：王吉貞（CBDB 520473）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=520473&o=json)
