---
schema: wang-person/v1
id: p_dykWwaxZ1aYdQ6BxqhBSqT
status: active
merged_into: null
display_name: 王代生
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_t7FiUUuuByNdraFH6VN8mN
        subject_person_id: p_dykWwaxZ1aYdQ6BxqhBSqT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王代生
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1TRaEZguUc8y7wSJUkzpb5
          claim_id: c_t7FiUUuuByNdraFH6VN8mN
          source_id: s_ZEdpVWQE596kfVmRKndoPV
          stance: supports
          locator: CBDB:635906
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635906）
          source: &a1
            id: s_ZEdpVWQE596kfVmRKndoPV
            source_type: api_record
            title: 中国历代人物传记资料库：王代生（CBDB 635906）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635906&o=json
            external_identifier: CBDB:635906
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.824Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jBkqEuT6mMo8HjmeXAejmw
        subject_person_id: p_dykWwaxZ1aYdQ6BxqhBSqT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王代生，清人物。籍贯衡山，入仕行伍，曾任守備。（中国历代人物传记资料库 CBDB 635906）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SdsPrxBXuNlUvfYsEcURn1
          claim_id: c_jBkqEuT6mMo8HjmeXAejmw
          source_id: s_ZEdpVWQE596kfVmRKndoPV
          stance: supports
          locator: CBDB:635906
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

# 王代生

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王代生 | accepted |
| bio.summary | 王代生，清人物。籍贯衡山，入仕行伍，曾任守備。（中国历代人物传记资料库 CBDB 635906） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王代生（CBDB 635906）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635906&o=json)
