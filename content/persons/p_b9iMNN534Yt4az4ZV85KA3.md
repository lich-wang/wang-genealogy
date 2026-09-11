---
schema: wang-person/v1
id: p_b9iMNN534Yt4az4ZV85KA3
status: active
merged_into: null
display_name: 王用綬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ao4e6sTSKQGr7963m5tsV1
        subject_person_id: p_b9iMNN534Yt4az4ZV85KA3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用綬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MwFgfXb32TLHXMLZ7XiR7S
          claim_id: c_Ao4e6sTSKQGr7963m5tsV1
          source_id: s_rf31gEKo2Fuce2wj7B83LG
          stance: supports
          locator: CBDB:639473
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639473）
          source: &a1
            id: s_rf31gEKo2Fuce2wj7B83LG
            source_type: api_record
            title: 中国历代人物传记资料库：王用綬（CBDB 639473）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639473&o=json
            external_identifier: CBDB:639473
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.935Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8fWDcY4XtUhPtHsK5opx6N
        subject_person_id: p_b9iMNN534Yt4az4ZV85KA3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用綬，清人物。籍贯山陰，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 639473）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IYNgz9eLbkN-aJTVniV2wm
          claim_id: c_8fWDcY4XtUhPtHsK5opx6N
          source_id: s_rf31gEKo2Fuce2wj7B83LG
          stance: supports
          locator: CBDB:639473
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

# 王用綬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王用綬 | accepted |
| bio.summary | 王用綬，清人物。籍贯山陰，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 639473） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王用綬（CBDB 639473）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639473&o=json)
