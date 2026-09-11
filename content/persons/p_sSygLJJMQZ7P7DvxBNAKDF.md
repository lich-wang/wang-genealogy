---
schema: wang-person/v1
id: p_sSygLJJMQZ7P7DvxBNAKDF
status: active
merged_into: null
display_name: 王詔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7LnmSQPeKurnwaxoXAYsNu
        subject_person_id: p_sSygLJJMQZ7P7DvxBNAKDF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wj1k7v7rNPNEZTnHZHuF1x
          claim_id: c_7LnmSQPeKurnwaxoXAYsNu
          source_id: s_V1xBPN5Cmdf11iN8tDmNxt
          stance: supports
          locator: CBDB:253015
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（253015）
          source: &a1
            id: s_V1xBPN5Cmdf11iN8tDmNxt
            source_type: api_record
            title: 中国历代人物传记资料库：王詔（CBDB 253015）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253015&o=json
            external_identifier: CBDB:253015
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.289Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DdjxCM9mRZ1d6V4ZG7AGkT
        subject_person_id: p_sSygLJJMQZ7P7DvxBNAKDF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詔，明人物。成化十四年進士，籍贯商水。（中国历代人物传记资料库 CBDB 253015）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TaxBfadXfedu6fIi9JwOio
          claim_id: c_DdjxCM9mRZ1d6V4ZG7AGkT
          source_id: s_V1xBPN5Cmdf11iN8tDmNxt
          stance: supports
          locator: CBDB:253015
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

# 王詔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王詔 | accepted |
| bio.summary | 王詔，明人物。成化十四年進士，籍贯商水。（中国历代人物传记资料库 CBDB 253015） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王詔（CBDB 253015）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253015&o=json)
