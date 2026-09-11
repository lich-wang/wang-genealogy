---
schema: wang-person/v1
id: p_YT54Nu52wA77QEBUgsEsxC
status: active
merged_into: null
display_name: 王世楨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TNrFdrn5U5ZKu5mJp18JRX
        subject_person_id: p_YT54Nu52wA77QEBUgsEsxC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世楨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HisYL1HZuNz5hRVeD2z1QD
          claim_id: c_TNrFdrn5U5ZKu5mJp18JRX
          source_id: s_9xfXCHnxpfLx7NKbdMzQo2
          stance: supports
          locator: CBDB:343184
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343184）
          source: &a1
            id: s_9xfXCHnxpfLx7NKbdMzQo2
            source_type: api_record
            title: 中国历代人物传记资料库：王世楨（CBDB 343184）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343184&o=json
            external_identifier: CBDB:343184
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.237Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6Lk2fyPCBJNG2Y4bpAzJEg
        subject_person_id: p_YT54Nu52wA77QEBUgsEsxC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世楨，清人物。明清進士進士，籍贯諸城，入仕進士。（中国历代人物传记资料库 CBDB 343184）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ypla0YZygiZ5zloaaiHQEK
          claim_id: c_6Lk2fyPCBJNG2Y4bpAzJEg
          source_id: s_9xfXCHnxpfLx7NKbdMzQo2
          stance: supports
          locator: CBDB:343184
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

# 王世楨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世楨 | accepted |
| bio.summary | 王世楨，清人物。明清進士進士，籍贯諸城，入仕進士。（中国历代人物传记资料库 CBDB 343184） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世楨（CBDB 343184）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343184&o=json)
