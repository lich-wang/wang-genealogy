---
schema: wang-person/v1
id: p_Jj9MyHrAhxttVzzbCt67ZT
status: active
merged_into: null
display_name: 王堉時
cbdb_id: 513475
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_N8nE8FHpochLY7GvQoprVz
        subject_person_id: p_Jj9MyHrAhxttVzzbCt67ZT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堉時，清人物。中国历代人物传记资料库（CBDB）以人物编号 513475 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_hvEL6-OXqufDHzFjGx34Hq
          claim_id: c_N8nE8FHpochLY7GvQoprVz
          source_id: s_oMdAD3HrH7J9ALd3ZTYSRK
          stance: supports
          locator: CBDB:513475
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_oMdAD3HrH7J9ALd3ZTYSRK
            source_type: api_record
            title: 中国历代人物传记资料库：王堉時（CBDB 513475）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=513475&o=json
            external_identifier: CBDB:513475
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:15.776Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_3aYjmHn6H55uTNpJjsRYcw
        subject_person_id: p_Jj9MyHrAhxttVzzbCt67ZT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堉時
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_8e36SpYHuz8CVtfCkb2GQZ
          claim_id: c_3aYjmHn6H55uTNpJjsRYcw
          source_id: s_oMdAD3HrH7J9ALd3ZTYSRK
          stance: supports
          locator: CBDB:513475
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6801-6900）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_oMdAD3HrH7J9ALd3ZTYSRK
            source_type: api_record
            title: 中国历代人物传记资料库：王堉時（CBDB 513475）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=513475&o=json
            external_identifier: CBDB:513475
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:15.776Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_PaDzQCbKo0hW2Tq88RVrgn
        subject_person_id: p_6sBCzo4EktCjTb4NiwWGko
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Jj9MyHrAhxttVzzbCt67ZT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_D_GHLDjM2p441DsMYDQkMN
          claim_id: c_PaDzQCbKo0hW2Tq88RVrgn
          source_id: s_HCahiMsh5E8CcBDkdkb7uC
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），42：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HCahiMsh5E8CcBDkdkb7uC
            source_type: api_record
            title: 中国历代人物传记资料库：王傑（CBDB 56849）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56849&o=json
            external_identifier: CBDB:56849
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.765Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6sBCzo4EktCjTb4NiwWGko
        status: active
        display_name: 王傑
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王堉時

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王堉時，清人物。中国历代人物传记资料库（CBDB）以人物编号 513475 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王堉時 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6sBCzo4EktCjTb4NiwWGko | 王傑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王傑（CBDB 56849）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56849&o=json)
- [中国历代人物传记资料库：王堉時（CBDB 513475）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=513475&o=json)
