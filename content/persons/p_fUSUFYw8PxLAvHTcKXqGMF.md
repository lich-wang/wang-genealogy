---
schema: wang-person/v1
id: p_fUSUFYw8PxLAvHTcKXqGMF
status: active
merged_into: null
display_name: 王公進
cbdb_id: 101070
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_28SF1h4VXyrDtFpzytvg3Y
        subject_person_id: p_fUSUFYw8PxLAvHTcKXqGMF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公進，元人物。籍贯嘉興路，曾任諸路總管府儒學教授。（中国历代人物传记资料库 CBDB 101070）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_lUBikClJu2XFsnJdON2vQr
          claim_id: c_28SF1h4VXyrDtFpzytvg3Y
          source_id: s_ks9FjQ4BZcMQpby2Z9NBHh
          stance: supports
          locator: CBDB:101070
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ks9FjQ4BZcMQpby2Z9NBHh
            source_type: api_record
            title: 中国历代人物传记资料库：王公進（CBDB 101070）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101070&o=json
            external_identifier: CBDB:101070
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:50.362Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_XJr7DAFp9Y3FquN36PG2Zz
        subject_person_id: p_fUSUFYw8PxLAvHTcKXqGMF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公進
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_93Fs3Qs1Q3W9a9S7Q6yUhp
          claim_id: c_XJr7DAFp9Y3FquN36PG2Zz
          source_id: s_ks9FjQ4BZcMQpby2Z9NBHh
          stance: supports
          locator: CBDB:101070
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1701-1800）｜历史性依据：CBDB 朝代 = 元
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

# 王公進

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王公進，元人物。籍贯嘉興路，曾任諸路總管府儒學教授。（中国历代人物传记资料库 CBDB 101070） | accepted |
| name.primary | 王公進 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王公進（CBDB 101070）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101070&o=json)
