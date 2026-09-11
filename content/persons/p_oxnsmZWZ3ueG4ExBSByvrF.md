---
schema: wang-person/v1
id: p_oxnsmZWZ3ueG4ExBSByvrF
status: active
merged_into: null
display_name: 王元德
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Hs1c2U18wRYmCWYQPuzeKx
        subject_person_id: p_oxnsmZWZ3ueG4ExBSByvrF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Dzom6eHFDqaB9qZdnFCf38
          claim_id: c_Hs1c2U18wRYmCWYQPuzeKx
          source_id: s_VBc32qwvAesEdGPn5jqnVx
          stance: supports
          locator: CBDB:28884
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（28884）
          source: &a1
            id: s_VBc32qwvAesEdGPn5jqnVx
            source_type: api_record
            title: 中国历代人物传记资料库：王元德（CBDB 28884）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28884&o=json
            external_identifier: CBDB:28884
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.985Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wjyECQ6sYBHVCmoJqfiBEH
        subject_person_id: p_oxnsmZWZ3ueG4ExBSByvrF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元德，金人物。籍贯弘州，入仕進士。（中国历代人物传记资料库 CBDB 28884）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8xj3xb4sKmnKOa3QA074qE
          claim_id: c_wjyECQ6sYBHVCmoJqfiBEH
          source_id: s_VBc32qwvAesEdGPn5jqnVx
          stance: supports
          locator: CBDB:28884
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_cQlxS2IQzYRmJ7ZzGQZkge
        subject_person_id: p_qCuaUyH1y45aEnsbXbyLvR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oxnsmZWZ3ueG4ExBSByvrF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BSQfP8oyY59RjHOUTgsxgH
          claim_id: c_cQlxS2IQzYRmJ7ZzGQZkge
          source_id: s_VBc32qwvAesEdGPn5jqnVx
          stance: supports
          locator: CBDB 双向互证（父 王詡 ⇄ 子 王元德）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_qCuaUyH1y45aEnsbXbyLvR
        status: active
        display_name: 王詡
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王元德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元德 | accepted |
| bio.summary | 王元德，金人物。籍贯弘州，入仕進士。（中国历代人物传记资料库 CBDB 28884） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qCuaUyH1y45aEnsbXbyLvR | 王詡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王元德（CBDB 28884）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28884&o=json)
