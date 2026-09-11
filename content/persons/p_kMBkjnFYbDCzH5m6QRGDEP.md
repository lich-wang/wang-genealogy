---
schema: wang-person/v1
id: p_kMBkjnFYbDCzH5m6QRGDEP
status: active
merged_into: null
display_name: 王國器
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1xuVitpQVon7t2zKPS5WE9
        subject_person_id: p_kMBkjnFYbDCzH5m6QRGDEP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國器
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tEYKtxy8cb5WFbaj3BnWGe
          claim_id: c_1xuVitpQVon7t2zKPS5WE9
          source_id: s_eTe3JaVjquQgpvfEg2keJu
          stance: supports
          locator: CBDB:704006
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（704006）
          source: &a1
            id: s_eTe3JaVjquQgpvfEg2keJu
            source_type: api_record
            title: 中国历代人物传记资料库：王國器（CBDB 704006）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=704006&o=json
            external_identifier: CBDB:704006
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.834Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_p27nGiL7snFo9d4NEpUWHP
        subject_person_id: p_kMBkjnFYbDCzH5m6QRGDEP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王國器，清人物。籍贯上虞，身份为醫生，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 704006）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_G8JceTGMElkT_pX5Dkzz9U
          claim_id: c_p27nGiL7snFo9d4NEpUWHP
          source_id: s_eTe3JaVjquQgpvfEg2keJu
          stance: supports
          locator: CBDB:704006
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

# 王國器

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國器 | accepted |
| bio.summary | 王國器，清人物。籍贯上虞，身份为醫生，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 704006） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國器（CBDB 704006）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=704006&o=json)
