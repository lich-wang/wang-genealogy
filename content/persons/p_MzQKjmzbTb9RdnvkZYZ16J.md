---
schema: wang-person/v1
id: p_MzQKjmzbTb9RdnvkZYZ16J
status: active
merged_into: null
display_name: 王靖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jtx5t4LBHXeypAb3a3v7H2
        subject_person_id: p_MzQKjmzbTb9RdnvkZYZ16J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王靖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dm9MeYJqqQUYAr57bSPx7f
          claim_id: c_jtx5t4LBHXeypAb3a3v7H2
          source_id: s_1UFc7n996HxEtX6f9ihdbz
          stance: supports
          locator: CBDB:504350
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（504350）
          source: &a1
            id: s_1UFc7n996HxEtX6f9ihdbz
            source_type: api_record
            title: 中国历代人物传记资料库：王靖（CBDB 504350）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=504350&o=json
            external_identifier: CBDB:504350
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.929Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bF8juVQ9MMJK9HjSy2fR32
        subject_person_id: p_MzQKjmzbTb9RdnvkZYZ16J
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王靖，明人物。入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 504350）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XV7ggByUkYdwlQiGik9q42
          claim_id: c_bF8juVQ9MMJK9HjSy2fR32
          source_id: s_1UFc7n996HxEtX6f9ihdbz
          stance: supports
          locator: CBDB:504350
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王靖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王靖 | accepted |
| bio.summary | 王靖，明人物。入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 504350） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王靖（CBDB 504350）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=504350&o=json)
