---
schema: wang-person/v1
id: p_DJYKxzcHeWe1q9J549ntUL
status: active
merged_into: null
display_name: 王一鳴
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_x311MixCWJ8jD21SWxy5Pa
        subject_person_id: p_DJYKxzcHeWe1q9J549ntUL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一鳴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_57TzJ6QNvmP5jEuiHL4oWh
          claim_id: c_x311MixCWJ8jD21SWxy5Pa
          source_id: s_Uft5yQHbDua62frDFcuMiE
          stance: supports
          locator: CBDB:544487
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（544487）
          source: &a1
            id: s_Uft5yQHbDua62frDFcuMiE
            source_type: api_record
            title: 中国历代人物传记资料库：王一鳴（CBDB 544487）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=544487&o=json
            external_identifier: CBDB:544487
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.494Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_337mtb3piHgnFnhCDdrCGQ
        subject_person_id: p_DJYKxzcHeWe1q9J549ntUL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一鳴，宋人物。籍贯江陰，入仕進士。（中国历代人物传记资料库 CBDB 544487）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eOYoQsD5ZaPTJa3nczUj0L
          claim_id: c_337mtb3piHgnFnhCDdrCGQ
          source_id: s_Uft5yQHbDua62frDFcuMiE
          stance: supports
          locator: CBDB:544487
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

# 王一鳴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一鳴 | accepted |
| bio.summary | 王一鳴，宋人物。籍贯江陰，入仕進士。（中国历代人物传记资料库 CBDB 544487） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王一鳴（CBDB 544487）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=544487&o=json)
