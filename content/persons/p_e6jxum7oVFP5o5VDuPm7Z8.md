---
schema: wang-person/v1
id: p_e6jxum7oVFP5o5VDuPm7Z8
status: active
merged_into: null
display_name: 王瀹
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Jjp1HEERwDBAVXyNQrNwfy
        subject_person_id: p_e6jxum7oVFP5o5VDuPm7Z8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瀹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gqXeNvM6MjiHvo3d96veAT
          claim_id: c_Jjp1HEERwDBAVXyNQrNwfy
          source_id: s_b4HFfLM94e3T6CCkvEaSxD
          stance: supports
          locator: CBDB:703125
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（703125）
          source: &a1
            id: s_b4HFfLM94e3T6CCkvEaSxD
            source_type: api_record
            title: 中国历代人物传记资料库：王瀹（CBDB 703125）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703125&o=json
            external_identifier: CBDB:703125
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.823Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PRJDKTL4iMXMMhDN9zXvTD
        subject_person_id: p_e6jxum7oVFP5o5VDuPm7Z8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瀹，明人物。籍贯上虞，曾任通判。（中国历代人物传记资料库 CBDB 703125）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jxHB2_NJR_Dw8DMgjbNbkP
          claim_id: c_PRJDKTL4iMXMMhDN9zXvTD
          source_id: s_b4HFfLM94e3T6CCkvEaSxD
          stance: supports
          locator: CBDB:703125
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

# 王瀹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瀹 | accepted |
| bio.summary | 王瀹，明人物。籍贯上虞，曾任通判。（中国历代人物传记资料库 CBDB 703125） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瀹（CBDB 703125）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703125&o=json)
