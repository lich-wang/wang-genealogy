---
schema: wang-person/v1
id: p_xJKLccMKyx3J1yop8GSGc1
status: active
merged_into: null
display_name: 王如松
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Mj4aR4KDFA4moPcooCBtPL
        subject_person_id: p_xJKLccMKyx3J1yop8GSGc1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王如松
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pt4AdDMi1FydL1DCwhLQpM
          claim_id: c_Mj4aR4KDFA4moPcooCBtPL
          source_id: s_cGraCJcBG1bt89tioAt1Bj
          stance: supports
          locator: CBDB:693035
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（693035）
          source: &a1
            id: s_cGraCJcBG1bt89tioAt1Bj
            source_type: api_record
            title: 中国历代人物传记资料库：王如松（CBDB 693035）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693035&o=json
            external_identifier: CBDB:693035
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.646Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HuDhxsAJXUo8ECGQwwF3VU
        subject_person_id: p_xJKLccMKyx3J1yop8GSGc1
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
        - id: cs_o19TnUKit6Hsqy6QNUT6ZP
          claim_id: c_HuDhxsAJXUo8ECGQwwF3VU
          source_id: s_cGraCJcBG1bt89tioAt1Bj
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_DlLKY7g8A2QW6t5wieX3nj
        subject_person_id: p_31GJjua4EfPXgC5DoQLP6w
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xJKLccMKyx3J1yop8GSGc1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PAQyRCDtRND4mwBQld9rNx
          claim_id: c_DlLKY7g8A2QW6t5wieX3nj
          source_id: s_G5GWWvKMh1SQ2ZV44Ekt55
          stance: supports
          locator: 蘇州府志，lgid=169690：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_G5GWWvKMh1SQ2ZV44Ekt55
            source_type: api_record
            title: 中国历代人物传记资料库：王浩（CBDB 693036）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693036&o=json
            external_identifier: CBDB:693036
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.647Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_31GJjua4EfPXgC5DoQLP6w
        status: active
        display_name: 王浩
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王如松

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王如松 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_31GJjua4EfPXgC5DoQLP6w | 王浩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王浩（CBDB 693036）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693036&o=json)
- [中国历代人物传记资料库：王如松（CBDB 693035）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693035&o=json)
