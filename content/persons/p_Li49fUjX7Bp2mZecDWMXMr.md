---
schema: wang-person/v1
id: p_Li49fUjX7Bp2mZecDWMXMr
status: active
merged_into: null
display_name: 王弈
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LbvFfH5n5js8f59b1BhFK7
        subject_person_id: p_Li49fUjX7Bp2mZecDWMXMr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KN7F6io23DjLzUJEJ4dSXT
          claim_id: c_LbvFfH5n5js8f59b1BhFK7
          source_id: s_FEWbN8ZUshdUQs92Suw1xA
          stance: supports
          locator: CBDB:37703
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37703）
          source: &a1
            id: s_FEWbN8ZUshdUQs92Suw1xA
            source_type: api_record
            title: 中国历代人物传记资料库：王弈（CBDB 37703）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37703&o=json
            external_identifier: CBDB:37703
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.246Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NS7YEBjARNLTNmpg5zJdsB
        subject_person_id: p_Li49fUjX7Bp2mZecDWMXMr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弈，宋人物。籍贯奉化，身份为隱居授徒。（中国历代人物传记资料库 CBDB 37703）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jvRJ7_MRhCq8lHlg8cJmB3
          claim_id: c_NS7YEBjARNLTNmpg5zJdsB
          source_id: s_FEWbN8ZUshdUQs92Suw1xA
          stance: supports
          locator: CBDB:37703
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_t7YoKo6usOtpJM1gLxrrRY
        subject_person_id: p_Li49fUjX7Bp2mZecDWMXMr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_24WspPgCPnyaqKzbdQ85MP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YlkRXA-FG0rsOjRO4agqXQ
          claim_id: c_t7YoKo6usOtpJM1gLxrrRY
          source_id: s_4RUe2pN3WM9c9QFSt1CJtJ
          stance: supports
          locator: CBDB 双向互证（父 王弈 ⇄ 子 王建中）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_4RUe2pN3WM9c9QFSt1CJtJ
            source_type: api_record
            title: 中国历代人物传记资料库：王建中（CBDB 37702）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37702&o=json
            external_identifier: CBDB:37702
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.245Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_24WspPgCPnyaqKzbdQ85MP
        status: active
        display_name: 王建中
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王弈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王弈 | accepted |
| bio.summary | 王弈，宋人物。籍贯奉化，身份为隱居授徒。（中国历代人物传记资料库 CBDB 37703） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_24WspPgCPnyaqKzbdQ85MP | 王建中 | accepted |

## 外部来源

- [中国历代人物传记资料库：王建中（CBDB 37702）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37702&o=json)
- [中国历代人物传记资料库：王弈（CBDB 37703）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37703&o=json)
