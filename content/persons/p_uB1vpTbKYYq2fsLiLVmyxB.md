---
schema: wang-person/v1
id: p_uB1vpTbKYYq2fsLiLVmyxB
status: active
merged_into: null
display_name: 王綵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GwtQXcAvwYj33zDvHzWYPi
        subject_person_id: p_uB1vpTbKYYq2fsLiLVmyxB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vNrcoRrDuKpUnDHDhLtPFo
          claim_id: c_GwtQXcAvwYj33zDvHzWYPi
          source_id: s_TyNx2pjs5L5iNixLFFVcNE
          stance: supports
          locator: CBDB:261823
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（261823）
          source: &a1
            id: s_TyNx2pjs5L5iNixLFFVcNE
            source_type: api_record
            title: 中国历代人物传记资料库：王綵（CBDB 261823）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261823&o=json
            external_identifier: CBDB:261823
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.558Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gXQKfrtfWTwr32F6PDJ5oM
        subject_person_id: p_uB1vpTbKYYq2fsLiLVmyxB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綵，明人物。弘治三年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 261823）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_H5HoVWteAfOV2wynz_A-x0
          claim_id: c_gXQKfrtfWTwr32F6PDJ5oM
          source_id: s_TyNx2pjs5L5iNixLFFVcNE
          stance: supports
          locator: CBDB:261823
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

# 王綵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綵 | accepted |
| bio.summary | 王綵，明人物。弘治三年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 261823） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王綵（CBDB 261823）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261823&o=json)
