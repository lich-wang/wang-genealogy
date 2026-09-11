---
schema: wang-person/v1
id: p_pqbQm1G5hLX5o1uQDEWqAT
status: active
merged_into: null
display_name: 王仁夑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JbmY4c9FCsnBCjLpyG6p4y
        subject_person_id: p_pqbQm1G5hLX5o1uQDEWqAT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁夑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_J8Nuka5bmYyTP8cdKvLrxP
          claim_id: c_JbmY4c9FCsnBCjLpyG6p4y
          source_id: s_x8T9Cr1CtGAs2TH81f1nLQ
          stance: supports
          locator: CBDB:635883
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635883）
          source: &a1
            id: s_x8T9Cr1CtGAs2TH81f1nLQ
            source_type: api_record
            title: 中国历代人物传记资料库：王仁夑（CBDB 635883）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635883&o=json
            external_identifier: CBDB:635883
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.817Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_arxY48Pv129UHhB22TpEvg
        subject_person_id: p_pqbQm1G5hLX5o1uQDEWqAT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁夑，清人物。籍贯吳縣，曾任典史。（中国历代人物传记资料库 CBDB 635883）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7-hPkAI3pSx3lA5chCBBSV
          claim_id: c_arxY48Pv129UHhB22TpEvg
          source_id: s_x8T9Cr1CtGAs2TH81f1nLQ
          stance: supports
          locator: CBDB:635883
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

# 王仁夑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仁夑 | accepted |
| bio.summary | 王仁夑，清人物。籍贯吳縣，曾任典史。（中国历代人物传记资料库 CBDB 635883） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仁夑（CBDB 635883）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635883&o=json)
