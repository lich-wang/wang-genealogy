---
schema: wang-person/v1
id: p_NALaGpPV3qbViC3MtZKtsW
status: active
merged_into: null
display_name: 王起幹
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vKYprNaa5RWczAUHoDQ685
        subject_person_id: p_NALaGpPV3qbViC3MtZKtsW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王起幹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GJkNh9FHwEaBCCkQhCibbC
          claim_id: c_vKYprNaa5RWczAUHoDQ685
          source_id: s_kotmK3T5hGjmzT665dA3cR
          stance: supports
          locator: CBDB:574724
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（574724）
          source: &a1
            id: s_kotmK3T5hGjmzT665dA3cR
            source_type: api_record
            title: 中国历代人物传记资料库：王起幹（CBDB 574724）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574724&o=json
            external_identifier: CBDB:574724
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.684Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aCvWRB55ERgq54h4J45xnB
        subject_person_id: p_NALaGpPV3qbViC3MtZKtsW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王起幹，清人物。籍贯京山，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 574724）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_G1ChZe8Fb8Zj0ZSM0gLqcH
          claim_id: c_aCvWRB55ERgq54h4J45xnB
          source_id: s_kotmK3T5hGjmzT665dA3cR
          stance: supports
          locator: CBDB:574724
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
  ancestors: []
  descendants: []
  other: []
---

# 王起幹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王起幹 | accepted |
| bio.summary | 王起幹，清人物。籍贯京山，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 574724） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王起幹（CBDB 574724）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574724&o=json)
