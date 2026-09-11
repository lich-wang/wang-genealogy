---
schema: wang-person/v1
id: p_xmyBLu1JaarZKDoabrYE3f
status: active
merged_into: null
display_name: 王麟
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_q2fbR7xb6a7LLT8SyQ5scE
        subject_person_id: p_xmyBLu1JaarZKDoabrYE3f
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王麟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ApZ6mYNWCVBotrumKWAAQ9
          claim_id: c_q2fbR7xb6a7LLT8SyQ5scE
          source_id: s_tvR3r7WBuzHh3cGy1zBB6C
          stance: supports
          locator: CBDB:327380
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（327380）
          source: &a1
            id: s_tvR3r7WBuzHh3cGy1zBB6C
            source_type: api_record
            title: 中国历代人物传记资料库：王麟（CBDB 327380）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327380&o=json
            external_identifier: CBDB:327380
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.245Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LyHjix4pCtaPstm7prUwLK
        subject_person_id: p_xmyBLu1JaarZKDoabrYE3f
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王麟，明人物。嘉靖四十一年進士，曾任戶部郎中、知縣。（中国历代人物传记资料库 CBDB 327380）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bmR-j3DwO5-v9MYqpqZVTG
          claim_id: c_LyHjix4pCtaPstm7prUwLK
          source_id: s_tvR3r7WBuzHh3cGy1zBB6C
          stance: supports
          locator: CBDB:327380
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
  descendants:
    - claim:
        id: c_dOuSXjC8NU2XT6jjN6Haui
        subject_person_id: p_xmyBLu1JaarZKDoabrYE3f
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DpH4HNkjrsP3PNvkueYKFC
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HGmy16p5yzBTb_9CYW9BA9
          claim_id: c_dOuSXjC8NU2XT6jjN6Haui
          source_id: s_tvR3r7WBuzHh3cGy1zBB6C
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第二十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DpH4HNkjrsP3PNvkueYKFC
        status: active
        display_name: 王同道
        merged_into_person_id: null
  other: []
---

# 王麟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王麟 | accepted |
| bio.summary | 王麟，明人物。嘉靖四十一年進士，曾任戶部郎中、知縣。（中国历代人物传记资料库 CBDB 327380） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_DpH4HNkjrsP3PNvkueYKFC | 王同道 | accepted |

## 外部来源

- [中国历代人物传记资料库：王麟（CBDB 327380）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327380&o=json)
