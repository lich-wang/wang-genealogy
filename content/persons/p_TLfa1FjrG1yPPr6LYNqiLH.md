---
schema: wang-person/v1
id: p_TLfa1FjrG1yPPr6LYNqiLH
status: active
merged_into: null
display_name: 王仲起
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NfMLBbNQP4yRLBPSDKKHYP
        subject_person_id: p_TLfa1FjrG1yPPr6LYNqiLH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲起
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XAw8WBCEpUi9j9ooTBEAqF
          claim_id: c_NfMLBbNQP4yRLBPSDKKHYP
          source_id: s_kMf4TzTHvQP5gWnruJA5xc
          stance: supports
          locator: CBDB:243237
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（243237）
          source: &a1
            id: s_kMf4TzTHvQP5gWnruJA5xc
            source_type: api_record
            title: 中国历代人物传记资料库：王仲起（CBDB 243237）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243237&o=json
            external_identifier: CBDB:243237
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.994Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_r9YGDs94UciFnbNz7Zn29Z
        subject_person_id: p_TLfa1FjrG1yPPr6LYNqiLH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲起，明人物。成化五年進士，曾任按察使。（中国历代人物传记资料库 CBDB 243237）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ehgOkstIXJl3YOLW3hEIWL
          claim_id: c_r9YGDs94UciFnbNz7Zn29Z
          source_id: s_kMf4TzTHvQP5gWnruJA5xc
          stance: supports
          locator: CBDB:243237
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
        id: c_yYV0lJtl1C2DRlK028hX8b
        subject_person_id: p_TLfa1FjrG1yPPr6LYNqiLH
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_eeT9SQ93RGpf2B6Bihu6TP
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tblBFDngiLvwMce8hBbFRO
          claim_id: c_yYV0lJtl1C2DRlK028hX8b
          source_id: s_kMf4TzTHvQP5gWnruJA5xc
          stance: supports
          locator: 成化五年進士登科錄:一卷，第二甲第六十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_eeT9SQ93RGpf2B6Bihu6TP
        status: active
        display_name: 王臣
        merged_into_person_id: null
  other: []
---

# 王仲起

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲起 | accepted |
| bio.summary | 王仲起，明人物。成化五年進士，曾任按察使。（中国历代人物传记资料库 CBDB 243237） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_eeT9SQ93RGpf2B6Bihu6TP | 王臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王仲起（CBDB 243237）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243237&o=json)
