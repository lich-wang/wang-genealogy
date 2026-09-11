---
schema: wang-person/v1
id: p_sjJZFTLsM6jddKisAbQUyJ
status: active
merged_into: null
display_name: 王杲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uE5GQzZFrCViq9tRT6MRrX
        subject_person_id: p_sjJZFTLsM6jddKisAbQUyJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王杲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6gTZkuB8sp3QKHA3B15VGi
          claim_id: c_uE5GQzZFrCViq9tRT6MRrX
          source_id: s_VoTvPJwK8TDFqQrUk645nH
          stance: supports
          locator: CBDB:39477
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（39477）
          source: &a1
            id: s_VoTvPJwK8TDFqQrUk645nH
            source_type: api_record
            title: 中国历代人物传记资料库：王杲（CBDB 39477）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39477&o=json
            external_identifier: CBDB:39477
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.623Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_UfWCEvRXtBJYSwWwijpMf6
        subject_person_id: p_sjJZFTLsM6jddKisAbQUyJ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 939年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k6pijp1RNwW6gtsjQJpZmT
          claim_id: c_UfWCEvRXtBJYSwWwijpMf6
          source_id: s_VoTvPJwK8TDFqQrUk645nH
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
        id: c_uvm8yYX7QGbCKdCp15gZQe
        subject_person_id: p_sjJZFTLsM6jddKisAbQUyJ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1002年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JeJ8MbqPUWnukGwxu92qK2
          claim_id: c_uvm8yYX7QGbCKdCp15gZQe
          source_id: s_VoTvPJwK8TDFqQrUk645nH
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
        id: c_PS56ZJLK8yN185K49j7L4j
        subject_person_id: p_sjJZFTLsM6jddKisAbQUyJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王杲（939年—1002年），宋人物。籍贯齊州，曾任刺史、都監、行營兵馬都監。（中国历代人物传记资料库 CBDB 39477）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_t1MR8aGojPcrwBc0_mJfH7
          claim_id: c_PS56ZJLK8yN185K49j7L4j
          source_id: s_VoTvPJwK8TDFqQrUk645nH
          stance: supports
          locator: CBDB:39477
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

# 王杲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王杲 | accepted |
| birth.date | 939年 | accepted |
| death.date | 1002年 | accepted |
| bio.summary | 王杲（939年—1002年），宋人物。籍贯齊州，曾任刺史、都監、行營兵馬都監。（中国历代人物传记资料库 CBDB 39477） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王杲（CBDB 39477）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39477&o=json)
