---
schema: wang-person/v1
id: p_DzF1jDUDz7qRWM6cu1LBZA
status: active
merged_into: null
display_name: 王象賢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qKZkZA737Sk5AgGJEtbcb8
        subject_person_id: p_DzF1jDUDz7qRWM6cu1LBZA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王象賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oQVtw3S5U5M9gDcRNk1MFn
          claim_id: c_qKZkZA737Sk5AgGJEtbcb8
          source_id: s_1kr2JNDbwgUEgUCsUaDc57
          stance: supports
          locator: CBDB:640300
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640300）
          source: &a1
            id: s_1kr2JNDbwgUEgUCsUaDc57
            source_type: api_record
            title: 中国历代人物传记资料库：王象賢（CBDB 640300）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640300&o=json
            external_identifier: CBDB:640300
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.072Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8VtStAFE3moWP2jBeyQAZG
        subject_person_id: p_DzF1jDUDz7qRWM6cu1LBZA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王象賢，清人物。籍贯鳳翔，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 640300）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KJxBg8Et1EPfMMgM5XdoUM
          claim_id: c_8VtStAFE3moWP2jBeyQAZG
          source_id: s_1kr2JNDbwgUEgUCsUaDc57
          stance: supports
          locator: CBDB:640300
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

# 王象賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王象賢 | accepted |
| bio.summary | 王象賢，清人物。籍贯鳳翔，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 640300） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王象賢（CBDB 640300）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640300&o=json)
