---
schema: wang-person/v1
id: p_ACG9RRCqKSE1XN2a525TBT
status: active
merged_into: null
display_name: 王世功
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4Sjw7NFBtf7xqrYW68oNrH
        subject_person_id: p_ACG9RRCqKSE1XN2a525TBT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世功
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SvSDWSCEuG4DVwMBHfkSyH
          claim_id: c_4Sjw7NFBtf7xqrYW68oNrH
          source_id: s_NP5SYShdMhbPbrNcAAztJE
          stance: supports
          locator: CBDB:59946
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（59946）
          source: &a1
            id: s_NP5SYShdMhbPbrNcAAztJE
            source_type: api_record
            title: 中国历代人物传记资料库：王世功（CBDB 59946）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=59946&o=json
            external_identifier: CBDB:59946
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.840Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZvC22isQGuFHHQ6sCwyUoM
        subject_person_id: p_ACG9RRCqKSE1XN2a525TBT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世功，清人物。曾任司獄、巡鹽御史。（中国历代人物传记资料库 CBDB 59946）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ju4YKkSttQCczbFKs2Hz9_
          claim_id: c_ZvC22isQGuFHHQ6sCwyUoM
          source_id: s_NP5SYShdMhbPbrNcAAztJE
          stance: supports
          locator: CBDB:59946
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

# 王世功

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世功 | accepted |
| bio.summary | 王世功，清人物。曾任司獄、巡鹽御史。（中国历代人物传记资料库 CBDB 59946） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世功（CBDB 59946）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=59946&o=json)
