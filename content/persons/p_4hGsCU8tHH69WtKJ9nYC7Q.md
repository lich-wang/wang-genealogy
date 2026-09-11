---
schema: wang-person/v1
id: p_4hGsCU8tHH69WtKJ9nYC7Q
status: active
merged_into: null
display_name: 王世廕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LDTrPmYR1voksnoahpJJ5B
        subject_person_id: p_4hGsCU8tHH69WtKJ9nYC7Q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世廕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TvAvcJEHU5aWSLZTdQCMWK
          claim_id: c_LDTrPmYR1voksnoahpJJ5B
          source_id: s_LMYNMGvi73LBS6BLB2qyoZ
          stance: supports
          locator: CBDB:413711
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（413711）
          source: &a1
            id: s_LMYNMGvi73LBS6BLB2qyoZ
            source_type: api_record
            title: 中国历代人物传记资料库：王世廕（CBDB 413711）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=413711&o=json
            external_identifier: CBDB:413711
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.905Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_K3ZZpy3px253NHro8uPcVz
        subject_person_id: p_4hGsCU8tHH69WtKJ9nYC7Q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世廕，明人物。曾任知縣。（中国历代人物传记资料库 CBDB 413711）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xhh4Z6Wq3ulNmNEikMH6vq
          claim_id: c_K3ZZpy3px253NHro8uPcVz
          source_id: s_LMYNMGvi73LBS6BLB2qyoZ
          stance: supports
          locator: CBDB:413711
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

# 王世廕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世廕 | accepted |
| bio.summary | 王世廕，明人物。曾任知縣。（中国历代人物传记资料库 CBDB 413711） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世廕（CBDB 413711）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=413711&o=json)
