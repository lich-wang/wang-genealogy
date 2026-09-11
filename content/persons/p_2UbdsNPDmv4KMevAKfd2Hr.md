---
schema: wang-person/v1
id: p_2UbdsNPDmv4KMevAKfd2Hr
status: active
merged_into: null
display_name: 王寬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7r7qSLaiLDpnKJ7JTt6cPh
        subject_person_id: p_2UbdsNPDmv4KMevAKfd2Hr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cUiA2sVDmDQ7V4rrqqvV1V
          claim_id: c_7r7qSLaiLDpnKJ7JTt6cPh
          source_id: s_nF2FAo3Z29jBC36Xr7oYmn
          stance: supports
          locator: CBDB:71177
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71177）
          source: &a1
            id: s_nF2FAo3Z29jBC36Xr7oYmn
            source_type: api_record
            title: 中国历代人物传记资料库：王寬（CBDB 71177）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71177&o=json
            external_identifier: CBDB:71177
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.456Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_KYK2CSaaRHGvnzNPM3MHq5
        subject_person_id: p_2UbdsNPDmv4KMevAKfd2Hr
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1668年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MTCEHzUK71rhAyDMHfvAec
          claim_id: c_KYK2CSaaRHGvnzNPM3MHq5
          source_id: s_nF2FAo3Z29jBC36Xr7oYmn
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
        id: c_mBwmfzN1yZMaDAo8ovKqLJ
        subject_person_id: p_2UbdsNPDmv4KMevAKfd2Hr
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1730年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ndp3ah81z78BfgZiPzFFuq
          claim_id: c_mBwmfzN1yZMaDAo8ovKqLJ
          source_id: s_nF2FAo3Z29jBC36Xr7oYmn
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
        id: c_eagXzfsdPiUvYZ9NpAv8uu
        subject_person_id: p_2UbdsNPDmv4KMevAKfd2Hr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寬（1668年—1730年），清人物。籍贯鎮洋。（中国历代人物传记资料库 CBDB 71177）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iPPygyz4Zmec8GWF4kAYxE
          claim_id: c_eagXzfsdPiUvYZ9NpAv8uu
          source_id: s_nF2FAo3Z29jBC36Xr7oYmn
          stance: supports
          locator: CBDB:71177
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

# 王寬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寬 | accepted |
| birth.date | 1668年 | accepted |
| death.date | 1730年 | accepted |
| bio.summary | 王寬（1668年—1730年），清人物。籍贯鎮洋。（中国历代人物传记资料库 CBDB 71177） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王寬（CBDB 71177）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71177&o=json)
