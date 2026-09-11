---
schema: wang-person/v1
id: p_UNCDWBNCmJ617MccmNVv4R
status: active
merged_into: null
display_name: 王恆
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_D1BC1KtWCjvHP5Eb7DGP5g
        subject_person_id: p_UNCDWBNCmJ617MccmNVv4R
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ERMK1eAAgCMrg7NJHYU3pp
          claim_id: c_D1BC1KtWCjvHP5Eb7DGP5g
          source_id: s_jS5LH5oKa51FdEyiMYBn6A
          stance: supports
          locator: CBDB:159060
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（159060）
          source: &a1
            id: s_jS5LH5oKa51FdEyiMYBn6A
            source_type: api_record
            title: 中国历代人物传记资料库：王恆（CBDB 159060）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159060&o=json
            external_identifier: CBDB:159060
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.930Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hVKKXhKBP45yp3rH6akKNd
        subject_person_id: p_UNCDWBNCmJ617MccmNVv4R
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恆，唐人物。籍贯三原。（中国历代人物传记资料库 CBDB 159060）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hbgqNXut721NSuVcGrD1J2
          claim_id: c_hVKKXhKBP45yp3rH6akKNd
          source_id: s_jS5LH5oKa51FdEyiMYBn6A
          stance: supports
          locator: CBDB:159060
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_ftDCGHK5tef1u1QfAT9yjK
        subject_person_id: p_UNCDWBNCmJ617MccmNVv4R
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZuFC93AY6BQ8RYk1LeSddc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vmxvrHvxe63jijz9808f-U
          claim_id: c_ftDCGHK5tef1u1QfAT9yjK
          source_id: s_jS5LH5oKa51FdEyiMYBn6A
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dazhong 28：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ZuFC93AY6BQ8RYk1LeSddc
        status: active
        display_name: 王常散
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王恆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恆 | accepted |
| bio.summary | 王恆，唐人物。籍贯三原。（中国历代人物传记资料库 CBDB 159060） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ZuFC93AY6BQ8RYk1LeSddc | 王常散 | accepted |

## 外部来源

- [中国历代人物传记资料库：王恆（CBDB 159060）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159060&o=json)
