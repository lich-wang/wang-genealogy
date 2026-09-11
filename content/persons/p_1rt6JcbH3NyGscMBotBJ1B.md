---
schema: wang-person/v1
id: p_1rt6JcbH3NyGscMBotBJ1B
status: active
merged_into: null
display_name: 王元通
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_F349ZjpYZVuTGwLTTjC3HW
        subject_person_id: p_1rt6JcbH3NyGscMBotBJ1B
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元通
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EFTP3p4qFwAo3677aSpPtJ
          claim_id: c_F349ZjpYZVuTGwLTTjC3HW
          source_id: s_J3NUCnCxDDGPaAZUNQd7KD
          stance: supports
          locator: CBDB:158172
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（158172）
          source: &a1
            id: s_J3NUCnCxDDGPaAZUNQd7KD
            source_type: api_record
            title: 中国历代人物传记资料库：王元通（CBDB 158172）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158172&o=json
            external_identifier: CBDB:158172
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.920Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YhvPpeCamDPsVX6sHTCoFT
        subject_person_id: p_1rt6JcbH3NyGscMBotBJ1B
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元通，唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 158172）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gMQ_FC173sjDOe79RAaj-N
          claim_id: c_YhvPpeCamDPsVX6sHTCoFT
          source_id: s_J3NUCnCxDDGPaAZUNQd7KD
          stance: supports
          locator: CBDB:158172
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_9QIJlfeeiVZGH2PnYRHP9i
        subject_person_id: p_Rpm9GiSnPhv5RZN23kJhyJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1rt6JcbH3NyGscMBotBJ1B
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bXHlc_nGDfP3tjgDKCf49j
          claim_id: c_9QIJlfeeiVZGH2PnYRHP9i
          source_id: s_J3NUCnCxDDGPaAZUNQd7KD
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaicheng 2：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Rpm9GiSnPhv5RZN23kJhyJ
        status: active
        display_name: 王從政
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王元通

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元通 | accepted |
| bio.summary | 王元通，唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 158172） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Rpm9GiSnPhv5RZN23kJhyJ | 王從政 | accepted |

## 外部来源

- [中国历代人物传记资料库：王元通（CBDB 158172）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158172&o=json)
