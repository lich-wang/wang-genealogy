---
schema: wang-person/v1
id: p_Hi5DjRHP3ffpzK5oYwCsa1
status: active
merged_into: null
display_name: 王闢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nAkqHKFWBGH6FtetAYJJRf
        subject_person_id: p_Hi5DjRHP3ffpzK5oYwCsa1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王闢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_N7XCf6vAxG1U9rmp6K7x9T
          claim_id: c_nAkqHKFWBGH6FtetAYJJRf
          source_id: s_f49F2JaAabHz15wtGmEo8P
          stance: supports
          locator: CBDB:532415
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（532415）
          source: &a1
            id: s_f49F2JaAabHz15wtGmEo8P
            source_type: api_record
            title: 中国历代人物传记资料库：王闢（CBDB 532415）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=532415&o=json
            external_identifier: CBDB:532415
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.375Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1owN56f3JBUB8WwPRwXLk8
        subject_person_id: p_Hi5DjRHP3ffpzK5oYwCsa1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王闢，宋人物。籍贯晉江，入仕特奏名進士、特奏名諸科 、大挑。（中国历代人物传记资料库 CBDB 532415）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qXw4Z7F6sf96gjnuMPuYrZ
          claim_id: c_1owN56f3JBUB8WwPRwXLk8
          source_id: s_f49F2JaAabHz15wtGmEo8P
          stance: supports
          locator: CBDB:532415
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

# 王闢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王闢 | accepted |
| bio.summary | 王闢，宋人物。籍贯晉江，入仕特奏名進士、特奏名諸科 、大挑。（中国历代人物传记资料库 CBDB 532415） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王闢（CBDB 532415）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=532415&o=json)
