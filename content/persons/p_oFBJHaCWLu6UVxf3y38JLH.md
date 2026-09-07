---
schema: wang-person/v1
id: p_oFBJHaCWLu6UVxf3y38JLH
status: active
merged_into: null
display_name: 徐安吉
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AzwVy5RJrV3UmyBvJfVZD6
        subject_person_id: p_oFBJHaCWLu6UVxf3y38JLH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 徐安吉，清人物。中国历代人物传记资料库（CBDB）以人物编号 69770 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8mjMtGRHBNPck3ka35evab
          claim_id: c_AzwVy5RJrV3UmyBvJfVZD6
          source_id: s_gvNGjX5LdHBtLNU3jg9H5n
          stance: supports
          locator: CBDB:69770
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_gvNGjX5LdHBtLNU3jg9H5n
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：徐安吉（69770）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69770&o=json
            external_identifier: CBDB:69770
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:21.975Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_dgPU9eq68nwa57zp7jaHWc
        subject_person_id: p_oFBJHaCWLu6UVxf3y38JLH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 徐安吉
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_gdAKFnZaakDGR2ShdEDFqc
          claim_id: c_dgPU9eq68nwa57zp7jaHWc
          source_id: s_wiTzWZoDyPv5i7aun82ECg
          stance: supports
          locator: Q45680985
          quotation: null
          interpretation_note: null
          source:
            id: s_wiTzWZoDyPv5i7aun82ECg
            source_type: api_record
            title: 维基数据：徐安吉（Q45680985）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45680985
            external_identifier: Q45680985
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:21.813Z
            metadata_json: null
        - id: cs_rmhVJmAZpH9d6GRBDNL8d2
          claim_id: c_dgPU9eq68nwa57zp7jaHWc
          source_id: s_gvNGjX5LdHBtLNU3jg9H5n
          stance: supports
          locator: Q45680985
          quotation: null
          interpretation_note: null
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
  descendants: []
  other: []
---

# 徐安吉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 徐安吉，清人物。中国历代人物传记资料库（CBDB）以人物编号 69770 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 徐安吉 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基数据：徐安吉（Q45680985）](https://www.wikidata.org/wiki/Q45680985)
- [CBDB 中国历代人物传记资料库：徐安吉（69770）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69770&o=json)
