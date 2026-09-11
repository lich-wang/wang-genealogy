---
schema: wang-person/v1
id: p_ZXCCHyWq79tSCS7LRL4gmZ
status: active
merged_into: null
display_name: 王爟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_in49pn3EHhAuV4oYo53o6A
        subject_person_id: p_ZXCCHyWq79tSCS7LRL4gmZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王爟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nc4FYcLgCLZuySZAAkvYMc
          claim_id: c_in49pn3EHhAuV4oYo53o6A
          source_id: s_fz4LbdjAN7XWQ7spAZq8As
          stance: supports
          locator: CBDB:249899
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（249899）
          source: &a1
            id: s_fz4LbdjAN7XWQ7spAZq8As
            source_type: api_record
            title: 中国历代人物传记资料库：王爟（CBDB 249899）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249899&o=json
            external_identifier: CBDB:249899
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.199Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Sfu7E5bCZ3Yv6UcHbD1LNG
        subject_person_id: p_ZXCCHyWq79tSCS7LRL4gmZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王爟，明人物。成化十一年進士，籍贯黃巖。（中国历代人物传记资料库 CBDB 249899）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GAAvliNbRpHPDesmCTY6KF
          claim_id: c_Sfu7E5bCZ3Yv6UcHbD1LNG
          source_id: s_fz4LbdjAN7XWQ7spAZq8As
          stance: supports
          locator: CBDB:249899
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

# 王爟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王爟 | accepted |
| bio.summary | 王爟，明人物。成化十一年進士，籍贯黃巖。（中国历代人物传记资料库 CBDB 249899） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王爟（CBDB 249899）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249899&o=json)
