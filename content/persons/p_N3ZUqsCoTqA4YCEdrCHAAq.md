---
schema: wang-person/v1
id: p_N3ZUqsCoTqA4YCEdrCHAAq
status: active
merged_into: null
display_name: 王𦒅
cbdb_id: 212649
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yN8skUEnTtdMtujfuJqyMA
        subject_person_id: p_N3ZUqsCoTqA4YCEdrCHAAq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王𦒅，明人物。中国历代人物传记资料库（CBDB）以人物编号 212649 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_I90Go9P1DKyZ7kAI8D0gFE
          claim_id: c_yN8skUEnTtdMtujfuJqyMA
          source_id: s_62uxdGAMc2FUPmtNtZu9fP
          stance: supports
          locator: CBDB:212649
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_62uxdGAMc2FUPmtNtZu9fP
            source_type: api_record
            title: 中国历代人物传记资料库：王𦒅（CBDB 212649）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212649&o=json
            external_identifier: CBDB:212649
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_pH9CtG3HRqSj9DHmxf8ZXJ
        subject_person_id: p_N3ZUqsCoTqA4YCEdrCHAAq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王𦒅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_9i4k2y1SYFnP2mw257m7Gz
          claim_id: c_pH9CtG3HRqSj9DHmxf8ZXJ
          source_id: s_62uxdGAMc2FUPmtNtZu9fP
          stance: supports
          locator: CBDB:212649
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2401-2500）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_62uxdGAMc2FUPmtNtZu9fP
            source_type: api_record
            title: 中国历代人物传记资料库：王𦒅（CBDB 212649）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212649&o=json
            external_identifier: CBDB:212649
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
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
        id: c_-s_z6wi2qwnEWupCHyV8IB
        subject_person_id: p_N3ZUqsCoTqA4YCEdrCHAAq
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Bhku7LXKrphWSf7fyoW8hh
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i1fx-fQR8cJ47aqwH2MS3_
          claim_id: c_-s_z6wi2qwnEWupCHyV8IB
          source_id: s_7YzPmeQaASL2r7rYU3xfW1
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第二甲第三十一名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7YzPmeQaASL2r7rYU3xfW1
            source_type: api_record
            title: 中国历代人物传记资料库：王家棟（CBDB 206050）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206050&o=json
            external_identifier: CBDB:206050
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.881Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Bhku7LXKrphWSf7fyoW8hh
        status: active
        display_name: 王家棟
        merged_into_person_id: null
  other: []
---

# 王𦒅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王𦒅，明人物。中国历代人物传记资料库（CBDB）以人物编号 212649 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王𦒅 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_Bhku7LXKrphWSf7fyoW8hh | 王家棟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王家棟（CBDB 206050）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206050&o=json)
- [中国历代人物传记资料库：王𦒅（CBDB 212649）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212649&o=json)
