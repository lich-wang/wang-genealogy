---
schema: wang-person/v1
id: p_634DYHyLfoKVRUbcRc9r5u
status: active
merged_into: null
display_name: 王渫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7WsvMRAhK7e872Mr8oKJtQ
        subject_person_id: p_634DYHyLfoKVRUbcRc9r5u
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王渫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aQwnKU1GR5rL6cEjmJMzyY
          claim_id: c_7WsvMRAhK7e872Mr8oKJtQ
          source_id: s_aGVF1m9NK7DqfPC1qrshDo
          stance: supports
          locator: CBDB:71226
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71226）
          source: &a1
            id: s_aGVF1m9NK7DqfPC1qrshDo
            source_type: api_record
            title: 中国历代人物传记资料库：王渫（CBDB 71226）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71226&o=json
            external_identifier: CBDB:71226
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.507Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_N3PFyURPn3j4D7e1DRScU9
        subject_person_id: p_634DYHyLfoKVRUbcRc9r5u
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1634年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XZ5j9LU3bPKKGLQSDn2HL6
          claim_id: c_N3PFyURPn3j4D7e1DRScU9
          source_id: s_aGVF1m9NK7DqfPC1qrshDo
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
        id: c_4qzsMCPsKpLs22uAY2Lob9
        subject_person_id: p_634DYHyLfoKVRUbcRc9r5u
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王渫（生于1634年），清人物。籍贯平湖。（中国历代人物传记资料库 CBDB 71226）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3ETnpKix4c2IMMUICroqj-
          claim_id: c_4qzsMCPsKpLs22uAY2Lob9
          source_id: s_aGVF1m9NK7DqfPC1qrshDo
          stance: supports
          locator: CBDB:71226
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

# 王渫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王渫 | accepted |
| birth.date | 1634年 | accepted |
| bio.summary | 王渫（生于1634年），清人物。籍贯平湖。（中国历代人物传记资料库 CBDB 71226） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王渫（CBDB 71226）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71226&o=json)
