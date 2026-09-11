---
schema: wang-person/v1
id: p_LKbvsMDsZ9XayMMFyj7ekm
status: active
merged_into: null
display_name: 王承勳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jTUtE2NSQAXAHDBwQyBKQL
        subject_person_id: p_LKbvsMDsZ9XayMMFyj7ekm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承勳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_q7fWduo8mr4T8Huu7pjy8L
          claim_id: c_jTUtE2NSQAXAHDBwQyBKQL
          source_id: s_GMfTTaGGPPDNcJ5K5CAN32
          stance: supports
          locator: CBDB:342045
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342045）
          source: &a1
            id: s_GMfTTaGGPPDNcJ5K5CAN32
            source_type: api_record
            title: 中国历代人物传记资料库：王承勳（CBDB 342045）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342045&o=json
            external_identifier: CBDB:342045
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.823Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QMB3EdGXiy1H28PLEmhtUV
        subject_person_id: p_LKbvsMDsZ9XayMMFyj7ekm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承勳，清人物。明清進士進士，籍贯安溪，入仕進士，曾任知州。（中国历代人物传记资料库 CBDB 342045）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KZK6oY0p5b3hlxhUlMFgRC
          claim_id: c_QMB3EdGXiy1H28PLEmhtUV
          source_id: s_GMfTTaGGPPDNcJ5K5CAN32
          stance: supports
          locator: CBDB:342045
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

# 王承勳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承勳 | accepted |
| bio.summary | 王承勳，清人物。明清進士進士，籍贯安溪，入仕進士，曾任知州。（中国历代人物传记资料库 CBDB 342045） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王承勳（CBDB 342045）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342045&o=json)
