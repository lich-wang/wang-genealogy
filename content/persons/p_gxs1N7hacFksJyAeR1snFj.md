---
schema: wang-person/v1
id: p_gxs1N7hacFksJyAeR1snFj
status: active
merged_into: null
display_name: 王修
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Y2PUYFP4jqS12gLMuzoXVJ
        subject_person_id: p_gxs1N7hacFksJyAeR1snFj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王修
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bQJDE9Mz7PtXLWfdq6vq9F
          claim_id: c_Y2PUYFP4jqS12gLMuzoXVJ
          source_id: s_GWFP2bJvU65KzopVa74Ahb
          stance: supports
          locator: CBDB:97799
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（97799）
          source: &a1
            id: s_GWFP2bJvU65KzopVa74Ahb
            source_type: api_record
            title: 中国历代人物传记资料库：王修（CBDB 97799）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97799&o=json
            external_identifier: CBDB:97799
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.168Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_w5qRceTFC8XzK1GiPRa1mf
        subject_person_id: p_gxs1N7hacFksJyAeR1snFj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王修，宋人物。曾任朝奉大夫。（中国历代人物传记资料库 CBDB 97799）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_A-Jba-Ek9NBvueUcR5Yytg
          claim_id: c_w5qRceTFC8XzK1GiPRa1mf
          source_id: s_GWFP2bJvU65KzopVa74Ahb
          stance: supports
          locator: CBDB:97799
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

# 王修

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王修 | accepted |
| bio.summary | 王修，宋人物。曾任朝奉大夫。（中国历代人物传记资料库 CBDB 97799） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王修（CBDB 97799）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97799&o=json)
