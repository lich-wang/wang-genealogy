---
schema: wang-person/v1
id: p_He4MQneKrf3FsxiWWRGQhR
status: active
merged_into: null
display_name: 王瓘
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZesnbznsJmsvEzDcGHqj4i
        subject_person_id: p_He4MQneKrf3FsxiWWRGQhR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cavF49JMBfVNZo6eX4SL9k
          claim_id: c_ZesnbznsJmsvEzDcGHqj4i
          source_id: s_71Y6LTnWEAAJ2ZMmD3ZpFG
          stance: supports
          locator: CBDB:198427
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198427）
          source: &a1
            id: s_71Y6LTnWEAAJ2ZMmD3ZpFG
            source_type: api_record
            title: 中国历代人物传记资料库：王瓘（CBDB 198427）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198427&o=json
            external_identifier: CBDB:198427
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.491Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_hhpN5BFhC5JJmeD4LbQLio
        subject_person_id: p_He4MQneKrf3FsxiWWRGQhR
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1422年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N84jgZ7iQU9NyiyBxRpytm
          claim_id: c_hhpN5BFhC5JJmeD4LbQLio
          source_id: s_71Y6LTnWEAAJ2ZMmD3ZpFG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UXJDQAfeRiT4dfjRGxSP74
        subject_person_id: p_He4MQneKrf3FsxiWWRGQhR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nScsAJ4tYUoJYaJ6AWmySE
          claim_id: c_UXJDQAfeRiT4dfjRGxSP74
          source_id: s_71Y6LTnWEAAJ2ZMmD3ZpFG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_nkNqws36FALLzQLApW7BEz
        subject_person_id: p_1C9G5XBRDC7u6iXVfxU3HA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_He4MQneKrf3FsxiWWRGQhR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FDgEfeDHFFK2cUqjjkUPfW
          claim_id: c_nkNqws36FALLzQLApW7BEz
          source_id: s_zN9QfQxtwpMKo93CJE9iBC
          stance: supports
          locator: 景泰五年進士登科錄，第三甲第一百零四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zN9QfQxtwpMKo93CJE9iBC
            source_type: api_record
            title: 中国历代人物传记资料库：王郁（CBDB 270738）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270738&o=json
            external_identifier: CBDB:270738
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.847Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1C9G5XBRDC7u6iXVfxU3HA
        status: active
        display_name: 王郁
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王瓘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瓘 | accepted |
| birth.date | 1422年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1C9G5XBRDC7u6iXVfxU3HA | 王郁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瓘（CBDB 198427）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198427&o=json)
- [中国历代人物传记资料库：王郁（CBDB 270738）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270738&o=json)
