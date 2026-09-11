---
schema: wang-person/v1
id: p_uvDLYCA2qXPTtkXUzGxYPE
status: active
merged_into: null
display_name: 王僎
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Mww2c1KRxAaJHP54rCDAsm
        subject_person_id: p_uvDLYCA2qXPTtkXUzGxYPE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王僎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1mBRDRRJiuQ2oG194isczy
          claim_id: c_Mww2c1KRxAaJHP54rCDAsm
          source_id: s_whfqQwmjQHbwpj3A6uzhEi
          stance: supports
          locator: CBDB:166736
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（166736）
          source: &a1
            id: s_whfqQwmjQHbwpj3A6uzhEi
            source_type: api_record
            title: 中国历代人物传记资料库：王僎（CBDB 166736）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166736&o=json
            external_identifier: CBDB:166736
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.990Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jnqmrKaR4RAnxYMCJN5qFd
        subject_person_id: p_uvDLYCA2qXPTtkXUzGxYPE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王僎，唐人物。曾任縣尉。（中国历代人物传记资料库 CBDB 166736）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RgOBxvLCmrgMe1QYi7EpkO
          claim_id: c_jnqmrKaR4RAnxYMCJN5qFd
          source_id: s_whfqQwmjQHbwpj3A6uzhEi
          stance: supports
          locator: CBDB:166736
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_wOWc8fh9q51p2gg6OhfJvp
        subject_person_id: p_uvDLYCA2qXPTtkXUzGxYPE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GSnwhV2e79Zrn6PDA1HGZ9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WoerRyc_J6ShhxiunFhAde
          claim_id: c_wOWc8fh9q51p2gg6OhfJvp
          source_id: s_frVW779uD6kgQCJyJNXtiy
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Dahe42：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_frVW779uD6kgQCJyJNXtiy
            source_type: api_record
            title: 中国历代人物传记资料库：王僎先（CBDB 143370）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143370&o=json
            external_identifier: CBDB:143370
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_GSnwhV2e79Zrn6PDA1HGZ9
        status: active
        display_name: 王僎先
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王僎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王僎 | accepted |
| bio.summary | 王僎，唐人物。曾任縣尉。（中国历代人物传记资料库 CBDB 166736） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_GSnwhV2e79Zrn6PDA1HGZ9 | 王僎先 | accepted |

## 外部来源

- [中国历代人物传记资料库：王僎（CBDB 166736）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166736&o=json)
- [中国历代人物传记资料库：王僎先（CBDB 143370）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143370&o=json)
