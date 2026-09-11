---
schema: wang-person/v1
id: p_bwhyE2vUXZUPokYCjXBy37
status: active
merged_into: null
display_name: 王宰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CMPqUKa3bNnDWKEv6Mc9mt
        subject_person_id: p_bwhyE2vUXZUPokYCjXBy37
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_meUywoEkAA63dYZBQcHgL9
          claim_id: c_CMPqUKa3bNnDWKEv6Mc9mt
          source_id: s_VFcXFXpFfnnsGV2AueD5BP
          stance: supports
          locator: CBDB:379708
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（379708）
          source: &a1
            id: s_VFcXFXpFfnnsGV2AueD5BP
            source_type: api_record
            title: 中国历代人物传记资料库：王宰（CBDB 379708）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=379708&o=json
            external_identifier: CBDB:379708
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.692Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Yg7CeD8n2Ja8ApC6zVraRV
        subject_person_id: p_bwhyE2vUXZUPokYCjXBy37
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宰，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 379708）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WweSrJpm3Vh3JF4VoW9VKk
          claim_id: c_Yg7CeD8n2Ja8ApC6zVraRV
          source_id: s_VFcXFXpFfnnsGV2AueD5BP
          stance: supports
          locator: CBDB:379708
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

# 王宰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宰 | accepted |
| bio.summary | 王宰，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 379708） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宰（CBDB 379708）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=379708&o=json)
