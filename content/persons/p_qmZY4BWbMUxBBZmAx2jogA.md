---
schema: wang-person/v1
id: p_qmZY4BWbMUxBBZmAx2jogA
status: active
merged_into: null
display_name: 王敬常
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EkLpX1jZ27fM37h6N58Xja
        subject_person_id: p_qmZY4BWbMUxBBZmAx2jogA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬常
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tKYUZXGSPkbkzcf71hXz3W
          claim_id: c_EkLpX1jZ27fM37h6N58Xja
          source_id: s_6YoZ9mXUsW4GH48aAjwr2C
          stance: supports
          locator: CBDB:638190
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638190）
          source: &a1
            id: s_6YoZ9mXUsW4GH48aAjwr2C
            source_type: api_record
            title: 中国历代人物传记资料库：王敬常（CBDB 638190）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638190&o=json
            external_identifier: CBDB:638190
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.558Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_r1HFcUdmnMN2U2U8VT8JJ1
        subject_person_id: p_qmZY4BWbMUxBBZmAx2jogA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬常，清人物。籍贯大興，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 638190）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3bSQ1xARt_CUnvjulpuZhZ
          claim_id: c_r1HFcUdmnMN2U2U8VT8JJ1
          source_id: s_6YoZ9mXUsW4GH48aAjwr2C
          stance: supports
          locator: CBDB:638190
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

# 王敬常

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敬常 | accepted |
| bio.summary | 王敬常，清人物。籍贯大興，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 638190） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王敬常（CBDB 638190）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638190&o=json)
