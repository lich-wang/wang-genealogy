---
schema: wang-person/v1
id: p_Jh96TMvNqfL8prQuCQkEVx
status: active
merged_into: null
display_name: 王儶
cbdb_id: 297273
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VLdh85bfzJbAYp6L2SgQAg
        subject_person_id: p_Jh96TMvNqfL8prQuCQkEVx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儶，明人物。中国历代人物传记资料库（CBDB）以人物编号 297273 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_lEs7qeUOX80pq73WXrSJz1
          claim_id: c_VLdh85bfzJbAYp6L2SgQAg
          source_id: s_j8FjqX1LzJX42w2vBHXjT3
          stance: supports
          locator: CBDB:297273
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_j8FjqX1LzJX42w2vBHXjT3
            source_type: api_record
            title: 中国历代人物传记资料库：王儶（CBDB 297273）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297273&o=json
            external_identifier: CBDB:297273
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_BJ7Lf1XJQRNWFELhjv699s
        subject_person_id: p_Jh96TMvNqfL8prQuCQkEVx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_eoMVVkePSxiuMNHKkhHXuB
          claim_id: c_BJ7Lf1XJQRNWFELhjv699s
          source_id: s_j8FjqX1LzJX42w2vBHXjT3
          stance: supports
          locator: CBDB:297273
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3501-3600）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_j8FjqX1LzJX42w2vBHXjT3
            source_type: api_record
            title: 中国历代人物传记资料库：王儶（CBDB 297273）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297273&o=json
            external_identifier: CBDB:297273
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
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
        id: c_-69dAfW4NckQ5PhDizrdJU
        subject_person_id: p_Jh96TMvNqfL8prQuCQkEVx
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_BxBsFV6nqQmQf8oa142DSX
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e3YEZlKFGLu4FRlvI8pyI_
          claim_id: c_-69dAfW4NckQ5PhDizrdJU
          source_id: s_vKbHuxPyeqDcM9pzGKeEoA
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第一百一十四名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_vKbHuxPyeqDcM9pzGKeEoA
            source_type: api_record
            title: 中国历代人物传记资料库：王夢弼（CBDB 126784）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126784&o=json
            external_identifier: CBDB:126784
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.202Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BxBsFV6nqQmQf8oa142DSX
        status: active
        display_name: 王夢弼
        merged_into_person_id: null
  other: []
---

# 王儶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王儶，明人物。中国历代人物传记资料库（CBDB）以人物编号 297273 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王儶 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_BxBsFV6nqQmQf8oa142DSX | 王夢弼 | accepted |

## 外部来源

- [中国历代人物传记资料库：王儶（CBDB 297273）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297273&o=json)
- [中国历代人物传记资料库：王夢弼（CBDB 126784）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126784&o=json)
