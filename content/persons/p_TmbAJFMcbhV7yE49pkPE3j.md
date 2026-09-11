---
schema: wang-person/v1
id: p_TmbAJFMcbhV7yE49pkPE3j
status: active
merged_into: null
display_name: 王思哲
cbdb_id: 512894
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kvwW4dQNyPoha2wRoLRpty
        subject_person_id: p_TmbAJFMcbhV7yE49pkPE3j
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思哲，清人物。中国历代人物传记资料库（CBDB）以人物编号 512894 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_HCYmSwQL4ii9nwQDyXmRVC
          claim_id: c_kvwW4dQNyPoha2wRoLRpty
          source_id: s_pAM16aCPm14gA9Ezh35j1Y
          stance: supports
          locator: CBDB:512894
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_pAM16aCPm14gA9Ezh35j1Y
            source_type: api_record
            title: 中国历代人物传记资料库：王思哲（CBDB 512894）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=512894&o=json
            external_identifier: CBDB:512894
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:15.776Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_gxeLi7iiRLVYMQESqeZyQq
        subject_person_id: p_TmbAJFMcbhV7yE49pkPE3j
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思哲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ZdWRgF5nXVmPn6jJ7uqpAB
          claim_id: c_gxeLi7iiRLVYMQESqeZyQq
          source_id: s_pAM16aCPm14gA9Ezh35j1Y
          stance: supports
          locator: CBDB:512894
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6801-6900）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_pAM16aCPm14gA9Ezh35j1Y
            source_type: api_record
            title: 中国历代人物传记资料库：王思哲（CBDB 512894）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=512894&o=json
            external_identifier: CBDB:512894
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:15.776Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_ARETZlwyQJJu35I_FhPHQ3
        subject_person_id: p_TmbAJFMcbhV7yE49pkPE3j
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_vsRRekapTcZ6VLWQop1yh2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hB5Svn-sqMWB0QmK0_Oka5
          claim_id: c_ARETZlwyQJJu35I_FhPHQ3
          source_id: s_CqTLkPqbXxwoaCU1zUoAi0
          stance: supports
          locator: 天津衛志，lgid=24694：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CqTLkPqbXxwoaCU1zUoAi0
            source_type: api_record
            title: 中国历代人物传记资料库：孫氏(王思哲妻)（CBDB 512893）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=512893&o=json
            external_identifier: CBDB:512893
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_vsRRekapTcZ6VLWQop1yh2
        status: active
        display_name: 孫氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王思哲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王思哲，清人物。中国历代人物传记资料库（CBDB）以人物编号 512894 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王思哲 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_vsRRekapTcZ6VLWQop1yh2 | 孫氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：孫氏(王思哲妻)（CBDB 512893）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=512893&o=json)
- [中国历代人物传记资料库：王思哲（CBDB 512894）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=512894&o=json)
