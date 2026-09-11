---
schema: wang-person/v1
id: p_2cNRhGJDHAsgPbraYrpQmk
status: active
merged_into: null
display_name: 王太沖
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ohS5hqNDaD8Cx7tef9AUjA
        subject_person_id: p_2cNRhGJDHAsgPbraYrpQmk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王太沖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KTaVYN3bbt8hnQ7GapBt1i
          claim_id: c_ohS5hqNDaD8Cx7tef9AUjA
          source_id: s_5Da337QYmKhJtE5nry3hRP
          stance: supports
          locator: CBDB:12648
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（12648）
          source: &a1
            id: s_5Da337QYmKhJtE5nry3hRP
            source_type: api_record
            title: 中国历代人物传记资料库：王太沖（CBDB 12648）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12648&o=json
            external_identifier: CBDB:12648
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.602Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_NtoAQAVza32Ebprc4wtSgm
        subject_person_id: p_2cNRhGJDHAsgPbraYrpQmk
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1184年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_khkpJKAHVZxJPQrEEFedgi
          claim_id: c_NtoAQAVza32Ebprc4wtSgm
          source_id: s_5Da337QYmKhJtE5nry3hRP
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
        id: c_vZVDKUdNsN6EdcTEu3s15q
        subject_person_id: p_2cNRhGJDHAsgPbraYrpQmk
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1251年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QbdbF99iuJhTi7M4aS4Gw2
          claim_id: c_vZVDKUdNsN6EdcTEu3s15q
          source_id: s_5Da337QYmKhJtE5nry3hRP
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
        id: c_sMb9sZiRLsfkN7HV3xT991
        subject_person_id: p_2cNRhGJDHAsgPbraYrpQmk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王太沖（1184年—1251年），宋人物。籍贯莆田，入仕進士，曾任縣尉、尚書省吏部考功司郎中、國史院編修。（中国历代人物传记资料库 CBDB 12648）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wMEt-J03UIETFYSEx5cIVc
          claim_id: c_sMb9sZiRLsfkN7HV3xT991
          source_id: s_5Da337QYmKhJtE5nry3hRP
          stance: supports
          locator: CBDB:12648
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
  ancestors:
    - claim:
        id: c_psrKdwY5HGKctAFW3cu1q-
        subject_person_id: p_S6ZZKMVMpbpMSQYqkUgMjL
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2cNRhGJDHAsgPbraYrpQmk
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gi2wN01zU5R-d-XIvwb2g9
          claim_id: c_psrKdwY5HGKctAFW3cu1q-
          source_id: s_5Da337QYmKhJtE5nry3hRP
          stance: supports
          locator: 宋人傳記資料索引(電子版)：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_S6ZZKMVMpbpMSQYqkUgMjL
        status: active
        display_name: 王晞亮
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王太沖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王太沖 | accepted |
| birth.date | 1184年 | accepted |
| death.date | 1251年 | accepted |
| bio.summary | 王太沖（1184年—1251年），宋人物。籍贯莆田，入仕進士，曾任縣尉、尚書省吏部考功司郎中、國史院編修。（中国历代人物传记资料库 CBDB 12648） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_S6ZZKMVMpbpMSQYqkUgMjL | 王晞亮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王太沖（CBDB 12648）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12648&o=json)
