---
schema: wang-person/v1
id: p_fEJsLp7pk2M7PKYDanxJra
status: active
merged_into: null
display_name: 王世祥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UfDsPKe1EzKm96e7XBWpvx
        subject_person_id: p_fEJsLp7pk2M7PKYDanxJra
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世祥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5N4LfuQpDptEzGxNNU8zCC
          claim_id: c_UfDsPKe1EzKm96e7XBWpvx
          source_id: s_FYN4cb9ukEpvpjKewbydKx
          stance: supports
          locator: CBDB:702021
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（702021）
          source: &a1
            id: s_FYN4cb9ukEpvpjKewbydKx
            source_type: api_record
            title: 中国历代人物传记资料库：王世祥（CBDB 702021）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=702021&o=json
            external_identifier: CBDB:702021
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.809Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_89QGJtfnF6bSLP3mPCunb7
        subject_person_id: p_fEJsLp7pk2M7PKYDanxJra
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世祥，明人物。籍贯錢塘，身份为畫家。（中国历代人物传记资料库 CBDB 702021）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NTwgZZZfc5xlHJXCRLEUvp
          claim_id: c_89QGJtfnF6bSLP3mPCunb7
          source_id: s_FYN4cb9ukEpvpjKewbydKx
          stance: supports
          locator: CBDB:702021
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

# 王世祥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世祥 | accepted |
| bio.summary | 王世祥，明人物。籍贯錢塘，身份为畫家。（中国历代人物传记资料库 CBDB 702021） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世祥（CBDB 702021）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=702021&o=json)
