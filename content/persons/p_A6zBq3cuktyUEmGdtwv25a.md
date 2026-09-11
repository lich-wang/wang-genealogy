---
schema: wang-person/v1
id: p_A6zBq3cuktyUEmGdtwv25a
status: active
merged_into: null
display_name: 王廓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_k8K3e6VNxBFeDthnke75QU
        subject_person_id: p_A6zBq3cuktyUEmGdtwv25a
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QKT43Vc7E64WQoj4J3MDi9
          claim_id: c_k8K3e6VNxBFeDthnke75QU
          source_id: s_2P9UHMFS3rw7QgQQAtjEpj
          stance: supports
          locator: CBDB:100901
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100901）
          source: &a1
            id: s_2P9UHMFS3rw7QgQQAtjEpj
            source_type: api_record
            title: 中国历代人物传记资料库：王廓（CBDB 100901）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100901&o=json
            external_identifier: CBDB:100901
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.557Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xKBSz9KFku8R2CitJNtz8M
        subject_person_id: p_A6zBq3cuktyUEmGdtwv25a
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廓，明人物。籍贯徐州，入仕進士，曾任路經歷。（中国历代人物传记资料库 CBDB 100901）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QnHIaI5-3pOdVTThcMiOOk
          claim_id: c_xKBSz9KFku8R2CitJNtz8M
          source_id: s_2P9UHMFS3rw7QgQQAtjEpj
          stance: supports
          locator: CBDB:100901
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

# 王廓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廓 | accepted |
| bio.summary | 王廓，明人物。籍贯徐州，入仕進士，曾任路經歷。（中国历代人物传记资料库 CBDB 100901） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廓（CBDB 100901）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100901&o=json)
