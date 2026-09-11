---
schema: wang-person/v1
id: p_2EfMZkQk81KS57VSPMi2J4
status: active
merged_into: null
display_name: 王國棟
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fquFWZvxVEfaWKFM1Uruu8
        subject_person_id: p_2EfMZkQk81KS57VSPMi2J4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國棟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Lgx4k1TK5Jd2JqKuBDEZmV
          claim_id: c_fquFWZvxVEfaWKFM1Uruu8
          source_id: s_5jffiP2hWVwSEFfBYB1tuQ
          stance: supports
          locator: CBDB:294343
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（294343）
          source: &a1
            id: s_5jffiP2hWVwSEFfBYB1tuQ
            source_type: api_record
            title: 中国历代人物传记资料库：王國棟（CBDB 294343）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294343&o=json
            external_identifier: CBDB:294343
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.453Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ap8yYYW8zURrwWjy1L9E5Z
        subject_person_id: p_2EfMZkQk81KS57VSPMi2J4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國棟，明人物。嘉靖十一年進士，入仕武生員，曾任遊擊將軍。（中国历代人物传记资料库 CBDB 294343）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_a3KiQM_p6jtHjVmk-Ga0L_
          claim_id: c_Ap8yYYW8zURrwWjy1L9E5Z
          source_id: s_5jffiP2hWVwSEFfBYB1tuQ
          stance: supports
          locator: CBDB:294343
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
  ancestors:
    - claim:
        id: c_uPkr4uZ_2JxcCvMz0URHe9
        subject_person_id: p_AKiZ73AHqEtzATAkDq6m9S
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2EfMZkQk81KS57VSPMi2J4
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9Q2CboJK1mD6sPLzvlR405
          claim_id: c_uPkr4uZ_2JxcCvMz0URHe9
          source_id: s_5jffiP2hWVwSEFfBYB1tuQ
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第一百九十四名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_AKiZ73AHqEtzATAkDq6m9S
        status: active
        display_name: 王瑛
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王國棟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國棟 | accepted |
| bio.summary | 王國棟，明人物。嘉靖十一年進士，入仕武生員，曾任遊擊將軍。（中国历代人物传记资料库 CBDB 294343） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_AKiZ73AHqEtzATAkDq6m9S | 王瑛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王國棟（CBDB 294343）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294343&o=json)
