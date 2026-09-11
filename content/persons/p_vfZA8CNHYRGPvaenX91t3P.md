---
schema: wang-person/v1
id: p_vfZA8CNHYRGPvaenX91t3P
status: active
merged_into: null
display_name: 王德
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_d95WdxVmj3VUtiZBvS67b6
        subject_person_id: p_vfZA8CNHYRGPvaenX91t3P
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_piMZpc6wL1MdeunjKpTY3r
          claim_id: c_d95WdxVmj3VUtiZBvS67b6
          source_id: s_i3EJTrgUSXi43vgBkmwbqb
          stance: supports
          locator: CBDB:37768
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37768）
          source: &a1
            id: s_i3EJTrgUSXi43vgBkmwbqb
            source_type: api_record
            title: 中国历代人物传记资料库：王德（CBDB 37768）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37768&o=json
            external_identifier: CBDB:37768
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.247Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_SRuPvLizej3ybzTuv2gygE
        subject_person_id: p_vfZA8CNHYRGPvaenX91t3P
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1087年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WsVBizL7rZNCoSDSBtqcz8
          claim_id: c_SRuPvLizej3ybzTuv2gygE
          source_id: s_i3EJTrgUSXi43vgBkmwbqb
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
        id: c_uHDwDccvg1VN9ZJMCjxngu
        subject_person_id: p_vfZA8CNHYRGPvaenX91t3P
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1154年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qxbEG6a5K9kd4hpGJJe5gt
          claim_id: c_uHDwDccvg1VN9ZJMCjxngu
          source_id: s_i3EJTrgUSXi43vgBkmwbqb
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
        id: c_LxocVPRbG3Ae9CmraNZHoa
        subject_person_id: p_vfZA8CNHYRGPvaenX91t3P
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ejeWJbaz5Yhq8wJHUav217
          claim_id: c_LxocVPRbG3Ae9CmraNZHoa
          source_id: s_i3EJTrgUSXi43vgBkmwbqb
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
        id: c_iBJiZwRcybO-F_v9xFcFKP
        subject_person_id: p_9zMW97J7BAC3TDNz5VbWCT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vfZA8CNHYRGPvaenX91t3P
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OJM1c7iHOQABWVj5_Bu8bp
          claim_id: c_iBJiZwRcybO-F_v9xFcFKP
          source_id: s_Rvhkg7HeRM8H4DfqFM8DBt
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1192;1197：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Rvhkg7HeRM8H4DfqFM8DBt
            source_type: api_record
            title: 中国历代人物传记资料库：王達（CBDB 37796）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37796&o=json
            external_identifier: CBDB:37796
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.255Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9zMW97J7BAC3TDNz5VbWCT
        status: active
        display_name: 王達
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德 | accepted |
| birth.date | 1087年 | accepted |
| death.date | 1154年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_9zMW97J7BAC3TDNz5VbWCT | 王達 | accepted |

## 外部来源

- [中国历代人物传记资料库：王達（CBDB 37796）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37796&o=json)
- [中国历代人物传记资料库：王德（CBDB 37768）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37768&o=json)
