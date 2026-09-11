---
schema: wang-person/v1
id: p_3T3XsmrC9usHuKPSn5HnZT
status: active
merged_into: null
display_name: 王增祐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ho3ApQK3ejMN9pgHzTi61K
        subject_person_id: p_3T3XsmrC9usHuKPSn5HnZT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王增祐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_H6Amr4Nt7xm2wTx28z8nXk
          claim_id: c_ho3ApQK3ejMN9pgHzTi61K
          source_id: s_T2YRGg7aUGJe3eVWcPb6Tw
          stance: supports
          locator: CBDB:558045
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（558045）
          source: &a1
            id: s_T2YRGg7aUGJe3eVWcPb6Tw
            source_type: api_record
            title: 中国历代人物传记资料库：王增祐（CBDB 558045）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558045&o=json
            external_identifier: CBDB:558045
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.543Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_P1BwP7ziKnnW9PnkJBzxHq
        subject_person_id: p_3T3XsmrC9usHuKPSn5HnZT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王增祐，明人物。籍贯貴溪，入仕進士，曾任按察使、副使、御史。（中国历代人物传记资料库 CBDB 558045）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DmpcDTtTCE7d--ZjinZAnh
          claim_id: c_P1BwP7ziKnnW9PnkJBzxHq
          source_id: s_T2YRGg7aUGJe3eVWcPb6Tw
          stance: supports
          locator: CBDB:558045
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

# 王增祐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王增祐 | accepted |
| bio.summary | 王增祐，明人物。籍贯貴溪，入仕進士，曾任按察使、副使、御史。（中国历代人物传记资料库 CBDB 558045） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王增祐（CBDB 558045）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558045&o=json)
