---
schema: wang-person/v1
id: p_cojJSQjAH97J8dPWYrRzuD
status: active
merged_into: null
display_name: 王謳
cbdb_id: 126857
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YjhKt15yvnTfkg85Mg1n2A
        subject_person_id: p_cojJSQjAH97J8dPWYrRzuD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謳，明人物。中国历代人物传记资料库（CBDB）以人物编号 126857 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_GZHlredyOC40Tp8U44XhxH
          claim_id: c_YjhKt15yvnTfkg85Mg1n2A
          source_id: s_RDZFyM3cygHHS97eKCb5ty
          stance: supports
          locator: CBDB:126857
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_RDZFyM3cygHHS97eKCb5ty
            source_type: api_record
            title: 中国历代人物传记资料库：王謳（CBDB 126857）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126857&o=json
            external_identifier: CBDB:126857
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_adG2JE5AXF6auE8KifnWh5
        subject_person_id: p_cojJSQjAH97J8dPWYrRzuD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_dyTDuZaoHQgPysPoKgZUSV
          claim_id: c_adG2JE5AXF6auE8KifnWh5
          source_id: s_RDZFyM3cygHHS97eKCb5ty
          stance: supports
          locator: CBDB:126857
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2001-2100）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_RDZFyM3cygHHS97eKCb5ty
            source_type: api_record
            title: 中国历代人物传记资料库：王謳（CBDB 126857）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126857&o=json
            external_identifier: CBDB:126857
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
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
  ancestors:
    - claim:
        id: c_KVmzuTueXi2VJskjhkc9GV
        subject_person_id: p_NJ9WAXL6f46YpNe1P4B8UN
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_cojJSQjAH97J8dPWYrRzuD
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YJbZRhpi0PObeCkBCxgjrh
          claim_id: c_KVmzuTueXi2VJskjhkc9GV
          source_id: s_hCQKWPBQBT3F44V7AUwPf3
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第二百二十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_hCQKWPBQBT3F44V7AUwPf3
            source_type: api_record
            title: 中国历代人物传记资料库：王信（CBDB 282951）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282951&o=json
            external_identifier: CBDB:282951
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.116Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_NJ9WAXL6f46YpNe1P4B8UN
        status: active
        display_name: 王信
        merged_into_person_id: null
    - claim:
        id: c_OAj47uEKFaMKhuNikWwZ_j
        subject_person_id: p_rjq1AvfQWH6dwCE5DF3Q1z
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_cojJSQjAH97J8dPWYrRzuD
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0S6sMkXluRoWRgvseWyGE0
          claim_id: c_OAj47uEKFaMKhuNikWwZ_j
          source_id: s_5H3KGHjk92s2zZYps4J94t
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第二百二十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5H3KGHjk92s2zZYps4J94t
            source_type: api_record
            title: 中国历代人物传记资料库：王鑑（CBDB 282952）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282952&o=json
            external_identifier: CBDB:282952
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.117Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_rjq1AvfQWH6dwCE5DF3Q1z
        status: active
        display_name: 王鑑
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王謳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王謳，明人物。中国历代人物传记资料库（CBDB）以人物编号 126857 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王謳 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_NJ9WAXL6f46YpNe1P4B8UN | 王信 | accepted |
| ancestors | p_rjq1AvfQWH6dwCE5DF3Q1z | 王鑑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鑑（CBDB 282952）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282952&o=json)
- [中国历代人物传记资料库：王謳（CBDB 126857）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126857&o=json)
- [中国历代人物传记资料库：王信（CBDB 282951）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282951&o=json)
