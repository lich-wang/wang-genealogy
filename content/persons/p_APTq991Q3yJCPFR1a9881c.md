---
schema: wang-person/v1
id: p_APTq991Q3yJCPFR1a9881c
status: active
merged_into: null
display_name: 王回
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FaH178HPdAxq51ZDJUViZK
        subject_person_id: p_APTq991Q3yJCPFR1a9881c
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王回
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rptW4Gz5Y136Tp3sPgyWbY
          claim_id: c_FaH178HPdAxq51ZDJUViZK
          source_id: s_oazMioi15qHtjQA9yVxQr6
          stance: supports
          locator: CBDB:3958
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（3958）
          source: &a1
            id: s_oazMioi15qHtjQA9yVxQr6
            source_type: api_record
            title: 中国历代人物传记资料库：王回（CBDB 3958）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3958&o=json
            external_identifier: CBDB:3958
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.433Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_qMDyNp1GQkcPHcarQVJy2U
        subject_person_id: p_APTq991Q3yJCPFR1a9881c
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1023年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PPfGNhCp1sTKZVu7aZk8qo
          claim_id: c_qMDyNp1GQkcPHcarQVJy2U
          source_id: s_oazMioi15qHtjQA9yVxQr6
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_wSGLTABm6dNbAvKDRSJBLf
        subject_person_id: p_APTq991Q3yJCPFR1a9881c
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1065年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nemXqxp1y3vXnbBUnDXmz7
          claim_id: c_wSGLTABm6dNbAvKDRSJBLf
          source_id: s_oazMioi15qHtjQA9yVxQr6
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iBrinCdh9JEBBN9EtRxHM1
        subject_person_id: p_APTq991Q3yJCPFR1a9881c
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mUzLrwuQ1aTw6mA61RBRDC
          claim_id: c_iBrinCdh9JEBBN9EtRxHM1
          source_id: s_oazMioi15qHtjQA9yVxQr6
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_X0Zxh53emXsc1KcpXWUjPT
        subject_person_id: p_XLQnjXPKwDsW1NBJZky1dr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_APTq991Q3yJCPFR1a9881c
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sYWmbT5v3rWc0qMkAWOUug
          claim_id: c_X0Zxh53emXsc1KcpXWUjPT
          source_id: s_oazMioi15qHtjQA9yVxQr6
          stance: supports
          locator: 宋史：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_XLQnjXPKwDsW1NBJZky1dr
        status: active
        display_name: 王平言
        merged_into_person_id: null
  children:
    - claim:
        id: c_gIFYiLTYyeqYZTOZYGDLwA
        subject_person_id: p_APTq991Q3yJCPFR1a9881c
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7TukptvjkWoJH6cjkoc4FD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XBmG9GKyGqtlQ7DDdF-obd
          claim_id: c_gIFYiLTYyeqYZTOZYGDLwA
          source_id: s_ASHu7e63aVUb7NQ1NTuthZ
          stance: supports
          locator: 宋史：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ASHu7e63aVUb7NQ1NTuthZ
            source_type: api_record
            title: 中国历代人物传记资料库：王汾（CBDB 119728）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119728&o=json
            external_identifier: CBDB:119728
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.888Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7TukptvjkWoJH6cjkoc4FD
        status: active
        display_name: 王汾
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王回

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王回 | accepted |
| birth.date | 1023年 | accepted |
| death.date | 1065年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XLQnjXPKwDsW1NBJZky1dr | 王平言 | accepted |
| children | p_7TukptvjkWoJH6cjkoc4FD | 王汾 | accepted |

## 外部来源

- [中国历代人物传记资料库：王汾（CBDB 119728）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119728&o=json)
- [中国历代人物传记资料库：王回（CBDB 3958）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3958&o=json)
