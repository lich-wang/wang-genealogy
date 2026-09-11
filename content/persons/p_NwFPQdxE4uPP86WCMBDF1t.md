---
schema: wang-person/v1
id: p_NwFPQdxE4uPP86WCMBDF1t
status: active
merged_into: null
display_name: 王鍾鈁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FVNg8Faj6GFqaApwYkezM7
        subject_person_id: p_NwFPQdxE4uPP86WCMBDF1t
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍾鈁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6wRwUKA5gddrwYKMqTDoJq
          claim_id: c_FVNg8Faj6GFqaApwYkezM7
          source_id: s_wAc6vSt7JA3UX1EmB26Cy9
          stance: supports
          locator: CBDB:640683
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640683）
          source: &a1
            id: s_wAc6vSt7JA3UX1EmB26Cy9
            source_type: api_record
            title: 中国历代人物传记资料库：王鍾鈁（CBDB 640683）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640683&o=json
            external_identifier: CBDB:640683
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.330Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DhyTNRi45qKNgM9TuTFQWN
        subject_person_id: p_NwFPQdxE4uPP86WCMBDF1t
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍾鈁，清人物。籍贯嘉善，入仕監生，曾任同知、知縣。（中国历代人物传记资料库 CBDB 640683）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BNtlU61cw_RKgU3BiWxCzd
          claim_id: c_DhyTNRi45qKNgM9TuTFQWN
          source_id: s_wAc6vSt7JA3UX1EmB26Cy9
          stance: supports
          locator: CBDB:640683
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

# 王鍾鈁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鍾鈁 | accepted |
| bio.summary | 王鍾鈁，清人物。籍贯嘉善，入仕監生，曾任同知、知縣。（中国历代人物传记资料库 CBDB 640683） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鍾鈁（CBDB 640683）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640683&o=json)
