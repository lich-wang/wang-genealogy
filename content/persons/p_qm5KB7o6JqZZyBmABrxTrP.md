---
schema: wang-person/v1
id: p_qm5KB7o6JqZZyBmABrxTrP
status: active
merged_into: null
display_name: 王縑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KTLrukU38yfHk9g8YmqAxj
        subject_person_id: p_qm5KB7o6JqZZyBmABrxTrP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王縑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_g31s6Chi5y1qBm1XiYSort
          claim_id: c_KTLrukU38yfHk9g8YmqAxj
          source_id: s_FpoqDGqLBJ89BnEtUUSEs5
          stance: supports
          locator: CBDB:71259
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71259）
          source: &a1
            id: s_FpoqDGqLBJ89BnEtUUSEs5
            source_type: api_record
            title: 中国历代人物传记资料库：王縑（CBDB 71259）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71259&o=json
            external_identifier: CBDB:71259
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.140Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_FinUca8Tr1TKbeYBdAfLeu
        subject_person_id: p_qm5KB7o6JqZZyBmABrxTrP
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1873年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zGCwCibv9PfXgJGSdJzg9P
          claim_id: c_FinUca8Tr1TKbeYBdAfLeu
          source_id: s_FpoqDGqLBJ89BnEtUUSEs5
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
        id: c_Np8KmLJuwAVXo7p3nYUuXP
        subject_person_id: p_qm5KB7o6JqZZyBmABrxTrP
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1930年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dAYBHAYVkECmT1eT8fDpC9
          claim_id: c_Np8KmLJuwAVXo7p3nYUuXP
          source_id: s_FpoqDGqLBJ89BnEtUUSEs5
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
        id: c_17vXfY3PZ6sELYNCCHDkNY
        subject_person_id: p_qm5KB7o6JqZZyBmABrxTrP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王縑（1873年—1930年），中華民國人物。籍贯長沙。（中国历代人物传记资料库 CBDB 71259）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4ObRKwexd1Nx-OxqaS0o8x
          claim_id: c_17vXfY3PZ6sELYNCCHDkNY
          source_id: s_FpoqDGqLBJ89BnEtUUSEs5
          stance: supports
          locator: CBDB:71259
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

# 王縑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王縑 | accepted |
| birth.date | 1873年 | accepted |
| death.date | 1930年 | accepted |
| bio.summary | 王縑（1873年—1930年），中華民國人物。籍贯長沙。（中国历代人物传记资料库 CBDB 71259） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王縑（CBDB 71259）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71259&o=json)
