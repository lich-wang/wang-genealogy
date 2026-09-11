---
schema: wang-person/v1
id: p_rfGh8MbuNHDRVUyPhwo2Rs
status: active
merged_into: null
display_name: 王養壽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZPw1gfYbG5H5paUASUSDDC
        subject_person_id: p_rfGh8MbuNHDRVUyPhwo2Rs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王養壽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_knoV6tfV45iVBFTVmNfk3n
          claim_id: c_ZPw1gfYbG5H5paUASUSDDC
          source_id: s_Xfi4KAZcm35fm9m8Etzh8s
          stance: supports
          locator: CBDB:640881
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640881）
          source: &a1
            id: s_Xfi4KAZcm35fm9m8Etzh8s
            source_type: api_record
            title: 中国历代人物传记资料库：王養壽（CBDB 640881）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640881&o=json
            external_identifier: CBDB:640881
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.400Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cBAXZHqAvwSHi3dkKieesg
        subject_person_id: p_rfGh8MbuNHDRVUyPhwo2Rs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王養壽，清人物。籍贯蕭山，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 640881）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tc3nNrHSLE-iyKN9ClIoJc
          claim_id: c_cBAXZHqAvwSHi3dkKieesg
          source_id: s_Xfi4KAZcm35fm9m8Etzh8s
          stance: supports
          locator: CBDB:640881
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

# 王養壽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王養壽 | accepted |
| bio.summary | 王養壽，清人物。籍贯蕭山，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 640881） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王養壽（CBDB 640881）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640881&o=json)
