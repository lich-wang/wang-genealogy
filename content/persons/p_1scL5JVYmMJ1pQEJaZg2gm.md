---
schema: wang-person/v1
id: p_1scL5JVYmMJ1pQEJaZg2gm
status: active
merged_into: null
display_name: 王開袓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_D2bXyfnKc4UV3qixJSafdU
        subject_person_id: p_1scL5JVYmMJ1pQEJaZg2gm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王開袓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5U3SvJPKGw9Fs7wDcUmJX1
          claim_id: c_D2bXyfnKc4UV3qixJSafdU
          source_id: s_WhKQQGuigEdJx8Xg55CePa
          stance: supports
          locator: CBDB:545177
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（545177）
          source: &a1
            id: s_WhKQQGuigEdJx8Xg55CePa
            source_type: api_record
            title: 中国历代人物传记资料库：王開袓（CBDB 545177）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=545177&o=json
            external_identifier: CBDB:545177
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.466Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_S8A7Qbyb1SA9UTBXTh47j8
        subject_person_id: p_1scL5JVYmMJ1pQEJaZg2gm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王開袓，宋人物。籍贯永嘉，入仕進士。（中国历代人物传记资料库 CBDB 545177）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8FvfSmrcFD3Zp8Xw9ea_G9
          claim_id: c_S8A7Qbyb1SA9UTBXTh47j8
          source_id: s_WhKQQGuigEdJx8Xg55CePa
          stance: supports
          locator: CBDB:545177
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

# 王開袓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王開袓 | accepted |
| bio.summary | 王開袓，宋人物。籍贯永嘉，入仕進士。（中国历代人物传记资料库 CBDB 545177） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王開袓（CBDB 545177）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=545177&o=json)
