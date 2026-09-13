---
schema: wang-person/v1
id: p_WLCe42PxLyK1wCH9ptHacB
status: active
merged_into: null
display_name: 王錫棨
cbdb_id: 521514
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1avm128ARMyNvQ6UQ19Ceh
        subject_person_id: p_WLCe42PxLyK1wCH9ptHacB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫棨，史料所见人物。本项目依据《中国历代人物传记资料库：王錫棨（CBDB 521514）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_2NOuuGEq0hsMe9SmCuuc5u
          claim_id: c_1avm128ARMyNvQ6UQ19Ceh
          source_id: s_4M6eH6vxxZLEhQFhSsTv2v
          stance: supports
          locator: CBDB:521514
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_4M6eH6vxxZLEhQFhSsTv2v
            source_type: api_record
            title: 中国历代人物传记资料库：王錫棨（CBDB 521514）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=521514&o=json
            external_identifier: CBDB:521514
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:16.852Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_wButC6iVveAL5XdjENG6pB
        subject_person_id: p_WLCe42PxLyK1wCH9ptHacB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫棨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_jnPt3Yw1pMVXeHng94TJwn
          claim_id: c_wButC6iVveAL5XdjENG6pB
          source_id: s_4M6eH6vxxZLEhQFhSsTv2v
          stance: supports
          locator: CBDB:521514
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6901-7000）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_OF79E6oUikHS_Z88vOwP10
        subject_person_id: p_DsK4LiLgsXzm5ZAToagJEP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WLCe42PxLyK1wCH9ptHacB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qaPAWfZ7lTnRki5IVSorg5
          claim_id: c_OF79E6oUikHS_Z88vOwP10
          source_id: s_sFKpXJihdKdMJs3g37ddL4
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），8314：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_sFKpXJihdKdMJs3g37ddL4
            source_type: api_record
            title: 中国历代人物传记资料库：王瑋慶（CBDB 56480）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56480&o=json
            external_identifier: CBDB:56480
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:05.401Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_DsK4LiLgsXzm5ZAToagJEP
        status: active
        display_name: 王瑋慶
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王錫棨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王錫棨，史料所见人物。本项目依据《中国历代人物传记资料库：王錫棨（CBDB 521514）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王錫棨 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DsK4LiLgsXzm5ZAToagJEP | 王瑋慶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瑋慶（CBDB 56480）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56480&o=json)
- [中国历代人物传记资料库：王錫棨（CBDB 521514）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=521514&o=json)
