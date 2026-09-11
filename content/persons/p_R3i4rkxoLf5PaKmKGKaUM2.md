---
schema: wang-person/v1
id: p_R3i4rkxoLf5PaKmKGKaUM2
status: active
merged_into: null
display_name: 王賢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_B9hzVFF4QBrMhN2Q6xVCyg
        subject_person_id: p_R3i4rkxoLf5PaKmKGKaUM2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_94BkJNLFkVr8yGztQe54k7
          claim_id: c_B9hzVFF4QBrMhN2Q6xVCyg
          source_id: s_9ExcbVN616hKCssSVQd3hn
          stance: supports
          locator: CBDB:281047
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（281047）
          source: &a1
            id: s_9ExcbVN616hKCssSVQd3hn
            source_type: api_record
            title: 中国历代人物传记资料库：王賢（CBDB 281047）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281047&o=json
            external_identifier: CBDB:281047
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.042Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Adi5iDd9zLL8vwkxK2VkyQ
        subject_person_id: p_R3i4rkxoLf5PaKmKGKaUM2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賢，明人物。正德十二年進士，籍贯固安。（中国历代人物传记资料库 CBDB 281047）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xsXu-sFd0N7TKuNW2NTtdh
          claim_id: c_Adi5iDd9zLL8vwkxK2VkyQ
          source_id: s_9ExcbVN616hKCssSVQd3hn
          stance: supports
          locator: CBDB:281047
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

# 王賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王賢 | accepted |
| bio.summary | 王賢，明人物。正德十二年進士，籍贯固安。（中国历代人物传记资料库 CBDB 281047） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王賢（CBDB 281047）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281047&o=json)
