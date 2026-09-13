---
schema: wang-person/v1
id: p_33cmq4u7DNW9QidGhiaNeK
status: active
merged_into: null
display_name: 王慈質
cbdb_id: 148235
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Zg3kG1k3NtA5B4yhTr7sGE
        subject_person_id: p_33cmq4u7DNW9QidGhiaNeK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慈質，史料所见人物。本项目依据《中国历代人物传记资料库：王慈質（CBDB 148235）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_g7Dah6TYqtRndjZpRmXBNA
          claim_id: c_Zg3kG1k3NtA5B4yhTr7sGE
          source_id: s_xzZfLSTAczfMdQWxM9qskD
          stance: supports
          locator: CBDB:148235
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_xzZfLSTAczfMdQWxM9qskD
            source_type: api_record
            title: 中国历代人物传记资料库：王慈質（CBDB 148235）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148235&o=json
            external_identifier: CBDB:148235
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_DMDZeFvBEXkkkkacVoGYPb
        subject_person_id: p_33cmq4u7DNW9QidGhiaNeK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慈質
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_KiDdoYnGQyog7id7sXDHMf
          claim_id: c_DMDZeFvBEXkkkkacVoGYPb
          source_id: s_xzZfLSTAczfMdQWxM9qskD
          stance: supports
          locator: CBDB:148235
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2001-2100）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_yWGvO99YqO_A0PXdD4JKJ0
        subject_person_id: p_DYLT56WnxF8ucjBEfxKt7G
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_33cmq4u7DNW9QidGhiaNeK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MNtu8lMFEkaNCwa6gPT8Ol
          claim_id: c_yWGvO99YqO_A0PXdD4JKJ0
          source_id: s_TrbZ1QLxmczCSANfHPm41D
          stance: supports
          locator: 唐代墓誌匯編:二卷，Qianfeng 40：嗣子(作為繼承人的兒子)
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_TrbZ1QLxmczCSANfHPm41D
            source_type: api_record
            title: 中国历代人物传记资料库：王和（CBDB 139519）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139519&o=json
            external_identifier: CBDB:139519
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.422Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DYLT56WnxF8ucjBEfxKt7G
        status: active
        display_name: 王和
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王慈質

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王慈質，史料所见人物。本项目依据《中国历代人物传记资料库：王慈質（CBDB 148235）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王慈質 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DYLT56WnxF8ucjBEfxKt7G | 王和 | accepted |

## 外部来源

- [中国历代人物传记资料库：王慈質（CBDB 148235）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148235&o=json)
- [中国历代人物传记资料库：王和（CBDB 139519）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139519&o=json)
