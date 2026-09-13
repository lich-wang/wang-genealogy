---
schema: wang-person/v1
id: p_Jk9Z8FdFoJezZyQrk9vAuQ
status: active
merged_into: null
display_name: 王惟乂
cbdb_id: 159963
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eusoELvGkW5W96qZrDA6N4
        subject_person_id: p_Jk9Z8FdFoJezZyQrk9vAuQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟乂，唐人物。籍贯高陵。（中国历代人物传记资料库 CBDB 159963）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_zFJDN-2HnQSJ_KKtETsVcC
          claim_id: c_eusoELvGkW5W96qZrDA6N4
          source_id: s_LSWmymaABaMz5rJxe8sbxy
          stance: supports
          locator: CBDB:159963
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_LSWmymaABaMz5rJxe8sbxy
            source_type: api_record
            title: 中国历代人物传记资料库：王惟乂（CBDB 159963）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159963&o=json
            external_identifier: CBDB:159963
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_yGAXkLj7uwKgajEbFc2eeB
        subject_person_id: p_Jk9Z8FdFoJezZyQrk9vAuQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟乂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_k7QNDHZWcpDNrEa8xh5WhN
          claim_id: c_yGAXkLj7uwKgajEbFc2eeB
          source_id: s_LSWmymaABaMz5rJxe8sbxy
          stance: supports
          locator: CBDB:159963
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2201-2300）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__iKOhwRYbTTOgjHecyYG2m
        subject_person_id: p_buHPPD7o3Zg7opBbsnKMQ6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Jk9Z8FdFoJezZyQrk9vAuQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NoWqjdR1wEPtL3PZAo4wRA
          claim_id: c__iKOhwRYbTTOgjHecyYG2m
          source_id: s_996GfbKAQ5DEPwFZuhv8rv
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dazhong 148：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_996GfbKAQ5DEPwFZuhv8rv
            source_type: api_record
            title: 中国历代人物传记资料库：王公素（CBDB 141742）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141742&o=json
            external_identifier: CBDB:141742
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.566Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_buHPPD7o3Zg7opBbsnKMQ6
        status: active
        display_name: 王公素
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王惟乂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王惟乂，唐人物。籍贯高陵。（中国历代人物传记资料库 CBDB 159963） | accepted |
| name.primary | 王惟乂 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_buHPPD7o3Zg7opBbsnKMQ6 | 王公素 | accepted |

## 外部来源

- [中国历代人物传记资料库：王公素（CBDB 141742）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141742&o=json)
- [中国历代人物传记资料库：王惟乂（CBDB 159963）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159963&o=json)
