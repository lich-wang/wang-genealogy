---
schema: wang-person/v1
id: p_AvftSFD1UMszAYQoWiqrBd
status: active
merged_into: null
display_name: 王樵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4Evj8ybhDZKS6sD9Jrd7oL
        subject_person_id: p_AvftSFD1UMszAYQoWiqrBd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Kg74ENKiwrWFTnGBh7eyWY
          claim_id: c_4Evj8ybhDZKS6sD9Jrd7oL
          source_id: s_Mqx2FDdv7HZVh1rY77uJni
          stance: supports
          locator: CBDB:37808
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37808）
          source: &a1
            id: s_Mqx2FDdv7HZVh1rY77uJni
            source_type: api_record
            title: 中国历代人物传记资料库：王樵（CBDB 37808）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37808&o=json
            external_identifier: CBDB:37808
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.259Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QXtoiGsDVAY2PhaS9v8FDt
        subject_person_id: p_AvftSFD1UMszAYQoWiqrBd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樵，宋人物。籍贯淄川，身份为博學之人、經學家—易經。（中国历代人物传记资料库 CBDB 37808）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xI-WBbhi7-78f7C-qWmVH7
          claim_id: c_QXtoiGsDVAY2PhaS9v8FDt
          source_id: s_Mqx2FDdv7HZVh1rY77uJni
          stance: supports
          locator: CBDB:37808
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

# 王樵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王樵 | accepted |
| bio.summary | 王樵，宋人物。籍贯淄川，身份为博學之人、經學家—易經。（中国历代人物传记资料库 CBDB 37808） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王樵（CBDB 37808）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37808&o=json)
