---
schema: wang-person/v1
id: p_7rpnCYqdWhRQZr89MWvuA9
status: active
merged_into: null
display_name: 王毖
cbdb_id: 7087
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_u4xzjYiPq3UHfJK8gmc6Kg
        subject_person_id: p_7rpnCYqdWhRQZr89MWvuA9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王毖，史料所见人物。本项目依据《中国历代人物传记资料库：王毖（CBDB 7087）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_HGk8GBv6BxRndtxX7u5Dt7
          claim_id: c_u4xzjYiPq3UHfJK8gmc6Kg
          source_id: s_2zBWbXqoB1xGX1Go9UZFBm
          stance: supports
          locator: CBDB:7087
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_2zBWbXqoB1xGX1Go9UZFBm
            source_type: api_record
            title: 中国历代人物传记资料库：王毖（CBDB 7087）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7087&o=json
            external_identifier: CBDB:7087
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_nSXm1yufuDcsqCMhfPRjxz
        subject_person_id: p_7rpnCYqdWhRQZr89MWvuA9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王毖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_JiFvpCe7F1cNQ9Y27wN1e2
          claim_id: c_nSXm1yufuDcsqCMhfPRjxz
          source_id: s_2zBWbXqoB1xGX1Go9UZFBm
          stance: supports
          locator: CBDB:7087
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_wMpQhWn33ZGv7h8cYoWP0E
        subject_person_id: p_7rpnCYqdWhRQZr89MWvuA9
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Xu92b8cxwkLcecDZkXEDZ2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jfM_DKA-odeLfyUg387G-b
          claim_id: c_wMpQhWn33ZGv7h8cYoWP0E
          source_id: s_HazqEQgd7gC5sUaqSi6Mjv
          stance: supports
          locator: 宋人傳記資料索引(電子版)，779;780：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HazqEQgd7gC5sUaqSi6Mjv
            source_type: api_record
            title: 中国历代人物传记资料库：李氏(王毖妻)（CBDB 5137）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5137&o=json
            external_identifier: CBDB:5137
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Xu92b8cxwkLcecDZkXEDZ2
        status: active
        display_name: 李氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王毖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王毖，史料所见人物。本项目依据《中国历代人物传记资料库：王毖（CBDB 7087）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王毖 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_Xu92b8cxwkLcecDZkXEDZ2 | 李氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：李氏(王毖妻)（CBDB 5137）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5137&o=json)
- [中国历代人物传记资料库：王毖（CBDB 7087）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7087&o=json)
