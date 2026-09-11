---
schema: wang-person/v1
id: p_JScnAPLR63GMG5DbPHaS7r
status: active
merged_into: null
display_name: 王績著
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Phj4i2qANfjf4d7MXzd859
        subject_person_id: p_JScnAPLR63GMG5DbPHaS7r
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王績著
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zZw3eC2HmYuTywF4wneSWk
          claim_id: c_Phj4i2qANfjf4d7MXzd859
          source_id: s_hiLped2t8ghCXzEmiLnHV6
          stance: supports
          locator: CBDB:639856
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639856）
          source: &a1
            id: s_hiLped2t8ghCXzEmiLnHV6
            source_type: api_record
            title: 中国历代人物传记资料库：王績著（CBDB 639856）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639856&o=json
            external_identifier: CBDB:639856
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.065Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oshd6JNk45ga1oTACFoFHb
        subject_person_id: p_JScnAPLR63GMG5DbPHaS7r
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王績著，清人物。籍贯武清，入仕鄉貢舉人，曾任知府、知縣。（中国历代人物传记资料库 CBDB 639856）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lpyiyTQjWnr20Enosqmju1
          claim_id: c_oshd6JNk45ga1oTACFoFHb
          source_id: s_hiLped2t8ghCXzEmiLnHV6
          stance: supports
          locator: CBDB:639856
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

# 王績著

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王績著 | accepted |
| bio.summary | 王績著，清人物。籍贯武清，入仕鄉貢舉人，曾任知府、知縣。（中国历代人物传记资料库 CBDB 639856） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王績著（CBDB 639856）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639856&o=json)
