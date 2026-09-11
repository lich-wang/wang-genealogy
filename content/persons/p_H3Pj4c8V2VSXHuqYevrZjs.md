---
schema: wang-person/v1
id: p_H3Pj4c8V2VSXHuqYevrZjs
status: active
merged_into: null
display_name: 江峰青
revision: 1
cbdb_id: 75494
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PgMTey-DQE7Faibf5ahSGe
        subject_person_id: p_H3Pj4c8V2VSXHuqYevrZjs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 江峰青
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ig0PdAkq58K5zhnJ_Ow97e
          claim_id: c_PgMTey-DQE7Faibf5ahSGe
          source_id: s_dKdyBtktSSjlFkwI7XJdtZ
          stance: supports
          locator: CBDB:75494
          quotation: null
          interpretation_note: CBDB 明确记录的王紉佩配偶
          source: &a1
            id: s_dKdyBtktSSjlFkwI7XJdtZ
            source_type: api_record
            title: 中国历代人物传记资料库：江峰青（CBDB 75494）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=75494&o=json
            external_identifier: CBDB:75494
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_UvfZnXwWUOcQLbOhpHJIfR
        subject_person_id: p_7xKxxcEr3waCRjPGi5Zgjr
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_H3Pj4c8V2VSXHuqYevrZjs
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y3LMfvLhAQt-GpcIMK2MQ2
          claim_id: c_UvfZnXwWUOcQLbOhpHJIfR
          source_id: s_dKdyBtktSSjlFkwI7XJdtZ
          stance: supports
          locator: 明清婦女著作數據庫，4021：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_7xKxxcEr3waCRjPGi5Zgjr
        status: active
        display_name: 王紉佩
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 江峰青

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 江峰青 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_7xKxxcEr3waCRjPGi5Zgjr | 王紉佩 | accepted |

## 外部来源

- [中国历代人物传记资料库：江峰青（CBDB 75494）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=75494&o=json)
