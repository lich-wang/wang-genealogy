---
schema: wang-person/v1
id: p_rxhNRdF7LRvYtsrGVcpWii
status: active
merged_into: null
display_name: 王昭祚
cbdb_id: 184953
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WsK2qYdv9giVi3AjHgezQN
        subject_person_id: p_rxhNRdF7LRvYtsrGVcpWii
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昭祚（卒于958年），五代人物。籍贯真定，曾任侍中。（中国历代人物传记资料库 CBDB 184953）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_S0xtHYvqeiFw3W3DliNKlc
          claim_id: c_WsK2qYdv9giVi3AjHgezQN
          source_id: s_6azEDiqeotChbZjQER4UiW
          stance: supports
          locator: CBDB:184953
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_6azEDiqeotChbZjQER4UiW
            source_type: api_record
            title: 中国历代人物传记资料库：王昭祚（CBDB 184953）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=184953&o=json
            external_identifier: CBDB:184953
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_jV89qVUuMHAf8fQUHtXA4X
        subject_person_id: p_rxhNRdF7LRvYtsrGVcpWii
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 958年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 0958-01-01
            latest: 0958-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SBAF4sMpEWnMi181ALs7sQ
          claim_id: c_jV89qVUuMHAf8fQUHtXA4X
          source_id: s_6azEDiqeotChbZjQER4UiW
          stance: supports
          locator: CBDB:184953
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（401-500）｜历史性依据：CBDB 卒年 = 958
          source:
            id: s_6azEDiqeotChbZjQER4UiW
            source_type: api_record
            title: 中国历代人物传记资料库：王昭祚（CBDB 184953）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=184953&o=json
            external_identifier: CBDB:184953
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_q1Avdo9z7X1istNCigNzDB
        subject_person_id: p_rxhNRdF7LRvYtsrGVcpWii
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昭祚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Tu3ooP57h7QKujtKmtfkTd
          claim_id: c_q1Avdo9z7X1istNCigNzDB
          source_id: s_6azEDiqeotChbZjQER4UiW
          stance: supports
          locator: CBDB:184953
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（401-500）｜历史性依据：CBDB 卒年 = 958
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_UTVy1GBbrd6_8UPdjszTpd
        subject_person_id: p_qTHZVE85zKMHBCYt3CAjW2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rxhNRdF7LRvYtsrGVcpWii
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xOAhBtzBmj6FB-5Vwg71ON
          claim_id: c_UTVy1GBbrd6_8UPdjszTpd
          source_id: s_VdJ8ABfSKq3J5M323rRp5R
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VdJ8ABfSKq3J5M323rRp5R
            source_type: api_record
            title: 中国历代人物传记资料库：王鎔（CBDB 92111）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92111&o=json
            external_identifier: CBDB:92111
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.138Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_qTHZVE85zKMHBCYt3CAjW2
        status: active
        display_name: 王鎔
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王昭祚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王昭祚（卒于958年），五代人物。籍贯真定，曾任侍中。（中国历代人物传记资料库 CBDB 184953） | accepted |
| death.date | 958年 | accepted |
| name.primary | 王昭祚 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qTHZVE85zKMHBCYt3CAjW2 | 王鎔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鎔（CBDB 92111）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92111&o=json)
- [中国历代人物传记资料库：王昭祚（CBDB 184953）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=184953&o=json)
