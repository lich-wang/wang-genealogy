---
schema: wang-person/v1
id: p_BY6pA4PHTVb3LmiTYxbcFF
status: active
merged_into: null
display_name: 王思禮
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QXRT44qoUzFJhjtZxfThfP
        subject_person_id: p_BY6pA4PHTVb3LmiTYxbcFF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思禮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1a1vjipX2vr52GgBUknjGo
          claim_id: c_QXRT44qoUzFJhjtZxfThfP
          source_id: s_qP7FJULxKBKkLznSMQida4
          stance: supports
          locator: CBDB:163701
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（163701）
          source: &a1
            id: s_qP7FJULxKBKkLznSMQida4
            source_type: api_record
            title: 中国历代人物传记资料库：王思禮（CBDB 163701）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163701&o=json
            external_identifier: CBDB:163701
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.961Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kVVziw4yFYaPVHY9j8bctK
        subject_person_id: p_BY6pA4PHTVb3LmiTYxbcFF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思禮，唐人物。曾任節度使。（中国历代人物传记资料库 CBDB 163701）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HoE3g9oSEdlVnqF2Gf_hh8
          claim_id: c_kVVziw4yFYaPVHY9j8bctK
          source_id: s_qP7FJULxKBKkLznSMQida4
          stance: supports
          locator: CBDB:163701
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_HR_RahRWojxa5Z7Xh9oql6
        subject_person_id: p_cb2pzan14ZR1ECvrVUNese
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BY6pA4PHTVb3LmiTYxbcFF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vQNkSY-8anFxJN7iuhDH6M
          claim_id: c_HR_RahRWojxa5Z7Xh9oql6
          source_id: s_qP7FJULxKBKkLznSMQida4
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Kaiyuan6：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_cb2pzan14ZR1ECvrVUNese
        status: active
        display_name: 王胡
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王思禮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思禮 | accepted |
| bio.summary | 王思禮，唐人物。曾任節度使。（中国历代人物传记资料库 CBDB 163701） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_cb2pzan14ZR1ECvrVUNese | 王胡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王思禮（CBDB 163701）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163701&o=json)
