---
schema: wang-person/v1
id: p_G3QDzDNmJP44MSBdFUCnpy
status: active
merged_into: null
display_name: 陸定武
revision: 1
cbdb_id: 133910
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qgDwtjhckg9qSVpHWHTHi3
        subject_person_id: p_G3QDzDNmJP44MSBdFUCnpy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陸定武，史料所见人物。本项目依据《中国历代人物传记资料库：陸定武（CBDB 133910）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0VuBSkjFVieEjv-nxqI8TJ
          claim_id: c_qgDwtjhckg9qSVpHWHTHi3
          source_id: s_KITuCpd3_XDsw6lazpn5Es
          stance: supports
          locator: CBDB:133910
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_6xv8Q_yZbwfbVObaGt7Lu2
        subject_person_id: p_G3QDzDNmJP44MSBdFUCnpy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陸定武
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wKQSsV0NGvriYu5iMpHMys
          claim_id: c_6xv8Q_yZbwfbVObaGt7Lu2
          source_id: s_KITuCpd3_XDsw6lazpn5Es
          stance: supports
          locator: CBDB:133910
          quotation: null
          interpretation_note: CBDB 明确记录的王珩配偶
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
          source: *a1
      object_person:
        id: p_3YudnsvevVoW9LZa9U1Dkf
        status: active
        display_name: 王珩
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 陸定武

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 陸定武，史料所见人物。本项目依据《中国历代人物传记资料库：陸定武（CBDB 133910）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 陸定武 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_3YudnsvevVoW9LZa9U1Dkf | 王珩 | accepted |

## 外部来源

- [中国历代人物传记资料库：陸定武（CBDB 133910）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=133910&o=json)
