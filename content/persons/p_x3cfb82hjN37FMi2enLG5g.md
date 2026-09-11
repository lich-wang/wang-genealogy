---
schema: wang-person/v1
id: p_x3cfb82hjN37FMi2enLG5g
status: active
merged_into: null
display_name: 王素
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DrxEgTvoXmxdXp1iLqkqAQ
        subject_person_id: p_x3cfb82hjN37FMi2enLG5g
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王素
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZjFe2ZkWGHfmQdQ2DViBpF
          claim_id: c_DrxEgTvoXmxdXp1iLqkqAQ
          source_id: s_jPoYzy4eT6TrNDZeNzFnTm
          stance: supports
          locator: CBDB:97991
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（97991）
          source: &a1
            id: s_jPoYzy4eT6TrNDZeNzFnTm
            source_type: api_record
            title: 中国历代人物传记资料库：王素（CBDB 97991）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97991&o=json
            external_identifier: CBDB:97991
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.280Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wkdGzGwaxoJcu55gf6uADV
        subject_person_id: p_x3cfb82hjN37FMi2enLG5g
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王素，宋人物。曾任天章閣待制、尚書省兵部職方司員外郎、尚書省刑部刑部司郎中。（中国历代人物传记资料库 CBDB 97991）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ngmE2dqecEYqY5B6yPUoWH
          claim_id: c_wkdGzGwaxoJcu55gf6uADV
          source_id: s_jPoYzy4eT6TrNDZeNzFnTm
          stance: supports
          locator: CBDB:97991
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

# 王素

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王素 | accepted |
| bio.summary | 王素，宋人物。曾任天章閣待制、尚書省兵部職方司員外郎、尚書省刑部刑部司郎中。（中国历代人物传记资料库 CBDB 97991） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王素（CBDB 97991）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97991&o=json)
