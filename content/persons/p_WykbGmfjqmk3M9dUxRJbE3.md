---
schema: wang-person/v1
id: p_WykbGmfjqmk3M9dUxRJbE3
status: active
merged_into: null
display_name: 王仲嶷
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pzQR95D6jGuKfA9P48ECFD
        subject_person_id: p_WykbGmfjqmk3M9dUxRJbE3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲嶷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zeDVdHPu89h273kL5D4PkN
          claim_id: c_pzQR95D6jGuKfA9P48ECFD
          source_id: s_M9VjMNMbsnDivVWoFgTPax
          stance: supports
          locator: CBDB:7373
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（7373）
          source: &a1
            id: s_M9VjMNMbsnDivVWoFgTPax
            source_type: api_record
            title: 中国历代人物传记资料库：王仲嶷（CBDB 7373）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7373&o=json
            external_identifier: CBDB:7373
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.474Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ntwm9yr7hrDepYpmFEoeSY
        subject_person_id: p_WykbGmfjqmk3M9dUxRJbE3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲嶷，宋人物。籍贯長洲，身份为削籍官員，曾任待制、左通奉大夫、顯謨閣待制。（中国历代人物传记资料库 CBDB 7373）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_B3RtTUA1ennq4Awx9ELSkr
          claim_id: c_Ntwm9yr7hrDepYpmFEoeSY
          source_id: s_M9VjMNMbsnDivVWoFgTPax
          stance: supports
          locator: CBDB:7373
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

# 王仲嶷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲嶷 | accepted |
| bio.summary | 王仲嶷，宋人物。籍贯長洲，身份为削籍官員，曾任待制、左通奉大夫、顯謨閣待制。（中国历代人物传记资料库 CBDB 7373） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仲嶷（CBDB 7373）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7373&o=json)
