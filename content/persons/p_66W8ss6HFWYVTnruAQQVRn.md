---
schema: wang-person/v1
id: p_66W8ss6HFWYVTnruAQQVRn
status: active
merged_into: null
display_name: 王駒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fDDHAfQr2We58oRs66pej5
        subject_person_id: p_66W8ss6HFWYVTnruAQQVRn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王駒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fTPWHUhh7CZbAfZAC485Dy
          claim_id: c_fDDHAfQr2We58oRs66pej5
          source_id: s_u13r8N7Vx8WuyUJdWKoWGD
          stance: supports
          locator: CBDB:458669
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（458669）
          source: &a1
            id: s_u13r8N7Vx8WuyUJdWKoWGD
            source_type: api_record
            title: 中国历代人物传记资料库：王駒（CBDB 458669）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=458669&o=json
            external_identifier: CBDB:458669
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.659Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_R12w3mfaJGZFZGnYnY4DDW
        subject_person_id: p_66W8ss6HFWYVTnruAQQVRn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王駒，清人物。入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 458669）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gL2RLqD12CE6jWymAyJnWo
          claim_id: c_R12w3mfaJGZFZGnYnY4DDW
          source_id: s_u13r8N7Vx8WuyUJdWKoWGD
          stance: supports
          locator: CBDB:458669
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

# 王駒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王駒 | accepted |
| bio.summary | 王駒，清人物。入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 458669） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王駒（CBDB 458669）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=458669&o=json)
