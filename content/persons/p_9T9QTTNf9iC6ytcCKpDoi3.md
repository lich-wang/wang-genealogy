---
schema: wang-person/v1
id: p_9T9QTTNf9iC6ytcCKpDoi3
status: active
merged_into: null
display_name: 王蘩
cbdb_id: 36924
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uukzgywauBe9uxF1LvDzjR
        subject_person_id: p_9T9QTTNf9iC6ytcCKpDoi3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘩，宋人物。籍贯巢縣。（中国历代人物传记资料库 CBDB 36924）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_ZqhgYFx1fpTz9tAz-Ukh43
          claim_id: c_uukzgywauBe9uxF1LvDzjR
          source_id: s_o99NQUyDAp1nbE7PLmBeyX
          stance: supports
          locator: CBDB:36924
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_o99NQUyDAp1nbE7PLmBeyX
            source_type: api_record
            title: 中国历代人物传记资料库：王蘩（CBDB 36924）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36924&o=json
            external_identifier: CBDB:36924
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.707Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_67YfPaNw6GgAbttdGWfprD
        subject_person_id: p_9T9QTTNf9iC6ytcCKpDoi3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_472qhgPgF6AyGzWjvgu7SS
          claim_id: c_67YfPaNw6GgAbttdGWfprD
          source_id: s_o99NQUyDAp1nbE7PLmBeyX
          stance: supports
          locator: CBDB:36924
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1101-1200）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_s7XrXEAf66xfhPGNc6Jd49
        subject_person_id: p_qdfj8n9aJt992f6xYnsVk6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9T9QTTNf9iC6ytcCKpDoi3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ry5NDTwUfgwENXnZ7yijqk
          claim_id: c_s7XrXEAf66xfhPGNc6Jd49
          source_id: s_YqhPiA5uVupiEpR8ioIwuz
          stance: supports
          locator: CBDB 亲属：父（KinPerson 1786）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_YqhPiA5uVupiEpR8ioIwuz
            source_type: api_record
            title: 中国历代人物传记资料库：王蘩（CBDB 36924）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36924&o=json
            external_identifier: CBDB:36924
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qdfj8n9aJt992f6xYnsVk6
        status: active
        display_name: 王之道
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王蘩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王蘩，宋人物。籍贯巢縣。（中国历代人物传记资料库 CBDB 36924） | accepted |
| name.primary | 王蘩 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qdfj8n9aJt992f6xYnsVk6 | 王之道 | accepted |

## 外部来源

- [中国历代人物传记资料库：王蘩（CBDB 36924）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36924&o=json)
