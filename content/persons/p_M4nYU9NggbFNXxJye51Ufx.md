---
schema: wang-person/v1
id: p_M4nYU9NggbFNXxJye51Ufx
status: active
merged_into: null
display_name: 陳氏
revision: 1
cbdb_id: 239112
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CHi0ZwJueInCQ7l1aOzDv-
        subject_person_id: p_M4nYU9NggbFNXxJye51Ufx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陳氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PcwG8Jv5r5XcBXWZL96l6l
          claim_id: c_CHi0ZwJueInCQ7l1aOzDv-
          source_id: s_ytpZG6Jps8ECHU9-5u35_6
          stance: supports
          locator: CBDB:239112
          quotation: null
          interpretation_note: CBDB 明确记录的王鎮配偶
          source: &a1
            id: s_ytpZG6Jps8ECHU9-5u35_6
            source_type: api_record
            title: 中国历代人物传记资料库：陳氏(王鎮妻)（CBDB 239112）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239112&o=json
            external_identifier: CBDB:239112
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_eco5AFtIH9U4VTypJMwNwL
        subject_person_id: p_EKnyL5yNzB3UQXTrkLtsAg
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_M4nYU9NggbFNXxJye51Ufx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DZnm8TZw13XRvaSTQrunQo
          claim_id: c_eco5AFtIH9U4VTypJMwNwL
          source_id: s_ytpZG6Jps8ECHU9-5u35_6
          stance: supports
          locator: 正统十年進士登科錄:一卷，第二甲第二十八名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_EKnyL5yNzB3UQXTrkLtsAg
        status: active
        display_name: 王鎮
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 陳氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 陳氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_EKnyL5yNzB3UQXTrkLtsAg | 王鎮 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳氏(王鎮妻)（CBDB 239112）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239112&o=json)
