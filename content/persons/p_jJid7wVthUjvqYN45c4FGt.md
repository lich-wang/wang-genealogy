---
schema: wang-person/v1
id: p_jJid7wVthUjvqYN45c4FGt
status: active
merged_into: null
display_name: 王玥
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_M1fa83TTQSJ9qzrAkWQbLP
        subject_person_id: p_jJid7wVthUjvqYN45c4FGt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KktDKm6jEN5AS911C9J4Xg
          claim_id: c_M1fa83TTQSJ9qzrAkWQbLP
          source_id: s_XMqjceTtuJJMgcp14FCqZU
          stance: supports
          locator: CBDB:121804
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（121804）
          source: &a1
            id: s_XMqjceTtuJJMgcp14FCqZU
            source_type: api_record
            title: 中国历代人物传记资料库：王玥（CBDB 121804）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121804&o=json
            external_identifier: CBDB:121804
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.917Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_qsaRw3iS2UjpaRCFBzKcvk
        subject_person_id: p_jJid7wVthUjvqYN45c4FGt
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1744年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zSPCwySph5M4Fe1jLGazkS
          claim_id: c_qsaRw3iS2UjpaRCFBzKcvk
          source_id: s_XMqjceTtuJJMgcp14FCqZU
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_N8w5xqumq1BGHELsaCNBm2
        subject_person_id: p_jJid7wVthUjvqYN45c4FGt
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1803年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DZBwY5dXKqqgapWwzx9so3
          claim_id: c_N8w5xqumq1BGHELsaCNBm2
          source_id: s_XMqjceTtuJJMgcp14FCqZU
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5TJkZjjTTYyPWX6BM52qJJ
        subject_person_id: p_jJid7wVthUjvqYN45c4FGt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玥（1744年—1803年），史料所见人物。本项目依据《中国历代人物传记资料库：王玥（CBDB 121804）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NT7fGnaKUEq7O-rJAHLUIE
          claim_id: c_5TJkZjjTTYyPWX6BM52qJJ
          source_id: s_XMqjceTtuJJMgcp14FCqZU
          stance: supports
          locator: CBDB:121804
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_qzPsi6uDVLr4VAq7oC7cmF
        subject_person_id: p_gqyGCnz9XCXA3WqKdw1Xzf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jJid7wVthUjvqYN45c4FGt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RPY281TjPgSz5znPTx4rvQ
          claim_id: c_qzPsi6uDVLr4VAq7oC7cmF
          source_id: s_XMqjceTtuJJMgcp14FCqZU
          stance: supports
          locator: 名媛詩話:十二卷，4：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_gqyGCnz9XCXA3WqKdw1Xzf
        status: active
        display_name: 王其仁
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王玥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玥 | accepted |
| birth.date | 1744年 | accepted |
| death.date | 1803年 | accepted |
| bio.summary | 王玥（1744年—1803年），史料所见人物。本项目依据《中国历代人物传记资料库：王玥（CBDB 121804）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gqyGCnz9XCXA3WqKdw1Xzf | 王其仁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王玥（CBDB 121804）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121804&o=json)
