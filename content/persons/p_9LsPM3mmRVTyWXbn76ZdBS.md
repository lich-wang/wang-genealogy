---
schema: wang-person/v1
id: p_9LsPM3mmRVTyWXbn76ZdBS
status: active
merged_into: null
display_name: 王梓材
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3KPYJQAk8AzM8vKoAXzCBG
        subject_person_id: p_9LsPM3mmRVTyWXbn76ZdBS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王梓材
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_q1e8BnZKFLBfxsHYXC3pwJ
          claim_id: c_3KPYJQAk8AzM8vKoAXzCBG
          source_id: s_K5SVxd8rNhNDGSsPDGw7bC
          stance: supports
          locator: CBDB:71995
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71995）
          source: &a1
            id: s_K5SVxd8rNhNDGSsPDGw7bC
            source_type: api_record
            title: 中国历代人物传记资料库：王梓材（CBDB 71995）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71995&o=json
            external_identifier: CBDB:71995
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.951Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_w1MDey4LQByJTsDMEx5cGv
        subject_person_id: p_9LsPM3mmRVTyWXbn76ZdBS
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1792年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qQW7d26TKTLEuC5i7NmQft
          claim_id: c_w1MDey4LQByJTsDMEx5cGv
          source_id: s_K5SVxd8rNhNDGSsPDGw7bC
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
        id: c_GoXM5cETtehxPX2fzZNxC3
        subject_person_id: p_9LsPM3mmRVTyWXbn76ZdBS
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1851年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cg3ZoGxkzCT4oHVVnLWCxX
          claim_id: c_GoXM5cETtehxPX2fzZNxC3
          source_id: s_K5SVxd8rNhNDGSsPDGw7bC
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
        id: c_Wfet2UAKf5d88VrUfDMjnT
        subject_person_id: p_9LsPM3mmRVTyWXbn76ZdBS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王梓材（1792年—1851年），清人物。籍贯鄞縣，身份为經學家、小學家－音韻學，入仕優貢生，曾任教習、知縣。（中国历代人物传记资料库 CBDB 71995）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_08Wh-0aKz44up8QVZrngoq
          claim_id: c_Wfet2UAKf5d88VrUfDMjnT
          source_id: s_K5SVxd8rNhNDGSsPDGw7bC
          stance: supports
          locator: CBDB:71995
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
  ancestors:
    - claim:
        id: c_BzjRJHPJ6S5YyZMj4N75Ic
        subject_person_id: p_dxC9gW114KB1SftNyNvP7E
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_9LsPM3mmRVTyWXbn76ZdBS
        generation_count: 4
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wmj2pCEZe-ypdXrJuYP2vG
          claim_id: c_BzjRJHPJ6S5YyZMj4N75Ic
          source_id: s_K5SVxd8rNhNDGSsPDGw7bC
          stance: supports
          locator: 鄞縣志，lgid=243606：高祖;四世祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_dxC9gW114KB1SftNyNvP7E
        status: active
        display_name: 王炳
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王梓材

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王梓材 | accepted |
| birth.date | 1792年 | accepted |
| death.date | 1851年 | accepted |
| bio.summary | 王梓材（1792年—1851年），清人物。籍贯鄞縣，身份为經學家、小學家－音韻學，入仕優貢生，曾任教習、知縣。（中国历代人物传记资料库 CBDB 71995） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_dxC9gW114KB1SftNyNvP7E | 王炳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王梓材（CBDB 71995）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71995&o=json)
