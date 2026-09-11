---
schema: wang-person/v1
id: p_bQwD7YMKM2SJaiTrj8D3q5
status: active
merged_into: null
display_name: 焦騁
revision: 1
cbdb_id: 572812
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_s2ARzfE1uqpaKD4C4eZ4o_
        subject_person_id: p_bQwD7YMKM2SJaiTrj8D3q5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 焦騁，史料所见人物。本项目依据《中国历代人物传记资料库：焦騁（CBDB 572812）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h4VvXnxLEla3AlibvyBL1k
          claim_id: c_s2ARzfE1uqpaKD4C4eZ4o_
          source_id: s_R2XP4OAuN31G-PNK-MhGuH
          stance: supports
          locator: CBDB:572812
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_R2XP4OAuN31G-PNK-MhGuH
            source_type: api_record
            title: 中国历代人物传记资料库：焦騁（CBDB 572812）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=572812&o=json
            external_identifier: CBDB:572812
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_cclPIhzggHpwxxc62Qzn0E
        subject_person_id: p_bQwD7YMKM2SJaiTrj8D3q5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 焦騁
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x4Lg6TFEhDD8UzwtKRZrJX
          claim_id: c_cclPIhzggHpwxxc62Qzn0E
          source_id: s_R2XP4OAuN31G-PNK-MhGuH
          stance: supports
          locator: CBDB:572812
          quotation: null
          interpretation_note: CBDB 明确记录的王渙配偶
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
        id: c_Dj-3VBxIcufNTU20AYjjXN
        subject_person_id: p_PHmf79xTwWuj1qPnsJFVAk
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_bQwD7YMKM2SJaiTrj8D3q5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hBFcIXnSlY_DIXawHiZJub
          claim_id: c_Dj-3VBxIcufNTU20AYjjXN
          source_id: s_R2XP4OAuN31G-PNK-MhGuH
          stance: supports
          locator: CBDB 双向互证（妻子 焦騁）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_PHmf79xTwWuj1qPnsJFVAk
        status: active
        display_name: 王渙
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 焦騁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 焦騁，史料所见人物。本项目依据《中国历代人物传记资料库：焦騁（CBDB 572812）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 焦騁 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_PHmf79xTwWuj1qPnsJFVAk | 王渙 | accepted |

## 外部来源

- [中国历代人物传记资料库：焦騁（CBDB 572812）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=572812&o=json)
