---
schema: wang-person/v1
id: p_iunf6jkKktJbV8DFg59ymf
status: active
merged_into: null
display_name: 張氏
revision: 1
cbdb_id: 253211
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cfPVwGY2GCwCAb0DUL_gM5
        subject_person_id: p_iunf6jkKktJbV8DFg59ymf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 張氏，明人物。成化十四年進士。（中国历代人物传记资料库 CBDB 253211）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hvg_PLTMFQve85kK0aKAEh
          claim_id: c_cfPVwGY2GCwCAb0DUL_gM5
          source_id: s_0oQdNYknkh6SW-jkmu-Okv
          stance: supports
          locator: CBDB:253211
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_0oQdNYknkh6SW-jkmu-Okv
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王存禮妻)（CBDB 253211）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253211&o=json
            external_identifier: CBDB:253211
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_b5rrLVfV1-TrnfcPM-XmUr
        subject_person_id: p_iunf6jkKktJbV8DFg59ymf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 張氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RIclkkIwPygf788VRCGrsU
          claim_id: c_b5rrLVfV1-TrnfcPM-XmUr
          source_id: s_0oQdNYknkh6SW-jkmu-Okv
          stance: supports
          locator: CBDB:253211
          quotation: null
          interpretation_note: CBDB 明确记录的王存禮配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_IdYbj-5GaNVMDXcZZo7HMN
        subject_person_id: p_C2E2SSj6sXsm1th4M87rCJ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_iunf6jkKktJbV8DFg59ymf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2o2cxVlfcYT_NECASMXudH
          claim_id: c_IdYbj-5GaNVMDXcZZo7HMN
          source_id: s_0oQdNYknkh6SW-jkmu-Okv
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第一百六十三名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_C2E2SSj6sXsm1th4M87rCJ
        status: active
        display_name: 王存禮
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 張氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 張氏，明人物。成化十四年進士。（中国历代人物传记资料库 CBDB 253211） | accepted |
| name.primary | 張氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_C2E2SSj6sXsm1th4M87rCJ | 王存禮 | accepted |

## 外部来源

- [中国历代人物传记资料库：張氏(王存禮妻)（CBDB 253211）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253211&o=json)
