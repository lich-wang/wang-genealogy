---
schema: wang-person/v1
id: p_nUdPoYJV8uUA9tUdEh3D5u
status: active
merged_into: null
display_name: 王同治
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_t965NMaqFVokPwDUKZEmq6
        subject_person_id: p_nUdPoYJV8uUA9tUdEh3D5u
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同治
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9kC1WU36BUF6JW7fhKgYE9
          claim_id: c_t965NMaqFVokPwDUKZEmq6
          source_id: s_tVaCXFcXHG4wKHngs2xNDT
          stance: supports
          locator: CBDB:343627
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343627）
          source: &a1
            id: s_tVaCXFcXHG4wKHngs2xNDT
            source_type: api_record
            title: 中国历代人物传记资料库：王同治（CBDB 343627）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343627&o=json
            external_identifier: CBDB:343627
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.426Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QYRYtsJmQqhyVGh4zz7BR6
        subject_person_id: p_nUdPoYJV8uUA9tUdEh3D5u
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同治，清人物。明清進士進士，籍贯海寧州，入仕進士。（中国历代人物传记资料库 CBDB 343627）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Cx1IUIuf_Ty2PDshnWC3v1
          claim_id: c_QYRYtsJmQqhyVGh4zz7BR6
          source_id: s_tVaCXFcXHG4wKHngs2xNDT
          stance: supports
          locator: CBDB:343627
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

# 王同治

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王同治 | accepted |
| bio.summary | 王同治，清人物。明清進士進士，籍贯海寧州，入仕進士。（中国历代人物传记资料库 CBDB 343627） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王同治（CBDB 343627）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343627&o=json)
