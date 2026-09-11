---
schema: wang-person/v1
id: p_w2oMVjETU96nTNp41FWQqY
status: active
merged_into: null
display_name: 王光輔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bNAYQcUVP66Tt3Lk31rmNZ
        subject_person_id: p_w2oMVjETU96nTNp41FWQqY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光輔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bDgFsk2JhTdQW9H2mxWuCW
          claim_id: c_bNAYQcUVP66Tt3Lk31rmNZ
          source_id: s_APghkz8NtNpGKb2L3RBGEW
          stance: supports
          locator: CBDB:379658
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（379658）
          source: &a1
            id: s_APghkz8NtNpGKb2L3RBGEW
            source_type: api_record
            title: 中国历代人物传记资料库：王光輔（CBDB 379658）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=379658&o=json
            external_identifier: CBDB:379658
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.690Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zxfirQPNN71TMCEH99fa7z
        subject_person_id: p_w2oMVjETU96nTNp41FWQqY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光輔，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 379658）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__UxQyHG3CypqyeA6WPuqfA
          claim_id: c_zxfirQPNN71TMCEH99fa7z
          source_id: s_APghkz8NtNpGKb2L3RBGEW
          stance: supports
          locator: CBDB:379658
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

# 王光輔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王光輔 | accepted |
| bio.summary | 王光輔，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 379658） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王光輔（CBDB 379658）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=379658&o=json)
