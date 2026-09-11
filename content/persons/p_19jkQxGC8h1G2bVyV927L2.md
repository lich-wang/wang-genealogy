---
schema: wang-person/v1
id: p_19jkQxGC8h1G2bVyV927L2
status: active
merged_into: null
display_name: 王軺
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vcR7Lq19yjY4aAjFtam5pa
        subject_person_id: p_19jkQxGC8h1G2bVyV927L2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王軺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5BZT8FRXjVjCsggP6GYLhn
          claim_id: c_vcR7Lq19yjY4aAjFtam5pa
          source_id: s_t261cY7uQrLgj1F4qvFpiM
          stance: supports
          locator: CBDB:542495
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（542495）
          source: &a1
            id: s_t261cY7uQrLgj1F4qvFpiM
            source_type: api_record
            title: 中国历代人物传记资料库：王軺（CBDB 542495）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=542495&o=json
            external_identifier: CBDB:542495
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.438Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GPKK8W2C7QYeQdG4RDDxYi
        subject_person_id: p_19jkQxGC8h1G2bVyV927L2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王軺，宋人物。籍贯閩縣，入仕進士。（中国历代人物传记资料库 CBDB 542495）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3nYmpM3oKzuSdBJ6M02Mum
          claim_id: c_GPKK8W2C7QYeQdG4RDDxYi
          source_id: s_t261cY7uQrLgj1F4qvFpiM
          stance: supports
          locator: CBDB:542495
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

# 王軺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王軺 | accepted |
| bio.summary | 王軺，宋人物。籍贯閩縣，入仕進士。（中国历代人物传记资料库 CBDB 542495） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王軺（CBDB 542495）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=542495&o=json)
