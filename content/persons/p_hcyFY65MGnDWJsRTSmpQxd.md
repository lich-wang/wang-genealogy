---
schema: wang-person/v1
id: p_hcyFY65MGnDWJsRTSmpQxd
status: active
merged_into: null
display_name: 王尚敬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TPjcQ7z3XwRvGBb3JxBho4
        subject_person_id: p_hcyFY65MGnDWJsRTSmpQxd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚敬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MYPKrZigZhaEvMRB1C1u7f
          claim_id: c_TPjcQ7z3XwRvGBb3JxBho4
          source_id: s_CdeqmeJqtZkiAo1tD9wGG7
          stance: supports
          locator: CBDB:541942
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（541942）
          source: &a1
            id: s_CdeqmeJqtZkiAo1tD9wGG7
            source_type: api_record
            title: 中国历代人物传记资料库：王尚敬（CBDB 541942）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=541942&o=json
            external_identifier: CBDB:541942
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.436Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wmNvKzbWHNE2pb1M1A1gbT
        subject_person_id: p_hcyFY65MGnDWJsRTSmpQxd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚敬，宋人物。籍贯果州，入仕進士。（中国历代人物传记资料库 CBDB 541942）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xPOM49X3186NwMk_1j2SvK
          claim_id: c_wmNvKzbWHNE2pb1M1A1gbT
          source_id: s_CdeqmeJqtZkiAo1tD9wGG7
          stance: supports
          locator: CBDB:541942
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

# 王尚敬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王尚敬 | accepted |
| bio.summary | 王尚敬，宋人物。籍贯果州，入仕進士。（中国历代人物传记资料库 CBDB 541942） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王尚敬（CBDB 541942）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=541942&o=json)
