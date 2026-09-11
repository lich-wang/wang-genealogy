---
schema: wang-person/v1
id: p_P3AwyeFy5GtbSMHfuh3jNi
status: active
merged_into: null
display_name: 王嵩年
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hfycviFeQ4aEcPGaHA2TFM
        subject_person_id: p_P3AwyeFy5GtbSMHfuh3jNi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嵩年
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Tj79aSg5sEsvfpQad5qQRA
          claim_id: c_hfycviFeQ4aEcPGaHA2TFM
          source_id: s_cZcauDh2MaQu6Gph4K8HeM
          stance: supports
          locator: CBDB:637369
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637369）
          source: &a1
            id: s_cZcauDh2MaQu6Gph4K8HeM
            source_type: api_record
            title: 中国历代人物传记资料库：王嵩年（CBDB 637369）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637369&o=json
            external_identifier: CBDB:637369
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.393Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_23DJ9pq7YhLzPcCvqSrhyj
        subject_person_id: p_P3AwyeFy5GtbSMHfuh3jNi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王嵩年，清人物。籍贯介休，入仕貢生: 拔貢，曾任知縣。（中国历代人物传记资料库 CBDB 637369）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Pb_zFtCjMFUabina_tp6S9
          claim_id: c_23DJ9pq7YhLzPcCvqSrhyj
          source_id: s_cZcauDh2MaQu6Gph4K8HeM
          stance: supports
          locator: CBDB:637369
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

# 王嵩年

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嵩年 | accepted |
| bio.summary | 王嵩年，清人物。籍贯介休，入仕貢生: 拔貢，曾任知縣。（中国历代人物传记资料库 CBDB 637369） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嵩年（CBDB 637369）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637369&o=json)
