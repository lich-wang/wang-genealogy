---
schema: wang-person/v1
id: p_CPwGMA1QZhWbQyip5boHEM
status: active
merged_into: null
display_name: 王景珍
cbdb_id: 151605
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_L9gAPVZetQKSPe2saBLgHs
        subject_person_id: p_CPwGMA1QZhWbQyip5boHEM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景珍，唐人物。中国历代人物传记资料库（CBDB）以人物编号 151605 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_c5l5RR-hhIV_DUQ_jpOZMw
          claim_id: c_L9gAPVZetQKSPe2saBLgHs
          source_id: s_WYKNANnB9cdXwokUbKmJR6
          stance: supports
          locator: CBDB:151605
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_WYKNANnB9cdXwokUbKmJR6
            source_type: api_record
            title: 中国历代人物传记资料库：王景珍（CBDB 151605）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151605&o=json
            external_identifier: CBDB:151605
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_fi5wjMewM9eZedHaGPJRcs
        subject_person_id: p_CPwGMA1QZhWbQyip5boHEM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景珍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_YnnZ5trHnXpmqRWabGDa4t
          claim_id: c_fi5wjMewM9eZedHaGPJRcs
          source_id: s_WYKNANnB9cdXwokUbKmJR6
          stance: supports
          locator: CBDB:151605
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2101-2200）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_WYKNANnB9cdXwokUbKmJR6
            source_type: api_record
            title: 中国历代人物传记资料库：王景珍（CBDB 151605）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151605&o=json
            external_identifier: CBDB:151605
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_nMYNk8pMXQpCnTqsrHIS-t
        subject_person_id: p_4BFbF2D5CjTVVGnKZRvPjH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CPwGMA1QZhWbQyip5boHEM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__5c4ku_gjbAMm_8-l4V9CU
          claim_id: c_nMYNk8pMXQpCnTqsrHIS-t
          source_id: s_WYKNANnB9cdXwokUbKmJR6
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 131：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_4BFbF2D5CjTVVGnKZRvPjH
        status: active
        display_name: 王脩福
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王景珍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王景珍，唐人物。中国历代人物传记资料库（CBDB）以人物编号 151605 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王景珍 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4BFbF2D5CjTVVGnKZRvPjH | 王脩福 | accepted |

## 外部来源

- [中国历代人物传记资料库：王景珍（CBDB 151605）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151605&o=json)
