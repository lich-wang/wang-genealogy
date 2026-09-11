---
schema: wang-person/v1
id: p_wDTufhNDbJfmtv7oH6fp1F
status: active
merged_into: null
display_name: 王灝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7bvM9PaFvvrE38u23ywx4Z
        subject_person_id: p_wDTufhNDbJfmtv7oH6fp1F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王灝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NahDBER3VcDjS2T8wU2XWW
          claim_id: c_7bvM9PaFvvrE38u23ywx4Z
          source_id: s_k7nxMXHnxkwbg6PQZpQ3Nb
          stance: supports
          locator: CBDB:458674
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（458674）
          source: &a1
            id: s_k7nxMXHnxkwbg6PQZpQ3Nb
            source_type: api_record
            title: 中国历代人物传记资料库：王灝（CBDB 458674）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=458674&o=json
            external_identifier: CBDB:458674
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.659Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uzjJ8LX6QUHkkCSj5gLyWM
        subject_person_id: p_wDTufhNDbJfmtv7oH6fp1F
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王灝，清人物。入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任知縣。（中国历代人物传记资料库 CBDB 458674）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WKlS4I5JXY2pRcph5Zavu_
          claim_id: c_uzjJ8LX6QUHkkCSj5gLyWM
          source_id: s_k7nxMXHnxkwbg6PQZpQ3Nb
          stance: supports
          locator: CBDB:458674
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

# 王灝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王灝 | accepted |
| bio.summary | 王灝，清人物。入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任知縣。（中国历代人物传记资料库 CBDB 458674） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王灝（CBDB 458674）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=458674&o=json)
