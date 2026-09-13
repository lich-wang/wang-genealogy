---
schema: wang-person/v1
id: p_pMLFQSHfFG2LU4Gm6aFUWD
status: active
merged_into: null
display_name: 王頤孫
cbdb_id: 514244
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TyvBQ1ak5DFQa6d2RLLEm9
        subject_person_id: p_pMLFQSHfFG2LU4Gm6aFUWD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王頤孫，史料所见人物。本项目依据《中国历代人物传记资料库：王頤孫（CBDB 514244）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_Bek1K_D_KED5IS86DNBSbp
          claim_id: c_TyvBQ1ak5DFQa6d2RLLEm9
          source_id: s_ZJP18WxpJDRDvvC37FkP3K
          stance: supports
          locator: CBDB:514244
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_ZJP18WxpJDRDvvC37FkP3K
            source_type: api_record
            title: 中国历代人物传记资料库：王頤孫（CBDB 514244）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=514244&o=json
            external_identifier: CBDB:514244
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:15.776Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_jE6bGTrhHHTUAJira9L54F
        subject_person_id: p_pMLFQSHfFG2LU4Gm6aFUWD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王頤孫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_M6feJjhRN1ZK67uAz718Q4
          claim_id: c_jE6bGTrhHHTUAJira9L54F
          source_id: s_ZJP18WxpJDRDvvC37FkP3K
          stance: supports
          locator: CBDB:514244
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6801-6900）｜历史性依据：CBDB 朝代 = 清
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
        id: c_y1wfmMu-K4EldqTQ8QpmZe
        subject_person_id: p_fYhPRV6epSdj5Hnzj57TC6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_pMLFQSHfFG2LU4Gm6aFUWD
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nDl9ohDPwDNojEmj3388f4
          claim_id: c_y1wfmMu-K4EldqTQ8QpmZe
          source_id: s_4j2jjxfAtAgmNjeAv2sgPb
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），340：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4j2jjxfAtAgmNjeAv2sgPb
            source_type: api_record
            title: 中国历代人物传记资料库：王文韶（CBDB 57121）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57121&o=json
            external_identifier: CBDB:57121
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.783Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fYhPRV6epSdj5Hnzj57TC6
        status: active
        display_name: 王文韶
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王頤孫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王頤孫，史料所见人物。本项目依据《中国历代人物传记资料库：王頤孫（CBDB 514244）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王頤孫 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_fYhPRV6epSdj5Hnzj57TC6 | 王文韶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文韶（CBDB 57121）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57121&o=json)
- [中国历代人物传记资料库：王頤孫（CBDB 514244）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=514244&o=json)
