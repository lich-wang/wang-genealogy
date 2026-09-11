---
schema: wang-person/v1
id: p_GiRXJTzMrTmS7SYHZYijNT
status: active
merged_into: null
display_name: 王繼宗
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MYBeGGmTRiBBT7o7Ke2NME
        subject_person_id: p_GiRXJTzMrTmS7SYHZYijNT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼宗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_x7uK3BngPaG3rKMoxX8UFQ
          claim_id: c_MYBeGGmTRiBBT7o7Ke2NME
          source_id: s_CCKSPDYdztby8shHXQYH1H
          stance: supports
          locator: CBDB:306620
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（306620）
          source: &a1
            id: s_CCKSPDYdztby8shHXQYH1H
            source_type: api_record
            title: 中国历代人物传记资料库：王繼宗（CBDB 306620）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306620&o=json
            external_identifier: CBDB:306620
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.770Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3ZnPGBJYo5xpNANw6nWaZR
        subject_person_id: p_GiRXJTzMrTmS7SYHZYijNT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xmQWnV6D2qs5APBKEjtrC9
          claim_id: c_3ZnPGBJYo5xpNANw6nWaZR
          source_id: s_CCKSPDYdztby8shHXQYH1H
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
        id: c_XHCq0fm8phZWYjy9DEgDjZ
        subject_person_id: p_GiRXJTzMrTmS7SYHZYijNT
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DCXEWHeu41hY7yzKSpPNK7
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8obtELdjAdexT1bQaxQTKz
          claim_id: c_XHCq0fm8phZWYjy9DEgDjZ
          source_id: s_CCKSPDYdztby8shHXQYH1H
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第四十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DCXEWHeu41hY7yzKSpPNK7
        status: active
        display_name: 王斛
        merged_into_person_id: null
  other: []
---

# 王繼宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼宗 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_DCXEWHeu41hY7yzKSpPNK7 | 王斛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王繼宗（CBDB 306620）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306620&o=json)
