---
schema: wang-person/v1
id: p_9rXTbYHYhmBAvbpZaHj81G
status: active
merged_into: null
display_name: 王馭
cbdb_id: 274243
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wf9QzzjGeRtsCHLH8rcfoS
        subject_person_id: p_9rXTbYHYhmBAvbpZaHj81G
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王馭，明人物。弘治十八年進士。（中国历代人物传记资料库 CBDB 274243）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_W4QpRmjTB_zTQefvLoed3k
          claim_id: c_wf9QzzjGeRtsCHLH8rcfoS
          source_id: s_Cszb7BxXysAkAmJSJ6Y4bx
          stance: supports
          locator: CBDB:274243
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Cszb7BxXysAkAmJSJ6Y4bx
            source_type: api_record
            title: 中国历代人物传记资料库：王馭（CBDB 274243）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274243&o=json
            external_identifier: CBDB:274243
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_LMpNy7GGQUDMhPS346GtK9
        subject_person_id: p_9rXTbYHYhmBAvbpZaHj81G
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王馭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3eYT9aa2YYpkgAxSxEGLig
          claim_id: c_LMpNy7GGQUDMhPS346GtK9
          source_id: s_Cszb7BxXysAkAmJSJ6Y4bx
          stance: supports
          locator: CBDB:274243
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
          source: *a1
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
        id: c_XNMBpgALXP8_DUGMzFY0Sb
        subject_person_id: p_9rXTbYHYhmBAvbpZaHj81G
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GPJ5PvBXjvhgLRDQbw5wn2
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EuMvqZQayqZqnoBR7c_EfL
          claim_id: c_XNMBpgALXP8_DUGMzFY0Sb
          source_id: s_NLo5mZpLgs4MVDJkKMjgjs
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第五十九名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NLo5mZpLgs4MVDJkKMjgjs
            source_type: api_record
            title: 中国历代人物传记资料库：王栻（CBDB 201553）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201553&o=json
            external_identifier: CBDB:201553
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.685Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GPJ5PvBXjvhgLRDQbw5wn2
        status: active
        display_name: 王栻
        merged_into_person_id: null
  other: []
---

# 王馭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王馭，明人物。弘治十八年進士。（中国历代人物传记资料库 CBDB 274243） | accepted |
| name.primary | 王馭 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_GPJ5PvBXjvhgLRDQbw5wn2 | 王栻 | accepted |

## 外部来源

- [中国历代人物传记资料库：王栻（CBDB 201553）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201553&o=json)
- [中国历代人物传记资料库：王馭（CBDB 274243）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274243&o=json)
