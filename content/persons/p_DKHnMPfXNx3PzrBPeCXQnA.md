---
schema: wang-person/v1
id: p_DKHnMPfXNx3PzrBPeCXQnA
status: active
merged_into: null
display_name: 王震隆
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fLudFEGpT6XzoxjNpAMPME
        subject_person_id: p_DKHnMPfXNx3PzrBPeCXQnA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王震隆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zYU89244gMsMXXFx3qN37e
          claim_id: c_fLudFEGpT6XzoxjNpAMPME
          source_id: s_Awyon3BuuSfDu9cMJ5NiBU
          stance: supports
          locator: CBDB:260709
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（260709）
          source: &a1
            id: s_Awyon3BuuSfDu9cMJ5NiBU
            source_type: api_record
            title: 中国历代人物传记资料库：王震隆（CBDB 260709）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260709&o=json
            external_identifier: CBDB:260709
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.531Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ku8Q15oHQxTcEM5ZaNc3QF
        subject_person_id: p_DKHnMPfXNx3PzrBPeCXQnA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王震隆，明人物。成化二十三年進士。（中国历代人物传记资料库 CBDB 260709）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cyOse88iO1xz8_DoAPOq4p
          claim_id: c_Ku8Q15oHQxTcEM5ZaNc3QF
          source_id: s_Awyon3BuuSfDu9cMJ5NiBU
          stance: supports
          locator: CBDB:260709
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
        id: c_yd-gWQWVT5JSutHLKHcRVZ
        subject_person_id: p_DKHnMPfXNx3PzrBPeCXQnA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_fKzK34U3bvaoYweEWJgVKJ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x3akTynKTmeS-BELUwDU_7
          claim_id: c_yd-gWQWVT5JSutHLKHcRVZ
          source_id: s_Awyon3BuuSfDu9cMJ5NiBU
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第二百一十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_fKzK34U3bvaoYweEWJgVKJ
        status: active
        display_name: 王琚
        merged_into_person_id: null
  other: []
---

# 王震隆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王震隆 | accepted |
| bio.summary | 王震隆，明人物。成化二十三年進士。（中国历代人物传记资料库 CBDB 260709） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_fKzK34U3bvaoYweEWJgVKJ | 王琚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王震隆（CBDB 260709）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260709&o=json)
