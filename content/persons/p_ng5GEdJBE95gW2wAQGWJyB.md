---
schema: wang-person/v1
id: p_ng5GEdJBE95gW2wAQGWJyB
status: active
merged_into: null
display_name: 王鵬運
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uD3FmpRKL3QCuPdnqErZLy
        subject_person_id: p_ng5GEdJBE95gW2wAQGWJyB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鵬運
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZkRFWxM46yfz4L2QezaHrF
          claim_id: c_uD3FmpRKL3QCuPdnqErZLy
          source_id: s_KW98zwENWnfmoyyxd11dRx
          stance: supports
          locator: CBDB:54979
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（54979）
          source: &a1
            id: s_KW98zwENWnfmoyyxd11dRx
            source_type: api_record
            title: 中国历代人物传记资料库：王鵬運（CBDB 54979）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54979&o=json
            external_identifier: CBDB:54979
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.729Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_7MFK248vhaKPjKkGT1dAxF
        subject_person_id: p_ng5GEdJBE95gW2wAQGWJyB
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1848年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ESgGXo3W3oGR3NkxH5njfE
          claim_id: c_7MFK248vhaKPjKkGT1dAxF
          source_id: s_KW98zwENWnfmoyyxd11dRx
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_gRYJ9X4D6bKTYfw2jQzBvN
        subject_person_id: p_ng5GEdJBE95gW2wAQGWJyB
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1904年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hFX79mrSdqGZSzM4BCbr2f
          claim_id: c_gRYJ9X4D6bKTYfw2jQzBvN
          source_id: s_KW98zwENWnfmoyyxd11dRx
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fkbdD2Ap7jVzmmihHW5ibp
        subject_person_id: p_ng5GEdJBE95gW2wAQGWJyB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鵬運（1848年—1904年），清人物。籍贯臨桂，入仕鄉貢舉人，曾任巡城御史。（中国历代人物传记资料库 CBDB 54979）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sBlWMYt9dJntZRYvSEdMas
          claim_id: c_fkbdD2Ap7jVzmmihHW5ibp
          source_id: s_KW98zwENWnfmoyyxd11dRx
          stance: supports
          locator: CBDB:54979
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

# 王鵬運

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鵬運 | accepted |
| birth.date | 1848年 | accepted |
| death.date | 1904年 | accepted |
| bio.summary | 王鵬運（1848年—1904年），清人物。籍贯臨桂，入仕鄉貢舉人，曾任巡城御史。（中国历代人物传记资料库 CBDB 54979） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鵬運（CBDB 54979）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54979&o=json)
