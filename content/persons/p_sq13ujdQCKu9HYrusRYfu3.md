---
schema: wang-person/v1
id: p_sq13ujdQCKu9HYrusRYfu3
status: active
merged_into: null
display_name: 王忠傑
cbdb_id: 120337
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZABh6ZTvpMUc9CDh5KQzsU
        subject_person_id: p_sq13ujdQCKu9HYrusRYfu3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忠傑，史料所见人物。本项目依据《中国历代人物传记资料库：王忠傑（CBDB 120337）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_YI_UInrglSFKT9iIQepqho
          claim_id: c_ZABh6ZTvpMUc9CDh5KQzsU
          source_id: s_pJbTZpVDH3i3cEGMTWcmh7
          stance: supports
          locator: CBDB:120337
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_pJbTZpVDH3i3cEGMTWcmh7
            source_type: api_record
            title: 中国历代人物传记资料库：王忠傑（CBDB 120337）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120337&o=json
            external_identifier: CBDB:120337
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_J6ZH6Cf8cFB5No4cw5kxYZ
        subject_person_id: p_sq13ujdQCKu9HYrusRYfu3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忠傑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_nJB7aFP3CkuD7F1QRnrz8y
          claim_id: c_J6ZH6Cf8cFB5No4cw5kxYZ
          source_id: s_pJbTZpVDH3i3cEGMTWcmh7
          stance: supports
          locator: CBDB:120337
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1901-2000）｜历史性依据：CBDB 朝代 = 清
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
        id: c_MJFyjEVS8MfnU9nABl6Ly2
        subject_person_id: p_sq13ujdQCKu9HYrusRYfu3
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_JzryqY1MDzkCiDFmHTYKiz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3IKELz267tfAw0_Yf9ADkO
          claim_id: c_MJFyjEVS8MfnU9nABl6Ly2
          source_id: s_1SEJPfCPBuZlaqgz-soGfV
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #4063, HuWenKai #338：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1SEJPfCPBuZlaqgz-soGfV
            source_type: api_record
            title: 中国历代人物传记资料库：李湘鸞（CBDB 120330）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120330&o=json
            external_identifier: CBDB:120330
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_JzryqY1MDzkCiDFmHTYKiz
        status: active
        display_name: 李湘鸞
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王忠傑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王忠傑，史料所见人物。本项目依据《中国历代人物传记资料库：王忠傑（CBDB 120337）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王忠傑 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_JzryqY1MDzkCiDFmHTYKiz | 李湘鸞 | accepted |

## 外部来源

- [中国历代人物传记资料库：李湘鸞（CBDB 120330）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120330&o=json)
- [中国历代人物传记资料库：王忠傑（CBDB 120337）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120337&o=json)
