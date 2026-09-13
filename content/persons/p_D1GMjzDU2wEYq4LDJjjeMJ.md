---
schema: wang-person/v1
id: p_D1GMjzDU2wEYq4LDJjjeMJ
status: active
merged_into: null
display_name: 王雙鶴
cbdb_id: 522261
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DYbM84B9gVHPBhtqPSa3Bm
        subject_person_id: p_D1GMjzDU2wEYq4LDJjjeMJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雙鶴，史料所见人物。本项目依据《中国历代人物传记资料库：王雙鶴（CBDB 522261）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_rPfqGfezIcfEm4eGxRfIoD
          claim_id: c_DYbM84B9gVHPBhtqPSa3Bm
          source_id: s_BSQRy34apRe9VksZ1WLDVR
          stance: supports
          locator: CBDB:522261
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_BSQRy34apRe9VksZ1WLDVR
            source_type: api_record
            title: 中国历代人物传记资料库：王雙鶴（CBDB 522261）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=522261&o=json
            external_identifier: CBDB:522261
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_27cp1NSzYZGEX1SCJC5Zgq
        subject_person_id: p_D1GMjzDU2wEYq4LDJjjeMJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雙鶴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_rLwL1VXz1945aPwg5QKSk1
          claim_id: c_27cp1NSzYZGEX1SCJC5Zgq
          source_id: s_BSQRy34apRe9VksZ1WLDVR
          stance: supports
          locator: CBDB:522261
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7001-7100）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_kdh8C8pp4T_v1f6w0o3P5s
        subject_person_id: p_nWnvvK3mCHgBPx6MNxbPBC
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_D1GMjzDU2wEYq4LDJjjeMJ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hljcw-ciCbSawaWO9ib-R0
          claim_id: c_kdh8C8pp4T_v1f6w0o3P5s
          source_id: s_PYfj8Ko8WPPJgmRb4BBBiE
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），9215：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_PYfj8Ko8WPPJgmRb4BBBiE
            source_type: api_record
            title: 中国历代人物传记资料库：王崇簡（CBDB 65761）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65761&o=json
            external_identifier: CBDB:65761
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.937Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_nWnvvK3mCHgBPx6MNxbPBC
        status: active
        display_name: 王崇簡
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王雙鶴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王雙鶴，史料所见人物。本项目依据《中国历代人物传记资料库：王雙鶴（CBDB 522261）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王雙鶴 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_nWnvvK3mCHgBPx6MNxbPBC | 王崇簡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇簡（CBDB 65761）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65761&o=json)
- [中国历代人物传记资料库：王雙鶴（CBDB 522261）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=522261&o=json)
