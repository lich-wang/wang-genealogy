---
schema: wang-person/v1
id: p_tSsjwapyRPyApQuECzejAs
status: active
merged_into: null
display_name: 王晱
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_A8GHpkxboQwKb78CudjM6W
        subject_person_id: p_tSsjwapyRPyApQuECzejAs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_T6n5P2xgyh4c6HY61LqZwA
          claim_id: c_A8GHpkxboQwKb78CudjM6W
          source_id: s_yhTwL41dxqqFjYnPo6mwso
          stance: supports
          locator: CBDB:695562
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（695562）
          source: &a1
            id: s_yhTwL41dxqqFjYnPo6mwso
            source_type: api_record
            title: 中国历代人物传记资料库：王晱（CBDB 695562）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=695562&o=json
            external_identifier: CBDB:695562
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.539Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ks74qecqTvW342E78ex8p9
        subject_person_id: p_tSsjwapyRPyApQuECzejAs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王晱，清人物。籍贯鄞縣，身份为主動放棄科舉，入仕學校: 生員(庠生)，曾任知縣。（中国历代人物传记资料库 CBDB 695562）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_r7c40gKKOhw4vF6u3i5MdD
          claim_id: c_Ks74qecqTvW342E78ex8p9
          source_id: s_yhTwL41dxqqFjYnPo6mwso
          stance: supports
          locator: CBDB:695562
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

# 王晱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王晱 | accepted |
| bio.summary | 王晱，清人物。籍贯鄞縣，身份为主動放棄科舉，入仕學校: 生員(庠生)，曾任知縣。（中国历代人物传记资料库 CBDB 695562） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王晱（CBDB 695562）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=695562&o=json)
