---
schema: wang-person/v1
id: p_3oqXpm8G14pm9E2LvoF51i
status: active
merged_into: null
display_name: 王丕顯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Eao7cJdv6mCABP83BEz2GV
        subject_person_id: p_3oqXpm8G14pm9E2LvoF51i
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王丕顯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oWRxJuAQA6ym9b8MgJ2EDD
          claim_id: c_Eao7cJdv6mCABP83BEz2GV
          source_id: s_PVmu636K88jhZZKn8J2EQt
          stance: supports
          locator: CBDB:473304
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（473304）
          source: &a1
            id: s_PVmu636K88jhZZKn8J2EQt
            source_type: api_record
            title: 中国历代人物传记资料库：王丕顯（CBDB 473304）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=473304&o=json
            external_identifier: CBDB:473304
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.299Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pT1xEX6wzrsp5CHYRELQZa
        subject_person_id: p_3oqXpm8G14pm9E2LvoF51i
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王丕顯，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 473304）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2RcE2b46nY3sS2EUN2Xbop
          claim_id: c_pT1xEX6wzrsp5CHYRELQZa
          source_id: s_PVmu636K88jhZZKn8J2EQt
          stance: supports
          locator: CBDB:473304
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

# 王丕顯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王丕顯 | accepted |
| bio.summary | 王丕顯，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 473304） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王丕顯（CBDB 473304）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=473304&o=json)
