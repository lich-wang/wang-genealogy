---
schema: wang-person/v1
id: p_uxhVLerRTcA9k5jQSTXvFT
status: active
merged_into: null
display_name: 王敬祖
cbdb_id: 262687
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rbn1z7r42zgQJ2avjVv6rm
        subject_person_id: p_uxhVLerRTcA9k5jQSTXvFT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬祖，史料所见人物。本项目依据《中国历代人物传记资料库：王敬祖（CBDB 262687）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_f9CwDCN5WFDwr9TIRT6saP
          claim_id: c_rbn1z7r42zgQJ2avjVv6rm
          source_id: s_1N23txBLC2Ly97L144guKS
          stance: supports
          locator: CBDB:262687
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_1N23txBLC2Ly97L144guKS
            source_type: api_record
            title: 中国历代人物传记资料库：王敬祖（CBDB 262687）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262687&o=json
            external_identifier: CBDB:262687
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_JewEc9PutFtiwd9u4i3jV7
        subject_person_id: p_uxhVLerRTcA9k5jQSTXvFT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬祖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Ms7CMLn3NhDR9YYCzE7axH
          claim_id: c_JewEc9PutFtiwd9u4i3jV7
          source_id: s_1N23txBLC2Ly97L144guKS
          stance: supports
          locator: CBDB:262687
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
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
        id: c_gaBzOPXjciBHhvdXZWtYNP
        subject_person_id: p_uxhVLerRTcA9k5jQSTXvFT
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4wJCgbadTAePpZ2BNEDAoG
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j8BpcUGgV6808XOE_xR4iN
          claim_id: c_gaBzOPXjciBHhvdXZWtYNP
          source_id: s_j9QtHgAMFKQAVkqGX1LKYM
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第九十二名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_j9QtHgAMFKQAVkqGX1LKYM
            source_type: api_record
            title: 中国历代人物传记资料库：王憲（CBDB 68238）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68238&o=json
            external_identifier: CBDB:68238
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.060Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4wJCgbadTAePpZ2BNEDAoG
        status: active
        display_name: 王憲
        merged_into_person_id: null
  other: []
---

# 王敬祖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王敬祖，史料所见人物。本项目依据《中国历代人物传记资料库：王敬祖（CBDB 262687）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王敬祖 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_4wJCgbadTAePpZ2BNEDAoG | 王憲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敬祖（CBDB 262687）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262687&o=json)
- [中国历代人物传记资料库：王憲（CBDB 68238）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68238&o=json)
