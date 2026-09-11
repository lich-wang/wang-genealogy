---
schema: wang-person/v1
id: p_3YudnsvevVoW9LZa9U1Dkf
status: active
merged_into: null
display_name: 王珩
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_T4BKMd5ZYQJkGaQVG14Sx5
        subject_person_id: p_3YudnsvevVoW9LZa9U1Dkf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EKb6gWnqX9LseQcv9pLRPE
          claim_id: c_T4BKMd5ZYQJkGaQVG14Sx5
          source_id: s_ucNRbi8DDvTAtts2Fkv2gS
          stance: supports
          locator: CBDB:133908
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（133908）
          source: &a1
            id: s_ucNRbi8DDvTAtts2Fkv2gS
            source_type: api_record
            title: 中国历代人物传记资料库：王珩（CBDB 133908）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=133908&o=json
            external_identifier: CBDB:133908
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.298Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WBqds5xSc9Eco1dMAim5HL
        subject_person_id: p_3YudnsvevVoW9LZa9U1Dkf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珩，清人物。籍贯嘉定，身份为畫家。（中国历代人物传记资料库 CBDB 133908）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gxb_c0H1j8rADWPpDEUZTu
          claim_id: c_WBqds5xSc9Eco1dMAim5HL
          source_id: s_ucNRbi8DDvTAtts2Fkv2gS
          stance: supports
          locator: CBDB:133908
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_W8Bzu7cBUDKSgern7kZNeQ
        subject_person_id: p_ETtkX5L21aLwU1bvPt6vxz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3YudnsvevVoW9LZa9U1Dkf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ygu_HurOtU_s9T7Z7KFZdv
          claim_id: c_W8Bzu7cBUDKSgern7kZNeQ
          source_id: s_ucNRbi8DDvTAtts2Fkv2gS
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1727, HuWenKai #238：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ETtkX5L21aLwU1bvPt6vxz
        status: active
        display_name: 王又白
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_HhLhbmwHpPBxC9reEqeh1o
        subject_person_id: p_3YudnsvevVoW9LZa9U1Dkf
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_G3QDzDNmJP44MSBdFUCnpy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iPuHvTFrITby9w2ftuI1my
          claim_id: c_HhLhbmwHpPBxC9reEqeh1o
          source_id: s_KITuCpd3_XDsw6lazpn5Es
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1727, HuWenKai #238：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_KITuCpd3_XDsw6lazpn5Es
            source_type: api_record
            title: 中国历代人物传记资料库：陸定武（CBDB 133910）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=133910&o=json
            external_identifier: CBDB:133910
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_G3QDzDNmJP44MSBdFUCnpy
        status: active
        display_name: 陸定武
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王珩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珩 | accepted |
| bio.summary | 王珩，清人物。籍贯嘉定，身份为畫家。（中国历代人物传记资料库 CBDB 133908） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ETtkX5L21aLwU1bvPt6vxz | 王又白 | accepted |
| spouses | p_G3QDzDNmJP44MSBdFUCnpy | 陸定武 | accepted |

## 外部来源

- [中国历代人物传记资料库：陸定武（CBDB 133910）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=133910&o=json)
- [中国历代人物传记资料库：王珩（CBDB 133908）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=133908&o=json)
