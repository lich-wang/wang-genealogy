---
schema: wang-person/v1
id: p_6LDt4fKYGZtPcBcwPx7Zbf
status: active
merged_into: null
display_name: 王廷鳳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GzKghbAYbwKM4KwfyQXFxc
        subject_person_id: p_6LDt4fKYGZtPcBcwPx7Zbf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷鳳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vKGqwz2fzXNmHC4nBMWfxD
          claim_id: c_GzKghbAYbwKM4KwfyQXFxc
          source_id: s_8r7D2qJuBJ5ekuWTb8NVD9
          stance: supports
          locator: CBDB:637580
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637580）
          source: &a1
            id: s_8r7D2qJuBJ5ekuWTb8NVD9
            source_type: api_record
            title: 中国历代人物传记资料库：王廷鳳（CBDB 637580）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637580&o=json
            external_identifier: CBDB:637580
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.460Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_T4PYQkNVBKhYTPZcCejHhr
        subject_person_id: p_6LDt4fKYGZtPcBcwPx7Zbf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷鳳，清人物。籍贯桂林府，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 637580）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_im1Gx-8A9VJz-ctjrJtjPJ
          claim_id: c_T4PYQkNVBKhYTPZcCejHhr
          source_id: s_8r7D2qJuBJ5ekuWTb8NVD9
          stance: supports
          locator: CBDB:637580
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

# 王廷鳳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷鳳 | accepted |
| bio.summary | 王廷鳳，清人物。籍贯桂林府，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 637580） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷鳳（CBDB 637580）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637580&o=json)
