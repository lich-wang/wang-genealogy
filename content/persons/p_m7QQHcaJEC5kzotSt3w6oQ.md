---
schema: wang-person/v1
id: p_m7QQHcaJEC5kzotSt3w6oQ
status: active
merged_into: null
display_name: 王斂福
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RHbqRNcM6W4294YuJK6B1v
        subject_person_id: p_m7QQHcaJEC5kzotSt3w6oQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王斂福
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SiqFRkFKq9tojMZzytGoJV
          claim_id: c_RHbqRNcM6W4294YuJK6B1v
          source_id: s_E8p3nKMkytVk4NQyFTRPKR
          stance: supports
          locator: CBDB:343869
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343869）
          source: &a1
            id: s_E8p3nKMkytVk4NQyFTRPKR
            source_type: api_record
            title: 中国历代人物传记资料库：王斂福（CBDB 343869）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343869&o=json
            external_identifier: CBDB:343869
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.555Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6baYmW6C3uTq7V81BzCZFa
        subject_person_id: p_m7QQHcaJEC5kzotSt3w6oQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王斂福，清人物。明清進士進士，籍贯諸城，入仕進士。（中国历代人物传记资料库 CBDB 343869）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Av0eeZWI4BwJZ3k8KV4W3R
          claim_id: c_6baYmW6C3uTq7V81BzCZFa
          source_id: s_E8p3nKMkytVk4NQyFTRPKR
          stance: supports
          locator: CBDB:343869
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

# 王斂福

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王斂福 | accepted |
| bio.summary | 王斂福，清人物。明清進士進士，籍贯諸城，入仕進士。（中国历代人物传记资料库 CBDB 343869） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王斂福（CBDB 343869）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343869&o=json)
