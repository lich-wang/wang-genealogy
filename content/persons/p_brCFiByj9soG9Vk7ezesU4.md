---
schema: wang-person/v1
id: p_brCFiByj9soG9Vk7ezesU4
status: active
merged_into: null
display_name: 王家訓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_G2T9b9YDEWJhU6sW9nXhWk
        subject_person_id: p_brCFiByj9soG9Vk7ezesU4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家訓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MTrp8irZtDr6ksPdyaimST
          claim_id: c_G2T9b9YDEWJhU6sW9nXhWk
          source_id: s_E25JUvu1r6cQAE2kL9uCd3
          stance: supports
          locator: CBDB:637217
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637217）
          source: &a1
            id: s_E25JUvu1r6cQAE2kL9uCd3
            source_type: api_record
            title: 中国历代人物传记资料库：王家訓（CBDB 637217）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637217&o=json
            external_identifier: CBDB:637217
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.240Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FGd39TnhyUFVfHzQkgi6BD
        subject_person_id: p_brCFiByj9soG9Vk7ezesU4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王家訓，清人物。籍贯奉天府，入仕學校: 生員(庠生)，曾任知縣。（中国历代人物传记资料库 CBDB 637217）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wLMs6SytIiDtpP3bJHS6I2
          claim_id: c_FGd39TnhyUFVfHzQkgi6BD
          source_id: s_E25JUvu1r6cQAE2kL9uCd3
          stance: supports
          locator: CBDB:637217
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

# 王家訓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王家訓 | accepted |
| bio.summary | 王家訓，清人物。籍贯奉天府，入仕學校: 生員(庠生)，曾任知縣。（中国历代人物传记资料库 CBDB 637217） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王家訓（CBDB 637217）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637217&o=json)
