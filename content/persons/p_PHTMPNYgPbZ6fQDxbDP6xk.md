---
schema: wang-person/v1
id: p_PHTMPNYgPbZ6fQDxbDP6xk
status: active
merged_into: null
display_name: 王筠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nSRAoso5ghSxCT1tctFGNE
        subject_person_id: p_PHTMPNYgPbZ6fQDxbDP6xk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王筠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PGFh6ztJjXvP8YRPiEMK5G
          claim_id: c_nSRAoso5ghSxCT1tctFGNE
          source_id: s_L4gt1vqqbGkgcb1Q4iqBZH
          stance: supports
          locator: CBDB:70471
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（70471）
          source: &a1
            id: s_L4gt1vqqbGkgcb1Q4iqBZH
            source_type: api_record
            title: 中国历代人物传记资料库：王筠（CBDB 70471）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=70471&o=json
            external_identifier: CBDB:70471
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.312Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_SyoAc6MjFgJcK8E9ACPu4T
        subject_person_id: p_PHTMPNYgPbZ6fQDxbDP6xk
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1749年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f9Rm5yCx799RYsc3RhL3tz
          claim_id: c_SyoAc6MjFgJcK8E9ACPu4T
          source_id: s_L4gt1vqqbGkgcb1Q4iqBZH
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
        id: c_pnUP1iqeyJa7JtQzNXzdvX
        subject_person_id: p_PHTMPNYgPbZ6fQDxbDP6xk
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1819年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1sprKA6aQ5fHJMayJHQiz9
          claim_id: c_pnUP1iqeyJa7JtQzNXzdvX
          source_id: s_L4gt1vqqbGkgcb1Q4iqBZH
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
        id: c_qEQZJYKMUXqYnN8WGA8uY8
        subject_person_id: p_PHTMPNYgPbZ6fQDxbDP6xk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mnPT8XTFDnvP2DCK79Cytd
          claim_id: c_qEQZJYKMUXqYnN8WGA8uY8
          source_id: s_L4gt1vqqbGkgcb1Q4iqBZH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_yDeIWJzl3V-uTtz6Mu8Rac
        subject_person_id: p_XBdYGhhY6KYRHheCG3YBMX
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_PHTMPNYgPbZ6fQDxbDP6xk
        generation_count: 4
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wgwU67xYlibowkmvUoIWbk
          claim_id: c_yDeIWJzl3V-uTtz6Mu8Rac
          source_id: s_L4gt1vqqbGkgcb1Q4iqBZH
          stance: supports
          locator: 長安縣志，488：高祖;四世祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_XBdYGhhY6KYRHheCG3YBMX
        status: active
        display_name: 王平
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王筠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王筠 | accepted |
| birth.date | 1749年 | accepted |
| death.date | 1819年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_XBdYGhhY6KYRHheCG3YBMX | 王平 | accepted |

## 外部来源

- [中国历代人物传记资料库：王筠（CBDB 70471）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=70471&o=json)
