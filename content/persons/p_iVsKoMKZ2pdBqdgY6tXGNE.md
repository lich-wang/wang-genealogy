---
schema: wang-person/v1
id: p_iVsKoMKZ2pdBqdgY6tXGNE
status: active
merged_into: null
display_name: 王以曾
cbdb_id: 255289
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ok6FPp4SsMP2pV3R95souE
        subject_person_id: p_iVsKoMKZ2pdBqdgY6tXGNE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以曾，明人物。中国历代人物传记资料库（CBDB）以人物编号 255289 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_OShzjQ0PKrGlKqaCWqe-hb
          claim_id: c_ok6FPp4SsMP2pV3R95souE
          source_id: s_tzdsjUF5NbrKPEN71LM9PU
          stance: supports
          locator: CBDB:255289
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_tzdsjUF5NbrKPEN71LM9PU
            source_type: api_record
            title: 中国历代人物传记资料库：王以曾（CBDB 255289）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255289&o=json
            external_identifier: CBDB:255289
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_qpj6iFt9JZx1t7zZ5Ye6Pb
        subject_person_id: p_iVsKoMKZ2pdBqdgY6tXGNE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_nmJeqEN2xP11VKh35wGDgF
          claim_id: c_qpj6iFt9JZx1t7zZ5Ye6Pb
          source_id: s_tzdsjUF5NbrKPEN71LM9PU
          stance: supports
          locator: CBDB:255289
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3001-3100）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_tzdsjUF5NbrKPEN71LM9PU
            source_type: api_record
            title: 中国历代人物传记资料库：王以曾（CBDB 255289）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255289&o=json
            external_identifier: CBDB:255289
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
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
        id: c_XKQ9wtNVpy2de3TBnrr-hL
        subject_person_id: p_iVsKoMKZ2pdBqdgY6tXGNE
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_aabBxXPLcM6N6VjGC9FrrY
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LE8fjfR6krVH9WjE2o1_VX
          claim_id: c_XKQ9wtNVpy2de3TBnrr-hL
          source_id: s_DxH93UieDPA9NdBmWVHZkb
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第二甲第六十名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DxH93UieDPA9NdBmWVHZkb
            source_type: api_record
            title: 中国历代人物传记资料库：王琳（CBDB 126709）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126709&o=json
            external_identifier: CBDB:126709
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.144Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aabBxXPLcM6N6VjGC9FrrY
        status: active
        display_name: 王琳
        merged_into_person_id: null
  other: []
---

# 王以曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王以曾，明人物。中国历代人物传记资料库（CBDB）以人物编号 255289 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王以曾 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_aabBxXPLcM6N6VjGC9FrrY | 王琳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琳（CBDB 126709）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126709&o=json)
- [中国历代人物传记资料库：王以曾（CBDB 255289）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255289&o=json)
