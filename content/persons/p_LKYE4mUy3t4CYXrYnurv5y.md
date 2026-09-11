---
schema: wang-person/v1
id: p_LKYE4mUy3t4CYXrYnurv5y
status: active
merged_into: null
display_name: 王鳳述
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6eJfJZsxFCvJ4nmnifMTyi
        subject_person_id: p_LKYE4mUy3t4CYXrYnurv5y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳳述
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hyRDnzCGiQcypaBmBCGwnn
          claim_id: c_6eJfJZsxFCvJ4nmnifMTyi
          source_id: s_Ewk1GJRE16PUJy9zeCCMd8
          stance: supports
          locator: CBDB:640963
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640963）
          source: &a1
            id: s_Ewk1GJRE16PUJy9zeCCMd8
            source_type: api_record
            title: 中国历代人物传记资料库：王鳳述（CBDB 640963）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640963&o=json
            external_identifier: CBDB:640963
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.429Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gJ14Spns5Uqi6nPQW5d5Va
        subject_person_id: p_LKYE4mUy3t4CYXrYnurv5y
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳳述，清人物。籍贯大興，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 640963）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__okvPy9BBum1q5o_I4KIbA
          claim_id: c_gJ14Spns5Uqi6nPQW5d5Va
          source_id: s_Ewk1GJRE16PUJy9zeCCMd8
          stance: supports
          locator: CBDB:640963
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

# 王鳳述

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鳳述 | accepted |
| bio.summary | 王鳳述，清人物。籍贯大興，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 640963） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鳳述（CBDB 640963）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640963&o=json)
