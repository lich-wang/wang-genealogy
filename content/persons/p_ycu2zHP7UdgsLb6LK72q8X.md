---
schema: wang-person/v1
id: p_ycu2zHP7UdgsLb6LK72q8X
status: active
merged_into: null
display_name: 王宗蕃
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hVRCVs6Ea434c5Xec1tmyP
        subject_person_id: p_ycu2zHP7UdgsLb6LK72q8X
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗蕃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_76St48uLoTjqGBgp1nfyEu
          claim_id: c_hVRCVs6Ea434c5Xec1tmyP
          source_id: s_Xzy8KZSYNAvef82M4W4oHg
          stance: supports
          locator: CBDB:311233
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（311233）
          source: &a1
            id: s_Xzy8KZSYNAvef82M4W4oHg
            source_type: api_record
            title: 中国历代人物传记资料库：王宗蕃（CBDB 311233）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311233&o=json
            external_identifier: CBDB:311233
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.855Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gmcWMspdK2KBs9kQqs22nN
        subject_person_id: p_ycu2zHP7UdgsLb6LK72q8X
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗蕃，明人物。嘉靖二十六年進士，籍贯京山。（中国历代人物传记资料库 CBDB 311233）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VPGqu2GbXb_UxKUFwmB3xF
          claim_id: c_gmcWMspdK2KBs9kQqs22nN
          source_id: s_Xzy8KZSYNAvef82M4W4oHg
          stance: supports
          locator: CBDB:311233
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
  descendants: []
  other: []
---

# 王宗蕃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗蕃 | accepted |
| bio.summary | 王宗蕃，明人物。嘉靖二十六年進士，籍贯京山。（中国历代人物传记资料库 CBDB 311233） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗蕃（CBDB 311233）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311233&o=json)
