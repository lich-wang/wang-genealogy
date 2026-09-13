---
schema: wang-person/v1
id: p_y6k5bbhVEm5GUb8nPt89ho
status: active
merged_into: null
display_name: 王同孝
cbdb_id: 282498
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DR42CePje2UQDjDWexjvq6
        subject_person_id: p_y6k5bbhVEm5GUb8nPt89ho
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同孝，明人物。正德十二年進士。（中国历代人物传记资料库 CBDB 282498）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_vus2YtLIXJtXt4YluAtazx
          claim_id: c_DR42CePje2UQDjDWexjvq6
          source_id: s_qUT36bn9vBojpTHjsShQv6
          stance: supports
          locator: CBDB:282498
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_qUT36bn9vBojpTHjsShQv6
            source_type: api_record
            title: 中国历代人物传记资料库：王同孝（CBDB 282498）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282498&o=json
            external_identifier: CBDB:282498
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_2JCbQ71BEYeWHhYgMzs95d
        subject_person_id: p_y6k5bbhVEm5GUb8nPt89ho
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同孝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ab8LxXYT7Hc1i8VeiZuCvX
          claim_id: c_2JCbQ71BEYeWHhYgMzs95d
          source_id: s_qUT36bn9vBojpTHjsShQv6
          stance: supports
          locator: CBDB:282498
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3301-3400）｜历史性依据：CBDB 朝代 = 明
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
        id: c_npQ5fPKhsEY49JShmR5iI9
        subject_person_id: p_y6k5bbhVEm5GUb8nPt89ho
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_CvexZGJpSfjjALu2joPK1N
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kTHQr5KlKpOd70dsFCiw8k
          claim_id: c_npQ5fPKhsEY49JShmR5iI9
          source_id: s_Yy8BuZ9UTECH2SA99gjmDH
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第一百八十名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Yy8BuZ9UTECH2SA99gjmDH
            source_type: api_record
            title: 中国历代人物传记资料库：王瑄（CBDB 126752）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126752&o=json
            external_identifier: CBDB:126752
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.176Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CvexZGJpSfjjALu2joPK1N
        status: active
        display_name: 王瑄
        merged_into_person_id: null
  other: []
---

# 王同孝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王同孝，明人物。正德十二年進士。（中国历代人物传记资料库 CBDB 282498） | accepted |
| name.primary | 王同孝 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_CvexZGJpSfjjALu2joPK1N | 王瑄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王同孝（CBDB 282498）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282498&o=json)
- [中国历代人物传记资料库：王瑄（CBDB 126752）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126752&o=json)
