---
schema: wang-person/v1
id: p_Q5H2suqMsJJzpoFY2muV9p
status: active
merged_into: null
display_name: 王友俊
cbdb_id: 414018
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pACBW14MoiVDgPc3S4AhJG
        subject_person_id: p_Q5H2suqMsJJzpoFY2muV9p
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王友俊，明人物。曾任知縣。（中国历代人物传记资料库 CBDB 414018）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_k7oZTa_QStn_P3aFSZ83db
          claim_id: c_pACBW14MoiVDgPc3S4AhJG
          source_id: s_PeqVr8unSGFygpATLjfwEN
          stance: supports
          locator: CBDB:414018
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_PeqVr8unSGFygpATLjfwEN
            source_type: api_record
            title: 中国历代人物传记资料库：王友俊（CBDB 414018）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414018&o=json
            external_identifier: CBDB:414018
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:26.305Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Gkn3BBZLXyh2nHqpv4mE1X
        subject_person_id: p_Q5H2suqMsJJzpoFY2muV9p
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王友俊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Di5cCiRWr2cMde6Xxuziey
          claim_id: c_Gkn3BBZLXyh2nHqpv4mE1X
          source_id: s_PeqVr8unSGFygpATLjfwEN
          stance: supports
          locator: CBDB:414018
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（5101-5200）｜历史性依据：CBDB 朝代 = 明
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

# 王友俊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王友俊，明人物。曾任知縣。（中国历代人物传记资料库 CBDB 414018） | accepted |
| name.primary | 王友俊 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王友俊（CBDB 414018）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414018&o=json)
