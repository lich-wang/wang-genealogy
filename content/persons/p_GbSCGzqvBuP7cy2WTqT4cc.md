---
schema: wang-person/v1
id: p_GbSCGzqvBuP7cy2WTqT4cc
status: active
merged_into: null
display_name: 王定安
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CXgtK5JKjab8craTxmJfjs
        subject_person_id: p_GbSCGzqvBuP7cy2WTqT4cc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王定安
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_npZQCsDS9HHGiQPwMV55Y3
          claim_id: c_CXgtK5JKjab8craTxmJfjs
          source_id: s_M3Nq7bF2rvASDyg911HuZ9
          stance: supports
          locator: CBDB:71816
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71816）
          source: &a1
            id: s_M3Nq7bF2rvASDyg911HuZ9
            source_type: api_record
            title: 中国历代人物传记资料库：王定安（CBDB 71816）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71816&o=json
            external_identifier: CBDB:71816
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.883Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_pVSEsrPVU5Vxai9DqiC6qV
        subject_person_id: p_GbSCGzqvBuP7cy2WTqT4cc
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1834年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P7xA8ed5DfYTi87VXFSMpN
          claim_id: c_pVSEsrPVU5Vxai9DqiC6qV
          source_id: s_M3Nq7bF2rvASDyg911HuZ9
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
        id: c_j99wo7PjBK6ak3rUYZL9VT
        subject_person_id: p_GbSCGzqvBuP7cy2WTqT4cc
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1898年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k4C9mJoWMXQsJ2FcK9reeM
          claim_id: c_j99wo7PjBK6ak3rUYZL9VT
          source_id: s_M3Nq7bF2rvASDyg911HuZ9
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
        id: c_iGvoJLo4n19VBmpWrC5b8n
        subject_person_id: p_GbSCGzqvBuP7cy2WTqT4cc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王定安（1834年—1898年），清人物。籍贯東湖，入仕鄉貢舉人，曾任兵備道、縣知縣。（中国历代人物传记资料库 CBDB 71816）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xxU1SgNJP6THa4mu_iYrmF
          claim_id: c_iGvoJLo4n19VBmpWrC5b8n
          source_id: s_M3Nq7bF2rvASDyg911HuZ9
          stance: supports
          locator: CBDB:71816
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

# 王定安

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王定安 | accepted |
| birth.date | 1834年 | accepted |
| death.date | 1898年 | accepted |
| bio.summary | 王定安（1834年—1898年），清人物。籍贯東湖，入仕鄉貢舉人，曾任兵備道、縣知縣。（中国历代人物传记资料库 CBDB 71816） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王定安（CBDB 71816）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71816&o=json)
