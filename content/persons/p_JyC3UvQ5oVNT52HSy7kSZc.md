---
schema: wang-person/v1
id: p_JyC3UvQ5oVNT52HSy7kSZc
status: active
merged_into: null
display_name: 王添勝
cbdb_id: 265667
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2n32S6CmPgkC7e683Vp9PR
        subject_person_id: p_JyC3UvQ5oVNT52HSy7kSZc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王添勝，明人物。中国历代人物传记资料库（CBDB）以人物编号 265667 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_9RUo5HFyQHwdMsK_bafwDe
          claim_id: c_2n32S6CmPgkC7e683Vp9PR
          source_id: s_CLUZigJKSomTUnFJLCaSNG
          stance: supports
          locator: CBDB:265667
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_CLUZigJKSomTUnFJLCaSNG
            source_type: api_record
            title: 中国历代人物传记资料库：王添勝（CBDB 265667）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265667&o=json
            external_identifier: CBDB:265667
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_rUqncF1SHo1Zs3FjkLHK5X
        subject_person_id: p_JyC3UvQ5oVNT52HSy7kSZc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王添勝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_NenRwncVBzTBn34GaxATuY
          claim_id: c_rUqncF1SHo1Zs3FjkLHK5X
          source_id: s_CLUZigJKSomTUnFJLCaSNG
          stance: supports
          locator: CBDB:265667
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_CLUZigJKSomTUnFJLCaSNG
            source_type: api_record
            title: 中国历代人物传记资料库：王添勝（CBDB 265667）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265667&o=json
            external_identifier: CBDB:265667
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
        id: c_d_VPA8qhOxK6JSsWUIf86p
        subject_person_id: p_JyC3UvQ5oVNT52HSy7kSZc
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_EoJk1Y5s39yxBJTaiKbEQe
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gk1KQHgYqD0KYjfV2-EGqc
          claim_id: c_d_VPA8qhOxK6JSsWUIf86p
          source_id: s_c86NwDAvjxnvgHHxfBCn5p
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第九十四名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_c86NwDAvjxnvgHHxfBCn5p
            source_type: api_record
            title: 中国历代人物传记资料库：王昊（CBDB 200990）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200990&o=json
            external_identifier: CBDB:200990
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.649Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_EoJk1Y5s39yxBJTaiKbEQe
        status: active
        display_name: 王昊
        merged_into_person_id: null
  other: []
---

# 王添勝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王添勝，明人物。中国历代人物传记资料库（CBDB）以人物编号 265667 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王添勝 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_EoJk1Y5s39yxBJTaiKbEQe | 王昊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昊（CBDB 200990）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200990&o=json)
- [中国历代人物传记资料库：王添勝（CBDB 265667）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265667&o=json)
