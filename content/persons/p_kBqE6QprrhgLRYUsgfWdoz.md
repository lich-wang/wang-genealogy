---
schema: wang-person/v1
id: p_kBqE6QprrhgLRYUsgfWdoz
status: active
merged_into: null
display_name: 王建
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9Vu2EvHJkv3YNoMK7f9HBP
        subject_person_id: p_kBqE6QprrhgLRYUsgfWdoz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王建
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3r6CwHXFdWMQtPq4N4vonN
          claim_id: c_9Vu2EvHJkv3YNoMK7f9HBP
          source_id: s_GVkM3ScQfpkZuNtBgD5koE
          stance: supports
          locator: CBDB:199946
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199946）
          source: &a1
            id: s_GVkM3ScQfpkZuNtBgD5koE
            source_type: api_record
            title: 中国历代人物传记资料库：王建（CBDB 199946）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199946&o=json
            external_identifier: CBDB:199946
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.582Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_fKuw8u6W5xRkDiaGLTB99R
        subject_person_id: p_kBqE6QprrhgLRYUsgfWdoz
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1436年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n5RgHPacjuZU8b3TtgLQBs
          claim_id: c_fKuw8u6W5xRkDiaGLTB99R
          source_id: s_GVkM3ScQfpkZuNtBgD5koE
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
        id: c_czWxaRtoakzMNTNkF8ucjm
        subject_person_id: p_kBqE6QprrhgLRYUsgfWdoz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王建（生于1436年），明人物。明清進士進士，籍贯進賢，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 199946）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qFLsMWYM_PD-kynIQF4YwZ
          claim_id: c_czWxaRtoakzMNTNkF8ucjm
          source_id: s_GVkM3ScQfpkZuNtBgD5koE
          stance: supports
          locator: CBDB:199946
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_YBS6eqPcd0oIPec_B3PPis
        subject_person_id: p_RuSLTh9boFqmMpRBv7wnJ1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kBqE6QprrhgLRYUsgfWdoz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_srFBTifsPbnNuwwf9hAIpb
          claim_id: c_YBS6eqPcd0oIPec_B3PPis
          source_id: s_GVkM3ScQfpkZuNtBgD5koE
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RuSLTh9boFqmMpRBv7wnJ1
        status: active
        display_name: 王子謨
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_bwDPU3tdt7bWFDThlulPfY
        subject_person_id: p_kBqE6QprrhgLRYUsgfWdoz
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_V6qLt7p3ECKTGwiRCVRL1F
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jxFKTszM7ui7sUkOsigVuR
          claim_id: c_bwDPU3tdt7bWFDThlulPfY
          source_id: s_73ksPFJe3sXtxq5gaVPuR1
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第十一名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_73ksPFJe3sXtxq5gaVPuR1
            source_type: api_record
            title: 中国历代人物传记资料库：萬氏(王建妻)（CBDB 251785）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251785&o=json
            external_identifier: CBDB:251785
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_V6qLt7p3ECKTGwiRCVRL1F
        status: active
        display_name: 萬氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_SJydlMO2zncJFmLOAUdFMO
        subject_person_id: p_C1g4JvF6DrkWJiGETqWFZx
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_kBqE6QprrhgLRYUsgfWdoz
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QzYvzwfXfw9YmxvURdZbyj
          claim_id: c_SJydlMO2zncJFmLOAUdFMO
          source_id: s_GVkM3ScQfpkZuNtBgD5koE
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第十一名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_C1g4JvF6DrkWJiGETqWFZx
        status: active
        display_name: 王天麒
        merged_into_person_id: null
    - claim:
        id: c_pXFjDepD5gOSFSBSwKkWLi
        subject_person_id: p_HPaT4GWNxvXDDALDWZMKbD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_kBqE6QprrhgLRYUsgfWdoz
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uAElBjbu7DmsQ2jMgezSoz
          claim_id: c_pXFjDepD5gOSFSBSwKkWLi
          source_id: s_GVkM3ScQfpkZuNtBgD5koE
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第十一名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HPaT4GWNxvXDDALDWZMKbD
        status: active
        display_name: 王仕恭
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王建

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王建 | accepted |
| birth.date | 1436年 | accepted |
| bio.summary | 王建（生于1436年），明人物。明清進士進士，籍贯進賢，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 199946） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_RuSLTh9boFqmMpRBv7wnJ1 | 王子謨 | accepted |
| spouses | p_V6qLt7p3ECKTGwiRCVRL1F | 萬氏 | accepted |
| ancestors | p_C1g4JvF6DrkWJiGETqWFZx | 王天麒 | accepted |
| ancestors | p_HPaT4GWNxvXDDALDWZMKbD | 王仕恭 | accepted |

## 外部来源

- [中国历代人物传记资料库：萬氏(王建妻)（CBDB 251785）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251785&o=json)
- [中国历代人物传记资料库：王建（CBDB 199946）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199946&o=json)
