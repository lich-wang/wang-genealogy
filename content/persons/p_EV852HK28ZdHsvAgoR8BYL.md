---
schema: wang-person/v1
id: p_EV852HK28ZdHsvAgoR8BYL
status: active
merged_into: null
display_name: 王雄
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ATDHAhbmDm863A4PeSsGjW
        subject_person_id: p_EV852HK28ZdHsvAgoR8BYL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_q2JLjozmLYVuFx7nLA75k3
          claim_id: c_ATDHAhbmDm863A4PeSsGjW
          source_id: s_NxGfxyY9sNtfAWbxok48j3
          stance: supports
          locator: CBDB:317015
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（317015）
          source: &a1
            id: s_NxGfxyY9sNtfAWbxok48j3
            source_type: api_record
            title: 中国历代人物传记资料库：王雄（CBDB 317015）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317015&o=json
            external_identifier: CBDB:317015
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.966Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LmAHL56APuUBA8V54Y92qR
        subject_person_id: p_EV852HK28ZdHsvAgoR8BYL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雄，明人物。嘉靖三十二年進士，曾任監察御史。（中国历代人物传记资料库 CBDB 317015）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_t6WY5M_AsbKLCNqD_dOrEQ
          claim_id: c_LmAHL56APuUBA8V54Y92qR
          source_id: s_NxGfxyY9sNtfAWbxok48j3
          stance: supports
          locator: CBDB:317015
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
        id: c_D2leodCO-B-OKQs1j1X8dR
        subject_person_id: p_EV852HK28ZdHsvAgoR8BYL
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_waicV9Fo2q7nkgGJNdNMWK
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__2YF4vQKUTyi1xVMgpHfUj
          claim_id: c_D2leodCO-B-OKQs1j1X8dR
          source_id: s_NxGfxyY9sNtfAWbxok48j3
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第九十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_waicV9Fo2q7nkgGJNdNMWK
        status: active
        display_name: 王察言
        merged_into_person_id: null
  other: []
---

# 王雄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王雄 | accepted |
| bio.summary | 王雄，明人物。嘉靖三十二年進士，曾任監察御史。（中国历代人物传记资料库 CBDB 317015） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_waicV9Fo2q7nkgGJNdNMWK | 王察言 | accepted |

## 外部来源

- [中国历代人物传记资料库：王雄（CBDB 317015）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317015&o=json)
