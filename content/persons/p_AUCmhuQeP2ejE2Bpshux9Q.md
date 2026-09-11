---
schema: wang-person/v1
id: p_AUCmhuQeP2ejE2Bpshux9Q
status: active
merged_into: null
display_name: 王冠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XKdkHoFFq4tnQx2xTaAS6S
        subject_person_id: p_AUCmhuQeP2ejE2Bpshux9Q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王冠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QbabFekbNHVzyhWezCPodH
          claim_id: c_XKdkHoFFq4tnQx2xTaAS6S
          source_id: s_GRnrZyNSazSCNHqbsRuPAa
          stance: supports
          locator: CBDB:243170
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（243170）
          source: &a1
            id: s_GRnrZyNSazSCNHqbsRuPAa
            source_type: api_record
            title: 中国历代人物传记资料库：王冠（CBDB 243170）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243170&o=json
            external_identifier: CBDB:243170
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.990Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kfWdSrDzQtoNBLhcJCN52G
        subject_person_id: p_AUCmhuQeP2ejE2Bpshux9Q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王冠，明人物。成化五年進士，籍贯常熟。（中国历代人物传记资料库 CBDB 243170）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hZ_0IGCRJdOuHpl1BUyy6Q
          claim_id: c_kfWdSrDzQtoNBLhcJCN52G
          source_id: s_GRnrZyNSazSCNHqbsRuPAa
          stance: supports
          locator: CBDB:243170
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

# 王冠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王冠 | accepted |
| bio.summary | 王冠，明人物。成化五年進士，籍贯常熟。（中国历代人物传记资料库 CBDB 243170） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王冠（CBDB 243170）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243170&o=json)
