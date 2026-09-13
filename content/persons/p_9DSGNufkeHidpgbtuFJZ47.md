---
schema: wang-person/v1
id: p_9DSGNufkeHidpgbtuFJZ47
status: active
merged_into: null
display_name: 王光嗣
cbdb_id: 38798
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_F1bVUqs2vFfzjmJutbB7pY
        subject_person_id: p_9DSGNufkeHidpgbtuFJZ47
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光嗣，史料所见人物。本项目依据《中国历代人物传记资料库：王光嗣（CBDB 38798）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_dzaDXAfRIBt0KYbfGCGgYV
          claim_id: c_F1bVUqs2vFfzjmJutbB7pY
          source_id: s_a9Y3o9uBPGQfnLPBVBhSwf
          stance: supports
          locator: CBDB:38798
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_a9Y3o9uBPGQfnLPBVBhSwf
            source_type: api_record
            title: 中国历代人物传记资料库：王光嗣（CBDB 38798）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38798&o=json
            external_identifier: CBDB:38798
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:47.307Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Q1BEy9GFK1KCQEZ5Bh4xzL
        subject_person_id: p_9DSGNufkeHidpgbtuFJZ47
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光嗣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_eXDKjBLwUT1Q26YiNQk4g5
          claim_id: c_Q1BEy9GFK1KCQEZ5Bh4xzL
          source_id: s_a9Y3o9uBPGQfnLPBVBhSwf
          stance: supports
          locator: CBDB:38798
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1301-1400）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Dvs3Rb03QxOJf-hGBLNK7W
        subject_person_id: p_4DMwFrJ3LdwEVHWXHa7AR4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9DSGNufkeHidpgbtuFJZ47
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SSG-pZhHLYjxgYmwwvfSng
          claim_id: c_Dvs3Rb03QxOJf-hGBLNK7W
          source_id: s_a9Y3o9uBPGQfnLPBVBhSwf
          stance: supports
          locator: 宋人傳記資料索引(電子版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_a9Y3o9uBPGQfnLPBVBhSwf
            source_type: api_record
            title: 中国历代人物传记资料库：王光嗣（CBDB 38798）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38798&o=json
            external_identifier: CBDB:38798
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:47.307Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_4DMwFrJ3LdwEVHWXHa7AR4
        status: active
        display_name: 王珪
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王光嗣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王光嗣，史料所见人物。本项目依据《中国历代人物传记资料库：王光嗣（CBDB 38798）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王光嗣 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4DMwFrJ3LdwEVHWXHa7AR4 | 王珪 | accepted |

## 外部来源

- [中国历代人物传记资料库：王光嗣（CBDB 38798）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38798&o=json)
