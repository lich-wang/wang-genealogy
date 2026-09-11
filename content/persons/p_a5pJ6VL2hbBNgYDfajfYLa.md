---
schema: wang-person/v1
id: p_a5pJ6VL2hbBNgYDfajfYLa
status: active
merged_into: null
display_name: 王序
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wBC24EDHMkRo2abaRctbv6
        subject_person_id: p_a5pJ6VL2hbBNgYDfajfYLa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王序
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CxWtzU275rt1Epk4gE4LGv
          claim_id: c_wBC24EDHMkRo2abaRctbv6
          source_id: s_xUD2c2WZPV6cafNDS3YiFh
          stance: supports
          locator: CBDB:22021
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22021）
          source: &a1
            id: s_xUD2c2WZPV6cafNDS3YiFh
            source_type: api_record
            title: 中国历代人物传记资料库：王序（CBDB 22021）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22021&o=json
            external_identifier: CBDB:22021
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.796Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_54sdvtM6Qayxaqtxzzj8XM
        subject_person_id: p_a5pJ6VL2hbBNgYDfajfYLa
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1073年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eB5MZ7iQp1BHxKHFax2drZ
          claim_id: c_54sdvtM6Qayxaqtxzzj8XM
          source_id: s_xUD2c2WZPV6cafNDS3YiFh
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_F8NahuUy6VCZCDDYAGXkcb
        subject_person_id: p_a5pJ6VL2hbBNgYDfajfYLa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王序（生于1073年），宋人物。籍贯榮德，入仕科舉學校: 恩賜出身、特賜出身等，曾任修撰、直龍圖閣。（中国历代人物传记资料库 CBDB 22021）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XtohfyPh5ILNDFhnwemj9U
          claim_id: c_F8NahuUy6VCZCDDYAGXkcb
          source_id: s_xUD2c2WZPV6cafNDS3YiFh
          stance: supports
          locator: CBDB:22021
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

# 王序

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王序 | accepted |
| birth.date | 1073年 | accepted |
| bio.summary | 王序（生于1073年），宋人物。籍贯榮德，入仕科舉學校: 恩賜出身、特賜出身等，曾任修撰、直龍圖閣。（中国历代人物传记资料库 CBDB 22021） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王序（CBDB 22021）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22021&o=json)
