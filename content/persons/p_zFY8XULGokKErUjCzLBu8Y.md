---
schema: wang-person/v1
id: p_zFY8XULGokKErUjCzLBu8Y
status: active
merged_into: null
display_name: 王九畴
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_468JYYMc66LHsZj9Yb8v5F
        subject_person_id: p_zFY8XULGokKErUjCzLBu8Y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九畴
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iqopL8HBDxgG22HiEabPoT
          claim_id: c_468JYYMc66LHsZj9Yb8v5F
          source_id: s_rTz4y9v49heP2WEyV1Jk2H
          stance: supports
          locator: CBDB:557330
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（557330）
          source: &a1
            id: s_rTz4y9v49heP2WEyV1Jk2H
            source_type: api_record
            title: 中国历代人物传记资料库：王九畴（CBDB 557330）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557330&o=json
            external_identifier: CBDB:557330
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.667Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_S2sSL6bGq9sc1wi8M1cy3m
        subject_person_id: p_zFY8XULGokKErUjCzLBu8Y
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九畴，明人物。籍贯鄧州，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 557330）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_miDzCCs2NExCaf11iBarOJ
          claim_id: c_S2sSL6bGq9sc1wi8M1cy3m
          source_id: s_rTz4y9v49heP2WEyV1Jk2H
          stance: supports
          locator: CBDB:557330
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

# 王九畴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王九畴 | accepted |
| bio.summary | 王九畴，明人物。籍贯鄧州，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 557330） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王九畴（CBDB 557330）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557330&o=json)
