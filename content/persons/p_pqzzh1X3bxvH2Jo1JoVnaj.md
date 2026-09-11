---
schema: wang-person/v1
id: p_pqzzh1X3bxvH2Jo1JoVnaj
status: active
merged_into: null
display_name: 王豫
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9bvtw1Gk4P2FqNDXHn4j7B
        subject_person_id: p_pqzzh1X3bxvH2Jo1JoVnaj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王豫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uyD9EaHGdoFyQBgeVv3w2J
          claim_id: c_9bvtw1Gk4P2FqNDXHn4j7B
          source_id: s_2WMbjDPP1wcKp3JgGafYZD
          stance: supports
          locator: CBDB:153384
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（153384）
          source: &a1
            id: s_2WMbjDPP1wcKp3JgGafYZD
            source_type: api_record
            title: 中国历代人物传记资料库：王豫（CBDB 153384）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153384&o=json
            external_identifier: CBDB:153384
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.860Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RUtRnEMWRskXkxTCZ6gUw3
        subject_person_id: p_pqzzh1X3bxvH2Jo1JoVnaj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王豫，唐人物。籍贯琅琊，曾任屯田郎中。（中国历代人物传记资料库 CBDB 153384）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XWQak5M51XG-5NV0jV0jH2
          claim_id: c_RUtRnEMWRskXkxTCZ6gUw3
          source_id: s_2WMbjDPP1wcKp3JgGafYZD
          stance: supports
          locator: CBDB:153384
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_QvItI0ZBfiv8eenDlER7H3
        subject_person_id: p_oLa6u987MQb63j3ya1tAqU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pqzzh1X3bxvH2Jo1JoVnaj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_duEv6VMQvXOGle6-v8ljnq
          claim_id: c_QvItI0ZBfiv8eenDlER7H3
          source_id: s_ggHXBc79NXCebBG2oHeKbN
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ggHXBc79NXCebBG2oHeKbN
            source_type: api_record
            title: 中国历代人物传记资料库：王德素（CBDB 153383）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153383&o=json
            external_identifier: CBDB:153383
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.859Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_oLa6u987MQb63j3ya1tAqU
        status: active
        display_name: 王德素
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王豫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王豫 | accepted |
| bio.summary | 王豫，唐人物。籍贯琅琊，曾任屯田郎中。（中国历代人物传记资料库 CBDB 153384） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oLa6u987MQb63j3ya1tAqU | 王德素 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德素（CBDB 153383）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153383&o=json)
- [中国历代人物传记资料库：王豫（CBDB 153384）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153384&o=json)
