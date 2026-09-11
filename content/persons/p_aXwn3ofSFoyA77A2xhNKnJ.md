---
schema: wang-person/v1
id: p_aXwn3ofSFoyA77A2xhNKnJ
status: active
merged_into: null
display_name: 王珙
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YMAsUVeMH1DRFoGBUaGgtF
        subject_person_id: p_aXwn3ofSFoyA77A2xhNKnJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fTMJ6K8NysnrYmAVu4K2EE
          claim_id: c_YMAsUVeMH1DRFoGBUaGgtF
          source_id: s_kXtNpXn21YgLK6yGJQWr14
          stance: supports
          locator: CBDB:311215
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（311215）
          source: &a1
            id: s_kXtNpXn21YgLK6yGJQWr14
            source_type: api_record
            title: 中国历代人物传记资料库：王珙（CBDB 311215）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311215&o=json
            external_identifier: CBDB:311215
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.850Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_G9pyaKsRQM2DmFBeYtCQxG
        subject_person_id: p_aXwn3ofSFoyA77A2xhNKnJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珙，明人物。嘉靖二十六年進士，曾任指揮使。（中国历代人物传记资料库 CBDB 311215）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nrQb_UzsPLo_NtZV_rpBPp
          claim_id: c_G9pyaKsRQM2DmFBeYtCQxG
          source_id: s_kXtNpXn21YgLK6yGJQWr14
          stance: supports
          locator: CBDB:311215
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
        id: c_bKP4w9qG48IfZbgmv5iBwr
        subject_person_id: p_aXwn3ofSFoyA77A2xhNKnJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_dBDSp35EhkaWHCV6D81q6n
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ey0hXjqmQxIPwldMrIBU-S
          claim_id: c_bKP4w9qG48IfZbgmv5iBwr
          source_id: s_kXtNpXn21YgLK6yGJQWr14
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第三甲第一百六十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_dBDSp35EhkaWHCV6D81q6n
        status: active
        display_name: 王大猷
        merged_into_person_id: null
  other: []
---

# 王珙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珙 | accepted |
| bio.summary | 王珙，明人物。嘉靖二十六年進士，曾任指揮使。（中国历代人物传记资料库 CBDB 311215） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_dBDSp35EhkaWHCV6D81q6n | 王大猷 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珙（CBDB 311215）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311215&o=json)
