---
schema: wang-person/v1
id: p_gF3EHdhAZ9xVeKz7ASP8Wp
status: active
merged_into: null
display_name: 王縈緒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VgkiE2C1WgXKjoo8Doeo39
        subject_person_id: p_gF3EHdhAZ9xVeKz7ASP8Wp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王縈緒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XnASwQzpHJNh7jMSuhJ63C
          claim_id: c_VgkiE2C1WgXKjoo8Doeo39
          source_id: s_yTtXmBGwDxt8XnqM2uwaeC
          stance: supports
          locator: CBDB:71988
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71988）
          source: &a1
            id: s_yTtXmBGwDxt8XnqM2uwaeC
            source_type: api_record
            title: 中国历代人物传记资料库：王縈緒（CBDB 71988）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71988&o=json
            external_identifier: CBDB:71988
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.949Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ZqNrFgbZTN891hGySDjk1b
        subject_person_id: p_gF3EHdhAZ9xVeKz7ASP8Wp
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1713年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7xyRgZxK4vAh8qCid1JNfz
          claim_id: c_ZqNrFgbZTN891hGySDjk1b
          source_id: s_yTtXmBGwDxt8XnqM2uwaeC
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
        id: c_HRaGFDiynaA7Q6eeypX3qp
        subject_person_id: p_gF3EHdhAZ9xVeKz7ASP8Wp
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1784年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UGdcMD1JJa6DDH5QVPJ9Yv
          claim_id: c_HRaGFDiynaA7Q6eeypX3qp
          source_id: s_yTtXmBGwDxt8XnqM2uwaeC
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
        id: c_tYRte1yjusrTBnupMWJ1Nn
        subject_person_id: p_gF3EHdhAZ9xVeKz7ASP8Wp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王縈緒（1713年—1784年），清人物。籍贯諸城。（中国历代人物传记资料库 CBDB 71988）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fWPB4hRyRJTO7LIj_YPLXy
          claim_id: c_tYRte1yjusrTBnupMWJ1Nn
          source_id: s_yTtXmBGwDxt8XnqM2uwaeC
          stance: supports
          locator: CBDB:71988
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

# 王縈緒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王縈緒 | accepted |
| birth.date | 1713年 | accepted |
| death.date | 1784年 | accepted |
| bio.summary | 王縈緒（1713年—1784年），清人物。籍贯諸城。（中国历代人物传记资料库 CBDB 71988） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王縈緒（CBDB 71988）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71988&o=json)
