---
schema: wang-person/v1
id: p_1YJZQvAA5ivX6epXHEyDLD
status: active
merged_into: null
display_name: 王洪嗣
cbdb_id: 119727
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PQ6qJzjELAwvEdxZLZ9uox
        subject_person_id: p_1YJZQvAA5ivX6epXHEyDLD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洪嗣，宋人物。中国历代人物传记资料库（CBDB）以人物编号 119727 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_pAsu8rGfR8Bhpg3W7B1C9H
          claim_id: c_PQ6qJzjELAwvEdxZLZ9uox
          source_id: s_xg1BrM8iRPDqZHiPLeU5pU
          stance: supports
          locator: CBDB:119727
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_xg1BrM8iRPDqZHiPLeU5pU
            source_type: api_record
            title: 中国历代人物传记资料库：王洪嗣（CBDB 119727）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119727&o=json
            external_identifier: CBDB:119727
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.102Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_GtT1hQPb9JrFZoZdgVn6VD
        subject_person_id: p_1YJZQvAA5ivX6epXHEyDLD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洪嗣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_T3qnWphgMawhVQDGVeKy5x
          claim_id: c_GtT1hQPb9JrFZoZdgVn6VD
          source_id: s_xg1BrM8iRPDqZHiPLeU5pU
          stance: supports
          locator: CBDB:119727
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1801-1900）｜历史性依据：CBDB 朝代 = 宋
          source:
            id: s_xg1BrM8iRPDqZHiPLeU5pU
            source_type: api_record
            title: 中国历代人物传记资料库：王洪嗣（CBDB 119727）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119727&o=json
            external_identifier: CBDB:119727
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.102Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_7zJ9B0BLnP9bQdy5-R2kME
        subject_person_id: p_1YJZQvAA5ivX6epXHEyDLD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_v1tDnt3KnoSEawTrZns7wW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T9D3F336jJjlc7HwA3gREx
          claim_id: c_7zJ9B0BLnP9bQdy5-R2kME
          source_id: s_QWqHjxFXrVTzRZtXCeKEs1
          stance: supports
          locator: 宋史：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QWqHjxFXrVTzRZtXCeKEs1
            source_type: api_record
            title: 中国历代人物传记资料库：王榮（CBDB 39112）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39112&o=json
            external_identifier: CBDB:39112
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.595Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_v1tDnt3KnoSEawTrZns7wW
        status: active
        display_name: 王榮
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王洪嗣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王洪嗣，宋人物。中国历代人物传记资料库（CBDB）以人物编号 119727 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王洪嗣 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_v1tDnt3KnoSEawTrZns7wW | 王榮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王洪嗣（CBDB 119727）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119727&o=json)
- [中国历代人物传记资料库：王榮（CBDB 39112）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39112&o=json)
