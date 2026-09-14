---
schema: wang-person/v1
id: p_bL76HK8tPBRuUJPkdViswC
status: active
merged_into: null
display_name: 王叔杲
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QYLhG1ygV8Mz5FmD4kNEKy
        subject_person_id: p_bL76HK8tPBRuUJPkdViswC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔杲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_C6DENaY3ddbG3P7HV2hkUo
          claim_id: c_QYLhG1ygV8Mz5FmD4kNEKy
          source_id: s_pr4PvwcQRab2hH5K6NgDD2
          stance: supports
          locator: CBDB:210729
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（210729）
          source: &a1
            id: s_pr4PvwcQRab2hH5K6NgDD2
            source_type: api_record
            title: 中国历代人物传记资料库：王叔杲（CBDB 210729）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210729&o=json
            external_identifier: CBDB:210729
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.019Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tnxeDwiLEaGBBQUezUQVY2
        subject_person_id: p_bL76HK8tPBRuUJPkdViswC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔杲，明人物。隆慶五年進士，籍贯永嘉，曾任知府。（中国历代人物传记资料库 CBDB 210729）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qYYABVKArc-ow58MOqzK65
          claim_id: c_tnxeDwiLEaGBBQUezUQVY2
          source_id: s_pr4PvwcQRab2hH5K6NgDD2
          stance: supports
          locator: CBDB:210729
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_9Zm5Zd7WyUGJZd3XTcDgg3
        subject_person_id: p_dXbTkC8fTHTjd8NRUY9aDL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bL76HK8tPBRuUJPkdViswC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QX7uunpUc4-iPmt0aBpiRt
          claim_id: c_9Zm5Zd7WyUGJZd3XTcDgg3
          source_id: s_kVMKd2czdCwu0faPP209pi
          stance: supports
          locator: CBDB：兄弟 王良心（205923）之父／母 王弼
          quotation: null
          interpretation_note: 由兄弟关系推断：王叔杲 与 王良心 为同胞（CBDB 记「弟」），王良心 之父／母即 王叔杲 之父／母。
          source:
            id: s_kVMKd2czdCwu0faPP209pi
            source_type: api_record
            title: 中国历代人物传记资料库：王叔杲（CBDB 210729）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210729&o=json
            external_identifier: CBDB:210729
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dXbTkC8fTHTjd8NRUY9aDL
        status: active
        display_name: 王弼
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_tUnfHpLi4kxFDth20izkrY
        subject_person_id: p_bL76HK8tPBRuUJPkdViswC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sAZUvMC7u8bMFh2JrU8PMj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WcXoehWgPooq0lq4L9s8pm
          claim_id: c_tUnfHpLi4kxFDth20izkrY
          source_id: s_kVMKd2czdCwu0faPP209pi
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205923 王良心）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_kVMKd2czdCwu0faPP209pi
            source_type: api_record
            title: 中国历代人物传记资料库：王叔杲（CBDB 210729）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210729&o=json
            external_identifier: CBDB:210729
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sAZUvMC7u8bMFh2JrU8PMj
        status: active
        display_name: 王良心
        merged_into_person_id: null
---

# 王叔杲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王叔杲 | accepted |
| bio.summary | 王叔杲，明人物。隆慶五年進士，籍贯永嘉，曾任知府。（中国历代人物传记资料库 CBDB 210729） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dXbTkC8fTHTjd8NRUY9aDL | 王弼 | accepted |
| other | p_sAZUvMC7u8bMFh2JrU8PMj | 王良心 | accepted |

## 外部来源

- [中国历代人物传记资料库：王叔杲（CBDB 210729）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210729&o=json)
