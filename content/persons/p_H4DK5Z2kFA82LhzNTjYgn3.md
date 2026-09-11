---
schema: wang-person/v1
id: p_H4DK5Z2kFA82LhzNTjYgn3
status: active
merged_into: null
display_name: 王彥實
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AP8QDTw5D8R8Cy9e7maDod
        subject_person_id: p_H4DK5Z2kFA82LhzNTjYgn3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥實
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_e6QbL28izGcwMFNzr95zv7
          claim_id: c_AP8QDTw5D8R8Cy9e7maDod
          source_id: s_hdJtKQTjFEdDGeyqPwmtC3
          stance: supports
          locator: CBDB:336269
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（336269）
          source: &a1
            id: s_hdJtKQTjFEdDGeyqPwmtC3
            source_type: api_record
            title: 中国历代人物传记资料库：王彥實（CBDB 336269）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336269&o=json
            external_identifier: CBDB:336269
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.475Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_q1TUQjCzgHFHMb2HKWC85H
        subject_person_id: p_H4DK5Z2kFA82LhzNTjYgn3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥實，明人物。隆慶二年進士。（中国历代人物传记资料库 CBDB 336269）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DvFkbt_UZLxWxkLLmHD8gG
          claim_id: c_q1TUQjCzgHFHMb2HKWC85H
          source_id: s_hdJtKQTjFEdDGeyqPwmtC3
          stance: supports
          locator: CBDB:336269
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
  descendants:
    - claim:
        id: c_7ErGET8eFNCAV2P7fR-ElW
        subject_person_id: p_H4DK5Z2kFA82LhzNTjYgn3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4DoEiYtLovxcVEfxd27r2A
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EETexE_GNYiZloUeylQMjE
          claim_id: c_7ErGET8eFNCAV2P7fR-ElW
          source_id: s_GJZqse6PD7fsyQFLGTszyQ
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第一百七十七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GJZqse6PD7fsyQFLGTszyQ
            source_type: api_record
            title: 中国历代人物传记资料库：王詔（CBDB 205634）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205634&o=json
            external_identifier: CBDB:205634
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.866Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4DoEiYtLovxcVEfxd27r2A
        status: active
        display_name: 王詔
        merged_into_person_id: null
  other: []
---

# 王彥實

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彥實 | accepted |
| bio.summary | 王彥實，明人物。隆慶二年進士。（中国历代人物传记资料库 CBDB 336269） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_4DoEiYtLovxcVEfxd27r2A | 王詔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王彥實（CBDB 336269）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336269&o=json)
- [中国历代人物传记资料库：王詔（CBDB 205634）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205634&o=json)
