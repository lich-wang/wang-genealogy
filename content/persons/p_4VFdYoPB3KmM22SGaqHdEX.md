---
schema: wang-person/v1
id: p_4VFdYoPB3KmM22SGaqHdEX
status: active
merged_into: null
display_name: 王凝
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_p3tAuTKM8svupPxAZU6BR4
        subject_person_id: p_4VFdYoPB3KmM22SGaqHdEX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王凝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6Pn7tkyMq3a9mpxNuTAfQ8
          claim_id: c_p3tAuTKM8svupPxAZU6BR4
          source_id: s_URuUUgr3PGzhWjN4a4xQsS
          stance: supports
          locator: CBDB:118875
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（118875）
          source: &a1
            id: s_URuUUgr3PGzhWjN4a4xQsS
            source_type: api_record
            title: 中国历代人物传记资料库：王凝（CBDB 118875）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118875&o=json
            external_identifier: CBDB:118875
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.883Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_shPo2qN3fh5g1Je4tWJTV9
        subject_person_id: p_4VFdYoPB3KmM22SGaqHdEX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王凝，史料所见人物。本项目依据《中国历代人物传记资料库：王凝（CBDB 118875）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_U9EW-gOT3xhTd4jpgkUQPe
          claim_id: c_shPo2qN3fh5g1Je4tWJTV9
          source_id: s_URuUUgr3PGzhWjN4a4xQsS
          stance: supports
          locator: CBDB:118875
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
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
        id: c_5Bt9HXrO2_msmI12kq41x_
        subject_person_id: p_4VFdYoPB3KmM22SGaqHdEX
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_EesP14JLF13XTAaSBHr2Ma
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RxvmvoWSVHjH_iI-crXXWA
          claim_id: c_5Bt9HXrO2_msmI12kq41x_
          source_id: s_xOAqRodgEOtaDN5AnMrIXR
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #3069：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_xOAqRodgEOtaDN5AnMrIXR
            source_type: api_record
            title: 中国历代人物传记资料库：李氏(王凝妻)（CBDB 118876）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118876&o=json
            external_identifier: CBDB:118876
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_EesP14JLF13XTAaSBHr2Ma
        status: active
        display_name: 李氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王凝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王凝 | accepted |
| bio.summary | 王凝，史料所见人物。本项目依据《中国历代人物传记资料库：王凝（CBDB 118875）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_EesP14JLF13XTAaSBHr2Ma | 李氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：李氏(王凝妻)（CBDB 118876）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118876&o=json)
- [中国历代人物传记资料库：王凝（CBDB 118875）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118875&o=json)
