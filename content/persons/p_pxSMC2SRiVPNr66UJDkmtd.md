---
schema: wang-person/v1
id: p_pxSMC2SRiVPNr66UJDkmtd
status: active
merged_into: null
display_name: 王大均
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zWCmVUcKaN9PBVfQZ9qDck
        subject_person_id: p_pxSMC2SRiVPNr66UJDkmtd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大均
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wH6G9ncqWPnJfxUSaYo812
          claim_id: c_zWCmVUcKaN9PBVfQZ9qDck
          source_id: s_6yvgD8vsTtpKE5Fg8vSE4U
          stance: supports
          locator: CBDB:474988
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（474988）
          source: &a1
            id: s_6yvgD8vsTtpKE5Fg8vSE4U
            source_type: api_record
            title: 中国历代人物传记资料库：王大均（CBDB 474988）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=474988&o=json
            external_identifier: CBDB:474988
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.389Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BUX3QCLe91zQPw6HjBdTfE
        subject_person_id: p_pxSMC2SRiVPNr66UJDkmtd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大均，清人物。入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 474988）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VbDVRi85AQwY2nSpbzi1l7
          claim_id: c_BUX3QCLe91zQPw6HjBdTfE
          source_id: s_6yvgD8vsTtpKE5Fg8vSE4U
          stance: supports
          locator: CBDB:474988
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

# 王大均

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大均 | accepted |
| bio.summary | 王大均，清人物。入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 474988） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大均（CBDB 474988）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=474988&o=json)
