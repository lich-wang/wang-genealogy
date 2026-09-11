---
schema: wang-person/v1
id: p_vjpamfABXjc6mPAPBPDgAA
status: active
merged_into: null
display_name: 王樞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8YkbX3iV4AL5vWq9WbMAhw
        subject_person_id: p_vjpamfABXjc6mPAPBPDgAA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PGoocaNqUr3CyyLVUZTro5
          claim_id: c_8YkbX3iV4AL5vWq9WbMAhw
          source_id: s_JaxdQDkK2BWA1JUNj4Zcgz
          stance: supports
          locator: CBDB:37852
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37852）
          source: &a1
            id: s_JaxdQDkK2BWA1JUNj4Zcgz
            source_type: api_record
            title: 中国历代人物传记资料库：王樞（CBDB 37852）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37852&o=json
            external_identifier: CBDB:37852
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.271Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_7RR8cCDKFZNqK8mjnmExQi
        subject_person_id: p_vjpamfABXjc6mPAPBPDgAA
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 978年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1ixfbpF8W7cPVMc7tAo6Qn
          claim_id: c_7RR8cCDKFZNqK8mjnmExQi
          source_id: s_JaxdQDkK2BWA1JUNj4Zcgz
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
        id: c_vBALQB9AeqtJ75B9YBdPz1
        subject_person_id: p_vjpamfABXjc6mPAPBPDgAA
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1016年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NDT3p2nAkqkgYR1sRBijBK
          claim_id: c_vBALQB9AeqtJ75B9YBdPz1
          source_id: s_JaxdQDkK2BWA1JUNj4Zcgz
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
        id: c_4NE93PsCaBPF2wXatUQBBc
        subject_person_id: p_vjpamfABXjc6mPAPBPDgAA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樞（978年—1016年），宋人物。籍贯無錫，入仕進士，曾任將作監主簿、上輕車都尉。（中国历代人物传记资料库 CBDB 37852）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aqTNc6c4Pw_6TdYxZOaCmn
          claim_id: c_4NE93PsCaBPF2wXatUQBBc
          source_id: s_JaxdQDkK2BWA1JUNj4Zcgz
          stance: supports
          locator: CBDB:37852
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

# 王樞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王樞 | accepted |
| birth.date | 978年 | accepted |
| death.date | 1016年 | accepted |
| bio.summary | 王樞（978年—1016年），宋人物。籍贯無錫，入仕進士，曾任將作監主簿、上輕車都尉。（中国历代人物传记资料库 CBDB 37852） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王樞（CBDB 37852）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37852&o=json)
