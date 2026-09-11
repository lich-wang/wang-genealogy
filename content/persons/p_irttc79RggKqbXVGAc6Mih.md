---
schema: wang-person/v1
id: p_irttc79RggKqbXVGAc6Mih
status: active
merged_into: null
display_name: 王淵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zAJ68emk7pQXJsKU84J8dE
        subject_person_id: p_irttc79RggKqbXVGAc6Mih
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nwGtsVbj4gDACbp4XDPLXx
          claim_id: c_zAJ68emk7pQXJsKU84J8dE
          source_id: s_kpCpJwLfuA6TdHq32v3CBW
          stance: supports
          locator: CBDB:488855
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（488855）
          source: &a1
            id: s_kpCpJwLfuA6TdHq32v3CBW
            source_type: api_record
            title: 中国历代人物传记资料库：王淵（CBDB 488855）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=488855&o=json
            external_identifier: CBDB:488855
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.998Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zoD8X7kdafGdJMu4iz9jw2
        subject_person_id: p_irttc79RggKqbXVGAc6Mih
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淵，明人物。籍贯山陰，曾任經歷、吏科給事中、州判官。（中国历代人物传记资料库 CBDB 488855）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hZEHt6LgmM6Y8HhDUJBueF
          claim_id: c_zoD8X7kdafGdJMu4iz9jw2
          source_id: s_kpCpJwLfuA6TdHq32v3CBW
          stance: supports
          locator: CBDB:488855
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

# 王淵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淵 | accepted |
| bio.summary | 王淵，明人物。籍贯山陰，曾任經歷、吏科給事中、州判官。（中国历代人物传记资料库 CBDB 488855） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王淵（CBDB 488855）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=488855&o=json)
