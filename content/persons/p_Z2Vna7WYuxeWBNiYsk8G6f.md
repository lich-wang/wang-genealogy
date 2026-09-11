---
schema: wang-person/v1
id: p_Z2Vna7WYuxeWBNiYsk8G6f
status: active
merged_into: null
display_name: 王健
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_frm7uK7cYQDTDBbu4eHRRB
        subject_person_id: p_Z2Vna7WYuxeWBNiYsk8G6f
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王健
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cTzcpbh6T2sNoCaQci4GRH
          claim_id: c_frm7uK7cYQDTDBbu4eHRRB
          source_id: s_GiBYHqSyasy8skcnWdgDcE
          stance: supports
          locator: CBDB:203783
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203783）
          source: &a1
            id: s_GiBYHqSyasy8skcnWdgDcE
            source_type: api_record
            title: 中国历代人物传记资料库：王健（CBDB 203783）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203783&o=json
            external_identifier: CBDB:203783
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.800Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_VXLbZiB2Ly7ziZKjiGpPnj
        subject_person_id: p_Z2Vna7WYuxeWBNiYsk8G6f
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1519年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WPRHN7dG5R7s3SyDYCj3Ja
          claim_id: c_VXLbZiB2Ly7ziZKjiGpPnj
          source_id: s_GiBYHqSyasy8skcnWdgDcE
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eDmnBAu57Dinff7di7fHLh
        subject_person_id: p_Z2Vna7WYuxeWBNiYsk8G6f
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
        - id: cs_ZE8D9Bx3mfZ8cujHCkds84
          claim_id: c_eDmnBAu57Dinff7di7fHLh
          source_id: s_GiBYHqSyasy8skcnWdgDcE
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
        id: c_L8cFCmgUi4Yfs4psrL7iHn
        subject_person_id: p_2zGMamGixNkzuUEM2w1ndk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Z2Vna7WYuxeWBNiYsk8G6f
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V_TY4fysz7Cu-Xi_0rtPTg
          claim_id: c_L8cFCmgUi4Yfs4psrL7iHn
          source_id: s_xH1jeJZUyR5BBd58dAhoBu
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第三甲第四十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_xH1jeJZUyR5BBd58dAhoBu
            source_type: api_record
            title: 中国历代人物传记资料库：王璇（CBDB 309958）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309958&o=json
            external_identifier: CBDB:309958
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.832Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2zGMamGixNkzuUEM2w1ndk
        status: active
        display_name: 王璇
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_E-gUYv5xxUHu5RA3h4gMt1
        subject_person_id: p_6odTqDAa4QAHFfyxN1rWGF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Z2Vna7WYuxeWBNiYsk8G6f
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HyzvZu-N0fDZtHexpSktbj
          claim_id: c_E-gUYv5xxUHu5RA3h4gMt1
          source_id: s_jMaGBARtmiyKPDxvRKEaF2
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第三甲第四十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jMaGBARtmiyKPDxvRKEaF2
            source_type: api_record
            title: 中国历代人物传记资料库：王勗（CBDB 309956）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309956&o=json
            external_identifier: CBDB:309956
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.831Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6odTqDAa4QAHFfyxN1rWGF
        status: active
        display_name: 王勗
        merged_into_person_id: null
    - claim:
        id: c_f3I_0PrhiRPO_uJ0zmGd5m
        subject_person_id: p_QJyGeJYeYVZd8WUAKnrsuB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Z2Vna7WYuxeWBNiYsk8G6f
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XJM2Huz5fOuVYFO4VaMBOD
          claim_id: c_f3I_0PrhiRPO_uJ0zmGd5m
          source_id: s_Rv87eJtVNojXPBpMkxhgjT
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第三甲第四十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Rv87eJtVNojXPBpMkxhgjT
            source_type: api_record
            title: 中国历代人物传记资料库：王謐（CBDB 309957）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309957&o=json
            external_identifier: CBDB:309957
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.832Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_QJyGeJYeYVZd8WUAKnrsuB
        status: active
        display_name: 王謐
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王健

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王健 | accepted |
| birth.date | 1519年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2zGMamGixNkzuUEM2w1ndk | 王璇 | accepted |
| ancestors | p_6odTqDAa4QAHFfyxN1rWGF | 王勗 | accepted |
| ancestors | p_QJyGeJYeYVZd8WUAKnrsuB | 王謐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王健（CBDB 203783）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203783&o=json)
- [中国历代人物传记资料库：王謐（CBDB 309957）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309957&o=json)
- [中国历代人物传记资料库：王勗（CBDB 309956）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309956&o=json)
- [中国历代人物传记资料库：王璇（CBDB 309958）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309958&o=json)
