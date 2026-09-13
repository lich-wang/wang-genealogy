---
schema: wang-person/v1
id: p_cXHGtzRoEwwnCrt7PmMqPR
status: active
merged_into: null
display_name: 王成沼
cbdb_id: 161415
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pc8qoE7m41L6aD83nuMH48
        subject_person_id: p_cXHGtzRoEwwnCrt7PmMqPR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王成沼，史料所见人物。本项目依据《中国历代人物传记资料库：王成沼（CBDB 161415）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_P1oTY2b8WXgtFu3ZbkIO5V
          claim_id: c_pc8qoE7m41L6aD83nuMH48
          source_id: s_1ApFzXuoD3Gtxyf5Jj6ibb
          stance: supports
          locator: CBDB:161415
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_1ApFzXuoD3Gtxyf5Jj6ibb
            source_type: api_record
            title: 中国历代人物传记资料库：王成沼（CBDB 161415）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=161415&o=json
            external_identifier: CBDB:161415
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_JHY1CxNxv15TMKPNbFp5YE
        subject_person_id: p_cXHGtzRoEwwnCrt7PmMqPR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王成沼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3ponD429H4Ns4ZLBEJ9JHg
          claim_id: c_JHY1CxNxv15TMKPNbFp5YE
          source_id: s_1ApFzXuoD3Gtxyf5Jj6ibb
          stance: supports
          locator: CBDB:161415
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2301-2400）｜历史性依据：CBDB 朝代 = 唐
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
        id: c_UtFG6JIbFySSo8F-_lMfT1
        subject_person_id: p_cXHGtzRoEwwnCrt7PmMqPR
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_VdVKVse9yqCz6gRGt3HPgj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mOqwi-BZwnEok5jcO1Aq7p
          claim_id: c_UtFG6JIbFySSo8F-_lMfT1
          source_id: s_cGrt6waVSeCd1FlAPjYZul
          stance: supports
          locator: 唐代墓誌匯編:二卷，中和2：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_cGrt6waVSeCd1FlAPjYZul
            source_type: api_record
            title: 中国历代人物传记资料库：柴氏(王成沼妻)（CBDB 161417）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=161417&o=json
            external_identifier: CBDB:161417
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_VdVKVse9yqCz6gRGt3HPgj
        status: active
        display_name: 柴氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王成沼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王成沼，史料所见人物。本项目依据《中国历代人物传记资料库：王成沼（CBDB 161415）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王成沼 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_VdVKVse9yqCz6gRGt3HPgj | 柴氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：柴氏(王成沼妻)（CBDB 161417）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=161417&o=json)
- [中国历代人物传记资料库：王成沼（CBDB 161415）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=161415&o=json)
