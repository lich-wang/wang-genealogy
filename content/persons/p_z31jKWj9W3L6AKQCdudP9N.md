---
schema: wang-person/v1
id: p_z31jKWj9W3L6AKQCdudP9N
status: active
merged_into: null
display_name: 王真錫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_b9K3LPAPhddEQyJFA3AGvk
        subject_person_id: p_z31jKWj9W3L6AKQCdudP9N
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王真錫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9sJHBkQXhPrCVmEiqCLKQ9
          claim_id: c_b9K3LPAPhddEQyJFA3AGvk
          source_id: s_bJB7L913TbXWzjXL222mUQ
          stance: supports
          locator: CBDB:543876
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（543876）
          source: &a1
            id: s_bJB7L913TbXWzjXL222mUQ
            source_type: api_record
            title: 中国历代人物传记资料库：王真錫（CBDB 543876）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=543876&o=json
            external_identifier: CBDB:543876
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.452Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_95yv5oBW2xb2kMm5MPtVVf
        subject_person_id: p_z31jKWj9W3L6AKQCdudP9N
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王真錫，宋人物。籍贯慶元府，入仕進士。（中国历代人物传记资料库 CBDB 543876）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wMJIvlpvKjA33DHnT7hgRG
          claim_id: c_95yv5oBW2xb2kMm5MPtVVf
          source_id: s_bJB7L913TbXWzjXL222mUQ
          stance: supports
          locator: CBDB:543876
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

# 王真錫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王真錫 | accepted |
| bio.summary | 王真錫，宋人物。籍贯慶元府，入仕進士。（中国历代人物传记资料库 CBDB 543876） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王真錫（CBDB 543876）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=543876&o=json)
