---
schema: wang-person/v1
id: p_zRfAMH39EM4tmccFUAC8rh
status: active
merged_into: null
display_name: 王師說
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_A45rEkF9K5TFBfGqETBUZZ
        subject_person_id: p_zRfAMH39EM4tmccFUAC8rh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師說
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_29Zsbep78rPZjK7XPeGFfT
          claim_id: c_A45rEkF9K5TFBfGqETBUZZ
          source_id: s_qmcYjoXJ8f21AuZiHvKyMx
          stance: supports
          locator: CBDB:555070
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（555070）
          source: &a1
            id: s_qmcYjoXJ8f21AuZiHvKyMx
            source_type: api_record
            title: 中国历代人物传记资料库：王師說（CBDB 555070）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555070&o=json
            external_identifier: CBDB:555070
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.627Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CNJ1kp525mC51YYsQ6YXFB
        subject_person_id: p_zRfAMH39EM4tmccFUAC8rh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師說，清人物。籍贯南召。（中国历代人物传记资料库 CBDB 555070）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DZrgBymH3zdDo5Z6gLhPgt
          claim_id: c_CNJ1kp525mC51YYsQ6YXFB
          source_id: s_qmcYjoXJ8f21AuZiHvKyMx
          stance: supports
          locator: CBDB:555070
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

# 王師說

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王師說 | accepted |
| bio.summary | 王師說，清人物。籍贯南召。（中国历代人物传记资料库 CBDB 555070） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王師說（CBDB 555070）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555070&o=json)
