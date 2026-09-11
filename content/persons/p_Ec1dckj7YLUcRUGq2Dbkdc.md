---
schema: wang-person/v1
id: p_Ec1dckj7YLUcRUGq2Dbkdc
status: active
merged_into: null
display_name: 王尚絅
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_J735hzb5HC9sMATu9ceN4k
        subject_person_id: p_Ec1dckj7YLUcRUGq2Dbkdc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚絅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_duusivjvVuj31ZaRwTXpz5
          claim_id: c_J735hzb5HC9sMATu9ceN4k
          source_id: s_wQuGo7m8uxR374JaTqtXBG
          stance: supports
          locator: CBDB:126574
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126574）
          source: &a1
            id: s_wQuGo7m8uxR374JaTqtXBG
            source_type: api_record
            title: 中国历代人物传记资料库：王尚絅（CBDB 126574）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126574&o=json
            external_identifier: CBDB:126574
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.179Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_xUEpEcVtc343yyaT28wu2H
        subject_person_id: p_Ec1dckj7YLUcRUGq2Dbkdc
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1478年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G15fR7kvtmk71r5kKuEt4f
          claim_id: c_xUEpEcVtc343yyaT28wu2H
          source_id: s_wQuGo7m8uxR374JaTqtXBG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_rTi1m4WhFpqtfqBHhQ7zNW
        subject_person_id: p_Ec1dckj7YLUcRUGq2Dbkdc
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1531年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d8k9HAsoXH21egFP133k3M
          claim_id: c_rTi1m4WhFpqtfqBHhQ7zNW
          source_id: s_wQuGo7m8uxR374JaTqtXBG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FWNwi2w8CjXL3sJpPxRFVn
        subject_person_id: p_Ec1dckj7YLUcRUGq2Dbkdc
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
        - id: cs_cC8ouHtg4RYUPStK576sfy
          claim_id: c_FWNwi2w8CjXL3sJpPxRFVn
          source_id: s_wQuGo7m8uxR374JaTqtXBG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_24qkfeESX_xrM-_nldnFnI
        subject_person_id: p_BGWgef2Z8E8vPL41NM62UK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ec1dckj7YLUcRUGq2Dbkdc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GvWjV-1_vAaeC0bmrGc0Qw
          claim_id: c_24qkfeESX_xrM-_nldnFnI
          source_id: s_Umd39jp26Ki6HaZcJDWFSZ
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第二甲第六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Umd39jp26Ki6HaZcJDWFSZ
            source_type: api_record
            title: 中国历代人物传记资料库：王璇（CBDB 269868）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269868&o=json
            external_identifier: CBDB:269868
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.820Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BGWgef2Z8E8vPL41NM62UK
        status: active
        display_name: 王璇
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_I4u4rSNWBBck4VMQTI4Mjp
        subject_person_id: p_4yGj1H3gVFynqBDVX7MFH7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Ec1dckj7YLUcRUGq2Dbkdc
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MCMYCbZfg2UO-za8aUSk65
          claim_id: c_I4u4rSNWBBck4VMQTI4Mjp
          source_id: s_9AKBa4f5bA2MRFAVm9yroq
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第二甲第六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9AKBa4f5bA2MRFAVm9yroq
            source_type: api_record
            title: 中国历代人物传记资料库：王斌（CBDB 269866）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269866&o=json
            external_identifier: CBDB:269866
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.819Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4yGj1H3gVFynqBDVX7MFH7
        status: active
        display_name: 王斌
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王尚絅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王尚絅 | accepted |
| birth.date | 1478年 | accepted |
| death.date | 1531年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BGWgef2Z8E8vPL41NM62UK | 王璇 | accepted |
| ancestors | p_4yGj1H3gVFynqBDVX7MFH7 | 王斌 | accepted |

## 外部来源

- [中国历代人物传记资料库：王斌（CBDB 269866）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269866&o=json)
- [中国历代人物传记资料库：王尚絅（CBDB 126574）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126574&o=json)
- [中国历代人物传记资料库：王璇（CBDB 269868）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269868&o=json)
