---
schema: wang-person/v1
id: p_yySFeL5rP6bbQ9nLBpmhb7
status: active
merged_into: null
display_name: 王元翰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MSVU7VzpRJMkv3gFDTFaUD
        subject_person_id: p_yySFeL5rP6bbQ9nLBpmhb7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元翰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_b8moFQxp1jSwfLeEZi58PX
          claim_id: c_MSVU7VzpRJMkv3gFDTFaUD
          source_id: s_42LUUDRJRxQR3FzSNychFa
          stance: supports
          locator: CBDB:472335
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（472335）
          source: &a1
            id: s_42LUUDRJRxQR3FzSNychFa
            source_type: api_record
            title: 中国历代人物传记资料库：王元翰（CBDB 472335）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=472335&o=json
            external_identifier: CBDB:472335
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.245Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ucWpGX2w3tQiPnAEXXM7Mz
        subject_person_id: p_yySFeL5rP6bbQ9nLBpmhb7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王元翰，清人物。入仕監生: 蔭監(含明代官生、恩生，或清代恩廕生、難廕生)，曾任知縣。（中国历代人物传记资料库 CBDB 472335）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tYNkw_AEhIIyS2TFBqbf-T
          claim_id: c_ucWpGX2w3tQiPnAEXXM7Mz
          source_id: s_42LUUDRJRxQR3FzSNychFa
          stance: supports
          locator: CBDB:472335
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

# 王元翰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元翰 | accepted |
| bio.summary | 王元翰，清人物。入仕監生: 蔭監(含明代官生、恩生，或清代恩廕生、難廕生)，曾任知縣。（中国历代人物传记资料库 CBDB 472335） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元翰（CBDB 472335）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=472335&o=json)
