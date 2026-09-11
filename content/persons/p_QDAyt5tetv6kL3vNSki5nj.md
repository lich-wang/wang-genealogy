---
schema: wang-person/v1
id: p_QDAyt5tetv6kL3vNSki5nj
status: active
merged_into: null
display_name: 王碩
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HH32Sopy11G66BDDDJaKHz
        subject_person_id: p_QDAyt5tetv6kL3vNSki5nj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王碩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rjCtPgxUGMmc1zPnFn1MA5
          claim_id: c_HH32Sopy11G66BDDDJaKHz
          source_id: s_qFtgpqGnJY9WD45vMdzmgz
          stance: supports
          locator: CBDB:26392
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（26392）
          source: &a1
            id: s_qFtgpqGnJY9WD45vMdzmgz
            source_type: api_record
            title: 中国历代人物传记资料库：王碩（CBDB 26392）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26392&o=json
            external_identifier: CBDB:26392
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.936Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Z4F1YieBrctKKtCo39R4My
        subject_person_id: p_QDAyt5tetv6kL3vNSki5nj
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1016年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TaRZjREfhN2yi9a9QP9amK
          claim_id: c_Z4F1YieBrctKKtCo39R4My
          source_id: s_qFtgpqGnJY9WD45vMdzmgz
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
        id: c_cGHhmtYZdvqvxwJFJL7iuL
        subject_person_id: p_QDAyt5tetv6kL3vNSki5nj
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1075年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i6JMjWk5A9EW4PL2u2eibv
          claim_id: c_cGHhmtYZdvqvxwJFJL7iuL
          source_id: s_qFtgpqGnJY9WD45vMdzmgz
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
        id: c_H5vGdMniDbmrqpfQJv7PuJ
        subject_person_id: p_QDAyt5tetv6kL3vNSki5nj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HKitj5fqA7vxKS853bctJ5
          claim_id: c_H5vGdMniDbmrqpfQJv7PuJ
          source_id: s_qFtgpqGnJY9WD45vMdzmgz
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_v_UFJQxrSW3yNRr8Cf2Bpn
        subject_person_id: p_QDAyt5tetv6kL3vNSki5nj
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_GQHqn5hKXLnkDPec1dqHUx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nyE7yDt9S0Xp5mNUh9yNjb
          claim_id: c_v_UFJQxrSW3yNRr8Cf2Bpn
          source_id: s_Jm8Nt6i6Rr07tur9IL9SYp
          stance: supports
          locator: 宋人傳記資料索引(電子版)：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Jm8Nt6i6Rr07tur9IL9SYp
            source_type: api_record
            title: 中国历代人物传记资料库：陳池安（CBDB 39173）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39173&o=json
            external_identifier: CBDB:39173
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GQHqn5hKXLnkDPec1dqHUx
        status: active
        display_name: 陳池安
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王碩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王碩 | accepted |
| birth.date | 1016年 | accepted |
| death.date | 1075年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_GQHqn5hKXLnkDPec1dqHUx | 陳池安 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳池安（CBDB 39173）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39173&o=json)
- [中国历代人物传记资料库：王碩（CBDB 26392）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26392&o=json)
