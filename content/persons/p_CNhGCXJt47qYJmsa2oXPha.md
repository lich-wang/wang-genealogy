---
schema: wang-person/v1
id: p_CNhGCXJt47qYJmsa2oXPha
status: active
merged_into: null
display_name: 王尚忠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9thr6P27F655GU4ByE6V3W
        subject_person_id: p_CNhGCXJt47qYJmsa2oXPha
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_k5RpdNo14RXPBTrtc2wzwB
          claim_id: c_9thr6P27F655GU4ByE6V3W
          source_id: s_B1A2xBEPUgAgkN62mCP5je
          stance: supports
          locator: CBDB:313488
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（313488）
          source: &a1
            id: s_B1A2xBEPUgAgkN62mCP5je
            source_type: api_record
            title: 中国历代人物传记资料库：王尚忠（CBDB 313488）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313488&o=json
            external_identifier: CBDB:313488
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.910Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QTmE2bE4WoGGJxsfENK4aQ
        subject_person_id: p_CNhGCXJt47qYJmsa2oXPha
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚忠，明人物。嘉靖二十九年進士，籍贯汶上。（中国历代人物传记资料库 CBDB 313488）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CqdLzGi6WhWYqDdFYs0TZG
          claim_id: c_QTmE2bE4WoGGJxsfENK4aQ
          source_id: s_B1A2xBEPUgAgkN62mCP5je
          stance: supports
          locator: CBDB:313488
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_M53inaslSpwUtKE-opkOOD
        subject_person_id: p_CNhGCXJt47qYJmsa2oXPha
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KhmS5kyzCCCFTjqjDJhXt2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DMtCGEmxHIAS1h379dxsvV
          claim_id: c_M53inaslSpwUtKE-opkOOD
          source_id: s_B1A2xBEPUgAgkN62mCP5je
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第八十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_KhmS5kyzCCCFTjqjDJhXt2
        status: active
        display_name: 王用康
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王尚忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王尚忠 | accepted |
| bio.summary | 王尚忠，明人物。嘉靖二十九年進士，籍贯汶上。（中国历代人物传记资料库 CBDB 313488） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_KhmS5kyzCCCFTjqjDJhXt2 | 王用康 | accepted |

## 外部来源

- [中国历代人物传记资料库：王尚忠（CBDB 313488）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313488&o=json)
