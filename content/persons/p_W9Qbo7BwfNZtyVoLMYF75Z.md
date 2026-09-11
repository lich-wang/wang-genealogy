---
schema: wang-person/v1
id: p_W9Qbo7BwfNZtyVoLMYF75Z
status: active
merged_into: null
display_name: 王完
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4xVzaWMioiJ7N8VKBc49bf
        subject_person_id: p_W9Qbo7BwfNZtyVoLMYF75Z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王完
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_E6Mt3UgQX7FC8Y9aBEfsGV
          claim_id: c_4xVzaWMioiJ7N8VKBc49bf
          source_id: s_4r46bSDcb6bhtpxxMycoqw
          stance: supports
          locator: CBDB:315711
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（315711）
          source: &a1
            id: s_4r46bSDcb6bhtpxxMycoqw
            source_type: api_record
            title: 中国历代人物传记资料库：王完（CBDB 315711）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315711&o=json
            external_identifier: CBDB:315711
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.950Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XQR3kebWFwuCQGfjWnc1Jy
        subject_person_id: p_W9Qbo7BwfNZtyVoLMYF75Z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王完，明人物。嘉靖三十二年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 315711）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_s63moExZ0uAjze2dABvf3Q
          claim_id: c_XQR3kebWFwuCQGfjWnc1Jy
          source_id: s_4r46bSDcb6bhtpxxMycoqw
          stance: supports
          locator: CBDB:315711
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

# 王完

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王完 | accepted |
| bio.summary | 王完，明人物。嘉靖三十二年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 315711） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王完（CBDB 315711）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315711&o=json)
