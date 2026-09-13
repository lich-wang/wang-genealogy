---
schema: wang-person/v1
id: p_vqeoJSYNaEoQWjmqD1R5cA
status: active
merged_into: null
display_name: 王恩源
cbdb_id: 414603
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3m7or11UDyxYL5y7tQA4QD
        subject_person_id: p_vqeoJSYNaEoQWjmqD1R5cA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恩源，清人物。曾任典史。（中国历代人物传记资料库 CBDB 414603）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_icxEiY2xw_xYrhldUJoro5
          claim_id: c_3m7or11UDyxYL5y7tQA4QD
          source_id: s_V1s3xybisGndjpfz6inuFZ
          stance: supports
          locator: CBDB:414603
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_V1s3xybisGndjpfz6inuFZ
            source_type: api_record
            title: 中国历代人物传记资料库：王恩源（CBDB 414603）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414603&o=json
            external_identifier: CBDB:414603
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:36.869Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_jrWaZ9X2v4wEAS1H7mpmkK
        subject_person_id: p_vqeoJSYNaEoQWjmqD1R5cA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恩源
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_R2MPJdJBQLjCSBXhFeq7KX
          claim_id: c_jrWaZ9X2v4wEAS1H7mpmkK
          source_id: s_V1s3xybisGndjpfz6inuFZ
          stance: supports
          locator: CBDB:414603
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（5601-5700）｜历史性依据：CBDB 朝代 = 清
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

# 王恩源

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王恩源，清人物。曾任典史。（中国历代人物传记资料库 CBDB 414603） | accepted |
| name.primary | 王恩源 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王恩源（CBDB 414603）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414603&o=json)
