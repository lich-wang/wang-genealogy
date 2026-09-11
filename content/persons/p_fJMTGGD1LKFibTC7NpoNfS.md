---
schema: wang-person/v1
id: p_fJMTGGD1LKFibTC7NpoNfS
status: active
merged_into: null
display_name: 王壁成
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8nAdrxRfMbKTBd6W4sqFcW
        subject_person_id: p_fJMTGGD1LKFibTC7NpoNfS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王壁成
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NEKZAPs2oyfBCNTZhd4qBx
          claim_id: c_8nAdrxRfMbKTBd6W4sqFcW
          source_id: s_4zEK9HK3eke6MX4VbSMciU
          stance: supports
          locator: CBDB:636786
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636786）
          source: &a1
            id: s_4zEK9HK3eke6MX4VbSMciU
            source_type: api_record
            title: 中国历代人物传记资料库：王壁成（CBDB 636786）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636786&o=json
            external_identifier: CBDB:636786
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.105Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pDVFMyaBZD98ruMZPGdEbN
        subject_person_id: p_fJMTGGD1LKFibTC7NpoNfS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王壁成，清人物。籍贯順義，入仕貢生: 拔貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 636786）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HKD115b49J_5I4dkk2inv9
          claim_id: c_pDVFMyaBZD98ruMZPGdEbN
          source_id: s_4zEK9HK3eke6MX4VbSMciU
          stance: supports
          locator: CBDB:636786
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

# 王壁成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王壁成 | accepted |
| bio.summary | 王壁成，清人物。籍贯順義，入仕貢生: 拔貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 636786） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王壁成（CBDB 636786）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636786&o=json)
