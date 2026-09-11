---
schema: wang-person/v1
id: p_uhy43vUK7iZvhpKmoJs64Z
status: active
merged_into: null
display_name: 王學謹
cbdb_id: 324370
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6kXYLNQz21Dp7VQx2v92vd
        subject_person_id: p_uhy43vUK7iZvhpKmoJs64Z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學謹，明人物。中国历代人物传记资料库（CBDB）以人物编号 324370 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_5ZVjfdlDC5XLGvRiNS_dsX
          claim_id: c_6kXYLNQz21Dp7VQx2v92vd
          source_id: s_TZ2M56p1viE7RdW79FM794
          stance: supports
          locator: CBDB:324370
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_TZ2M56p1viE7RdW79FM794
            source_type: api_record
            title: 中国历代人物传记资料库：王學謹（CBDB 324370）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324370&o=json
            external_identifier: CBDB:324370
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_xUFQybpDYC4Zi7YsJoTHW5
        subject_person_id: p_uhy43vUK7iZvhpKmoJs64Z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學謹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_GJN2n5RovhAauTe6VPPKUH
          claim_id: c_xUFQybpDYC4Zi7YsJoTHW5
          source_id: s_TZ2M56p1viE7RdW79FM794
          stance: supports
          locator: CBDB:324370
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3801-3900）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_TZ2M56p1viE7RdW79FM794
            source_type: api_record
            title: 中国历代人物传记资料库：王學謹（CBDB 324370）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324370&o=json
            external_identifier: CBDB:324370
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
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
        id: c_9s5R10TTJ73S8Y-4VElhVq
        subject_person_id: p_uhy43vUK7iZvhpKmoJs64Z
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_me4wZDW82AptuX6cVAdTa3
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YvU2WladA9Abul4d2BJoCS
          claim_id: c_9s5R10TTJ73S8Y-4VElhVq
          source_id: s_7LkcXKMDd9upGCRdBAoXCz
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第三甲第四十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7LkcXKMDd9upGCRdBAoXCz
            source_type: api_record
            title: 中国历代人物传记资料库：王育仁（CBDB 204809）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204809&o=json
            external_identifier: CBDB:204809
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.839Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_me4wZDW82AptuX6cVAdTa3
        status: active
        display_name: 王育仁
        merged_into_person_id: null
  other: []
---

# 王學謹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王學謹，明人物。中国历代人物传记资料库（CBDB）以人物编号 324370 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王學謹 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_me4wZDW82AptuX6cVAdTa3 | 王育仁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王學謹（CBDB 324370）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324370&o=json)
- [中国历代人物传记资料库：王育仁（CBDB 204809）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204809&o=json)
