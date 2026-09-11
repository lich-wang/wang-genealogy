---
schema: wang-person/v1
id: p_uJPRFTGYfwUYy563kt7EnD
status: active
merged_into: null
display_name: 王鑄
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KtSNZUqN6daPp1LfMtQW7F
        subject_person_id: p_uJPRFTGYfwUYy563kt7EnD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wQnWi3bcAJiB6yzjU6NWG6
          claim_id: c_KtSNZUqN6daPp1LfMtQW7F
          source_id: s_wYtGhuNiQohNsVy6SFqAAs
          stance: supports
          locator: CBDB:61589
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（61589）
          source: &a1
            id: s_wYtGhuNiQohNsVy6SFqAAs
            source_type: api_record
            title: 中国历代人物传记资料库：王鑄（CBDB 61589）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61589&o=json
            external_identifier: CBDB:61589
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.913Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jQNKu8uwDai9iaxmzXJN7Q
        subject_person_id: p_uJPRFTGYfwUYy563kt7EnD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑄，清人物。籍贯湖州府。（中国历代人物传记资料库 CBDB 61589）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-9VgzrwmD_yMtaD8blOej3
          claim_id: c_jQNKu8uwDai9iaxmzXJN7Q
          source_id: s_wYtGhuNiQohNsVy6SFqAAs
          stance: supports
          locator: CBDB:61589
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

# 王鑄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鑄 | accepted |
| bio.summary | 王鑄，清人物。籍贯湖州府。（中国历代人物传记资料库 CBDB 61589） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鑄（CBDB 61589）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61589&o=json)
