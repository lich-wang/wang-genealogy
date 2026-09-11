---
schema: wang-person/v1
id: p_pM8WLeKH62t9J1fE63UPHN
status: active
merged_into: null
display_name: 王丕欽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SFqFTsBm8YCBYepyfDGAJi
        subject_person_id: p_pM8WLeKH62t9J1fE63UPHN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王丕欽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PxMCL2tMLrhoXYMeU5PxgQ
          claim_id: c_SFqFTsBm8YCBYepyfDGAJi
          source_id: s_JG69fFQRQBnrA77jtzTebW
          stance: supports
          locator: CBDB:635656
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635656）
          source: &a1
            id: s_JG69fFQRQBnrA77jtzTebW
            source_type: api_record
            title: 中国历代人物传记资料库：王丕欽（CBDB 635656）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635656&o=json
            external_identifier: CBDB:635656
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.750Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_g37NN2BzpmxGTaRu9XdHaZ
        subject_person_id: p_pM8WLeKH62t9J1fE63UPHN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王丕欽，清人物。籍贯臨安，入仕鄉貢舉人，曾任教諭、學正、復設訓導。（中国历代人物传记资料库 CBDB 635656）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mZQuiZqq7XACALZi1308SX
          claim_id: c_g37NN2BzpmxGTaRu9XdHaZ
          source_id: s_JG69fFQRQBnrA77jtzTebW
          stance: supports
          locator: CBDB:635656
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

# 王丕欽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王丕欽 | accepted |
| bio.summary | 王丕欽，清人物。籍贯臨安，入仕鄉貢舉人，曾任教諭、學正、復設訓導。（中国历代人物传记资料库 CBDB 635656） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王丕欽（CBDB 635656）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635656&o=json)
