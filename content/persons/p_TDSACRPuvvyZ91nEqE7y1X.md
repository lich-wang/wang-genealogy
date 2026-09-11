---
schema: wang-person/v1
id: p_TDSACRPuvvyZ91nEqE7y1X
status: active
merged_into: null
display_name: 王輔
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JGMRQeXYgcf5KEBmJF9Gm6
        subject_person_id: p_TDSACRPuvvyZ91nEqE7y1X
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KCDaA86KU96Lo6KRCnhTjL
          claim_id: c_JGMRQeXYgcf5KEBmJF9Gm6
          source_id: s_7PSmEf7qfuJ3kKoKrpvXbc
          stance: supports
          locator: CBDB:306144
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（306144）
          source: &a1
            id: s_7PSmEf7qfuJ3kKoKrpvXbc
            source_type: api_record
            title: 中国历代人物传记资料库：王輔（CBDB 306144）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306144&o=json
            external_identifier: CBDB:306144
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.757Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vmcAY8UnrCsCgPrtSEdm4S
        subject_person_id: p_TDSACRPuvvyZ91nEqE7y1X
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
        - id: cs_5gmpdkabKAkGmYjf2AdP7g
          claim_id: c_vmcAY8UnrCsCgPrtSEdm4S
          source_id: s_7PSmEf7qfuJ3kKoKrpvXbc
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
        id: c_hqZyVoU5XKRN_-Wmng1Bju
        subject_person_id: p_TDSACRPuvvyZ91nEqE7y1X
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4epX45r9bJPqQLoodeDXss
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ved4MD7oO-GxLXjMa6sQrK
          claim_id: c_hqZyVoU5XKRN_-Wmng1Bju
          source_id: s_mQ2Mbm44EcchNqrBaH456s
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第二甲第八十八名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_mQ2Mbm44EcchNqrBaH456s
            source_type: api_record
            title: 中国历代人物传记资料库：王一陽（CBDB 203535）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203535&o=json
            external_identifier: CBDB:203535
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.791Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4epX45r9bJPqQLoodeDXss
        status: active
        display_name: 王一陽
        merged_into_person_id: null
  other: []
---

# 王輔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王輔 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_4epX45r9bJPqQLoodeDXss | 王一陽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王輔（CBDB 306144）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306144&o=json)
- [中国历代人物传记资料库：王一陽（CBDB 203535）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203535&o=json)
