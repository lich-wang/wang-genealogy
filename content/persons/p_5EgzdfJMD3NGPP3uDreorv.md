---
schema: wang-person/v1
id: p_5EgzdfJMD3NGPP3uDreorv
status: active
merged_into: null
display_name: 王仲玉
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Q9Kd16UJBNMS7x1gaLxy8h
        subject_person_id: p_5EgzdfJMD3NGPP3uDreorv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲玉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Y8jvjhMAjoZCyr7n3DhBj1
          claim_id: c_Q9Kd16UJBNMS7x1gaLxy8h
          source_id: s_Q6J2w1XLPqxuNHori6wAPU
          stance: supports
          locator: CBDB:236847
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（236847）
          source: &a1
            id: s_Q6J2w1XLPqxuNHori6wAPU
            source_type: api_record
            title: 中国历代人物传记资料库：王仲玉（CBDB 236847）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236847&o=json
            external_identifier: CBDB:236847
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.816Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XM4ev1feCBd9nFiKciVSLW
        subject_person_id: p_5EgzdfJMD3NGPP3uDreorv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲玉，明人物。正統四年進士，籍贯祥符。（中国历代人物传记资料库 CBDB 236847）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_C-7nEUeHXls-2LR0rLvjIc
          claim_id: c_XM4ev1feCBd9nFiKciVSLW
          source_id: s_Q6J2w1XLPqxuNHori6wAPU
          stance: supports
          locator: CBDB:236847
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_jMumxWpM7ZCGyGH8gvORAD
        subject_person_id: p_CgEKz1NoAXQAHTMt7rq26j
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5EgzdfJMD3NGPP3uDreorv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y-mynBelspxeY4eEpia0mE
          claim_id: c_jMumxWpM7ZCGyGH8gvORAD
          source_id: s_9Gb9zqGZZAfhfhljwPnq74
          stance: supports
          locator: CBDB：兄弟 王宇（66976）之父／母 王希哲
          quotation: null
          interpretation_note: 由兄弟关系推断：王仲玉 与 王宇 为同胞（CBDB 记「弟」），王宇 之父／母即 王仲玉 之父／母。
          source:
            id: s_9Gb9zqGZZAfhfhljwPnq74
            source_type: api_record
            title: 中国历代人物传记资料库：王仲玉（CBDB 236847）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236847&o=json
            external_identifier: CBDB:236847
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CgEKz1NoAXQAHTMt7rq26j
        status: active
        display_name: 王希哲
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c__Tdr7HX2PUk9jZxEb_ncVk
        subject_person_id: p_5EgzdfJMD3NGPP3uDreorv
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_AfDGGh6h4aUB2seMFJ2w8R
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yhcCc0IgYsPq4yIB9goOkt
          claim_id: c__Tdr7HX2PUk9jZxEb_ncVk
          source_id: s_9Gb9zqGZZAfhfhljwPnq74
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 66976 王宇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_9Gb9zqGZZAfhfhljwPnq74
            source_type: api_record
            title: 中国历代人物传记资料库：王仲玉（CBDB 236847）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236847&o=json
            external_identifier: CBDB:236847
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AfDGGh6h4aUB2seMFJ2w8R
        status: active
        display_name: 王宇
        merged_into_person_id: null
---

# 王仲玉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲玉 | accepted |
| bio.summary | 王仲玉，明人物。正統四年進士，籍贯祥符。（中国历代人物传记资料库 CBDB 236847） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CgEKz1NoAXQAHTMt7rq26j | 王希哲 | accepted |
| other | p_AfDGGh6h4aUB2seMFJ2w8R | 王宇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王仲玉（CBDB 236847）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236847&o=json)
