---
schema: wang-person/v1
id: p_VUWtL4RpgKpesMNxN9rT23
status: active
merged_into: null
display_name: 王舉元
cbdb_id: 1795
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GhPDRRUosvn8G3WQfztbS3
        subject_person_id: p_VUWtL4RpgKpesMNxN9rT23
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舉元，宋人物。中国历代人物传记资料库（CBDB）以人物编号 1795 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs__qRfOawb99xIs0Tgq6gEyj
          claim_id: c_GhPDRRUosvn8G3WQfztbS3
          source_id: s_ZJHgcTr8owf2bLZ3MEytK9
          stance: supports
          locator: CBDB:1795
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ZJHgcTr8owf2bLZ3MEytK9
            source_type: api_record
            title: 中国历代人物传记资料库：王舉元（CBDB 1795）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1795&o=json
            external_identifier: CBDB:1795
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_wWH69QyX9MxVEsVpYY1zpk
        subject_person_id: p_VUWtL4RpgKpesMNxN9rT23
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舉元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_cc4YZ3HgkaqHPFRR7jQq5r
          claim_id: c_wWH69QyX9MxVEsVpYY1zpk
          source_id: s_ZJHgcTr8owf2bLZ3MEytK9
          stance: supports
          locator: CBDB:1795
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 朝代 = 宋
          source:
            id: s_ZJHgcTr8owf2bLZ3MEytK9
            source_type: api_record
            title: 中国历代人物传记资料库：王舉元（CBDB 1795）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1795&o=json
            external_identifier: CBDB:1795
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_OGq-Yfj3S73sD4H2pC0odc
        subject_person_id: p_VUWtL4RpgKpesMNxN9rT23
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8mHMyrFjqZr1nrmVTR3TzK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A9EfnzkH0eZOTOtJhtcEzA
          claim_id: c_OGq-Yfj3S73sD4H2pC0odc
          source_id: s_ZJHgcTr8owf2bLZ3MEytK9
          stance: supports
          locator: 宋人傳記資料索引(電子版)，950：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_8mHMyrFjqZr1nrmVTR3TzK
        status: active
        display_name: 王詔
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王舉元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王舉元，宋人物。中国历代人物传记资料库（CBDB）以人物编号 1795 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王舉元 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_8mHMyrFjqZr1nrmVTR3TzK | 王詔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王舉元（CBDB 1795）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1795&o=json)
