---
schema: wang-person/v1
id: p_JPXFEbGDrDLTc3NEdBCEQx
status: active
merged_into: null
display_name: 王長蔭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3GzLv42T7aZ5Bg54KGbYfe
        subject_person_id: p_JPXFEbGDrDLTc3NEdBCEQx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王長蔭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CP5p484JJdNrRHu7Kg7yaQ
          claim_id: c_3GzLv42T7aZ5Bg54KGbYfe
          source_id: s_LH5FyX6W78JSjJUKDqtHwz
          stance: supports
          locator: CBDB:640740
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640740）
          source: &a1
            id: s_LH5FyX6W78JSjJUKDqtHwz
            source_type: api_record
            title: 中国历代人物传记资料库：王長蔭（CBDB 640740）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640740&o=json
            external_identifier: CBDB:640740
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.189Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Cdvn7UThcBHuc8S38QNu4B
        subject_person_id: p_JPXFEbGDrDLTc3NEdBCEQx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王長蔭，清人物。籍贯宛平，入仕行伍，曾任巡捕北營遊擊。（中国历代人物传记资料库 CBDB 640740）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NxnzrcWKZWioPiIPuTWuOg
          claim_id: c_Cdvn7UThcBHuc8S38QNu4B
          source_id: s_LH5FyX6W78JSjJUKDqtHwz
          stance: supports
          locator: CBDB:640740
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

# 王長蔭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王長蔭 | accepted |
| bio.summary | 王長蔭，清人物。籍贯宛平，入仕行伍，曾任巡捕北營遊擊。（中国历代人物传记资料库 CBDB 640740） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王長蔭（CBDB 640740）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640740&o=json)
