---
schema: wang-person/v1
id: p_K9GwsemFFnmLMhsXtBN7vk
status: active
merged_into: null
display_name: 王可起
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_awR13wvtmLTuUoLM97uhR1
        subject_person_id: p_K9GwsemFFnmLMhsXtBN7vk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王可起
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PErZL1xKDHVQrd8DJiJj62
          claim_id: c_awR13wvtmLTuUoLM97uhR1
          source_id: s_5jK9MeKHEEWFyucULssQQ8
          stance: supports
          locator: CBDB:551519
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（551519）
          source: &a1
            id: s_5jK9MeKHEEWFyucULssQQ8
            source_type: api_record
            title: 中国历代人物传记资料库：王可起（CBDB 551519）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551519&o=json
            external_identifier: CBDB:551519
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.512Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DbMGfavNLYf4Js27GBuNfT
        subject_person_id: p_K9GwsemFFnmLMhsXtBN7vk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王可起，明人物。籍贯南陽，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 551519）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PfzAeef8Zxn2oFlWJHM8Bg
          claim_id: c_DbMGfavNLYf4Js27GBuNfT
          source_id: s_5jK9MeKHEEWFyucULssQQ8
          stance: supports
          locator: CBDB:551519
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_VfTWgLbGXAC8h_hIIaFEjS
        subject_person_id: p_KxonNTZx8tT6qN5hztkL3V
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_K9GwsemFFnmLMhsXtBN7vk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b5iupT83TDW_hkQNQGegUK
          claim_id: c_VfTWgLbGXAC8h_hIIaFEjS
          source_id: s_5jK9MeKHEEWFyucULssQQ8
          stance: supports
          locator: 南陽府志，lgid=878672：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_KxonNTZx8tT6qN5hztkL3V
        status: active
        display_name: 王守紀
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王可起

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王可起 | accepted |
| bio.summary | 王可起，明人物。籍贯南陽，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 551519） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_KxonNTZx8tT6qN5hztkL3V | 王守紀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王可起（CBDB 551519）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551519&o=json)
