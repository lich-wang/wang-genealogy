---
schema: wang-person/v1
id: p_BMz7Ps8Piu42oj8rs8dR4N
status: active
merged_into: null
display_name: 王雋
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DbrqoRwDGo4mt55YGDpw3x
        subject_person_id: p_BMz7Ps8Piu42oj8rs8dR4N
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_txp9As9gMBruFbPbMPCEF4
          claim_id: c_DbrqoRwDGo4mt55YGDpw3x
          source_id: s_GEB3zADSN7ronih2AaDPpm
          stance: supports
          locator: CBDB:689807
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（689807）
          source: &a1
            id: s_GEB3zADSN7ronih2AaDPpm
            source_type: api_record
            title: 中国历代人物传记资料库：王雋（CBDB 689807）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689807&o=json
            external_identifier: CBDB:689807
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.569Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zLEwS9RdVYs3VW2cLjyvUf
        subject_person_id: p_BMz7Ps8Piu42oj8rs8dR4N
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雋，清人物。身份为畫家。（中国历代人物传记资料库 CBDB 689807）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_B8yEnGp86kr0gJKEqJNkZb
          claim_id: c_zLEwS9RdVYs3VW2cLjyvUf
          source_id: s_GEB3zADSN7ronih2AaDPpm
          stance: supports
          locator: CBDB:689807
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

# 王雋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王雋 | accepted |
| bio.summary | 王雋，清人物。身份为畫家。（中国历代人物传记资料库 CBDB 689807） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王雋（CBDB 689807）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689807&o=json)
