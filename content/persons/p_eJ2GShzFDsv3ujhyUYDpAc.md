---
schema: wang-person/v1
id: p_eJ2GShzFDsv3ujhyUYDpAc
status: active
merged_into: null
display_name: 王鎬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wB1Fnm4WxdwKVhAs2dnjMA
        subject_person_id: p_eJ2GShzFDsv3ujhyUYDpAc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_t6YBD2ihjY6WJb797n2Qnk
          claim_id: c_wB1Fnm4WxdwKVhAs2dnjMA
          source_id: s_UreAt45zSxg3a8Mkkp1wXc
          stance: supports
          locator: CBDB:212643
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（212643）
          source: &a1
            id: s_UreAt45zSxg3a8Mkkp1wXc
            source_type: api_record
            title: 中国历代人物传记资料库：王鎬（CBDB 212643）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212643&o=json
            external_identifier: CBDB:212643
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.092Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4JG7nZ2YSZaNrfBJEvD7fE
        subject_person_id: p_eJ2GShzFDsv3ujhyUYDpAc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎬，明人物。萬曆二年進士，籍贯壽張。（中国历代人物传记资料库 CBDB 212643）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2EcrNjYv-LGOo0lkLtU82j
          claim_id: c_4JG7nZ2YSZaNrfBJEvD7fE
          source_id: s_UreAt45zSxg3a8Mkkp1wXc
          stance: supports
          locator: CBDB:212643
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

# 王鎬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎬 | accepted |
| bio.summary | 王鎬，明人物。萬曆二年進士，籍贯壽張。（中国历代人物传记资料库 CBDB 212643） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鎬（CBDB 212643）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212643&o=json)
