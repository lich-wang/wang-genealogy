---
schema: wang-person/v1
id: p_YFuQNhK9To31qfrUF6opqr
status: active
merged_into: null
display_name: 王錄
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gPqf12Bu2VsDeZFM71Tfnx
        subject_person_id: p_YFuQNhK9To31qfrUF6opqr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ApiysWQvLe5dsPZFHkxbJD
          claim_id: c_gPqf12Bu2VsDeZFM71Tfnx
          source_id: s_uuCRxmkPG6WEWjs4QrUGFE
          stance: supports
          locator: CBDB:485409
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（485409）
          source: &a1
            id: s_uuCRxmkPG6WEWjs4QrUGFE
            source_type: api_record
            title: 中国历代人物传记资料库：王錄（CBDB 485409）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=485409&o=json
            external_identifier: CBDB:485409
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.894Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NPo4wXGX1TDg95pBRYZo5p
        subject_person_id: p_YFuQNhK9To31qfrUF6opqr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錄，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 485409）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WRhdx2d9kEw03pTYkxgimb
          claim_id: c_NPo4wXGX1TDg95pBRYZo5p
          source_id: s_uuCRxmkPG6WEWjs4QrUGFE
          stance: supports
          locator: CBDB:485409
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

# 王錄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錄 | accepted |
| bio.summary | 王錄，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 485409） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錄（CBDB 485409）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=485409&o=json)
