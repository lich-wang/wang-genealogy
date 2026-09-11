---
schema: wang-person/v1
id: p_rn6XWBaNjsWukLVnrYHKQh
status: active
merged_into: null
display_name: 王德安
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QXZjAy4nJ2R2DdzYaEAN4o
        subject_person_id: p_rn6XWBaNjsWukLVnrYHKQh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德安
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AHQ1h3QSp22i8VWieJiwRx
          claim_id: c_QXZjAy4nJ2R2DdzYaEAN4o
          source_id: s_RdRzVbfEP4TPjaGE473ZEn
          stance: supports
          locator: CBDB:261581
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（261581）
          source: &a1
            id: s_RdRzVbfEP4TPjaGE473ZEn
            source_type: api_record
            title: 中国历代人物传记资料库：王德安（CBDB 261581）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261581&o=json
            external_identifier: CBDB:261581
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.548Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8JDCZNHy35a3eHne2v6HQF
        subject_person_id: p_rn6XWBaNjsWukLVnrYHKQh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德安，明人物。景泰五年進士，籍贯平夷長官司。（中国历代人物传记资料库 CBDB 261581）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rOEYVewO2fAtXLXR_LMHIz
          claim_id: c_8JDCZNHy35a3eHne2v6HQF
          source_id: s_RdRzVbfEP4TPjaGE473ZEn
          stance: supports
          locator: CBDB:261581
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

# 王德安

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德安 | accepted |
| bio.summary | 王德安，明人物。景泰五年進士，籍贯平夷長官司。（中国历代人物传记资料库 CBDB 261581） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王德安（CBDB 261581）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261581&o=json)
