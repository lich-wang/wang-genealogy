---
schema: wang-person/v1
id: p_KMpUw21MkzdHgcCwnYVS8A
status: active
merged_into: null
display_name: 王志審
cbdb_id: 235160
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pu77G8dFYBZAZhFgk7AtdQ
        subject_person_id: p_KMpUw21MkzdHgcCwnYVS8A
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志審，明人物。籍贯崑山，入仕庠生。（中国历代人物传记资料库 CBDB 235160）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_WqhiPAFhhMowv3knUzV36O
          claim_id: c_pu77G8dFYBZAZhFgk7AtdQ
          source_id: s_ngHQvZavpJSQAMC5gbe5Mf
          stance: supports
          locator: CBDB:235160
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ngHQvZavpJSQAMC5gbe5Mf
            source_type: api_record
            title: 中国历代人物传记资料库：王志審（CBDB 235160）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235160&o=json
            external_identifier: CBDB:235160
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_k5LN7k8sGjCG3zQKp2S1ze
        subject_person_id: p_KMpUw21MkzdHgcCwnYVS8A
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志審
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_JWPCG2292vT3GYk9uMaxE4
          claim_id: c_k5LN7k8sGjCG3zQKp2S1ze
          source_id: s_ngHQvZavpJSQAMC5gbe5Mf
          stance: supports
          locator: CBDB:235160
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2701-2800）｜历史性依据：CBDB 朝代 = 明
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

# 王志審

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王志審，明人物。籍贯崑山，入仕庠生。（中国历代人物传记资料库 CBDB 235160） | accepted |
| name.primary | 王志審 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王志審（CBDB 235160）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235160&o=json)
