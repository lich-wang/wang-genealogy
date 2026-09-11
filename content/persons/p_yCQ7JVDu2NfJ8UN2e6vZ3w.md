---
schema: wang-person/v1
id: p_yCQ7JVDu2NfJ8UN2e6vZ3w
status: active
merged_into: null
display_name: 王禹得
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KWQBx9K1fYAHtbFJihsxXA
        subject_person_id: p_yCQ7JVDu2NfJ8UN2e6vZ3w
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禹得
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cMs7uEqtdkGrCdnL9BoeF8
          claim_id: c_KWQBx9K1fYAHtbFJihsxXA
          source_id: s_EuZf7FCTNFsx7yXwzF8SMs
          stance: supports
          locator: CBDB:546885
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（546885）
          source: &a1
            id: s_EuZf7FCTNFsx7yXwzF8SMs
            source_type: api_record
            title: 中国历代人物传记资料库：王禹得（CBDB 546885）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=546885&o=json
            external_identifier: CBDB:546885
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.485Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TSHoour3Eq9S2zA9nC8N7G
        subject_person_id: p_yCQ7JVDu2NfJ8UN2e6vZ3w
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禹得，宋人物。籍贯睦州，入仕進士。（中国历代人物传记资料库 CBDB 546885）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_U247IoHwSvtjjstt4CeUTA
          claim_id: c_TSHoour3Eq9S2zA9nC8N7G
          source_id: s_EuZf7FCTNFsx7yXwzF8SMs
          stance: supports
          locator: CBDB:546885
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

# 王禹得

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王禹得 | accepted |
| bio.summary | 王禹得，宋人物。籍贯睦州，入仕進士。（中国历代人物传记资料库 CBDB 546885） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王禹得（CBDB 546885）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=546885&o=json)
