---
schema: wang-person/v1
id: p_HuLiZV35CzPf4GzBuJCBAG
status: active
merged_into: null
display_name: 王諶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2kn9bqxpWgJcHNeZcGGD6d
        subject_person_id: p_HuLiZV35CzPf4GzBuJCBAG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王諶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nZF1U2VJhvNMAnD3B2oddq
          claim_id: c_2kn9bqxpWgJcHNeZcGGD6d
          source_id: s_D3RU7v5KLKMk6QD9mzSFAc
          stance: supports
          locator: CBDB:37817
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37817）
          source: &a1
            id: s_D3RU7v5KLKMk6QD9mzSFAc
            source_type: api_record
            title: 中国历代人物传记资料库：王諶（CBDB 37817）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37817&o=json
            external_identifier: CBDB:37817
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.261Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sb1Z4y8T7EmFaAnP77C87f
        subject_person_id: p_HuLiZV35CzPf4GzBuJCBAG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王諶，宋人物。籍贯宜興。（中国历代人物传记资料库 CBDB 37817）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kZ4b_Eu3u5to5m-XiTab_k
          claim_id: c_sb1Z4y8T7EmFaAnP77C87f
          source_id: s_D3RU7v5KLKMk6QD9mzSFAc
          stance: supports
          locator: CBDB:37817
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

# 王諶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王諶 | accepted |
| bio.summary | 王諶，宋人物。籍贯宜興。（中国历代人物传记资料库 CBDB 37817） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王諶（CBDB 37817）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37817&o=json)
