---
schema: wang-person/v1
id: p_k98FW9NDox5jqCiWwoeSzY
status: active
merged_into: null
display_name: 王喆生
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aVh9w3VEsdd2wT998ttKEH
        subject_person_id: p_k98FW9NDox5jqCiWwoeSzY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王喆生
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GtnMbaN9Lg2hnE1Si21Q7M
          claim_id: c_aVh9w3VEsdd2wT998ttKEH
          source_id: s_EXvzJiuK4wGNE7VpK73MVq
          stance: supports
          locator: CBDB:69387
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69387）
          source: &a1
            id: s_EXvzJiuK4wGNE7VpK73MVq
            source_type: api_record
            title: 中国历代人物传记资料库：王喆生（CBDB 69387）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69387&o=json
            external_identifier: CBDB:69387
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.241Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_3MHQasec47g31Fv756WMvW
        subject_person_id: p_k98FW9NDox5jqCiWwoeSzY
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1648年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BAijNKDxJ3h6dL8x9RCHTD
          claim_id: c_3MHQasec47g31Fv756WMvW
          source_id: s_EXvzJiuK4wGNE7VpK73MVq
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_WL2gujPzsED56i3FiA3Cmn
        subject_person_id: p_k98FW9NDox5jqCiWwoeSzY
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1728年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QLzM7YPDBqYnTNWCFk6wB6
          claim_id: c_WL2gujPzsED56i3FiA3Cmn
          source_id: s_EXvzJiuK4wGNE7VpK73MVq
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4Fgi6NpW6u6HGRAydUWAp7
        subject_person_id: p_k98FW9NDox5jqCiWwoeSzY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王喆生（1648年—1728年），清人物。明清進士進士，籍贯崑山，入仕進士，曾任編修、同考官。（中国历代人物传记资料库 CBDB 69387）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cIRpsvD2lGP8RWTg2hW5sH
          claim_id: c_4Fgi6NpW6u6HGRAydUWAp7
          source_id: s_EXvzJiuK4wGNE7VpK73MVq
          stance: supports
          locator: CBDB:69387
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

# 王喆生

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王喆生 | accepted |
| birth.date | 1648年 | accepted |
| death.date | 1728年 | accepted |
| bio.summary | 王喆生（1648年—1728年），清人物。明清進士進士，籍贯崑山，入仕進士，曾任編修、同考官。（中国历代人物传记资料库 CBDB 69387） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王喆生（CBDB 69387）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69387&o=json)
