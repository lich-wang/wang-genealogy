---
schema: wang-person/v1
id: p_2MsvUBQRs7G8R9UtFQEPfK
status: active
merged_into: null
display_name: 王夢齢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WHkusJqh7q8Cq5Q9tsDgq7
        subject_person_id: p_2MsvUBQRs7G8R9UtFQEPfK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢齢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ffwGKFH2sAwVDrDKv7ZDZf
          claim_id: c_WHkusJqh7q8Cq5Q9tsDgq7
          source_id: s_J6S8jyZ2EFMWn4fu9DtEsG
          stance: supports
          locator: CBDB:636881
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636881）
          source: &a1
            id: s_J6S8jyZ2EFMWn4fu9DtEsG
            source_type: api_record
            title: 中国历代人物传记资料库：王夢齢（CBDB 636881）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636881&o=json
            external_identifier: CBDB:636881
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.277Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EKmMQMt2vKSA65oHQfkxpT
        subject_person_id: p_2MsvUBQRs7G8R9UtFQEPfK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢齢，清人物。籍贯大興，入仕監生，曾任知府。（中国历代人物传记资料库 CBDB 636881）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_POY0kychJBMrj9iSIamsO0
          claim_id: c_EKmMQMt2vKSA65oHQfkxpT
          source_id: s_J6S8jyZ2EFMWn4fu9DtEsG
          stance: supports
          locator: CBDB:636881
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

# 王夢齢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王夢齢 | accepted |
| bio.summary | 王夢齢，清人物。籍贯大興，入仕監生，曾任知府。（中国历代人物传记资料库 CBDB 636881） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王夢齢（CBDB 636881）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636881&o=json)
