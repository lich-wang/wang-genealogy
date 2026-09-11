---
schema: wang-person/v1
id: p_SMPEnSCDy72thopzUJGJjG
status: active
merged_into: null
display_name: 王雨谷
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JkgFoTxtU9oXUY1a7uyfqJ
        subject_person_id: p_SMPEnSCDy72thopzUJGJjG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雨谷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kdo9a5MDMsBXFqEk5aQPk4
          claim_id: c_JkgFoTxtU9oXUY1a7uyfqJ
          source_id: s_1iwMsb2LERhN9X744CJNYh
          stance: supports
          locator: CBDB:71740
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71740）
          source: &a1
            id: s_1iwMsb2LERhN9X744CJNYh
            source_type: api_record
            title: 中国历代人物传记资料库：王雨谷（CBDB 71740）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71740&o=json
            external_identifier: CBDB:71740
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.851Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_yj7sWP1R131Cjut4RgJe4N
        subject_person_id: p_SMPEnSCDy72thopzUJGJjG
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1823年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CxRYKrSV3BcPWY4LFT1yTJ
          claim_id: c_yj7sWP1R131Cjut4RgJe4N
          source_id: s_1iwMsb2LERhN9X744CJNYh
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KFDbqN77JVXnKeNnLJPwue
        subject_person_id: p_SMPEnSCDy72thopzUJGJjG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雨谷（生于1823年），清人物。籍贯平定直隸州。（中国历代人物传记资料库 CBDB 71740）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_w5WMZFYZMkCHxZYSeHQQG7
          claim_id: c_KFDbqN77JVXnKeNnLJPwue
          source_id: s_1iwMsb2LERhN9X744CJNYh
          stance: supports
          locator: CBDB:71740
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

# 王雨谷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王雨谷 | accepted |
| birth.date | 1823年 | accepted |
| bio.summary | 王雨谷（生于1823年），清人物。籍贯平定直隸州。（中国历代人物传记资料库 CBDB 71740） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王雨谷（CBDB 71740）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71740&o=json)
