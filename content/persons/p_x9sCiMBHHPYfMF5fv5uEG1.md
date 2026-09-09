---
schema: wang-person/v1
id: p_x9sCiMBHHPYfMF5fv5uEG1
status: active
merged_into: null
display_name: 王允正
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Rst8yBeXuLfo7AQimFAEbH
        subject_person_id: p_x9sCiMBHHPYfMF5fv5uEG1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允正
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_f6MX7fFRwhK8AhgQJUyy3J
          claim_id: c_Rst8yBeXuLfo7AQimFAEbH
          source_id: s_E5ya4KuQyBbV9H2RQY4R34
          stance: supports
          locator: CBDB:700894
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（700894）
          source: &a1
            id: s_E5ya4KuQyBbV9H2RQY4R34
            source_type: api_record
            title: 中国历代人物传记资料库：王允正（CBDB 700894）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700894&o=json
            external_identifier: CBDB:700894
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.599Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tT53aGEEHQAQw7AmhHLV27
        subject_person_id: p_x9sCiMBHHPYfMF5fv5uEG1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nFHWqzbLVv9Pz13WXWfddM
          claim_id: c_tT53aGEEHQAQw7AmhHLV27
          source_id: s_E5ya4KuQyBbV9H2RQY4R34
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王允正

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王允正 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王允正（CBDB 700894）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700894&o=json)
