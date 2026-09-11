---
schema: wang-person/v1
id: p_Dntbka8uAqfJTyo4hCsWBi
status: active
merged_into: null
display_name: 王榮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xdFGy741Uv3QaQJ49c4GuP
        subject_person_id: p_Dntbka8uAqfJTyo4hCsWBi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iQ3zgLJdty6JFMjTcqVn1F
          claim_id: c_xdFGy741Uv3QaQJ49c4GuP
          source_id: s_Mgp61CsHy2VQQyws3PF2dY
          stance: supports
          locator: CBDB:458977
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（458977）
          source: &a1
            id: s_Mgp61CsHy2VQQyws3PF2dY
            source_type: api_record
            title: 中国历代人物传记资料库：王榮（CBDB 458977）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=458977&o=json
            external_identifier: CBDB:458977
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.675Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KfsXUVsEnJdNdqEfAyrxzh
        subject_person_id: p_Dntbka8uAqfJTyo4hCsWBi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榮，明人物。入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 458977）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ttqpiism2l5m1qeOfXIm_p
          claim_id: c_KfsXUVsEnJdNdqEfAyrxzh
          source_id: s_Mgp61CsHy2VQQyws3PF2dY
          stance: supports
          locator: CBDB:458977
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

# 王榮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王榮 | accepted |
| bio.summary | 王榮，明人物。入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 458977） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王榮（CBDB 458977）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=458977&o=json)
